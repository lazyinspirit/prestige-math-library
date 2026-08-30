// Step 8 is partitioned by group Alpha (owner, 2026-08-25).
//
// It was one lead Alpha reading every rejection on the level. These tests pin
// the shape of the replacement, and one class-level guard that the old shape
// would have failed.
//
// THE LATENT DEFECT THIS FILE EXISTS FOR. `8-adjudicate` declared
// `pattern: resultPattern('alpha', 'step8-[a-z-]+')` while its plan dispatched
// role `alpha-adjudicate` — a role added 2026-08-24 and never yet run. The
// dispatcher writes `<role>-<label>.result.json`, so the completed adjudication
// would have landed at `alpha-adjudicate-step8-lead.result.json`, which that
// pattern does not match: the stage would have re-dispatched a finished
// six-hour Alpha forever, with an ok:true result sitting on disk. The last test
// here checks every stage's pattern against the result filename its own plan
// produces, so the class cannot come back.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync, readFileSync, rmSync, existsSync, mkdtempSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages } from '../stages/mathlib.mts';
import { MODELS, resolveLineup } from '../../models.mjs';
import { tsxLoader } from '../../paths.mjs';
import { validateCodexOutputSchema } from '../../codex-output-schema.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const stage = (id: string): any => stages.find((s: any) => s.id === id);

test('the step-7 reader output schema is accepted by the dispatcher', () => {
  const schema = JSON.parse(readFileSync(join(REPO, 'briefs/schemas/step8-context.json'), 'utf8'));
  assert.deepEqual(validateCodexOutputSchema(schema), []);
});

/** A throwaway repo holding just the group assignment and the item map, which is
 *  all the step-8 routing hooks read. */
function fixtureRepoWithGroups() {
  const dir = mkdtempSync(join(tmpdir(), 'step8-'));
  mkdirSync(join(dir, 'research'));
  mkdirSync(join(dir, 'tools'));
  // Recovery hooks refresh the derived task files before dispatch. These
  // routing tests need only attest that the refresh happened successfully;
  // step8-scope.mjs itself has integration tests against the real repository.
  writeFileSync(join(dir, 'tools', 'step8-scope.mjs'), 'process.exit(0);\n');
  writeFileSync(join(dir, 'research', 'demo-alpha-groups.json'),
    JSON.stringify([{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]));
  writeFileSync(join(dir, 'research', 'demo-step8-scope.json'),
    JSON.stringify({ by_item: { 'thm-demo-x': 'a', 'thm-demo-y': 'b' } }));
  return dir;
}

// THE STEP-7 PRE-READ (owner, 2026-08-25): the group Alphas are spawned,
// assigned their groups and read their pairs WHILE the judges sweep. These tests
// pin the two properties that make that safe and worth doing — the pre-read
// cannot write, and it is a unit of the sweep's own stage rather than a stage in
// front of it, which is the difference between overlapping the sweep and
// delaying it.
test('the group read is a unit of the sweep stage, not a stage before it', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const s = stage('7-judge');
  const ctx = { run: 'frontier-18', repo: REPO };
  const units = s.units(ctx).map(String);
  assert.ok(units.includes('sweep'), 'the sweep is one unit');
  assert.ok(units.length > 1, 'and every group is another');
  assert.ok(s.concurrency > 1, 'they must be able to run at once, or this is serial after all');
  const plans = s.plan(ctx, units);
  const sweep = plans.find((p: any) => p.role === 'tool');
  const preads = plans.filter((p: any) => p.role === 'alpha-group-read');
  assert.ok(sweep, 'the sweep is still dispatched here');
  assert.equal(preads.length, units.length - 1, 'one reader per group');
  for (const p of preads) {
    assert.ok(s.pattern.test(`${p.role}-${p.label}.result.json`));
    assert.ok(p.outputSchema, 'a read-only role returns its digest through the schema path');
    assert.match(p.resultArtifact, /-step8-context\.json$/);
  }
  assert.ok(s.pattern.test(`${sweep.role}-${sweep.label}.result.json`));
});

test('the step-7 reader cannot write, and it is the kernel that says so', () => {
  const r = spawnSync('node', ['tools/dispatch.mjs', '--check-read-only'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  const line = r.stdout.split('\n').find((l) => l.startsWith('alpha-group-read'));
  assert.ok(line, 'alpha-group-read must appear in the read-only attestation');
  assert.match(line!, /--sandbox read-only \(process-level\)/,
    'a prompt-level instruction is not the guarantee step 7 needs');
});

test('a re-read round is not mistaken for the unit it repairs', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const s = stage('7-judge');
  const started: any[] = [];
  s.onGateFailure({
    ctx: { run: 'frontier-18', repo: REPO },
    executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s, round: 1,
    failure: { id: 'step8-digests', why: 'group c: 2/6 of its own pages read' },
  });
  assert.ok(started.length >= 1, 'a thin digest is re-read, not reported');
  for (const p of started) {
    assert.equal(p.role, 'alpha-group-read', 'and still read-only');
    assert.deepEqual(p.covers, [], 'a repair round manufactures no coverage');
    assert.ok(!s.pattern.test(`${p.role}-${p.label}.result.json`),
      `${p.label} would satisfy the stage's own coverage`);
  }
});

// THE HANDOFF. Step 7's reader and step 8's adjudicator are the SAME
// conversation: read-only while the judges sweep, resumed with write access to
// adjudicate. If the session home is not persistent, or step 8 does not resume
// the id step 7 recorded, the adjudicator is silently a fresh agent working from
// a file — which looks identical in the logs and is the thing this design exists
// to avoid.
test('the step-7 reader keeps a session that step 8 resumes', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const ctx = { run: 'frontier-18', repo: REPO };
  const reader = stage('7-judge').plan(ctx, stage('7-judge').units(ctx).map(String))
    .filter((p: any) => p.role === 'alpha-group-read');
  assert.ok(reader.length, 'there are readers to check');
  for (const p of reader) {
    assert.ok(p.sessionHome, `reader ${p.label} has no persistent session home`);
    assert.match(p.sessionHome, /^\.autopilot\//, 'a session home holds auth and a transcript; it stays out of the repo');
    assert.ok(!p.resumeSession, 'the reader starts the conversation, it does not resume one');
  }
  const homes = new Set(reader.map((p: any) => p.sessionHome));
  assert.equal(homes.size, reader.length, 'two groups sharing a home would resume each other');
});

test('a step-8 adjudicator with no recorded session falls back to a fresh dispatch', () => {
  // The fixture has no dispatch records, so no session exists. The plan must
  // still produce a working dispatch rather than a half-filled resume.
  const repo = fixtureRepoWithGroups();
  const plans = stage('8-adjudicate').plan({ run: 'demo', repo }, ['1', '2']);
  assert.ok(plans.length, 'the stage still plans');
  for (const p of plans) {
    assert.equal(p.resumeSession, undefined, 'never resume an id that was never recorded');
    assert.equal(p.sessionHome, undefined, 'and do not point at a home with nothing in it');
    assert.ok(p.task, 'it works from the rendered file instead');
  }
  rmSync(repo, { recursive: true, force: true });
});

test('8-scope renders the partition before any adjudicator is dispatched', () => {
  const scope = stage('8-scope');
  const adj = stage('8-adjudicate');
  assert.ok(scope, '8-scope must exist');
  assert.ok(stages.indexOf(scope) < stages.indexOf(adj), 'the scope must be rendered first');
  assert.ok(stages.indexOf(stage('8-baseline')) < stages.indexOf(scope),
    'the pre-step8 snapshot is still taken before anything else at step 8');
  // Mechanical: no agent decides who owns which rejection.
  assert.equal(scope.plan({ run: 'demo' })[0].role, 'tool');
});

test('8-scope checks its partition without repeating unchanged judge closure', () => {
  const scope = stage('8-scope');
  assert.ok(!scope.gatesWaived, 'a stage that writes the partition must be checkable');
  const ids = scope.gates({ run: 'demo', repo: REPO }).map((g: any) => g.id);
  assert.ok(ids.includes('step8-scope'), 'the partition must be checked, not just written');
  assert.ok(!ids.includes('judge-closure'),
    '7-judge already proved closure and no item-writing stage intervenes before this render');
  assert.ok(stage('8-adjudicate').gates({ run: 'demo', repo: REPO })
    .some((g: any) => g.id === 'judge-closure'),
  'closure is checked after the first Step-8 stage that can edit mathematics');
});

test('8-adjudicate runs one Alpha per group over the group cohort', () => {
  const s = stage('8-adjudicate');
  assert.ok(s.cohort, 'a group stage advances on its cohort, not on a single batch');
  assert.equal(s.concurrency, 4, 'four groups is the ceiling the alpha cap sets');
  assert.ok(!s.pipeline, 'step 8 is a whole-level barrier: it follows the level-wide sweep');
  const units = s.units({ run: 'demo', repo: REPO });
  assert.ok(Array.isArray(units), 'units are the batches, not the literal "all"');
  assert.ok(!units.includes('all'), 'the single-lead unit is gone');
});

test('Step 8 separates repair integrity, judge retries, and final closure', () => {
  const preflight = stage('8-preflight');
  const rejudge = stage('8-rejudge');
  const close = stage('8-close');
  const final = stage('8-final');
  const freeze = stage('8-freeze');
  assert.ok(stages.indexOf(stage('8-adjudicate')) < stages.indexOf(preflight));
  assert.ok(stages.indexOf(preflight) < stages.indexOf(rejudge));
  assert.ok(stages.indexOf(rejudge) < stages.indexOf(close));
  assert.ok(stages.indexOf(close) < stages.indexOf(final));
  assert.ok(stages.indexOf(final) < stages.indexOf(freeze));
  assert.ok(stages.indexOf(freeze) < stages.indexOf(stage('9-scope')));
  const futureRepo = fixtureRepoWithGroups();
  const futureCtx = { run: 'demo', repo: futureRepo };
  const freezePlan = freeze.plan(futureCtx);
  const step9Plan = stage('9-scope').plan(futureCtx, ['all']);
  assert.equal(freezePlan.filter((p: any) => p.argv?.includes('post-step8')).length, 1,
    '8-freeze must create the Step-9 baseline exactly once');
  assert.equal(step9Plan.filter((p: any) => p.argv?.includes('post-step8')).length, 0,
    '9-scope must consume the frozen baseline, not try to recreate it');

  const judgeGateIds = rejudge.gates(futureCtx).map((g: any) => g.id);
  assert.deepEqual(judgeGateIds, ['step8-guard', 'step8-published', 'judge-closure'],
    'contract/repository repairs cannot consume the two-cycle judge budget');
  assert.equal(rejudge.terminalFixBudget, undefined,
    'the stage-wide repair counter must be re-armable; the durable rejudge-cycle receipt owns the per-item lifetime cap');
  assert.equal(rejudge.maxAttempts, 1, 'a failed funded-lane preflight is not immediately repeated');
  assert.ok(preflight.gates(futureCtx).some((g: any) => g.id === 'proof-contract'));
  assert.ok(close.gates(futureCtx).some((g: any) => g.id === 'proof-contract'));
  assert.ok(!close.gates(futureCtx).some((g: any) => g.id === 'level-coverage'),
    'the full audit receipt is not authored until Step 9');
  assert.deepEqual(final.gates(futureCtx).map((g: any) => g.id),
    ['step8-guard', 'step8-published', 'judge-closure']);
  assert.equal(final.onGateFailure, undefined, 'final currency cannot open a third repair/judge cycle');
  assert.ok(!preflight.terminalFixBudget && !close.terminalFixBudget,
    'non-judge repair rounds have separate budgets');
  rmSync(futureRepo, { recursive: true, force: true });

  const migratedRepo = fixtureRepoWithGroups();
  mkdirSync(join(migratedRepo, '.autopilot'));
  mkdirSync(join(migratedRepo, 'research', 'demo-dispatch'));
  writeFileSync(join(migratedRepo, 'research', 'demo-dispatch', 'tool-rejudge.result.json'),
    JSON.stringify({ run: 'demo', ok: true }));
  writeFileSync(join(migratedRepo, '.autopilot', 'state.json'),
    JSON.stringify({ run: 'demo', stages: { '8-rejudge': { gatesPassedAt: '2026-08-25T00:00:00.000Z' } } }));
  const migrated = close.gates({ run: 'demo', repo: migratedRepo }).map((g: any) => g.id);
  assert.deepEqual(migrated, ['step8-cutover-frozen'],
    'an already-rejudged run uses its explicit frozen migration instead of retroactively inserting work');
  rmSync(migratedRepo, { recursive: true, force: true });
});

test('Step-8 preflight adjudicates existing rejection rows before any rejudge', async () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: ['thm-demo-y'], unadjudicated: ['thm-demo-x'], open_fatal: [], closed: false,
  }));
  const started: any[] = [];
  const s: any = stage('8-preflight');
  await s.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s, round: 1, failure: { id: 'judge-closure', why: 'current rejection awaits adjudication' },
  });
  assert.equal(started.length, 1, 'only the owning group is asked to decide the existing row');
  assert.equal(started[0].role, 'alpha-adjudicate');
  assert.match(started[0].task[0], /step8-recovery\.task\.md$/,
    'an unadjudicated row receives the exact-row recovery brief, not contract-repair instructions');
  assert.ok(!started.some((p) => p.role === 'tool' && p.argv?.includes('tools/judge-sweep.mjs')),
    'preflight must not buy verdicts that the pending repair would immediately stale');
  rmSync(repo, { recursive: true, force: true });
});

test('Step-8 preflight routes unhandled advisory residue in the same repair round', async () => {
  const repo = fixtureRepoWithGroups();
  const started: any[] = [];
  const s: any = stage('8-preflight');
  await s.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s, round: 1,
    failure: {
      id: 'splice-verify', why: 'mechanical receipt is stale',
      advisory: [{ id: 'proof-contract', why: 'ERROR step-entry [thm-demo-y]: exact contract residue' }],
    },
  });
  assert.equal(started.length, 1, 'the advisory item is not deferred behind another full battery');
  assert.equal(started[0].role, 'alpha-adjudicate');
  assert.match(started[0].label, /-b-/);
  rmSync(repo, { recursive: true, force: true });
});

test('Step-8 rejudge dispatches agents for contested rows and tools only for missing verdicts', async () => {
  const repo = fixtureRepoWithGroups();
  const s: any = stage('8-rejudge');
  const runHook = async (closure: any) => {
    writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify(closure));
    const started: any[] = [];
    await s.onGateFailure({
      ctx: { run: 'demo', repo }, executor: { start: (_x: any, p: any) => started.push(p) },
      stage: s, round: 1, failure: { id: 'judge-closure', why: 'not closed' }, prevRoundAt: null,
    });
    return started;
  };
  const contested = await runHook({ needs_rejudge: ['thm-demo-y'], unadjudicated: ['thm-demo-x'], open_fatal: [], closed: false });
  assert.ok(contested.length && contested.every((p) => p.role === 'alpha-adjudicate'));
  const missing = await runHook({ needs_rejudge: ['thm-demo-y'], unadjudicated: [], open_fatal: [], closed: false });
  assert.equal(missing.length, 1);
  assert.equal(missing[0].role, 'tool');
  assert.match(missing[0].argv.join(' '), /step8-rejudge-cycle\.mjs .*--items thm-demo-y/);
  rmSync(repo, { recursive: true, force: true });
});

test('Step-8 rejudge blocks exhausted owed items without stranding eligible page-mates', async () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: ['thm-demo-x', 'thm-demo-y'], unadjudicated: [], open_fatal: [], closed: false,
  }));
  writeFileSync(join(repo, 'research', 'demo-step8-rejudge-cycles.json'), JSON.stringify({
    version: 1, run: 'demo', max_cycles_per_item: 2, cycles: [
      { cycle_id: 'x-1', items: ['thm-demo-x'] },
      { cycle_id: 'x-2', items: ['thm-demo-x'] },
      { cycle_id: 'y-1', items: ['thm-demo-y'] },
    ],
  }));
  const started: any[] = [];
  const blockers: any[] = [];
  const notices: any[] = [];
  const s: any = stage('8-rejudge');
  await s.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: {
      start: (_x: any, p: any) => started.push(p),
      state: { addBlocker: (...args: any[]) => { blockers.push(args); return true; } },
      reporter: { notify: (...args: any[]) => notices.push(args) },
    },
    stage: s, round: 1, failure: { id: 'judge-closure', why: 'not closed' }, prevRoundAt: null,
  });
  assert.equal(blockers.length, 1);
  assert.match(blockers[0][1], /thm-demo-x/);
  assert.equal(notices[0][0], 'blocked');
  assert.equal(started.length, 1);
  assert.match(started[0].argv.join(' '), /--items thm-demo-y(?: |$)/);
  assert.ok(!started[0].argv.join(' ').includes('thm-demo-x'));
  rmSync(repo, { recursive: true, force: true });
});

// Against the live run, because the plan reads the VALIDATED group assignment
// and a fixture would exercise the positional fallback instead — the one thing
// `alphaGroups` documents as deliberately not the answer.
test('every group Alpha at step 8 has its own task file and resumes its reader when recorded', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const s = stage('8-adjudicate');
  const ctx = { run: 'frontier-18', repo: REPO };
  const plans = s.plan(ctx, s.units(ctx).map(String));
  assert.ok(plans.length >= 2, 'more than one adjudicator');
  const labels = new Set(plans.map((p: any) => p.label));
  assert.equal(labels.size, plans.length, 'no two groups share a label, so no two share a result file');
  for (const p of plans) {
    assert.equal(p.role, 'alpha-adjudicate');
    assert.ok(Array.isArray(p.task), 'a per-group file with the generic fallback behind it');
    assert.match(p.task[0], /-alpha-[a-z]+-step8\.task\.md$/);
    assert.ok(p.covers.length, 'each Alpha declares the batches it claims');
    assert.ok(s.pattern.test(`${p.role}-${p.label}.result.json`),
      `the stage pattern must match the result file ${p.role}-${p.label}.result.json`);
  }
  // Disjoint coverage is what makes concurrent appends to the shared
  // adjudication ledger safe.
  const seen = new Set<string>();
  for (const p of plans) for (const c of p.covers) {
    assert.ok(!seen.has(String(c)), `batch ${c} is claimed by two Alphas`);
    seen.add(String(c));
  }
});

// `step8-scope.mjs` resolves the repository from its OWN location, not from
// cwd — deliberately, so a tool cannot be pointed at half a repo. A fixture
// therefore has to be a throwaway RUN inside the real `research/`, cleaned up in
// a finally. That is also the honest test: it exercises the paths the gate
// actually reads.
const check = (run: string) => spawnSync('node', ['tools/step8-scope.mjs', 'check', '--run', run],
  { cwd: REPO, encoding: 'utf8' });

const render = (run: string) => spawnSync('node', ['tools/step8-scope.mjs', 'render', '--run', run],
  { cwd: REPO, encoding: 'utf8' });

function withFixtureRun(files: Record<string, unknown>, body: (run: string) => void) {
  const run = `step8scopetest${process.pid}`;
  const written: string[] = [];
  try {
    for (const [suffix, content] of Object.entries(files)) {
      const p = join(REPO, 'research', `${run}-${suffix}`);
      writeFileSync(p, JSON.stringify(content));
      written.push(p);
    }
    body(run);
  } finally {
    for (const p of written) rmSync(p, { force: true });
  }
}

// A CROSS-GROUP FINDING IS AN ALERT, NOT A NOTE (owner, 2026-08-25). The gate
// already refused to close over an unanswered one, but a gate that blocks and
// dispatches nobody spends a round doing nothing and ends in a blocker — which is
// the opposite of alerting the group that has to act.
test('an unanswered cross-group finding re-dispatches the owning group', async () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-step8-alerts.json'),
    JSON.stringify({ version: 1, run: 'demo', alerts: [{
      alert_id: 's8a-demo', source: 'step7-read', from_group: 'a',
      item: 'thm-demo-y', owning_group: 'b', finding: 'the dependency statement is false',
    }] }));
  const started: any[] = [];
  const s8: any = stage('8-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s8, round: 1, failure: { id: 'step8-scope', why: 'cross-group finding on `thm-y` has no adjudication row' },
  });
  assert.equal(started.length, 1, 'exactly the owning group is alerted');
  assert.equal(started[0].label, 'cross-group-b-round-1');
  assert.deepEqual(started[0].covers, []);
  rmSync(repo, { recursive: true, force: true });
});

test('a cross-group finding the owning group has answered dispatches nobody', async () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-step8-alerts.json'),
    JSON.stringify({ version: 1, run: 'demo', alerts: [{
      alert_id: 's8a-demo', source: 'step7-read', from_group: 'a',
      item: 'thm-demo-y', owning_group: 'b', finding: 'the dependency statement is false',
    }] }));
  writeFileSync(join(repo, 'research', 'demo-step8-alert-decisions.jsonl'),
    `${JSON.stringify({ version: 1, alert_id: 's8a-demo', from_group: 'a', owning_group: 'b',
      item: 'thm-demo-y', outcome: 'nonfatal', rationale: 'The target statement remains valid under its written hypotheses.', at: new Date().toISOString() })}\n`);
  const started: any[] = [];
  const s8: any = stage('8-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s8, round: 1, failure: { id: 'step8-scope', why: 'something else' },
  });
  assert.equal(started.length, 0, 'an answered finding must not re-dispatch its group');
  rmSync(repo, { recursive: true, force: true });
});

// A PUBLISHED REPAIR IS ROUTED TO THE CONFIGURED JUDGE (owner, 2026-08-25). The
// closure receipt is computed over the RUN's scope, so a published item is never
// in it — without the union below the repair ships to a live page unjudged.
test('a repaired published item is swept even though closure never names it', () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: ['thm-demo-x'], unadjudicated: [], open_fatal: [], closed: false,
  }));
  writeFileSync(join(repo, 'research', 'demo-step8-published-repairs.jsonl'), [
    JSON.stringify({ kind: 'repaired', id: 'lem-published-thing', group: 'a', found_via: 'thm-demo-x', pre_sha256: 'f'.repeat(64), defect: 'x', correction_basis: 'y' }),
    JSON.stringify({ kind: 'escalated', id: 'lem-needs-owner', group: 'a', found_via: 'thm-demo-x', why: 'needs a reading-order change' }),
  ].join('\n') + '\n');
  const s: any = stage('8-rejudge');
  const argv = s.plan({ run: 'demo', repo })[0].argv.join(' ');
  assert.match(argv, /--items [^ ]*thm-demo-x/);
  assert.match(argv, /lem-published-thing/, 'the repaired published item must be in the sweep');
  assert.ok(!argv.includes('lem-needs-owner'), 'an escalated row was never edited, so there is nothing to rejudge');
  rmSync(repo, { recursive: true, force: true });
});

test('a rejected published repair returns to its originating group even after run closure', async () => {
  const repo = fixtureRepoWithGroups();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], open_fatal: [], closed: true,
  }));
  writeFileSync(join(repo, 'research', 'demo-step8-published-closure.json'), JSON.stringify({
    repaired: ['lem-published-thing'],
    needs_rejudge: [],
    unadjudicated_rows: [{
      id: 'lem-published-thing', model: 'gpt-5.6-terra', context_sha256: 'a'.repeat(64),
    }],
    open_fatal: [],
    escalations: [],
  }));
  writeFileSync(join(repo, 'research', 'demo-step8-published-repairs.jsonl'),
    `${JSON.stringify({ kind: 'repaired', id: 'lem-published-thing', group: 'a',
      found_via: 'thm-demo-x', pre_sha256: 'f'.repeat(64), defect: 'false bound', correction_basis: 'direct calculation' })}\n`);
  const started: any[] = [];
  const s: any = stage('8-rejudge');
  await s.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_x: any, plan: any) => started.push(plan) },
    stage: s,
    round: 1,
    failure: { id: 'step8-published', why: 'published rejection awaits adjudication' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].role, 'alpha-adjudicate');
  assert.match(started[0].label, /-a-/,
    'published work is routed to the group that made and understands the repair');
  rmSync(repo, { recursive: true, force: true });
});

test('step8-guard licenses a published repair, and only a well-formed one', () => {
  const run = `step8guardtest${process.pid}`;
  const ledger = join(REPO, 'research', `${run}-published-repairs.jsonl`);
  try {
    // A row with no correction_basis is not a licence: it records that something
    // changed, not that the replacement is right.
    writeFileSync(ledger, `${JSON.stringify({ kind: 'repaired', id: 'lem-x', group: 'a', found_via: 'thm-y', pre_sha256: 'a'.repeat(64), defect: 'was false' })}\n`);
    const r = spawnSync('node', ['tools/step8-guard.mjs',
      '--touches', 'research/does-not-exist.json', '--baseline', 'pre-step8',
      '--judge-ledger', `research/${run}-missing-judge.jsonl`,
      '--adjudications', `research/${run}-published-repairs.jsonl`,
      '--scope', `research/${run}-missing-scope.json`,
      '--published-repairs', `research/${run}-published-repairs.jsonl`],
    { cwd: REPO, encoding: 'utf8' });
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /correction_basis|touch ledger|not found/i);
  } finally {
    rmSync(ledger, { force: true });
  }
});

function installPublishedJudgeSession(run: string) {
  const pair = 'free-groups-and-presentations';
  const plan = JSON.parse(readFileSync(join(REPO, 'research', 'plan-spec.json'), 'utf8'));
  const page = plan.pages.find((candidate: any) => candidate.id === pair);
  assert.ok(page?.items?.length, `test pair ${pair} must exist in plan-spec.json`);
  const foundVia = page.items[0].id;
  const sessionId = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';
  const sessionRoot = join(REPO, '.autopilot', 'sessions', run);
  const sessionHome = join(sessionRoot, 'judge', pair);
  mkdirSync(sessionHome, { recursive: true });
  writeFileSync(join(sessionHome, 'judge-session.json'), `${JSON.stringify({
    version: 1, pair, model: MODELS.terra.id, session_id: sessionId,
  }, null, 2)}\n`);
  return { foundVia, pair, sessionId, sessionRoot };
}

test('step8-scope published refuses retired-lineup-only evidence', () => {
  const run = `step8pubtest${process.pid}`;
  const { foundVia, sessionRoot } = installPublishedJudgeSession(run);
  const files = [
    [`${run}-step8-published-repairs.jsonl`, `${JSON.stringify({ kind: 'repaired', id: 'lem-cauchy-bounded', group: 'a', found_via: foundVia, pre_sha256: 'a'.repeat(64), defect: 'd', correction_basis: 'c' })}\n`],
    [`${run}-judge.jsonl`, `${JSON.stringify({ id: 'lem-cauchy-bounded', model: 'gpt-5.6-terra', context_sha256: 'abc', keep: true })}\n`],
  ];
  try {
    for (const [name, body] of files) writeFileSync(join(REPO, 'research', name), body);
    const r = spawnSync('node', ['tools/step8-scope.mjs', 'published', '--run', run], { cwd: REPO, encoding: 'utf8' });
    assert.notEqual(r.status, 0, 'a retired judge row is not current certification');
    assert.match(`${r.stdout}${r.stderr}`, /lacks a current verdict from gpt-5\.6-terra/);
  } finally {
    for (const [name] of files) rmSync(join(REPO, 'research', name), { force: true });
    rmSync(join(REPO, 'research', `${run}-judge-context-hashes.json`), { force: true });
    rmSync(sessionRoot, { recursive: true, force: true });
  }
});

test('step8-scope published refuses a stale configured-model verdict', () => {
  const run = `step8pubstaletest${process.pid}`;
  const { foundVia, pair, sessionId, sessionRoot } = installPublishedJudgeSession(run);
  const { models } = resolveLineup();
  const files = [
    [`${run}-step8-published-repairs.jsonl`, `${JSON.stringify({ kind: 'repaired', id: 'lem-cauchy-bounded', group: 'a', found_via: foundVia, pre_sha256: 'a'.repeat(64), defect: 'd', correction_basis: 'c' })}\n`],
    [`${run}-judge.jsonl`, models.map((model) => JSON.stringify({
      id: 'lem-cauchy-bounded', model, context_sha256: 'stale', item_sha256: 'b'.repeat(64), keep: true,
      session_pair: pair, session_id: sessionId,
    })).join('\n') + '\n'],
  ];
  try {
    for (const [name, body] of files) writeFileSync(join(REPO, 'research', name), body);
    const r = spawnSync('node', ['tools/step8-scope.mjs', 'published', '--run', run], { cwd: REPO, encoding: 'utf8' });
    assert.notEqual(r.status, 0, 'a stale configured-model row is not current certification');
    assert.match(`${r.stdout}${r.stderr}`, /lacks a current verdict/);
  } finally {
    for (const [name] of files) rmSync(join(REPO, 'research', name), { force: true });
    rmSync(join(REPO, 'research', `${run}-judge-context-hashes.json`), { force: true });
    rmSync(sessionRoot, { recursive: true, force: true });
  }
});

test('step8-scope published accepts the configured model set on the current text', () => {
  const run = `step8pubcurrenttest${process.pid}`;
  const id = 'lem-cauchy-bounded';
  const { foundVia, pair, sessionId, sessionRoot } = installPublishedJudgeSession(run);
  const built = spawnSync(process.execPath,
    ['--import', tsxLoader(), 'tools/judge.mts', `items/${id}.md`, '--context-hash'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
  assert.equal(built.status, 0, built.stderr);
  const hash = JSON.parse(built.stdout);
  const { models } = resolveLineup();
  const files = [
    [`${run}-step8-published-repairs.jsonl`, `${JSON.stringify({ kind: 'repaired', id, group: 'a', found_via: foundVia, pre_sha256: 'a'.repeat(64), defect: 'd', correction_basis: 'c' })}\n`],
    [`${run}-judge.jsonl`, models.map((model) => JSON.stringify({
      id, model, context_sha256: hash.context_sha256, item_sha256: hash.item_sha256, keep: true,
      session_pair: pair, session_id: sessionId,
    })).join('\n') + '\n'],
  ];
  try {
    for (const [name, body] of files) writeFileSync(join(REPO, 'research', name), body);
    const r = spawnSync('node', ['tools/step8-scope.mjs', 'published', '--run', run], { cwd: REPO, encoding: 'utf8' });
    assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
    assert.match(r.stdout, /1 published item\(s\) repaired and judged by the configured model set/);
  } finally {
    for (const [name] of files) rmSync(join(REPO, 'research', name), { force: true });
    rmSync(join(REPO, 'research', `${run}-judge-context-hashes.json`), { force: true });
    rmSync(sessionRoot, { recursive: true, force: true });
  }
});

test('step8-scope published passes with no repairs at all', () => {
  const r = spawnSync('node', ['tools/step8-scope.mjs', 'published', '--run', `nosuchrun${process.pid}`],
    { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 0, 'a run that repaired nothing published is not a failure');
  assert.match(r.stdout, /0 published item\(s\) repaired/);
});

test('step8-scope published makes owner escalation a hard blocker and writes its receipt', () => {
  const run = `step8pubescalation${process.pid}`;
  const ledger = join(REPO, 'research', `${run}-step8-published-repairs.jsonl`);
  const receipt = join(tmpdir(), `${run}-closure.json`);
  try {
    writeFileSync(ledger, `${JSON.stringify({
      kind: 'escalated', id: 'lem-owner-change', group: 'a', found_via: 'thm-demo-x',
      why: 'The correction requires a reading-order change reserved to the owner.',
    })}\n`);
    const r = spawnSync('node', ['tools/step8-scope.mjs', 'published', '--run', run, '--out', receipt],
      { cwd: REPO, encoding: 'utf8' });
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /escalated to the owner and unresolved/);
    assert.equal(JSON.parse(readFileSync(receipt, 'utf8')).escalations.length, 1,
      'the blocker remains machine-readable for routing and reporting');
  } finally {
    rmSync(ledger, { force: true });
    rmSync(receipt, { force: true });
  }
});

test('step8-scope check fails on an unrendered partition', () => {
  const r = check(`step8scopeabsent${process.pid}`);
  assert.notEqual(r.status, 0, 'a missing scope file is a failure, not a pass');
  assert.match(`${r.stdout}${r.stderr}`, /has not rendered the partition/);
});

test('step7 scope renders before the judge ledger exists', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo-a', kind: 'A', title: 'Demo', category: 'demo', order: 1,
      items: [{ id: 'thm-demo-one', kind: 'theorem', title: 'Demo theorem' }],
      requires: [],
    }],
  }, (run) => {
    const generated = [
      'step8-scope.json', 'step8-alerts.json', 'alpha-a-step8.task.md',
      'alpha-a-step8-recovery.task.md', 'alpha-a-step8-preflight.task.md',
      'alpha-a-step8-close.task.md', 'alpha-a-step7-read.task.md',
    ].map((suffix) => join(REPO, 'research', `${run}-${suffix}`));
    try {
      const r = render(run);
      assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
      assert.match(r.stdout, /0 open rejection\(s\) partitioned/);
      const scope = JSON.parse(readFileSync(generated[0], 'utf8'));
      assert.deepEqual(scope.groups[0].rejections, []);
      assert.match(readFileSync(generated[2], 'utf8'),
        /defect_type` to exactly one of\s+`logic`, `dependency_citation`, or `other`/,
        'rendered adjudication tasks must name the validator\'s closed defect-type vocabulary');
      assert.match(readFileSync(generated[3], 'utf8'),
        /defect_type` to exactly one of\s+`logic`, `dependency_citation`, or `other`/,
        'rendered recovery tasks must preserve the same defect-type vocabulary');
      const checked = check(run);
      assert.equal(checked.status, 0, `${checked.stdout}${checked.stderr}`);
      assert.match(checked.stdout, /1 item\(s\) partitioned/);
    } finally {
      for (const p of generated) rmSync(p, { force: true });
    }
  });
});

test('step8-scope check fails when the rendered scope disagrees with the assignment', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1', '2'] }],
    'step8-scope.json': {
      groups: [{ label: 'a', batches: ['1'], task: 'research/nonexistent.task.md', pages: ['p'], items: ['i'] }],
      by_item: {},
    },
  }, (run) => {
    const r = check(run);
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /re-render/,
      'the message must say the render is stale, not merely that something is wrong');
  });
});

test('step8-scope check fails on a group whose task file was never written', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'step8-scope.json': {
      groups: [{ label: 'a', batches: ['1'], task: 'research/nonexistent.task.md', pages: ['p'], items: ['i'] }],
      by_item: {},
    },
  }, (run) => {
    const r = check(run);
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /does not exist/);
  });
});

test('step8 digest coverage is an exact inventory, not a self-attested count', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo',
      items: [{ id: 'thm-demo-one' }, { id: 'lem-demo-two' }],
      requires: [],
    }],
    'alpha-a-step8-context.json': {
      group: 'a',
      pages_read: ['page-demo'],
      items_read: 2,
      seams_checked: [],
      conventions: ['Definitions are stated before dependent theorems.'],
      load_bearing: ['thm-demo-one'],
      concerns: [],
      alerts: [],
    },
  }, (run) => {
    const command = () => spawnSync('node', ['tools/step8-scope.mjs', 'digests', '--run', run],
      { cwd: REPO, encoding: 'utf8' });
    const oldShape = command();
    assert.notEqual(oldShape.status, 0);
    assert.match(`${oldShape.stdout}${oldShape.stderr}`, /exact id array, not a self-attested count/);
    writeFileSync(join(REPO, 'research', `${run}-alpha-a-step8-context.json`), JSON.stringify({
      group: 'a',
      pages_read: ['page-demo'],
      items_read: ['thm-demo-one', 'lem-demo-two'],
      seams_checked: [],
      conventions: ['Definitions are stated before dependent theorems.'],
      load_bearing: ['thm-demo-one'],
      concerns: [],
      alerts: [],
    }));
    const exact = command();
    assert.equal(exact.status, 0, `${exact.stdout}${exact.stderr}`);
    assert.match(exact.stdout, /2 item\(s\) opened/);
  });
});

test('the live run renders a scope every group can act on', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const r = spawnSync('node', ['tools/step8-scope.mjs', 'check', '--run', 'frontier-18'],
    { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.match(r.stdout, /item\(s\) partitioned/);
});

// THE CLASS GUARD. A stage that cannot recognise its own result file re-runs a
// completed agent forever, and nothing else in the engine notices: the dispatch
// exits zero, the result is written, coverage stays empty. Checked for every
// stage whose plan is derivable without a live run.
test('every stage pattern matches the result file its own plan produces', () => {
  const ctx = { run: 'frontier-18', repo: REPO };
  const checked: string[] = [];
  for (const s of stages as any[]) {
    if (!s.pattern || !s.plan || !s.units) continue;
    const pattern = typeof s.pattern === 'function' ? s.pattern(ctx) : s.pattern;
    let plans: any[];
    // Each stage's OWN units. A fixed list would hand `1-scaffold` the unit
    // `all`, which is not one of its units, and the guard would report a
    // mismatch that cannot occur.
    try { plans = s.plan(ctx, s.units(ctx).map(String)) ?? []; } catch { continue; }
    for (const p of plans) {
      if (!p?.role || !p?.label) continue;
      // A mechanical rider is exempt: `9-scope` plans a `tool` snapshot in front
      // of its Alpha so the ordering is guaranteed, and that snapshot is
      // deliberately not what satisfies an agent stage's coverage.
      if (p.role === 'tool' && !pattern.source.startsWith('^tool-')) continue;
      assert.ok(pattern.test(`${p.role}-${p.label}.result.json`),
        `stage ${s.id}: pattern ${pattern} does not match ${p.role}-${p.label}.result.json`);
      checked.push(s.id);
    }
  }
  assert.ok(checked.length > 5, `too few stages checked (${checked.length}) — the guard went vacuous`);
});
