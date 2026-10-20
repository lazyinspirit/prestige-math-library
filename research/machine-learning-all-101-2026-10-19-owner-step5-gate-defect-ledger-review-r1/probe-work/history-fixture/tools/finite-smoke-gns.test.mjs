import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const id = 'thm-gns-construction-for-topological-groups';

test('GNS finite smoke runs a registered model and requires a real assertion', () => {
  const dir = mkdtempSync(join(tmpdir(), 'finite-smoke-gns-'));
  const contract = join(dir, 'contract.json');
  const run = (smoke) => {
    writeFileSync(contract, JSON.stringify({
      version: 1,
      scope: [id],
      contracts: { [id]: { finite_smoke: [smoke] } },
    }));
    const result = spawnSync(process.execPath,
      ['tools/finite-smoke.mjs', contract, '--json'],
      { cwd: root, encoding: 'utf8' });
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  try {
    const assertion = 'the zero representation is cyclic under the stated convention.';
    const good = run({ check: 'gns-cyclic-c2-boundaries', asserts: assertion });
    assert.equal(good.status, 0);
    assert.equal(good.body.outcomes.length, 1);
    assert.match(good.body.outcomes[0].summary, /C2 positive-type Grams/);

    const fabricated = run({ check: 'gns-cyclic-c2-boundaries', asserts: 'a fabricated GNS assertion' });
    assert.equal(fabricated.status, 1);
    assert.equal(fabricated.body.errors[0].code, 'smoke-assertion-mismatch');

    const missing = run({ name: 'a narrative calculation', calculation: assertion });
    assert.equal(missing.status, 1);
    assert.equal(missing.body.errors[0].code, 'smoke-check');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
