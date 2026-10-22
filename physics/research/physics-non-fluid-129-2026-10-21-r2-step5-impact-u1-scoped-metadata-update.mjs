import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

// Run only through step5-shared-write-lock.mjs. Read every owner file here.
const run = 'physics-non-fluid-129-2026-10-21-r2';
const id = 'thm-csm-frontier-finite-rate-forward-equation';
const cex = 'cex-emg-fx-constant-radius-rigidity';
const load = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const save = (p, v) => fs.writeFileSync(p, JSON.stringify(v, null, 2) + '\n');
const stepClaim = (source, step) => {
  const m = source.match(new RegExp('^' + step.replace('.', '\\.') + ' ([\\s\\S]*?)(?=\\n\\n|$)', 'm'));
  assert(m, `Missing step ${step}`);
  return m[1].replace(/\s*\[[^\]\n]+\](?:\s*∎)?\s*$/, '');
};

const p18 = `research/${run}-batch-18.proof-contracts.json`;
const c18 = load(p18);
const sourceCex = fs.readFileSync(`items/${cex}.md`, 'utf8');
assert(sourceCex.includes('fixes the base two-form'));
const row18 = c18.contracts[cex].derivations.find(x => x.step === '1.1');
assert(row18);
row18.claim = stepClaim(sourceCex, '1.1');

const p94 = `research/${run}-batch-94.proof-contracts.json`;
const c94 = load(p94);
const contract = c94.contracts[id];
const source = fs.readFileSync(`items/${id}.md`, 'utf8');
assert(source.includes('  - thm-ftc-second-part\n'));
assert(source.includes('Applying the second fundamental theorem in [F4] componentwise'));
const supplier = fs.readFileSync('items/thm-ftc-second-part.md', 'utf8');
const quote = supplier.split('## Statement\n')[1].split('**Both hypotheses')[0].trim();
assert(quote.includes('Let $a < b$') && quote.includes('G(b) - G(a)'));
const secondCitation = contract.citations.find(x => x.source === 'thm-ftc-second-part');
if (secondCitation) Object.assign(secondCitation, {fact:'F4', quote, uses:['2.1']});
else contract.citations.push({fact:'F4', source:'thm-ftc-second-part', source_section:'Statement', quote, uses:['2.1']});
const row94 = contract.derivations.find(x => x.step === '2.1');
assert(row94);
row94.claim = stepClaim(source, '2.1');
if (!row94.inputs.includes('F4')) row94.inputs.splice(1, 0, 'F4');

const manifestPath = `research/${run}-batch-94.pages.json`;
const manifest = load(manifestPath);
const owners = manifest.flatMap(page => [...(page.items || []), ...(page.examples || [])]).filter(x => x.id === id);
assert.equal(owners.length, 1);
const owner = owners[0];
if (!owner.deps.includes('thm-ftc-second-part')) owner.deps.push('thm-ftc-second-part');
owner.dependency_roles['thm-ftc-second-part'] = 'mathematical-premise';

save(p18, c18);
save(p94, c94);
save(manifestPath, manifest);
for (const [p, subject] of [[p18, cex], [p94, id]]) {
  const output = execFileSync('node', ['tools/physics-support/proof-contract.mjs', p, '--strict', '--items', subject, '--json'], {encoding:'utf8'});
  console.log(output.trim());
}
