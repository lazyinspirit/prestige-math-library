import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { sparseMLChecks } from './checks/finite-smoke-ml101-sparse.mjs';

const base = fileURLToPath(new URL('.', import.meta.url));
const repo = fileURLToPath(new URL('../../../', import.meta.url));
const cases = JSON.parse(readFileSync(join(base, 'cases.json'), 'utf8'));
const outcomes = [], rejected = [], defaults = [];
for (const row of cases) {
  const source = readFileSync(join(repo, 'items', `${row.id}.md`), 'utf8');
  if (!source.includes(row.asserts)) throw new Error(`Source excerpt drift for ${row.id}`);
  if (row.reused_existing_check) continue; // Checked separately by the genuine registry CLI on only this selected item.
  const doc = JSON.parse(readFileSync(join(base, 'candidates', `machine-learning-all-101-2026-10-19-batch-${row.batch}.proof-contracts.json`), 'utf8'));
  const smoke = doc.contracts[row.id].finite_smoke[row.row_index];
  outcomes.push({ id: row.id, row_index: row.row_index, ...sparseMLChecks[row.check](smoke) });
}
for (const [name, check] of Object.entries(sparseMLChecks)) {
  defaults.push({ check: name, ...check({}) });
  for (const bad of [null, [], { check: 'unregistered-check' }, { fixture: 'not-a-fixture' },
    { fixture: 17 }, { fixture: '' }, { fixture: null }, { fixture: false },
    { unexpected_parameter: 1 }, { asserts: '' }, { result: [] }, { case: 0 }]) {
    const outcome = check(bad);
    rejected.push({ check: name, selector: bad, ...outcome });
    if (outcome.ok) throw new Error(`${name} accepted invalid selector ${JSON.stringify(bad)}`);
  }
}
const ok = outcomes.every(x => x.ok) && defaults.every(x => x.ok) && rejected.every(x => !x.ok);
const evidence = { ok, scope: 'Focused staged callbacks only; no native gate or global self-test.', outcomes, defaults, rejected };
writeFileSync(join(base, 'evidence', 'focused-callback-results.json'), `${JSON.stringify(evidence, null, 2)}\n`);
console.log(JSON.stringify(evidence, null, 2));
process.exitCode = ok ? 0 : 1;
