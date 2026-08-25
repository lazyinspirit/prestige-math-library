import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { once } from 'node:events';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'touchlog-after-result.mjs');

test('the follower snapshots only after the exact dispatch succeeds', async () => {
  const root = mkdtempSync(join(tmpdir(), 'touch-after-result-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  writeFileSync(join(root, 'items', 'one.md'), 'first version\n');
  const result = join(root, 'research', 'alpha.result.json');
  const touches = join(root, 'research', 'touches.json');
  try {
    const child = spawn(process.execPath, [TOOL, '--result', result, '--touches', touches,
      '--label', 'after-alpha', '--timeout-ms', '3000', '--root', root], { stdio: 'pipe' });
    await new Promise((resolveWait) => setTimeout(resolveWait, 100));
    assert.equal(exists(touches), false, 'the follower must not snapshot the pre-repair tree');
    writeFileSync(join(root, 'items', 'one.md'), 'repaired version\n');
    writeFileSync(result, JSON.stringify({ role: 'alpha', label: 'repair', ok: true }));
    const [code] = await once(child, 'exit');
    assert.equal(code, 0);
    const ledger = JSON.parse(readFileSync(touches, 'utf8'));
    assert.equal(ledger.snapshots.at(-1).label, 'after-alpha');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a failed dispatch cannot produce a closure snapshot', () => {
  const root = mkdtempSync(join(tmpdir(), 'touch-after-failure-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  const result = join(root, 'research', 'alpha.result.json');
  const touches = join(root, 'research', 'touches.json');
  writeFileSync(result, JSON.stringify({ role: 'alpha', label: 'repair', ok: false }));
  try {
    const run = spawnSync(process.execPath, [TOOL, '--result', result, '--touches', touches,
      '--label', 'after-alpha', '--timeout-ms', '1000', '--root', root], { encoding: 'utf8' });
    assert.equal(run.status, 1);
    assert.equal(exists(touches), false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

function exists(path: string): boolean {
  try { readFileSync(path); return true; } catch { return false; }
}
