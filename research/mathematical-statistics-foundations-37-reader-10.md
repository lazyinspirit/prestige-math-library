# Step 3a reader report — batch 10

Run: `mathematical-statistics-foundations-37`  
Batch: `10`  
Reader: `reader-10`

## Opened inventory

- Assigned A page: `library/mathematical-statistics/gaussian-orthogonal-decomposition-and-quadratic-forms.md`.
- Assigned B page: `library/mathematical-statistics/gaussian-orthogonal-decomposition-and-quadratic-forms-examples.md`.
- Assigned A-page items, reviewed in dependency order: `def-chi-square-law`; `thm-orthogonal-transform-preserves-standard-normal-product-law`; `lem-positive-df-chi-square-has-density-and-regular-cdf`; `thm-orthogonal-projection-has-independent-chi-square-sums`; `def-student-t-and-f-laws`; `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing`; `thm-normal-mean-residual-independence-and-exact-t-pivot`; `thm-gaussian-linear-model-qr-and-exact-t-f-pivots`.
- Assigned B-page items: `cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f`; `ex-one-sample-unknown-variance-t-interval`; `ex-fixed-design-regression-contrast-and-f-test`.
- Also opened the assigned manifest `research/mathematical-statistics-foundations-37-batch-10.pages.json` and proof contracts `research/mathematical-statistics-foundations-37-batch-10.proof-contracts.json`. Checked the summaries of all nine page-level prerequisites listed for the A page: `estimators-and-randomized-procedures`, `independence-borel-cantelli-and-zero-one-laws`, `weak-convergence-tightness-and-representation`, `central-limit-theorems`, `fourier-transform-convolution-and-approximate-identities`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `product-measures-and-the-fubini-tonelli-theorems`, and `reeb-stability-and-global-foliation-constructions`.
- Opened the relevant Statement or Definition sections of the 36 distinct direct item dependencies: `cor-continuous-functions-are-borel-measurable`; `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`; `def-axiom-of-choice`; `def-countable-choice`; `def-cumulative-distribution-function-of-a-random-variable`; `def-dirac-measure`; `def-independent-random-elements`; `def-law-or-distribution-of-a-random-element`; `def-multivariate-normal-law`; `def-orthogonal-projection`; `def-polar-surface-measure-on-the-unit-sphere`; `def-standard-normal-and-normal-laws`; `def-statistic-and-estimator`; `lem-axiom-of-choice-implies-countable-choice`; `lem-characteristic-function-of-a-multivariate-normal-law`; `lem-measurable-functions-preserve-independence`; `lem-normal-density-has-total-mass-one`; `prop-orthogonal-projection-formula-and-linearity`; `prop-pythagorean-parallelogram-and-polarisation-identities`; `thm-continuity-from-below-for-measures`; `thm-derivative-of-exponential`; `thm-dominated-convergence`; `thm-finite-dimensional-orthogonal-decomposition`; `thm-fourier-transform-of-a-finite-complex-measure`; `thm-gram-schmidt-orthonormalisation`; `thm-grouping-independent-sigma-algebras`; `thm-independent-random-elements-have-product-joint-law`; `thm-intermediate-value`; `thm-least-squares-solutions-and-normal-equation`; `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`; `thm-polar-coordinates-formula-for-lebesgue-measure`; `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`.
- `def-statistic-and-estimator` is a draft supplier in current-run batch 2; its definition and exact use in the assigned proofs were checked. The other direct suppliers above are published items.

## Review and edit

Reviewed statements, titles, definitions, assumptions, dependency use, proofs, computations, witnesses, contracts, and both page summaries. The orthogonal invariance proof correctly converts characteristic functions to the stated Fourier convention and applies finite-measure uniqueness under its hypotheses. The chi-square density constant and endpoint behavior follow from the local polar-coordinate supplier, including degree one and rank-zero cases. The t/F laws, CDF regularity, normal-mean pivot, regression pivots, arithmetic examples, and Rademacher calculations are supported by their stated hypotheses and suppliers.

Repaired the finite witness setup in `items/cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f.md` under **Counterexample / Given**. It now specifies the eight-point space `{-1,1}^3` with uniform mass `1/8` and uses the coordinate maps, making existence and independence of the three fair signs explicit. The witness calculations are unchanged. Added the corresponding `finite-rademacher-product-space` check to the counterexample's proof contract. No stale `verification.judge` record was present.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f.md` — 1 item, 3 steps, 0 defects.

## Page verdicts

- `gaussian-orthogonal-decomposition-and-quadratic-forms`: **sound**. The summary accurately describes the authored results and their positive-degree denominator convention.
- `gaussian-orthogonal-decomposition-and-quadratic-forms-examples`: **sound**. The summary accurately describes the two calculations and the Rademacher counterexample; its witness setup is now explicit.

## Remaining defects and blockers

No confirmed or suspected defects remain in the assigned pages or items. No defect was found in the current-run batch-2 supplier. No blocker.

## Coverage note

All assigned pages and items, their proof contracts, the nine listed page-level prerequisite summaries, and the 36 distinct direct item suppliers' relevant statements or definitions were opened. The published supplier proofs were not re-audited in full; their stated hypotheses and conclusions were checked against each cited use. The local proofs sufficed for the assigned mathematics, so no external source search was needed.
