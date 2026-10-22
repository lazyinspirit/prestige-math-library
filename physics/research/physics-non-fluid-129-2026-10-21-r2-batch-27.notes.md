# Batch 27 notes — Reduced stationary uniqueness and explicit research boundaries

## Plan and design reconciliation

The dispatch, `research/plan-spec.json`, and the complete `emg-fx12` design section agree on the A/B page IDs, titles, order 751/752, category, mathematics library, and declared page prerequisites `emg-fx03`, `emg-fx09`, and `emg-mg02`. The detailed prose scaffold agrees on the three planned A interfaces and the diagonal B example. No plan/design conflict was found. The current owner-authoring-direction file is absent.

The local definition `def-emg-fx-stationary-axisymmetric-setup` was added on the A page to define the Killing, periodic-action, commutation and circularity terms used by the research-boundary remark. It asserts no symmetry existence, symmetry inheritance, circularity theorem, global quotient or spacetime solution. This is a local prerequisite definition, not a change to the planned theorem scope.

## Inventory, direct dependencies and levels

The four A items and one B example are below the page cap. Levels were recomputed against all current run manifests; only suppliers within this run affect item levels. The assigned item graph is acyclic.

| Item | Direct dependencies | Level |
|---|---|---:|
| `def-emg-fx-matrix-harmonic-problem` | `def-matrix-space`; `def-matrix-product-and-identity-matrix`; `def-invertible-matrix-and-general-linear-group`; `def-determinant-of-a-square-matrix`; `cor-square-matrix-invertible-iff-determinant-is-a-unit`; `cor-inverse-matrix-by-adjugate`; `def-ck-euclidean-maps-and-diffeomorphisms` | 0 |
| `def-emg-fx-stationary-axisymmetric-setup` | `def-emg-lorentzian-forms`; `def-gr-killing-field`; `def-emg-causal-solution-and-horizon-vocabulary`; `def-emg-local-potentials-and-circle-data`; `def-c-r-and-smooth-maps-between-smooth-manifolds`; `def-lie-derivative-of-a-tensor-field`; `def-directional-and-partial-derivatives` | 0 |
| `lem-emg-fx-mazur-comparison` | `def-emg-fx-matrix-harmonic-problem`; `lem-qsm-matrix-state-calculus`; `thm-determinant-multiplicative`; `thm-am-gm`; `def-matrix-product-and-identity-matrix`; `thm-algebra-of-derivatives`; `def-directional-and-partial-derivatives`; `thm-heine-borel-rn`; `thm-extreme-value-metric` | 1 |
| `ex-emg-fx-diagonal-harmonic-maps` | `def-emg-fx-matrix-harmonic-problem`; `lem-emg-fx-mazur-comparison`; `def-real-exponential-function-and-e`; `cor-exponential-reciprocal-and-positivity`; `thm-ck-euclidean-maps-closed-under-algebra-and-composition`; `thm-exponential-is-strictly-increasing`; `thm-derivative-of-exponential`; `thm-chain-rule-for-total-derivatives` | 2 |
| `rem-emg-fx-stationary-spacetime-obligations` | `def-emg-fx-matrix-harmonic-problem`; `lem-emg-fx-mazur-comparison`; `def-emg-fx-stationary-axisymmetric-setup`; `thm-emg-fx-local-charged-birkhoff`; `lem-emg-sphere-flux-holonomy`; `def-emg-local-potentials-and-circle-data` | 5 |

The run dependency input places batch 27 at level 2 after batches 18 and 24. `emg-fx03` and `emg-fx09` current authored suppliers were checked through their readiness records and actual statements/proofs. The outside-run `emg-mg02` prerequisite is an existing published mathematics page; its local-potential and sphere-holonomy interfaces were read directly. The remark uses the published `lem-emg-sphere-flux-holonomy` product-circle calculation (its proof steps 1.2 and 4.1), so the A page does not depend on a B-only item.

`loadStep1Record` and `step1Decision` were checked for the in-run prerequisites before readiness was recorded. The relevant batch-18 and batch-24 records are current and ready. This records authoring readiness only; it does not imply independent proof acceptance.

## Source reading and harvest

The A page has three full-text treatments, including an independent textbook and lecture-review treatments. Relevant sections and complete proofs were inspected, not only abstracts or search snippets.

- P. T. Chruściel, J. Lopes Costa and M. Heusler, *Stationary Black Holes: Uniqueness and Beyond*, [complete arXiv PDF](https://arxiv.org/pdf/1205.6112): §§2.1–2.3, 3.2.1–3.3.2, 6.1, 6.4, 7.1 and 8.1, 8.4.1–8.4.2. These cover the matrix identity, distinct stationary and axial reductions, symmetry and circularity hypotheses, and global boundary obligations.
- Markus Heusler, *Black Hole Uniqueness Theorems*, Cambridge Lecture Notes in Physics 6 (1996), [complete digitized book text](https://ru.djvu.online/file/ooXRsSuiVzYAO): Chapter 10, §§10.1–10.3, especially Proposition 10.3, equations (10.10)–(10.18), and the separate axis, horizon and infinity estimates. Its restricted Kerr–Newman result is not imported.
- Pawel O. Mazur, *Black Hole Uniqueness Theorems*, [complete arXiv PDF](https://arxiv.org/pdf/hep-th/0101012): §§II and V. The target-signature warning and global sigma-model identity are context; the bounded Euclidean comparison proof is supplied locally.

The B example is derived directly from the A-page equation; the three black-hole sources are marked out of scope for that example. The coverage file records all 13 harvested results, per-item arguments and dependencies, URLs, locators and dispositions. No result was dropped. Retrieval succeeded on the first attempt for each source. `source-fetch-check --stamp` verified all 3/3 full texts; the final check reused all stamps (0 newly stamped, 0 failures).

## Proof route and scope

The positive-matrix lemma differentiates the relative matrix, proves the trace-Laplacian identity by entrywise product rules and cyclic trace, derives nonnegativity using positive square roots and AM–GM with the determinant-one condition, and supplies the bounded-domain maximum argument directly. Its exact n=2 constant-matrix finite check is recorded in the proof contract; the proof remains for arbitrary finite n and the stated smooth domain.

The diagonal example computes the current entrywise and proves the scalar harmonic equivalence. It invokes the comparison lemma only for identical full boundary data. The geometry definition records supplied local data and the precise domain for circularity. The A-page remark distinguishes this Euclidean boundary theorem from any spacetime uniqueness theorem, records the exact local spherical theorem hypotheses and flat-holonomy interface, and lists the additional global symmetry, positivity, quotient, axis/horizon, asymptotic and boundary-control obligations. It asserts no stationary electrovacuum uniqueness, stability, cosmic-censorship or broad current-status result. This batch is mathematical; it introduces no measurement, adopted physical postulate or empirical inference.

## Cross-batch dependency evidence

`physics-non-fluid-129-2026-10-21-r2-batch-27.cross-batch-dependencies.json` contains six `verified` rows: the A page's declared dependencies on `emg-fx03`, `emg-fx09` and `emg-mg02`, plus item dependencies on `def-emg-local-potentials-and-circle-data`, `thm-emg-fx-local-charged-birkhoff` and `lem-emg-sphere-flux-holonomy`. Each row records the scoped interface check. `verified` does not certify independent proof approval. No unresolved edge or removed edge remains.

## Scoped checks, readiness and remaining shared-input issue

- `proof-layout.mjs`: 5 items, 9 steps, 0 defects.
- Strict `proof-contract.mjs`: all 5 items checked, 0 errors and 0 warnings; exact supplier excerpts, mapped proof steps, boundary cases and the applicable finite check are recorded.
- `rendercheck.mjs`: 7 item/page files checked, 0 errors and 0 warnings.
- `content-policy.mjs`: 5 items, 0 errors and 0 warnings. `manifest-deps.mjs`: 5 items, no missing dependency arrays or errors.
- Focused `depcheck.mjs`: 1,572 dependency-closure items across 512 pages, 0 errors and 0 warnings. The cross-batch B-leaf error found during the first audit was corrected by switching the A remark to the exact published A-item supplier.
- `coverage-checklist.mjs`: 1 A page, 13 harvested results, 0 errors and 0 warnings. `source-fetch-check.mjs --stamp`: 3/3 sources verified and resolved, 0 drops.
- `manifest-integrity.mjs`: 258/258 run page entries present, 0 missing and 0 added.
- Recalculation from the current run manifests matches all five declared item levels in table order (0, 0, 1, 2, 5) and finds no assigned-graph cycle. The run-wide `item-dependency-levels.mjs check` currently reports 82 unrelated empty scaffold inventories and three unrelated level mismatches (`thm-nrqmx-periodic-flux-spectrum`, `pthm-nrqmx-flux-ring-spectrum`, `ex-nrqmx-flux-half-crossing`); it reports no assigned-item errors.
- `batch-dependency-levels.mjs check` reports the shared batch-level input stale and asks for recomputation. The checked input still records batch 27 at level 2 with prerequisites 18 and 24; the scoped item levels above match. The shared batch graph was left unchanged for the owner to recompute after the run manifests settle.
- The mechanical `precheck.mts` emitted two proposed repairs for the lemma and scalar example. They were not adopted: the lemma proposal moves the definition of $\Phi_0^{-1/2}$ to its proposed step 2.1 while already using it in proposed step 1.2. The authored proof defines both roots before its AM–GM use; its proof layout and strict step-input contract pass. No unresolved mathematical prerequisite remains.
- `step1-decisions.mjs record` wrote non-owner `ready` records for all five items in supplier-first order. After the circle-smooth-structure dependency was added, its record was refreshed; current `loadStep1Record`/`step1Decision` checks report all five records closed and current. These are Step 1 authoring-readiness records, not independent approval.
