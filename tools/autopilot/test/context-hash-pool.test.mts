import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { buildCurrentContextHashes } from '../../context-hash-pool.mjs';
import { tsxLoader } from '../../paths.mjs';

const REPO = new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const candidates = [
  'def-natural-numbers',
  'lem-cauchy-bounded',
  'thm-winding-number-is-integer',
].filter((id) => existsSync(join(REPO, 'items', `${id}.md`)));

const serialHash = (id: string) => {
  const result = spawnSync(process.execPath,
    ['--import', tsxLoader(), 'tools/judge.mts', `items/${id}.md`, '--context-hash'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  return { context: row.context_sha256, item: row.item_sha256 ?? null };
};

test('bounded context-hash pool is byte-identical to the serial judge path', async () => {
  assert.ok(candidates.length >= 2, 'fixture needs two real items');
  const expected = new Map(candidates.map((id) => [id, serialHash(id)]));
  const actual = await buildCurrentContextHashes(candidates, { cwd: REPO, concurrency: 3 });
  assert.deepEqual(actual.map((row: any) => row.id), candidates, 'results retain request order');
  for (const row of actual as any[]) {
    assert.equal(row.ok, true, row.error);
    assert.deepEqual({ context: row.context, item: row.item }, expected.get(row.id));
  }
});

test('one bad id is reported without discarding a good neighbour', async () => {
  const good = candidates[0];
  const rows = await buildCurrentContextHashes([good, 'item-that-does-not-exist-for-pool-test'], {
    cwd: REPO,
    concurrency: 2,
  });
  assert.equal(rows[0].ok, true);
  assert.equal(rows[0].id, good);
  assert.equal(rows[1].ok, false);
  assert.match((rows[1] as any).error, /could not build current judge context/);
});

test('the local hash pool refuses an unsafe concurrency override', async () => {
  await assert.rejects(
    buildCurrentContextHashes([candidates[0]], { cwd: REPO, concurrency: 10_000 }),
    /integer from 1 to 32/,
  );
});

test('an exact context-hash receipt is reused and invalidated by prompt inputs', async () => {
  const cachePath = join(mkdtempSync(join(tmpdir(), 'context-cache-')), 'hashes.json');
  const id = candidates[0];
  const first = await buildCurrentContextHashes([id], { cwd: REPO, cachePath, concurrency: 1 });
  assert.equal(first[0].ok, true, (first[0] as any).error);
  const firstReceipt = JSON.parse(readFileSync(cachePath, 'utf8'));

  const cached = await buildCurrentContextHashes([id], {
    cwd: REPO,
    cachePath,
    concurrency: 1,
    timeoutMs: 1,
  });
  assert.equal(cached[0].ok, true, 'a one-millisecond call can succeed only from the exact cache');
  assert.deepEqual({ context: cached[0].context, item: cached[0].item },
    { context: first[0].context, item: first[0].item });

  const changed = await buildCurrentContextHashes([id], {
    cwd: REPO,
    cachePath,
    concurrency: 1,
    env: { ...process.env, JUDGE_BATCH: '999' },
  });
  assert.equal(changed[0].ok, true, (changed[0] as any).error);
  const changedReceipt = JSON.parse(readFileSync(cachePath, 'utf8'));
  assert.notEqual(changedReceipt.input_sha256, firstReceipt.input_sha256,
    'changing a frozen-prompt input invalidates the receipt');
});
