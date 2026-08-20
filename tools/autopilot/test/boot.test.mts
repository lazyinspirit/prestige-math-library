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
import { readFileSync, existsSync } from 'node:fs';
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

test('watchdog.sh launches the engine through the operator runner', () => {
  // The watchdog is the unattended safety net: if its launch line cannot start
  // the engine, it fails five times, gives up, and the build dies overnight
  // with a log nobody is reading. That is the failure it exists to prevent, so
  // the line it uses is worth pinning.
  const sh = readFileSync(WATCHDOG, 'utf8');
  const launch = /nohup node "([^"]+)"/.exec(sh);
  assert.ok(launch, 'watchdog.sh no longer launches with `nohup node "<...>"`; update this test');
  assert.match(launch[1], /RUNNER|tsx-run/,
    `watchdog launches "${launch[1]}" directly. \`node <file>.mts\` needs a node compiled with TypeScript support; go through tools/tsx-run.mjs.`);
  assert.ok(existsSync(join(REPO, 'tools', 'tsx-run.mjs')), 'tools/tsx-run.mjs does not exist');
});

const watchdogTarget = (sh: string): string | undefined =>
  /^AUTOPILOT=.*\/([^"/]+)"\s*$/m.exec(sh)?.[1];

test('the file watchdog.sh starts exists on disk', () => {
  const sh = readFileSync(WATCHDOG, 'utf8');
  const target = watchdogTarget(sh);
  assert.ok(target, 'watchdog.sh no longer declares AUTOPILOT relative to itself; update this test');
  assert.ok(existsSync(join(HERE, '..', 'bin', target)),
    `watchdog.sh points at bin/${target}, which does not exist`);
});

test('the watchdog liveness pattern names the file the watchdog starts', () => {
  // If the pattern and the spawn target drift apart, the watchdog cannot see
  // the engine it just started and spawns another one every interval.
  const sh = readFileSync(WATCHDOG, 'utf8');
  const target = watchdogTarget(sh);
  assert.ok(target, 'cannot read the AUTOPILOT target from watchdog.sh');
  const patterns = [...sh.matchAll(/\/([A-Za-z0-9_.\\-]+) start\//g)]
    .map((x) => x[1].replace(/\\\./g, '.'));
  assert.ok(patterns.length >= 2,
    `expected the start + verify liveness probes, found ${patterns.length}`);
  for (const p of patterns) {
    assert.strictEqual(p, target,
      `liveness pattern matches "${p} start" but the watchdog starts "${target}"`);
  }
});
