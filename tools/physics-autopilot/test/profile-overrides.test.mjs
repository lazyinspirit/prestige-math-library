import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { resolveDispatchProfile } from '../../physics-support/model-profile-overrides.mjs';

test('run-local profile override substitutes a registered profile and leaves other runs alone', () => {
  const root = mkdtempSync(join(tmpdir(), 'profile-overrides-'));
  try {
    mkdirSync(join(root, '.physics-autopilot'));
    writeFileSync(join(root, '.physics-autopilot', 'run-one.profile-overrides.json'), JSON.stringify({
      version: 1,
      profiles: { 'deepseek-v4.1-flash-max': 'gpt-6-luna-max' },
    }));
    assert.deepEqual(resolveDispatchProfile(root, 'run-one', 'deepseek-v4.1-flash-max'), {
      requested: 'deepseek-v4.1-flash-max', effective: 'gpt-6-luna-max',
    });
    assert.deepEqual(resolveDispatchProfile(root, 'run-two', 'deepseek-v4.1-flash-max'), {
      requested: 'deepseek-v4.1-flash-max', effective: 'deepseek-v4.1-flash-max',
    });
    assert.throws(() => resolveDispatchProfile(root, 'run-one', 'unknown-profile'), /unknown model profile/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
