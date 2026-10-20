import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { draftOwnerMatcher } from './run-draft-ownership.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'restored-draft-ownership-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const archive = 'research/new-continuation-inputs/manifests/old-batch-1.pages.json';
  mkdirSync(join(root, 'research/new-continuation-inputs/manifests'), { recursive: true });
  const bytes = JSON.stringify([{ id: 'page', items: [{ id: 'lem-restored' }] }]);
  writeFileSync(join(root, archive), bytes);
  const record = { version: 1, run: 'new', source_run: 'old', authorized_by: 'owner',
    authorization: 'Continue the exact approved existing content with the new engine',
    historical_execution_coverage_adopted: false, scope: { items: 1, pages: 1 },
    manifest_inputs: [{ path: 'research/old-batch-1.pages.json', archive,
      sha256: createHash('sha256').update(bytes).digest('hex') }] };
  const write = () => writeFileSync(join(root, 'research/new-continuation.json'), JSON.stringify(record));
  return { root, archive, record, write };
}

test('restored ownership needs exact owner authorization and bound original inventory', t => {
  const f = fixture(t);
  const item = { id: 'lem-restored', status: 'draft', pipeline_run: 'old' };
  assert.equal(draftOwnerMatcher(f.root, 'new')(item), false);
  f.write();
  const owns = draftOwnerMatcher(f.root, 'new');
  assert.equal(owns(item), true);
  assert.equal(owns({ ...item, id: 'lem-unapproved' }), false);
  assert.equal(owns({ ...item, pipeline_run: 'unrelated' }), false);
  assert.equal(owns({ ...item, status: 'published' }), false);
  assert.equal(owns({ ...item, pipeline_run: 'new' }), true);
  assert.equal(owns({ id: item.id, status: 'draft' }), true);
  assert.equal(owns({ ...item, pipeline_run: null }), false);
});

test('tampered, redirected or review-adopting continuation records fail closed', t => {
  const f = fixture(t); f.write();
  writeFileSync(join(f.root, f.archive), '[]');
  assert.throws(() => draftOwnerMatcher(f.root, 'new'), /hash changed/);
  f.record.manifest_inputs[0].archive = '../outside.json'; f.write();
  assert.throws(() => draftOwnerMatcher(f.root, 'new'), /manifest binding/);
  f.record.historical_execution_coverage_adopted = true; f.write();
  assert.throws(() => draftOwnerMatcher(f.root, 'new'), /owner-authorized/);
});
