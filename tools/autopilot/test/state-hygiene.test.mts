// A state dir belongs to ONE run, and a scope baseline is written once.
//
// WHY. state.init() only set `run` when unset, with no mismatch check — so
// `start --run frontier-15` against a state dir carrying frontier-14 inherited
// the finished run's stage records, gatesPassedAt included, and read as
// already done. autopilot.config.json pinned "run": "frontier-14", so a bare
// `start` resumed the completed run and reported COMPLETE. And
// manifest-integrity --write-ledger overwrote an existing ledger silently:
// re-running `plan` mid-run re-baselined the anti-scope-loss gate to whatever
// the manifests had degraded to, making it confirm instead of check.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('a state dir refuses a different run', async () => {
  const { State } = await import('../src/state.mts');
  const dir = mkdtempSync(join(tmpdir(), 'state-'));
  new State(join(dir, 'state.json')).init('frontier-14');
  assert.throws(() => new State(join(dir, 'state.json')).init('frontier-15'),
    /frontier-14/,
    'a new run silently inherited the old run\'s stage records');
});

test('the config does not pin a run', () => {
  const cfg = JSON.parse(readFileSync(join(REPO, 'autopilot.config.json'), 'utf8'));
  assert.ok(!('run' in cfg),
    'a pinned run makes a bare `autopilot start` resume a completed run');
});

test('start without a run refuses instead of guessing', () => {
  const emptyRepo = mkdtempSync(join(tmpdir(), 'repo-'));
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'autopilot', 'bin', 'autopilot.mts'), 'start', '--repo', emptyRepo],
    { encoding: 'utf8', timeout: 60_000 });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /--run/);
});

test('the scope ledger is written once; --force is the explicit re-baseline', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'),
    JSON.stringify([{ id: 'p', kind: 'A', items: [{ id: 'lem-a' }] }]));
  const run = (args: string[]) => spawnSync(process.execPath,
    [join(REPO, 'tools', 'manifest-integrity.mjs'), ...args], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(run(['--run', 'r9', '--write-ledger']).status, 0);
  const second = run(['--run', 'r9', '--write-ledger']);
  assert.notEqual(second.status, 0, 'a silent re-baseline makes the gate confirm instead of check');
  assert.equal(run(['--run', 'r9', '--write-ledger', '--force']).status, 0);
});
