// The build's gates of record live in ONE place.
//
// WHY. tools/gates.mjs carried a second, divergent build gate table that
// nothing executed — the engine's stage table is the only list that runs, and
// the two disagreed by four tools (prosecheck, depsource, citecheck, full
// content-policy). gates.mjs's own header says two divergent copies of a gate
// list is exactly how a gate stops running without anyone noticing. The build
// half is retired: build mode now refuses and points at the stage table. The
// audit half stays — run-wave.mjs is its live consumer.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const run = (args: string[]) => spawnSync(process.execPath,
  [join(REPO, 'tools', 'gates.mjs'), ...args], { cwd: REPO, encoding: 'utf8', timeout: 60_000 });

test('build mode refuses and names the one real gate table', () => {
  const r = run(['--list']);
  assert.notEqual(r.status, 0, 'the retired build table still answers');
  assert.match(r.stderr, /mathlib\.mts/, 'the refusal must say where the build gates live now');
});

test('audit mode still serves its table', () => {
  const r = run(['--audit', '--list']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /AUDIT table/);
});
