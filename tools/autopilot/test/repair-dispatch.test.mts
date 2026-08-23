// A repair dispatch is a dispatch: same input resolution, same identity rules.
//
// WHY. The 3-recheck repair loop's first live firing burned all three rounds
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
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages, dispatchSourceScouts, mechanicalRepair, MECHANICAL_REPAIRS } from '../stages/mathlib.mts';
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
  return dir;
}

function executorAt(repo: string) {
  const config: any = { repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'], dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {}, adoptCommand: false };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const adapter = makeExecAdapter({ argv: ['true'], cwd: repo });
  return new Executor({ config, stages, adapter, state, reporter });
}

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
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
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

test('the scaffold-fix hook dispatches one lane per owning batch, batch as cover', async () => {
  const repo = fixtureRepo();
  // receipt: three insufficient pages across TWO batches
  writeFileSync(join(repo, 'research', 'demo-scaffold-closure.json'), JSON.stringify({
    insufficient: ['page-x', 'page-y', 'page-z'],
    work: [],
  }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    pages: [
      { id: 'page-x', kind: 'A', batch: '4' },
      { id: 'page-y', kind: 'A', batch: '4' },
      { id: 'page-z', kind: 'A', batch: '6' },
    ],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 1,
    failure: { id: 'scaffold-verdicts', why: '' },
  });
  assert.equal(started.length, 2, 'two batches own the three pages');
  assert.deepEqual(started.map((p) => p.covers).sort(), [['4'], ['6']]);
  assert.deepEqual(started.map((p) => p.label).sort(), ['scaffold-fix-1-b4', 'scaffold-fix-1-b6']);
  for (const p of started) {
    assert.ok(Array.isArray(p.task), 'candidates stay an array; start() resolves them');
    assert.equal(p.job, 'scaffolding');
  }
  rmSync(repo, { recursive: true, force: true });
});

test('a step-8 contract-audit failure routes to a risk-review Alpha, not a no-op round', async () => {
  // A fatal repair rewrites a proof; the rewritten proof recomputes its risk
  // tier. The first live step 8 came back critical-risk with no risk_review
  // and the hook, handling only open fatals, spent the round doing nothing.
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '8-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s8, round: 1,
    failure: { id: 'risk-report', why: 'risk-review-missing [thm-x]' },
  });
  assert.equal(started.length, 1, 'the failure must dispatch, not fall through');
  const p = started[0];
  assert.equal(p.label, 'adjudicate-risk-review-1');
  assert.ok(!/^step8-/.test(p.label), 'a repair must not match the stage result pattern');
  assert.ok(!/^risk-review-/.test(p.label), "6b's result files own that name family");
  assert.deepEqual(p.task, ['research/demo-alpha-contract-audit.task.md']);
  assert.equal(p.role, 'alpha');
});

test('step 8 routes exact unadjudicated closure rows to one narrow recovery Alpha', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [],
    unadjudicated: ['thm-x'],
    unadjudicated_rows: [
      { id: 'thm-x', model: 'gpt-5.6-terra', context_sha256: 'abc123' },
      { id: 'thm-x', model: 'deepseek-v4-pro', context_sha256: 'abc123' },
    ],
    open_fatal: [],
    closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '8-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 1,
    failure: { id: 'judge-closure', why: '1 unadjudicated' },
  });
  assert.equal(started.length, 1, 'the closure omission must dispatch immediately');
  assert.equal(started[0].label, 'adjudicate-closure-recovery-1');
  assert.equal(started[0].role, 'alpha');
  assert.equal(started[0].job, 'adjudication');
  assert.deepEqual(started[0].covers, [], 'recovery cannot manufacture stage coverage');
  assert.equal(started[0].task, 'briefs/tasks/alpha-step8-closure-recovery.md');
  rmSync(repo, { recursive: true, force: true });
});

test('step 8 still routes open fatals to repair when no adjudication row is missing', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [], unadjudicated: [], unadjudicated_rows: [],
    open_fatal: ['thm-x'], closed: false,
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '8-adjudicate');
  await s8.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s8, round: 2,
    failure: { id: 'judge-closure', why: '1 open fatal' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'repair-8-round-2');
  assert.equal(started[0].job, 'authoring');
  rmSync(repo, { recursive: true, force: true });
});

test('a prompt file carrying an identity placeholder blocks before any spawn', () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-poisoned.task.md'), 'the grammar example says (order <n>)\n');
  const ex = executorAt(repo);
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
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

test('an unfetchable source routes a scouting Beta per owning batch', async () => {
  const repo = fixtureRepo();
  // a coverage whose one source is unstamped and unfetchable -> the stamp
  // repair leaves residue naming the page -> the hook routes a scout
  writeFileSync(join(repo, 'research', 'demo-batch-2.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-2.coverage.json'), JSON.stringify({
    pages: [{ page: 'sylow-page', sources: [{ url: 'http://127.0.0.1:9/gone.pdf', title: 't', locator: 'l', contents: [] }] }],
  }));
  writeFileSync(join(repo, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    pages: [{ id: 'sylow-page', kind: 'A', batch: '2' }],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 2,
    failure: { id: 'source-fetch-check', why: '' },
  });
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'source-scout-2-b2');
  assert.equal(started[0].job, 'scouting');
  assert.deepEqual(started[0].covers, ['2']);
  rmSync(repo, { recursive: true, force: true });
});

test('a candidate-detector failure at the read join dispatches the contract-audit Alpha', async () => {
  const s5: any = stages.find((s: any) => s.id === '5-author');
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 1, failure: { id: 'boundary-audit', why: '' } });
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 2, failure: { id: 'citation-fidelity', why: '' } });
  assert.equal(started.length, 2);
  assert.ok(started.every((p) => p.job === 'adjudication'));
  // structural failures stay blockers
  await s5.onGateFailure({ ctx: { run: 'demo', repo: '/nonexistent' }, executor, stage: s5, round: 2, failure: { id: 'proof-contract', why: '' } });
  assert.equal(started.length, 2);
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

test('the three judge tools agree on the lineup table', () => {
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
    assert.match(out, /deepseek\+opus/, `${tool} lost the opus lineup`);
    assert.match(out, /deepseek\+terra/, `${tool} lost the terra lineup`);
    assert.match(out, /deepseek\+sonnet/, `${tool} lacks the sonnet lineup`);
  }
});

test('the mechanical branch still short-circuits the Beta fan-out', async () => {
  const repo = fixtureRepo();
  // a url-liveness failure with an artifact whose dead rows all carry
  // snapshots already applied -> repair tool exits 0 -> no Beta lanes
  //
  // The row is present rather than `rows: []` because an EMPTY sweep is now a
  // hard failure (`backing-empty-liveness`) — a sweep over nothing is not a
  // sweep. That combination cannot arise for real either: `url-sweep` carries
  // its own liveness assertion of at least one URL collected, so it fails
  // before its artifact could reach a repair empty. The property under test —
  // a mechanical repair that succeeds must not fan out Betas — is unchanged.
  writeFileSync(join(repo, 'research', 'demo-url-liveness.json'),
    JSON.stringify({ rows: [{ url: 'https://example.org/live.pdf', ok: true }] }));
  // the repair passes --coverage from the run's batch manifests
  writeFileSync(join(repo, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(repo, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({ pages: [] }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s3: any = stages.find((s: any) => s.id === '3-recheck');
  await s3.onGateFailure({
    ctx: { run: 'demo', repo }, executor, stage: s3, round: 1,
    failure: { id: 'url-liveness', why: '' },
  });
  assert.equal(started.length, 0, 'a mechanical repair must not fan out Betas');
  rmSync(repo, { recursive: true, force: true });
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
// frontier-16 spent three rounds on it after the 6b Alphas repaired items in
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

// Stage 5 enumerated three gate ids and fell through for everything else, so a
// failure that HAS a mechanical repair burned rounds dispatching nothing.
test('stage 5 runs a mechanical repair for any gate that has one', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-batch-1.pages.json'), '[]');
  const s5: any = stages.find((s: any) => s.id === '5-author');
  // splice-verify has a table entry: it must be repaired, never dispatched to
  // the contract-audit Alpha, which is for candidate detector reads.
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: () => { throw new Error('a mechanical repair must not dispatch an Alpha'); } },
    stage: s5, round: 1,
    failure: { id: 'splice-verify', why: '' },
  });
  // and a detector failure still routes to the Alpha
  const started: any[] = [];
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s5, round: 1,
    failure: { id: 'citation-fidelity', why: '' },
  });
  assert.equal(started.length, 1);
  assert.match(started[0].task[0], /alpha-contract-audit\.task\.md$/);
  rmSync(repo, { recursive: true, force: true });
});

// An edge decision reaches the same lane wherever it surfaces. A 6b Alpha
// repairing an item under its step-6 licence can introduce a dependency its
// page does not declare, long after the splice — frontier-16 did, once, at
// step 5, and it fell through for want of a route.
test('step 5 routes an undeclared-prereq to the edge-adjudication lane', async () => {
  const repo = fixtureRepo();
  writeFileSync(join(repo, 'research', 'demo-alpha-step4.task.md'), 'adjudicate\n');
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [
      { order: 0.5, id: 'dep-page', kind: 'A', requires: [], items: [{ id: 'def-t' }] },
      { order: 1, id: 'low-page', kind: 'A', requires: [], items: [{ id: 'def-a', deps: ['def-t'] }] },
    ],
  }, null, 2));
  const started: any[] = [];
  const s5: any = stages.find((s: any) => s.id === '5-author');
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s5, round: 1,
    failure: { id: 'validate-plan', why: 'FAIL' },
  });
  assert.equal(started.length, 1, 'the edge must reach a lane, not fall through');
  assert.equal(started[0].job, 'adjudication');
  assert.match(started[0].task[0], /alpha-step4\.task\.md$/);
  rmSync(repo, { recursive: true, force: true });
});

test('step 5 leaves a validate-plan failure of another class on the blocker path', async () => {
  const repo = fixtureRepo();
  // a spec with no undeclared-prereq at all
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [{ order: 1, id: 'solo', kind: 'A', requires: [], items: [{ id: 'def-a' }] }],
  }, null, 2));
  const s5: any = stages.find((s: any) => s.id === '5-author');
  await s5.onGateFailure({
    ctx: { run: 'demo', repo },
    executor: { start: () => { throw new Error('must not dispatch'); } },
    stage: s5, round: 1,
    failure: { id: 'validate-plan', why: 'FAIL' },
  });
  rmSync(repo, { recursive: true, force: true });
});
