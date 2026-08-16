// Follow-up: canonical boundary-case spellings, and consumer citation quotes
// re-synced against the two Statements I narrowed.
import fs from 'node:fs';

const P = 'research/frontier-15-batch-2.proof-contracts.json';
const c = JSON.parse(fs.readFileSync(P, 'utf8'));
const C = c.contracts;

const RENAME = { nonempty_choice: 'nonempty-choice', iff_forward: 'iff-forward', iff_reverse: 'iff-reverse' };
for (const id of Object.keys(C)) {
  for (const r of C[id].boundaries || []) if (RENAME[r.case]) r.case = RENAME[r.case];
}

// The two Statements I edited; consumers must quote the new text.
const NEW = {
  'thm-composition-series-iff-noetherian-and-artinian':
    'A module with a composition series is both Noetherian and Artinian. Conversely, assuming dependent choice, a module that is both Noetherian and Artinian has a composition series. The zero module has the empty composition series.',
  'thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules':
    'Assuming the Axiom of Choice, every finitely generated nonzero module has a maximal proper submodule.',
};

let n = 0;
for (const id of Object.keys(C)) {
  for (const cit of C[id].citations || []) {
    if (NEW[cit.source] && cit.source_section === 'Statement') {
      cit.quote = NEW[cit.source];
      n++;
      console.log(`requoted ${id} ${cit.fact} <- ${cit.source}`);
    }
  }
}

fs.writeFileSync(P, JSON.stringify(c, null, 2) + '\n');
console.log(`boundary cases renamed; ${n} citation quote(s) resynced`);
