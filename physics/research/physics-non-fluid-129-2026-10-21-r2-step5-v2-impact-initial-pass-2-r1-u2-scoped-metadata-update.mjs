import fs from 'node:fs';
import assert from 'node:assert/strict';

const id = 'ex-emx-extraordinary-longitudinal-e';
const path = 'research/physics-non-fluid-129-2026-10-21-r2-batch-6.pages.json';
// The guarded runner acquires the shared lock before these fresh reads.
const pages = JSON.parse(fs.readFileSync(path, 'utf8'));
const source = fs.readFileSync(`items/${id}.md`, 'utf8');
const statement = source.split('## Example\n')[1].split('## Statement references')[0].trim();
const physicalScope = source.match(/^physical_scope: "([^\n]*)"$/m)[1];
assert(statement.includes('The algebraic example holds for every $\\omega>0$.'));
assert(statement.includes('I_\\omega=[\\omega_-,\\omega_+]'));
let count = 0;
for (const page of pages) {
  for (const item of [...(page.items ?? []), ...(page.examples ?? [])]) {
    if (item.id !== id) continue;
    count++;
    assert.deepEqual(item.deps, ['pthm-emx-uniaxial-dispersion']);
    item.statement = statement;
    item.physical_scope = physicalScope;
  }
}
assert.equal(count, 1);
const encoded = JSON.stringify(pages, null, 2) + '\n';
assert.equal(JSON.parse(encoded).flatMap(p => [...(p.items ?? []), ...(p.examples ?? [])])
  .find(item => item.id === id).statement, statement);
fs.writeFileSync(path, encoded);
console.log('Updated only the assigned example Statement and physical_scope manifest mirrors.');
