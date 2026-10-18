import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { ownerSupervisedCompactStages, workflowRevision } from '../stages/owner-supervised-compact.mts';

test('compact supervision holds before native gates without changing prompts or final transaction', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'compact-supervision-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const stateDir = join(repo, '.autopilot');
  mkdirSync(stateDir);
  const ctx = { repo, stateDir, run: 'sample' };
  let progressed = 0, drained = false;
  const source = { id: '1-drift', plan: () => [{ brief: 'unchanged' }],
    gates: () => [{ id: 'native' }], onProgress: () => { progressed++; } };
  const final = { id: '6-final-validation-v3', gates: () => [{ id: 'all-final-gates' }] };
  const [stage, last] = ownerSupervisedCompactStages([source, final]);
  assert.equal(workflowRevision, 'six-step-v1-compact');
  assert.equal(stage.plan, source.plan);
  assert.equal(last, final);
  assert.deepEqual(stage.gates({ ...ctx, doctor: true }), [{ id: 'native' }]);
  assert.throws(() => stage.gates(ctx), /Missing owner/);
  const executor = { state: { paused: false, data: { stages: {} }, save() {} },
    inflight: new Map(), liveDispatchLabels: () => [], pipelineGroup: () => [stage],
    stageStatus: () => ({ unitsDone: drained, gatesPassed: false }), reporter: { notify() {} } };
  await stage.onProgress({ ctx, executor, stage });
  assert.equal(progressed, 1);
  assert.equal(executor.state.paused, false);
  drained = true;
  await stage.onProgress({ ctx, executor, stage });
  assert.equal(executor.state.paused, true);
  assert.equal(progressed, 1);
});
