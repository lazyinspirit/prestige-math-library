# Step 3a reader report — batch 18

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Verdict: both assigned pages are mathematically sound after the two in-scope item repairs below. No uneditable finding remains.

## Opened inventory

Read the assigned manifest and both page files:

- A page: `library/quantum-computing/classical-and-quantum-error-correcting-codes.md`.
- B page: `library/quantum-computing/classical-and-quantum-error-correcting-codes-examples.md`.

Opened all 26 assigned items in dependency order. The A-page items were:

- Level 0: `thm-qc-full-column-rank-matrix-image-has-dimension`; `lem-qc-linear-isometry-preserves-inner-products`.
- Level 1: `def-qc-classical-linear-code-over-finite-field`.
- Level 2: `def-qc-dual-of-a-finite-field-linear-code`; `def-qc-hamming-weight-distance-and-linear-code-distance`; `def-qc-quantum-code-isometry-and-code-projector`.
- Level 3: `thm-qc-dual-code-dimension-and-double-dual`; `thm-qc-hamming-distance-is-a-metric-and-code-distance`; `thm-qc-isometric-encoding-projector`.
- Level 4: `def-qc-generator-and-parity-check-matrices`; `def-qc-local-operator-support-and-weight`; `lem-qc-classical-code-distance-disjoint-error-balls`.
- Level 5: `def-qc-quantum-code-distance-and-error-detection`; `lem-qc-local-operator-support-is-permutation-invariant`; `thm-qc-generator-and-parity-check-matrix-existence`.
- Level 6: `def-qc-classical-error-syndrome`; `lem-qc-detectability-is-linear-and-encoding-invariant`.
- Level 7: `lem-qc-classical-syndrome-is-error-only`; `lem-qc-equal-syndrome-errors-differ-by-a-codeword`; `thm-qc-quantum-distance-detects-low-weight-errors`.
- Level 8: `thm-qc-classical-distance-correction-and-erasure-radius`.
- Level 9: `ex-qc-binary-repetition-code-syndrome-table`.

The B-page items were:

- Level 8: `ex-qc-quantum-repetition-projector-and-distance-boundary`.
- Level 9: `ex-qc-binary-hamming-code-syndrome-table`; `ex-qc-repetition-three-syndrome-table`; `ex-qc-short-reed-solomon-syndrome-table`.

Opened the direct local suppliers needed for these claims, including the matrix-rank, finite-dimensionality, finite-field, inner-product, adjoint, tensor-basis, register, wire-permutation, and projection results. Also checked supporting proofs for row rank, finite-dimensional adjoints, and the computational register basis. The A-page's “next page” recovery pointer was checked against batch 19's page manifest and the `knill-laflamme-recovery-and-subsystem-codes` page summary.

## Repairs

1. `items/lem-qc-detectability-is-linear-and-encoding-invariant.md`, proof step 2.1: the original proof chose two orthonormal code vectors from `K ≥ 2` without establishing that the image code subspace had dimension `K`. It now proves `ker V = {0}` from norm preservation, applies rank-nullity to obtain `dim im V = K`, identifies `im P = im V`, and only then chooses the two orthonormal vectors. Added `thm-rank-nullity` to `deps`, added fact `[F5]`, and updated the step derivation, citation, and affected boundary evidence in `research/quantum-computing-algorithms-60-2026-10-15-batch-18.proof-contracts.json`. No `verification.judge` record was present.

2. `items/ex-qc-repetition-three-syndrome-table.md`, proof step 1.3: the given received word is `r=101`, whose known value at coordinate 2 is `1`, but the original erasure argument used value `0`. It now uses the given value, identifies `111` as the compatible completion, and proves it is unique using the distance bound. Updated that derivation, its endpoint evidence, and the finite-check step references in the batch proof contract. No `verification.judge` record was present.

Both repairs are limited to assigned in-flight items; no page prose was changed. The contract's existing template-review records were preserved as historical, pre-repair evidence.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-qc-detectability-is-linear-and-encoding-invariant.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-qc-detectability-is-linear-and-encoding-invariant.md` — PASS.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-qc-repetition-three-syndrome-table.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-qc-repetition-three-syndrome-table.md` — PASS.
- `node tools/proof-layout.mjs items/lem-qc-detectability-is-linear-and-encoding-invariant.md items/ex-qc-repetition-three-syndrome-table.md` — 2 items, 8 steps, 0 defects.

## Page verdicts and remaining defects

- **`classical-and-quantum-error-correcting-codes` (A): PASS.** Its summaries of the finite-field matrix conventions, linear-first inner product, fixed register support, and detection-only distance match the items. The recovery pointer is supported by the following A-page in the current run. No assigned A-page prose repair was needed.
- **`classical-and-quantum-error-correcting-codes-examples` (B): PASS.** Its overview matches the repetition, Hamming, Reed–Solomon, and quantum projector examples. The repetition erasure witness now agrees with the given received word. B-page prose was not edited.
- **Defects not repaired:** none.
- **Blocker:** the run status reports an existing `1-scaffold` specification blocker: the unit prerequisite graph rejects construction scheduling item `def-qc-effective-unitary-matrix-input` in batch 12. This is outside batch 18 and did not block this review.

## Coverage note

All assigned pages and items and the local supplier statements/proofs used to check their claims were opened. I did not audit every transitive foundation dependency of every published supplier or re-verify the cited source PDFs; no uncertainty or unsupported claim in this batch required those checks.
