// Alpha group-b step-6b repairs: manifest + proof-contract updates that accompany
// the item edits to fs-every-subset-of-r-is-borel and thm-dynkin-pi-lambda.
//
// fs-every-subset-of-r-is-borel used the continuum identity |R| = c with no cited
// home. The only item stating it outright lives on a B/examples page, which
// depcheck rejects as a load-bearing target (b-leaf-content), so the refutation is
// re-routed through the Cantor set: |C| = |{0,1}^N| = 2^aleph0 = |P(N)| = c, and
// P(C) subset P(R) then collides with Cantor's theorem.
import { readFileSync, writeFileSync } from 'node:fs';

const manifestPath = 'research/frontier-15-batch-4.pages.json';
const contractPath = 'research/frontier-15-batch-4.proof-contracts.json';

const NEW_DEPS = [
  'thm-cardinality-of-the-borel-sigma-algebra-on-rn',
  'thm-cantor-powerset',
  'def-sigma-algebra',
  'thm-cantor-set-ternary-description',
  'def-cantor-set',
  'thm-cardinal-power-set-and-cantor',
  'def-cardinal-arithmetic',
];

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
for (const page of manifest) {
  for (const item of page.items) {
    if (item.id === 'fs-every-subset-of-r-is-borel') item.deps = [...NEW_DEPS];
  }
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

const doc = JSON.parse(readFileSync(contractPath, 'utf8'));
const fs = doc.contracts['fs-every-subset-of-r-is-borel'];

fs.citations = [
  fs.citations.find((c) => c.fact === 'L1'),
  fs.citations.find((c) => c.fact === 'L2'),
  fs.citations.find((c) => c.fact === 'L3'),
  {
    fact: 'L4',
    source: 'thm-cantor-set-ternary-description',
    source_section: 'Statement',
    quote:
      'consequently $b \\mapsto \\Phi\\big((2 b_k)_k\\big)$ is a bijection from\n   $\\{0,1\\}^{\\mathbb{N}}$, the set of sequences with values in $\\{0,1\\}$, onto\n   $C$',
    uses: ['1.2'],
  },
  {
    fact: 'L5',
    source: 'thm-cardinal-power-set-and-cantor',
    source_section: 'Statement',
    quote:
      '**(a)** $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$\n([[def-cardinal-arithmetic]]), and more generally\n$2^{\\lvert A \\rvert} = \\lvert \\mathcal{P}(A) \\rvert$ for every set $A$;',
    uses: ['1.2'],
  },
];
// L1 is now consumed at step 1.3 rather than 1.2.
fs.citations.find((c) => c.fact === 'L1').uses = ['1.3'];
fs.citations.find((c) => c.fact === 'L2').uses = ['2.1'];

fs.derivations = [
  fs.derivations.find((d) => d.step === '1.1'),
  {
    id: 'step-1-2',
    step: '1.2',
    claim:
      'The Cantor set satisfies $C\\subseteq\\mathbb R$, and [L4] with [L5] gives $|C|=|\\{0,1\\}^{\\mathbb N}|=2^{\\aleph_0}=|\\mathcal P(\\mathbb N)|=\\mathfrak c$.',
    inputs: ['L4', 'L5'],
  },
  {
    id: 'step-1-3',
    step: '1.3',
    claim:
      'Every subset of $C$ is a subset of $\\mathbb R$, so $\\mathcal P(C)\\subseteq\\mathcal P(\\mathbb R)$; under the contradiction hypothesis that inclusion lands in $\\mathcal B(\\mathbb R)$, whose cardinality is $\\mathfrak c$ by [L1], so $|\\mathcal P(C)|\\le\\mathfrak c=|C|$.',
    inputs: ['step 1.1', 'step 1.2', 'L1'],
  },
  {
    id: 'step-2-1',
    step: '2.1',
    claim:
      "By [L2], $|C|<|\\mathcal P(C)|$, contradicting step 1.3. Therefore some subset of $\\mathbb R$ is not Borel, and by [L3] the omitted subset is not the empty set.",
    inputs: ['step 1.2', 'step 1.3', 'L2', 'L3', 'discharge-contradiction'],
  },
];

writeFileSync(contractPath, JSON.stringify(doc, null, 2) + '\n');
console.log('facts:', fs.citations.map((c) => c.fact).join(','));
console.log('steps:', fs.derivations.map((d) => d.step).join(','));
