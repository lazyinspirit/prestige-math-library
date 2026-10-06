// boot — the engine must start through the same path an operator uses, not the
// one the test harness happens to provide.
//
// WHY. 74 tests were green while `loadConfig()` pointed at
// `stages/mathlib.mjs`, a file that does not exist: every test imported the
// stage table directly, so nothing ever booted through the configured path.
// `npx tsx` resolves the wrong extension silently, so the tsx-invoked doctor
// was clean too, and the operator path died on ERR_MODULE_NOT_FOUND.
//
// WHAT "THE OPERATOR PATH" IS. It used to be plain `node bin/autopilot.mts`,
// and this file asserted that. That is not true of a node without built-in
// TypeScript support — a distro build raises ERR_UNKNOWN_FILE_EXTENSION before
// a line of the engine runs — and this repo has no node_modules to fall back
// on. So the supported entry is `tools/tsx-run.mjs`, which resolves a loader at
// run time; `watchdog.sh` launches through it, and `start --detach` forwards
// the parent's own `--import` in `execArgv`. These tests take THAT path. A test
// asserting the old one passed only on machines where the claim was accidental.
import { test } from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'node:child_process';
import { readFileSync, existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BIN = join(HERE, '..', 'bin', 'autopilot.mts');
const WATCHDOG = join(HERE, '..', 'bin', 'watchdog.sh');
const REPO = resolve(HERE, '..', '..', '..');

const RUNNER = join(REPO, 'tools', 'tsx-run.mjs');

test('doctor boots through the operator runner, not the tsx test path', () => {
  const r = spawnSync(process.execPath, [RUNNER, BIN, 'doctor', '--run', 'frontier-14'], {
    cwd: REPO, encoding: 'utf8', timeout: 120_000,
  });
  // BOOTING and FINDING NOTHING WRONG are different claims, and only the first
  // belongs here. `doctor` exits 1 when it has problems to report, and a
  // historical run acquires problems whenever doctor gets stricter — which is
  // the point of doctor. Asserting exit 0 over a fixture run turns every
  // legitimate tightening into a red boot test. What must hold is that the
  // engine loaded and produced its report.
  assert.ok(r.status === 0 || r.status === 1,
    `doctor exited ${r.status} — that is a crash, not a report\nstderr: ${(r.stderr ?? '').slice(0, 2000)}`);
  assert.doesNotMatch(r.stderr ?? '', /ERR_UNKNOWN_FILE_EXTENSION|ERR_MODULE_NOT_FOUND|ERR_NO_TYPESCRIPT/,
    `the operator runner could not load the engine\nstderr: ${(r.stderr ?? '').slice(0, 2000)}`);
  assert.match(r.stdout, /stage spec: \d+ stage\(s\)/);
});

test('start runs doctor itself and refuses deterministic defects before the engine loop', () => {
  const repo = mkdtempSync(join(tmpdir(), 'autopilot-start-doctor-'));
  const stagePath = join(repo, 'stages.mts');
  writeFileSync(stagePath, `export const stages = [{
    id: 'only', label: 'only', units: () => ['all'], pattern: /^worker-/,
    plan: () => [{ role: 'worker', label: 'all', job: 'audit', covers: ['all'] }],
    gates: () => [{ id: 'fixture', argv: ['node', '-e', 'console.log("checked 1 thing")'] }],
  }];\n`);
  writeFileSync(join(repo, 'autopilot.config.json'), JSON.stringify({
    stages: stagePath,
    argv: ['node', 'tools/no-such-dispatcher.mjs', '--role', '{role}'],
    pollSec: 0.01,
  }));
  try {
    const r = spawnSync(process.execPath,
      [RUNNER, BIN, 'start', '--repo', repo, '--run', 'doctor-fixture'],
      { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
    assert.equal(r.status, 2, `stdout: ${r.stdout}\nstderr: ${r.stderr}`);
    assert.match(r.stderr, /refusing to start — preflight found deterministic blocker/);
    assert.match(r.stderr, /no such dispatcher|no-such-dispatcher/);
    assert.equal(existsSync(join(repo, '.autopilot', 'controller.lock')), false,
      'start entered the engine loop before doctor refused the configuration');
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('watchdog shell delegates to the run-scoped helper', () => {
  const sh = readFileSync(WATCHDOG, 'utf8');
  assert.match(sh, /exec node .*watchdog\.mjs/);
  const helper = readFileSync(join(HERE, '..', 'bin', 'watchdog.mjs'), 'utf8');
  assert.match(helper, /tools\/tsx-run\.mjs/);
  assert.match(helper, /tools\/autopilot\/bin\/autopilot\.mts/);
});
