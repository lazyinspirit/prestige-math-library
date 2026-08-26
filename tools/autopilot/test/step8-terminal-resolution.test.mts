import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const ITEM = 'ex-the-mobius-band-presented-by-two-regular-patches';

function run(args: string[]) {
  return spawnSync(process.execPath, args, { cwd: REPO, encoding: 'utf8' });
}

function currentHashes() {
  const result = run(['tools/tsx-run.mjs', 'tools/judge.mts', `items/${ITEM}.md`, '--context-hash']);
  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout);
}

function resolution(now: any) {
  return {
    version: 1,
    run: 'fixture',
    stage: '8-rejudge',
    id: ITEM,
    resolved_by: 'session',
    disposition: 'accepted-after-review',
    rejudge_rounds_exhausted: 3,
    exhausted_at: '2026-08-25T07:14:01.895Z',
    context_sha256: now.context_sha256,
    item_sha256: now.item_sha256,
    basis: 'A direct terminal review checked the stated domains, overlap equations, normal convention, and every cited fact after the three-round cap.',
    at: '2026-08-25T08:00:00.000Z',
  };
}

test('one current Terra verdict completes singleton judge coverage', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step8-terra-coverage-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const closure = join(dir, 'closure.json');
    const now = currentHashes();
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, `${JSON.stringify({
      id: ITEM,
      model: 'gpt-5.6-terra',
      keep: true,
      context_sha256: now.context_sha256,
      item_sha256: now.item_sha256,
      at: '2026-08-26T00:00:00.000Z',
    })}\n`);
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--out', closure, manifest]);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /1\/1 current configured-judge verdict set/);
    assert.match(result.stdout, /1\/1 current pair/,
      'the live pre-singleton-lineup engine must still be able to parse its liveness counter');
    const parsed = JSON.parse(readFileSync(closure, 'utf8'));
    assert.equal(parsed.judge_lineup, 'terra');
    assert.equal(parsed.verdicts_complete, 1);
    assert.equal(parsed.closed, true);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('an exact terminal resolution closes missing judge coverage without fabricating a verdict', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step8-terminal-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const receipt = join(dir, 'terminal.jsonl');
    const closure = join(dir, 'closure.json');
    const now = currentHashes();
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, '');
    writeFileSync(receipt, `${JSON.stringify(resolution(now))}\n`);
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--terminal-resolutions', receipt, '--out', closure, manifest]);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    const parsed = JSON.parse(readFileSync(closure, 'utf8'));
    assert.equal(parsed.closed, true);
    assert.equal(parsed.verdicts_complete, 0, 'manual closure must not be reported as a judge verdict');
    assert.equal(parsed.pairs_complete, 0, 'the legacy compatibility count must agree');
    assert.equal(parsed.terminal_resolved.length, 1);
    assert.deepEqual(parsed.needs_rejudge, []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a terminal resolution becomes stale when either exact hash differs', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step8-terminal-stale-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const receipt = join(dir, 'terminal.jsonl');
    const now = currentHashes();
    const row = resolution(now);
    row.item_sha256 = 'f'.repeat(64);
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, '');
    writeFileSync(receipt, `${JSON.stringify(row)}\n`);
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--terminal-resolutions', receipt, manifest]);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /terminal-resolution-stale/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('stamp verification accepts terminal resolution but writes no pass stamp', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step8-terminal-stamp-'));
  try {
    const receipt = join(dir, 'terminal.jsonl');
    writeFileSync(receipt, `${JSON.stringify(resolution(currentHashes()))}\n`);
    const result = run(['tools/apply-judge-stamps.mjs',
      '--ledger', 'research/frontier-18-judge.jsonl', '--items', ITEM,
      '--terminal-resolutions', receipt, '--verify']);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /1 terminal manual/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
