import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { originalJudgeLineup } from '../../physics-support/original-judge-lineup.mjs';
import { JUDGE_LINEUPS } from '../../physics-support/models.mjs';
import { prepareFinal, prepareFinalIfChanged } from '../../step6-finalize.mjs';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { stages } from '../stages/mathlib.mts';

const hash = (bytes: any) => createHash('sha256').update(bytes).digest('hex');
function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'physics-step6-lineup-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research/demo-step5-v2'); mkdirSync(dir, { recursive: true });
  const ctx: any = { repo: root, run: 'demo', config: {} };
  const save = (file: string, row: any) => writeFileSync(file, JSON.stringify(row));
  const verdictPath = join(dir, 'step4-verdicts.json'), packPath = join(dir, 'initial-1.json');
  function freeze(models: string[], relativeBinding = false) {
    save(verdictPath, models.map((model, i) => ({ id: `item-${i}`, model, keep: true })));
    save(packPath, { version: 2, run: 'demo', phase: 'initial', round: 1, judge_model: models[0],
      input_evidence: { [relativeBinding ? relative(root, verdictPath) : verdictPath]: hash(readFileSync(verdictPath)) } });
  }
  return { root, dir, ctx, save, freeze, verdictPath, packPath };
}

test('authenticated original singleton lineup survives later worker/default changes, including legacy lanes', t => {
  const f = fixture(t);
  assert.equal(originalJudgeLineup(f.ctx), 'luna');
  for (const [name, models] of Object.entries(JUDGE_LINEUPS)) for (const relativeBinding of [false, true]) {
    f.freeze([...models], relativeBinding);
    assert.equal(originalJudgeLineup(f.ctx), name);
  }
});

function pendingPreparation(t: any) {
  const f = fixture(t), id = '6-final-validation-v3', label = 'step6-prepare-final-v3';
  const stateDir = join(f.root, '.physics-autopilot/demo'), dispatchDir = join(f.root, 'research/demo-dispatch');
  mkdirSync(stateDir, { recursive: true }); mkdirSync(dispatchDir, { recursive: true });
  const payload = { status: 'judged', authorization: { raw_sha256: 'a'.repeat(64) } };
  f.save(join(f.root, 'research/demo-step6-currency-authority.json'), { ...payload, sha256: hash(JSON.stringify(payload)) });
  const state = new State(statePath(stateDir)); state.init('demo'); state.stage(id);
  state.recordDispatchStart(`${id}:${label}`, { stage: id, role: 'tool', label, covers: ['all'] }); state.recordDispatchEnd(`${id}:${label}`, true);
  const receipt = join(dispatchDir, `tool-${label}.result.json`), original = JSON.stringify({ run: 'demo', role: 'tool', label, ok: true, covers: ['all'], ended_at: '2026-10-25T04:01:44Z' });
  writeFileSync(receipt, original);
  const originalStage: any = stages.find(stage => stage.id === id)!, actual = originalStage.plan(f.ctx)[0];
  const script = `const fs=require('node:fs');const s=JSON.parse(fs.readFileSync(${JSON.stringify(statePath(stateDir))}));fs.writeFileSync('native-dispatch-observed.json',JSON.stringify(s.dispatches[${JSON.stringify(id + ':' + label)}]));setTimeout(()=>process.exit(0),30);`;
  const plan = { ...actual, argv: [process.execPath, '-e', script] }, stage: any = { ...originalStage, plan: () => [plan] };
  const config: any = { repo: f.root, run: 'demo', stateDir, dispatchDir, adoptCommand: false, dispatchStaggerMs: 0, argv: ['true'] };
  const reporter: any = { event() {}, notify() {}, report() {} };
  const executor = new Executor({ config, stages: [stage], state, reporter, adapter: { name: 'unused', invoke: async () => { throw Error('wrong adapter'); } } as any });
  executor.stageStatus = (() => ({ unitsDone: true })) as any;
  const ctx = { ...f.ctx, config }, progress = (physics = true) => prepareFinalIfChanged({ ctx, executor, stage, physics });
  return { ...f, id, label, state, stateDir, receipt, original, plan, stage, executor, progress };
}

test('pending physics currency reruns the unchanged plan as one real native dispatch, preserving old result and gate barrier', async t => {
  const f = pendingPreparation(t); assert.equal(f.plan.job, 'judgement'); assert.equal(f.plan.timeout, 43200);
  await f.progress(); assert.equal(f.executor.inflight.size, 1);
  const dispatch = f.state.data.dispatches[`${f.id}:${f.label}`]; assert.equal(dispatch.lastExitOk, null); assert.equal(dispatch.endedAt, null); assert.equal(dispatch.attempts, 2);
  await f.progress(); assert.equal(f.executor.inflight.size, 1);
  const running = [...f.executor.inflight.values()][0]; await running.promise;
  const observed = JSON.parse(readFileSync(join(f.root, 'native-dispatch-observed.json'), 'utf8'));
  assert.equal(observed.stage, f.id); assert.equal(observed.role, 'tool'); assert.equal(observed.label, f.label); assert.equal(observed.endedAt, null);
  assert.equal(f.state.data.dispatches[`${f.id}:${f.label}`].lastExitOk, true);
  assert.equal(readFileSync(f.receipt, 'utf8'), f.original); assert.equal(f.state.data.stages[f.id].gatesPassedAt, null);
});

test('failed native preparation holds without per-tick starts until native retry rearms attempts', async t => {
  const f = pendingPreparation(t), dispatch = f.state.data.dispatches[`${f.id}:${f.label}`]; dispatch.lastExitOk = false;
  await assert.rejects(f.progress(), /use native retry/); await assert.rejects(f.progress(), /use native retry/); assert.equal(f.executor.inflight.size, 0);
  writeFileSync(join(f.stateDir, 'control.json'), JSON.stringify({ command: 'retry' })); f.executor.handleControl();
  assert.equal(dispatch.attempts, 0); await f.progress(); assert.equal(f.executor.inflight.size, 1); await [...f.executor.inflight.values()][0].promise;
});

for (const guard of ['paused', 'inflight', 'adopted', 'not-covered', 'passed']) test('pending preparation retains ' + guard + ' guard', async t => {
  const f = pendingPreparation(t); let starts = 0; f.executor.start = (() => { starts++; return true; }) as any;
  if (guard === 'paused') f.state.paused = true;
  if (guard === 'inflight') f.executor.inflight.set('other', {} as any);
  if (guard === 'adopted') f.executor.hasAdoptedWork = () => true;
  if (guard === 'not-covered') f.executor.stageStatus = (() => ({ unitsDone: false })) as any;
  if (guard === 'passed') f.state.data.stages[f.id].gatesPassedAt = 'already';
  await f.progress(); assert.equal(starts, 0);
});

test('nonpending physics and mathematics do not gain native currency scheduling', async t => {
  for (const physics of [false, true]) { const f = pendingPreparation(t); let starts = 0; f.executor.start = (() => { starts++; return true; }) as any;
    if (physics) unlinkSync(join(f.root, 'research/demo-step6-currency-authority.json'));
    await assert.rejects(f.progress(physics), /ENOENT/); assert.equal(starts, 0);
  }
});

test('incomplete, stale, forged, malformed, mixed and unknown frozen lineage fail closed', t => {
  const f = fixture(t), luna = JUDGE_LINEUPS.luna[0];
  f.save(join(f.dir, 'frontier.json'), {});
  assert.throws(() => originalJudgeLineup(f.ctx), /incomplete frozen/);
  f.freeze([luna]); unlinkSync(f.packPath);
  assert.throws(() => originalJudgeLineup(f.ctx), /missing initial frozen pack/);
  f.freeze([luna]); writeFileSync(f.verdictPath, readFileSync(f.verdictPath, 'utf8') + '\n');
  assert.throws(() => originalJudgeLineup(f.ctx), /not bound/);
  for (const patch of [{ run: 'foreign' }, { phase: 'repeat' }, { round: 2 }, { version: 1 }, { input_evidence: {} }]) {
    f.freeze([luna]); f.save(f.packPath, { ...JSON.parse(readFileSync(f.packPath, 'utf8')), ...patch });
    assert.throws(() => originalJudgeLineup(f.ctx), /not bound/);
  }
  for (const models of [[luna, JUDGE_LINEUPS.sol61[0]], ['unknown-model']]) {
    f.freeze(models); assert.throws(() => originalJudgeLineup(f.ctx), /mixed, unknown/);
  }
  f.freeze([luna]); f.save(f.packPath, { ...JSON.parse(readFileSync(f.packPath, 'utf8')), judge_model: JUDGE_LINEUPS.sol61[0] });
  assert.throws(() => originalJudgeLineup(f.ctx), /inconsistent frozen model/);
  f.freeze([]); assert.throws(() => originalJudgeLineup(f.ctx), /malformed frozen/);
});

// Intercept only fixture subprocesses: preparation stops at stamping, before
// metadata/rendering or evidence writes. This checks the actual invocation.
test('physics final preparation and all final judge gates select the same authenticated lane; math inherits its existing env', async t => {
  const f = fixture(t);
  f.save(join(f.root, 'research/demo-batch-1.pages.json'), [{ id: 'page-a', items: [{ id: 'item-a' }] }]);
  for (const dir of ['.physics-autopilot/demo', '.autopilot/demo']) {
    mkdirSync(join(f.root, dir), { recursive: true }); f.save(join(f.root, dir, 'state.json'), { run: 'demo', dispatches: {} });
  }
  const original = childProcess.spawnSync, calls: any[] = [];
  childProcess.spawnSync = ((command: any, args: any[], options: any) => {
    assert.equal(options.cwd, f.root); calls.push({ command, args, options });
    return { status: args[0].endsWith('/apply-judge-stamps.mjs') ? 1 : 0, stdout: '', stderr: 'fixture stamp boundary' };
  }) as any;
  syncBuiltinESMExports();
  try {
    for (const name of ['luna', 'sol', 'sol61']) {
      f.freeze([...JUDGE_LINEUPS[name]]); calls.length = 0;
      await assert.rejects(prepareFinal(f.root, 'demo', { physics: true }), /fixture stamp boundary/);
      const invocation = calls.at(-1);
      assert.equal(invocation.options.env.JUDGE_LINEUP, name);
      assert.ok(invocation.args.includes('--apply')); assert.ok(invocation.args.includes('--exclude-published'));
      const gates = stages.find(stage => stage.id === '6-final-validation-v3')!.gates(f.ctx);
      const judgeGates = gates.filter((gate: any) => ['judge-stamps', 'judge-closure', 'level-coverage'].includes(gate.id));
      assert.equal(judgeGates.length, 3);
      for (const gate of judgeGates) assert.deepEqual(gate.argv.slice(0, 3), ['env', `JUDGE_LINEUP=${name}`, 'node']);
      assert.ok(judgeGates.find((gate: any) => gate.id === 'judge-stamps').argv.includes('--verify'));
    }
    calls.length = 0;
    await assert.rejects(prepareFinal(f.root, 'demo'), /fixture stamp boundary/);
    assert.equal(calls.at(-1).options.env.JUDGE_LINEUP, process.env.JUDGE_LINEUP);
    assert.ok(calls.at(-1).args.includes('--step5-run'));
    f.freeze(['unknown-model']); calls.length = 0;
    await assert.rejects(prepareFinal(f.root, 'demo', { physics: true }), /mixed, unknown/);
    assert.equal(calls.length, 0, 'invalid lineage fails before any preparation command');
  } finally { childProcess.spawnSync = original; syncBuiltinESMExports(); }
});
