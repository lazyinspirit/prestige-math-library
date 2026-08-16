// Alpha `a`, step 6b — resync contract input maps to the step brackets I changed.
// Read from disk: the bracket at the end of each rewritten step is the truth, and
// the contract must record exactly those inputs plus the fact `uses` lists.
import fs from 'node:fs';

const P = 'research/frontier-15-batch-2.proof-contracts.json';
const doc = JSON.parse(fs.readFileSync(P, 'utf8'));

const TOUCHED = [
  'thm-normalizer-condition-for-finite-nilpotent-groups',
  'thm-maximal-subgroups-of-finite-nilpotent-groups',
  'lem-finite-nilpotence-via-normal-sylow-subgroups',
  'cor-finite-direct-sums-preserve-chain-conditions',
  'thm-finitely-generated-modules-over-noetherian-rings-are-noetherian',
  'thm-submodules-and-quotients-of-semisimple-modules',
  'thm-socle-is-the-largest-semisimple-submodule',
  'thm-schurs-lemma-for-modules',
  'cor-rational-algebraic-integers-are-integers',
  'fs-every-module-has-a-composition-series',
  'thm-second-isomorphism-theorem-modules',
  'thm-third-isomorphism-theorem-modules',
  'cor-noetherian-modules-are-hopfian',
  'thm-frattini-subgroup-is-nilpotent',
];

const stepsOf = (id) => {
  const t = fs.readFileSync(`items/${id}.md`, 'utf8');
  const body = (t.match(/^## (Proof|Verification|Refutation)\b([\s\S]*)$/m) || [])[2] || '';
  const out = [];
  for (const raw of body.split('\n')) {
    const s = raw.trim();
    const m = s.match(/^(\d+\.\d+)\s+([\s\S]*?)\s*\[([^\]]*)\]\s*∎?\s*$/);
    if (!m) continue;
    out.push({
      step: m[1],
      claim: m[2].trim(),
      inputs: m[3].split(',').map((x) => x.trim()).filter(Boolean),
    });
  }
  return out;
};

let dsync = 0, csync = 0;
for (const id of TOUCHED) {
  const k = doc.contracts[id];
  if (!k) { console.log('NO CONTRACT', id); continue; }
  const steps = stepsOf(id);

  // derivations: one entry per numbered step, inputs verbatim from the bracket
  k.derivations = steps.map((s) => ({
    id: `step-${s.step.replace('.', '-')}`, step: s.step, claim: s.claim, inputs: s.inputs,
  }));
  dsync++;

  // citation `uses`: which steps cite each fact, again from the brackets
  for (const cit of k.citations || []) {
    const uses = steps.filter((s) => s.inputs.includes(cit.fact)).map((s) => s.step);
    if (uses.length) { cit.uses = uses; csync++; }
  }
}

fs.writeFileSync(P, JSON.stringify(doc, null, 2) + '\n');
console.log(`${dsync} derivation map(s) and ${csync} citation use-list(s) resynced from disk`);
