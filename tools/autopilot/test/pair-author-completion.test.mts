import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chmodSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { checkPairAuthorArtifacts } from '../../dispatch-author-artifacts.mjs';
import { readDispatchTerminal } from '../../dispatch-usage.mjs';

test('pair-author artifact accounting includes new suppliers and rejects missing or empty files', t => {
  const root = mkdtempSync(join(tmpdir(), 'pair-artifacts-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research'));
  const manifest = [
    { id: 'a', kind: 'A', category: 'algebra', companion: 'b', items: [{ id: 'def-a' }] },
    { id: 'b', kind: 'B', category: 'algebra', items: [{ id: 'ex-b' }] },
  ];
  const file = join(root, 'research/r-batch-1.pages.json');
  writeFileSync(file, JSON.stringify(manifest));
  const absent = checkPairAuthorArtifacts(root, 'r', ['a']);
  assert.equal(absent.ok, false);
  assert.equal(absent.checked, 6);
  assert.ok(absent.missing.includes('research/r-step3b-pair-a.md'));
  for (const path of absent.missing) {
    mkdirSync(join(root, path, '..'), { recursive: true });
    writeFileSync(join(root, path), 'authored fixture');
  }
  assert.equal(checkPairAuthorArtifacts(root, 'r', ['a']).ok, true);
  writeFileSync(join(root, 'items/def-a.md'), '');
  assert.deepEqual(checkPairAuthorArtifacts(root, 'r', ['a']).missing, ['items/def-a.md']);
  writeFileSync(join(root, 'items/def-a.md'), 'authored fixture');
  manifest[0].items.push({ id: 'lem-new' });
  writeFileSync(file, JSON.stringify(manifest));
  assert.deepEqual(checkPairAuthorArtifacts(root, 'r', ['a']).missing, ['items/lem-new.md']);
});

test('terminal diagnostics preserve empty completion and abort flags without transcript text', async t => {
  const root = mkdtempSync(join(tmpdir(), 'dispatch-terminal-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'rollout.jsonl');
  const event = (type: string, extra = {}) => ({ timestamp: '2026-09-30T10:00:01Z',
    type: 'event_msg', payload: { type, ...extra } });
  writeFileSync(file, [event('task_started'), event('error', { message: 'private diagnostic' }),
    event('task_complete', { last_agent_message: '' })].map(JSON.stringify).join('\n'));
  const result: any = await readDispatchTerminal(file, '2026-09-30T10:00:00Z');
  assert.equal(result.task_completed, true);
  assert.equal(result.final_response_present, false);
  assert.equal(result.error_events, 1);
  assert.ok(!JSON.stringify(result).includes('private diagnostic'));
  writeFileSync(file, [event('task_started'), event('turn_aborted')].map(JSON.stringify).join('\n'));
  assert.equal((await readDispatchTerminal(file, '2026-09-30T10:00:00Z') as any).task_aborted, true);
});

test('a zero-exit pair author without artifacts produces a failed dispatch receipt', t => {
  const repo = join(import.meta.dirname, '../../..');
  const fixture = mkdtempSync(join(tmpdir(), 'pair-dispatch-'));
  const run = `pair-empty-${process.pid}-${Date.now()}`;
  const manifest = join(repo, `research/${run}-batch-1.pages.json`);
  const out = join(repo, `research/${run}-dispatch`);
  t.after(() => {
    rmSync(fixture, { recursive: true, force: true });
    rmSync(manifest, { force: true }); rmSync(out, { recursive: true, force: true });
  });
  writeFileSync(manifest, JSON.stringify([
    { id: 'author-fixture-a', kind: 'A', category: 'algebra', companion: 'author-fixture-b',
      items: [{ id: 'def-author-fixture' }] },
    { id: 'author-fixture-b', kind: 'B', category: 'algebra', items: [{ id: 'ex-author-fixture' }] },
  ]));
  const fake = join(fixture, 'fake-codex.mjs');
  writeFileSync(fake, '#!/usr/bin/env node\nprocess.stdin.resume();\n');
  chmodSync(fake, 0o755);
  const label = 'step3b-pair-author-fixture-a-0123456789abcdef';
  const result = spawnSync(process.execPath, ['tools/dispatch.mjs', '--role', 'alpha-high',
    '--brief', 'briefs/group-author.md', '--run', run, '--label', label,
    '--covers', 'author-fixture-a', '--attempt', '1', '--timeout', '20'], {
    cwd: repo, encoding: 'utf8', timeout: 30_000,
    env: { ...process.env, CODEX_BIN: fake, DISPATCH_SLOT_ROOT: join(fixture, 'slots') },
  });
  assert.equal(result.status, 1, result.stdout + result.stderr);
  const receipt = JSON.parse(readFileSync(join(out, `alpha-high-${label}.result.json`), 'utf8'));
  assert.equal(receipt.process_exit_code, 0);
  assert.equal(receipt.exit_code, 1);
  assert.equal(receipt.ok, false);
  assert.equal(receipt.author_artifacts.ok, false);
  assert.equal(receipt.author_artifacts.missing.length, 6);
});
