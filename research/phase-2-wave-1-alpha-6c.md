# Phase 2 wave 1 — Step 6c cross-batch audit

Dispatch: `6c-lead`. Scope: all obligations computed in
`research/phase-2-wave-1-cross-group-edges.json`.

## Computed scope and disposition

The initial dispatched queue had one cross-batch item edge and no forward
references or post-6b changes. The subsequent owner-authorized U-C19 supplier
interface audit added two current-hash accepted item-carrier enrichments:
SC-6 now explicitly supplies the original linear-word subsegment, and the
periodic-shell consumer has an exact quotation refresh. Their evidence is
recorded in the 6c verdict ledger; neither original theorem was false. The edge is
`lem-measurable-density-chart-integrals-agree-on-overlaps` (batch 11, group c)
to
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
(batch 10, group c). It is **accurate**. The evidence-bearing current-hash row
is appended to `research/phase-2-wave-1-6c-verdicts.jsonl` with
`defect_ids: []`.

No item, page, contract, manifest, provenance, verification record, or
frontier-dependency input needed an edit for this computed obligation. There
is no 6c defect row for the edge.

## Current mathematical evidence

The supplier states the exact interface consumed: under
`AC_omega`, for `m >= 1`, open `U,V` in Euclidean `m`-space, a `C1`
diffeomorphism `T:U -> V`, and nonnegative Borel
`h:V -> [0,infinity]`, it proves
`integral_V h = integral_U (h composed with T)|det DT|`, allowing infinite
integrals and fixing `0*infinity=0`. Its current proof does not consume the
previously rejected measurable-C1 intermediary:

1. Step 1.1 proves the continuous compact-support Riemann/Lebesgue bridge by
   Darboux squeezing, exact box measure, and null grid faces.
2. Steps 1.2 and 2.2 define the Borel measures
   `mu(A)=lambda(T(A))` and `nu(A)=integral_A |det DT|`, prove compact
   finiteness and hence Radon regularity, and establish their integration
   identities by explicit increasing dyadic simple approximations.
3. Steps 2.1 and 3.1 use the compact-support Riemann substitution theorem to
   identify all `C_c(U)` integrals and then use Radon-measure uniqueness.
4. Step 4.1 applies the resulting measure identity to `h composed with T`.
   No subtraction of infinite quantities occurs, and the empty-domain case is
   explicit.

The consumer supplies every hypothesis at the cited use. For positive
dimension it sets
`W=x(U intersect V intersect Int M)` and
`Z=y(U intersect V intersect Int M)`. Boundary invariance makes these open
Euclidean sets and makes `T=y composed with x inverse:W -> Z` a smooth
diffeomorphism. The function
`h=indicator_{y(E intersect Int M)} r_y` is nonnegative Borel. The defining
density law has precisely the required direction,
`r_x(u)=r_y(Tu)|det DT(u)|`, so the indicator-weighted integrands agree
pointwise. The coordinate boundary pieces lie in a null hyperplane and their
integrals vanish even when a density coefficient is infinite. Empty sets and
zero-dimensional singleton charts are handled separately. The claim is an
equality, not an iff, and makes no completed-measurable assertion.

The batch-11 proof contract's F2 row quotes the current supplier Statement
exactly and maps it to consumer step 2.1. Both contracts' derivations,
boundary records, and completed critical-risk reviews match the current
items.

## Source and prior-review checks

- Hunter, *Notes on Partial Differential Equations*, section 1.11, Theorem
  1.44, states the same absolute-Jacobian change-of-variables formula for a
  C1 diffeomorphism onto its image and a nonnegative Lebesgue-measurable
  function: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf.
- Lee, *Introduction to Smooth Manifolds*, Theorem 2.18 verifies that a
  diffeomorphism preserves boundary and interior, while Propositions
  16.35-16.36 give the absolute-determinant transformation underlying density
  coordinates: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf.
- `research/phase-2-wave-1-reader-findings-10.json` and
  `research/phase-2-wave-1-reader-findings-11.json` have empty findings. The
  batch-11 reader report expressly opened the complete current batch-10
  supplier and checked this interface.
- `research/phase-2-wave-1-refute-11.json` has no flags. The sole batch-10
  refuter flag concerns a different Cauchy-Kovalevskaya example and does not
  touch either endpoint or this dependency.
- The prior group-c retry in
  `research/phase-2-wave-1-alpha-c-recheck.md` identified a genuinely
  inadequate intermediary and replaced it with the current local
  Darboux/Radon route. The current files were reread; the retry report was not
  treated as a verdict.
- The detector currently derives exactly this one edge and initially reports
  only `edge-unverdicted`; it finds no forward reference or post-6b structural
  change. Raw item hashes are
  `f503629d79bd28a0dffdabd9de99bbe5c9931be64db9487d951bb4f7cc36962e`
  (consumer) and
  `9d8a00f44dd57e164ca370684e1c4b96deec925e370c5e064d70f9a6283c5843`
  (supplier). Composite carrier hashes are
  `26ccab7edd93b58cbd394af09f0d82edbd26ab4c03a9fdac12374dd964583a00`
  and
  `a7ec05ed8eefa16468c75ea9c597c1a5dd044555beac03c66ac0890e7a7cbe45`,
  respectively, matching the post-6b snapshots.
- The consumer-owned item row and its corresponding page row in
  `research/phase-2-wave-1-batch-11.cross-batch-dependencies.json` are already
  `verified` with current proof-step evidence. The unified frontier ledger
  carries both declarations; this record remains separate from the 6c edge
  verdict.

## Validation, edits, and remaining blocker

The following checks passed on the current tree:

- frontier-dependency refresh and deduplication;
- `cross-group-edges.mjs check`, both with and without `--reconcile-plan`;
- final Step-6 routing: 402 items, 14 adjudication obligations, zero errors;
- defect-ledger and plan validation;
- focused precheck of both edge endpoints: two checked, zero failures;
- strict contracts and required risk reviews for batches 10 and 11;
- destination coverage for batches 10 and 11;
- all-batch audit manifest: 1,631 relationships over 402 items, zero defects;
- dependency resolution and whitespace/JSON checks.

The broader `impact-audit-6c` closure gate did not pass. It found two changed
published interfaces,
`cor-continuous-extension-from-a-dense-subset-r` and
`thm-isolated-primary-components-are-unique`, with seven required downstream
consumer reviews. No receipt existed, so the gate wrote the pending template
`research/phase-2-wave-1-impact-6c.json`. Its seven live consumers are:

- `cex-evt-fails-on-the-open-interval-and-on-the-half-line`;
- `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`;
- `def-uniform-continuity-real`;
- `ex-embedded-component-varies-but-radical-does-not`;
- `ex-primary-localisation-kills-a-component`;
- `fs-evt-holds-on-every-bounded-domain`;
- `thm-compactness-is-necessary-for-evt-and-uniform-continuity`.

Those ids are not part of this dispatch's computed edge queue. Filling their
dispositions would pre-empt the named gate-repair scope that the workflow
creates after this failure, so no consumer was edited or adjudicated here.
This missing impact receipt is the remaining Step-6 closure blocker; the
computed cross-batch edge itself is closed and current.

The required append-only verdict and this report were written. The frontier
merge, all-batch audit manifest, and pending impact template were regenerated
by their closure checks. No mathematical or structural carrier changed.

## Repair cycle 4 — primary `impact-audit`

The live task was
`research/phase-2-wave-1-6c-cross-impact-audit-repair-4.task.md`. Its sole
primary failure was the incomplete receipt
`research/phase-2-wave-1-impact.json`: the reviewer was blank and all 1,391
required dispositions were still pending. The separately reported
`impact-audit-6c` failure was advisory for this dispatch and remains untouched.

I reran the exact primary command from the current stage driver before making
any change. It derived 451 changed public interfaces and 1,391 affected items,
then reproduced one missing-reviewer error and the pending-status/nonempty-note
errors for every live id. The receipt's `changed_interfaces` and
`required_review` arrays matched that fresh detector output exactly.

### Evidence and dispositions

The pre-author and post-6b touch snapshots partition the complete live queue as
follows:

- 342 consumers were absent at pre-author and authored in the run by post-6b;
- 23 pre-existing consumers changed both mathematical carrier and public
  surface during the same window;
- 1,026 pre-existing consumers have exactly the same full mathematical hash at
  pre-author and post-6b;
- no live consumer fell into an unclassified, removed, or proof-only-change
  case.

The 365 same-window authored or changed consumers are recorded as `repaired`.
Each note identifies its current changed-source cone and direct citation
channels; run items additionally identify the owning batch/group, page, frozen
reader/refuter hashes, post-6b mathematical hash, and any matching 6b decision.
The 1,026 byte-stable mathematical carriers are recorded as `still-licensed`;
each note gives its unchanged hash, exact source cone, direct-versus-transitive
impact, and the compatibility conclusion checked against the current supplier
interfaces. All clean outcomes are receipt dispositions rather than defect
rows.

I rehashed all 15 frozen reader findings and all 15 frozen refuter reports
against their `research/phase-2-wave-1-step6-scope-*.json` records: all 30
hashes match. The scopes contain the current 402 run items. The seven group 6b
decision files contain no unresolved escalation. The current published
supplier changes were read as interface repairs: they add or correct explicit
typing, choice, empty/zero/endpoint cases, machine-resource conventions,
finite-tail measure arguments, or complete proof/reduction details without
removing the conclusions used by stable consumers. Prior retry reports were
used only to locate this evidence, not as verdicts.

No mathematical item, page manifest, proof contract, dependency declaration,
or frontier consumer-batch input changed in this repair. The unified frontier
dependency ledger was refreshed and deduplicated from its current inputs; no
new row was required. Because the failure was purely a missing receipt and no
new mathematical defect was found, no `6c-cross` defect row exists to own a
repair/strike/drop verdict. I appended the schema-authorized clean
`kind:"gate"`, `verdict:"false_positive"` outcome for `impact-audit`, with
`defect_ids: []` and the current composite carrier hash of
`cex-a-boundary-spur-when-free-reduction-is-omitted`. Here `false_positive`
means false as a mathematical-defect finding: the reproduced missing-receipt
diagnostic itself was mechanically accurate. No item/page verdict was added,
because no item or page changed.

### Current validation

After writing the receipt, the exact primary command passes with:

`impact-audit: 451 changed public interface(s), 1391 affected item(s)`

and no receipt errors. The focused consistency checks also pass:

- strict proof contracts: 402/402 items, zero errors and zero warnings;
- required risk reviews: exit zero for all 402 run items;
- cross-group reconciliation: one edge, zero forward references, two post-6b
  changes, zero errors;
- defect ledger: 46 rows, zero errors;
- dependency resolution: exit zero (473 inherited advisory warnings);
- forward-reference validation: exit zero.

The primary `impact-audit` blocker for repair cycle 4 is closed. Root separately
completed `research/phase-2-wave-1-impact-6c.json` after reading all 13 affected
items and the changed supplier interfaces. Its exact eight-interface scope and
13 dispositions pass the current-workspace impact check. These are bounded
interface reviews, not whole-closure certification. One unrelated published
Remark error and two orientation-qualification follow-ups are recorded in
`published-consumer-supplier-ledger.md`; no new Phase-2 prerequisite is needed.

At 15:40 UTC the recovery worker exited successfully and the engine began its
42-gate 6c closure battery. A separate live sweep checked all 55 active coverage
URLs: 55 live, zero failed or suspect. No runtime state or stage pass was edited.
