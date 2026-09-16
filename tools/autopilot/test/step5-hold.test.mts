import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stages } from '../stages/mathlib.mts';
import { holdStep5 } from '../stages/step5-hold.mts';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const STEP5 = ['5a-prepare', '5a-read', '5a-split', '5a-refute', '5a-collect',
  '5a-adjudicate', '5a-baseline', '5b-edges', '5b-cross', '5b-close'];

test('Step 5 has no mathematical repair dispatch, repair budget or fingerprint', () => {
  // The rebuild deletes the gate-triggered repair wave: a failing 5a or 5b gate
  // is an owner hold, so no stage may keep a hook, a budget or a fingerprint
  // that a future refactor could re-arm.
  for (const id of STEP5) {
    const stage: any = stages.find(s => s.id === id);
    assert.ok(stage, `${id} must exist in the shipped table`);
    assert.equal(stage.onGateFailure, undefined, `${id} must not launch a gate-triggered repair`);
    assert.equal(stage.maxFixRounds, undefined, `${id} must not bound repair rounds`);
    assert.equal(stage.perItemFixBudget, undefined, `${id} must not charge per-item repair budgets`);
    assert.equal(stage.repairFingerprint, undefined, `${id} must not rearm on a repair fingerprint`);
    assert.equal(stage.batchRepairs, undefined, `${id} must not claim a batch repair envelope`);
  }
  for (const id of ['5a-adjudicate', '5b-cross']) {
    assert.equal((stages.find(s => s.id === id) as any).onHold, holdStep5,
      `${id} reports the item-level owner hold`);
  }
});

test('the Step 5 hold names every carrier, excludes foreign stages, and never dispatches', t => {
  const repo = mkdtempSync(join(tmpdir(), 'step5-hold-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research'));
  const result = holdStep5({ ctx: { repo, run: 'demo' }, stage: { id: '5a-adjudicate' },
    executor: { start: () => assert.fail('unexpected dispatch') },
    failure: { id: 'precheck', output: 'ERROR proof [thm-broken]: gap', advisory: [
      { id: 'risk-report', output: 'no risk_review for thm-high' },
      { id: 'depcheck', stage: '3b-author', output: 'not ours' },
    ] } });
  assert.match(result.owner.reason, /demo-step5-blockers\.json/);
  const report = JSON.parse(readFileSync(join(repo, 'research/demo-step5-blockers.json'), 'utf8'));
  assert.equal(report.run, 'demo');
  assert.equal(report.stage, '5a-adjudicate');
  assert.deepEqual(report.failures.map((row: any) => row.id), ['precheck', 'risk-report'],
    'the hold keeps this stage\'s primary and advisory findings and drops foreign carriers');
  assert.equal(report.failures[0].advisory, undefined, 'the nested advisory list is flattened');
  assert.match(report.action, /amended_repair/);
  assert.match(report.action, /owner-recertify/);
  assert.match(report.action, /autopilot retry/);
});

test('executor holds a Step 5 gate failure without spending repair budgets or starting work', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'step5-executor-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research')); mkdirSync(join(repo, '.autopilot'));
  const config: any = { repo, run: 'demo', stateDir: join(repo, '.autopilot'), argv: ['true'],
    dispatchDir: join(repo, 'research/demo-dispatch'), coversMap: {}, adoptCommand: false };
  const state = new State(statePath(config.stateDir)).init('demo');
  const executor = new Executor({ config, stages,
    adapter: makeExecAdapter({ argv: ['true'], cwd: repo }), state,
    reporter: new Reporter({ dir: config.stateDir, intervalMs: 60_000 }) });
  const stage: any = stages.find(s => s.id === '5a-adjudicate');
  state.stage(stage.id).fixRounds = 9; // Old repair history must not suppress the hold.
  const attempts = {
    '5a-adjudicate:precheck:thm-broken': { n: 3, stage: '5a-adjudicate', lastAt: new Date().toISOString() },
  };
  state.data.gateAttempts = attempts;
  for (let i = 0; i < 3; i += 1) {
    assert.equal(await (executor as any).spendRepairRound(stage,
      { id: 'precheck', ok: false, output: 'ERROR proof [thm-broken]: gap' }, { repo, run: 'demo' }, 'test'),
    'waiting');
  }
  assert.equal(executor.inflight.size, 0);
  assert.equal(state.stage(stage.id).fixRounds, 9, 'the hold does not spend a repair round');
  assert.deepEqual(state.data.gateAttempts, attempts,
    'the hold does not consume a per-item retry allowance');
  assert.equal(state.data.blockers.filter((b: any) => b.key === 'owner:5a-adjudicate').length, 1);
  const report = JSON.parse(readFileSync(join(repo, 'research/demo-step5-blockers.json'), 'utf8'));
  assert.deepEqual(report.failures.map((row: any) => row.id), ['precheck']);
});
