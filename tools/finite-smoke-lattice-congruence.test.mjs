import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

// The interval-partition check must run against the real chain/diamond items,
// prove its bound on the actual assertion excerpt, and reject a fabricated
// excerpt rather than silently passing on an unfaithful quote.
test('interval-partition smoke enumerates the chain and diamond and rejects wrong or absent assertions', t => {
  const directory = mkdtempSync(join(tmpdir(), 'finite-smoke-lattice-congruence-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const path = join(directory, 'contract.json');
  const example = 'ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond';
  const counterexample = 'cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence';
  const run = entries => {
    writeFileSync(path, JSON.stringify({ version: 1, scope: [example, counterexample],
      contracts: {
        [example]: { finite_smoke: entries.filter(entry => entry.id !== counterexample).map(({ id, ...rest }) => rest) },
        [counterexample]: { finite_smoke: entries.filter(entry => entry.id === counterexample).map(({ id, ...rest }) => rest) },
      } }));
    const result = spawnSync(process.execPath, ['tools/finite-smoke.mjs', path, '--json'],
      { cwd: new URL('../', import.meta.url), encoding: 'utf8' });
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const exampleEntry = { id: example, check: 'interval-partition-criterion-on-chain-and-diamond',
    asserts: 'On $D$ there are exactly eight interval partitions' };
  const counterexampleEntry = { id: counterexample, check: 'interval-partition-criterion-on-chain-and-diamond',
    asserts: 'It is a partition into intervals, but it is not a lattice congruence' };
  const good = run([exampleEntry, counterexampleEntry]);
  assert.equal(good.status, 0);
  assert.equal(good.body.outcomes.length, 2);
  for (const outcome of good.body.outcomes)
    assert.match(outcome.summary, /20 set partitions of the chain and the diamond, 12 interval partitions/);
  const fabricated = run([{ ...exampleEntry, asserts: 'On $D$ there are exactly nine interval partitions' }, counterexampleEntry]);
  assert.equal(fabricated.status, 1);
  assert.equal(fabricated.body.errors[0].code, 'smoke-assertion-mismatch');
  const unknown = run([{ ...exampleEntry, check: 'interval-partition-criterion-on-a-cube' }, counterexampleEntry]);
  assert.equal(unknown.status, 1);
  assert.equal(unknown.body.errors[0].code, 'smoke-check');
});
