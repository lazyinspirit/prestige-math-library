import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { Executor } from '../src/executor.mts';
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
  assert.equal(stage.deferConstructionArtifactsUntilDrain, undefined);
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

function holdFixture(t: any) {
  const dir = mkdtempSync(join(tmpdir(), 'compact-unit-holds-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const ctx = { run: 'sample', stateDir: dir };
  const doc = { version: 1, run: 'sample', authorized_by: 'owner', owner_identity: '/root',
    holds: [{ stages: ['3a-refute'], units: ['52'] }] };
  const put = (value: any) => writeFileSync(join(dir, 'owner-unit-holds.json'), JSON.stringify(value));
  return { ctx, dir, doc, put };
}

test('exact local hold keeps native membership and dependency blocking, releases dynamically', t => {
  const f = holdFixture(t), units = () => ['51', '52', '53'];
  const native = { id: '3a-refute', units, unitPrerequisites: (_c: any, u: string) => u === '53' ? ['52'] : [],
    gates: () => ['unchanged'], plan: () => [] };
  const [stage, split] = ownerSupervisedCompactStages([native, { id: '3a-split', units }]);
  assert.equal(stage.unitEligible(f.ctx, '52'), true);
  f.put(f.doc);
  assert.equal(stage.units, units); assert.equal(stage.plan, native.plan);
  assert.equal(stage.unitEligible(f.ctx, '52'), false);
  assert.equal(stage.unitEligible(f.ctx, '51'), true);
  assert.equal(stage.unitEligible(f.ctx, '520'), true);
  assert.equal(split.unitEligible(f.ctx, '52'), true);
  const engine = { initialConstructionContext: (_s: any, c: any) => c, unitsComplete: () => new Set() };
  const readiness = () => Executor.prototype.unitReadiness.call(engine as any, stage, f.ctx, units());
  assert.deepEqual(readiness().ready, ['51']); // 52 stays owed; 53 still requires it.
  assert.deepEqual(stage.units(f.ctx), ['51', '52', '53']);
  f.put({ ...f.doc, holds: [] });
  assert.deepEqual(readiness().ready, ['51', '52']); // releasing is not completion.
  rmSync(join(f.dir, 'owner-unit-holds.json'));
  assert.equal(stage.unitEligible(f.ctx, '52'), true);
});

test('config stateDir fallback and inherited eligibility compose without overriding final stages', t => {
  const f = holdFixture(t); f.put(f.doc);
  const native = { id: '3a-refute', units: () => ['51', '52', '53'], unitEligible: (_c: any, u: string) => u !== '51' };
  const final = { id: '6-final-validation-v3', unitEligible: () => true };
  const [stage, last] = ownerSupervisedCompactStages([native, final]);
  const ctx = { run: 'sample', config: { stateDir: f.dir } };
  assert.equal(stage.unitEligible(ctx, '51'), false);
  assert.equal(stage.unitEligible(ctx, '52'), false);
  assert.equal(stage.unitEligible(ctx, '53'), true);
  assert.equal(last, final);
  const other = mkdtempSync(join(tmpdir(), 'compact-hold-precedence-'));
  t.after(() => rmSync(other, { recursive: true, force: true }));
  assert.equal(stage.unitEligible({ ...ctx, stateDir: other }, '52'), true);
});

test('malformed authority and wildcard or ambiguous selectors fail closed', t => {
  const f = holdFixture(t), [stage] = ownerSupervisedCompactStages([{ id: '3a-refute', units: () => ['51', '52', '53'] }]);
  const invalid = [null, [], { ...f.doc, version: 2 }, { ...f.doc, run: 'other' },
    { ...f.doc, authorized_by: 'worker' }, { ...f.doc, owner_identity: '/root/worker' },
    { ...f.doc, extra: true }, { ...f.doc, holds: null }, { ...f.doc, holds: [null] },
    ...[{ stages: [], units: ['52'] }, { stages: ['unknown'], units: ['52'] },
      { stages: ['3a-refute'], units: ['*'] }, { stages: ['3a-refute'], units: [52] },
      { stages: ['3a-refute'], units: ['520'] },
      { stages: ['3a-refute'], units: [] }, { stages: ['3a-refute'], units: ['52', '52'] },
      { stages: ['3a-refute', '3a-refute'], units: ['52'] },
      { stages: ['3a-refute'], units: ['52'], extra: true }].map(h => ({ ...f.doc, holds: [h] }))];
  for (const value of invalid) { f.put(value); assert.throws(() => stage.unitEligible(f.ctx, '51')); }
  f.put(f.doc);
  const [noUnits] = ownerSupervisedCompactStages([{ id: '3a-refute' }]);
  assert.throws(() => noUnits.unitEligible(f.ctx, '51'), /native stage membership/);
  writeFileSync(join(f.dir, 'owner-unit-holds.json'), '{partial');
  assert.throws(() => stage.unitEligible(f.ctx, '51'));
});
