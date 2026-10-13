import test from 'node:test';
import assert from 'node:assert/strict';
import { verdictIsCurrent } from './judge-currency.mjs';
const current = { context: 'current-supplier-context', item: 'unchanged-item' };
const strict = { strictContext: true };

test('strict native currency requires both item and context, preserving the legacy default', () => {
  const oldSupplier = { context_sha256: 'old-supplier-context', item_sha256: current.item };
  assert.equal(verdictIsCurrent(oldSupplier, current), true);
  assert.equal(verdictIsCurrent(oldSupplier, current, strict), false);
  const oldItem = { context_sha256: current.context, item_sha256: 'old-item' };
  assert.equal(verdictIsCurrent(oldItem, current), true);
  assert.equal(verdictIsCurrent(oldItem, current, strict), false);
  assert.equal(verdictIsCurrent({ context_sha256: current.context, item_sha256: current.item }, current, strict), true);
  assert.equal(verdictIsCurrent({ context_sha256: current.context }, current, strict), false);
  assert.equal(verdictIsCurrent({ item_sha256: current.item }, current, strict), false);
  assert.equal(verdictIsCurrent(null, current, strict), false);
  assert.equal(verdictIsCurrent({}, { context: null, item: null }, strict), false);
});
