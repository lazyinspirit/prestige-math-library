# Step 3a reader report — batch 88

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `88`

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/iterative-regularization-and-early-stopping.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/iterative-regularization-and-early-stopping-examples.md`

### Assigned items

All 17 assigned items were opened:

- A page: `alg-landweber-iteration-with-discrepancy-stopping`, `alg-golub-kahan-lsqr-with-givens-and-status`, `lem-local-lipschitz-derivative-quadratic-remainder`, `alg-iteratively-regularized-gauss-newton-step`, `thm-lsqr-residual-minimizes-on-krylov-subspace`, `lem-landweber-filter-and-residual-identities`, `lem-irlgnm-one-step-error-recurrence`, `thm-landweber-source-and-noise-error-bounds`, `cor-landweber-discrepancy-stopped-convergence-rate`, `lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds`, `alg-anchored-irgnm-with-discrepancy-stopping`, `lem-anchored-irgnm-fixed-reference-error-and-residual`, `thm-irlgnm-local-source-condition-discrepancy-convergence`.
- B page: `cex-full-lsqr-can-amplify-data-noise`, `ex-nonlinear-exponential-kinetics-one-step`, `ex-landweber-semiconvergence-on-a-compact-diagonal-operator`, `ex-three-pixel-blur-landweber-reconstruction`.

### External dependency items opened

The following suppliers were opened to verify definitions, proof steps, and example computations:

- Hilbert and operator facts: `def-hilbert-space`, `def-hilbert-space-adjoint`, `def-bounded-linear-operator`, `def-operator-norm`, `def-compact-linear-operator`, `def-natural-numbers`, `def-countable-choice`, `def-axiom-of-choice`, `def-orthogonality-and-orthogonal-complement`, `thm-hilbert-adjoint-properties`, `lem-hilbert-tikhonov-normal-operator-invertible`, `lem-hilbert-tikhonov-noise-amplification-bound`, `def-integer-power`.
- Matrix and Krylov facts: `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-transpose-of-a-matrix`, `def-euclidean-inner-product`, `def-krylov-subspace-of-a-matrix-and-start-vector`, `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`, `def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`, `thm-least-squares-solutions-and-normal-equation`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`.
- Spectral and power facts: `def-compact-spectral-filter-and-qualification`, `lem-compact-gram-operator-is-positive-and-has-kernel`, `lem-compact-spectral-multiplier-is-well-defined`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`, `lem-spectrum-of-a-positive-operator-is-nonnegative`, `thm-spectrum-is-nonempty-compact-and-norm-bounded`, `cor-weierstrass-approximation-on-a-closed-interval`, `def-real-and-complex-inner-product-space`, `def-real-power`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `cor-mean-value-theorem`, `lem-geometric-sequence-null`.
- Banach integration and differentiation: `lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves`, `lem-linearity-of-the-bochner-integral`, `lem-bochner-integral-norm-inequality`, `def-bochner-integrable-function`, `def-frechet-derivative-between-banach-spaces`, `def-banach-valued-simple-function-and-integral`, `lem-banach-valued-simple-integral-is-well-defined`, `thm-lebesgue-measure-of-a-box-of-every-kind`.
- Scalar calculus and sequence examples: `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-exponential-reciprocal-and-positivity`, `def-natural-logarithm`, `lem-finite-rank-operators-are-compact`, `thm-norm-limit-of-compact-operators-is-compact`, `lem-square-summable-sequences-form-a-hilbert-space`, `def-square-summable-family-on-an-arbitrary-index-set`, `ex-lebesgue-measure-of-intervals-boxes-and-the-rationals`.

## Repairs and evidence

- In `lem-local-lipschitz-derivative-quadratic-remainder`, Facts & Assumptions originally attributed both linearity and the value of a constant-function integral to `lem-linearity-of-the-bochner-integral`. The opened supplier states linearity but not the constant-function value. I separated these facts: [F2] cites linearity, while [F6] derives the constant integral from the one-cell simple-function formula and the Lebesgue measure of `[0,1]`. I added those two direct dependencies. Proof step 1.1 now cites [F6] for the constant integral and [F2] for subtraction. The claim is unchanged.
- In `cex-full-lsqr-can-amplify-data-noise`, proof step 2.1 said the exact one-step solve takes the algorithm's breakdown return branch. The opened LSQR definition tests discrepancy before bidiagonalization-breakdown, and the stated data already pass the initial discrepancy test. I corrected the step to say that `β₂=0` marks bidiagonalization breakdown after the projected iterate is formed, while the assigned discrepancy-stopped run returns at index zero. The counterexample computation and claim are unchanged.
- In `alg-anchored-irgnm-with-discrepancy-stopping`, the `evaluation-failure` and `solve-unverified` branches lacked exact outcome conditions and return tuples. I specified the tagged exact-call outcomes, the tuples returned on failure, and the exact-solution success condition. I also made the real/complex Fréchet differentiability condition explicit and added its real supplier and the natural-number supplier to `deps`. I checked the two consumers: `lem-anchored-irgnm-fixed-reference-error-and-residual` still uses the same exact update, and `thm-irlgnm-local-source-condition-discrepancy-convergence`'s finite-run caveat now has defined failure statuses.
- Updated `research/numerical-optimization-dynamics-2026-10-16-batch-88.proof-contracts.json` with the new local-lemma suppliers, revised LSQR step evidence, and the current anchored-algorithm Definition quoted by both consumers. None of the three edited items had a `verification.judge` record to remove.

## Checks

- `reflow` and `precheck` were run on all three changed items. The final prechecks passed for the two proof-bearing items; the algorithm precheck command reported `0 checked, 0 failing` because the definition has no proof block. The initial local-lemma precheck reported `bad-tag(F2a)`, which I corrected to the valid fact tag [F6] before the passing run.
- Final combined proof-layout check: 3 items, 4 steps, 0 defects.

## Unedited defects

None identified. No withdrawal was proposed.

## Page verdicts

- `iterative-regularization-and-early-stopping` (A): the authored Landweber, LSQR, unanchored Gauss–Newton, and anchored IRGNM claims and proofs are supported by their stated hypotheses and suppliers after the local citation repair. The page summary accurately distinguishes the anchored convergence theorem from the unanchored method.
- `iterative-regularization-and-early-stopping-examples` (B): the computations and counterexample are sound after the LSQR status correction. The page summary accurately describes the examples and the discrepancy-stopped zero-solution case.

## Blocker and coverage note

No batch-88 blocker remained. The active-run status also showed an unrelated `3a-split` blocker: `split-70` had failed three times. Three elementary supplier files (`def-orthogonality-and-orthogonal-complement`, `def-bounded-linear-operator`, and `def-integer-power`) were opened late in the review after some assigned consumers; I checked their relevant definitions but did not reread those consumers to restore supplier-first session order. I did not audit the full transitive dependency closures of the external suppliers.
