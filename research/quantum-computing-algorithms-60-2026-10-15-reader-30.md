# Step 3a reader report — batch 30

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `30`  
Role: reader

## Opened inventory

Opened both assigned pages:

- `library/quantum-algorithms/quantum-fourier-transform-circuits.md` (A-page).
- `library/quantum-algorithms/quantum-fourier-transform-circuits-examples.md` (B-page).

Opened all 15 assigned items in manifest dependency order:

1. `thm-qa-projective-operator-closeness-bounds-output-distribution`
2. `lem-qa-pi-over-two-exceeds-sqrt-two`
3. `def-qa-cyclic-quantum-fourier-transform`
4. `lem-qa-binary-qft-product-factorization`
5. `lem-qa-tensor-extension-preserves-operator-norm`
6. `lem-qa-swap-is-three-cnot-circuit`
7. `def-qa-qft-gate-cost-model`
8. `alg-qa-exact-binary-qft-circuit`
9. `thm-qa-exact-binary-qft-circuit-correct`
10. `thm-qa-exact-binary-qft-gate-count`
11. `alg-qa-truncated-binary-qft-circuit`
12. `thm-qa-truncated-qft-operator-norm-error`
13. `thm-qa-truncated-qft-gate-count`
14. `thm-qa-qft-finite-gate-set-compile-cost`
15. `ex-qa-qft-fourier-circuit-order-and-truncation`

Opened the 51 unique manifest-listed direct dependencies at the statement or definition sections used by these proofs. The current-run dependency items were:

`alg-qc-solovay-kitaev-unitary-compiler`, `def-qc-circuit-denotational-semantics`, `def-qc-circuit-syntax-and-register-order`, `def-qc-cnot-and-control-target-order`, `def-qc-controlled-phase-rotation`, `def-qc-dirac-notation-conversion`, `def-qc-elementary-circuit-resources`, `def-qc-inverse-closed-dense-su2-gate-set`, `def-qc-inverse-unitary-access`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `lem-qc-local-gate-wire-embedding`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-bitstring-index-is-bijection`, `thm-qc-computational-basis-orthonormal`, `thm-qc-controlled-global-phase-is-relative-phase`, `thm-qc-one-control-unitary-two-cnot`, `thm-qc-solovay-kitaev-error-and-resource-bound`, and `thm-qc-wire-permutation-is-unitary`.

The published direct dependencies were:

`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-inner-product-induces-a-norm`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `cor-sine-and-cosine-are-one-lipschitz`, `cor-triangle-inequality-for-inner-product-norm`, `def-finite-probability-space-and-event`, `def-inner-product-space`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-orthogonal-vectors-sets-and-orthonormal-bases`, `def-pi-via-first-positive-cosine-zero`, `def-sine-and-cosine-by-power-series`, `def-unitary-discrete-fourier-transform-on-z-mod-n`, `lem-complex-conjugation-and-modulus-laws`, `lem-sine-positive-and-cosine-decreasing-on-zero-two`, `thm-alternating-series-test`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-cauchy-schwarz-finite`, `thm-complex-exponential-addition-and-real-extension`, `thm-cosine-has-a-smallest-positive-zero`, `thm-double-angle-and-power-reduction-identities`, `thm-eulers-formula`, `thm-every-complex-number-has-a-square-root`, `thm-finite-dimensional-isometry-characterisations`, `thm-finite-fourier-inversion`, `thm-of-square-roots`, `thm-quarter-turn-values-and-shift-formulas`, `thm-reals-cauchy-complete`, and `thm-sine-and-cosine-derivatives`.

For the finite-set compilation chain, also opened `def-qc-controlled-unitary-access`, `lem-qc-compact-su2-base-net`, `lem-qc-commutator-error-cancellation`, `lem-qc-pauli-vector-multiplication`, `lem-qc-su2-balanced-commutator`, `lem-qc-su2-near-identity-logarithm`, `thm-qc-axis-rotation-pauli-formula`, and `thm-qc-one-qubit-euler-decomposition`.

For the pre-reversal factor order, opened Ronald de Wolf, *Quantum Computing: Lecture Notes*, §4.5, PDF pp. 44–45 ([author-hosted PDF](https://arxiv.org/pdf/1907.09415)). The passage derives the basis-output product state, describes preparing its factors in reverse wire order, and applies final swaps to restore the displayed QFT output order.

## Repairs and evidence

- In `items/def-qa-qft-gate-cost-model.md`, specified that each adjoint controlled phase `CP_s† = diag(1,1,1,e^{-2πi/2^s})` counts as one ideal gate when used in an inverse circuit. The exact-circuit correctness proof reverses the gate list and claims the inverse QFT has the same ideal count; the former model named only the positive-angle `CP_s` gates. This explicit convention supplies the missing cost premise.
- In `items/thm-qa-exact-binary-qft-circuit-correct.md`, added the inverse controlled-phase cost to fact F2 and cited it in step 3.1. The inverse-list count now follows from the cost model, and the negative-sign conclusion still follows from the positive-sign QFT definition. Updated the batch proof contract's F2 quote/use and step-3.1 derivation.
- In `items/lem-qa-binary-qft-product-factorization.md`, added a precise De Wolf §4.5 locator and fact L2 for the statement that the conventional Hadamard/controlled-phase circuit prepares the product factors in reverse wire order before the final reversal. Step 3.1 now cites that source together with the exact ordered-wire permutation convention. Updated the proof contract's step-3.1 derivation.

The direct consumers of the gate-cost model were checked. The batch-30 consumers use the positive-angle circuit except for the inverse-QFT clause repaired above. The direct consumer in batch 55, `thm-qa-dihedral-sieve-scope`, uses the positive-sign forward QFT and its forward gate count. These consumer statements need no further changes.

Validation after the final item edits:

- `node tools/tsx-run.mjs tools/reflow.mts` on each of the three changed items: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on each changed item: pass; the definition has no proof-bearing checks.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-30.proof-contracts.json --items lem-qa-binary-qft-product-factorization,thm-qa-exact-binary-qft-circuit-correct --strict`: 0 errors, 0 warnings; 2/2 checked.
- `node tools/proof-layout.mjs items/lem-qa-binary-qft-product-factorization.md items/def-qa-qft-gate-cost-model.md items/thm-qa-exact-binary-qft-circuit-correct.md`: 3 items, 6 steps, 0 defects.

No changed item had a stale `verification.judge` record.

## Page verdicts

- **A — `quantum-fourier-transform-circuits`: pass.** Its positive-sign convention, binary factorization, exact circuit, SWAP identity, truncation estimate, and conditional finite-set cost summary agree with the reviewed items. The two repaired items support the cited circuit order and inverse-gate count.
- **B — `quantum-fourier-transform-circuits-examples`: pass.** Its summary matches the finite N=4 matrix, reversed-wire matrix, exact gate list, cutoff-1 deletion, and operator-norm example. Its note that circuit semantics and resource suppliers remain drafts is accurate. B-page prose was not edited.

## Unedited defects and blocker

No uneditable mathematical defects were found in the assigned pages, items, or reviewed direct dependencies.

The live run remains blocked at the stage-spec level: `autopilot status` reports `1-scaffold: unit prerequisite graph is invalid — Invalid construction scheduling item identity def-qc-effective-unitary-matrix-input in batch 12`. This is outside batch 30 and did not prevent the mathematical review or its validations.
