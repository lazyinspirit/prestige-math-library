# frontier-19 reader-7 report

## Confirmed defects

1. Fatal — `items/thm-bernstein-sets-exist-under-a-well-ordering-of-r.md:52`
   The original proof claimed that every initial segment of a well-order has
   strictly smaller cardinality than the whole ordered set. That is false in
   general, so the stage-by-stage freshness argument for the Bernstein
   construction was unlicensed. I repaired the item by re-indexing the demands
   through a cardinal-sized bijection `\kappa -> \mathcal P_{\mathrm{perf}}\times
   2`, then choosing one fresh point per demand by transfinite recursion; this
   keeps the statement and title correct.

2. Nonfatal — `items/lem-finite-binary-digit-changes-do-not-alter-zero-one-measure.md:57`
   The original compactness step took the minimum radius from a finite open cover
   and concluded that every short dyadic interval meeting `K` stayed inside one
   cover member. That containment is false without a Lebesgue-number style
   shrinking argument. I repaired the proof by covering `K` with half-radius
   subintervals and then estimating distances from a point `z \in D \cap K` to
   the chosen center.

3. Nonfatal — `items/cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable.md:24`
   The original proof cited the previous continuous-image corollary for a much
   stronger witness than its Statement provides: it reused a specific
   Cantor-homeomorphism witness even though the cited corollary is only
   existential. I repaired the proof by rebuilding the witness directly from the
   A-page compact set `K=\psi[C]`, the positive-outer-measure corollary, and
   completeness.

4. Nonfatal — `items/cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel.md:43`
   The original contradiction step moved from “`N` is Borel in the subspace
   `K`” to “`N` is Borel in `\mathbb R`” without justifying that passage. I
   repaired the argument by applying the trace theorem correctly: `N=K\cap B`
   for some ambient Borel set `B`, and `K` is already measurable, so `N` would
   be measurable, contradicting the chosen witness.

## Edits

- `items/thm-bernstein-sets-exist-under-a-well-ordering-of-r.md`
  Replaced the false initial-segment-cardinality argument with a cardinal-sized
  demand enumeration and a valid transfinite-recursion proof.
- `items/lem-finite-binary-digit-changes-do-not-alter-zero-one-measure.md`
  Repaired the compactness/Lebesgue-number step controlling the dyadic cover.
- `items/cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable.md`
  Rewrote the proof to use direct A-page witnesses instead of an over-strong
  existential citation.
- `items/cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel.md`
  Repaired the subspace-Borel trace step so the contradiction uses measurable
  closure under intersection instead of an unjustified ambient-Borel claim.
- `research/frontier-19-batch-7.proof-contracts.json`
  Regenerated the four touched contract entries and updated the affected
  boundary rows to match the repaired proofs.

## Coverage

- Opened 70 item files: 32 assigned batch items and 38 cited dependency items
  outside the batch.
- Opened 2 assigned page files.
- Opened the batch manifest, notes file, and batch proof-contract file.
- Blocker: none.
- Checks run:
  `node tools/tsx-run.mjs tools/reflow.mts items/thm-bernstein-sets-exist-under-a-well-ordering-of-r.md`
  returned `unchanged`.
  `node tools/tsx-run.mjs tools/precheck.mts items/thm-bernstein-sets-exist-under-a-well-ordering-of-r.md`
  returned `PASS`.
  `node tools/tsx-run.mjs tools/reflow.mts items/lem-finite-binary-digit-changes-do-not-alter-zero-one-measure.md`
  returned `unchanged`.
  `node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-binary-digit-changes-do-not-alter-zero-one-measure.md`
  returned `PASS`.
  `node tools/tsx-run.mjs tools/precheck.mts items/cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable.md`
  returned `PASS`.
  `node tools/tsx-run.mjs tools/precheck.mts items/cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel.md`
  returned `PASS`.
  `node tools/proof-contract.mjs research/frontier-19-batch-7.proof-contracts.json --strict`
  returned `0 error(s), 0 warning(s), 28/28 item(s) checked`.

## Page verdicts

- `non-measurable-sets-and-the-cost-of-choice`: pass after the four item-proof
  repairs above; no A-page prose edit was needed.
- `non-measurable-sets-and-the-cost-of-choice-examples`: pass; no B-page prose
  edit was needed.

No published-dependency defects, proposed withdrawals, or authority blockers
remain for this batch.
