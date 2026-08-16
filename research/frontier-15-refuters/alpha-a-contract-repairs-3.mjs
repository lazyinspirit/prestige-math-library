// Final contract pass: drop the duplicate iff rows (keep my DC-scoped ones), and
// narrow the two consumer quotes to the clause each proof actually uses, so the
// contract quote matches the item's Fact line rather than widening past it.
import fs from 'node:fs';

const P = 'research/frontier-15-batch-2.proof-contracts.json';
const c = JSON.parse(fs.readFileSync(P, 'utf8'));
const C = c.contracts;

for (const id of Object.keys(C)) {
  const seen = new Map();
  for (const r of C[id].boundaries || []) seen.set(r.case, r); // last wins
  C[id].boundaries = [...seen.values()];
}

const FORWARD_ONLY = 'A module with a composition series is both Noetherian and Artinian.';
for (const id of ['cor-semisimple-rings-are-noetherian-and-artinian', 'fs-every-module-has-a-composition-series']) {
  for (const cit of C[id].citations || []) {
    if (cit.source === 'thm-composition-series-iff-noetherian-and-artinian') {
      cit.quote = FORWARD_ONLY;
      console.log(`narrowed ${id} ${cit.fact} to the forward clause it uses`);
    }
  }
}

fs.writeFileSync(P, JSON.stringify(c, null, 2) + '\n');
console.log('done');
