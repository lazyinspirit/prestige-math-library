# Step 3a reader report — batch 36

**Run:** `quantum-computing-algorithms-60-2026-10-15`  
**Role:** reader  
**Date:** 2026-10-16

## Opened inventory

### Assigned pages

- A-page `amplitude-amplification`: `library/quantum-algorithms/amplitude-amplification.md`
- B-page `amplitude-amplification-examples`: `library/quantum-algorithms/amplitude-amplification-examples.md`

### Assigned items

A-page items, in the manifest's local dependency order. The prepared-subspace definition was first opened before its external direct suppliers; I subsequently opened those suppliers and checked their statements before reviewing its local consumers.

- `def-qa-12-prepared-success-subspace`
- `lem-qa-12-amplification-plane-invariant`
- `alg-qa-12-amplitude-amplification`
- `alg-qa-12-unknown-amplitude-search`
- `alg-qa-12-arbitrary-phase-amplification`
- `thm-qa-12-amplification-rotation-correctness`
- `alg-qa-12-known-amplitude-amplification`
- `alg-qa-12-exact-success-amplification`
- `thm-qa-12-arbitrary-phase-matching`
- `thm-qa-12-fixed-amplification-query-cost`
- `thm-qa-12-known-amplitude-success-bound`
- `thm-qa-12-exact-success-guarantee`
- `thm-qa-12-unknown-amplitude-success`
- `thm-qa-12-phase-mismatch-robustness`
- `thm-qa-12-arbitrary-phase-query-cost`
- `prop-qa-12-amplitude-access-cost-accounting`
- `thm-qa-12-known-amplitude-query-cost`
- `thm-qa-12-exact-success-query-cost`
- `thm-qa-12-unknown-amplitude-query-cost`

B-page items:

- `ex-qa-12-amplitude-amplification-finite-case`
- `cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule`

### Dependency evidence opened

Opened the quantum-state, measurement, reflection, query, and access suppliers used by the assigned arguments, including `def-qc-dirac-notation-conversion`, `def-qc-pure-state-and-ray`, `def-qc-projective-measurement`, `def-qc-inverse-unitary-access`, `def-qc-reflection`, `def-qc-controlled-unitary-access`, `def-qc-relative-phase`, `def-qc-clean-and-dirty-ancillas`, `def-qc-pauli-matrices`, `def-qc-toffoli-and-fredkin`, `def-qc-controlled-z-and-swap`, `thm-qc-unit-vector-projector-is-density`, `thm-qc-projective-measurement-outcome-law`, `thm-qc-projective-conditional-state`, `thm-qc-reflection-unitary-involution`, and `thm-qc-controlled-global-phase-is-relative-phase`.

Opened query/cost and task suppliers `def-qa-quantum-query-algorithm`, `def-qa-task-and-promise-domain`, `def-qa-finite-branch-output-law`, `def-qa-promise-query-instance`, `def-qa-expected-query-cost`, `def-qa-quantum-query-complexity`, `def-qc-circuit-cost-model`, and `def-qc-clean-and-dirty-ancillas`.

Opened the finite-dimensional source interfaces `def-inner-product-space`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-trace-of-an-endomorphism`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-real-and-complex-inner-product-space`, `def-inner-product-norm`, `def-qc-density-operator`, `def-non-negative-and-positive-operator`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `prop-pythagorean-parallelogram-and-polarisation-identities`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `prop-adjoint-algebra`, `thm-finite-dimensional-isometry-characterisations`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `thm-trace-of-ab-equals-trace-of-ba`, `prop-trace-is-linear`, `thm-non-negative-operator-characterisations`, and `def-kernel-and-image-of-a-linear-map`.

Opened the trigonometric and exponential source statements `def-complex-trigonometric-and-hyperbolic-functions`, `cor-complex-trigonometric-and-hyperbolic-addition-formulas`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-sine-and-cosine-derivatives`, `thm-cosine-has-a-smallest-positive-zero`, `def-pi-via-first-positive-cosine-zero`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-double-angle-and-power-reduction-identities`, `thm-cofunction-supplementary-and-reflection-identities`, `cor-pi-is-the-first-positive-sine-zero`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-of-square-roots`, `def-principal-inverse-sine-and-cosine`, `cor-sine-and-cosine-are-one-lipschitz`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, `cor-mean-value-theorem`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `def-principal-inverse-tangent`, `thm-principal-inverse-tangent-calculus`, and `cor-differentiable-implies-continuous`. Their cited statements used here are published. The reflection, measurement, and query-support results that directly carry the quantum claims were also read with their proofs.

Read the primary sources at the relevant passages:

- Brassard, Høyer, Mosca, and Tapp, [*Quantum Amplitude Amplification and Estimation*](https://arxiv.org/pdf/quant-ph/0005055), Section 2, pp. 4–9 (rotation formula and `QSearch` steps 3–7), and Section 2.1, pp. 9–10 (known-amplitude success construction).
- Høyer, [*On Arbitrary Phases in Quantum Amplitude Amplification*](https://arxiv.org/pdf/quant-ph/0006031), Theorem 1, Eq. (5), pp. 1–2; Lemma 1 and Theorems 2–3, pp. 3–4 (matching and phase-mismatch bounds).

## Review and edits

1. **`alg-qa-12-unknown-amplitude-search`, frontmatter `deps` and Definition.** Added the fixed-count amplitude algorithm as a supplier in `deps` and added the explicit classical-output basis measurement after the good/bad instrument, an exact verifier condition for the basis labels designated good, and the reject branch. The old procedure said to verify a “classical candidate” without producing one from its good/bad-only instrument. The correction follows the local output-basis requirement in `def-qa-12-prepared-success-subspace`; BHMT Section 2, pp. 7–8, likewise measures the output and checks its Boolean predicate in `QSearch` steps 3–7. This edge is acyclic and is also in the existing dependency closure of the assigned success and cost consumers.

2. **`cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule`, Statement refuted and Counterexample step 2.1.** Replaced the undefined phrase “high success” with the quantitative claim that reuse gives probability at least $1/2$. The existing example has a unique maximizing count $k=1$ at $a_1=1/4$ and gives probability $0<1/2$ at $a_2=3/4$, so it now refutes a precise statement. The contract's step-2 derivation and finite check were refreshed to record the same threshold.

3. **`research/quantum-computing-algorithms-60-2026-10-15-batch-36.proof-contracts.json`.** Refreshed both consumer citations of the unknown-search Definition (`thm-qa-12-unknown-amplitude-success` and `thm-qa-12-unknown-amplitude-query-cost`) and the counterexample derivation/finite check. The embedded prior boundary-review records on the counterexample retain their pre-reader item hashes as historical evidence; they are not presented as reviews of the repaired bytes. Neither changed item had a `verification.judge` record to remove.

Formatting and validation after the final item edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-qa-12-unknown-amplitude-search.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-qa-12-unknown-amplitude-search.md` — pass (`0 checked, 0 failing`).
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule.md` — pass (`1 checked, 0 failing`).
- `node tools/proof-layout.mjs items/alg-qa-12-unknown-amplitude-search.md items/cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule.md` — pass (`2 items, 2 steps, 0 defects`).

No defect remains unedited in the assigned items or pages.

## Page verdicts

- **`amplitude-amplification` (A): pass.** Its summary accurately describes the supplied-unitary/success-projection setup, endpoint handling, rotation and success results, exact-success access assumptions, and separate query/resource accounting. No page prose edit was needed.
- **`amplitude-amplification-examples` (B): pass after the counterexample statement repair.** Its finite example and summary are consistent with the computed probabilities. B-page prose was not edited.

## Blockers

No mathematical proof blocker remains in batch 36. There is a handoff metadata issue: the item repair adds a same-batch algorithm supplier edge that is absent from `research/quantum-computing-algorithms-60-2026-10-15-batch-36.pages.json`. I left that manifest unchanged because this dispatch authorizes item/page repairs; the owner may need to refresh the generated dependency snapshot if the next mechanical phase requires exact item/manifest dependency agreement.

The refreshed live-run status also reports the run-wide `(spec)` issue at `1-scaffold` (invalid unit prerequisite graph for `def-qc-effective-unitary-matrix-input` in batch 12) and a separate `3a-split` failure for batch 29. Both are outside this reader assignment and were left untouched.

## Coverage note

All 19 assigned A-page items, both B-page items, both assigned pages, and the cited supplier statements needed for the reviewed proof steps were opened. The prepared-subspace definition was opened before its external suppliers, which were checked afterward; thus the initial supplier-first ordering was not maintained for that item. I did not independently re-audit every proof internal to the published transitive trigonometric and linear-algebra suppliers; their cited statements were checked and no defect was observed there. No standalone reader-36 rendered bundle was present among the current batch-36 research artifacts, so the proof-contract quotations and current source carriers were used as the evidence entry points. The frozen batch manifest still has the old dependency snapshot for the repaired randomized-search algorithm.
