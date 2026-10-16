# Step 3a reader report — batch 46

Run: quantum-computing-algorithms-60-2026-10-15

## Opened inventory

Assigned pages:

- library/quantum-algorithms/block-encodings.md (A page).
- library/quantum-algorithms/block-encodings-examples.md (B page).

Assigned items, read in manifest dependency order:

1. def-qa-22-block-encoding
2. lem-qa-22-block-compression-contraction
3. def-qa-22-block-encoding-access-model
4. alg-qa-22-product-block-encoding
5. thm-qa-22-adjoint-block-encoding
6. thm-qa-22-product-block-encoding-correctness
7. thm-qa-22-long-product-error-recurrence
8. alg-qa-22-lcu-block-encoding
9. thm-qa-22-lcu-block-encoding-correctness
10. thm-qa-22-block-encoding-error-and-query-cost
11. ex-qa-22-product-error
12. ex-qa-22-two-term-lcu

Direct and proof-critical dependency items opened:

- Inner-product and norm facts: def-real-and-complex-inner-product-space, def-inner-product-norm, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-linear-isometry-and-orthogonal-or-unitary-operator, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-triangle-inequality-for-inner-product-norm, and cor-operator-norm-submultiplicative-and-t-star-t-identity.
- Register, notation, circuit, and access facts: def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-qc-dirac-notation-conversion, thm-qc-dirac-notation-coordinate-identity, def-qc-circuit-denotational-semantics, def-qc-controlled-unitary-access, def-qc-inverse-unitary-access, def-qc-uniform-circuit-family, def-qc-circuit-cost-model, and the cited interface def-qc-coherent-function-oracle.
- State-preparation facts used by the LCU procedure: def-qc-state-preparation-cost-model, alg-qc-state-preparation, thm-qc-state-preparation-rotation-level-upper-bound, thm-qc-state-preparation-cost, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, def-qc-ordered-bitstring-encoding, def-qc-pure-state-and-ray, def-qc-toffoli-and-fredkin, def-qc-elementary-circuit-resources, thm-qc-axis-rotation-pauli-formula, thm-qc-computational-basis-orthonormal, lem-qc-prefix-norm-rotation-identities, thm-polar-form-with-unique-principal-argument, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-parametrize-the-unit-circle, and thm-sine-cosine-zero-sets-and-fundamental-period.

## Review and edits

The definitions and proofs for projected-block contraction, adjoint access, separate-ancilla multiplication, its two-factor error bound, the long-product recurrence, LCU construction and normalization, and cost accounting were checked against their stated hypotheses. The products preserve the stated operator order. The LCU weights and coefficient phases give \(\sum_j \beta_j A_j/\Lambda\), and the state-preparation call has an exact vector phase because the first retained amplitude is positive. The page summaries accurately describe these results and the explicit access-cost boundary.

Two clarifications were made in assigned draft items:

1. def-qa-22-block-encoding now gives exact source locators and distinguishes this library's normalized error parameter from Gilyén et al.'s unnormalized tolerance. The cited Definition 43 states \(\|A-\alpha B_U\|_{\rm op}\le\varepsilon_{\rm src}\) and notes \(\|A\|_{\rm op}\le\alpha+\varepsilon_{\rm src}\) (Gilyén et al., §4.1, Def. 43, PDF p. 40, [source](https://ir.cwi.nl/pub/28780/28780.pdf)). This item's \(\varepsilon\) bounds the normalized compression error, and \(\alpha\ge\|A\|_{\rm op}\) is an additional local promise in the approximate case. Childs §29.1, printed p. 144 (PDF p. 150), gives the exact rescaling convention: a block encoding of \(A/\alpha\) uses \(\alpha\ge\|A\|\) ([source](https://www.cs.umd.edu/~amchilds/qa/qa.pdf)). The item's mathematical definition and consumer hypotheses were not changed.
2. ex-qa-22-product-error step 3.1 previously placed the normalized universal estimate \(8/25\) next to the unnormalized error \(17/50\) without scaling the estimate. It now states the corresponding unnormalized estimate \(16/25\) as well. The actual normalized and unnormalized errors are \(17/100\) and \(17/50\), respectively, so neither universal bound is tight. The step's proof contract was updated to cite F1.

Neither edited item had a verification.judge record to remove.

Checks after the final edits:

- reflow.mts left both changed items unchanged.
- precheck.mts passed for both changed items.
- node tools/proof-layout.mjs items/def-qa-22-block-encoding.md items/ex-qa-22-product-error.md reported 2 items, 7 steps, 0 defects.

## Defects not edited

None.

## Page verdicts

- block-encodings (A): pass. Its summary matches the authored definitions, constructions, error bounds, and access-cost conditions.
- block-encodings-examples (B): pass. Its summary matches the two-term LCU example and the explicit two-factor dilation and error calculation.

## Blocker

The run status is running and stage 3a-read is active. Autopilot reports an upstream specification blocker at 1-scaffold: the unit prerequisite graph is invalid because batch 12 contains invalid construction scheduling item identity def-qc-effective-unitary-matrix-input. No worker was in flight when status was checked. This blocker is outside batch 46; the assigned review and required local checks completed.

## Coverage note

The review covered both assigned pages, all twelve assigned items, their direct dependencies, and the additional proof-critical dependencies listed above. It was not a whole-corpus audit of unrelated transitive supplier closures.
