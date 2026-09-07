import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const POLICY = join(REPO, 'tools', 'content-policy.mjs');
const EXISTING = 'def-tensor-product-total-complex-of-chain-complexes';
const HOME = 'tor-flatness-and-global-dimension';

function run(page: string) {
  const dir = mkdtempSync(join(tmpdir(), 'content-policy-reuse-'));
  const manifest = join(dir, 'batch.pages.json');
  writeFileSync(manifest, JSON.stringify([{
    id: page,
    kind: 'A',
    order: 1,
    items: [{ id: EXISTING, deps: ['def-chain-complex-in-an-abelian-category'] }],
  }]));
  const result = spawnSync(process.execPath, [POLICY, '--manifest-only', manifest], {
    cwd: REPO,
    encoding: 'utf8',
  });
  rmSync(dir, { recursive: true, force: true });
  return result;
}

test('manifest policy accepts an existing item at its canonical same-page home', () => {
  const result = run(HOME);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.doesNotMatch(result.stdout + result.stderr, /batch-item-already-exists/);
});

test('manifest policy still rejects an existing item claimed by another page', () => {
  const result = run('unlicensed-other-page');
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /batch-item-already-exists/);
  assert.match(result.stdout + result.stderr, /batch-plan-id-collision/);
});
