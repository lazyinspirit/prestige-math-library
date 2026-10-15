# Batch 44 authoring notes — qft-mg01

## Plan and scope

The complete QFT-MG01 design section and the current plan-spec.json pair agree on page IDs, title, order 527/528, category, library, companion, and the five page prerequisites: fundamental-solutions-newtonian-potentials-and-green-functions, orthonormal-bases-parseval-and-fourier-series, qft-mf04, em-primitives-and-postulates, and em-potentials-and-gauge. There is no page-metadata conflict to resolve. The design reserves ten A items and four B items. Two further A-page lemmas are necessary local mathematical suppliers: lem-qft-photon-no-global-polarization-frame supports the B polarization example, and lem-qft-photon-transverse-projector-kernel supports the Coulomb-potential counterexample. They are marked as inventory expansions in the manifest and remain within the assigned pair.

The A/B pages preserve the design’s limits: smooth classical charged variations only; finite commuting complex-coordinate constraints distinct from CAR; a smooth neutral periodic Coulomb solver only; a positive transverse photon space and subsidiary null quotient; no global continuous real polarization frame; the Coulomb potential may be nonlocal while the field strength is local; and no nonperturbative interacting continuum QED or empirical measurement claim.

## Dependency inventory and levels

Levels were recomputed from the complete current run manifests after authoring. External mathematics does not raise in-run levels. The batch-44 values are:

| Level | Items |
|---|---|
| 1 | def-qft-photon-transverse-space |
| 2 | def-qft-qed-gauge-data, lem-qft-photon-no-global-polarization-frame, lem-qft-photon-null-quotient, lem-qft-photon-smeared-potential |
| 3 | lem-qft-photon-transverse-projector-kernel, lem-qft-qed-dirac-gauge-current, lem-qft-qed-coulomb-constraint, lem-qft-qed-dirac-first-order-constraints, lem-qft-photon-covariance-spectrum, ex-qft-qed-two-polarizations, cex-qft-qed-negative-auxiliary |
| 4 | cex-qft-qed-coulomb-potential-locality, cex-qft-qed-torus-charge |
| 5 | lem-qft-photon-local-field-strength |
| 6 | lem-qft-photon-local-weyl-observables |

The new kernel lemma carries a full Abel-regularized Fourier argument, including the exact Newtonian normalization and the off-origin derivative. This keeps its use by the B counterexample conditional on a complete A-page proof.

## Cross-batch interfaces and readiness

Every consuming proof was completed against the current inspected supplier statement, including cases whose readiness is unresolved. Draft suppliers are not treated as accepted proofs.

- def-qft-dirac-projections (batch 42) fixes the exact (-,+,+,+) Pauli-block matrices, adjoint, Clifford convention and Countable Choice hypothesis. Its item readiness is escalated; therefore def-qft-qed-gauge-data, the charged current/action lemma, the Coulomb constraint, the finite Dirac-constraint lemma, and the torus-charge counterexample are recorded escalated.
- lem-qft-free-action-equations (batch 43) has a current Step-1 ready record and states the compact-variation free commuting-spinor equation with the same gamma and metric conventions. The charged variation is proved conditionally by replacing the derivative with the smooth covariant derivative and testing the smooth residual locally.
- lem-qft-lorentz-boost-rotation-factorization (batch 42), lem-qft-second-quantized-spectrum, lem-qft-fock-ccr-car, and lem-qft-segal-weyl-domain (batch 37) have current Step-1 ready records; their exact interfaces are used in the covariance, smearing and Weyl proofs.
- lem-qft-scalar-causal-commutator (batch 38) is escalated. Its exact massless sine-over-frequency distribution, causal-cone support and scalar commutator are stated in the conditional field-strength proof. Consequently lem-qft-photon-local-field-strength and lem-qft-photon-local-weyl-observables are escalated.
- The transverse definition, quotient, topology result, covariance/spectrum result, smeared potential, local-frame obstruction, polarization example, negative-auxiliary counterexample, and Coulomb-kernel counterexample have complete placement and contracts with current direct inputs; they are recorded ready.

All 16 final Step-1 records were written after the scoped checks: nine are `ready` and seven are `escalated`. The escalations are `def-qft-qed-gauge-data`, `lem-qft-qed-dirac-gauge-current`, `lem-qft-qed-coulomb-constraint`, `lem-qft-qed-dirac-first-order-constraints`, `lem-qft-photon-local-field-strength`, `lem-qft-photon-local-weyl-observables`, and `cex-qft-qed-torus-charge`. Each record lists its inspected direct dependencies and exact unresolved carrier where applicable. These are authoring-readiness records, not independent proof approval.

The run-wide Step-1 status was read without changing engine state. At the latest read, 1-scaffold covered 53/64 units with no worker in flight; batch 44 is still listed among uncovered units, but it is no longer listed as artifact-missing. Other artifact-missing units are 24, 6, 13, 18, 61, 52, 47, 53, 54, and 55. The owner repair/recertification blocker for unit 28 and scheduler scope mismatch remain. The batch-44 files and item records below do not authorize or perform a shared state transition. Structured current-run edges are recorded in `physics-td-qft-rpm-62-2026-10-14-batch-44.cross-batch-dependencies.json`.

## Validation and owner escalations

proof-contract.mjs --strict, the batch-44 coverage-checklist, source-fetch-check --stamp, content-policy, and the final explicit-file proof-layout all pass for this batch. The proof-layout renderer in the app checkout has no installed tsx package and the normal TypeScript fallback cannot resolve its @/ aliases. The explicit-file scan was completed with a temporary /private/tmp ESM alias hook and a temporary app-directory overlay that points only to the existing read-only web/worker checkouts; no application files were changed.

The final run-wide `item-dependency-levels.mjs check` reports no qft-mg01 item-level mismatch. It still fails on three empty scaffold inventories (`rpm-external-charge-examples`, `qft-x03`, `qft-x03-examples`) and five stale labels owned elsewhere: `thm-qft-example-soft-current-angular-coherent` 3→4, `ex-qftmath-x06` 4→5, `post-qft-formal-qed-coefficients` 7→6, `pthm-qft-qed-formal-ward` 8→7, and `texp-qft-qed-infrared-sequence` 5→8. The run-wide `batch-dependency-levels.mjs check` also reports stale shared batch-level evidence. Those inventories, labels, and shared dependency evidence were left unchanged for their owners.

`proof-contract-coverage.mjs` could not inspect the run because the frontier reader stops at the unrelated empty `rpm-external-charge-examples` inventory. The batch-scoped strict proof-contract check independently passes all 16 batch-44 items and records exact current supplier excerpts and numbered-step inputs.

The Tong QFT chapter, Srednicki book draft, Hatcher theorem and official BIPM brochure were inspected and recorded in the page coverage. Tong and Hatcher were newly fetched and stamped; the verified Srednicki and BIPM stamps and their prior retrieval history were reused. No retrieval failed in this batch, so no new source_resolution record was needed.
