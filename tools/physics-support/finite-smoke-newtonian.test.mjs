import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../../', import.meta.url));
const tool = join(root, 'tools/physics-support/finite-smoke.mjs');
const id = 'lem-fd-newtonian-admissibility';
const asserts = String.raw`Then $\mathcal Q(D,g,T)\ge0$ for every symmetric $D$, every $g\in\mathbb R^3$, and every $T>0$ if and only if
$$\mu\ge0,\qquad \zeta\ge0,\qquad x^T(\operatorname{sym}K)x\ge0\quad\text{for every }x\in\mathbb R^3.$$`;

test('Newtonian smoke checks the actual coefficient assertion and rejects sign/factor mutations', t => {
  const directory = mkdtempSync(join(tmpdir(), 'physics-finite-smoke-newtonian-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const contract = join(directory, 'contract.json');
  const run = (assertion = asserts, script = tool) => {
    writeFileSync(contract, JSON.stringify({ version: 1, scope: [id], contracts: {
      [id]: { finite_smoke: [{ check: 'fd-newtonian-stress-admissibility', asserts: assertion }] },
    } }));
    const result = spawnSync(process.execPath, [script, contract, '--items', id, '--json'], {
      cwd: root, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: join(root, 'physics') },
    });
    assert.equal(result.stderr, '');
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const good = run();
  assert.equal(good.status, 0);
  assert.equal(good.body.outcomes.length, 1);
  assert.equal(good.body.outcomes[0].id, id);
  assert.match(good.body.outcomes[0].summary, /30618 direct stress contractions/);
  assert.match(good.body.outcomes[0].summary, /nonzero null witnesses/);
  assert.match(good.body.outcomes[0].summary, /negative witnesses for all 23 inadmissible pairs/);

  const absent = run('Every negative viscosity is admissible.');
  assert.equal(absent.status, 1);
  assert.equal(absent.body.errors[0].code, 'smoke-assertion-mismatch');
  assert.deepEqual(absent.body.outcomes, []);

  const source = readFileSync(tool, 'utf8');
  for (const [label, before, after] of [
    ['missing shear factor two', '2 * mu * D[i][j]', 'mu * D[i][j]'],
    ['wrong bulk sign', 'lambda * trace : 0', '-lambda * trace : 0'],
    ['strict coefficient boundary', '2 * mu + 3 * lambda >= 0', '2 * mu + 3 * lambda > 0'],
  ]) {
    assert.ok(source.includes(before), label);
    const mutant = join(directory, 'mutated.mjs');
    writeFileSync(mutant, source.replace(before, after));
    const bad = run(asserts, mutant);
    assert.equal(bad.status, 1, label);
    assert.equal(bad.body.errors[0].code, 'finite-countermodel', label);
  }
});
