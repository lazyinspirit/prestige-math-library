import { test } from 'node:test';
import assert from 'node:assert/strict';
import { step5Stages } from '../stages/mathlib.step5.mts';
import { Executor } from '../src/executor.mts';

test('Step 5 adjudicates a drained ready group while unrelated batches remain unfinished', () => {
  const groups = [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3', '4'] }];
  const stages = step5Stages({
    batches: () => ['1', '2', '3', '4'],
    alphaGroups: () => groups,
    alphaCohort: (_ctx: any, unit: string) => groups.find(g => g.covers.includes(unit))!.covers,
    resultPattern: () => /result/,
  });
  const adjudicate = stages.find(s => s.id === '5a-adjudicate')!;
  const collect = stages.find(s => s.id === '5a-collect')!;
  assert.equal(adjudicate.pipeline, collect.pipeline);
  assert.equal(adjudicate.role, 'alpha');
  assert.ok(adjudicate.gates, 'whole-frontier gates remain at the pipeline join');
  assert.equal(stages.find(s => s.id === '5a-baseline')!.pipeline, undefined);

  const executor = Object.create(Executor.prototype);
  executor.unitsComplete = () => new Set(['1', '2', '3']);
  executor.inflight = new Map();
  executor.adoptedUnits = () => new Set();
  const ctx = { doctor: true } as any;
  assert.deepEqual(executor.readyUnits(adjudicate, collect, ctx, ['1', '2', '3', '4']), ['1', '2']);
  assert.deepEqual(adjudicate.plan!(ctx, ['1', '2']).map((p: any) => p.label), ['5a-a']);

  executor.inflight.set('collect-2', { meta: { stage: collect.id, covers: ['2'] } });
  assert.deepEqual(executor.readyUnits(adjudicate, collect, ctx, ['1', '2']), [],
    'a receipt does not release a group until its writer drains');
});
