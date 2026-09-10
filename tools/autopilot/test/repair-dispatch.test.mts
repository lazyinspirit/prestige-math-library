// A repair dispatch is a dispatch: same input resolution, same identity rules.
// Step-3 owner holds and decision recovery are covered by scaffold-final.test.mts.
//
// WHY. The 5a-adjudicate repair loop's first live firing burned all three rounds
// without launching a single agent: hook-started dispatches bypass the plan
// loop where brief/task candidate arrays were resolved, so dispatch.mjs
// received a comma-joined ARRAY as --task and died on its usage check —
// twelve failed dispatches, then repair-exhausted, on a gate failure whose
// receipt was correct and specific. And the hook dispatched one anonymous
// lane per insufficient PAGE — same prompt, covers [], no identity — so two
// pages in one batch meant two writers on one batch's files. These tests pin
// the fixes: resolution lives on start()'s path, and the hook dispatches one
// lane per owning BATCH with the batch as its cover.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync, utimesSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  stages,
  dispatchSourceScouts,
  mechanicalRepair,
  MECHANICAL_REPAIRS,
} from '../stages/mathlib.mts';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

function fixtureRepo() {
  const dir = mkdtempSync(join(tmpdir(), 'repair-'));
  mkdirSync(join(dir, 'research'));
  mkdirSync(join(dir, '.autopilot'));
  writeFileSync(join(dir, 'research', 'demo-generic.task.md'), 'generic\n');
  // mechanicalRepair and the gates share one convention: tool paths resolve
  // against ctx.repo. The fixture honours it rather than restating the tools.
  symlinkSync(join(REPO, 'tools'), join(dir, 'tools'));
  symlinkSync(join(REPO, 'briefs'), join(dir, 'briefs'));
  return dir;
}

function executorAt(repo: string) {
  const config: any = { repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'], dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {}, adoptCommand: false, dispatchStaggerMs: 0 };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const adapter = makeExecAdapter({ argv: ['true'], cwd: repo });
  return new Executor({ config, stages, adapter, state, reporter });
}

test('URL transport failure preserves source coverage instead of reharvesting', async () => {
  const repo = fixtureRepo();
  try {
    writeFileSync(join(repo, 'research', 'demo-url-liveness.json'), JSON.stringify({ rows: [
      { url: 'https://example.org/notes.pdf', ok: false, status: 0, error: 'curl: (56) Recv failure: Connection reset by peer' },
    ] }));
    const result = await mechanicalRepair({ ctx: { repo, run: 'demo' }, failure: { id: 'url-liveness' } });
    assert.equal(result.outcome, 'outage');
    assert.match(result.reason ?? '', /preserve reviewed sources/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('resolveInput picks the first existing candidate, else names the last', () => {
  const repo = fixtureRepo();
  const ex = executorAt(repo);
  const ctx: any = { repo };
  assert.equal(
    ex.resolveInput(['research/demo-missing.task.md', 'research/demo-generic.task.md'], ctx),
    'research/demo-generic.task.md');
  assert.equal(
    ex.resolveInput(['research/demo-a.task.md', 'research/demo-b.task.md'], ctx),
    'research/demo-b.task.md');
  assert.equal(ex.resolveInput('research/demo-generic.task.md', ctx), 'research/demo-generic.task.md');
  assert.equal(ex.resolveInput(undefined, ctx), undefined);
  rmSync(repo, { recursive: true, force: true });
});

test('a hook-started dispatch with no existing input becomes a blocker, not a spawn', () => {
  const repo = fixtureRepo();
  const ex = executorAt(repo);
  const s3: any = stages.find((s: any) => s.id === '5a-adjudicate');
  ex.start(s3, {
    role: 'beta', label: 'scaffold-fix-1-b9', job: 'scaffolding', covers: ['9'],
    brief: 'research/demo-absent-brief.md',
    task: ['research/demo-absent.task.md'],
    timeout: 60,
  } as any);
  assert.equal(ex.inflight.size, 0, 'nothing may spawn on a missing input');
  assert.ok(ex.state.data.blockers.some((b: any) => /missing input file/.test(b.message)),
    'the miss must surface as a blocker');
  rmSync(repo, { recursive: true, force: true });
});

test('stale scope-decision rows have a mechanical refresh', () => {
  const argv = MECHANICAL_REPAIRS['scope-decisions']({ run: 'demo', repo: '/tmp/library' } as any);
  assert.deepEqual(argv, ['tools/scope-decisions.mjs', 'refresh',
    '--run', 'demo', '--all', '--root', '/tmp/library']);
});

test('Step-7 preflight routes contract residue without spending a judge round', async () => {
  // A fatal repair rewrites a proof; the rewritten proof recomputes its risk
  // tier. The first live step 7 came back critical-risk with no risk_review
  // and the hook, handling only open fatals, spent the round doing nothing.
  const repo = groupedFixture();
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-preflight');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'risk-report', why: 'risk-review-missing [thm-demo-x]' },
  });
  assert.equal(started.length, 1, 'the failure must dispatch, not fall through');
  const p = started[0];
  assert.equal(p.label, 'step7-preflight-a-1');
  assert.deepEqual(p.task, ['research/demo-7-preflight-repair-envelope-1-a.task.md']);
  const envelope = readFileSync(join(repo, p.task[0]), 'utf8');
  assert.match(envelope, /"id": "risk-report"/);
  assert.match(envelope, /"id": "thm-demo-x"/);
  assert.match(envelope, /"scope": "run"/);
  assert.match(envelope, /risk-review-missing \[thm-demo-x\]/, 'full gate output/why is in the dispatch task');
  assert.equal(p.role, 'alpha-adjudicate');
  rmSync(repo, { recursive: true, force: true });
});

test('Step-7 repair envelopes retain every failure and split run/published tuples by owner', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: ['thm-demo-x'],
    unadjudicated_rows: [{ id: 'thm-demo-x', model: 'gpt-5.6-terra', context_sha256: 'a'.repeat(64) }],
    open_fatal: [], open_fatal_rows: [], closed: false,
  }));
  writeFileSync(join(repo, 'research', 'demo-step7-published-repairs.jsonl'), `${JSON.stringify({
    kind: 'repaired', id: 'lem-published-y', group: 'b', found_via: 'thm-demo-y',
  })}\n`);
  writeFileSync(join(repo, 'research', 'demo-step7-published-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated_rows: [], open_fatal: ['lem-published-y'],
    open_fatal_rows: [{ id: 'lem-published-y', model: 'gpt-5.6-terra', context_sha256: 'b'.repeat(64) }],
    escalations: [],
  }));
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '7-preflight');
  await stage.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => started.push(plan) },
    stage, round: 2,
    failure: {
      id: 'judge-closure', output: 'PRIMARY full output [thm-demo-x]', why: 'primary summary',
      advisory: [{ id: 'step7-published', stage: '7-preflight', output: 'ADVISORY full output `lem-published-y`', why: 'advisory summary' }],
    },
  });
  assert.deepEqual(started.map((plan) => plan.label).sort(), ['step7-preflight-a-2', 'step7-preflight-b-2']);
  const byLabel = new Map(started.map((plan) => [plan.label, readFileSync(join(repo, plan.task[0]), 'utf8')]));
  for (const text of byLabel.values()) {
    assert.match(text, /PRIMARY full output/);
    assert.match(text, /ADVISORY full output/);
    assert.match(text, /"id": "judge-closure"/);
    assert.match(text, /"id": "step7-published"/);
  }
  assert.match(byLabel.get('step7-preflight-a-2')!, /"id": "thm-demo-x"[\s\S]*?"scope": "run"/);
  assert.doesNotMatch(byLabel.get('step7-preflight-a-2')!, /"id": "lem-published-y"[\s\S]*?"status": "open_fatal"/);
  assert.match(byLabel.get('step7-preflight-b-2')!, /"id": "lem-published-y"[\s\S]*?"scope": "published"/);
  assert.match(byLabel.get('step7-preflight-b-2')!, /"context_sha256": "b{64}"/);
  rmSync(repo, { recursive: true, force: true });
});

test('contract residue cannot consume rejudge budget and is routed at Step-7 close', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], open_fatal: [], closed: true,
  }));
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '7-rejudge');
  await stage.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => started.push(plan) },
    stage, round: 1, failure: { id: 'risk-report', why: 'risk-review-missing [thm-demo-x]' },
  });
  assert.equal(started.length, 0, 'rejudge owns mathematical currency only');
  const close: any = stages.find((candidate: any) => candidate.id === '7-preflight');
  await close.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => started.push(plan) },
    stage: close, round: 1, failure: { id: 'risk-report', why: 'risk-review-missing [thm-demo-x]' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'step7-preflight-a-1');
  assert.equal(started[0].role, 'alpha-adjudicate');
  assert.deepEqual(started[0].task, ['research/demo-7-preflight-repair-envelope-1-a.task.md']);
  const envelope = readFileSync(join(repo, started[0].task[0]), 'utf8');
  assert.match(envelope, /"id": "risk-report"/);
  assert.match(envelope, /"scope": "run"/);
  rmSync(repo, { recursive: true, force: true });
});

test('Step-7 repair removes mechanically handled owners and serializes unknown scope', async () => {
  for (const stageId of ['7-preflight']) {
    const repo = groupedFixture();
    writeFileSync(join(repo, 'tools', 'splice-plan.mjs'), 'process.exit(0);\n');
    writeFileSync(join(repo, 'tools', 'manifest-deps.mjs'),
      'console.error("ERROR invalid-deps [thm-demo-y]"); process.exit(1);\n');
    const stage: any = stages.find((s: any) => s.id === stageId);
    const started: any[] = [];
    const ctx = { run: 'demo', repo };
    const executor = { start: (_s: any, plan: any) => started.push(plan) };
    await stage.onGateFailure({ ctx, executor, stage, round: 1, failure: {
      id: 'splice-verify', output: '[thm-demo-x]', advisory: [
        { id: 'manifest-deps', output: 'ERROR invalid-deps [thm-demo-y]' },
        { id: 'risk-report', output: 'ERROR risk-review-missing [thm-demo-y]' },
      ],
    } });
    assert.equal(started.length, 1);
    assert.match(started[0].label, /-b-1$/);
    const before = stage.repairFingerprint(ctx);
    writeFileSync(join(repo, 'research', 'demo-step7-alert-decisions.jsonl'), '{"decision":"updated"}\n');
    assert.notEqual(stage.repairFingerprint(ctx), before, 'cognitive decisions rearm repair');
    started.length = 0;
    await stage.onGateFailure({ ctx, executor, stage, round: 2, failure: {
      id: 'risk-report', output: 'ERROR risk-review-missing [lem-unowned-fixture]',
    } });
    assert.equal(started.length, 1);
    assert.match(started[0].label, /review/);
    rmSync(repo, { recursive: true, force: true });
  }
});

test('preflight retains original fatal licences after live rejection closure; frozen close does not', async () => {
  const repo = groupedFixture();
  const row = { id: 'thm-demo-x', model: 'gpt-5.6-terra', context_sha256: 'a'.repeat(64),
    item_sha256: 'b'.repeat(64), outcome: 'confirmed_fatal' };
  const put = (suffix: string, value: any) => writeFileSync(join(repo, 'research', `demo-${suffix}`), JSON.stringify(value) + '\n');
  put('judge.jsonl', { ...row, keep: false });
  put('judge-adjudications.jsonl', row);
  put('touches.json', { snapshots: [{ label: 'pre-step7', hashes: { 'thm-demo-x': 'b'.repeat(16) } }] });
  for (const id of ['7-preflight']) {
    const stage: any = stages.find((s: any) => s.id === id);
    const plans: any[] = [];
    await stage.onGateFailure({ ctx: { run: 'demo', repo }, stage, round: 1,
      executor: { start: (_s: any, p: any) => plans.push(p) },
      failure: { id: 'rendercheck', output: 'ERROR rendering [thm-demo-x]' } });
    const text = readFileSync(join(repo, plans[0].task[0]), 'utf8');
    const envelope = JSON.parse(text.match(/```json\n([\s\S]*?)\n```/)![1]);
    assert.deepEqual(envelope.live_tuples, []);
    assert.deepEqual(envelope.fatal_repair_licences, id === '7-preflight' ? [row] : []);
  }
  rmSync(repo, { recursive: true, force: true });
});

test('passing risk inventory does not expand the Step-7 repair assignment', async () => {
  const repo = groupedFixture();
  const stage: any = stages.find((s: any) => s.id === '7-preflight');
  const plans: any[] = [];
  await stage.onGateFailure({ ctx: { run: 'demo', repo }, stage, round: 1,
    executor: { start: (_s: any, p: any) => plans.push(p) }, failure: {
      id: 'risk-report', output: 'ORDINARY 1 [thm-demo-y] no signals\nERROR risk-review-missing [thm-demo-x]: review required',
    } });
  assert.deepEqual(plans.map(p => p.label), ['step7-preflight-a-1']);
  const text = readFileSync(join(repo, plans[0].task[0]), 'utf8');
  const envelope = JSON.parse(text.match(/```json\n([\s\S]*?)\n```/)![1]);
  assert.deepEqual(envelope.assigned_items.map((r: any) => r.id), ['thm-demo-x']);
  assert.match(readFileSync(join(repo, envelope.full_evidence), 'utf8'), /thm-demo-y/);
  rmSync(repo, { recursive: true, force: true });
});

test('Step-7 close routes boundary-audit item summaries to their exact owners', async () => {
  const repo = groupedFixture();
  const started: any[] = [];
  const close: any = stages.find((candidate: any) => candidate.id === '7-preflight');
  await close.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => started.push(plan) },
    stage: close, round: 1,
    failure: {
      id: 'boundary-audit',
      why: 'Every line above is a candidate for a human read, not a verdict.',
      output: [
        'TEMPLATE REUSE — 2 cluster(s) at or above 3 members.',
        '  3 rows · axes: empty, zero',
        '    items: thm-demo-x',
        '  3 rows · axes: degenerate, one',
        '    items: thm-demo-y',
      ].join('\n'),
    },
  });
  assert.deepEqual(started.map((plan) => plan.label).sort(), ['step7-preflight-a-1', 'step7-preflight-b-1']);
  for (const plan of started) {
    const envelope = readFileSync(join(repo, plan.task[0]), 'utf8');
    assert.match(envelope, /"assigned_items": \[\s*\{/);
    assert.doesNotMatch(plan.label, /review/);
  }
  rmSync(repo, { recursive: true, force: true });
});

test('step 7 routes exact unadjudicated closure rows to one narrow recovery Alpha', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [],
    unadjudicated: ['thm-demo-x'],
    unadjudicated_rows: [
      { id: 'thm-demo-x', model: 'gpt-5.6-terra', context_sha256: 'abc123' },
      { id: 'thm-demo-x', model: 'gpt-5.6-terra', context_sha256: 'abc123' },
    ],
    open_fatal: [],
    closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '1 unadjudicated' },
  });
  assert.equal(started.length, 1, 'the closure omission must dispatch immediately');
  assert.equal(started[0].label, 'adjudicate-closure-recovery-a-1');
  assert.equal(started[0].role, 'alpha-adjudicate');
  assert.equal(started[0].job, 'adjudication');
  assert.deepEqual(started[0].covers, [], 'recovery cannot manufacture stage coverage');
  assert.deepEqual(started[0].task, [
    'research/demo-alpha-a-step7-recovery.task.md',
    'briefs/tasks/alpha-step7-closure-recovery.md',
  ]);
  rmSync(repo, { recursive: true, force: true });
});

test('7-adjudicate routes step7-guard ids and full output instead of burning an empty round', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: ['thm-demo-x', 'thm-demo-y'], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: [], open_fatal_rows: [], closed: false,
  }));
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '7-adjudicate');
  await stage.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => started.push(plan) },
    stage, round: 1,
    failure: {
      id: 'step7-guard', why: 'two unlicensed edits',
      output: [
        'ERROR nonfatal-edit: thm-demo-x: changed without a confirmed_fatal licence',
        'ERROR nonfatal-edit: thm-demo-y: changed without a confirmed_fatal licence',
      ].join('\n'),
    },
  });
  assert.deepEqual(started.map((plan) => plan.label).sort(), ['step7-guard-a-round-1', 'step7-guard-b-round-1']);
  for (const plan of started) {
    const envelope = readFileSync(join(repo, plan.task[0]), 'utf8');
    assert.match(envelope, /"id": "step7-guard"/);
    assert.match(envelope, /changed without a confirmed_fatal licence/);
    assert.match(envelope, /restore the pre-Step-7 mathematics/);
  }
  assert.match(readFileSync(join(repo, started.find((plan) => /-a-/.test(plan.label)).task[0]), 'utf8'),
    /"assigned_items": \[[\s\S]*?"id": "thm-demo-x"/);
  assert.match(readFileSync(join(repo, started.find((plan) => /-b-/.test(plan.label)).task[0]), 'utf8'),
    /"assigned_items": \[[\s\S]*?"id": "thm-demo-y"/);
  const unscoped: any[] = [];
  await stage.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_s: any, plan: any) => unscoped.push(plan) },
    stage, round: 2, failure: { id: 'step7-guard', why: 'guard output was unreadable', output: 'FAIL' },
  });
  assert.equal(unscoped.length, 1, 'even malformed guard output gets one exact diagnostic dispatch, never an empty round');
  assert.equal(unscoped[0].label, 'step7-guard-review-round-2');
  rmSync(repo, { recursive: true, force: true });
});

// STEP 7 IS PARTITIONED BY GROUP (owner, 2026-08-25), and the repair rounds are
// partitioned with it: an open fatal goes back to the group Alpha holding that
// batch's conventions, not to whichever lane is free. An empty fan-out would be
// a spent round that dispatched nothing, so even an unknown id is routed loudly
// to the current groups and then rejected by the scope gate.
function groupedFixture() {
  const repo = fixtureRepo();
  // Scope refresh is covered by step7-groups.test against the real tool. These
  // routing tests supply an already-current fixture scope and keep refresh
  // local so the tool's deliberate own-repository anchoring cannot read the
  // main checkout for a throwaway run.
  rmSync(join(repo, 'tools'), { recursive: true, force: true });
  mkdirSync(join(repo, 'tools'));
  writeFileSync(join(repo, 'tools', 'step7-scope.mjs'), 'process.exit(0);\n');
  writeFileSync(join(repo, 'research', 'demo-alpha-groups.json'), JSON.stringify([
    { label: 'a', covers: ['1', '2'] },
    { label: 'b', covers: ['3'] },
  ]));
  writeFileSync(join(repo, 'research', 'demo-step7-scope.json'), JSON.stringify({
    run: 'demo',
    groups: [{ label: 'a', batches: ['1', '2'] }, { label: 'b', batches: ['3'] }],
    by_item: { 'thm-demo-x': 'a', 'thm-demo-y': 'b', 'thm-demo-z': 'a' },
  }));
  return repo;
}

test('unlicensed page warnings return to the owner without buying an item judge call', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-step7-alerts.json'), JSON.stringify({ alerts: [
    { alert_id: 'page-warning', item: 'page-demo', owning_group: 'a', from_group: 'a', source: 'step6-read' },
  ] }));
  writeFileSync(join(repo, 'research', 'demo-step7-alert-decisions.jsonl'), JSON.stringify({
    alert_id: 'page-warning', outcome: 'confirmed_fatal_unlicensed',
  }) + '\n');
  const stage: any = stages.find((s: any) => s.id === '7-adjudicate');
  const started: any[] = [];
  await stage.onGateFailure({ ctx: { run: 'demo', repo }, stage, round: 1,
    executor: { start: (_s: any, p: any) => started.push(p) }, failure: { id: 'step7-scope' } });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'cross-group-a-round-1');
  assert.equal(started[0].role, 'alpha-adjudicate');
  rmSync(repo, { recursive: true, force: true });
});

test('step 7 routes an open fatal back to the group that owns the item', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: ['thm-demo-y'], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '1 open fatal' },
  });
  assert.equal(started.length, 1, 'only the owning group is dispatched');
  assert.equal(started[0].label, 'repair-8-b-round-1');
  assert.ok(!/^step7-/.test(started[0].label), 'a repair must not match the stage result pattern');
  assert.equal(started[0].task[0], 'research/demo-alpha-b-step7.task.md');
  rmSync(repo, { recursive: true, force: true });
});

test('step 7 fans a repair out to every group that owns one of the fatals', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: ['thm-demo-x', 'thm-demo-y', 'thm-demo-z'], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '3 open fatal' },
  });
  assert.deepEqual(started.map((p: any) => p.label).sort(),
    ['repair-8-a-round-1', 'repair-8-b-round-1'],
    'one lane per owning group, not one per item and not one for the level');
  rmSync(repo, { recursive: true, force: true });
});

test('a fatal on an item the scope does not know falls to every group, never to none', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: ['thm-minted-at-step-nine'], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '1 open fatal' },
  });
  assert.deepEqual(started.map((p: any) => p.label).sort(),
    ['repair-8-a-round-1', 'repair-8-b-round-1'],
    'an unowned fatal is loud, not lost');
  rmSync(repo, { recursive: true, force: true });
});

test('closure recovery is routed per group and keeps the recovery brief', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [],
    unadjudicated: ['thm-demo-x'],
    unadjudicated_rows: [{ id: 'thm-demo-x', model: 'gpt-5.6-terra', context_sha256: 'abc123' }],
    open_fatal: [], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '1 unadjudicated' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'adjudicate-closure-recovery-a-1');
  // The rendered group file leads, but the shared recovery brief must remain in
  // the list: candidate resolution takes the first that EXISTS, and a stale or
  // missing render must not cost the reconstruction instructions.
  assert.deepEqual(started[0].task, [
    'research/demo-alpha-a-step7-recovery.task.md',
    'briefs/tasks/alpha-step7-closure-recovery.md',
  ]);
  rmSync(repo, { recursive: true, force: true });
});

test('step 7 still routes open fatals to repair when no adjudication row is missing', async () => {
  const repo = groupedFixture();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: ['thm-demo-x'], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '7-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 2,
    failure: { id: 'judge-closure', why: '1 open fatal' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'repair-8-a-round-2');
  assert.equal(started[0].job, 'authoring');
  rmSync(repo, { recursive: true, force: true });
});

test('a prompt file carrying an identity placeholder blocks before any spawn', () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-poisoned.task.md'), 'the grammar example says (order <n>)\n');
  const ex = executorAt(repo);
  const s3: any = stages.find((s: any) => s.id === '5a-adjudicate');
  ex.start(s3, {
    role: 'beta', label: 'scaffold-fix-1-b4', job: 'scaffolding', covers: ['4'],
    brief: 'research/demo-generic.task.md',
    task: ['research/demo-poisoned.task.md'],
    timeout: 60,
  } as any);
  assert.equal(ex.inflight.size, 0, 'a poisoned prompt must not spawn');
  assert.ok(ex.state.data.blockers.some((b: any) => b.message.includes('<n>') && b.message.includes('demo-poisoned')),
    'the blocker names the token and the file');
  rmSync(repo, { recursive: true, force: true });
});

test('contract detector and structural failures reach one complete repair assignment', async () => {
  const repo = fixtureRepo();
  try {
    const stage: any = stages.find((s: any) => s.id === '5a-adjudicate');
    const started: any[] = [];
    await stage.onGateFailure({ ctx: { run: 'demo', repo }, stage, round: 1,
      executor: { start: (_s: any, plan: any) => started.push(plan) },
      failure: { id: 'boundary-audit', advisory: [{ id: 'citation-fidelity' }, { id: 'proof-contract' }] } });
    assert.equal(started.length, 1);
    assert.equal(started[0].job, 'adjudication');
    const evidence = JSON.parse(readFileSync(join(repo, 'research/demo-5a-adjudicate-gate-batch-1.json'), 'utf8'));
    assert.deepEqual(evidence.failures.map((entry: any) => entry.id), ['boundary-audit', 'citation-fidelity', 'proof-contract']);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('boundary-audit respects an Alpha-upheld row and reports it', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ba-'));
  mkdirSync(join(dir, 'items'));
  writeFileSync(join(dir, 'items', 'fs-two-things-are-equivalent.md'),
    '---\nid: fs-two-things-are-equivalent\nkind: false-statement\n---\n\n## Statement\n\nThe two categories are equivalent for every monad.\n\n## Refutation\n\nStep 1.1: the free-monoid monad refutes it.\n');
  // the tool's real shape: {contracts: {<id>: {boundaries: [{case, status, reason}]}}}
  const boundary: any = { case: 'iff-forward', status: 'not_applicable', reason: 'equivalent names the categorical predicate under refutation' };
  const contract: any = { contracts: { 'fs-two-things-are-equivalent': { boundaries: [boundary] } } };
  const cPath = join(dir, 'c.proof-contracts.json');
  const runBA = () => spawnSync(process.execPath,
    [join(REPO, 'tools', 'boundary-audit.mjs'), cPath, '--items-dir', join(dir, 'items'), '--fail-on-contradicted'],
    { encoding: 'utf8' });
  // unreviewed: the detector flags it and --fail-on-contradicted fails
  writeFileSync(cPath, JSON.stringify(contract));
  const r1 = runBA();
  assert.equal(r1.status, 1, r1.stdout);
  // upheld with a concrete reason: reported, not failed
  boundary.reviewed = { upheld: true, by: 'contract-audit-1', reason: 'fs- item refutes a categorical equivalence; there is no logical biconditional whose directions need separate checks.' };
  writeFileSync(cPath, JSON.stringify(contract));
  const r2 = runBA();
  assert.equal(r2.status, 0, r2.stdout);
  assert.match(r2.stdout, /UPHELD BY REVIEW — 1 row/);
  // a thin uphold reason does not count
  boundary.reviewed.reason = 'fine';
  writeFileSync(cPath, JSON.stringify(contract));
  assert.equal(runBA().status, 1, 'a templated/thin uphold must not clear the gate');
  rmSync(dir, { recursive: true, force: true });
});

test('the judge tools agree on the configured lineup', () => {
  // Two hash normalisations under one field name; two prompt systems for one
  // role; two gate tables — divergent copies are this repo's oldest defect
  // class. The lineup map lives in three files; an unknown JUDGE_LINEUP makes
  // each print its valid keys, so the maps are compared by asking the tools.
  const invocations: Array<[string, string[]]> = [
    ['tools/judge-sweep.mjs', ['--ledger', '/tmp/x', '--cost', '/tmp/y', '--pages', 'p']],
    ['tools/level-coverage.mjs', ['--judge-only', '--verify-current-context', '--judge-ledger', '/tmp/x', '/tmp/nope-batch-1.pages.json']],
  ];
  for (const [tool, args] of invocations) {
    const r = spawnSync(process.execPath, [join(REPO, tool), ...args],
      { cwd: REPO, encoding: 'utf8', env: { ...process.env, JUDGE_LINEUP: '__nope__' }, timeout: 60_000 });
    const out = `${r.stdout}\n${r.stderr}`;
    assert.match(out, /terra/, `${tool} lost the Terra lineup`);
  }
});

// A URL-LIVENESS FAILURE MUST BE ROUTABLE. On frontier-16 the stage-1 sweep
// failed on a CiteSeerX citation whose host sends an incomplete certificate
// chain; `url-recover-apply` found no snapshot and reported
// `ERROR recover-apply-unrecoverable: <url>`. The router read only
// `source-fetch-check`'s `fetch-check-*: <page>:` format, found no page,
// returned false, and the stage threw — burning a repair round and heading for
// a blocker that needs a person, for the exact case `beta-source-scout` exists
// to answer. The URL is in the coverage files; mapping it to a batch is
// mechanical.
test('a url-recover-apply failure routes a scout to the batch that cites the URL', () => {
  const repo = fixtureRepo();
  const url = 'https://example.edu/document?doi=abc&repid=rep1&type=pdf';
  writeFileSync(join(repo, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({
    pages: [{ page: 'oscillatory-examples', sources: [{ url, kind: 'monograph', title: 'A Monograph', contents: [] }] }],
  }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    run: 'demo', pages: [{ id: 'oscillatory-examples', kind: 'A', batch: '4' }],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  // HTML-escaped, as the blocker message carries it — the raw report is not.
  const stderr = `ERROR recover-apply-unrecoverable: ${url.replace(/&/g, '&amp;')}`;
  const routed = dispatchSourceScouts({ ctx: { run: 'demo', repo }, executor, stage: s1, round: 1, stderr });
  assert.equal(routed, true, 'the scout could not be routed — the stage would throw');
  assert.equal(started.length, 1);
  assert.deepEqual(started[0].covers, ['4']);
  assert.equal(started[0].job, 'scouting');
  assert.match(started[0].task[0], /beta-source-scout\.task\.md$/);
  rmSync(repo, { recursive: true, force: true });
});

test('a stderr naming no known URL and no page still refuses to guess', () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({ pages: [] }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({ run: 'demo', pages: [] }));
  const executor = { start: () => { throw new Error('must not dispatch'); } };
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  const routed = dispatchSourceScouts({
    ctx: { run: 'demo', repo }, executor, stage: s1, round: 1,
    stderr: 'ERROR something-else: https://unknown.example/never-cited.pdf',
  });
  assert.equal(routed, false, 'an unmappable failure must stay a blocker, not pick a batch');
  rmSync(repo, { recursive: true, force: true });
});

test('Step 1 consolidates all failures into an owner hold without launching a repair', async () => {
  const repo = fixtureRepo();
  try {
    const s1: any = stages.find((s: any) => s.id === '1-scaffold');
    const result = await s1.onHold({
      ctx: { run: 'demo', repo }, stage: s1,
      executor: { start: () => assert.fail('unexpected repair agent') },
      failure: { id: 'coverage-1', output: 'missing disposition', advisory: [
        { id: 'source-fetch-check', output: 'unread source' },
        { id: 'content-policy-scaffold', output: 'missing prerequisite' },
      ] },
    });
    assert.match(result.owner.reason, /step1-blockers.json/);
    const packet = JSON.parse(readFileSync(join(repo, 'research/demo-step1-blockers.json'), 'utf8'));
    assert.deepEqual(packet.failures.map((x: any) => x.id),
      ['coverage-1', 'source-fetch-check', 'content-policy-scaffold']);
    assert.equal(s1.perItemFixBudget, undefined);
    assert.equal(s1.repairFingerprint, undefined);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

// A MECHANICAL REPAIR KEYED TO AN ADVISORY GATE MUST STILL RUN. The battery
// stops at its first failure and runs the rest read-only so that ONE battery
// names every failure — that is what `failure.advisory` is for. But the repair
// hook read only `failure.id`, so a repair belonging to an advisory gate was
// starved behind whichever gate happened to fail first, for every round the
// stage had. On frontier-16 `url-liveness` failed on one unreachable citation
// while `source-fetch-check` failed advisory on 28 sources whose repair —
// fetch the bodies and stamp them — is deterministic and sits in the table.
// It was never attempted across five batteries and two rounds; the run
// exhausted its budget and blocked with a repair it owned, untried.
test('a mechanical repair keyed to an advisory gate is attempted, not starved', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({ pages: [] }));
  const out = await mechanicalRepair({
    ctx: { run: 'demo', repo },
    // The PRIMARY gate has no table entry; the ADVISORY one does.
    failure: { id: 'validate-plan', why: '', advisory: [{ id: 'source-fetch-check', why: '' }] },
  });
  assert.notEqual(out.outcome, 'unhandled',
    'the advisory gate has a mechanical repair and it must be attempted');
  rmSync(repo, { recursive: true, force: true });
});

test('no failing gate with a table entry is still unhandled', async () => {
  const repo = fixtureRepo();
  const out = await mechanicalRepair({
    ctx: { run: 'demo', repo },
    failure: { id: 'validate-plan', why: '', advisory: [{ id: 'prosecheck', why: '' }] },
  });
  assert.equal(out.outcome, 'unhandled');
  rmSync(repo, { recursive: true, force: true });
});

// `validate-plan` IS step 4's business. Its `undeclared-prereq` finding — an
// item whose deps reach a page outside its own page's requires closure — is
// exactly what the step-4 Alpha adjudicates, and the task file has said so all
// along. The hook returned on its first line for any gate but splice-refusals,
// so on frontier-16 three rounds were spent in ninety seconds dispatching
// nothing over 23 findings across all 11 pages. A gate with no route to its
// fixer does not read as unrouted; it reads as exhausted, which is worse
// because it looks like the repair was tried.
test('a validate-plan failure at step 4 dispatches the adjudicating Alpha', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-alpha-step4.task.md'), 'adjudicate\n');
  // The class is read by RE-RUNNING validate-plan, not from the failure text —
  // `why` is the gate's last line ("FAIL") and `output` a truncated tail, so
  // matching either decided this by whichever lines landed in the slice. The
  // fixture therefore has to produce the class for real: `low-page`'s item
  // depends on an item owned by `dep-page`, which it does not declare.
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [
      { order: 0.5, id: 'dep-page', kind: 'A', requires: [], items: [{ id: 'def-t' }] },
      { order: 1, id: 'low-page', kind: 'A', requires: [], items: [{ id: 'def-a', deps: ['def-t'] }] },
    ],
  }, null, 2));
  const started: any[] = [];
  const s4: any = stages.find((s: any) => s.id === '4-splice');
  await s4.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s4, round: 1,
    failure: { id: 'validate-plan', why: 'FAIL' },
  });
  assert.equal(started.length, 1, 'validate-plan must route to the step-4 Alpha, not fall through');
  assert.equal(started[0].role, 'alpha');
  assert.equal(started[0].job, 'adjudication');
  assert.match(started[0].task[0], /alpha-step4\.task\.md$/);
  rmSync(repo, { recursive: true, force: true });
});

test('a gate step 4 does not own still falls through without dispatching', async () => {
  const repo = fixtureRepo();
  const s4: any = stages.find((s: any) => s.id === '4-splice');
  await s4.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: () => { throw new Error('must not dispatch'); } },
    stage: s4, round: 1,
    failure: { id: 'manifest-integrity', why: '' },
  });
  rmSync(repo, { recursive: true, force: true });
});

// `--update` is the splice's REFRESH and the tool accepts it only per batch:
// `(update && !batch)` is a usage error. The splice-verify entry was
// `--all --fail-on-refusal`, which treats a differing page as a hard error and
// refuses to overwrite — so it could never clear the drift the gate reports.
// frontier-16 spent three rounds on it after the 5a Alphas repaired items in
// four pages of batch 1.
test('the splice-verify repair updates per batch, because --update needs --batch', () => {
  const repo = fixtureRepo();
  for (const b of ['1', '4']) writeFileSync(join(repo, 'research', `demo-batch-${b}.pages.json`), '[]');
  const cmds = MECHANICAL_REPAIRS['splice-verify']({ run: 'demo', repo }) as string[][];
  assert.ok(Array.isArray(cmds[0]), 'several commands, one per batch');
  assert.equal(cmds.length, 2);
  for (const c of cmds) {
    assert.ok(c.includes('--update'), 'the refresh is --update');
    assert.ok(c.includes('--batch'), '--update without --batch is a usage error');
    assert.ok(!c.includes('--all'), '--all cannot carry --update');
  }
  assert.deepEqual(cmds.map((c) => c[c.indexOf('--batch') + 1]), ['1', '4']);
  rmSync(repo, { recursive: true, force: true });
});

// The review stage enumerated three gate ids and fell through for everything else, so a
// failure that HAS a mechanical repair burned rounds dispatching nothing.
test('step 5a includes unresolved mechanical residue in the repair envelope', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-batch-1.pages.json'), '[]');
  const s5: any = stages.find((s: any) => s.id === '5a-adjudicate');
  // splice-verify has a table entry: it must be repaired, never dispatched to
  // the contract-audit Alpha, which is for candidate detector reads.
  const mechanicalPlans: any[] = [];
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => mechanicalPlans.push(p) },
    stage: s5, round: 1,
    failure: { id: 'splice-verify', why: '' },
  });
  assert.equal(mechanicalPlans.length, 1);
  assert.match(readFileSync(join(repo, 'research/demo-5a-adjudicate-gate-batch-1.json'), 'utf8'), /Mechanical residue/);
  // and a detector failure still routes to the Alpha
  const started: any[] = [];
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s5, round: 1,
    failure: { id: 'citation-fidelity', why: '' },
  });
  assert.equal(started.length, 1);
  assert.match(readFileSync(join(repo, started[0].task), 'utf8'), /boundary\/citation candidates/);
  rmSync(repo, { recursive: true, force: true });
});

// An edge decision reaches the same lane wherever it surfaces. A 5a Alpha
// repairing an item under its step-5 licence can introduce a dependency its
// page does not declare, long after the splice — frontier-16 did, once, at
// step 3, and it fell through for want of a route.
test('step 5a routes an undeclared-prereq to the edge-adjudication lane', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-alpha-step4.task.md'), 'adjudicate\n');
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [
      { order: 0.5, id: 'dep-page', kind: 'A', requires: [], items: [{ id: 'def-t' }] },
      { order: 1, id: 'low-page', kind: 'A', requires: [], items: [{ id: 'def-a', deps: ['def-t'] }] },
    ],
  }, null, 2));
  const started: any[] = [];
  const s5: any = stages.find((s: any) => s.id === '5a-adjudicate');
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s5, round: 1,
    failure: { id: 'validate-plan', why: 'FAIL' },
  });
  assert.equal(started.length, 1, 'the edge must reach a lane, not fall through');
  assert.equal(started[0].job, 'adjudication');
  assert.match(readFileSync(join(repo, started[0].task), 'utf8'), /alpha-step5-edge\.md/);
  rmSync(repo, { recursive: true, force: true });
});

test('step 5a routes a validate-plan failure of another class to gate adjudication', async () => {
  // BEHAVIOUR CHANGED 2026-08-24, deliberately. This asserted that a
  // non-edge validate-plan failure reached the BLOCKER path untouched, which is
  // what the old three-id allow-list did with every unnamed gate. frontier-18
  // produced three blockers of that shape in one run — depcheck, rendercheck and
  // content-policy-items — all adjudicable from disk. A gate failure is a
  // finding; it now goes to an Alpha, whose task is explicit that narrowing a
  // detector to clear a run is never its call.
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [{ order: 1, id: 'solo', kind: 'A', requires: [], items: [{ id: 'def-a' }] }],
  }, null, 2));
  const s5: any = stages.find((s: any) => s.id === '5a-adjudicate');
  const started: any[] = [];
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, d: any) => started.push(d) },
    stage: s5, round: 1,
    failure: { id: 'validate-plan', why: 'FAIL' },
  });
  assert.equal(started.length, 1, 'an unrouted gate failure must reach an Alpha, not a bare return');
  assert.equal(started[0].role, 'alpha');
  assert.equal(started[0].job, 'adjudication');
  assert.equal(started[0].label, 'gate-batch-1-all');
  assert.match(readFileSync(join(repo, 'research/demo-5a-adjudicate-gate-batch-1.json'), 'utf8'), /validate-plan/);
  rmSync(repo, { recursive: true, force: true });
});

test('an unknown gate id still reaches an Alpha — the route is a default, not a list', () => {
  // The property that matters: no enumeration of "failures worth routing",
  // because such a list is always one entry short of the next incident.
  const s5: any = stages.find((s: any) => s.id === '5a-adjudicate');
  const started: any[] = [];
  return s5.onGateFailure({
    ctx: { run: 'demo', repo: fixtureRepo() },
    executor: { start: (_s: any, d: any) => started.push(d) },
    stage: s5, round: 2,
    failure: { id: 'some-gate-invented-next-year', why: 'FAIL' },
  }).then(() => {
    assert.equal(started.length, 1);
    assert.equal(started[0].label, 'gate-batch-2-all');
  });
});

// SPAWN STAGGER (owner, 2026-08-24). Caps say how many agents may run; the
// stagger says how fast they may boot. Without it a stage fans out to its cap
// in one millisecond — frontier-18's step 3 started four Alphas inside 80ms —
// so twelve Betas would open their first API connection simultaneously, which
// is the shape that produces a 429 stampede and a lane of null verdicts.
//
// The delay lives in `start`, AFTER the synchronous inflight registration, so a
// staggered spawn still counts against the cap the moment it is decided. These
// tests pin that ordering: a regression that moved the wait into the fan-out
// loop would leave the engine free to over-dispatch during the gap.
test('the spawn stagger spaces dispatches and is per-engine, not per-stage', async () => {
  const repo = fixtureRepo();
  const config: any = {
    repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'],
    dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {},
    adoptCommand: false, dispatchStaggerMs: 40,
  };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const spawnedAt: number[] = [];
  const adapter: any = { invoke: async () => { spawnedAt.push(Date.now()); return { ok: true, code: 0 }; } };
  const ex = new Executor({ config, stages, adapter, state, reporter });

  const stage: any = { id: 'x', label: 'x', units: () => ['1'], pattern: /never/ };
  const plan = (label: string) => ({ role: 'beta', label, job: 'scaffolding', covers: [label] });
  const t0 = Date.now();
  for (const l of ['a', 'b', 'c']) ex.start(stage, plan(l) as any);

  // Registration is synchronous: all three count against the cap immediately,
  // before any of them has spawned.
  assert.equal(ex.inflight.size, 3, 'inflight must be populated before the waits elapse');
  assert.equal(spawnedAt.length, 0, 'nothing may spawn in the same tick as its registration');

  await Promise.all([...ex.inflight.values()].map((d: any) => d.promise));
  assert.equal(spawnedAt.length, 3);
  // First is immediate; each later one waits at least one full interval more.
  assert.ok(spawnedAt[1] - t0 >= 35, `second spawn too early: ${spawnedAt[1] - t0}ms`);
  assert.ok(spawnedAt[2] - t0 >= 75, `third spawn too early: ${spawnedAt[2] - t0}ms`);
  rmSync(repo, { recursive: true, force: true });
});

test('dispatchStaggerMs 0 disables the wait entirely', async () => {
  const repo = fixtureRepo();
  const config: any = {
    repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'],
    dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {},
    adoptCommand: false, dispatchStaggerMs: 0,
  };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const spawnedAt: number[] = [];
  const adapter: any = { invoke: async () => { spawnedAt.push(Date.now()); return { ok: true, code: 0 }; } };
  const ex = new Executor({ config, stages, adapter, state, reporter });
  const stage: any = { id: 'x', label: 'x', units: () => ['1'], pattern: /never/ };
  const t0 = Date.now();
  for (const l of ['a', 'b', 'c']) {
    ex.start(stage, { role: 'beta', label: l, job: 'scaffolding', covers: [l] } as any);
  }
  await Promise.all([...ex.inflight.values()].map((d: any) => d.promise));
  assert.equal(spawnedAt.length, 3);
  assert.ok(spawnedAt[2] - t0 < 200, `expected no pacing, took ${spawnedAt[2] - t0}ms`);
  rmSync(repo, { recursive: true, force: true });
});
