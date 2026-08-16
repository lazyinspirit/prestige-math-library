// boot — the engine must start under plain `node`, through the same path an
// operator uses.
//
// WHY. 74 tests were green while `loadConfig()` pointed at
// `stages/mathlib.mjs`, a file that does not exist: every test imported the
// stage table directly, so nothing ever booted through the configured path.
// `npx tsx` resolves the wrong extension silently, so the tsx-invoked doctor
// was clean too; plain `node` — which is what `--detach` spawns and what the
// watchdog runs — died on ERR_MODULE_NOT_FOUND. These tests take the operator
// path, not the test-harness path.
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

test('doctor boots under plain node — the operator path, not the tsx test path', () => {
  const r = spawnSync(process.execPath, [BIN, 'doctor', '--run', 'frontier-14'], {
    cwd: REPO, encoding: 'utf8', timeout: 120_000,
  });
  assert.strictEqual(r.status, 0,
    `doctor exited ${r.status} under plain node\nstderr: ${(r.stderr ?? '').slice(0, 2000)}`);
  assert.match(r.stdout, /stage spec: \d+ stage\(s\)/);
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
