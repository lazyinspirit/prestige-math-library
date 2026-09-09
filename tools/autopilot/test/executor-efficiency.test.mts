// The event-driven battery, the advisory report-all pass, adoption
// reconciliation, keyed blockers, and the stage-table hot reload.
//
// WHY, all from frontier-15's first end-to-end drive: the 6-judge battery ran
// 29 times against unchanged inputs during one account outage (re-probing
// archive.org each pass); defect-ledger and risk-report failed at the same
// join and were discovered SERIALLY across two repair round-trips and a
// restart; three adopted dispatch records stayed `endedAt: null` all night;
// near-duplicate blockers stacked whenever a message embedded variable text;
// and both mid-run stage-table fixes cost a stop, a full battery drain and a
// restart to load.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, readFileSync, utimesSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor, completedPrefixProblem } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

function fixture() {
  const repo = mkdtempSync(join(tmpdir(), 'ap-eff-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir, { recursive: true });
  return { repo, dispatchDir, gatesLog: join(repo, 'gates.log') };
}

function loggingGate(fx: any, id: string, { ok = true } = {}) {
  const p = join(fx.repo, `gate-${id}.mjs`);
  writeFileSync(p, `
import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(fx.gatesLog)}, '${id}\\n');
${ok ? `console.log('${id}: 1 checked');` : `console.error('ERROR ${id} refused');`}
process.exit(${ok ? 0 : 1});
`);
  return { id, argv: ['node', p] };
}

const gateRuns = (fx: any): string[] =>
  (existsSync(fx.gatesLog) ? readFileSync(fx.gatesLog, 'utf8') : '').trim().split('\n').filter(Boolean);

function cover(fx: any, role: string, label: string, units: string[]) {
  writeFileSync(join(fx.dispatchDir, `${role}-${label}.result.json`),
    JSON.stringify({ role, label, covers: units, ok: true }));
}

function makeExecutor(fx: any, stages: any, extra: any = {}) {
  const stateDir = join(fx.repo, '.autopilot');
  const config: any = {
    run: 'testrun', repo: fx.repo, stateDir, dispatchDir: fx.dispatchDir,
    argv: ['true'], concurrency: 3, maxAttempts: 2, coversMap: {},
    adoptCommand: false, dispatchStaggerMs: 0, ...extra,
  };
  const state = new State(statePath(stateDir)).init('testrun');
  const notifications: Array<{ kind: string; message: string }> = [];
  const reporter: any = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const origNotify = reporter.notify.bind(reporter);
  reporter.notify = (kind: string, message: string, meta?: any) => {
    notifications.push({ kind, message });
    return origNotify(kind, message, meta);
  };
  const adapter = makeExecAdapter({ argv: ['true'], cwd: fx.repo });
  const ex = new Executor({ config, stages, adapter, state, reporter });
  return { ex, notifications };
}

/** One covered stage with the given gates: the battery is the only moving part. */
const gatedStage = (fx: any, gates: any[], hooks: any = {}) => [{
  id: 's1', label: 'only', units: () => ['1'], pattern: /^worker-/, concurrency: 1,
  plan: () => [],
  gates: () => gates,
  ...hooks,
}];

test('run wakes on child completion and drains a completed boundary without polling', async () => {
  const fx = fixture();
  const stages = ['first', 'second'].map((id) => ({
    id, label: id, units: () => ['1'], pattern: new RegExp(`^tool-${id}\\.result\\.json$`),
    plan: () => [{ role: 'tool', label: id, job: 'bookkeeping-mechanical', covers: ['1'],
      argv: ['node', '-e', 'setTimeout(() => {}, 20)'] }],
    gates: () => [loggingGate(fx, id)],
  }));
  const { ex } = makeExecutor(fx, stages);
  const tick = ex.tick.bind(ex);
  ex.tick = async () => {
    const result = await tick();
    if (ex.state.data.stage === 'second')
      await Promise.all([...ex.inflight.values()].map(({ promise }) => promise));
    return result;
  };
  const abort = new AbortController();
  ex.signal = abort.signal;
  const timer = setTimeout(() => abort.abort(), 5000);
  try {
    assert.equal(await ex.run({ pollMs: 60_000 }), 'done');
    assert.deepEqual(gateRuns(fx), ['first', 'second']);
    assert.equal(ex.inflight.size, 0);
  } finally { clearTimeout(timer); }
});

test('paused engine retains its polling wait even at a completed boundary', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1')]));
  ex.state.paused = true;
  let ticks = 0;
  const tick = ex.tick.bind(ex);
  ex.tick = async () => { ticks++; return tick(); };
  await ex.run({ pollMs: 40, maxTicks: 2 });
  assert.equal(ticks, 2);
  assert.deepEqual(gateRuns(fx), []);
});

test('invalid stage tables hold on the polling clock instead of spinning', async () => {
  const fx = fixture();
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1')]));
  ex.specProblems = [{ stage: 's1', message: 'invalid fixture' }] as any;
  const started = Date.now();
  await ex.run({ pollMs: 40, maxTicks: 3 });
  assert.ok(Date.now() - started >= 70, 'both blocked ticks must wait');
});

test('a failed battery does not re-run until a state-changing event', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1', { ok: false })]));
  assert.equal(await ex.tick(), 'blocked');
  assert.equal(gateRuns(fx).length, 1, 'first battery runs');
  await ex.tick(); await ex.tick(); await ex.tick();
  assert.equal(gateRuns(fx).length, 1, 'unchanged inputs: the battery is not re-run');
  ex.bumpState();
  assert.equal(await ex.tick(), 'blocked');
  assert.equal(gateRuns(fx).length, 2, 'a state event re-arms the battery');
  await ex.tick();
  assert.equal(gateRuns(fx).length, 2, 'and it settles again');
});

test('a result file from an external process dirties the skip', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1', { ok: false })]));
  await ex.tick();
  await ex.tick();
  assert.equal(gateRuns(fx).length, 1);
  // An adopted external dispatch finishing writes a result file and ends no
  // engine child — the fingerprint is what notices it.
  cover(fx, 'external', 'lane9', []);
  await ex.tick();
  assert.equal(gateRuns(fx).length, 2, 'a new result file re-arms the battery');
  const fp1 = ex.dispatchDirFingerprint();
  assert.ok(typeof fp1 === 'string' && fp1.includes(':'));
});

test('an unchanged failed battery stays dormant for arbitrarily many ticks', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1', { ok: false })]));
  await ex.tick();
  for (let i = 0; i < 100; i++) await ex.tick();
  assert.equal(gateRuns(fx).length, 1,
    'a wall clock is not evidence that deterministic gate inputs changed');
});

test('report-all: one battery names every failure; authority stays with the first', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const gates = [
    loggingGate(fx, 'g-ok'),
    loggingGate(fx, 'g-first', { ok: false }),
    loggingGate(fx, 'g-second', { ok: false }),
    loggingGate(fx, 'g-third', { ok: false }),
  ];
  const { ex, notifications } = makeExecutor(fx, gatedStage(fx, gates));
  assert.equal(await ex.tick(), 'blocked');
  const runs = gateRuns(fx);
  assert.deepEqual(runs, ['g-ok', 'g-first', 'g-second', 'g-third'],
    'the advisory pass reaches every gate after the first failure');
  const advisory = notifications.filter((n) => n.kind === 'gate-advisory');
  assert.equal(advisory.length, 2, 'both later failures are named');
  assert.match(advisory[0].message, /g-second/);
  assert.match(advisory[1].message, /g-third/);
  const blockers = ex.state.data.blockers;
  assert.equal(blockers.filter((b: any) => /gate g-first/.test(b.message)).length, 1,
    'only the first failure holds blocker authority');
  assert.equal(blockers.filter((b: any) => /g-second|g-third/.test(b.message)).length, 0,
    'advisory failures never become blockers');
});

test('blockers dedupe on stage+key even when the message text varies', () => {
  const fx = fixture();
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1')]));
  assert.equal(ex.state.addBlocker('s1', 'gate x failed — 3 rows', 'gate:x'), true);
  assert.equal(ex.state.addBlocker('s1', 'gate x failed — 7 rows', 'gate:x'), false,
    'variable text no longer stacks near-duplicates');
  assert.equal(ex.state.addBlocker('s1', 'gate y failed', 'gate:y'), true);
  assert.equal(ex.state.data.blockers.length, 2);
});

test('batch repair receives all failures once, budgets each, and stops unchanged retries', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const calls: any[] = [];
  let fingerprint = 'original';
  const { ex } = makeExecutor(fx, gatedStage(fx, [
    loggingGate(fx, 'g-first', { ok: false }), loggingGate(fx, 'g-second', { ok: false }),
  ], { batchRepairs: true, perItemFixBudget: 3, repairFingerprint: () => fingerprint,
    onGateFailure: ({ failure }: any) => { calls.push(failure); } }));
  await ex.tick();
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0].advisory.map((entry: any) => entry.id), ['g-second']);
  assert.equal(Object.keys(ex.state.data.gateAttempts).length, 2);
  await ex.tick();
  assert.equal(calls.length, 1, 'identical failed inputs cannot buy a second repair');
  fingerprint = 'edited'; ex.bumpState();
  await ex.tick();
  assert.equal(calls.length, 2, 'a relevant edit permits another attempt');
});

test('partial artifact recovery retains its budget even when content is unchanged', async () => {
  const fx = fixture();
  let calls = 0;
  const stages = gatedStage(fx, [], { batchRepairs: true, perItemFixBudget: 3,
    repairFingerprint: () => 'same-content', onGateFailure: () => { calls++; } });
  const { ex } = makeExecutor(fx, stages);
  const failure = {id:'stage-stalemate',ok:false,units:['1'],why:'missing output'};
  await (ex as any).spendRepairRound(stages[0], failure, ex.ctx(), 'partial recovery');
  await (ex as any).spendRepairRound(stages[0], failure, ex.ctx(), 'partial recovery');
  assert.equal(calls, 2);
});

test('per-subject repair ignores legacy global rounds and continues past an exhausted primary', async () => {
  const fx = fixture();
  const calls: any[] = [];
  let content = 0;
  const definitions = gatedStage(fx, [], { batchRepairs: true, perItemFixBudget: 3,
    repairFingerprint: () => String(content),
    onGateFailure: ({ failure }: any) => { calls.push(failure); } });
  const { ex } = makeExecutor(fx, definitions);
  const s = definitions[0];
  ex.state.stage(s.id).fixRounds = 2;
  const coverage = { id: 'coverage-10', ok: false,
    output: 'ERROR missing-source [haar-page]: unresolved' };
  for (let i = 0; i < 3; i++) {
    content++;
    assert.equal(await (ex as any).spendRepairRound(s, coverage, ex.ctx(), 'coverage'), 'spent');
  }
  content++;
  const combined = { ...coverage, advisory: [{ id: 'content-policy-scaffold', ok: false,
    output: 'ERROR batch-dependency-missing [thm-new-consumer]: needs supplier' }] };
  assert.equal(await (ex as any).spendRepairRound(s, combined, ex.ctx(), 'both'), 'spent');
  assert.deepEqual(calls[3].liveItems, []);
  assert.deepEqual(calls[3].exhaustedItems, ['haar-page']);
  assert.deepEqual(calls[3].advisory[0].liveItems, ['thm-new-consumer']);
  assert.equal(ex.state.stage(s.id).fixRounds, 6, 'global round number is an identity, not a cap');
});

test('retry re-arms the repair loop, not just the lanes', () => {
  const fx = fixture();
  const { ex, notifications } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1')]));
  const st = ex.state.stage('s1');
  st.fixRounds = 3;
  st.repairExhaustedAt = '2026-08-17T08:53:00.000Z';
  st.backoffUntil = '2026-08-20T13:32:00.000Z';
  ex.state.data.dispatches = {};
  // Drive the control path the way the CLI does.
  writeFileSync(join(fx.repo, '.autopilot', 'control.json'), JSON.stringify({ command: 'retry' }));
  ex.handleControl();
  assert.equal(st.fixRounds, 0, 'burned rounds are re-armed');
  assert.equal(st.repairExhaustedAt, undefined);
  assert.equal(st.backoffUntil, undefined, 'an operator retry overrides an outage clock');
  assert.ok(notifications.some((n) => n.kind === 'retry-armed' && /repair rounds re-armed on 1 stage/.test(n.message)));
});

test('retry cannot reopen a terminal Step 7 repair budget', () => {
  const fx = fixture();
  const stages = gatedStage(fx, [loggingGate(fx, 'g1')], {
    maxFixRounds: 2,
    terminalFixBudget: true,
    onGateFailure: () => {},
  });
  const { ex } = makeExecutor(fx, stages);
  const st = ex.state.stage('s1');
  st.fixRounds = 2;
  st.repairExhaustedAt = '2026-08-25T07:14:01.895Z';
  st.backoffUntil = '2026-08-25T08:00:00.000Z';
  writeFileSync(join(fx.repo, '.autopilot', 'control.json'), JSON.stringify({ command: 'retry' }));
  ex.handleControl();
  assert.equal(st.fixRounds, 2, 'the lifetime two-cycle count must survive retry');
  assert.equal(st.repairExhaustedAt, '2026-08-25T07:14:01.895Z');
  assert.equal(st.backoffUntil, undefined, 'retry may clear an outage clock without reopening the budget');
});

test('hot reload preserves every durable completed prefix', () => {
  const oldStages = [{ id: 'one' }, { id: 'two' }, { id: 'three' }];
  const completed = {
    one: { gatesPassedAt: '2026-08-25T00:00:00Z' },
    two: { gatesPassedAt: '2026-08-25T01:00:00Z' },
  };
  assert.equal(completedPrefixProblem(oldStages, [...oldStages, { id: 'four' }], completed), null,
    'future work may be appended');
  assert.equal(completedPrefixProblem(oldStages,
    [{ id: 'one' }, { id: 'inserted' }, { id: 'two' }, { id: 'three' }], completed), 'two',
  'new work cannot be silently inserted before a completed successor');
  assert.equal(completedPrefixProblem(oldStages,
    [{ id: 'two' }, { id: 'one' }, { id: 'three' }], completed), 'one',
  'completed work cannot be reordered');
});

test('reconcileAdopted stamps endedAt from the result file on disk', () => {
  const fx = fixture();
  const { ex, notifications } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1')]));
  ex.state.data.dispatches = {
    's1:ext-lane': { stage: 's1', role: 'alpha', label: 'ext-lane', covers: [], attempts: 1, lastExitOk: null, startedAt: '2026-08-17T00:00:00.000Z', endedAt: null, attempt: 1 },
    's1:still-running': { stage: 's1', role: 'alpha', label: 'still-running', covers: [], attempts: 1, lastExitOk: null, startedAt: '2026-08-17T00:00:00.000Z', endedAt: null, attempt: 1 },
  };
  writeFileSync(join(fx.dispatchDir, 'alpha-ext-lane.result.json'),
    JSON.stringify({ ok: true, exit_code: 0, ended_at: '2026-08-17T01:02:03.000Z' }));
  ex.reconcileAdopted();
  assert.equal(ex.state.data.dispatches['s1:ext-lane'].endedAt, '2026-08-17T01:02:03.000Z');
  assert.equal(ex.state.data.dispatches['s1:ext-lane'].lastExitOk, true);
  assert.equal(ex.state.data.dispatches['s1:still-running'].endedAt, null,
    'a record with no result file stays open — disk is the only truth');
  assert.ok(notifications.some((n) => n.kind === 'adopted-reconciled'));
});

test('an edited stage table hot-reloads; an invalid one is refused and the old table stays', async () => {
  const fx = fixture();
  const stagesFile = join(fx.repo, 'stages-under-test.mts');
  const table = (label: string, body = '') => `
export const stages = [${body || `{
  id: 's1', label: '${label}', units: () => ['1'], pattern: /^worker-/, concurrency: 1,
  plan: () => [], gates: () => [{ id: 'g', argv: ['true'] }],
}`}];
`;
  writeFileSync(stagesFile, table('original'));
  const first = await import(`${stagesFile}?v=first`);
  const { ex, notifications } = makeExecutor(fx, first.stages, { stagesPath: stagesFile });
  assert.equal(ex.stages[0].label, 'original');

  writeFileSync(stagesFile, table('edited'));
  utimesSync(stagesFile, new Date(), new Date(Date.now() + 5_000));
  await ex.maybeReloadStages();
  assert.equal(ex.stages[0].label, 'edited', 'the edited table is live without a restart');
  assert.ok(notifications.some((n) => n.kind === 'stages-reloaded'));

  writeFileSync(stagesFile, 'export const stages = [];\n');
  utimesSync(stagesFile, new Date(), new Date(Date.now() + 10_000));
  await ex.maybeReloadStages();
  assert.equal(ex.stages[0].label, 'edited', 'a table that cannot fail is never loaded');
  assert.ok(notifications.some((n) => n.kind === 'stages-reload-refused'));
});

test('an edited watched stage dependency hot-reloads through the root table', async () => {
  const fx = fixture();
  const stagesDir = join(fx.repo, 'stages');
  mkdirSync(stagesDir, { recursive: true });
  const stagesFile = join(stagesDir, 'main.mts');
  const dependencyFile = join(stagesDir, 'part.mts');
  const table = `
import { statSync } from 'node:fs';
const partUrl = new URL('./part.mts', import.meta.url);
const { label } = await import(partUrl.href + '?v=' + statSync(partUrl).mtimeMs);
export const stages = [{
  id: 's1', label, units: () => ['1'], pattern: /^worker-/, concurrency: 1,
  plan: () => [], gates: () => [{ id: 'g', argv: ['true'] }],
}];
`;
  writeFileSync(dependencyFile, `export const label = 'original';\n`);
  writeFileSync(stagesFile, table);
  const first = await import(`${stagesFile}?v=first`);
  const { ex, notifications } = makeExecutor(fx, first.stages, {
    stagesPath: stagesFile,
    stagesWatch: [stagesFile, dependencyFile],
  });
  assert.equal(ex.stages[0].label, 'original');

  writeFileSync(dependencyFile, `export const label = 'edited dependency';\n`);
  utimesSync(dependencyFile, new Date(), new Date(Date.now() + 5_000));
  await ex.maybeReloadStages();
  assert.equal(ex.stages[0].label, 'edited dependency');
  assert.ok(notifications.some((n) => n.kind === 'stages-reloaded'));
});
