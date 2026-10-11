import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';

const tool = new URL('../../step3b-review-coverage.mjs', import.meta.url).pathname;
for (const symlink of [false, true]) test(`coverage CLI executes its main through ${symlink ? 'a workspace tools symlink' : 'the direct source path'}`, () => {
  const root = mkdtempSync(join(tmpdir(), 'step3b-cli-'));
  try {
    const entry = join(root, 'tools', 'step3b-review-coverage.mjs');
    if (symlink) symlinkSync(dirname(tool), join(root, 'tools'));
    // Run validation happens before any workspace read. Old entrypoint guard
    // silently exited0 on the symlink instead of executing this same CLI.
    const result = spawnSync(process.execPath, [symlink ? entry : tool, '--run', '../invalid'], {
      cwd: root, encoding: 'utf8', timeout: 10000,
    });
    assert.equal(result.status, 2);
    assert.match(result.stderr, /Invalid Step3b run/);
    assert.equal(result.stdout, '');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
