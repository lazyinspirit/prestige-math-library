# Step 3b — pair `the-whitney-trick-and-surgery-below-the-middle-dimension`

- Run: `frontier-41-ha-dt-29`, batch 14. Dispatch:
  `step3b-pair-the-whitney-trick-and-surgery-below-the-middle-dimension-3781a7850ca8c82a`
  (role `alpha-high`, 2026-10-06). This report supersedes the prior checkpoint and is the
  current canonical authoring record for the pair.
- A page: `the-whitney-trick-and-surgery-below-the-middle-dimension` (28 items, 25 proof-bearing).
  B page: `the-whitney-trick-and-surgery-below-the-middle-dimension-examples` (5 items).
  30 original scaffold IDs plus 3 owner-authorized local A prerequisites
  (`lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected`,
  `lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction`,
  `lem-one-relative-map-cell-kills-its-class-with-the-correct-fundamental-group-action`), 33 total.
- Status: all 33 items fully authored; the 30 original IDs carry current Step-3b review
  decisions; the 3 additions await the engine's auditor-created certification (the designed
  path after this dispatch's successful result). The pair's precheck, rendering, content,
  contract, boundary, citation, dependency-level and manifest gates are green. Run-wide
  gates still fail only on other pairs' subjects, none of them naming a batch-14 item.

## Item decisions (30 receipts)

Recorded with `tools/step3-decisions.mjs record-item --run frontier-41-ha-dt-29` at
confidence 1 with the examined dependency lists; receipts live at
`research/frontier-41-ha-dt-29-step3b-review-<id>.json`.

- `repaired` (23): `cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation`,
  `cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick`,
  `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly`,
  `def-whitney-disk-and-clean-framed-whitney-disk`, `ex-a-local-whitney-move-in-euclidean-space`,
  `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold`,
  `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`,
  `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`,
  `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range`,
  `lem-metastable-embedding-for-maps-from-a-compact-manifold`,
  `lem-opposite-local-signs-give-the-compatible-whitney-circle-framing`,
  `lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range`,
  `lem-relative-hurewicz-and-general-position-produce-surgery-spheres`,
  `lem-stable-normal-data-supplies-framings-below-the-middle-dimension`,
  `lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial`,
  `lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle`,
  `lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball`,
  `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses`,
  `prop-surgery-below-the-middle-dimension-improves-connectivity`,
  `thm-high-dimensional-whitney-trick`,
  `thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range`,
  `thm-whitney-move-removes-a-cancelling-pair-of-intersections`,
  `thm-whitney-trick-in-the-two-dimensional-borderline-case`.
- `accept` (7): `cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move`,
  `def-whitney-circle-for-a-pair-of-intersection-points`, `def-local-whitney-move`,
  `lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points`,
  `lem-rational-homology-four-ball-boundary-has-square-torsion-order`,
  `rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions`,
  `rem-the-smooth-whitney-trick-fails-in-dimension-four`.
- The 3 additions take no review receipt by design; the engine certifies them mechanically
  (`tools/step3-auditor-items.mjs certify --run frontier-41-ha-dt-29`) once this dispatch's
  successful result is recorded. Every one of their transitive inputs is an authored,
  gate-clean item.

## Repairs made in this pass

1. **Contract worksheet** (`research/frontier-41-ha-dt-29-batch-14.proof-contracts.json`):
   87 boundary rows rewritten with item-specific dispositions — the templated `checked`
   rationales repeated across items were replaced by evidence naming each item's actual steps,
   suppliers and case facts; the two `not_applicable` biconditional rows of
   `def-whitney-disk-and-clean-framed-whitney-disk` and of `thm-high-dimensional-whitney-trick`
   became `checked` rows discharging the statement's "exactly when" clauses; eight rows were
   anchored to existing steps. `boundary-audit --fail-on-contradicted --fail-on-template` went
   from exit 1 (9 template clusters, 4 contradicted dispositions) to exit 0. Item text was not
   touched by this repair.
2. **Load-bearing examples-page dependency removed** in
   `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`: the
   dependency on `ex-the-torus-as-a-product-smooth-manifold` (homed only on the published B page
   `smooth-manifolds-and-smooth-maps-examples`, a `depcheck b-leaf-content` error) is replaced
   by the A-page supplier `prop-flat-torus-model-geometry` (home `riemannian-comparison-theorems`),
   which states that `R^n/Z^n` with its quotient charts is a connected boundaryless smooth
   `n`-manifold and that the quotient map is a surjective local isometry. The [F5] fact, the
   contract citation row (with an exact quote from the supplier's Statement) and the manifest
   `deps` were updated together.
3. **Forward dependency removed** in
   `lem-metastable-embedding-for-maps-from-a-compact-manifold`: the dependency on the batch-19
   item `lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold` (homed on the
   later page `isotopy-extension-and-embedding-theory-beyond-whitney`) was a forbidden
   earlier-to-later justification and caused the run-wide `depcheck page-cycle`
   (`isotopy-extension-and-embedding-theory-beyond-whitney -> the-whitney-trick-and-surgery-below-the-middle-dimension
   -> isotopy-extension-and-embedding-theory-beyond-whitney`). The diagonal fact is now proved
   locally in [F6] (in product charts the diagonal is the graph of the identity, embedded of
   codimension `m`; closed because the source manifold is Hausdorff); the page cycle is gone,
   the contract citation row was dropped, and the recomputed `dependency_level` 0 is recorded
   in the item metadata and the manifest.

No other file in the pair changed: no other item, page, coverage, cross-batch-ledger, owner or
engine artifact was written, and no sibling or published content was edited.

## Audit actually performed

- All 33 items were read in full against their manifest statements and their current arguments.
  Verified in detail: the two MV/transfer computations of the branched double cover and the
  boundary square-order computation; the Wirtinger/order-three boundary-cover computation for
  the trefoil; the label lemma's disk/label dictionary and its torus exhibit; the Stiefel
  connectivity induction and the explicit complement-transport ODE (`UP(0)U^T = P_z` verified by
  differentiating both solutions); the owner-adjudicated framing corrections (no preferred
  full-frame class, disk normal rank `m-2` vs circle rank `m-1`, `E` extended first and `H`
  taken as its orthogonal complement, one-summand correction supported off the corners); the
  one-sheet Whitney move with the second sheet fixed; the clean-disk dimension counts
  (`2+a-m = 2-b < 0`); the relative-map-cell quotient with its `pi_1(M)` action, normal closure
  in degree two and image-subgroup cosets in degree one; the stable-normal-data trace extension
  over the finite CW target; and the two trace readings of the homotopy-effect lemma.
- Rechecked the Step-3a findings against current inputs: the false torus counterexample was
  replaced by the correct simply connected-sheet winding-tube witness
  (`cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation`) with labels
  `1, t` and opposite signs; the impossible evenness witness was replaced by the degree-two
  torus witness (`cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move`); the borderline
  theorem handles `r = 1` explicitly (the old "excluded by r+s>=5" sentence is gone); the
  immersed four-ball disk constructs exactly one transverse double point; and the metastable
  embedding lemma's 1-jet genericity gap is addressed inside Steps 2.1-3.1 from the published
  parametric-transversality family.
- Supplier reconciliation: all 31 in-run suppliers used by the 33 items are authored with
  complete bodies (`handle-cancellation-slides-and-elementary-moves`,
  `smooth-surgery-traces-and-handle-trading`, batches 1 and 19 included); no unfinished supplier
  remains for any consuming step in this pair. The removed source13 interfaces
  (`prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class`,
  `lem-attaching-a-single-cell-kills-the-represented-homotopy-class`) are absent from every
  `deps` list and recorded as `removed` in
  `research/frontier-41-ha-dt-29-batch-14.cross-batch-dependencies.json`.
- Choice tracking rechecked: `AC_\omega` is declared in each item that needs it and consumed
  exactly through the recorded suppliers; the choice-free steps are identified item by item.

## Checks actually run (2026-10-06, explicit paths)

| Check | Command | Result |
|---|---|---|
| Precheck | `node tools/tsx-run.mjs tools/precheck.mts <33 item paths>` | 28 checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs <33 items + 2 pages>` | all 35 files clean |
| Proof layout | `node tools/proof-layout.mjs <33 item paths>` | 33 items, 108 steps, 0 defects |
| Content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` (and batch 14 alone) | 909 / 33 scoped items, 0 errors, 0 warnings |
| Strict proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-14.proof-contracts.json --strict` | 33/33 items, 0 errors, 0 warnings |
| Boundary audit | `node tools/boundary-audit.mjs <batch-14 contracts> --fail-on-contradicted --fail-on-template` | exit 0 |
| Citation fidelity | `node tools/citation-fidelity.mjs <batch-14 contracts> --fail-on-missing-quote` | exit 0, no missing or widened quotes |
| Finite smoke / risk report | `node tools/finite-smoke.mjs <contracts>`; `node tools/risk-report.mjs <contracts>` | exit 0; 33 items routed |
| Manifest deps | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` | 909 items, 0 normalized, 0 errors |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-14.coverage.json --require-destination` | 2 pages, 69 harvested, 0 errors |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1 run-wide on 21 rows in other pairs; **0 rows name a batch-14 item** |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (pre-splice; see below) |
| Scoped dependency graph | `node tools/depcheck.mjs --items-file <run items>` | 20 errors (18 `b-leaf-content`, 2 `justification-backward`) in other pairs; **0 rows name a batch-14 item**, page cycle gone |
| Step 3 receipts | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 30 batch-14 originals closed; only the 3 additions await engine certification |

## Escalations, open obligations, published concerns

1. **Engine certification of the 3 additions** (no escalation): after this dispatch's successful
   result is recorded, `tools/step3-auditor-items.mjs certify` supplies their scope and item
   certifications. If that certification defers, the exact remedy is to certify the 3 IDs against
   the covering author result; no self-review is permitted for them.
2. **Serial-reconciler updates** (do not hand-edit): (a) the derived cross-batch ledger row
   `lem-metastable-embedding-for-maps-from-a-compact-manifold -> lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold`
   still reads `verified` and must be re-marked `removed`, matching the dependency repair above;
   (b) the label lemma's replaced supplier edge (`ex-the-torus-as-a-product-smooth-manifold` ->
   `prop-flat-torus-model-geometry`) is recorded in the batch-14 ledger rows only after the
   reconciler pass.
3. **Sibling receipts invalidated by the two supplier clarifications**: the changed bytes of
   `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle` and
   `lem-metastable-embedding-for-maps-from-a-compact-manifold` stale the existing Step-3b
   receipts of their run-wide consumers. Direct consumers whose receipts are affected include
   `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy` (batch 16),
   `def-primary-double-point-obstruction-to-removing-self-intersections` and
   `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`
   (batch 19) and, transitively, the batch-15/16 pairs. The Step-3 pre-gate recertification pass
   owns refreshing those receipts; the mathematical statements and the suppliers' claims they
   cite are unchanged.
4. **Batch-19 consumer contract defects (root-owned, not editable here)**:
   `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`
   carries three `citation-quote-missing` errors in its own contract (L2 ->
   `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses`;
   L3 -> `def-local-whitney-move` and `thm-whitney-move-removes-a-cancelling-pair-of-intersections`).
   Its dependencies on this pair's items are otherwise correct.
5. **Pre-splice plan mismatch for Step 4**: `research/plan-spec.json` still carries page 559/560
   with empty item lists, and the 3 added IDs are absent from the plan; `validate-plan` passes
   because the pages carry no items yet. Step 4 must splice the 33 manifest IDs, including the
   three additions, in the manifest order.
6. **Run-wide red gates outside this pair** (informational; each names other pairs' items):
   `item-dependency-levels` exits 1 on 21 rows; the scoped `depcheck` carries 18 `b-leaf-content`
   and 2 `justification-backward` rows; the merged contract file carries 53 strict-contract errors
   and 5 warnings, plus 66 boundary-audit template clusters and 54 contradicted dispositions.
   None of these names a batch-14 item.
7. **Published concerns carried (pre-existing, no statement change)**: ten published direct
   dependencies of this pair remain `published-unaudited` in `depcheck` repo-wide (833 such rows;
   the ten are the oriented/mod-two intersection-number items
   `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
   `def-mod-two-intersection-number`, `cor-oriented-intersection-reduces-to-mod-two-intersection`,
   `thm-oriented-intersection-number-is-homotopy-invariant`,
   `thm-intersection-number-under-factor-interchange`,
   `cor-negative-expected-dimension-generic-intersections-are-empty`,
   `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`,
   `lem-compact-transverse-complementary-intersections-are-finite`,
   `def-stable-normal-bundle-of-a-compact-smooth-manifold`). Recommended owner action: record the
   completed evidence as audit markers; no claim or proof change is involved, and nothing here
   blocks Step 4.
8. **Non-blocking observation (not repaired)**: the closing accounting sentence of
   `lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points` lists the
   choice-free completeness corollary among the `AC_\omega` uses. The lemma's statement assumes
   `AC_\omega` and the proof is unaffected; the item was deliberately left unedited because a
   byte change would stale the receipts of its many batch-15/16 consumers for a cosmetic fix.

## Constructive-completion record (prior pass; re-verified here)

The preceding owner-authorized completion authored the 30 originals and the 3 local adapters and
was verified in this pass: the narrow Stiefel prerequisite fills the first column on a sphere and
trivializes its complement by the skew projection ODE, with the choice-free continuous
complement-frame construction feeding the frame-fields and stable-bundle lemmas; the framing
items carry the owner-adjudicated admissibility, rank and one-summand-correction corrections; the
local Whitney model uses the two-corner bigon with `g(u) = b(u)(f(u)-epsilon) < f(u)` and moves
only the selected sheet; the relative-map and stable-normal-data items replace the removed
source13 interfaces with local proofs over finite CW targets; and the trefoil and branched-cover
lemmas supply the dimension-four nonsliceness boundary. The B page retains all five witnesses.
This record is provisional pending the independent Steps 5-8 audits; the receipts above are local
author checks, not independent proof audits.
