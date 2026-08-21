import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { acquireControllerLock } from '../src/controller-lock.mts';

test('only one controller can own a state directory', () => {
  const dir = mkdtempSync(join(tmpdir(), 'autopilot-controller-'));
  const release = acquireControllerLock(dir, 'frontier-test');
  assert.throws(() => acquireControllerLock(dir, 'frontier-test'), /controller already running/);
  release();
  const releaseAgain = acquireControllerLock(dir, 'frontier-test');
  releaseAgain();
});

test('a dead controller lock is reclaimed', () => {
  const dir = mkdtempSync(join(tmpdir(), 'autopilot-controller-stale-'));
  writeFileSync(join(dir, 'controller.lock'), JSON.stringify({
    pid: 2_147_483_647, run: 'frontier-old', started_at: '2000-01-01T00:00:00.000Z',
  }));
  const release = acquireControllerLock(dir, 'frontier-new');
  release();
});
