# Batch 62 authoring notes — QFT-IR04

## Scope and controlling plan

This batch owns exactly `qft-ir04` and `qft-ir04-examples`, with five A-page items and one B-page example. The current owner-direction file named by the dispatch, `research/physics-td-qft-rpm-62-2026-10-14-owner-authoring-direction.md`, was not present when checked.

The full design section is `research/plan-quantum-field-theory-track.md` lines 929–973. Its prose lists three page prerequisites: `approximation-and-compactness-in-ck`, `distributions-test-functions-and-differentiation`, and `relations-functions-and-quotients`. The controlling `research/plan-spec.json` row additionally requires `countability-and-uncountability`. The design's own AC-to-DC-to-ACω proof route cites the countable-choice supplier, so the extra prerequisite is substantive; the page manifest follows the plan spec and retains all four requirements. No shared plan was edited.

## Inventory, dependency order, and placement

| Item | Page | Direct in-batch suppliers | Level |
|---|---|---|---:|
| `def-qft-distribution-scaling-degree` | A | none (`def-distribution` is external) | 0 |
| `lem-qft-test-frechet-uniform-scaling-order` | A | definition above | 1 |
| `thm-qft-finite-scaling-degree-extension` | A | definition and uniform-order lemma | 2 |
| `prop-qft-local-counterterm-jet-classification` | A | scaling-degree extension theorem | 3 |
| `prop-qft-four-dimensional-log-scale-anomaly` | A | extension theorem and counterterm proposition | 4 |
| `ex-qft-unique-subcritical-extension` | B | counterterm proposition | 4 |

All other item dependencies are inspected published mathematical suppliers and do not raise this batch's item levels. The B example directly declares `lem-test-function-cutoffs-and-euclidean-localization`, which supplies the nonnegative annular test used for the scaling-degree lower bound, subcritical and critical. In particular, the local proof of the uniform-order estimate declares the complete fixed-support Frechet space, its completeness, Baire's theorem, DC, ACω, and the AC ⇒ DC ⇒ ACω supplier. The AC premise is explicit wherever the Baire, polar-coordinate, or regular-distribution results require it. The dependency graph is acyclic. The manifest stores the computed levels and dependency roles.

The pair remains within point extensions on Euclidean `R^n`. It does not claim arbitrary products of distributions, Lorentzian time-ordered products, causal factorization, curved-spacetime extensions, or a physically selected renormalization prescription. The 4D logarithm is a conditional Euclidean distribution identity for the displayed kernel; it is not experimental evidence or a measured beta function.

## Mathematical route and review notes

The scaling-degree definition fixes the positive dilation convention, testwise convergence, extension, degree of divergence, and exact homogeneity. The uniform annular-order lemma upgrades testwise decay to a uniform derivative-seminorm bound by applying Baire to a complete fixed-support test space; its choice assumptions are stated and supplied.

The extension proof works for arbitrary punctured distributions. A dyadic partition telescopes to one off the origin; for degree at or above dimension, the Taylor jet through `floor(delta-n)` is subtracted. Absolute convergence and continuity follow from the uniform annular estimate and the fine-shell geometric exponent `n+k+1-omega>0`. The scale-degree upper estimate explicitly splits fine shells, intermediate coarse shells, finitely many outer shells, and the cutoff term. Restriction to the punctured domain supplies the lower bound.

The counterterm classification subtracts two same-degree extensions, uses the point-support theorem, and tests the highest nonzero jet with a cutoff monomial to establish degree `n+m`. This yields uniqueness below dimension and precisely the finite jet through order `floor(delta-n)` at and above it. At the four-dimensional threshold, Gaussian-polar integration gives `sigma(S^3)=2 pi^2`; differentiating the absolutely integrable cutoff difference in log scale fixes the sign and coefficient `1/(8 pi^2)`. The local calculation proves no same-degree extension is exactly homogeneous. The B example computes the critical punctured scaling degree directly, proves the strict radial integrability threshold, and checks the critical logarithmic divergence and affine delta freedom. Its annular nonnegative test is supplied by the published cutoff/localization lemma; injectivity of the regular-distribution embedding justifies the conclusion that no regular extension can agree off the origin.

## Source record and recovery history

The active source inventory and harvested-result dispositions are in `research/physics-td-qft-rpm-62-2026-10-14-batch-62.coverage.json`.

- Brunetti–Fredenhagen, *Microlocal Analysis and Interacting Quantum Field Theories*, official arXiv full-text PDF: Section 5.1 and Theorems 5.2–5.3, PDF pp.21–25, with the nearby Section 6 boundary inspected at pp.26–28. The complete Theorem 5.2/5.3 proof route was read. `source-fetch-check --stamp` verified the 38-page PDF.
- Fredenhagen–Rejzner, *Perturbative algebraic quantum field theory*, official arXiv 42-page lecture-note PDF: Section 7, PDF pp.25–30, was retrieved and read. Theorem 7.2 states the extension/ambiguity result and points to Brunetti–Fredenhagen for proof. Its URL remains in coverage history with the actual initial fetch plus five recovery attempts; `mutool` could not verify compressed-object page count on all six calls. It is recorded as dropped from active evidence with the complete item-by-item alternative arguments and dependencies required by `source-resolution.mjs`; its unstamped URL is not relied on by the carriers.
- The recovery search located Fredenhagen–Rejzner's chapter “Perturbative Algebraic Quantum Field Theory” in the 2015 Springer edited volume *Mathematical Aspects of Quantum Field Theories*. The complete 572-page volume PDF was retrieved from the National Academic Digital Library of Ethiopia mirror. Printed pp.42–47 (PDF pp.69–74) were inspected, including Definition 10, Theorem 2, the 4D Feynman-propagator example, and the transition to the causal/graph construction. The theorem again refers to Brunetti–Fredenhagen for its proof. `source-fetch-check --stamp` verified this PDF in one attempt (15,929,141 bytes; 572 pages; SHA-256 prefix `53669f2c3ca15234`).
- Keller's 107-page dissertation, official arXiv PDF: Chapter I, §I.1, PDF pp.11–14. The theorem, subcritical proof sketch, and complementary-space/delta-jet construction were inspected. Keller credits Brunetti–Fredenhagen for the most general proof; this is corroboration, not a substitute for the complete local argument. Its PDF stamp passed.
- The DESY thesis record URL returned a 248-byte fast-challenge page. Search found Keller's complete arXiv thesis, which was retrieved and inspected; the DESY URL is not cited as fetched. A search result for Cambridge `AQFTNotes.pdf` was checked and rejected because it is a different 111-page *Functional Methods in Quantum Field Theory* document. The complete searches, locators, and dispositions are recorded in coverage.

The carrier source references now point to the active Brunetti–Fredenhagen, Fredenhagen–Rejzner Springer chapter, and Keller sources. The exact complete supplier excerpts and their uses are embedded in the proof contracts.

## Placement and cross-batch seams

No `library/quantum-field-theory-mathematics/_category.md` was present. Category metadata is outside this batch's assignment, so only the assigned A/B pages and their items were authored. The downstream plan references QFT-IR04 from the batch-63 `qft-ir05` example `ex-qft-four-point-one-loop-log-degree` and from the batch-64 `qft-pir01` remark `rem-qft-formal-renormalization-physical-status`; these consumers are not edited here. There are no incoming item or page edges from another batch in this run, so the owned incoming cross-batch dependency input is the empty array in `batch-62.cross-batch-dependencies.json`.

## Scoped checks and readiness

- `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts physics-td-qft-rpm-62-2026-10-14 62` passed: precheck 5/5 proof-bearing items; rendercheck 8/8 files; content policy 6/6 items; proof contract 6/6 items.
- `node tools/physics-support/proof-layout.mjs <the six explicit item paths>` passed: 6 items, 26 steps, 0 defects. The plain invocation first failed because the installed TypeScript fallback did not resolve the app's `@/` aliases; rerunning with a temporary ESM alias/extension hook in `/private/tmp` passed. No renderer or app files were changed.
- Scoped `depcheck.mjs --items-file /private/tmp/qft-ir04-step1-ids.json --json` passed with 0 errors and 0 warnings. Direct frontmatter dependencies and `dependency_roles` match the batch manifest for all six items.
- Scoped dependency computation passed with levels `0,1,2,3,4,4` in the table above. The latest run-wide `item-dependency-levels.mjs check --run physics-td-qft-rpm-62-2026-10-14` exited nonzero on out-of-batch state: 82 other pages have empty scaffold inventories and 28 existing RPM/QFT items have stored levels below the computed levels (`pthm-rpm-inverse-momentum-and-work`, `def-rpm-collision-objects`, `post-rpm-isolated-collision-balance`, `pthm-rpm-system-mass-threshold`, `pthm-rpm-fixed-target-threshold`, `pthm-rpm-two-body-com-kinematics`, `pthm-rpm-two-null-invariant-energy`, `pthm-rpm-kinematic-elastic-channel`, `texp-rpm-ideal-fusion-mass`, `texp-rpm-one-null-decay-recoil`, `def-rpm-h-poincare-charge-space`, `thm-rpm-h-local-hamilton-jacobi`, `thm-rpm-h-poincare-moment-map-and-algebra`, `thm-rpm-h-positive-spin-orbit`, `post-rpm-h-classical-spin-orbit-model`, `thm-rpm-h-spinless-kks-identification`, `pthm-rpm-h-classical-orbit-evolution`, `thm-rpm-h-killing-shell-first-integral`, `pthm-rpm-h-free-symmetry-conservation`, `thm-rpm-h-complete-integral-coordinates`, `pthm-rpm-h-hj-trajectories`, `cex-rpm-h-instantaneous-potential-free-boost`, `ex-rpm-h-two-shell-consistency-obstruction`, `cex-rpm-h-relativistic-hj-caustic`, `ex-rpm-h-free-relativistic-complete-integral`, `def-qft-scalar-mass-shell`, `lem-qft-mass-shell-measure-invariant`, `lem-qft-mass-shell-test-range-dense`). It reported no batch-62 level errors; those other manifests/items were left to their owners.
- `coverage-checklist.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-62.coverage.json --require-destination` passed: 1 page, 18 harvested results, 0 errors/warnings. `source-fetch-check.mjs --coverage ...` resolved 4/4 source records: 3 active full-text stamps and 1 documented drop with complete alternative arguments. The BF paper, Fredenhagen–Rejzner Springer chapter, and Keller thesis are stamped; the compressed arXiv lecture-note record is retained as a dropped historical source after its initial fetch plus five failed page-count retries.
- `step1-decisions.mjs record` wrote `ready` for all six owned items without `--owner`; a fresh hash check confirms all six records remain closed. The run-wide `step1-decisions.mjs check` is still open for other batches (53/184 items ready at the check); no other records were changed.

These are authoring checks and do not constitute independent review or approval.
