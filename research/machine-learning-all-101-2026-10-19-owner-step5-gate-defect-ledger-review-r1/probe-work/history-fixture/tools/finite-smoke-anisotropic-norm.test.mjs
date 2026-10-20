import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const id = 'ex-anisotropic-real-norm-on-c';
const smoke = {
  check: 'anisotropic-real-norm-complex-homogeneity-witness',
  asserts: 'the same function is not a complex norm: $N(1)=1$ and $N(i)=2$, while $|i|_{\\mathbb C}N(1)=1$.',
  weights: [1, 2], vector: [1, 0], scalar: [0, 1], expected_values: [1, 2, 1],
};

test('anisotropic norm: actual source witness and mathematical negative controls', () => {
  const directory = mkdtempSync(join(tmpdir(), 'finite-smoke-anisotropic-'));
  const contract = join(directory, 'contract.json');
  const run = delta => {
    writeFileSync(contract, JSON.stringify({ version: 1, scope: [id],
      contracts: { [id]: { finite_smoke: [{ ...smoke, ...delta }] } } }));
    const result = spawnSync(process.execPath, ['tools/finite-smoke.mjs', contract, '--json'],
      { cwd: root, encoding: 'utf8' });
    assert.equal(result.error, undefined);
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const rejects = (delta, message) => {
    const result = run(delta);
    assert.equal(result.status, 1);
    assert.equal(result.body.outcomes.length, 1);
    assert.equal(result.body.outcomes[0].ok, false);
    assert.match(result.body.outcomes[0].summary, message);
  };
  try {
    const good = run({});
    assert.equal(good.status, 0);
    assert.equal(good.body.outcomes.length, 1);
    assert.equal(good.body.outcomes[0].ok, true);
    assert.match(good.body.outcomes[0].summary, /sides are 4 and 1/);
    // The isotropic l1 norm agrees at 1 and i: this ceases to be a counterexample.
    rejects({ weights: [1, 1] }, /complex homogeneity does not fail/);
    // Multiplication by the real identity never violates homogeneity here.
    rejects({ scalar: [1, 0] }, /complex homogeneity does not fail/);
    rejects({ vector: [0, 0] }, /complex homogeneity does not fail/);
    // Weight 3 still gives a counterexample, but does not match the source formula.
    rejects({ weights: [1, 3] }, /source witness requires/);
    rejects({ expected_values: [1, 1, 1] }, /disagree with expected_values/);
    rejects({ expected_values: [1, 2, -1] }, /nonnegative complex modulus/);
    rejects({ scalar: [0, 0.5] }, /Gaussian-integer pairs/);
    const stale = run({ asserts: 'Fabricated N(i)=3 assertion.' });
    assert.equal(stale.status, 1);
    assert.equal(stale.body.outcomes.length, 0);
    assert.equal(stale.body.errors[0].code, 'smoke-assertion-mismatch');
    const unknown = run({ check: 'unregistered-anisotropic-norm' });
    assert.equal(unknown.status, 1);
    assert.equal(unknown.body.outcomes.length, 0);
    assert.equal(unknown.body.errors[0].code, 'smoke-check');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
