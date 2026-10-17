# Batch 80 authoring notes — interacting particle mean field and vortex blob error

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `80` · role: beta  
Pair: `interacting-particle-mean-field-and-vortex-blob-error`

## Controlling design and conflict check

- Read the repository instructions and schema/workflow documents, the owner authoring direction, assigned task, complete XD-08 design at `research/plan-numerical-spatial-track.md` L738–771, `plan-spec.json`, and the run batch dependency input.
- The owner direction controls older task/design wording. XD-08 and `plan-spec.json` agree on page identities, A/B order 2444/2445, six required pages, and scope. No design conflict was found.
- The plan inventory is intentionally empty. The batch manifest now records the item inventory from the finished carriers. A local signed-characteristic-solution definition was added on A because the signed flow theorem needed a precise label-space solution class.
- **Process deviation:** carrier authoring started before the batch-80 manifest inventory had been written, contrary to the dispatch ordering rule. After detecting this, the manifest was rebuilt from the carriers, dependency levels were recomputed over the run graph, and both page item lists were reordered. This note records the deviation; the initial order was not compliant.
- No published item, foreign pair, shared plan, autopilot state, or verdict was edited.

## Inventory and dependency levels

The pair has 28 A items and 5 B examples, below the 100-item page cap. The complete inventory, explicit `deps`, levels, and provenance are in `research/numerical-optimization-dynamics-2026-10-16-batch-80.pages.json`; all 33 item files and both page frontmatters match it.

| Item level | Items |
|---:|---|
| 0 | `def-bounded-lipschitz-dual-norm-for-signed-measures`, `def-globally-lipschitz-mean-field-kernel`, `def-mollified-biot-savart-vortex-kernel`, `def-p-one-wasserstein-one`, `def-signed-split-transport-cost`, `lem-weighted-continuous-path-space-is-complete`, `ex-softened-newtonian-particles-not-collision-model` |
| 1 | `alg-tensor-simpson-force-evaluator`, `def-characteristic-mean-field-solution`, `def-mean-field-and-weighted-vortex-particle-systems`, `def-signed-vorticity-characteristic-solution`, `lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz`, `lem-signed-bl-norm-dominated-by-split-coupling-cost`, `lem-w1-is-finite-on-probability-measures-with-finite-first-moment`, `ex-dimension-dependent-empirical-w1-error`, `ex-mixed-sign-vorticity-needs-signed-distance` |
| 2 | `def-separable-regularized-vortex-interaction-hamiltonian`, `thm-dobrushin-w1-stability-for-characteristic-flows`, `thm-empirical-measures-solve-mean-field-equation-exactly`, `thm-mean-field-characteristic-flow-exists-uniquely`, `thm-mean-field-characteristics-satisfy-weak-transport-identity`, `thm-mollified-biot-savart-kernel-has-l1-consistency`, `thm-signed-dobrushin-stability-with-force-defect`, `thm-signed-regularized-vorticity-characteristics-preserve-total-variation`, `thm-w1-dobrushin-stability-with-force-defect`, `thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity` |
| 3 | `lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube`, `thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two`, `thm-tensor-simpson-force-error`, `ex-globally-lipschitz-alignment-model` |
| 4 | `thm-rk4-global-error-for-regularized-vortex-particles` |
| 5 | `thm-mean-field-vortex-blob-error-budget`, `ex-same-sign-smooth-vortex-blob-approximation` |

The assigned closure has 48 in-run items, no cycles, no missing dependency files, and no assigned level mismatch. Batch scheduling input assigns batch 80 level 4; the maximum *item* level is 5 because the level-3 RK4 stability lemma feeds a level-4 global RK4 error theorem, which feeds the two level-5 error budgets. Item labels follow the required item-level formula; the shared scheduling input was left untouched. See `research/numerical-optimization-dynamics-2026-10-16-batch-80.dependency-level-check.json`.

## Mathematics and interface audit

- Probability `W_1` and signed `d_BL`/`C_±` are separate branches. The probability estimate is proved for each prescribed coupling before taking an infimum; no optimal plan is selected. The signed branch uses sign-matched couplings and states the Jordan/sign-preservation assumptions.
- The new signed characteristic definition makes the Jordan-label probability, signed pushforward, and weighted path-integrability convention explicit. The local mollified Biot–Savart derivative bound and weighted path-space completeness lemma supply missing prerequisites with full arguments.
- The L1 kernel consistency proof uses the radial zero first moment, near-field integrability, and a second-order tail expansion. The tensor Simpson bound is derived coordinate by coordinate. RK4 is conditional on the stated smooth compact tube and stage admissibility. No uniform `ε→0` limit is claimed.
- The canonical Hamiltonian/leapfrog theorem is explicitly a second-order comparison model, separate from the first-order Biot–Savart vortex ODE. Reversibility, symplecticity, volume preservation, and order-two error have separate proof steps and hypotheses.
- The final blob theorem assumes a smooth finite-time signed Euler density, matching Jordan masses, a common bounded quadrature correction, sign preservation, and a controlled RK4 tube. The probability example is a separate same-sign branch without AC.

Six required page interfaces were checked against current supplier bodies and proofs: the published Picard–Lindelöf page and run batches 7, 20, 28, 35, and 54. Six page rows and 16 direct/transitive item excerpts are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-80.cross-batch-dependencies.json`. The “verified” status means exact interface inspection only; it is not independent acceptance. In particular, batch-20 owner-authoring readiness is not treated as review approval. No supplier item or hypothesis is unresolved for this pair.

## Source coverage and retrieval history

The full-text coverage is in `research/numerical-optimization-dynamics-2026-10-16-batch-80.coverage.json` and `...batch-80.source-coverage.json`. The A page harvests nine independent treatments, including full lecture notes and a textbook; the B page harvests three sources. There are 30 named results with explicit dispositions. Mayer’s handout states a Dobrushin estimate only for its narrower skew-symmetric/bounded-derivative setting and gives no proof; the local proof establishes the broader stated interface. All 12 source entries (9 A-page and 3 B-page) passed `source-fetch-check --stamp`; no active source was dropped.

Earlier candidate triage found a Krasny notes URL returning 404, a MathNet Dobrushin preview timing out, and a Beale–Majda AMS PDF returning 403. The selected full-text alternatives are Liu–Xin, Baker–Pham, Golse, and Mayer, with complete local arguments for the assigned claims. A Hairer ODE PDF timed out in browser retrieval but succeeded by direct curl and is not relied on; the selected Hairer geometric-integration notes were inspected and fetch-verified. The earlier candidate URLs and exact attempt timestamps were not retained in this batch’s source log, so no `source_resolution` drop records were fabricated for unselected candidates. None of the carriers relies on those candidates.

## Scoped checks and blockers

- `manifest-deps`: 33 items, 0 errors.
- Focused `depcheck`: 0 errors, 0 warnings; dependency/page cycle checks passed.
- Focused `fwdcheck`: 0 errors, 0 warnings; no open or load-bearing forward references.
- Focused `extcheck`: passed; no recorded-not-proved or external fallback in scope.
- `precheck`: 33 files, 23 proof-bearing items checked, 0 failures.
- `proof-layout`: 33 files, 64 steps, 0 defects.
- `rendercheck`: 35 changed item/page files, 0 errors.
- `content-policy`: 33 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 30 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 12/12 source entries fetch-verified.
- `proof-contract --strict`: 33/33 items, 64 step derivations, 134 exact supplier excerpts, 0 errors/warnings.
- Batch-scoped `proof-contract-coverage`, run in an isolated temporary root to select only this pair: 33 items checked, 23/23 proof-bearing arguments covered. The full-repository invocation is blocked by an unrelated missing carrier referenced by another run manifest: `lem-ctrl1-control-box-is-weakly-closed`.
- Full-run `item-dependency-levels check` currently reports 8 empty scaffold inventories and two unrelated item-level mismatches (`ex-additive-eigensolve-tolerance-residual-certificate` and `ex-affine-random-diffusion-uniform-coercivity`); it reports no batch-80 item mismatches. The full `batch-dependency-levels check` is blocked by malformed YAML in the unrelated batch-90 carrier `items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md` (duplicate `pipeline_run` key at line 26). Neither foreign issue was edited.
- The run status was read with the autopilot status command at 2026-10-16 04:11 UTC: `1-scaffold` remained active at 81/107 covered, batch 80 was still listed as missing, and no writer was in flight. The global owner repair/recertification blocker remains with the owner. The stage defers artifact completion until authoring coverage is complete and writers drain; no autopilot transition or state file was changed.
- All 33 batch-80 Step 1 records are `ready`, with explicit direct dependency lists and `owner:false`. These are authoring-readiness records, not mathematical approval or independent review.
