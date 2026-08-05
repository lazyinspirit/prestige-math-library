#!/usr/bin/env node
// wave5-amend-impact-round2.mjs — amend the A6 impact receipt for the four
// Alpha repairs made at A6 round 2.
//
// WHY. Each affected row's existing note asserts the change "left the target's
// claim section and title byte-identical". After the round-2 repairs that
// sentence is no longer true of these four targets, and a receipt is evidence:
// leaving a now-false justification in place would be worse than the missing
// disposition it was written to supply. The status stays `still-licensed` —
// re-derived below from each consumer's actual use, not inherited.

import { readFileSync, writeFileSync } from 'node:fs';

const path = 'research/audit/wave5-impact-audit.json';
const receipt = JSON.parse(readFileSync(path, 'utf8'));

// Consumer -> the evidence that its citation survives the round-2 repair.
const AMENDMENTS = {
  'cex-nested-unbounded-closed-empty':
    'cex-nested-open-intervals-empty (line 89) for the contrast "where the candidate point exists and is ..." — a mathematical-content citation',
  'ex-nested-intervals-single-point':
    'cex-nested-open-intervals-empty (line 101) for "whose intersection is *empty*" — a mathematical-content citation',
  'fs-nested-open-intervals-nonempty':
    'cex-nested-open-intervals-empty (forward_refs + line 115) as the named counterexample to its own refuted claim — a mathematical-content citation',
  'thm-heine-borel-r':
    'cex-nested-open-intervals-empty (line 98) for "Boundedness enters through the same ..." — a mathematical-content citation',
  'thm-nested-interval-property':
    'cex-nested-open-intervals-empty (forward_refs + line 129) for "which keeps boundedness and drops ..." — a mathematical-content citation',
  'cex-pointwise-bounded-but-not-equicontinuous':
    'fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets ([L1], line 60) for the spike family\'s continuity, f_k(0)=0, f_k(a_k)=1 and 0<a_k<=1/2 — none of which the corrected Remark touches; the item never mentions an integral or an area',
  'ex-the-moving-spike-family-in-the-three-topologies':
    'fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets ([L1], line 77) for the spike family\'s continuity, pointwise convergence to 0, f_k(a_k)=1 and 0<a_k<=1/2, plus "steps of its refutation" — none of which the corrected Remark touches; the item never mentions an integral or an area',
};

const ROUND2 = 'A6 ROUND 2 AMENDMENT (Audit-Alpha, claude-opus-5, 2026-08-05): the ' +
  'sentence above asserting the target stayed byte-identical outside its ' +
  'frontmatter no longer holds — Alpha repaired the target at A6 round 2. ' +
  'The licence was therefore RE-DERIVED from this consumer\'s actual use rather ' +
  'than inherited. This item cites ';

const TAIL = {
  claim: '. The round-2 repairs changed no Statement, no numbered proof step, no ' +
    '[L#] fact and no dependency list: cex-nested-open-intervals-empty replaced a ' +
    'false locational phrase ("the preceding example on this page") with the plain ' +
    'citation [[ex-nested-intervals-single-point]], and ' +
    'fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets corrected a ' +
    'Remark that wrongly claimed the moving-spike witness also refutes convergence of ' +
    'integrals. Disposition: still-licensed, on the evidence above.',
};

let amended = 0;
for (const entry of receipt.dispositions) {
  const use = AMENDMENTS[entry.id];
  if (!use) continue;
  if (entry.notes.includes('A6 ROUND 2 AMENDMENT')) { console.log(`skip ${entry.id}: already amended`); continue; }
  entry.status = 'still-licensed';
  entry.notes = `${entry.notes}\n\n${ROUND2}${use}${TAIL.claim}`;
  amended++;
  console.log(`amended ${entry.id}`);
}

// The two other round-2 repairs reach nobody: impact-audit computes 0 logical and
// 0 direct-citation consumers for ex-the-particular-point-topology-in-the-separation-hierarchy
// (the title narrowing) and for rem-function-space-conventions (the reading-order
// correction), so there is no consumer row to amend for either.
receipt.round2_note = 'A6 round 2 (Audit-Alpha, claude-opus-5, 2026-08-05): four items repaired — ' +
  'ex-the-particular-point-topology-in-the-separation-hierarchy (title narrowed to match the body, CONFIRMED FATAL), ' +
  'rem-function-space-conventions (a second stale reading-order claim, CONFIRMED FATAL), ' +
  'cex-nested-open-intervals-empty (false locational phrase) and ' +
  'fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets (false Remark about integrals). ' +
  'Recomputed pre-a6-round2 -> post-a6-round2: 4 changed interfaces, 7 consumers requiring review, ' +
  '0 of them downstream of the two title/reading-order repairs. All 7 amended rows are still-licensed on re-derived evidence.';

writeFileSync(path, `${JSON.stringify(receipt, null, 1)}\n`);
console.log(`\namended ${amended}/7 disposition rows`);
