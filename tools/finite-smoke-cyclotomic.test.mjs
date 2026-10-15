import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
const root = fileURLToPath(new URL('../', import.meta.url));
const inverseId = 'ex-hh-ariki-koike-rank-one-level-two-quotient';
const collisionId = 'ex-hh-ariki-koike-colliding-content-specialization';
const inverse = { check: 'cyclotomic-rank-one-f5-inverse',
  asserts: 'X^2=(a+b)X-ab,\\qquad X^{-1}=\\frac{a+b-X}{ab}.', modulus: 5, inverse_x_coefficient: -1 };
const collision = { check: 'cyclotomic-rank-one-content-collision',
  asserts: 'Under the specialization $Q\\mapsto2$ and $u_1,u_2\\mapsto1$ into $\\mathbb Q$, the contents coincide and the algebra becomes $\\mathbb Q[\\varepsilon]/(\\varepsilon^2)$ with $\\varepsilon=X-1\\ne0$.',
  epsilon_scale: 1, epsilon_shift_sign: -1 };
test('cyclotomic source witnesses and mathematical negative controls', () => {
  const directory = mkdtempSync(join(tmpdir(), 'finite-smoke-cyclotomic-'));
  const contract = join(directory, 'contract.json');
  const run = (id, smoke) => {
    writeFileSync(contract, JSON.stringify({ version: 1, scope: [id], contracts: { [id]: { finite_smoke: [smoke] } } }));
    const result = spawnSync(process.execPath, ['tools/finite-smoke.mjs', contract, '--json'], { cwd: root, encoding: 'utf8' });
    assert.equal(result.error, undefined);
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const rejects = (id, smoke, message) => {
    const result = run(id, smoke);
    assert.equal(result.status, 1);
    assert.equal(result.body.outcomes.length, 1);
    assert.equal(result.body.outcomes[0].ok, false);
    assert.match(result.body.outcomes[0].summary, message);
  };
  try {
    const goodInverse = run(inverseId, inverse);
    assert.equal(goodInverse.status, 0);
    assert.equal(goodInverse.body.outcomes.length, 1);
    assert.match(goodInverse.body.outcomes[0].summary, /all 16 unit pairs/);
    const goodCollision = run(collisionId, collision);
    assert.equal(goodCollision.status, 0);
    assert.equal(goodCollision.body.outcomes.length, 1);
    assert.match(goodCollision.body.outcomes[0].summary, /actual Q specialization/);
    // Replacing -X by +X or dropping X is mathematically wrong in these models.
    rejects(inverseId, { ...inverse, inverse_x_coefficient: 1 }, /inverse formula fails/);
    rejects(inverseId, { ...inverse, inverse_x_coefficient: 0 }, /inverse formula fails/);
    rejects(inverseId, { ...inverse, modulus: 4 }, /expected the field F5/);
    // X+1 is not square-zero in Q[X]/((X-1)^2); zero is not a nonzero witness.
    rejects(collisionId, { ...collision, epsilon_shift_sign: 1 }, /not square-zero.*Q/);
    rejects(collisionId, { ...collision, epsilon_scale: 0 }, /epsilon is zero/);
    // Twice epsilon is nonzero and square-zero, but is not the source's epsilon.
    rejects(collisionId, { ...collision, epsilon_scale: 2 }, /source normalization/);
    const stale = run(collisionId, { ...collision, asserts: 'Invented epsilon assertion.' });
    assert.equal(stale.status, 1);
    assert.equal(stale.body.outcomes.length, 0);
    assert.equal(stale.body.errors[0].code, 'smoke-assertion-mismatch');
    const unknown = run(inverseId, { ...inverse, check: 'cyclotomic-unregistered' });
    assert.equal(unknown.status, 1);
    assert.equal(unknown.body.outcomes.length, 0);
    assert.equal(unknown.body.errors[0].code, 'smoke-check');
  } finally { rmSync(directory, { recursive: true, force: true }); }
});
