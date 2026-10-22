import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { sourceSectionText } from '../tools/physics-support/facts-block.mjs';

const run = 'physics-non-fluid-129-2026-10-21-r2';
const definitionId = 'def-csm-frontier-boltzmann-grad-scaling';
const exampleId = 'ex-csm-frontier-distinct-scaling-limits';
const mode = process.argv[2];
assert(['definition', 'example-title'].includes(mode));
const contractsPath = `research/${run}-batch-93.proof-contracts.json`;
const manifestPath = `research/${run}-batch-93.pages.json`;
// Reread both shared carriers only after the calling lock has been acquired.
const contracts = JSON.parse(readFileSync(contractsPath, 'utf8'));
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const row = id => {
  const matches = manifest.flatMap(page => page.items).filter(item => item.id === id);
  assert.equal(matches.length, 1);
  return matches[0];
};
if (mode === 'definition') {
  const text = readFileSync(`items/${definitionId}.md`, 'utf8');
  const definition = sourceSectionText(text, 'Definition');
  assert(definition.includes('locally finite'));
  assert(definition.includes('A free-flight interval is'));
  contracts.contracts[definitionId].definition_interface = definition.trim();
  const citation = contracts.contracts[exampleId].citations.find(c => c.fact === 'F2');
  assert.equal(citation.source, definitionId);
  citation.quote = definition;
  row(definitionId).statement = definition.trim();
  writeFileSync(contractsPath, JSON.stringify(contracts, null, 2) + '\n');
} else {
  const text = readFileSync(`items/${exampleId}.md`, 'utf8');
  const title = text.match(/^title: (.+)$/m)[1];
  assert.equal(title, 'Distinct kinetic scaling prescriptions');
  assert.equal(row(exampleId).statement, sourceSectionText(text, 'Example').trim());
  row(exampleId).title = title;
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Updated batch 93 ${mode} mirrors only; preserved other entries.`);
