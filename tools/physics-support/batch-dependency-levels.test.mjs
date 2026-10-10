import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { computeBatchDependencyLevels, computeRunBatchDependencyLevels,
  writeBatchDependencyLevels, checkBatchDependencyLevels, batchDependencyLevelsPath } from './batch-dependency-levels.mjs';

const run = 'levels';
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-batch-levels-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'items'));
  const batch = (n, requires = [], items = []) => writeFileSync(
    join(root, 'research', `${run}-batch-${n}.pages.json`), JSON.stringify([
      { id: `page-${n}`, kind: 'A', companion: `page-${n}-examples`, requires, items },
      { id: `page-${n}-examples`, kind: 'B', items: [] },
    ]));
  const carrier = (id, fm = {}) => writeFileSync(join(root, 'items', `${id}.md`),
    `---\n${Object.entries({ id, ...fm }).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}\n---\n`);
  return { root, batch, carrier };
}

test('pure calculation orders roots, chains and independent batches by dependency level', () => {
  assert.deepEqual(computeBatchDependencyLevels([
    { batch: '2', requires: ['10'] }, { batch: '10', requires: ['79'] },
    { batch: '79', requires: [] }, { batch: '3', requires: [] },
  ]), [
    { batch: '3', dependency_level: 0, requires: [] },
    { batch: '79', dependency_level: 0, requires: [] },
    { batch: '10', dependency_level: 1, requires: ['79'] },
    { batch: '2', dependency_level: 2, requires: ['10'] },
  ]);
});

test('pure calculation rejects cycles, unknown owners and duplicate owners', () => {
  assert.throws(() => computeBatchDependencyLevels([
    { batch: '1', requires: ['2'] }, { batch: '2', requires: ['1'] },
  ]), /Batch dependency cycle: 1 -> 2 -> 1/);
  assert.throws(() => computeBatchDependencyLevels([{ batch: '1', requires: ['2'] }]), /Unknown prerequisite batch owner: 2/);
  assert.throws(() => computeBatchDependencyLevels([
    { batch: '1', requires: [] }, { batch: '1', requires: [] },
  ]), /duplicate batch ownership/);
});

test('empty inventories use page prerequisites, external pages remain context, and corpus is unread', t => {
  const f = fixture(t);
  f.batch(1, ['page-10', 'external-page']); f.batch(10); f.batch(3);
  writeFileSync(join(f.root, 'items', 'unrelated.md'), 'invalid frontmatter');
  const current = computeRunBatchDependencyLevels(f.root, run);
  assert.deepEqual(current.batches.map(row => [row.batch, row.dependency_level]), [['3', 0], ['10', 0], ['1', 1]]);
});

test('manifest and carrier dependencies including aliases contribute actual batch levels', t => {
  const f = fixture(t);
  f.batch(1, [], [{ id: 'def-one', deps: ['old-ten'] }]);
  f.batch(10, [], [{ id: 'def-ten', deps: [] }]);
  f.batch(79, [], [{ id: 'def-root', deps: [] }]);
  f.carrier('def-ten', { aliases: ['old-ten'], deps: ['def-root'] });
  const current = computeRunBatchDependencyLevels(f.root, run);
  assert.deepEqual(current.batches, [
    { batch: '79', dependency_level: 0, requires: [] },
    { batch: '10', dependency_level: 1, requires: ['79'] },
    { batch: '1', dependency_level: 2, requires: ['10'] },
  ]);
});

test('write/check binds current manifests and graph, and refreshes changed carriers', t => {
  const f = fixture(t);
  f.batch(1, [], [{ id: 'def-one' }]); f.batch(2, [], [{ id: 'def-two' }]);
  const first = writeBatchDependencyLevels(f.root, run);
  assert.deepEqual(checkBatchDependencyLevels(f.root, run), first);
  f.carrier('def-one', { deps: ['def-two'] });
  assert.throws(() => checkBatchDependencyLevels(f.root, run), /Stale batch dependency levels/);
  const second = writeBatchDependencyLevels(f.root, run);
  assert.notEqual(second.input_sha256, first.input_sha256);
  f.batch(1, ['external-page'], [{ id: 'def-one' }]);
  assert.throws(() => checkBatchDependencyLevels(f.root, run), /Stale batch dependency levels/);
  assert.notEqual(computeRunBatchDependencyLevels(f.root, run).input_sha256, second.input_sha256);
});

test('current manifest cycles reject level generation', t => {
  const f = fixture(t);
  f.batch(1, ['page-2']); f.batch(2, ['page-1']);
  assert.throws(() => writeBatchDependencyLevels(f.root, run), /Batch dependency cycle/);
});

test('CLI writes and checks with explicit root or cwd', t => {
  const f = fixture(t); f.batch(1);
  const script = new URL('./batch-dependency-levels.mjs', import.meta.url).pathname;
  const written = spawnSync(process.execPath, [script, 'write', '--run', run, '--root', f.root], { encoding: 'utf8' });
  assert.equal(written.status, 0, written.stderr);
  assert.equal(JSON.parse(readFileSync(batchDependencyLevelsPath(f.root, run), 'utf8')).batches[0].dependency_level, 0);
  const checked = spawnSync(process.execPath, [script, 'check', '--run', run], { cwd: f.root, encoding: 'utf8' });
  assert.equal(checked.status, 0, checked.stderr);
});
