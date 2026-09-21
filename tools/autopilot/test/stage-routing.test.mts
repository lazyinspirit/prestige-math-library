import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
import { validateStages } from '../src/spec.mts';
import type { Ctx, Stage } from '../src/types.mts';

function fixture(stages: Stage[]) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-route-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir);
  const stateDir = join(repo, 'state');
  const config = { run: 'route-test', repo, stateDir, dispatchDir, argv: ['true'],
    adoptCommand: false as const, dispatchStaggerMs: 0, gateFailurePolicy: 'owner-recertify' as const };
  const reopen = () => new Executor({ config, stages,
    state: new State(statePath(stateDir)).init(config.run),
    reporter: new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} }),
    adapter: makeExecAdapter({ argv: ['true'], cwd: repo }) });
  const cover = (id: string, round = 1) => writeFileSync(join(dispatchDir, `tool-${id}-r${round}.result.json`),
    JSON.stringify({ ok: true, covers: ['all'] }));
  return { ex: reopen(), reopen, cover };
}
function stage(id: string, extra: Partial<Stage> = {}): Stage {
  return { id, label: id, units: () => ['all'],
    pattern: (ctx: Ctx) => new RegExp(`^tool-${id}-r${ctx.stageRounds?.[id] ?? 1}\\.result\\.json$`),
    plan: () => [], gates: () => [{ id: `${id}-gate`, argv: ['node', '-e', 'process.exit(0)'] }], ...extra };
}

test('repeat atomically resets the stage span and excludes old receipts after restart', async () => {
  const stages = [stage('judge'), stage('certify', { routeTargets: ['judge'],
    route: ({ ctx, outcome }) => outcome === 'passed' && (ctx.stageRounds?.certify ?? 1) < 2
      ? { next: 'judge' } : null }), stage('finish')];
  const fx = fixture(stages);
  fx.cover('judge'); fx.cover('certify');
  await fx.ex.tick(); await fx.ex.tick();
  const ex = fx.reopen();
  assert.deepEqual(ex.ctx().stageRounds, { judge: 2, certify: 2 });
  assert.equal(ex.currentStage().stage?.id, 'judge');
  assert.equal(ex.stageStatus(stages[0]).unitsDone, false);
  assert.equal(ex.stageStatus(stages[1]).unitsDone, false);
  assert.equal(ex.state.data.transitions.length, 1);
  fx.cover('judge', 2); fx.cover('certify', 2);
  await ex.tick(); await ex.tick();
  assert.equal(ex.currentStage().stage?.id, 'finish');
  assert.equal(fx.reopen().state.data.transitions.length, 1, 'restarts do not repeat the committed branch');
});

test('explicit failed-gate branches repeat repairs and preserve every battery diagnostic', async () => {
  let pass = false;
  const gate = (id: string) => stage(id, {
    gates: () => ['fatal', 'coverage'].map(name => ({ id: name,
      argv: ['node', '-e', `console.error('ERROR ${name}'); process.exit(${pass ? 0 : 1})`] })),
    routeTargets: id === 'initial' ? ['repair', 'finish'] : ['repair'],
    route: ({ outcome }) => outcome === 'failed' ? { next: 'repair' }
      : id === 'initial' ? { next: 'finish' } : null,
  });
  const stages = [gate('initial'), stage('repair'), gate('retry'), stage('finish')];
  const fx = fixture(stages);
  for (const id of ['initial', 'repair', 'retry']) fx.cover(id);
  await fx.ex.tick();
  assert.equal(fx.ex.state.data.stages.initial.gatesPassedAt, null);
  assert.equal(fx.ex.stageStatus(stages[0]).gatesPassed, false);
  assert.equal(fx.ex.currentStage().stage?.id, 'repair');
  assert.equal(fx.ex.ctx().stageFailures?.initial.id, 'fatal');
  assert.equal(fx.ex.ctx().stageFailures?.initial.advisory?.[0].id, 'coverage');
  await fx.ex.tick(); await fx.ex.tick();
  const ex = fx.reopen();
  assert.equal(ex.currentStage().stage?.id, 'repair');
  assert.equal(ex.ctx().stageRounds?.repair, 2);
  assert.equal(ex.ctx().stageFailures?.retry.id, 'fatal');
  assert.equal(ex.stageStatus(stages[1]).unitsDone, false);
  fx.cover('repair', 2); fx.cover('retry', 2); pass = true;
  await ex.tick(); await ex.tick();
  assert.equal(ex.currentStage().stage?.id, 'finish');
  assert.equal(ex.state.data.transitions.length, 2);
});

test('passing initial gate durably bypasses the repair branch without certifying skipped gates', async () => {
  const stages = [stage('initial', { routeTargets: ['finish'], route: () => ({ next: 'finish' }) }),
    stage('repair'), stage('retry'), stage('finish')];
  const fx = fixture(stages); fx.cover('initial'); await fx.ex.tick();
  assert.equal(fx.reopen().currentStage().stage?.id, 'finish');
  assert.equal(fx.ex.state.data.stages.retry.gatesPassedAt, null);
});

test('ordinary failing gates retain owner holds and cannot trigger repair hooks', async () => {
  let called = false;
  const fx = fixture([stage('ordinary', { gates: () => [{ id: 'red', argv: ['node', '-e', 'process.exit(1)'] }],
    onGateFailure: () => { called = true; }, maxFixRounds: 3 })]);
  fx.cover('ordinary'); assert.equal(await fx.ex.tick(), 'blocked');
  assert.equal(called, false); assert.equal(fx.ex.state.data.transitions, undefined);
});

test('all writers, including a live dispatch from another stage, block gate transitions', async () => {
  const stages = [stage('initial', { routeTargets: ['finish'], route: () => ({ next: 'finish' }) }), stage('finish')];
  const fx = fixture(stages); fx.cover('initial');
  fx.ex.inflight.set('writer', { promise: new Promise(() => {}), meta: { stage: 'outside', label: 'writer' }, startedAt: Date.now() });
  assert.equal(await fx.ex.tick(), 'working');
  assert.equal(fx.ex.state.data.transitions, undefined);
  fx.ex.inflight.clear();
  fx.ex.liveDispatchLabels = () => [{ label: 'external-writer', covers: [] }];
  assert.equal(await fx.ex.runGroupGates([{ s: stages[0], st: fx.ex.stageStatus(stages[0]) }], fx.ex.ctx(), [stages[0]]), 'working');
  assert.equal(fx.ex.state.data.transitions, undefined);
});

test('a repeat with an unchanged result matcher is refused without partial state reset', async () => {
  const stages = [stage('judge', { pattern: () => /^tool-judge-r1/ }),
    stage('certify', { routeTargets: ['judge'], route: () => ({ next: 'judge' }) }), stage('finish')];
  const fx = fixture(stages); fx.cover('judge'); fx.cover('certify');
  await fx.ex.tick(); assert.equal(await fx.ex.tick(), 'blocked');
  assert.ok(fx.ex.state.data.stages.judge.doneAt);
  assert.equal(fx.ex.state.data.stageRounds, undefined);
  assert.equal(fx.ex.state.data.transitions, undefined);
  assert.match(fx.ex.state.data.blockers.at(-1).message, /pattern must change/);
});

test('validation rejects unknown targets and repeat routes through static result patterns', () => {
  const stages = [stage('judge', { pattern: /^old/ }), stage('certify', {
    routeTargets: ['judge', 'missing'], route: () => null }), stage('finish')];
  const problems = validateStages(stages, { run: 'test', repo: '/', dispatchDir: '/' });
  assert.ok(problems.some(p => /round-scoped pattern/.test(p.message)));
  assert.ok(problems.some(p => /unknown route target/.test(p.message)));
});

test('changed matchers which still admit old receipts cannot authorize another round', async () => {
  const stages = [stage('judge', { pattern: ctx => new RegExp(`^tool-judge-r[1-${ctx.stageRounds?.judge ?? 1}]`) }),
    stage('certify', { routeTargets: ['judge'], route: () => ({ next: 'judge' }) }), stage('finish')];
  const fx = fixture(stages); fx.cover('judge'); fx.cover('certify');
  await fx.ex.tick(); assert.equal(await fx.ex.tick(), 'blocked');
  assert.equal(fx.ex.state.data.stageRounds, undefined);
  assert.match(fx.ex.state.data.blockers.at(-1).message, /still accepts old receipts/);
});

test('pause-at honors a completed round before its backward branch starts more work', async () => {
  const stages = [stage('judge'), stage('certify', { routeTargets: ['judge'], route: () => ({ next: 'judge' }) }), stage('finish')];
  const fx = fixture(stages); fx.cover('judge'); fx.cover('certify');
  fx.ex.state.data.pauseAfter = 'certify';
  await fx.ex.tick(); await fx.ex.tick();
  const ex = fx.reopen();
  assert.equal(ex.state.paused, true);
  assert.equal(ex.state.data.pauseAfter, null);
  assert.equal(ex.ctx().stageRounds?.judge, 2);
  assert.equal(ex.currentStage().stage?.id, 'judge');
});
