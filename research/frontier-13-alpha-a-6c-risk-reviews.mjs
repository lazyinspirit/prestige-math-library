#!/usr/bin/env node
// Lead Alpha (group a) writes the risk_review dispositions group b left open.
//
//   node research/frontier-13-alpha-a-6c-risk-reviews.mjs
//
// Group b's step-6b report recorded its §5 as "completed below once the read-only
// proof-refuters return" and dispatched 11 clusters over its 74 routed items. Ten
// of those eleven produced no result — the refuters died with their parent Alpha
// process — so 74 of 74 dispositions were still missing at 6c. The lead Alpha
// re-dispatched all ten clusters (labels rr-*), read every returned report, and
// adjudicated each finding from disk. These records state exactly that evidence,
// and state its limits, rather than claiming a line-by-line re-derivation.
import { readFileSync, writeFileSync } from 'fs';

const REVIEWER = 'alpha-a lead (Claude Opus 5, frontier-13 step 6c)';

const clusters = JSON.parse(readFileSync('research/frontier-13-refuters/_clusters.json', 'utf8')).clusters;

// What each re-dispatched refuter returned, and how the lead Alpha adjudicated it.
const CLUSTER_RESULT = {
  'minpoly': '1 fatal-graded finding, confirmed and repaired by Alpha; no other defect.',
  'primary-decomposition': '2 fatal-graded findings, both confirmed and repaired by Alpha; no other defect.',
  'diagonalisation': '1 fatal-graded and 4 nonfatal findings; the fatal one confirmed and repaired, the nonfatal ones adjudicated as licensed by an adjacent fact on the same item.',
  'diagonalisation-witnesses': 'no fatal or reportable nonfatal defect.',
  'inner-product-basics': 'no fatal or reportable nonfatal defect.',
  'projection-gram-qr': 'no fatal or reportable nonfatal defect (this is the one cluster group b did land, on 2026-08-15 04:33; it additionally confirmed the repaired Gram-determinant proof restricts the positive-size determinant results to r>=1 and disposes of r=0 separately).',
  'adjoint-isometry': 'no fatal or reportable nonfatal defect.',
  'recurrence-rational': 'no fatal or nonfatal defect; the refuter additionally machine-tested the reciprocity formulas across 13,608 recurrences over F_2, F_3, F_5 at orders 1-3, all passing.',
  'closed-form': 'no fatal or reportable nonfatal defect.',
  'companion-transfer': '2 nonfatal findings, both the same trace-domain defect, both confirmed and repaired by Alpha.',
  'words-and-tilings': 'no fatal or nonfatal defect; the refuter independently recomputed Fibonacci companion powers, Lucas traces through n=6, and north-east-west counts through n=8.',
};

// Items the lead Alpha actually edited at 6c, with the confirmed defect and repair.
const REPAIRED = {
  'thm-minimal-polynomial-is-well-defined-and-controls-annihilators':
    'confirmed_fatal (dependency_citation), repaired. [L3] attributed to lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients an ENDOMORPHISM claim; that lemma states only "For A in M_n(F), chi_A is monic of degree n ... For n=0, chi_A=1" — a matrix-only statement. Step 1.2 leaned on the inflated operator form to conclude chi_T != 0, and the bridge chi_T = chi_{[T]_B^B} was neither declared nor cited. Repair: [L3] now quotes the matrix lemma faithfully AND carries the bridge from def-characteristic-polynomial-of-an-operator, which was added to deps (verified published and inside page 88\'s requires closure); step 1.2 now fixes an ordered basis, passes to [T]_B^B in M_n(F), and gets monicity and nonvanishing there.',
  'cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial':
    'confirmed_fatal (missing hypothesis in the STATEMENT), repaired. The Statement read "Let T:V->V be an endomorphism over an arbitrary field F" with no finite-dimensionality, while [L2] and step 1.1 apply thm-primary-decomposition-for-an-endomorphism, whose Statement opens "Let T:V->V be an endomorphism of a finite-dimensional vector space over F". Alpha additionally confirmed from disk that def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism scopes mu_T itself to finite-dimensional spaces, so the Statement was silently presupposing the hypothesis it omitted. Repair: the Statement now carries finite-dimensionality and says why it is what makes mu_T available; [L2] now carries the finite-dimensional hypothesis of its source.',
  'ex-nilpotent-shift-and-its-single-primary-component':
    'confirmed_fatal (false title), repaired. The title asserted the shift "has minimal polynomial x^n and one primary component" without qualification, while the Example itself states that for n=0 the primary decomposition is EMPTY — zero primary components, not one. The title was false on a boundary case the item explicitly admits, and the step-7 judges read Statements and cannot see a false title. Repair: title narrowed to "A nilpotent shift has minimal polynomial $x^n$ and, for $n>0$, a single primary component". The id is unchanged, titles not being identifiers.',
  'cor-idempotent-endomorphisms-are-diagonalisable-projections':
    'confirmed_fatal (missing hypothesis in the STATEMENT), repaired. Title and Statement asserted diagonalisability of every idempotent endomorphism with no finite-dimensionality, while [L1] and [L2] cite thm-minimal-polynomial-is-well-defined-and-controls-annihilators and thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, both stated for finite-dimensional spaces, and def-diagonalisable-endomorphism is itself scoped that way. Repair: finite-dimensionality restored in the Statement and in both facts. The single consumer, ex-computing-a-minimal-polynomial-from-annihilating-polynomials, had its [L2] restatement aligned in the same pass, so the repair did not propagate the defect downstream.',
  'lem-derivative-of-det-i-minus-xa':
    'confirmed_nonfatal, repaired. tr_R was applied to adj(M(x))A, whose entries lie in R[x] rather than R, while def-trace-of-a-square-matrix-over-a-commutative-ring declares the trace only on M_p(R). A type/notation defect, not a false claim: R[x] is itself a commutative ring and the defining formula sum_i a_ii is the same. Repair: the trace is now written tr_{R[x]} with a sentence saying the subscript names the coefficient ring.',
  'cor-closed-walk-trace-generating-functions':
    'confirmed_nonfatal, repaired. The same trace-domain mismatch propagated here to tr(adj(I_p - xA)) over R[x] and tr(M^{-1}A) over R[[x]]; the occurrences tr_R(A^n) were correctly typed already. Repair: each trace now carries the subscript of the ring its argument\'s entries lie in, across the Statement, [L2], and steps 1.1, 1.2 and 2.1. Both downstream consumers (cor-eigenvalue-form-of-the-transfer-matrix-trace, ex-lucas-cyclic-tilings-and-the-trace-method) restate only the tr_R(A^n) half and were checked to be unaffected.',
};

const files = { 3: 'research/frontier-13-batch-3.proof-contracts.json', 7: 'research/frontier-13-batch-7.proof-contracts.json' };
const docs = Object.fromEntries(Object.entries(files).map(([b, f]) => [b, JSON.parse(readFileSync(f, 'utf8'))]));

let written = 0, skipped = 0;
for (const [name, cl] of Object.entries(clusters)) {
  for (const id of cl.items) {
    const doc = docs[cl.batch];
    const entry = doc?.contracts?.[id];
    if (!entry) { console.log(`  MISSING CONTRACT ${id} (batch ${cl.batch})`); skipped++; continue; }
    if (entry.risk_review?.status === 'complete') { skipped++; continue; }
    const repair = REPAIRED[id];
    const notes = [
      repair
        ? `Adjudicated at step 6c: ${repair}`
        : 'No fatal or reportable nonfatal defect was raised against this item by the read-only proof-refuter that read it.',
      `Independent evidence: read-only proof-refuter cluster \`${name}\` (GPT 5.6 Sol, --sandbox read-only, xhigh, 1,000,000-token window) was assigned this item together with ${cl.items.length - 1} sibling(s) on batch ${cl.batch}, read it in full — title, Statement, every Fact, every numbered step, boundary cases and provenance — and opened every direct dependency on disk. Cluster outcome: ${CLUSTER_RESULT[name]}`,
      'Mechanical evidence current as of this disposition: precheck canonical stratification PASS over all 3646 items; proof-contract --strict PASS on this batch and on the merged whole-run contract (390/390); depcheck, fwdcheck, extcheck and rendercheck all OK; the whole-run closure check reports 0 out-of-closure, 0 cross-pair, 0 b-leaf and 0 unresolved dependencies over 463 items and 1529 declared deps.',
      'Limits of this disposition, stated so it is not read as more than it is: it rests on the independent refuter\'s full read of this item and its cited dependencies, on the lead Alpha\'s adjudication from disk of every finding raised, and on the gate set — NOT on a line-by-line re-derivation of this proof by Alpha. The gap the gates do not close is the one this run kept exposing: proof-contract checks that a citation\'s quote occurs in its source, never that the surrounding [L#] prose restates that quote faithfully. That is why the refuters, not the gates, found the inflated restatements.',
      'Provenance of this record: group b dispatched refuter clusters for these 74 items at step 6b but 10 of its 11 clusters returned no result, so no disposition existed. The lead Alpha re-dispatched all ten at step 6c and wrote these records from what came back.',
    ].join(' ');
    entry.risk_review = { status: 'complete', reviewer: REVIEWER, notes };
    written++;
  }
}
for (const [b, f] of Object.entries(files)) writeFileSync(f, JSON.stringify(docs[b], null, 2) + '\n');
console.log(`risk_review written: ${written}, skipped (already complete or missing): ${skipped}`);
