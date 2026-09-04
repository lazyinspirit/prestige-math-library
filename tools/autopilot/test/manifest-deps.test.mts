import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'manifest-deps.mjs');

test('missing manifest deps are normalized mechanically while malformed deps remain errors', () => {
  const dir = mkdtempSync(join(tmpdir(), 'manifest-deps-'));
  const file = join(dir, 'batch.pages.json');
  try {
    writeFileSync(file, `${JSON.stringify([{ id: 'page-a', items: [
      { id: 'def-empty', kind: 'definition' },
      { id: 'thm-dependent', deps: ['def-empty'] },
    ] }], null, 2)}\n`);

    let result = spawnSync(process.execPath, [TOOL, file], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /def-empty needs an explicit deps array/);

    result = spawnSync(process.execPath, [TOOL, '--write', file], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const manifest = JSON.parse(readFileSync(file, 'utf8'));
    assert.deepEqual(manifest[0].items[0].deps, []);
    assert.deepEqual(manifest[0].items[1].deps, ['def-empty']);

    result = spawnSync(process.execPath, [TOOL, file], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);

    manifest[0].items[0].deps = 'not-an-array';
    writeFileSync(file, JSON.stringify(manifest));
    result = spawnSync(process.execPath, [TOOL, '--write', file], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /deps must be an array/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scaffold joins gate explicit deps and route omissions to the mechanical repair', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'demo', repo: REPO };
  for (const stageId of ['1-scaffold', '3-recheck', '9-close', '9-receipt']) {
    const stage: any = mod.stages.find((candidate: any) => candidate.id === stageId);
    assert.ok(stage.gates(ctx).some((gate: any) => gate.id === 'manifest-deps'));
  }
  assert.ok(mod.MECHANICAL_REPAIRS['manifest-deps']);
});
