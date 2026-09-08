import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { collect, refresh } from '../../frontier-dependency-ledger.mjs';

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'frontier-ledger-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'items'));
  const put = (name: string, data: any) => writeFileSync(join(root, 'research', name), JSON.stringify(data));
  put('r-batch-1.pages.json', [{ id: 'a', requires: ['b'], items: [
    { id: 'lem-a', deps: ['lem-b', 'lem-b', 'published'], justified_by: ['lem-b'] },
    { id: 'lem-local', deps: ['lem-a'] },
  ] }]);
  put('r-batch-2.pages.json', [{ id: 'b', items: [{ id: 'lem-b', deps: [] }] }]);
  return { root, put };
}

test('includes same-group cross-batch item/page edges and deduplicates declarations', t => {
  const { root, put } = fixture(t);
  put('r-alpha-groups.json', [{ label: 'a', covers: ['1', '2'] }]);
  const data = collect(root, 'r');
  assert.equal(data.edges.length, 2);
  assert.equal(data.edges.find((e: any) => e.kind === 'item').declarations.length, 2);
  assert.deepEqual(data.unreviewed_batches, ['1', '2']);
});

test('preserves implicit findings and updates one review without duplicates', t => {
  const { root, put } = fixture(t);
  const row = { kind: 'item', consumer: 'lem-local', supplier: 'lem-b', status: 'open', evidence: 'Used in proof step 2.' };
  put('r-batch-1.cross-batch-dependencies.json', [row]);
  refresh(root, 'r');
  put('r-batch-1.cross-batch-dependencies.json', [{ ...row, status: 'verified', evidence: 'Checked exact hypothesis.' }]);
  refresh(root, 'r');
  const data = JSON.parse(readFileSync(join(root, 'research/r-cross-batch-dependencies.json'), 'utf8'));
  const found = data.edges.filter((e: any) => e.consumer === 'lem-local');
  assert.equal(found.length, 1);
  assert.equal(found[0].reviews[0].status, 'verified');
});

test('refresh removes stale declarations and retains moved-target review evidence', t => {
  const { root, put } = fixture(t);
  put('r-batch-1.cross-batch-dependencies.json', [{ kind: 'item', consumer: 'lem-a', supplier: 'lem-b', status: 'removed', evidence: 'Replaced the use.' }]);
  put('r-batch-2.pages.json', [{ id: 'b', items: [] }]);
  const data = collect(root, 'r');
  assert.equal(data.edges.length, 1);
  assert.equal(data.orphaned_reviews.length, 1);
});

test('rejects duplicate review rows and foreign consumer ownership', t => {
  const { root, put } = fixture(t);
  const row = { kind: 'item', consumer: 'lem-a', supplier: 'lem-b', status: 'open', evidence: 'Check.' };
  put('r-batch-1.cross-batch-dependencies.json', [row, row]);
  assert.throws(() => collect(root, 'r'), /duplicate/);
  put('r-batch-1.cross-batch-dependencies.json', []);
  put('r-batch-2.cross-batch-dependencies.json', [row]);
  assert.throws(() => collect(root, 'r'), /ownership/);
});

test('refresh refuses a concurrent lock without touching its owner', t => {
  const { root } = fixture(t);
  const lock = join(root, 'research/r-cross-batch-dependencies.json.lock');
  writeFileSync(lock, 'other merge');
  assert.throws(() => refresh(root, 'r'), /EEXIST/);
  assert.equal(readFileSync(lock, 'utf8'), 'other merge');
});

test('review joins require all batch inputs and explicit edge dispositions', t => {
  const { root, put } = fixture(t);
  assert.throws(() => refresh(root, 'r', true), /incomplete/);
  put('r-batch-1.cross-batch-dependencies.json', [
    { kind: 'page', consumer: 'a', supplier: 'b', status: 'verified', evidence: 'Current page interface.' },
    { kind: 'item', consumer: 'lem-a', supplier: 'lem-b', status: 'open', evidence: 'Needs stronger hypothesis.' },
  ]);
  put('r-batch-2.cross-batch-dependencies.json', []);
  assert.doesNotThrow(() => refresh(root, 'r', true));
});

test('authored justifications and forward references supplement scaffold edges', t => {
  const { root } = fixture(t);
  writeFileSync(join(root, 'items/lem-local.md'), '---\nid: lem-local\njustified_by: [lem-b]\nforward_refs: [lem-b]\n---\nProof.\n');
  const row = collect(root, 'r').edges.find((e: any) => e.consumer === 'lem-local');
  assert.deepEqual(row.declarations, ['items/lem-local.md#justified_by', 'items/lem-local.md#forward_refs']);
});

test('authored page prerequisites supplement current manifest metadata', t => {
  const { root, put } = fixture(t);
  put('r-batch-1.pages.json', [{ id: 'a', category: 'test', requires: [], items: [] }]);
  mkdirSync(join(root, 'library/test'), { recursive: true });
  writeFileSync(join(root, 'library/test/a.md'), '---\nid: a\nrequires: [b]\n---\nPage.\n');
  assert.deepEqual(collect(root, 'r').edges[0].declarations, ['library/test/a.md#requires']);
});

test('TypeScript joins refresh the ledger without changing frozen judge stages', async () => {
  const { stages } = await import('../stages/mathlib.mts');
  const ctx = { run: 'r', repo: process.cwd() };
  for (const id of ['3-review', '3-recheck', '5-author', '6c-cross', '8-preflight', '9-scope', '9-close']) {
    const stage = stages.find((s: any) => s.id === id)!;
    assert.equal(stage.gates!(ctx as any)[0].id, 'frontier-dependency-ledger', id);
  }
  for (const id of ['7-judge', '9-changes-stamp']) {
    const stage = stages.find((s: any) => s.id === id)!;
    assert.ok(!stage.gates!(ctx as any).some((g: any) => g.id === 'frontier-dependency-ledger'), id);
  }
});
