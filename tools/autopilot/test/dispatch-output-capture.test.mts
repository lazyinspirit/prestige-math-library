import assert from 'node:assert/strict';
import { chmodSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const REPO = join(import.meta.dirname, '../../..');

test('a noisy agent still produces a bounded log and successful receipt', () => {
  const fixture = mkdtempSync(join(tmpdir(), 'prestige-dispatch-output-'));
  const fakeCodex = join(fixture, 'fake-codex.mjs');
  const run = `dispatch-output-${process.pid}-${Date.now()}`;
  const outDir = join(REPO, 'research', `${run}-dispatch`);
  writeFileSync(fakeCodex, `#!/usr/bin/env node
process.stdin.resume();
process.stderr.write('session id: 11111111-1111-1111-1111-111111111111\\n');
process.stderr.write('s'.repeat(3 * 1024 * 1024));
process.stderr.write('\\nFINAL STDERR\\n');
process.stdout.write('BEGIN STDOUT\\n');
process.stdout.write('o'.repeat(3 * 1024 * 1024));
process.stdout.write('\\nFINAL STDOUT\\n');
`);
  chmodSync(fakeCodex, 0o755);

  try {
    const result = spawnSync('node', [
      'tools/dispatch.mjs', '--role', 'mechanic', '--brief', 'briefs/alpha.md',
      '--label', 'noisy', '--run', run, '--timeout', '30', '--attempt', '1',
    ], {
      cwd: REPO,
      env: { ...process.env, CODEX_BIN: fakeCodex },
      encoding: 'utf8',
      timeout: 45_000,
    });
    assert.equal(result.status, 0, result.stderr || result.stdout);

    const receipt = JSON.parse(readFileSync(join(outDir, 'mechanic-noisy.attempt-1.result.json'), 'utf8'));
    assert.equal(receipt.ok, true);
    assert.equal(receipt.session_id, '11111111-1111-1111-1111-111111111111');

    const log = readFileSync(join(outDir, 'mechanic-noisy.attempt-1.log'), 'utf8');
    assert.match(log, /dispatch omitted \d+ characters from the middle of this stream/);
    assert.match(log, /BEGIN STDOUT/);
    assert.match(log, /FINAL STDOUT/);
    assert.match(log, /session id: 11111111-1111-1111-1111-111111111111/);
    assert.match(log, /FINAL STDERR/);
    assert.ok(log.length < 5 * 1024 * 1024, `bounded log was ${log.length} characters`);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
    rmSync(fixture, { recursive: true, force: true });
  }
});
