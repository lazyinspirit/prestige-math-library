# Step 6c cross-batch audit — phase-2-hg-prerequisite

Role: `alpha`, labels `6c-lead`, `6c-gate-impact-audit-1`, and
`6c-gate-impact-audit-6c-2`. This is a
cross-group closure and focused gate-repair report, not a judge stamp or a
stage-transition decision.

## Computed obligations and disposition

The current `research/phase-2-hg-prerequisite-cross-group-edges.json` contains
zero `edges`, zero `forwards`, and zero post-6b `changes`. Recomputing with
`node tools/cross-group-edges.mjs list --run phase-2-hg-prerequisite` reported
the same empty work list over 25 in-scope items. The validated assignment has
one Alpha group (`a`) and one batch (`1`), so no second batch or group exists
for an in-flight cross-batch edge. Both the batch-owned and unified frontier
dependency ledgers remain empty after the required refresh.

There was therefore no edge, forward-reference, addition, removal, or
in-flight item/page outcome for the original cross-group dispatch. The focused
impact-audit repair below subsequently added two published-consumer gate
verdicts. It did not create or fabricate an in-flight change verdict.

## Impact-audit repair cycle 1

The assigned pre-author-to-post-6b receipt now records reviewer
`lead-alpha/6c-gate-impact-audit-1`, all 27 changed public interfaces, and all
7,331 computed affected items. Every disposition is concrete and tied to the
current files: 3,660 are `not-load-bearing`, 3,646 are `still-licensed`, and
25 are `repaired`. The 25 repaired dispositions are the same-window in-flight
items whose frozen Step-6 evidence and current carriers were rechecked; they do
not represent 25 new edits in this repair cycle.

The two changed published suppliers were reviewed separately:

- `lem-null-maximal` changed only by adding a source reference and strengthening
  its proof. Its statement, facts, remarks, and dependencies are unchanged, so
  the logical cone is not load-bearing on that surface delta.
- `thm-metric-continuity-characterisations` now correctly separates the four
  choice-free continuity characterisations from the converse implication out
  of sequential continuity, which requires Countable Choice. All 24 direct
  citation consumers were inspected against that current statement. Twenty-two
  use only retained directions. Two published consumers had stale unqualified
  wording and were repaired with stable ids:
  `def-metric-continuity` now gives the exact choice split in its Remark and
  declares `def-countable-choice`; and
  `cex-separately-continuous-not-jointly-continuous` now states only the
  choice-free fact that continuity preserves convergent sequences and uses its
  contrapositive.

Those two repairs have pre/post guarded ownership claims and repaired handoffs
in `research/phase-2-hg-prerequisite-step8-published-repairs.jsonl`, unique
closed rows `hgp-6c-impact-def-metric-choice-scope` and
`hgp-6c-impact-cex-separate-continuity-iff` in the defect ledger, and matching
current-hash `kind: "gate"` verdicts in
`research/phase-2-hg-prerequisite-6c-verdicts.jsonl`. Each repair records
`repair_confidence: 1`. The published-consumer/supplier ledger records the
complete A--R review and disposition.

The final Step-6 router originally accepted only 6a-owned published claims,
although this protocol expressly authorizes claimed 6c gate repairs. The
ownership validation in `tools/published-repairs.mjs` and
`tools/step6-scope.mjs` was narrowed to admit an exact current 6c repaired
handoff with the same id, group, claim hash, post hash, nonempty correction and
defect, and confidence 1. This is a mechanical protocol repair, not a
mathematical defect, so no defect row was invented for it.

## Currency and earlier Step-6 evidence

The post-6b snapshot is labelled `post-6b` and contains 25 item carriers and
two page carriers. Live recomputation finds no composite-carrier difference
from that snapshot. In particular, the current carrier hashes for the two 6b
draft repairs are:

- `lem-geodesic-segments-have-isometric-ultralimits`:
  `2f38909cbee49f780ece4c1fb9f9ff6595c630c2e0afd183cbb24e654f292083`.
  The current statement requires the chosen origins to remain in one bounded
  rescaled basepoint neighbourhood, exactly the hypothesis used in proof steps
  1.1--3.2. This matches decision `gate:hgp-6b-a-origin` and closes the arbitrary
  far-origin counterexample while retaining the zero, finite-endpoint, ray, and
  line cases. The cited comparison is Druţu--Kapovich, Lemmas 10.48--10.51,
  PDF pp. 366--367, at
  https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf.
- `lem-relator-expressions-give-controlled-singular-planar-diagrams`:
  `52c781add19c7d0ba53cefe8005a9bb486ecde777c6642c562769b53b8ec4ac5`.
  Current steps 3.1--4.1 use the closed complements `K` and `K_0`; the stated
  seven-corner polygon omits the old open top segment and meets the triangular
  fold region exactly in the two sloping sides. This matches decision
  `post-reader:1:lem-relator-expressions-give-controlled-singular-planar-diagrams`.
  The relevant source comparisons remain Erickson, Theorem 1.10, PDF
  pp. 13--14,
  https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf,
  and Bridson, Lemmas 4.2.3/4.2.6 and Remark 4.2.5, PDF pp. 22--24,
  https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf.

The reader's sole routed finding, `reader:1:1`, concerned published supplier
`thm-metric-continuity-characterisations`. Its current guard hash is
`5a5f95eee27a52afcb9ba041db133f4e77f18f8aa6e900971070eea892aef7fd`,
matching the owner repair handoff, and its current 6c composite carrier is
`c0ea81a35bee8ab69e0fb8f41ac81f1092ec4ae02db134948c202c60329a200a`.
The written claim now says that (a), (b), (c), and (e) are choice-free and
imply sequential continuity (d), while Countable Choice is assumed only for
(d) implying (e). Proof step 1.6 identifies that exact choice. The in-flight
consumer `def-real-tree-tripods-and-geodesic-triangle-minsize` uses only the
unchanged choice-free metric/open-preimage equivalence, so no consumer choice
hypothesis is introduced. This agrees with the owner resolution and the
current `confirmed_fatal`/fixed decision. The source checked there is Cichon,
Definition 1 and the following paragraph,
https://cs.pwr.edu.pl/cichon/prace/Cont20020709.pdf.

The frozen reader and refuter receipts still match their exact hashes in the
Step-6 scope. The refuter opened all 25 assigned items and both pages and
reported no in-flight finding. Because the current in-flight composite
carriers equal the post-6b snapshot, its no-finding result is not being
projected across an unrecorded later edit. The earlier author-gate retry was
the vacuous finite-smoke detector, not a mathematical defect. The current
contract names `tree-characterisation`; `finite-smoke` now executes one check over every
simple graph through five vertices and passes. It does not purport to certify
the planar topology argument.

## Repair-cycle-1 validation

The following checks passed after the cycle-1 focused repair:

- frontier dependency refresh; cross-group edge currency and ownership check;
  final Step-6 routing (25 items, one resolved adjudication obligation); and
  defect-ledger validation (five rows);
- the assigned primary impact audit: 27 changed interfaces, 7,331 affected
  items, a nonempty reviewer, and zero receipt errors;
- targeted reflow and precheck for the repaired counterexample, rendercheck for
  both repaired items, depcheck with the bounded pending-audit allowance,
  fwdcheck, and extcheck;
- the unchanged original cross-group computation: zero edges, zero forwards,
  and zero post-6b in-flight changes.

The added routing regression fixture could not execute in this sandbox because
the existing test fixture invokes external `cp` and Node reports
`spawnSync cp EPERM`. The current-tree final routing check exercises the same
new 6c claim/handoff path and passes.

The shell URL sweep could not resolve any of the five source hosts and exited
nonzero. This is an environment/DNS failure, not evidence that the sources are
dead: the web channel currently opens the Frigerio--Sisto arXiv record, the
21-page Erickson PDF, Erickson's planar-graph notes, and the 837-page
Druţu--Kapovich PDF. The Bridson endpoint again returns the same browser-side
internal error recorded by the earlier reviews; the prior complete local-text
receipt remains the available evidence. No source was dropped or replaced.

## Impact-audit-6c repair cycle 2

The cycle-2 primary gate was reproduced from the current tree. It computed 12
changed public interfaces and 4,830 affected items. The exact receipt now names
the task reviewer and contains all 4,830 required dispositions: 4,753
`not-load-bearing`, 74 `still-licensed`, and three `repaired`. The 77 distinct
direct consumers were checked against the actual changed statement, definition,
or remark; the other 4,753 items are transitive-only and do not cite a changed
interface directly. Their receipt notes identify that graph basis rather than
pretending that transitive reachability itself is a mathematical use.

The large cone comes from `def-metric-continuity`. Its epsilon--delta Definition
is unchanged; the changed Remark only corrects the choice strength of the
sequential converse. The 68 direct citations use the unchanged Definition,
choice-free continuity-implies-sequential-continuity, or an explicitly scoped
Countable-Choice converse. The already repaired
`cex-separately-continuous-not-jointly-continuous` is therefore the third
`repaired` receipt entry rather than a new edit in this cycle.

The smaller changed-interface cones were read separately. The repaired
pointwise-ramp counterexample retains the exact discontinuous endpoint limit
used by `ex-dini-on-the-unit-interval`; the repaired bull-free corollary retains
the quarter-power conclusion and now includes the empty graph; and the corrected
O'Nan--Scott remark retains the coarse five-type interface used by the theorem.
The three other changed counterexamples have no consumers. No downstream repair
was needed in those cones.

The broadened `def-van-kampen-diagram-boundary-label-and-area` exposed two
fatal direct-consumer defects:

- `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`
  falsely forced an area-zero diagram to be a point and used a disc-shelling
  argument for a general simply connected planar complex. It now prunes
  zero-face trees and collapses free faces while tracking the conjugate-relator
  change in the literal boundary occurrence walk.
- `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` falsely called
  every nondegenerate diagram a closed disc and applied a disc-only proposition.
  It now admits cut vertices and graph parts, disposes of the one-face graph-spur
  endpoint using the freely reduced boundary hypothesis, and applies the stated
  general-diagram extension after arc reduction.

For the first repair, Touikan Section 3.4, especially Lemma 3.4.3, gives the
finite planar simply connected convention, the free-face lemma, and the
zero-face tree case:
https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html.
For the second, Touikan Section 3.5 states the disc restriction for Proposition
3.5.5 and, after Corollary 3.5.8, explicitly extends the 1-, 2-, or 3-shell
conclusion to maximal disc subdiagrams joined at vertices or by graph parts:
https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html.
The hypotheses and singular, zero, one-face, spur, and strict-boundary cases
were checked against the current items.

Both repairs preserve stable ids and statements, have `repair_confidence: 1`,
and have guarded published claims and matching repaired handoffs. Defect rows
`hgp-6c-impact6c-vk-boundary-singular-proof` and
`hgp-6c-impact6c-vk-curvature-singular-proof` are closed and uniquely owned by
current-hash `kind: "gate"` verdicts. The empty-receipt diagnostics were a
mechanical missing-review record, so the gate also has a clean
`false_positive` verdict with `defect_ids: []`; no mechanical defect row was
invented. No dependency was added or changed, so the frontier dependency ledger
requires no new row. The published consumer/supplier ledger retains both items
as A-P for their separate Phase-3 self-containment debt: their repaired current
proofs still cite external free-face or shell results instead of proving those
results through an earlier library supplier.

### Cycle-2 validation

After the item and receipt updates, the exact assigned primary command passed
with 12 changed public interfaces, 4,830 affected items, and no receipt error.
Targeted reflow made no further change; precheck passed both repaired items with
zero failures, and rendercheck passed both files. The final Step-6 scope check
reported 25 routed items, one resolved adjudication obligation, and zero
errors. Dependency checking with the protocol's bounded `--pending-audit-ok`
allowance, forward-reference checking, and external-source checking all exited
successfully; extcheck retained only its pre-existing published warnings.
Defect-ledger validation checked the seven run-owned rows with zero errors, and
the cross-group closure check recomputed zero edges, zero forward references,
zero post-6b changes, and zero errors.

## Remaining blockers

There is no blocker in the assigned `impact-audit-6c` repair or in the computed
cross-group obligations. The two pre-existing Van Kampen Phase-3
self-containment debts remain recorded in the published consumer/supplier
ledger; they do not invalidate the cycle-2 changed-interface dispositions or
assert whole-closure certification. The shell URL-sweep limitation described
above is unchanged and was not a primary gate in this dispatch.
