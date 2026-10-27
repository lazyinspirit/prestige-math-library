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
  ['page kind change', f => { f.after[0].kind = 'B'; }, /page identity.*kind/],
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

function nativeSyncFixture(t) {
  const f = fixture(t, 4), archive = 'research/demo-frontier-append-3';
  f.before[0].examples = [];
  f.row.original = f.put(f.original.path, f.before);
  f.entry.preimages[0].sha256 = f.row.original.sha256;
  f.doc.entry_sha256 = sha(JSON.stringify(f.entry));
  f.after[0].order = 2;
  const snapshot = f.put('research/native-sync-batch-20.json', f.after);
  const original = f.put(`${archive}/preimages/demo-alpha-step1-drift.md`, 'Original actual report\n');
  const report = f.put('research/demo-alpha-step1-append-3-drift.md', '### prior-native\nVERDICT: no-drift\n');
  const merged = readFileSync(join(f.root, original.path), 'utf8')
    + `\n\n<!-- native append review 3; original preimage retained in ${archive} -->\n`
    + readFileSync(join(f.root, report.path), 'utf8');
  f.put('research/demo-alpha-step1-drift.md', merged);
  const prior = { run: 'demo', number: 3, archive, report: report.path, originalReport: original.path,
    preimages: [{ path: 'research/demo-alpha-step1-drift.md', archive: original.path, sha256: original.sha256 }] };
  f.put('research/demo-frontier-appends.json', { version: 1, run: 'demo', appends: [prior, f.entry] });
  const application = f.put(`${archive}/review-applied.json`, { run: 'demo', number: 3, inventoriesPreserved: true,
    manifests: [{ path: f.path, sha256: snapshot.sha256 }], originalReportSha256: original.sha256,
    reportSha256: report.sha256, mergedReportSha256: sha(merged) });
  const result = f.put('research/demo-dispatch/tool-drift-append-apply-3.result.json', { role: 'tool', run: 'demo',
    label: 'drift-append-apply-3', covers: ['append-3'], ok: true, written_by: 'autopilot', ended_at: '2026-10-27T01:00:00Z' });
  f.put('.autopilot/demo/state.json', { run: 'demo', dispatches: { '1-append-apply-3:drift-append-apply-3': {
    stage: '1-append-apply-3', role: 'tool', label: 'drift-append-apply-3', covers: ['append-3'],
    startedAt: '2026-10-27T00:59:00Z', endedAt: '2026-10-27T01:00:01Z', lastExitOk: true } } });
  f.row.native_sync = { number: 3, application, result, manifest: snapshot };
  f.update(); return f;
}

test('prior native SYNC authenticates exact order changes and removal of legacy page fields', t => {
  const f = nativeSyncFixture(t);
  assert.equal(loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry).manifests.get(f.path), f.row.current_sha256);
  // Subsequent item-only authoring can be bound while the exact native page-field snapshot stays immutable.
  f.after[0].items[0].statement = 'Later genuine held metadata repair'; f.update();
  assert.equal(loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry).manifests.size, 1);
});

test('native page-field recovery rejects unbound field changes, wrong generation and changed evidence', t => {
  const f = nativeSyncFixture(t);
  f.after[0].title = 'Unbound later page-field change'; f.update();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /do not match authenticated prior native SYNC/);
  delete f.after[0].title; f.row.native_sync.number = 4; f.update();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /wrong prior native SYNC generation/);
  f.row.native_sync.number = 3; f.save();
  f.put(f.row.native_sync.application.path, '{}');
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /stale evidence/);
});

test('a fresh owner hash cannot replace missing successful native SYNC execution', t => {
  const f = nativeSyncFixture(t);
  f.row.native_sync.result = f.put(f.row.native_sync.result.path, { run: 'demo', role: 'tool', label: 'drift-append-apply-3', ok: false }); f.save();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /not an actual successful native SYNC/);
});

test('a snapshot must match the native receipt full-manifest hash, not just its claimed page fields', t => {
  const f = nativeSyncFixture(t);
  f.row.native_sync.manifest = f.put(f.row.native_sync.manifest.path, f.after.map(p => ({ ...p, title: 'Changed snapshot' }))); f.save();
  assert.throws(() => loadAppendManifestAuthoringRecovery(f.root, 'demo', f.entry), /does not bind exact manifest snapshot/);
});
