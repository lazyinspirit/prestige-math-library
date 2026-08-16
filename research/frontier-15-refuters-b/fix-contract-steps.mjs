// Second pass on the batch-4 contract for fs-every-subset-of-r-is-borel: adopt
// precheck's canonical stratification (1.3 -> 2.1, old 2.1 -> 3.1) and give every
// cited item in a multi-item [L#] its own exact citation row, as
// proof-contract --strict requires.
import { readFileSync, writeFileSync } from 'node:fs';

const contractPath = 'research/frontier-15-batch-4.proof-contracts.json';
const doc = JSON.parse(readFileSync(contractPath, 'utf8'));
const fs = doc.contracts['fs-every-subset-of-r-is-borel'];

const byFact = Object.fromEntries(fs.citations.map((c) => [c.fact, c]));
byFact.L1.uses = ['2.1'];
byFact.L2.uses = ['3.1'];
byFact.L3.uses = ['3.1'];
byFact.L4.uses = ['1.2'];
byFact.L5.uses = ['1.2'];

fs.citations = [
  byFact.L1,
  byFact.L2,
  byFact.L3,
  byFact.L4,
  {
    fact: 'L4',
    source: 'def-cantor-set',
    source_section: 'Definition',
    quote: null, // filled below from disk
    uses: ['1.2'],
  },
  byFact.L5,
  {
    fact: 'L5',
    source: 'def-cardinal-arithmetic',
    source_section: 'Definition',
    quote: null,
    uses: ['1.2'],
  },
];

// Pull the exact clause each definition supplies, rather than paraphrasing it.
function clause(id, needle, lines = 3) {
  const text = readFileSync(`items/${id}.md`, 'utf8');
  const body = text.split(/^## /m).find((s) => s.startsWith('Definition'));
  const idx = body.indexOf(needle);
  if (idx < 0) throw new Error(`needle not found in ${id}: ${needle}`);
  const start = body.lastIndexOf('\n\n', idx) + 2;
  let end = start;
  for (let i = 0; i < lines; i++) {
    const next = body.indexOf('\n', end + 1);
    if (next < 0) { end = body.length; break; }
    end = next;
  }
  const stop = body.indexOf('\n\n', idx);
  return body.slice(start, stop < 0 ? end : stop).trim();
}

fs.citations[4].quote = clause('def-cantor-set', 'C');
fs.citations[6].quote = clause('def-cardinal-arithmetic', 'kappa^{\\lambda}'.replace('kappa', '\\kappa'));

fs.derivations = [
  fs.derivations.find((d) => d.step === '1.1'),
  fs.derivations.find((d) => d.step === '1.2'),
  {
    id: 'step-2-1',
    step: '2.1',
    claim:
      'Every subset of $C$ is a subset of $\\mathbb R$, so $\\mathcal P(C)\\subseteq\\mathcal P(\\mathbb R)$; under the contradiction hypothesis that inclusion lands in $\\mathcal B(\\mathbb R)$, whose cardinality is $\\mathfrak c$ by [L1], so $|\\mathcal P(C)|\\le\\mathfrak c=|C|$.',
    inputs: ['step 1.1', 'step 1.2', 'L1'],
  },
  {
    id: 'step-3-1',
    step: '3.1',
    claim:
      'By [L2], $|C|<|\\mathcal P(C)|$, contradicting step 2.1. Therefore some subset of $\\mathbb R$ is not Borel, and by [L3] the omitted subset is not the empty set.',
    inputs: ['step 1.2', 'step 2.1', 'L2', 'L3', 'discharge-contradiction'],
  },
];

// Boundary rows anchored at the old step numbers must follow the renumbering.
for (const b of fs.boundaries ?? []) {
  if (typeof b.evidence === 'string') {
    b.evidence = b.evidence.replace(/step 2\.1/g, 'step 3.1').replace(/step 1\.3/g, 'step 2.1');
  }
}

writeFileSync(contractPath, JSON.stringify(doc, null, 2) + '\n');
console.log('citation rows:', fs.citations.map((c) => `${c.fact}->${c.source}`).join(' '));
for (const c of fs.citations) if (!c.quote) throw new Error(`empty quote for ${c.fact}->${c.source}`);
console.log('quotes:');
for (const c of fs.citations.slice(3)) console.log(' ', c.source, JSON.stringify(c.quote).slice(0, 160));
