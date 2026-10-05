import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkStep3, itemHash, loadStep3, recordStep3 } from './step3-decisions.mjs';

const sha = row => createHash('sha256').update(JSON.stringify(row)).digest('hex');
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step3-stable-snapshot-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research', 'items']) mkdirSync(join(root, dir));
  const write = (path, bytes) => writeFileSync(join(root, path), bytes);
  const item = (id, deps = []) => `---\nid: ${id}\nkind: lemma\nstatus: draft\ndeps: [${deps.join(', ')}]\n---\n## Statement\n\n${id}.\n## Proof\n\nActual proof.\n`;
  write('items/lem-supplier.md', item('lem-supplier'));
  write('items/lem-consumer.md', item('lem-consumer', ['lem-supplier']));
  write('research/r-batch-1.pages.json', JSON.stringify([
    { id: 'page-a', kind: 'A', companion: 'page-b', items: [{ id: 'lem-supplier', deps: [] }, { id: 'lem-consumer', deps: ['lem-supplier'] }] },
    { id: 'page-b', kind: 'B', companion: 'page-a', items: [] },
  ]));
  const scope = snapshot => recordStep3(root, { run: 'r', phase: 'scope', page: 'page-a', owner: true, decision: 'proceed', reason: 'Examined this scope.' }, snapshot);
  const decide = (id, snapshot) => recordStep3(root, { run: 'r', phase: 'item', item: id, owner: true, decision: 'repaired',
    dependencies: id === 'lem-consumer' ? ['lem-supplier'] : [], reason: 'Examined current proof and dependencies.' }, snapshot);
  return { root, write, item, scope, decide };
}

test('stable snapshot reuses cache with the same raw hashes and ordinary receipt history', t => {
  const f = fixture(t), snapshot = loadStep3(f.root, 'r');
  f.scope(snapshot);
  for (const id of ['lem-supplier', 'lem-consumer']) {
    const cached = f.decide(id, snapshot);
    assert.equal(cached.sha256, itemHash(loadStep3(f.root, 'r'), id, cached.dependencies));
    const fresh = f.decide(id);
    assert.equal(fresh.sha256, cached.sha256);
    const history = join(f.root, `research/r-step3b-owner-history-${id}/${sha(cached)}.json`);
    assert.deepEqual(JSON.parse(readFileSync(history)), cached);
  }
  assert.equal(checkStep3(loadStep3(f.root, 'r'), 'final').closed, true);
});

test('fresh full validation rejects a stale cached receipt after a supplier changes midpass', t => {
  const f = fixture(t), snapshot = loadStep3(f.root, 'r');
  f.scope(snapshot); f.decide('lem-supplier', snapshot);
  const originalHash = itemHash(snapshot, 'lem-consumer', ['lem-supplier']);
  f.write('items/lem-supplier.md', `${f.item('lem-supplier')}\nChanged proof inputs during pass.\n`);
  const stale = f.decide('lem-consumer', snapshot);
  assert.equal(stale.sha256, originalHash);
  const final = checkStep3(loadStep3(f.root, 'r'), 'final');
  assert.equal(final.closed, false);
  assert.deepEqual(final.work.filter(row => row.item).map(row => row.item).sort(), ['lem-consumer', 'lem-supplier']);
  // Re-certification must restart with fresh inputs, including the supplier.
  const fresh = loadStep3(f.root, 'r');
  f.decide('lem-supplier', fresh); f.decide('lem-consumer', fresh);
  assert.equal(checkStep3(loadStep3(f.root, 'r'), 'final').closed, true);
});

test('snapshot identity rejects another root/run and copied or fabricated contexts', t => {
  const f = fixture(t), other = fixture(t), snapshot = loadStep3(f.root, 'r');
  f.scope();
  for (const invalid of [loadStep3(other.root, 'r'), { ...snapshot }, {}])
    assert.throws(() => f.decide('lem-supplier', invalid), /exact root and run/);
  assert.throws(() => recordStep3(f.root, { run: 'wrong-run', phase: 'scope', page: 'page-a', owner: true,
    decision: 'proceed', reason: 'Wrong identity.' }, snapshot), /exact root and run/);
});
