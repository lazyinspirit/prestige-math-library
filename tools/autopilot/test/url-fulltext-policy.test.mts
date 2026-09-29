import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, chmodSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REPO = new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const DEAD_URL = 'https://example.invalid/unavailable-source.pdf';
const stamp = {
  at: '2026-09-29T04:12:00.154Z', bytes: 4572986,
  sha256_16: 'da0881782a35bde6', kind: 'pdf', pages: 489,
};

function sweep(fetchVerified: boolean) {
  const dir = mkdtempSync(join(tmpdir(), 'url-fulltext-'));
  mkdirSync(join(dir, 'research'));
  const coverage = join(dir, 'research', 'coverage.json');
  const output = join(dir, 'research', 'liveness.json');
  const fakeCurl = join(dir, 'curl');
  writeFileSync(fakeCurl, '#!/bin/sh\nfor last do :; done\nprintf "404\\t%s" "$last"\n');
  chmodSync(fakeCurl, 0o755);
  writeFileSync(coverage, JSON.stringify({ pages: [{ page: 'p', sources: [{
    title: 'Previously fetched book', url: DEAD_URL, kind: 'textbook',
    ...(fetchVerified ? { fetch_verified: stamp } : {}),
    contents: [{ name: 'Result', item: 'thm-result', disposition: 'included' }],
  }] }] }));
  const result = spawnSync(process.execPath, [join(REPO, 'tools', 'url-sweep.mjs'),
    '--coverage', coverage, '--out', output, '--timeout-ms', '1000', '--fail-on-dead'],
  { encoding: 'utf8', timeout: 15_000, env: { ...process.env, PATH: `${dir}:${process.env.PATH}` } });
  const artifact = JSON.parse(readFileSync(output, 'utf8'));
  rmSync(dir, { recursive: true, force: true });
  return { result, artifact };
}

test('a dead URL with a verified full-text fetch remains visible without blocking', () => {
  const { result, artifact } = sweep(true);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(artifact.summary.failed, 1);
  assert.equal(artifact.summary.previously_fetched, 1);
  assert.equal(artifact.summary.blocking, 0);
  assert.equal(artifact.rows[0].previously_fetched.sha256_16, stamp.sha256_16);
});

test('a dead URL without a verified full-text fetch still blocks', () => {
  const { result, artifact } = sweep(false);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.equal(artifact.summary.failed, 1);
  assert.equal(artifact.summary.blocking, 1);
});
