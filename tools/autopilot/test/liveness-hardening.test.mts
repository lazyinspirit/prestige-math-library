// Liveness that cannot itself pass vacuously.
//
// WHY. Three residues of the "gates that pass vacuously" incident survived its
// fix: gate-liveness — the meta-gate — reported `skipped` for probes whose
// inputs were absent and then exited 0, so a wrong --run value produced three
// skips, one whole-repo precheck count, and a green tick; finite-smoke printed
// a bare check count, so "1 check" over 291 items read exactly like "291
// checks" to its --min-checks 1 floor; and the url gate declared no liveness,
// so a coverage selection carrying zero URLs passed as 0/0 live.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('gate-liveness fails when its probe inputs are absent', () => {
  const r = spawnSync(process.execPath, [join(REPO, 'tools', 'gate-liveness.mjs'),
    '--run', 'no-such-run',
    '--contracts', 'research/no-such-run-proof-contracts.json',
    '--checklists', 'research/no-such-run-batch-1.coverage.json',
    '--min-checks', '1'],
    { cwd: REPO, encoding: 'utf8', timeout: 600_000 });
  assert.notEqual(r.status, 0,
    'every scoped probe was skipped for missing inputs and the meta-gate exited 0');
});

test('finite-smoke reports its coverage, not only a bare check count', function () {
  const contracts = join(REPO, 'research', 'frontier-14-proof-contracts.json');
  if (!existsSync(contracts)) return this.skip('no real contracts present');
  const r = spawnSync(process.execPath, [join(REPO, 'tools', 'finite-smoke.mjs'), contracts],
    { cwd: REPO, encoding: 'utf8', timeout: 300_000 });
  assert.match(r.stdout, /check\(s\) over \d+\/\d+ item/,
    'a bare check count cannot distinguish 1/291 from 291/291');
});

test('the url gate declares a liveness floor', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  const st = mod.stages.find((s: any) => s.id === '6c-cross');
  const g = st.gates(ctx).find((x: any) => x.id === 'url-liveness');
  assert.ok(g.liveness, 'zero collected URLs prints "0/0 live" and exits 0');
});
