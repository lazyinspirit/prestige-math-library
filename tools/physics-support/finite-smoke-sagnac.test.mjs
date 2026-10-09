import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../../', import.meta.url));
const id = 'ex-sr-guided-ring-sagnac-worked';
const text = readFileSync(join(root, 'physics/items', `${id}.md`), 'utf8');
const asserts = text.slice(text.indexOf('(a) **Return times.**'), text.indexOf('\n\n(d) **Scope.**'));

test('native Sagnac selection enumerates authored reunions and rejects convention errors', t => {
  const directory = mkdtempSync(join(tmpdir(), 'physics-finite-smoke-sagnac-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const path = join(directory, 'contract.json');
  const obligation = { check: 'sr-guided-ring-sagnac-worked-reunions', asserts,
    expected_return_ticks: [20, 5], expected_chart_delay: [15, 4],
    expected_proper_delay: [3, 1], expected_chart_holonomy: [15, 8],
    expected_proper_holonomy: [3, 2] };
  const run = (smoke, items = id) => {
    writeFileSync(path, JSON.stringify({ version: 1, scope: [id],
      contracts: { [id]: { finite_smoke: [smoke] } } }));
    const result = spawnSync(process.execPath,
      ['tools/physics-support/finite-smoke.mjs', path, '--items', items, '--json'],
      { cwd: root, encoding: 'utf8' });
    assert.equal(result.stderr, '');
    return { status: result.status, body: JSON.parse(result.stdout) };
  };
  const good = run(obligation);
  assert.equal(good.status, 0);
  assert.equal(good.body.outcomes.length, 1);
  assert.equal(good.body.outcomes[0].id, id);
  assert.match(good.body.outcomes[0].summary, /160 exact angular-phase comparisons/);
  assert.match(good.body.outcomes[0].summary, /inertial reunions 8,8/);
  for (const [field, value] of [
    ['expected_return_ticks', [5, 20]], // co/counter reversal
    ['expected_chart_delay', [-15, 4]], // sign
    ['expected_proper_delay', [15, 4]], // omitted clock conversion
    ['expected_chart_holonomy', [15, 4]], // omitted factor two
    ['expected_proper_holonomy', [3, 1]],
    ['expected_chart_delay', [15, 0]], // malformed expected fraction
  ]) {
    const bad = run({ ...obligation, [field]: value });
    assert.equal(bad.status, 1, field);
    assert.equal(bad.body.errors[0].code, 'finite-countermodel', field);
  }
  const fabricated = run({ ...obligation, asserts: 'The first reunion time is zero.' });
  assert.equal(fabricated.status, 1);
  assert.equal(fabricated.body.errors[0].code, 'smoke-assertion-mismatch');
  const unknown = run({ ...obligation, check: 'unregistered-sagnac-check' });
  assert.equal(unknown.status, 1);
  assert.equal(unknown.body.errors[0].code, 'smoke-check');
  const outside = run(obligation, 'not-in-contract');
  assert.equal(outside.status, 1);
  assert.equal(outside.body.errors[0].code, 'selection-outside-scope');
});
