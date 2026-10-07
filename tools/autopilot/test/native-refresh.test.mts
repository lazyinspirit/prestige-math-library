import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { writeCommand } from '../src/control.mts';
import { stages, step3PairPlan } from '../stages/mathlib.mts';
const AT = '2026-01-01T00:00:00.000Z';
function fixture(t: any, extra: any = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-native-refresh-')); t.after(() => rmSync(repo, { recursive: true, force: true }));
  const dispatchDir = join(repo, 'dispatch'), stateDir = join(repo, 'state'); mkdirSync(dispatchDir);
  let ordinary = 0;
  const stage: any = { id: '3b-author', label: 'author', role: 'alpha-high', concurrency: 2,
    units: () => ['a', 'b'], pattern: /^alpha-high-step3b-pair-[ab]-[a-f0-9]{16}\.result\.json$/,
    plan: (_ctx: any, units: string[]) => { ordinary += units.length; return []; },
    refreshPlan: (_ctx: any, unit: string, request: any) => ({ role: 'alpha-high',
      label: `step3b-pair-${unit}-${createHash('sha256').update(request.id).digest('hex').slice(0, 16)}`,
      job: 'authoring', covers: [unit], profile: 'deepseek-v4.1-flash-max' }),
    gates: () => [{ id: 'gate', argv: ['node', '-e', "console.log('1 checked')"], liveness: { pattern: '(\\d+) checked', min: 1 } }] };
  const config: any = { run: 'demo', repo, stateDir, dispatchDir, argv: ['true'], coversMap: {}, adoptCommand: false,
    dispatchStaggerMs: 0, maxAttempts: 2, ...extra };
  new State(statePath(stateDir)).init('demo').stage(stage.id);
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const resolves: Array<(value: any) => void> = [];
  const adapter = { name: 'hang', describe: () => 'hang', invoke: () => new Promise<any>(resolve => resolves.push(resolve)) };
  const build = () => new Executor({ config, stages: [stage], state: new State(statePath(stateDir)), reporter, adapter, clock: { now: () => Date.parse(AT) } });
  const ex = build(), oldPaths = ['a', 'b'].map(u => join(dispatchDir, `alpha-high-step3b-pair-${u}-0000000000000000.result.json`));
  for (const [i, path] of oldPaths.entries()) writeFileSync(path, JSON.stringify({ run: 'demo', role: 'alpha-high',
    label: `step3b-pair-${['a', 'b'][i]}-0000000000000000`, covers: [['a', 'b'][i]], ok: true,
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T01:00:00.000Z' }));
  const command: any = { command: 'refresh', run: 'demo', stage: stage.id, unit: 'a', requestId: 'nonce-1', reason: 'Audit corrected supplier and current inputs' };
  const request = (overrides = {}) => ex.requestNativeRefresh({ ...command, ...overrides });
  const receipt = (overrides: any = {}) => { const r = ex.state.data.nativeRefreshes![0];
    writeFileSync(join(dispatchDir, `${r.plan.role}-${r.plan.label}.result.json`), JSON.stringify({ run: 'demo', role: r.plan.role,
      label: r.plan.label, covers: ['a'], ok: true, started_at: '2026-01-01T00:00:01.000Z', ended_at: '2026-01-01T00:00:02.000Z', ...overrides })); };
  const fail = async () => { await new Promise(resolve => setTimeout(resolve, 10)); resolves.shift()!({ ok: false, code: 1, stdout: '', stderr: 'failed' });
    await Promise.all([...ex.inflight.values()].map(row => row.promise)); };
  return { ex, stage, config, command, request, receipt, build, fail, oldPaths, ordinary: () => ordinary };
}

test('public refresh masks only its unit, preserves old success and holds gates until genuine fresh work', async t => {
  const f = fixture(t), before = f.oldPaths.map(p => readFileSync(p, 'utf8'));
  writeCommand(f.config.stateDir, 'refresh', f.command); f.ex.handleControl();
  assert.deepEqual([...f.ex.stageCoverage(f.stage)], ['b']); assert.deepEqual([...f.ex.unitsComplete(f.stage)], ['b']);
  assert.equal(f.ex.stageStatus(f.stage).unitsDone, false);
  assert.equal(f.build().stageStatus(f.stage).unitsDone, false, 'pending request survives restart');
  assert.equal(await f.ex.runGroupGates([{ s: f.stage, st: f.ex.stageStatus(f.stage) }], f.ex.ctx(), [f.stage]), 'working');
  await f.ex.dispatchStage(f.stage, f.ex.ctx()); assert.equal(f.ex.inflight.size, 1); assert.equal(f.ordinary(), 0);
  f.receipt(); assert.equal(f.ex.stageStatus(f.stage).unitsDone, true); f.ex.reconcileNativeRefreshes();
  assert.equal(f.ex.state.data.nativeRefreshes![0].completedAt, '2026-01-01T00:00:02.000Z');
  assert.deepEqual(f.oldPaths.map(p => readFileSync(p, 'utf8')), before); assert.equal(f.build().stageStatus(f.stage).unitsDone, true);
});

test('status counts effective coverage while preserving completed siblings and pending annotation', t => {
  const f = fixture(t);
  f.stage.units = () => ['a', 'b', 'c', 'd'];
  f.stage.pattern = /^alpha-high-step3b-pair-[abcd]-[a-f0-9]{16}\.result\.json$/;
  writeFileSync(join(f.config.dispatchDir, 'alpha-high-step3b-pair-c-0000000000000000.result.json'),
    JSON.stringify({ ok: true, covers: ['c'] }));
  f.request();
  const status = f.ex.stageStatus(f.stage);
  assert.match(status.why, /^2\/4 covered; missing a, d; native refresh pending for a$/);
  assert.deepEqual(status.missing, ['a', 'd']);
  assert.deepEqual([...f.ex.unitsComplete(f.stage)], ['b', 'c']);
});

test('refresh requires engine-started matching nonce label and genuine fresh native result timeline', async t => {
  const f = fixture(t); f.request(); f.receipt(); assert.equal(f.ex.stageStatus(f.stage).unitsDone, false);
  await f.ex.dispatchStage(f.stage, f.ex.ctx());
  for (const fields of [{ started_at: '2025-12-31T23:59:59.000Z' }, { started_at: undefined }, { ended_at: AT },
    { run: 'other' }, { role: 'other' }, { label: 'wrong-nonce' }, { covers: ['b'] }, { covers: ['a', 'b'] }, { ok: false }, { written_by: 'autopilot' }]) {
    f.receipt(fields); assert.equal(f.ex.stageStatus(f.stage).unitsDone, false, JSON.stringify(fields));
  }
  f.receipt(); assert.equal(f.ex.stageStatus(f.stage).unitsDone, true);
});

test('refresh rejects foreign, unknown, future, closed and unsupported requests', t => {
  const f = fixture(t);
  for (const fields of [{ run: 'other' }, { unit: 'unknown' }, { stage: 'future' }, { reason: '' }, { requestId: '' }]) assert.throws(() => f.request(fields));
  f.ex.state.data.stages[f.stage.id].gatesPassedAt = AT; assert.throws(() => f.request(), /unclosed/);
  f.ex.state.data.stages[f.stage.id].gatesPassedAt = null;
  f.ex.stages.unshift({ ...f.stage, id: 'earlier', units: () => ['earlier'], pattern: /^never-/ }); assert.throws(() => f.request(), /unclosed/); f.ex.stages.shift();
  delete f.stage.refreshPlan; assert.throws(() => f.request(), /opted-in/); assert.equal(f.ex.state.data.nativeRefreshes!.length, 0);
});

test('local and adopted unit or cohort writers prevent refresh requests', t => {
  for (const adopted of [false, true]) { const f = fixture(t); f.stage.exclusiveCohort = () => ['a', 'b'];
    if (adopted) f.ex.config.adoptCommand = "printf '%s\\n' '123 node dispatch --run demo --role alpha-high --label step3b-pair-b-0000000000000000 --covers b'";
    else f.ex.inflight.set('local', { startedAt: Date.now(), promise: new Promise(() => {}), meta: { stage: f.stage.id, role: 'alpha-high', label: 'local', covers: ['b'] } });
    assert.throws(() => f.request(), /writer is active/);
  }
});

test('fixed request label bounds retries across content changes and duplicate controls', async t => {
  const f = fixture(t); f.request(); const original = structuredClone(f.ex.state.data.nativeRefreshes![0]);
  f.request({ requestId: 'nonce-duplicate' }); assert.equal(f.ex.state.data.nativeRefreshes!.length, 1); assert.deepEqual(f.ex.state.data.nativeRefreshes![0], original);
  for (let i = 0; i < 2; i++) { await f.ex.dispatchStage(f.stage, f.ex.ctx()); await f.fail(); f.stage.refreshPlan = () => { throw Error('must reuse frozen plan'); }; }
  assert.equal(await f.ex.dispatchStage(f.stage, f.ex.ctx()), 'blocked'); assert.equal(f.ex.inflight.size, 0);
  assert.equal(f.ex.state.dispatch(`${f.stage.id}:${original.plan.label}`)!.attempts, 2); assert.equal(f.ex.stageStatus(f.stage).unitsDone, false);
  writeCommand(f.config.stateDir, 'retry', { unit: 'a' }); f.ex.handleControl(); await f.ex.dispatchStage(f.stage, f.ex.ctx());
  assert.equal(f.ex.inflight.size, 1); assert.equal(f.ex.state.data.nativeRefreshes![0].id, original.id);
});

test('refresh respects existing adopted global, role and stage capacity', async t => {
  for (const cap of ['global', 'role', 'stage']) { const f = fixture(t); f.request();
    if (cap === 'stage') f.stage.concurrency = 1; if (cap === 'global') f.ex.config.globalConcurrency = 1;
    const label = cap === 'stage' ? 'step3b-pair-b-0000000000000000' : 'sibling';
    f.ex.config.adoptCommand = `printf '%s\\n' '123 node dispatch --run demo --role alpha-high --label ${label} --covers b'`;
    await f.ex.dispatchStage(f.stage, f.ex.ctx(), { roleBudget: () => cap === 'role' ? 1 : Infinity }); assert.equal(f.ex.inflight.size, 0, cap);
    f.ex.config.adoptCommand = false; await f.ex.dispatchStage(f.stage, f.ex.ctx()); assert.equal(f.ex.inflight.size, 1, cap);
  }
});

test('a writer adopted after request acceptance prevents a duplicate refresh launch', async t => {
  const f = fixture(t); f.request();
  f.ex.config.adoptCommand = "printf '%s\\n' '123 node dispatch --run demo --role alpha-high --label step3b-pair-a-0000000000000000 --covers a'";
  await f.ex.dispatchStage(f.stage, f.ex.ctx());
  assert.equal(f.ex.inflight.size, 0);
  assert.equal(f.ex.stageStatus(f.stage).unitsDone, false);
});

test('count-mode old success cannot satisfy pending native refresh', t => {
  const f = fixture(t); f.request(); for (const path of f.oldPaths) writeFileSync(path, JSON.stringify({ ok: true }));
  assert.equal(f.ex.stageStatus(f.stage).mode, 'count'); assert.equal(f.ex.stageStatus(f.stage).unitsDone, false); assert.equal(f.ex.unitsComplete(f.stage).has('a'), false);
});

test('production Step3b refresh retains profile, scope, result pattern and focused task direction', t => {
  const repo = mkdtempSync(join(tmpdir(), 'step3-refresh-plan-')); t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'items'));
  const pages = [{ id: 'a', kind: 'A', companion: 'b', order: 1, requires: [], items: [{ id: 'def-a', kind: 'definition', statement: 'A', deps: [] }] },
    { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'], items: [{ id: 'ex-b', kind: 'example', statement: 'B', deps: ['def-a'] }] }];
  writeFileSync(join(repo, 'research/demo-batch-1.pages.json'), JSON.stringify(pages));
  const ctx: any = { run: 'demo', repo }, stage = stages.find(s => s.id === '3b-author')!, old = step3PairPlan(ctx, 'a', 'final');
  const fresh = stage.refreshPlan!(ctx, 'a', { id: 'nonce-new', requestedAt: AT, reason: 'Corrected Manin Definition and theorem' });
  assert.notEqual(fresh.label, old.label); assert.equal(fresh.profile, 'deepseek-v4.1-flash-max'); assert.equal(fresh.role, 'alpha-high'); assert.deepEqual(fresh.covers, ['a']);
  assert.ok((stage.pattern as any)(ctx).test(`${fresh.role}-${fresh.label}.result.json`));
  const task = readFileSync(join(repo, fresh.task as string), 'utf8'); assert.match(task, /Corrected Manin Definition and theorem/);
  assert.match(task, /Do not touch files solely to change timestamps/); assert.match(task, /genuine fresh native author\/evidence work/);
});


test('public CLI requires exact existing run identity and writes only a refresh control request', t => {
  const f = fixture(t), cli = fileURLToPath(new URL('../bin/autopilot.mts', import.meta.url));
  const stateBefore = readFileSync(statePath(f.config.stateDir), 'utf8');
  const wrapper = fileURLToPath(new URL('../../tsx-run.mjs', import.meta.url));
  const invoke = (run: string) => spawnSync(process.execPath, [wrapper, cli, 'refresh',
    '--repo', f.config.repo, '--state-dir', f.config.stateDir, '--run', run,
    '--stage', '3b-author', '--unit', 'a', '--reason', 'Corrected suppliers and artifact audit'], { encoding: 'utf8' });
  assert.notEqual(invoke('other').status, 0);
  assert.equal(invoke('demo').status, 0);
  const control = JSON.parse(readFileSync(join(f.config.stateDir, 'control.json'), 'utf8'));
  assert.equal(control.command, 'refresh'); assert.equal(control.run, 'demo');
  assert.equal(control.stage, '3b-author'); assert.equal(control.unit, 'a');
  assert.match(control.requestId, /^[a-f0-9-]{36}$/);
  assert.equal(readFileSync(statePath(f.config.stateDir), 'utf8'), stateBefore, 'CLI does not alter engine state');
  f.ex.handleControl(); assert.equal(f.ex.state.data.nativeRefreshes!.length, 1);
});
