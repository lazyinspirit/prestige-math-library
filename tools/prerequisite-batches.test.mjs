import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { prerequisiteBatches } from './batch-scope-review.mjs';

const run = 'prerequisites';
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'math-prerequisites-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'items'));
  const batch = (n, items = [], requires = []) => {
    const id = `page-${n}`;
    writeFileSync(join(root, 'research', `${run}-batch-${n}.pages.json`), JSON.stringify([
      { id, kind: 'A', companion: `${id}-examples`, items, requires },
      { id: `${id}-examples`, kind: 'B', items: [] },
    ]));
  };
  const carrier = (id, fm = {}) => writeFileSync(join(root, 'items', `${id}.md`),
    `---\n${Object.entries({ id, ...fm }).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}\n---\n`);
  // A full corpus read fails on this file, proving the fast path avoids it.
  const poison = () => writeFileSync(join(root, 'items', 'unrelated.md'), 'No frontmatter');
  return { root, batch, carrier, poison, resolve: n => prerequisiteBatches(root, run, n) };
}

test('empty inventories resolve page prerequisites without reading the corpus', t => {
  const f = fixture(t);
  f.batch(10, [], ['page-2', 'page-10', 'external-page']);
  f.batch(2);
  f.poison();
  assert.deepEqual(f.resolve(10), ['2']);
});

test('canonical manifest owners need no carriers or corpus scan and sort numerically', t => {
  const f = fixture(t);
  f.batch(3, [{ id: 'def-consumer', deps: ['def-ten', 'def-two', 'def-consumer'] }]);
  f.batch(10, [{ id: 'def-ten' }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.poison();
  assert.deepEqual(f.resolve(3), ['2', '10']);
});

test('carrier deps augment manifest deps and are refreshed on each call', t => {
  const f = fixture(t);
  f.batch(3, [{ id: 'def-consumer', deps: ['def-two'] }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.batch(10, [{ id: 'def-ten' }]);
  f.carrier('def-consumer', { deps: ['def-ten'], justified_by: ['def-nonlogical'] });
  f.poison();
  assert.deepEqual(f.resolve(3), ['2', '10']);
  f.carrier('def-consumer', { deps: [] });
  assert.deepEqual(f.resolve(3), ['2']);
});

test('canonical external suppliers add no batch and need no corpus scan', t => {
  const f = fixture(t);
  f.batch(1, [{ id: 'def-consumer', deps: ['def-external'] }]);
  f.carrier('def-external');
  f.poison();
  assert.deepEqual(f.resolve(1), []);
});

test('used manifest and carrier aliases resolve to current in-run owners', t => {
  const f = fixture(t);
  f.batch(3, [{ id: 'def-consumer', deps: ['old-two', 'old-external'] }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.batch(10, [{ id: 'def-ten' }]);
  f.carrier('def-consumer', { deps: ['old-ten'] });
  f.carrier('def-two', { aliases: ['old-two'] });
  f.carrier('def-ten', { aliases: ['old-ten'] });
  f.carrier('def-external', { aliases: ['old-external'] });
  assert.deepEqual(f.resolve(3), ['2', '10']);
  f.carrier('def-two', { aliases: [] });
  assert.deepEqual(f.resolve(3), ['10']);
});

test('an ambiguous used alias rejects dependency resolution', t => {
  const f = fixture(t);
  f.batch(1, [{ id: 'def-consumer', deps: ['old-supplier'] }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.carrier('def-two', { aliases: ['old-supplier'] });
  f.carrier('def-external', { aliases: ['old-supplier'] });
  assert.throws(() => f.resolve(1), /Ambiguous alias old-supplier/);
});

test('unused ambiguous aliases do not affect a used alias', t => {
  const f = fixture(t);
  f.batch(1, [{ id: 'def-consumer', deps: ['old-two', 'missing'] }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.carrier('def-two', { aliases: ['old-two', 'unused'] });
  f.carrier('def-external', { aliases: ['unused'] });
  assert.deepEqual(f.resolve(1), ['2']);
});

test('canonical IDs win over aliases even while another alias requires a scan', t => {
  const f = fixture(t);
  f.batch(1, [{ id: 'def-consumer', deps: ['def-two', 'old-three'] }]);
  f.batch(2, [{ id: 'def-two' }]);
  f.batch(3, [{ id: 'def-three' }]);
  f.carrier('def-two');
  f.carrier('def-three', { aliases: ['def-two', 'old-three'] });
  assert.deepEqual(f.resolve(1), ['2', '3']);
});
