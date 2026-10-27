import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { loadAppendManifestAuthoringRecovery } from '../../append-drift-owner-resolutions.mjs';
const sha = raw => createHash('sha256').update(raw).digest('hex');
function fixture(t, number = 3) {
  const root = mkdtempSync(join(tmpdir(), 'append-authoring-recovery-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (path, value) => {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
    return { path, sha256: sha(readFileSync(join(root, path))) };
  };
  const archive = `research/demo-frontier-append-${number}`;
  const path = 'research/demo-batch-20.pages.json';
  const before = [{ id: 'old', kind: 'A', order: 1, items: [{ id: 'lem-old', kind: 'lemma', statement: 'Original' }] },
    { id: 'old-examples', kind: 'B', order: 1.1, items: [] }];
  const original = put(`${archive}/preimages/demo-batch-20.pages.json`, before);
  const entry = { run: 'demo', number, archive, preimages: [{ path, archive: original.path, sha256: original.sha256 }] };
  const after = structuredClone(before);
  after[0].items[0].statement = 'Actual authorized repaired statement';
  after[0].items.push({ id: 'lem-new', kind: 'lemma', statement: 'Actual new helper' });
  const current = put(path, after);
  const contract = put('research/demo-batch-20.proof-contracts.json', { scope: ['lem-old', 'lem-new'], contracts: { 'lem-old': {}, 'lem-new': {} } });
  const repair_evidence = put('research/actual-delegated-repair.md', 'Actual author construction and proof-status limits.\n');
  const items = ['lem-old', 'lem-new'].map((id, index) => ({ page: 'old', id, change: index ? 'added' : 'updated',
    reason: 'Actual authorized authoring, no new readiness',
    source: put(`items/${id}.md`, `---\nid: ${id}\n---\nActual current carrier\n`), contract, repair_evidence }));
  const row = { path, original, current_sha256: current.sha256, items };
  const doc = { version: 1, policy: 'owner-retained-append-manifest-authoring', run: 'demo', number,
    authorized_by: 'owner', owner_identity: '/root', authorized_at: '2026-10-27T10:00:00Z',
    reason: 'Preserve actual authorized authoring without re-review', entry_sha256: sha(JSON.stringify(entry)), records: [row] };
  const save = () => {
    doc.evidence = put(`research/owner-authoring-${number}.json`, { run: 'demo', number, owner: true,
      decision: 'retain-authoring', reason: 'Exact native reconciliation only', records: doc.records });
    put(`${archive}/owner-manifest-authoring-recovery.json`, doc);
  };
  const update = () => { row.current_sha256 = put(path, after).sha256; save(); };
  save();
  return { root, put, entry, before, after, original, row, doc, save, update, path };
}

for (const number of [3, 4]) test(`append ${number} exact owner authoring delta is independently recoverable`, t => {
  const f = fixture(t, number), before = readFileSync(join(f.root, f.original.path));
  const accepted = loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry);
  assert.equal(accepted.manifests.get(f.path), f.row.current_sha256);
  assert.deepEqual(readFileSync(join(f.root, f.original.path)), before);
});

test('missing owner recovery grants no exception', t => {
  const f = fixture(t); rmSync(join(f.root, f.entry.archive, 'owner-manifest-authoring-recovery.json'));
  assert.equal(loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), null);
});

for (const [name, change, error] of [
  ['old ID loss', f => { f.after[0].items.shift(); }, /old item lost or moved/],
  ['old ID move', f => { f.after[1].items.push(f.after[0].items.shift()); }, /old item lost or moved/],
  ['page kind change', f => { f.after[0].kind = 'B'; }, /page identity, kind or fields changed/],
  ['page addition', f => { f.after.push({ id: 'extra', kind: 'A', items: [] }); }, /lost or added prior page/],
  ['unbound row update', f => { f.row.items.pop(); }, /unbound changed or added item/],
  ['wrong item change class', f => { f.row.items[0].change = 'added'; }, /unbound authoring delta/],
  ['duplicate current ID', f => { f.after[1].items.push({ id: 'lem-new' }); }, /duplicate current item/],
] ) test(`${name} fails closed`, t => {
  const f = fixture(t); change(f); f.update();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), error);
});

for (const [name, select] of [
  ['full current manifest', f => ({ path: f.path })],
  ['native archived preimage', f => f.original],
  ['actual source', f => f.row.items[0].source],
  ['actual worksheet', f => f.row.items[0].contract],
  ['delegated repair evidence', f => f.row.items[0].repair_evidence],
]) test(`stale ${name} is rejected`, t => {
  const f = fixture(t); const path = select(f).path; f.put(path, readFileSync(join(f.root, path), 'utf8') + '\n');
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /stale/);
});

test('wrong source ID or missing exact worksheet object is rejected despite fresh hashes', t => {
  const f = fixture(t);
  f.row.items[0].source = f.put('items/lem-old.md', '---\nid: another-item\n---\n'); f.save();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /does not declare/);
  f.row.items[0].source = f.put('items/lem-old.md', '---\nid: lem-old\n---\n');
  const link = f.put('research/demo-batch-20.proof-contracts.json', { scope: ['lem-old', 'lem-new'], contracts: { 'lem-new': {} } });
  f.row.items.forEach(item => { item.contract = link; }); f.save();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /worksheet does not bind/);
});

test('new ID cannot duplicate an item on an unlisted prior batch', t => {
  const f = fixture(t); f.put('research/demo-batch-19.pages.json', [{ id: 'other', kind: 'A', items: [{ id: 'lem-new' }] }]);
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /duplicate current item across/);
});

test('generation-specific receipt cannot be reused for another append', t => {
  const f = fixture(t); f.doc.number = 4; f.save();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /invalid manifest authoring authorization/);
});
