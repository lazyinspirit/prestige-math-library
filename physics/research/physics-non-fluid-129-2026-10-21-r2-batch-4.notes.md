# Batch 4 notes — Weak fields, boundary power and dissipative uniqueness

## Plan comparison

The current `plan-spec.json` row and the detailed design agree on the A/B page IDs, titles, category, library, companion, A-page prerequisites, and the five originally planned item IDs. The plan-spec `items: []` arrays are the Step 1 authoring inventory, not a competing item list. The B page additionally requires `em-electrostatics-in-vacuum`; this is a B-page prerequisite in plan-spec and does not conflict with the design's A-page prerequisite paragraph.

Two local mathematical suppliers were added to A, as required to make the claims' interfaces complete: `def-emx-surface-divergence` defines the weak surface functional used by the sheet law, and `lem-emx-surface-divergence-c1-representation` proves that the stated C1 tangential current has a unique continuous density. The A inventory is therefore five items, while the planned B inventory remains two. The page stays below its 100-item cap.

The design lists `pthm-emx-weak-poynting-uniqueness` as a statement reference of the sheet theorem. The sheet continuity proof does not use an energy identity; its local conservation law follows from distributional divergence of the macroscopic Ampere equation, and its four jump laws use `pthm-em-material-stationary-jumps`. The unnecessary same-page dependency was omitted and this proof route is recorded in the item itself. No other plan/design conflict was found.

## Item inventory and dependency levels

- A: `def-emx-finite-energy-boundary-model` (level 0)
- A: `def-emx-surface-divergence` (level 0)
- A: `pthm-emx-weak-poynting-uniqueness` (level 1)
- A: `lem-emx-surface-divergence-c1-representation` (level 1)
- A: `pthm-emx-sheet-charge-continuity` (level 2)
- B: `cex-emx-rough-field-energy-limit` (level 1)
- B: `ex-emx-impedance-sign-check` (level 2)

The ordering puts every in-batch supplier before its consumer. Batch 4 itself is dependency level 0 with no cross-batch batch prerequisites. The B-to-A page edge and all B item's A-item prerequisites are within this pair. The assigned A-page prerequisite pages and the B page's `em-electrostatics-in-vacuum` prerequisite are external to this run, so the cross-batch dependency file is the empty JSON array. Their page-level interfaces are retained in the pages manifest.

## Mathematical conventions and limitations

The finite-energy model uses real fields in SI units, time-independent measurable symmetric uniformly positive coefficient fields, and exact L2 evolution identities. Spatially varying coefficients are explicit local model data; the existing material-closure postulate only supplies the constant-coefficient special case. No material existence or empirical claim is made.

The PEC condition is the graph-norm closure definition of `H_0(curl)`. The impedance branch requires measurable L2 tangential fields and the exact Green identity as part of admissibility. The inspected published weak tangential-trace result gives a quotient-dual trace under its own matching-mesh hypothesis and only the one-way vanishing result for the closure space; it does not license a generic L2 trace or a two-H(curl)-field boundary formula. The model therefore states no such trace theorem. Its PEC cancellation is proved directly from the closure and the distributional-curl identity.

The energy result differentiates the bounded symmetric quadratic form in L2, then uses either the PEC closure or the explicitly assumed impedance Green identity. It proves an a-priori balance and forward uniqueness only; the work and nonnegative boundary loss remain in the balance, and no backward uniqueness or existence claim is made.

The sheet result assumes the distributional macroscopic Maxwell equations with stationary sheet sources. It derives source compatibility from `div curl = 0`, separates the locally integrable volume coefficient using the lower-dimensional-manifold null result, obtains the continuous surface density through the new A-page lemma, and identifies the pointwise law by temporal testing and surface-density localization. The four field jumps are the exact existing theorem with the same orientation. The vacuum specialization is conditional on the adopted distributional vacuum postulate and the stated constitutive conversion; it does not promote a smooth-field derivation into a distributional proof.

The B counterexample is the static Coulomb point-charge distributional solution. Its shell integral diverges for nonzero charge, which shows that a distributional Maxwell solution need not have locally integrable ordinary quadratic energy. No regularization, renormalization, measurement, or self-force claim is included. The impedance example is an exact basis-vector sign calculation, not an outgoing-wave model or experiment.

## Source disposition

The A page uses two independent full-text treatments: Niklas Beisert, *Elektrodynamik* (ETH Zurich, 2024 FS), and Long Chen, *Variational Formulation of Maxwell Equations* (UCI, updated May 12 2024). The source locators, supported items, and each harvested result's disposition are listed in the batch coverage file. The complete relevant ETH passages at PDF pp. 65 and 86–87 were inspected. UCI's web PDF extraction first returned HTTP 502; direct retrieval from the same official URL succeeded (330010 bytes), and all eight pages were inspected, with relevant pp. 1–5 harvested. No source or result was dropped. The retrieval history and per-item arguments and exact dependencies are recorded under `source_resolution`; the source-fetch stamp is written by the scoped check after final coverage edits.

The cited source arguments are comparison and interface context. The authored weak energy proof, global surface-divergence proof, and conditional sheet compatibility proof are supplied in full locally. Existing supplier statements and proofs, including the point-charge shell-energy result and the stationary-interface jump theorem, were inspected before use.

## Scoped checks and readiness

The final scoped author check passed: `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts physics-non-fluid-129-2026-10-21-r2 4` returned success for precheck, rendercheck, authored-item content policy, and strict proof contracts. All five proof-bearing items record `verification.precheck: pass`; the two definitions record `n/a`. `node tools/physics-support/proof-layout.mjs` on the seven explicit item paths reported 7 items, 24 steps, and 0 defects. Strict contract validation checked all 7 items with 0 errors and 0 warnings. The contracts map each proof step to its inputs, include exact excerpts from every cited supplier statement, and record the applicable boundary and finite symbolic checks.

The full-text source stamp is present for both A-page treatments: `source-fetch-check --stamp` verified 2/2 full-text bodies with no documented drops. The source coverage checklist passed its destination checks with 0 errors; it reported the expected low-yield warning (3 of 12 harvested results scaffolded). The remaining harvested results are individually marked already-published or out-of-scope with item-specific reasons in the coverage file. `manifest-deps` passed for all 7 assigned items, and `manifest-integrity` found all 258 owed pages with no scope drift.

The current batch-4 item graph was recalculated from its seven authored manifest entries with no errors: levels are 0 for the two definitions, 1 for the weak energy theorem, surface-divergence lemma and rough-field counterexample, and 2 for the sheet theorem and impedance example. Batch 4 has no direct in-run supplier edge, so its recorded batch level is 0. The batch-4 cross-batch file is the empty JSON array after checking current page/item homes. Downstream page requirements on `emx-weak-boundary-energy` belong to their consumer batches (5, 12 and 15), so no row for those consumers is placed in this file.

Two wider-run checks remain outside this batch's ownership. The run-wide `item-dependency-levels check` reports 196 empty scaffold inventories in other batches; the assigned seven-item graph is complete and checked above. The run-wide batch-dependency checker reports a stale input hash. A read-only recomputation yields the same batch rows, with batch 4 still at level 0; the shared schedule file was left to the owner. The aggregate cross-batch collector also stops on the existing batch-29 review error (`invalid review or consumer ownership`); the batch-4 edge set was checked directly from current manifests and its own review array remains valid and empty. These cross-batch review and shared-schedule issues were not changed in this dispatch.

Step 1 readiness records were recorded `ready` for the seven authored items after the current dependency closures, pages, contracts and scoped checks were verified. These records reflect authored prerequisite readiness only; they are not independent proof approval.
