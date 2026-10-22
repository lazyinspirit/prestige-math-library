import test from 'node:test';
import assert from 'node:assert/strict';
import { sameFindingLocation } from './step3-owner-finding-alias.mjs';

test('exact same-subject carrier prefix preserves the interior locator comparison', () => {
  assert.equal(sameFindingLocation('items/post-a.md — Postulate, first paragraph', 'Postulate, first paragraph', 'post-a'), true);
  assert.equal(sameFindingLocation('Postulate, first paragraph', 'items/post-a.md — Postulate, first paragraph', 'post-a'), true);
  assert.equal(sameFindingLocation('items/post-b.md — Postulate, first paragraph', 'Postulate, first paragraph', 'post-a'), false);
  assert.equal(sameFindingLocation('items/post-a.md — Postulate, first paragraph', 'Postulate, second paragraph', 'post-a'), false);
  assert.equal(sameFindingLocation('Postulate, first paragraph', ' postulate, FIRST paragraph ', 'post-a'), true);
});
