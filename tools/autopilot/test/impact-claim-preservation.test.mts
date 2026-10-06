import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { itemHashGuard, itemSurfaceHash, shortHash } from '../../item-hash.mjs';

const repo = new URL('../../..', import.meta.url).pathname;
const sha = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const item = (id: string, deps = '[]', claim = 'Every object has a cover.', kind = 'theorem') =>
  `---\nid: ${id}\nkind: ${kind}\ndeps: ${deps}\n---\n\n## ${kind === 'definition' ? 'Definition' : 'Statement'}\n\n${claim}\n\n## Proof\n\nProof.\n`;

function fixture(t: any, kind = 'theorem') {
  const root = mkdtempSync(join(tmpdir(), 'impact-claim-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['tools', 'items', 'research']) mkdirSync(join(root, dir));
  for (const file of ['impact-audit.mjs', 'impact-scope.mjs', 'item-hash.mjs', 'frontmatter-list.mjs'])
    copyFileSync(join(repo, 'tools', file), join(root, 'tools', file));
  const before = item('supplier', '[]', 'Every object has a cover.', kind);
  const after = item('supplier', '[new-proof-supplier]', 'Every object has a cover.', kind).replace('Proof.', 'Repaired proof.');
  writeFileSync(join(root, 'items/supplier.md'), after);
  writeFileSync(join(root, 'items/consumer.md'), item('consumer', '[supplier]'));
  writeFileSync(join(root, 'research/before.item'), before);
  const snapshot = (label: string, text: string) => ({ label,
    hashes: { supplier: shortHash(itemHashGuard(text)) },
    surfaces: { supplier: shortHash(itemSurfaceHash(text)) } });
  const ledger = JSON.stringify({ snapshots: [snapshot('before', before), snapshot('after', after)] });
  writeFileSync(join(root, 'research/touches.json'), ledger);
  const proof: any = { version: 1, policy: 'impact-claim-preservation-v1', id: 'supplier', owner: true,
    owner_identity: '/root', at: new Date().toISOString(), reason: 'Actual unchanged claim comparison',
    window: { before_snapshot_sha256: sha(JSON.stringify(JSON.parse(ledger).snapshots[0])),
      after_snapshot_sha256: sha(JSON.stringify(JSON.parse(ledger).snapshots[1])), from: 'before', to: 'after' },
    before: { path: 'research/before.item', sha256: sha(before) },
    after: { guard_sha256: itemHashGuard(after), surface_sha256: itemSurfaceHash(after) },
    claim_sha256: sha(before.match(/^## (Statement|Definition)\n[\s\S]*?(?=^## )/m)![0]) };
  const receipt: any = { version: 1, scope: 'direct-boundary', reviewer: 'Owner mechanical comparison only',
    source: { touch_ledger: 'research/touches.json', from: 'before', to: 'stale' },
    changed_interfaces: [], required_review: [], dispositions: [] };
  const write = () => {
    const bytes = JSON.stringify(proof);
    writeFileSync(join(root, 'research/proof.json'), bytes);
    receipt.claim_preservations = [{ path: 'research/proof.json', sha256: sha(bytes) }];
    writeFileSync(join(root, 'research/impact.json'), JSON.stringify(receipt));
  };
  write();
  const run = (args = ['--receipt', 'research/impact.json', '--json']) => spawnSync(process.execPath,
    ['tools/impact-audit.mjs', '--touches', 'research/touches.json', '--from', 'before', '--to', 'after', '--direct-boundary', ...args],
    { cwd: root, encoding: 'utf8' });
  return { root, before, after, proof, receipt, write, run };
}

test('legacy metadata fingerprint stays a review event without exact claim evidence', t => {
  const f = fixture(t);
  const result = JSON.parse(f.run(['--json']).stdout);
  assert.deepEqual(result.changed, ['supplier']);
  assert.deepEqual(result.required_review, ['consumer']);
});

for (const kind of ['theorem', 'definition']) test(`exact ${kind} preservation records maintenance without inventing consumer review`, t => {
  const f = fixture(t, kind);
  const checked = f.run();
  assert.equal(checked.status, 0, checked.stderr);
  const result = JSON.parse(checked.stdout);
  assert.deepEqual(result.changed, []);
  assert.deepEqual(result.required_review, []);
  assert.deepEqual(result.maintenance_changes, ['supplier']);
  assert.deepEqual(result.maintenance_impacts[0].consumers, ['consumer']);
  assert.equal(result.maintenance_impacts[0].required_review, undefined);
  const refreshed = f.run(['--refresh-receipt', 'research/impact.json']);
  assert.equal(refreshed.status, 0, refreshed.stderr);
  const receipt = JSON.parse(readFileSync(join(f.root, 'research/impact.json'), 'utf8'));
  assert.deepEqual(receipt.dispositions, [], 'inventory comparison creates no review disposition');
  assert.equal(receipt.source.to, 'after');
  assert.deepEqual(receipt.maintenance_changes, ['supplier']);
});

test('true original claim changes remain review subjects even with recomputed current evidence', t => {
  const f = fixture(t);
  const after = f.after.replace('Every object has a cover.', 'Only simple objects have covers.');
  writeFileSync(join(f.root, 'items/supplier.md'), after);
  const path = join(f.root, 'research/touches.json');
  const ledger = JSON.parse(readFileSync(path, 'utf8'));
  ledger.snapshots[1].hashes.supplier = shortHash(itemHashGuard(after));
  ledger.snapshots[1].surfaces.supplier = shortHash(itemSurfaceHash(after));
  const bytes = JSON.stringify(ledger); writeFileSync(path, bytes);
  f.proof.window.after_snapshot_sha256 = sha(JSON.stringify(ledger.snapshots[1]));
  f.proof.after = { guard_sha256: itemHashGuard(after), surface_sha256: itemSurfaceHash(after) };
  f.write();
  const checked = f.run();
  assert.notEqual(checked.status, 0);
  const result = JSON.parse(checked.stdout);
  assert.deepEqual(result.changed, ['supplier']);
  assert.deepEqual(result.required_review, ['consumer']);
  assert.ok(result.errors.some((row: any) => row.code === 'receipt-claim-preservation'));
});

test('claim preservation fails closed on authority, window, identity, hashes, missing claims and escaping sources', t => {
  for (const mutate of [
    (f: any) => f.proof.owner = false,
    (f: any) => f.proof.owner_identity = '/root/invented',
    (f: any) => f.proof.window.from = 'moved-baseline',
    (f: any) => f.proof.window.to = 'moved-endpoint',
    (f: any) => f.proof.window.before_snapshot_sha256 = '0'.repeat(64),
    (f: any) => f.proof.window.after_snapshot_sha256 = '0'.repeat(64),
    (f: any) => f.proof.id = '../../escape',
    (f: any) => f.proof.before.sha256 = '0'.repeat(64),
    (f: any) => f.proof.after.guard_sha256 = '0'.repeat(64),
    (f: any) => f.proof.after.surface_sha256 = '0'.repeat(64),
    (f: any) => f.proof.claim_sha256 = '0'.repeat(64),
    (f: any) => { const text = f.before.replace('kind: theorem', 'kind: lemma'); writeFileSync(join(f.root, 'research/before.item'), text); f.proof.before.sha256 = sha(text); },
    (f: any) => { const text = f.before.replace('## Statement', '## Remarks'); writeFileSync(join(f.root, 'research/before.item'), text); f.proof.before.sha256 = sha(text); },
    (f: any) => { f.proof.before.path = 'items/supplier.md'; f.proof.before.sha256 = sha(f.after); },
    (f: any) => { symlinkSync(join(f.root, 'items/supplier.md'), join(f.root, 'research/escape.item')); f.proof.before.path = 'research/escape.item'; f.proof.before.sha256 = sha(f.after); },
  ]) {
    const f = fixture(t); mutate(f); f.write();
    const original = readFileSync(join(f.root, 'research/impact.json'));
    const checked = f.run();
    assert.notEqual(checked.status, 0);
    assert.ok(JSON.parse(checked.stdout).errors.some((row: any) => row.code === 'receipt-claim-preservation'));
    assert.notEqual(f.run(['--refresh-receipt', 'research/impact.json']).status, 0);
    assert.deepEqual(readFileSync(join(f.root, 'research/impact.json')), original,
      'invalid evidence cannot refresh a receipt');
  }
});

test('appending a later touch snapshot preserves the independently bound selected window', t => {
  const f = fixture(t);
  const path = join(f.root, 'research/touches.json');
  const ledger = JSON.parse(readFileSync(path, 'utf8'));
  ledger.snapshots.push({ label: 'later', hashes: { unrelated: 'different' }, surfaces: { unrelated: 'different' } });
  writeFileSync(path, JSON.stringify(ledger));
  const checked = f.run();
  assert.equal(checked.status, 0, checked.stderr);
  assert.deepEqual(JSON.parse(checked.stdout).maintenance_changes, ['supplier']);
});
