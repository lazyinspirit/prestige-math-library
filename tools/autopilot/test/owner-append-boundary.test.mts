import test from 'node:test';
import assert from 'node:assert/strict';
import { ownerSupervisedCompactStages } from '../stages/owner-supervised-compact.mts';

test('native append planning retains its own reviews and gates unchanged', () => {
  const native = ['1-append-drift-1', '1-append-apply-1'].map(id => ({
    id, gates: () => [{ id: 'native-planning-gate', argv: ['node', 'check.mjs'] }],
    beforeGates: () => 'native preparation', onProgress: () => 'native progress',
  }));
  const wrapped = ownerSupervisedCompactStages(native);
  for (let i = 0; i < native.length; i++) {
    assert.equal(wrapped[i], native[i]);
    assert.equal(wrapped[i].gates, native[i].gates);
    assert.equal(wrapped[i].beforeGates, native[i].beforeGates);
  }
});

test('authored and original planning batteries retain owner supervision', () => {
  const native = ['1-drift', '1-drift-apply', '1-scaffold', '1-append-drift-0', '2-scope-review']
    .map(id => ({ id, gates: () => [{ id: 'required', argv: ['node', 'check.mjs'] }] }));
  const wrapped = ownerSupervisedCompactStages(native);
  for (let i = 0; i < native.length; i++) {
    assert.notEqual(wrapped[i], native[i]);
    assert.notEqual(wrapped[i].gates, native[i].gates);
    assert.equal(typeof wrapped[i].beforeGates, 'function');
  }
});
