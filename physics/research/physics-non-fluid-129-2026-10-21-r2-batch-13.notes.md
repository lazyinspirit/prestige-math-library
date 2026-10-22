# Batch 13 authoring notes — Classical coherence matrices and measurement scope

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pair: `emx-polarization-coherence` / `emx-polarization-coherence-examples`

## Scope and plan comparison

The run-specific owner authoring-direction file was absent. I read the full assigned design section at `research/plan-classical-electromagnetism-frontier-expansion-track.md` lines 591–620 and the complete matching prose-scaffold and inventory entries. Page IDs, A/B relation, title, `classical-electromagnetism` category, `physics` library, order 723/724, and A-page requirements `em-vacuum-waves-and-polarization` and `emx-paraxial-optics` agree with `research/plan-spec.json`. Its item arrays are empty in this preauthoring state, while the design and assigned dispatch specify the exact three A and two B items below. This is an expected scaffold omission, not a design conflict; the shared plan was left unchanged.

The three A items are `def-emx-coherency-matrix`, `pthm-emx-stokes-positivity`, and `pthm-emx-classical-visibility`. The B items are `ex-emx-unpolarized-nonzero-field` and `cex-emx-zero-intensity-degree`. Both pages and the batch manifest contain that exact inventory. No cross-batch item or page was edited.

The planned construction and scope are preserved. The matrix is a classical uncentered second moment for an explicitly declared ensemble; no zero-mean assumption, quantum density-operator identification, or automatic time-average/ensemble-average equivalence is made. The `S_3` sign is fixed by the stated `e^{-iωt}` phasor and ordered transverse basis. The positivity/Jones result is conditional matrix algebra. Visibility uses the same matrix construction for two beam channels; its cross moment is not the transverse-polarization cross component of one beam. Intensities in that model are mean-square field coordinates, not calibrated irradiances. The phase must range over the full unit circle, and the result is model contrast rather than an empirical finite-sample estimate. The zero-intensity counterexample records that the normalized degree is undefined at `S_0=0`.

## Inventory, dependency graph and levels

The run dependency file assigns batch 13 level 2 and requires batch 10. Item levels were recomputed from the current batch-10 suppliers followed by this batch’s consumers. The graph is acyclic. Direct item dependencies and levels are recorded in the page manifest.

| Item | Home | Relevant in-run supplier | Level |
|---|---|---|---:|
| `def-emx-coherency-matrix` | A | `pthm-emx-paraxial-error` (batch 10, level 2) | 3 |
| `pthm-emx-stokes-positivity` | A | `def-emx-coherency-matrix` | 4 |
| `pthm-emx-classical-visibility` | A | `pthm-emx-stokes-positivity` | 5 |
| `ex-emx-unpolarized-nonzero-field` | B | `pthm-emx-stokes-positivity` | 5 |
| `cex-emx-zero-intensity-degree` | B | `def-emx-coherency-matrix` | 4 |

The A page requires `emx-paraxial-optics`; that is the page edge to batch 10. Its additional requirement `em-vacuum-waves-and-polarization` is outside this run. The only cross-batch item edge is from `def-emx-coherency-matrix` to `pthm-emx-paraxial-error`. `def-emx-angular-spectrum` is a transitive supplier through that theorem and is discussed below, not added as a direct cross-batch row. The exact edge records are in `batch-13.cross-batch-dependencies.json`.

## Prerequisite interface review and current readiness

I inspected the current `def-emx-angular-spectrum` Definition and full Verification, and the complete current `pthm-emx-paraxial-error` Statement and Proof. Both are batch-10 draft carriers with `verification.precheck: pending`, and both now have current closed `ready` records from `loadStep1Record` / `step1Decision`: `def-emx-angular-spectrum` at `2026-10-21T12:21:02.804Z` and `pthm-emx-paraxial-error` at `2026-10-21T12:21:11.113Z`. The transitive `def-emx-transverse-fourier-field` supplier also has a current closed `ready` record at `2026-10-21T11:13:42.905Z`. Draft status and pending independent review are not treated as prerequisite gaps.

The paraxial supplier’s angular-spectrum definition is an ideal scalar L2 Fourier-multiplier model, explicitly not an exact vector Maxwell field. I also inspected the complete current Definition and Verification of its transitive `def-emx-transverse-fourier-field` input: that is a smooth, compactly supported three-dimensional Fourier-packet construction, distinct from the two-dimensional fixed-frequency L2 class here. The paraxial theorem has two distinct proof branches: its longitudinal amplitude statement is per individual exact source-free monochromatic vacuum plane-wave mode and is proved in steps 2.1–2.2 from the real plane-wave encoding and adopted smooth source-free `div E=0`; its separate scalar L2 estimate uses Countable Choice and Plancherel. The coherency definition refers only to the cone, units, and per-mode longitudinal qualification. It does not use the scalar L2 estimate or claim an aggregate longitudinal bound for a random superposition. The current readiness records are hash-current, and the exact supplier interfaces match the stated conditional uses.

I also inspected `post-em-vacuum-maxwell`: the smooth C1 source-free branch adopts `div E=0`; it is a physical postulate, not a derived theorem. `def-em-complex-plane-wave` fixes the real field as `Re(e exp(i(k·x−ωt)))` with `ω>0`. `def-em-polarization-definition` uses that phase convention and defines transversality relative to a mode’s wavevector, which need not be the fixed detector-plane normal. `def-em-si-conventions` supplies the SI quantities and units restated in the local Definition.

The mathematical interfaces were checked in the imported/root statements and proofs for `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-complex-conjugate-real-imaginary-part-and-modulus`, and `def-cm-covariance-matrix-of-a-random-vector`. The coherency proof uses the probability and square-integrability framework, componentwise complex expectation, and linearity. It defines an uncentered moment and does not rename it as the imported centered covariance. Imported mathematics and root originals were left unchanged.

All five assigned proofs and conditional arguments are complete. Every direct prerequisite exists, and the final current supplier readiness records are closed `ready`; after rechecking the actual interfaces, the assigned items are recorded `ready`. These records document authoring readiness, not independent proof approval. No supplier was omitted and no dependent authoring was delayed.

## Source reading and harvesting

The complete full-text PDFs were fetched and inspected. Three active sources have current body-fetch stamps in the coverage record: Gil (85 pages, fetch verified at `2026-10-21T12:31:34.644Z`), Oxford Optics Lectures (30 pages, `2026-10-21T12:31:37.085Z`), and Hemmerich Part III (29 pages, `2026-10-21T12:31:43.193Z`). Coverage records exact locators, harvested headings, item destinations, support, and dispositions for every harvested result.

- José J. Gil, *Polarimetric Characterization of Light and Media*, author-revised 2020 full text: <https://arxiv.org/pdf/2002.04105>, §§2.1–2.6, PDF pp. 6–11. It treats coherency matrices, Stokes coordinates, the positivity/purity cone, degree of polarization, and mixed-state decompositions. The source defines its matrix by time averages and discusses the stationary/ergodic route to ensemble averaging and a zero-mean analytic-signal setup. The local definition states an ensemble model directly, proves entry well-definedness from square-integrability, and adds none of those assumptions silently.
- University of Oxford, *Optics Lectures* (2012), complete author-hosted lecture notes: <https://users.physics.ox.ac.uk/~Foot/C2/pdf/optics-lectures-2012.pdf>, §§3.2–3.3, PDF pp. 9–10. These sections derive the two-field cross term under slow-detector time averaging and give the full phase-extremized visibility formula. The authored result changes the averaging primitive to a declared ensemble expectation and does not identify them.
- A. Hemmerich, *Lectures on Classical Optics*, Part III (2023), complete lecture notes: <https://www.physik.uni-hamburg.de/en/iqp/hemmerich/teaching-hemmerich/pdfs/opticspart3.pdf>, “The concept of coherence” and “Interference visibility,” PDF pp. 2–4. It presents the pair-correlation mean-intensity formula, visibility, equal-intensity case, and a long-time averaging context. The local proof handles unequal intensities under its stated ensemble model.

An exploratory header request for a YSU-hosted Saleh–Teich full-text candidate failed with TLS error `EE certificate key too weak`; its exact URL was not retained in the existing dispatch evidence. It was not an active assigned source and is not represented as read or fetch-verified. The alternative searches and resolution are preserved under `retrieval_history`; the three listed texts provide the required independent treatments, so no source was dropped and no proof coverage was waived. `source_resolution` is empty because none of the active bibliography sources was dropped.

## Scoped checks

- Final `author-check.mts` passed all five prechecks, rendercheck for five items and both pages, content policy with zero warnings/errors, and strict proof-contract validation for 5/5 items with zero warnings/errors. The record is `research/physics-non-fluid-129-2026-10-21-r2-author-check-13.json`.
- Explicit `proof-layout.mjs` over all five changed item files: 13 numbered steps, zero defects.
- Scoped `depcheck` passed all five items and their prerequisite-cycle context (1,796 items and 363 pages, zero errors).
- `coverage-checklist --require-destination`: one A page, 12 harvested results, zero errors and warnings. `source-fetch-check` confirms all three active full texts are fetch-verified, with zero documented drops.
- Scoped item-level dependency calculation across batches 9, 10, and 13 passed with no graph errors. Levels are 3, 4, 5, 5, and 4 as listed above.
- The run-wide `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` reports “Stale batch dependency levels”; the shared schedule was left unchanged. Run-wide `item-dependency-levels.mjs check` reports empty inventories in unrelated batches and three unrelated metadata mismatches: `def-gr-fx-nondegenerate-local-energy-estimate`, `lem-nrqmx-finite-symplectic-implementers`, and `lem-qsmx-local-expectation-locality`. It reports no batch-13 mismatch. These run-wide findings are left to the owner.

An initial author-check flagged phase numbering and multiline display formatting; all five item proofs were normalized and the math displays made renderer-compatible before the final passing checks above.

## Step 1 readiness records

The five non-owner `ready` records were written after the current batch-10 `ready` records and exact supplier interfaces were rechecked. Their UTC timestamps are: `def-emx-coherency-matrix` 12:39:38.203Z, `pthm-emx-stokes-positivity` 12:39:50.286Z, `pthm-emx-classical-visibility` 12:46:08.178Z, `ex-emx-unpolarized-nonzero-field` 12:40:10.468Z, and `cex-emx-zero-intensity-degree` 12:40:19.616Z. Each row contains its exact direct dependency IDs and authoring evidence. Every local consuming argument is complete and conditional on the inspected supplier statements. A final `step1Decision` audit found all five local records closed and current. These records document authoring readiness only and do not constitute independent proof approval.
