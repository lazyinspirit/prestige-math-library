// The suite must not go green over a type error.
//
// WHY. tsx strips types and never checks them. A commit widened
// Adapter.invoke's options in the implementation, the caller and two tests —
// but not in the interface — and all 119 tests passed over four TS2339/2353
// errors. src/types.mts's own header records two earlier defects found only
// by the type checker ("no test could have"). A green suite over a type error
// is the same class as a green gate over an unchecked scope.
//
// BASELINE 0: with the current tsconfig (strictNullChecks and
// strictPropertyInitialization deliberately OFF, ~129 diagnostics parked
// behind them — see the tsconfig's own note), the tree checks clean. If those
// flags are ever turned on, this becomes a ratchet: assert the count does not
// exceed the recorded baseline, and lower it as the backlog shrinks.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE = 0;

test('tsc reports no more errors than the recorded baseline', () => {
  const r = spawnSync('npx', ['tsc', '--noEmit', '-p', join(PKG, 'tsconfig.json')],
    { cwd: PKG, encoding: 'utf8', timeout: 300_000 });
  const errors = (r.stdout + r.stderr).split('\n').filter((l) => /error TS\d+/.test(l));
  assert.ok(errors.length <= BASELINE,
    `${errors.length} type error(s) over the baseline of ${BASELINE}:\n${errors.slice(0, 12).join('\n')}`);
});
