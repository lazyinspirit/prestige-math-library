// The event-driven battery, the advisory report-all pass, adoption
// reconciliation, keyed blockers, and the stage-table hot reload.
//
// WHY, all from frontier-15's first end-to-end drive: the 7-judge battery ran
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
import { Executor } from '../src/executor.mts';
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
    adoptCommand: false, ...extra,
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

test('the 20th skip runs the battery anyway — the dirty-channel backstop', async () => {
  const fx = fixture();
  cover(fx, 'worker', 'a1', ['1']);
  const { ex } = makeExecutor(fx, gatedStage(fx, [loggingGate(fx, 'g1', { ok: false })]));
  await ex.tick();
  for (let i = 0; i < 20; i++) await ex.tick();
  assert.equal(gateRuns(fx).length, 1, 'twenty quiet ticks are all skipped');
  await ex.tick();
  assert.equal(gateRuns(fx).length, 2, 'the 21st runs the backstop battery');
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
