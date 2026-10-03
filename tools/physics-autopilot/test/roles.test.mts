import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCognitive, COGNITIVE_JOBS, MECHANICAL_ONLY } from '../src/roles.mts';
import { stages } from '../stages/mathlib.mts';

test('cognitive jobs are allowed', () => {
  for (const j of COGNITIVE_JOBS) assert.equal(assertCognitive(j), true);
});

test('a mechanical job is refused, with the reason', () => {
  for (const j of MECHANICAL_ONLY.keys()) {
    assert.throws(() => assertCognitive(j, { stage: 's', label: 'l' }), /is mechanical/);
  }
});

test('the transition itself can never be given to a model', () => {
  assert.throws(() => assertCognitive('transition'), /predicate over disk/);
});

test('a dispatch with no declared job is refused', () => {
  assert.throws(() => assertCognitive(undefined, { stage: 's', label: 'l' }), /declares no `job`/);
});

test('an unknown job is refused rather than assumed cognitive', () => {
  assert.throws(() => assertCognitive('vibes'), /unknown job/);
});

test('every stage in the mathlib pipeline declares a cognitive job', () => {
  const ctx = { run: 'x', repo: '/nonexistent', dispatchDir: '/nonexistent' };
  for (const s of stages) {
    if (!s.plan) continue;
    // plan() over a synthetic pending list; batches() returns [] on a missing
    // repo, so drive it with explicit units to exercise every descriptor.
    const plans = s.plan({ ...ctx }, ['1', '2', '3']) ?? [];
    for (const p of plans) {
      assert.doesNotThrow(() => assertCognitive(p.job, { stage: s.id, label: p.label }),
        `stage ${s.id} dispatch ${p.label} has job=${JSON.stringify(p.job)}`);
    }
  }
});
