import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

test('Max-Cut smoke enumerates the worked triangle and rejects wrong or absent assertions', t => {
  const directory = mkdtempSync(join(tmpdir(), 'finite-smoke-max-cut-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const path = join(directory, 'contract.json');
  const id = 'ex-conditional-expectation-for-a-small-max-cut-instance';
  const run = smoke => {
    writeFileSync(path, JSON.stringify({ version: 1, scope: [id],
      contracts: { [id]: { finite_smoke: [smoke] } } }));
    const result = spawnSync(process.execPath, ['tools/finite-smoke.mjs', path, '--json'],
      { cwd: new URL('../', import.meta.url), encoding: 'utf8' });
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const obligation = { check: 'max-cut-triangle-conditional-expectation',
    asserts: 'The initial expected cut size is $3/2$.', expected_cut: 2 };
  const good = run(obligation);
  assert.equal(good.status, 0);
  assert.match(good.body.outcomes[0].summary, /8 triangle placements, 15 conditional prefixes/);
  const wrong = run({ ...obligation, expected_cut: 3 });
  assert.equal(wrong.status, 1);
  assert.equal(wrong.body.errors[0].code, 'finite-countermodel');
  const fabricated = run({ ...obligation, asserts: 'The initial expected cut size is 12.' });
  assert.equal(fabricated.status, 1);
  assert.equal(fabricated.body.errors[0].code, 'smoke-assertion-mismatch');
});
