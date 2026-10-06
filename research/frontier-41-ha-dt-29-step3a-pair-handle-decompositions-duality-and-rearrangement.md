# Step 3a scope review — Handle Decompositions Duality and Rearrangement

- Run: `frontier-41-ha-dt-29` (role alpha, label
  `step3a-pair-handle-decompositions-duality-and-rearrangement-ac05e256cec97210`; batch 1
  owns only this pair)
- A page: `handle-decompositions-duality-and-rearrangement` (order 527, differential-topology)
- B page: `handle-decompositions-duality-and-rearrangement-examples` (order 528)
- Scope decision for the A page: **sufficient**
- This report judges scope only — whether the planned definitions, results and examples
  cover the intended subject. It is not item or proof approval, writes no item approval and
  no owner record, and edits no scaffold. The B page is covered by the one A-page decision.

## Pair reviewed

| page | kind | order | items | decision |
| --- | --- | ---: | ---: | --- |
| `handle-decompositions-duality-and-rearrangement` | A | 527 | 29 | **sufficient** |
| `handle-decompositions-duality-and-rearrangement-examples` | B | 528 | 5 | companion, covered by the A decision |

A inventory (29, manifest order):
`def-smooth-cobordism-triad-for-morse-theory`,
`def-morse-function-adapted-to-a-cobordism`,
`lem-boundary-product-function-on-a-collared-cobordism`,
`thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`,
`lem-separating-critical-values-far-from-the-boundary`,
`def-handle-decomposition-relative-to-the-incoming-boundary`,
`lem-standard-handle-admits-an-adapted-morse-function`,
`lem-gluing-handle-morse-models-along-collars`,
`lem-interior-slab-handle-attachment`,
`lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`,
`lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum`,
`lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`,
`thm-morse-functions-and-handle-decompositions-correspond`,
`lem-a-handle-decomposition-gives-a-relative-cw-complex`,
`def-dual-handle-decomposition`,
`thm-handle-duality-from-negating-a-morse-function`,
`lem-product-cobordisms-have-critical-point-free-presentations`,
`lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods`,
`lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`,
`lem-flow-reparametrization-realizes-a-level-isotopy`,
`lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged`,
`lem-gradient-like-perturbation-separates-adjacent-critical-levels`,
`thm-morse-rearrangement-by-index`,
`lem-increasing-reparametrization-of-finitely-many-critical-levels`,
`thm-self-indexing-morse-function-existence`,
`lem-handles-of-equal-index-can-be-attached-on-one-level`,
`prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`,
`prop-dual-elimination-of-top-index-handles`,
`rem-handle-decompositions-are-not-canonical`.

B inventory (5, manifest order):
`ex-relative-handle-decomposition-of-a-cylinder`,
`ex-dual-handle-presentations-of-a-genus-g-surface`,
`ex-reordering-independent-one-handles`,
`cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory`,
`ex-empty-incoming-boundary-requires-zero-handles`.

## Design reconciliation

The controlling prose is `research/plan-differential-topology-track.md`: the DT-6 summary row
(line 35, "compact cobordisms, dual handles, ordering and self-indexing"), the detailed
§DT-6 block (lines 518–557), the exact `requires` row of §12.4 (line 2222), and the §8
per-pair source-matrix row (line 1656).

1. **Inventory.** All 16 designed A items and all 5 designed B items are present in
   `research/frontier-41-ha-dt-29-batch-1.pages.json` under the same ids, in an order that
   follows the design's proof order up to one listing inversion (see Non-blocking
   observations). The 13 remaining A items are declarations of kind `definition`/`lemma`
   added for hard-proof closure; every one of them is consumed inside the pair:
   `lem-boundary-product-function-on-a-collared-cobordism` and
   `lem-separating-critical-values-far-from-the-boundary` by the existence theorem;
   `lem-standard-handle-admits-an-adapted-morse-function` by the gluing lemma and the
   correspondence theorem; `lem-gluing-handle-morse-models-along-collars` and
   `lem-interior-slab-handle-attachment` by the correspondence theorem (the latter also by
   the equal-index lemma); `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy`
   by the CW lemma and B example 3; the two boundary-sum lemmas by the $0$-handle
   elimination proposition; `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods`,
   `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`
   and `lem-flow-reparametrization-realizes-a-level-isotopy` by the separation lemma;
   `lem-gradient-like-perturbation-separates-adjacent-critical-levels` by the rearrangement
   and self-indexing theorems; `lem-increasing-reparametrization-of-finitely-many-critical-levels`
   by self-indexing. None is unused padding.
2. **Design closure conditions.** The §DT-6 "Hard-proof closure" notes are met by named
   items: the converses of the correspondence theorem need the standard-handle model and
   the collar-gluing lemma; rearrangement is routed through the disjointness hypothesis of
   the interchange lemma plus the field-perturbation separation lemma rather than through
   indices alone; the endpoint eliminations carry the nonempty/connected boundary
   hypotheses ($M_0$ connected and nonempty for $0$-handles, $M_1\neq\varnothing$ for the
   dual $n$-handle statement).
3. **Plan conformance.** The manifest `requires` array equals the §12.4 array exactly
   (DT-2, DT-3, DT-5, DG collars/orientations, AT CW), and the B page requires only the A
   page. The batch-1 notes record the two resolved conflicts (descending-field convention;
   Pajitnov locator widened to Ch. 4 §3 where the rearrangement material actually lives);
   the manifest statements and the coverage both reflect those resolutions, not the
   unsharpened design text.
4. **B-page roles.** The five B items match the design's five: the cylinder checks the
   product presentation; the genus-$g$ surface tests dual indices and endpoints; reordering
   disjoint $1$-handles tests the equal-index rearrangement case; the counterexample tests
   the disjointness hypothesis of the interchange lemma (it states the false claim that the
   hypothesis can be dropped *while keeping the same field*, refuted on $S^1$, which is the
   sharpened version recorded in the batch-1 notes); the empty-incoming-boundary example
   blocks misuse of the $0$-handle elimination proposition.
5. **Intended role in the library.** The pair is the sole bridge from the published Morse
   suppliers (orders 519/521/525) to five in-run consumer pages that name specific items of
   this pair in their own manifests: `handle-cancellation-slides-and-elementary-moves` (533,
   11 edges), `morse-inequalities-and-the-handle-chain-complex` (535, 13 edges),
   `smooth-surgery-traces-and-handle-trading` (557, 8 edges),
   `the-smooth-h-cobordism-theorem` (561, 28 edges) and
   `formal-immersions-and-the-smale-hirsch-theorem` (565, 4 edges). Every covered deferral
   in this pair's coverage (normal position, cancellation, creation, handle addition,
   handle chain complex, Morse inequalities, orientation data) names one of the DT-7
   (533), DT-8 (535) or DT-10 (537) pages, all present in this run. Every consumer
   reference to this pair (cited by item id) resolves to a planned item of this pair.

## Source coverage

The batch-1 coverage file (`research/frontier-41-ha-dt-29-batch-1.coverage.json`) records
three independent full treatments with exact locators:

- C. T. C. Wall, *Differential Topology*, §§5.1–5.4, printed pp. 129–148, read in full.
- John Milnor, *Lectures on the h-Cobordism Theorem*, §§2–4, printed pp. 10–48, §4 read in full.
- Andrei Pajitnov, *Circle-Valued Morse Theory*, Ch. 4 §3, pp. 132–162 and Ch. 5 §§1–3,
  pp. 163–189.

54 harvested headings are disposed 26 `included`, 12 `inline`, 9 `deferred` (each with a
resolving destination page) and 7 `out-of-scope` (each with a specific reason); the
coverage checklist passes with 0 errors and 0 warnings
(`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-1.coverage.json --require-destination`).
Every designed result is anchored to at least one harvested row: existence and
crossing-by-one-critical-point to Wall 5.1.1/5.1.6, the correspondence both ways to Wall
Cor. 5.1.7 and Thm. 5.1.9, the CW pair to Wall 5.3.1 and Pajitnov Ch. 5, duality to Wall
5.3.4, $0$-handle elimination to Wall 5.4.1, self-indexing to Wall's remark/Milnor 4.8/
Pajitnov 3.38, equal-index grouping to Wall 5.2.1, and interchange/separation/rearrangement
to Milnor Thms. 4.1/4.4/4.8, Lemmas 4.6–4.7 and Pajitnov 3.4/3.6/3.34–3.35/3.38. The 13
closure lemmas are not harvested source results but each carries Wall/Milnor/Pajitnov
references in the manifest.

Two form observations, neither a scope defect:

1. The §DT-6 prose "Sources:" line (line 525) names a fourth treatment, N §§2.1–2.2,
   pp. 23–45. The binding §8 per-pair matrix row for DT-6 (line 1656) names only Wall,
   Pajitnov and Milnor, and the coverage records those three. The Nicolaescu range in
   question is §2.1 "Surgery, Handle Attachment, and Cobordisms" (starting printed p. 27)
   and §2.2 "The Topology of Sublevel Sets" (ending p. 45) — the DT-5/DT-6 interface
   already covered in full by Wall §§5.1–5.4 with Milnor and Pajitnov; no designed result
   here is anchored to it alone, so its absence leaves no planned claim unsupported. (TOC
   checked at https://academicweb.nd.edu/~lnicolae/Morse2nd.pdf.)
2. The coverage file harvests only the A page; the five B examples carry item-level
   references to the same three treatments. Other batches in this run sometimes add a
   B-page harvest entry (e.g. batches 5–8, 10) and sometimes not (batch 9), so this is a
   batch-form inconsistency, not a missing source for the B items.

## Prerequisites

Checked against the whole run's manifests (30 batches, 883 in-run items) and the published
`items/` tree:

- The 34 pair items carry 242 `deps` entries with 88 distinct targets: 27 in-run items and
  61 published on-disk items. **None is missing, none is a draft, and none is marked
  `proved_here: false`.** All five `requires` pages are published at earlier orders:
  `cw-complexes-and-cellular-homology` (366.007),
  `manifolds-with-boundary-collars-and-orientations` (467),
  `morse-functions-critical-values-and-genericity` (519),
  `gradient-like-vector-fields-and-morse-trajectories` (521) and
  `sublevel-deformation-and-the-handle-attachment-theorem` (525). Every in-run `deps` edge
  points at an item of the same page or of an earlier page; the only same-page anomaly is
  the listing inversion noted below, whose computed dependency levels are consistent.
- The transitive dependency closure of the pair (958 items) contains **no DT-4 item and
  not** `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces`, the
  published DT-3 item whose asserted-not-proved parametrization is recorded in design
  §12.7(3). This confirms the batch-1 routing decision to build rearrangement on
  Milnor/Pajitnov rather than consume DT-4.
- **No prerequisite is absent from both the published library and the current scaffold**,
  so no scaffold addition is recommended on that ground. The remaining uncertainty about
  this pair is proof-level only (the 34 item contracts are draft statements whose proofs
  are authored at Step 3b and reviewed later), which is outside Step 3a.

### Inherited published-supplier findings (design-deferred, not new; not scope-blocking)

Two published DT-2 items consumed here carry findings recorded in the binding design
§12.7; the pair adds no new defect report of its own, but the owner should keep these in
the published-defect record:

1. `lem-compact-morse-critical-points-have-uniform-hessian-gaps` (consumed by
   `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` and
   `lem-separating-critical-values-far-from-the-boundary`; design §12.7(4), lines 2491–2499).
   The on-disk statement now prints the stronger bounds and the local-persistence clause,
   but proof step 4.1 still passes from uniform invertibility to existence and uniqueness
   of the perturbed zero via "the inverse-function argument persists", and the item's
   `deps` cite only `thm-euclidean-inverse-function-theorem`, not the quantitative
   inverse-function/degree lemma §12.7(4) asks for. I found no row for this item id in
   `research/published-consumer-supplier-ledger.md` (the only defect-ledger hit is an
   unrelated, already-fixed frontier-30 ill-typed-claim row); recommend the owner record
   the §12.7(4) finding in the canonical supplier ledger when the deferred repair is due.
2. `thm-morse-functions-are-dense-by-relative-jet-transversality` (consumed by the same
   existence theorem; design §12.7(5), lines 2500–2513). The current published statement
   already assumes AC and depends on `def-axiom-of-choice` (as does
   `thm-morse-functions-form-a-residual-subset`), and the scaffold's existence theorem
   itself states "Assume the Axiom of Choice"; the ledger already carries rows for this
   item. No further action for this pair beyond the design's deferred propagation.

Neither finding is an unmet prerequisite of this pair: both suppliers are published with
their needed claims, and the pair's own statements carry the hypotheses (AC) under which
their use is sound.

## Non-blocking scaffold observations (no scope change, no edit made)

1. The A manifest lists `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`
   before `lem-separating-critical-values-far-from-the-boundary`, which it depends on. The
   computed dependency levels are consistent (2 vs 0) and Step-3 authoring follows levels,
   and the library tolerates such intra-page listing inversions (51 of them across 37
   published pages), so this is an optional tidy for the author or the splice, not a
   scope defect.
2. The counterexample contract states the refuted claim (dropping the disjointness
   hypothesis while keeping the field) without a "Statement refuted" marker, its title
   stating the true finding; the `strategy` field carries the $S^1$ refutation. This
   matches the design and the batch-1 ready record; noting it only so the Step-3b author
   uses SCHEMA's `## Statement refuted` / `## Counterexample` body split and does not read
   the contract as a positive claim.

## Records reviewed

`research/frontier-41-ha-dt-29-batch-1.pages.json`,
`research/frontier-41-ha-dt-29-batch-1.coverage.json`,
`research/frontier-41-ha-dt-29-batch-1.notes.md`,
`research/frontier-41-ha-dt-29-batch-1.cross-batch-dependencies.json` (empty),
`research/plan-spec.json` (page entries and orders),
`research/plan-differential-topology-track.md` (lines 35, 518–557, 1656, 2222, 2483–2513),
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`,
`research/frontier-41-ha-dt-29-step1-cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory.json`,
the five required published pages under `library/`, the consumer manifests of batches
3, 4, 13, 15 and 17, `research/published-consumer-supplier-ledger.md` (targeted searches),
`items/lem-compact-morse-critical-points-have-uniform-hessian-gaps.md`,
`items/thm-morse-functions-are-dense-by-relative-jet-transversality.md`,
the outputs of `tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`
and `tools/coverage-checklist.mjs ... --require-destination`, and the Nicolaescu TOC at
https://academicweb.nd.edu/~lnicolae/Morse2nd.pdf.

## Decision recording

```
node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29 \
  --page handle-decompositions-duality-and-rearrangement --decision sufficient \
  --reason "Scope sufficient: all 16 design A items and 5 B items of plan-differential-topology-track.md §DT-6 (line 518) are present with their design roles, plus 13 consumed local closure lemmas; requires matches §12.4 (line 2222) and all five prerequisite pages are published earlier; all 88 distinct deps resolve (27 in-run/61 published), none missing, none on DT-4 or the flagged DT-3 global stable/unstable theorem; coverage (Wall §§5.1-5.4, Milnor §§2-4, Pajitnov Ch.4 §3 + Ch.5 §§1-3; 26 included/12 inline/9 deferred/7 out-of-scope) anchors every design result and resolves every deferral; no unmet prerequisite. Non-blocking: one intra-page listing inversion (item 4 before its dep item 5), no B-page harvest row, and the design-deferred DT-2 §12.7(4)-(5) supplier findings noted in the report. Report: research/frontier-41-ha-dt-29-step3a-pair-handle-decompositions-duality-and-rearrangement.md"
```
