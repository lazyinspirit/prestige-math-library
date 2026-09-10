import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMapping, remapJson, compositeBaseline } from '../src/merge-import.mjs';
const source = (run, id) => ({ run, groups: [{ label: 'a', covers: ['1'] }],
  batches: [{ batch: '1', pages: [{ id, items: [{ id: `thm-${id}` }] }, { id: `${id}-examples`, items: [] }] }] });
test('imports disjoint batches and groups without collisions', () => {
  const m = buildMapping([source('left', 'one'), source('right', 'two')]);
  assert.equal(m.pageCount, 4); assert.equal(m.itemCount, 2);
  assert.deepEqual(m.mappings[1].batchMap, { 1: '2' });
  assert.deepEqual(m.mappings[1].groupMap, { a: 'b' });
  assert.throws(() => buildMapping([source('left', 'one'), source('right', 'one')]), /Duplicate page/);
});
test('remaps only structural identities, never mathematics or source evidence', () => {
  const m = { run: 'old', batchMap: { 1: '17' }, groupMap: { a: 'h' } };
  const input = { run: 'old', batch: '1', group: 'a', covers: ['1'], obligation: 'reader:1:2',
    statement: 'a = 1', evidence: 'research/old-reader-1.md', hash: 'a', defect_ids: ['x'] };
  assert.deepEqual(remapJson(input, m, 'new', { x: 'new-x' }), {
    ...input, run: 'new', batch: '17', group: 'h', covers: ['17'], obligation: 'reader:17:2', defect_ids: ['new-x'] });
  assert.deepEqual(remapJson({ batch: 1, ordinal: 1 }, m, 'new'), { batch: 17, ordinal: 1 });
  assert.deepEqual(remapJson({ obligation: 'gate:x', step6_obligation: 'authored:1:thm-x' }, m, 'new', { x: 'new-x' }),
    { obligation: 'gate:new-x', step6_obligation: 'authored:17:thm-x' });
  for (const role of ['touched', 'page']) assert.equal(
    remapJson({ obligation: `${role}:1:id` }, m, 'new').obligation, `${role}:17:id`);
});
test('composite baseline retains earlier owned changes and missing-new-item evidence', () => {
  const first = { label: 'pre-author', at: 'later', hashes: { x: 'late', y: 'kept', z: 'created' } };
  const out = compositeBaseline(first, [{ primaryRun: 'left', run: 'right', snapshot: { at: 'early', hashes: { x: 'early' } }, ids: ['x', 'z'] }]);
  assert.deepEqual(out.hashes, { x: 'early', y: 'kept' });
  assert.equal(first.hashes.x, 'late');
});
