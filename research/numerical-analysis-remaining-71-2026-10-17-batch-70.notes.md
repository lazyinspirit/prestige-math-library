# Batch 70 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `semi-lagrangian-characteristic-transport`  
Role: beta; assigned dependency level: 3; prerequisite batch: 63.  
Dispatch scheduling-input SHA-256: `440346ab3c5cc06016bb3d05991ba08441e0b3960a4500fb1a3903e5ffa9e060`.

## Governing instructions and plan comparison

Read `CLAUDE.md`, `README.md`, the schema/workflow instructions, the full assigned task and PE31 design section, `plan-spec.json`, the current owner-authoring direction, batch dependency-level inputs, and relevant batch-63 evidence before editing. The owner direction controls over stale task/design text. Only batch 70 draft items, its A/B pages and batch evidence were edited.

The PE31 design in `research/plan-numerical-spatial-track.md` L1911–1984 and the assigned task agree with `plan-spec.json` on the page IDs, category, order, title, and page-level requirements: `curved-mesh-geometry-and-conservative-mesh-transfer` and `event-location-and-hybrid-trajectory-error`. No item-inventory or page-requirement conflict was found. The design supplies additional declared interfaces for polynomial interpolation, ODE local error, PE17 overlap remapping and T10 event estimates; the batch proves the local Euler, interpolation and transverse-hit estimates instead of attributing them to those interfaces. The page keeps a periodic global-error theorem, an exact conservative-density branch, and only a local transverse first-hit boundary estimate. It makes no nonperiodic global convergence claim. The run-level dependency artifact's input hash differs from the dispatch hash; both values and the untouched shared artifact are recorded below.

## Inventory, direct dependencies and levels

The 12 A items and 4 B examples below are in `numerical-analysis-remaining-71-2026-10-17-batch-70.pages.json`. Labels follow the in-run rule (zero with no in-run supplier; otherwise one plus the maximum in-run supplier level). External published dependencies do not raise the level.

| Level | Item | Direct dependencies |
|---:|---|---|
| 0 | `def-semilagrangian-periodic-grid-and-interpolant` | — |
| 0 | `thm-periodic-c1-velocity-has-global-characteristic-flow` | `def-linear-transport-equation-and-its-characteristic-flow`, `thm-picard-lindelof-local-existence-and-uniqueness`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-mean-value-inequality-for-total-derivatives` |
| 0 | `lem-semilagrangian-transverse-first-hit-error` | `def-hybrid-mode-guard-reset-system`, `lem-hybrid-guard-derivative-along-mode`, `lem-transverse-hybrid-event-time-error`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral` |
| 1 | `alg-semilagrangian-backtracking-on-periodic-grid` | `def-semilagrangian-periodic-grid-and-interpolant`, `thm-periodic-c1-velocity-has-global-characteristic-flow`, `def-linear-transport-equation-and-its-characteristic-flow` |
| 1 | `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` | `def-semilagrangian-periodic-grid-and-interpolant` |
| 1 | `lem-periodic-characteristic-map-is-orientation-preserving` | `thm-periodic-c1-velocity-has-global-characteristic-flow`, `lem-transport-characteristics-depend-c-one-on-initial-position`, `thm-chain-rule-for-total-derivatives`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, `thm-intermediate-value` |
| 2 | `lem-periodic-tensor-interpolation-hessian-error` | `def-semilagrangian-periodic-grid-and-interpolant`, `thm-lagrange-interpolation-remainder`, `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` |
| 2 | `lem-euler-backward-characteristic-foot-error` | `alg-semilagrangian-backtracking-on-periodic-grid`, `thm-periodic-c1-velocity-has-global-characteristic-flow`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral` |
| 2 | `lem-periodic-flow-departure-cells-have-positive-finite-volume` | `lem-periodic-characteristic-map-is-orientation-preserving`, `def-countable-choice`, `thm-borel-sets-are-lebesgue-measurable`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-measure-monotonicity` |
| 3 | `def-characteristic-cell-overlap-remapping` | `def-semilagrangian-periodic-grid-and-interpolant`, `thm-periodic-c1-velocity-has-global-characteristic-flow`, `lem-periodic-characteristic-map-is-orientation-preserving`, `lem-periodic-flow-departure-cells-have-positive-finite-volume`, `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-intersection-volume-conservative-remapping` |
| 3 | `thm-periodic-semilagrangian-global-error-from-local-defects` | `alg-semilagrangian-backtracking-on-periodic-grid`, `def-linear-transport-equation-and-its-characteristic-flow`, `thm-periodic-c1-velocity-has-global-characteristic-flow`, `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting`, `lem-periodic-tensor-interpolation-hessian-error`, `lem-euler-backward-characteristic-foot-error`, `thm-chain-rule-for-total-derivatives` |
| 4 | `thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity` | `def-characteristic-cell-overlap-remapping`, `thm-overlap-remap-l2-projection-conservation-positivity`, `lem-periodic-characteristic-map-is-orientation-preserving`, `def-countable-choice`, `lem-periodic-flow-departure-cells-have-positive-finite-volume` |
| 2 | `ex-semilagrangian-constant-speed-crosses-many-cells` | `alg-semilagrangian-backtracking-on-periodic-grid`, `def-semilagrangian-periodic-grid-and-interpolant`, `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` |
| 2 | `ex-semilagrangian-fixed-grid-time-refinement-keeps-interpolation-error` | `alg-semilagrangian-backtracking-on-periodic-grid`, `def-semilagrangian-periodic-grid-and-interpolant`, `thm-exponential-product-limit` |
| 2 | `ex-semilagrangian-pointwise-interpolation-can-change-grid-mass` | `alg-semilagrangian-backtracking-on-periodic-grid`, `def-semilagrangian-periodic-grid-and-interpolant` |
| 4 | `ex-conservative-overlap-transfer-under-smooth-deforming-flow` | `def-characteristic-cell-overlap-remapping`, `thm-periodic-c1-velocity-has-global-characteristic-flow`, `lem-periodic-characteristic-map-is-orientation-preserving`, `def-countable-choice`, `lem-periodic-flow-departure-cells-have-positive-finite-volume` |

All 16 item frontmatter dependency lists and levels match the manifest. The A page remains below the 100-item cap. The B page holds four worked examples.

## Supplier inspection and axiom scope

The current batch-63 PE17 definition and theorem carriers are present as drafts. Their complete bodies were inspected. The overlap definition gives exact intersection measures and target-cell averages for finite measurable partitions with positive target volume. To meet its domain convention directly, this batch defines the measure using the bounded open fundamental box $\Omega=\prod_j(0,\ell_j)$; half-open cells are used for grid labels and intersected with $\Omega$. The departure-volume lemma proves the resulting sets are measurable and positive finite volume, including the wrapped periodic lift.

The PE17 overlap theorem assumes Countable Choice and finite measurable positive-volume partitions; its current proof proves nonnegativity and total-mass preservation. Its scoped strict proof-contract check passes. The PE17 definition is non-proof-bearing and has no contract entry. Neither PE17 carrier has a Step 1 record in the current workspace, and both remain drafts; batch 70 records interface readiness without claiming supplier acceptance or independent approval. Exact cross-batch evidence is in `numerical-analysis-remaining-71-2026-10-17-batch-70.cross-batch-dependencies.json`.

The Countable Choice branch is declared in the definition, local volume lemma, conservative theorem and example. It supports Borel-to-Lebesgue measurability and the named measure suppliers. The flow theorem's continuation uses only finitely many Picard–Lindelöf continuations; no full Axiom of Choice or Dependent Choice is claimed.

The T10 page is published. Its exact guard-derivative and transverse-event suppliers were inspected; the local item preserves the matched transverse bracket hypotheses and makes no grazing, simultaneous-event, reset-chain or Zeno claim. Because T10 is outside the current run manifests, it has no row in the run cross-batch ledger; the required page edge remains in the A-page frontmatter.

## Literature and source history

`numerical-analysis-remaining-71-2026-10-17-batch-70.source-coverage.json` records two independent full-text treatments, exact locators, supported items, each harvested heading's disposition and fetch stamps. The full 98-page ECMWF lecture-note PDF was inspected, with §§5.1–5.2, 5.5 and 5.7 read in full. The complete Einkemmer–Ostermann article was inspected, including §§2.1, 4 and 7. The scoped fetch check stamped/verified both sources (2/2); there were no recovery retries or dropped sources. `numerical-analysis-remaining-71-2026-10-17-batch-70.source-evidence.json` summarizes the retrieval result.

A temporary-copy coverage checklist run found 0 errors and 2 advisory warnings: the temporary copy had no sibling manifest for its built-in ID cross-check, and 3/8 harvested source headings were marked included (the others are inline or specifically out of scope). Item references were separately checked against the batch manifest with no mismatch. Those dispositions are retained without padding the source harvest.

## Checks and readiness

- Scoped precheck: 13 proof-bearing items pass; 3 definitions/algorithm are not applicable.
- Scoped proof layout: 13 items, 33 steps, 0 defects.
- Scoped rendercheck: 18 files (16 items and 2 pages), 0 errors and 0 warnings.
- Scoped dependency check: 16 items and both pages, 0 errors and 0 warnings.
- Strict batch-70 proof-contract check: 13/13 proof-bearing items, 53 exact supplier citations and 33 mapped steps; 0 errors and 0 warnings.
- Batch-70 item dependency levels all match. The final full run check reports four mismatches in unrelated PE11/Maxwell items: `lem-pe11-continuous-gauge-compact-embedding`, `thm-pe11-edge-maxwell-spectral-approximation`, `ex-pe11-unit-cube-maxwell-mode`, and `ex-pe11-repeated-cube-maxwell-cluster`. No other pair files were changed.
- Full-run proof-contract coverage could not complete because it reports an invalid or duplicate frontier item in unrelated `numerical-analysis-remaining-71-2026-10-17-batch-48.pages.json`; the scoped batch-70 proof contract itself passes and covers all 13 proof-bearing items in this pair.
- The read-only run-wide cross-batch collector could not complete: it first aborts while parsing unrelated item `def-bem-lipschitz-polyhedral-boundary-and-trace-spaces` (unquoted source title, YAML error at frontmatter line 17). The batch-70 cross-batch input itself parses and contains all three current cross-run edges; no global ledger was refreshed.

The dispatch input hash is `440346ab3c5cc06016bb3d05991ba08441e0b3960a4500fb1a3903e5ffa9e060`; the current generated `numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json` input hash observed at final handoff is `4b596ec2dca3df12d5484d595004ec1f082067745dfb38d7b48fb338d3389d76`. Its batch-70 row remains level 3 with prerequisite batch 63. The generated run-level artifact was not changed. All 16 batch-70 items have Step 1 readiness records marked `ready` with direct dependencies/evidence; these records are not independent approval.
