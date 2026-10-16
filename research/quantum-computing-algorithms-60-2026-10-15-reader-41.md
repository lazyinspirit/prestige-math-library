# Reader report — batch 41

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Scope: batch `41`

## Opened inventory

Assigned pages:

- `library/quantum-algorithms/discrete-quantum-walks-and-szegedy-theory.md` (A)
- `library/quantum-algorithms/discrete-quantum-walks-and-szegedy-theory-examples.md` (B)

All 18 assigned item files were opened. Review proceeded from the stochastic and reversible-chain definitions to the spectral and walk results, then to the access model and examples:

- `def-qa-17-finite-stochastic-kernel`
- `def-qa-17-finite-reversible-chain`
- `def-qa-17-szegedy-transition-isometry`
- `lem-qa-17-stochastic-l2-contraction`
- `lem-qa-17-reversible-transition-self-adjoint-on-l2-pi`
- `def-qa-17-absolute-spectral-gap`
- `thm-qa-17-discriminant-self-adjoint`
- `cex-qa-17-zero-stationary-weight`
- `thm-qa-17-absolute-gap-eigenvalue-characterization`
- `cex-qa-17-nonreversible-discriminant`
- `ex-qa-17-period-two-walk`
- `def-qa-17-szegedy-walk`
- `lem-qa-17-walk-reflection-unitarity`
- `lem-qa-17-invariant-eigenplane`
- `def-qa-17-walk-access-model`
- `thm-qa-17-szegedy-spectral-mapping`
- `thm-qa-17-walk-access-cost`
- `ex-qa-17-two-state-reversible-walk`

The direct item suppliers used to check these proofs were opened: `def-transition-matrix-and-n-step-transition-probabilities`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-reversible-measure-and-detailed-balance`, `def-period-of-a-state`, `def-inner-product-space`, `def-inner-product-norm`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`, `def-self-adjoint-and-normal-endomorphism`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-orthogonal-complement`, `def-linear-combination-and-span`, `def-kernel-and-image-of-a-linear-map`, `thm-linear-kernel-image-and-injectivity`, `thm-finite-dimensional-orthogonal-decomposition`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `prop-adjoint-algebra`, `thm-of-square-roots`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `def-qc-tensor-register-and-permutation`, `def-qc-dirac-notation-conversion`, `def-qc-reflection`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `thm-finite-dimensional-isometry-characterisations`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-qc-circuit-cost-model`, `def-qc-uniform-circuit-family`, `def-principal-inverse-sine-and-cosine`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-eulers-formula`, `thm-complex-exponential-addition-and-real-extension`, `thm-sine-cosine-signs-monotonicity-and-ranges`, and `thm-quarter-turn-values-and-shift-formulas`.

The batch proof-contract entries for the 12 lemma, theorem, counterexample, and example carriers were checked against the current proof text, including cited sections, step uses, derivation inputs, and boundary rows. The manifest, batch coverage record, and cross-batch dependency record were treated as navigation and evidence only.

## Source check

I read Andrew Childs, *Lecture Notes on Quantum Algorithms*, Chapter 18 §§18.2–18.3 (PDF pp. 82–84, especially Eqs. (18.5)–(18.34) and Theorem 18.1): <https://www.cs.umd.edu/~amchilds/qa/qa.pdf>. Childs uses a column-stochastic convention (`P_{kj}` is the probability of moving from `j` to `k`); transposing to this batch's row convention leaves the discriminant entries `sqrt(P_xy P_yx)` unchanged. The batch proves its row-convention formulas locally.

I also read Ronald de Wolf, *Quantum Computing: Lecture Notes*, Chapter 8 §§8.1–8.2 (PDF pp. 62–66): <https://arxiv.org/pdf/1907.09415>. Its walk construction uses the row transition convention, but the cited spectral relation is explicitly sketched rather than proved there; the assigned spectral-mapping theorem supplies the complete finite-dimensional proof and handles the endpoint and complementary-subspace cases.

## Review and verdicts

- The definitions preserve the row-vector transition convention, state the positive stationary-law and detailed-balance hypotheses explicitly, and handle empty spaces and zero stationary coordinates consistently.
- The weighted-L2 contraction and self-adjointness arguments use stationarity and detailed balance in the stated directions. The absolute-gap characterization covers the zero mean-zero subspace and reducible or periodic cases.
- The discriminant entry formula, contractivity, invariant-plane calculation, endpoint lines, and complementary subspace in the spectral-mapping proof are supported by the displayed derivations. The one-step walk and its square retain distinct operators and phase conventions.
- The access model supplies circuit interfaces and cost coordinates separately from a transition matrix. The access-cost theorem proves the stated conjugated clean-state reflection, clean-workspace return, and factorwise controlled-call count for that implementation.
- The zero-weight and directed-cycle counterexamples have valid witnesses. The period-two and two-state examples give the claimed periods and complete eigenvalue multisets, including both parameter endpoints. Their intentionally refuted statements are part of the counterexample roles, not defects.
- No proof-contract citation, boundary row, or page summary contradicted the opened mathematics.

**A-page verdict:** no confirmed defect found in the page summary or its 14 assigned items.  
**B-page verdict:** no confirmed defect found in the page summary or its 4 assigned examples/counterexamples.

## Edits, unresolved defects, and blockers

No item or page prose was edited; no uneditable mathematical defect or proposed withdrawal remains. Since no item path changed, reflow, precheck, and `proof-layout` were not run. No judge record or proof contract was changed.

The live autopilot status reported a run-level stage-spec blocker from the invalid construction-scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12, and a separate `3a-split-10` dispatch failure after three attempts. The status reported no worker currently running. Neither issue blocked the independent batch-41 review.

## Coverage note

Both assigned pages, all 18 assigned items, the direct item suppliers needed to check their proofs, all 12 applicable batch proof-contract entries, and the relevant cited sections were reviewed. I did not independently re-audit every transitive prerequisite of those direct suppliers.
