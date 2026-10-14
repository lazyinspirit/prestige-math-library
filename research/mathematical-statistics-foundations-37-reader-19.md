# Step 3a reader report — batch 19

Run: `mathematical-statistics-foundations-37`  
Batch: `19`  
Date: 2026-10-14

The live `.autopilot/mathematical-statistics-foundations-37` status showed the
run in `3a-read`, with no worker currently running. I reviewed the assigned
carriers independently and used the manifest and contracts for navigation,
not as mathematical verdicts.

## Opened inventory

### Assigned pages

- `library/mathematical-statistics/sparse-high-dimensional-estimation-and-covariance.md` (A page)
- `library/mathematical-statistics/sparse-high-dimensional-estimation-and-covariance-examples.md` (B page)

### Assigned A-page items

- Lasso definitions and results: `def-gaussian-sequence-sparse-means-model`, `def-subgaussian-fixed-design-regression-model`, `def-fixed-design-incoherence-condition`, `def-restricted-eigenvalue-condition`, `def-lasso-estimator`, `lem-lasso-objective-has-minimizer`, `thm-lasso-basic-inequality`, `lem-incoherence-implies-restricted-eigenvalue`, `lem-fixed-design-subgaussian-score-concentration`, `thm-lasso-prediction-and-l1-error-under-incoherence`, `def-soft-thresholding-function`.
- Covariance definitions and concentration: `def-sample-covariance-and-operator-norm-loss`, `def-weak-lq-sparse-covariance-class`, `def-minimax-squared-operator-risk`, `lem-products-of-subgaussian-coordinates-are-subexponential`, `lem-symmetric-matrix-operator-norm-rayleigh`, `lem-epsilon-net-controls-symmetric-operator-norm`, `thm-centered-subgaussian-sample-covariance-bound`, `alg-entrywise-thresholded-sample-covariance`, `lem-weak-lq-thresholded-covariance-row-sum`, `lem-directional-tail-implies-subgaussian-mgf`, `lem-directional-tail-products-are-subexponential`, `thm-weak-lq-sample-covariance-entrywise-deviation`, `thm-thresholded-sparse-covariance-high-probability-bound`.
- Rate and lower-bound items: `cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension`, `lem-gaussian-sparse-covariance-mixture-lower-bound`, `lem-weak-lq-thresholded-covariance-expected-risk`, `lem-gaussian-kullback-leibler-covariance-formula`, `lem-diagonal-covariance-minimax-lower-bound`, `thm-thresholded-sparse-covariance-minimax-rate`.

### Assigned B-page items

- `ex-orthogonal-design-lasso-is-soft-thresholding`
- `cex-collinear-design-fails-re-and-incoherence`
- `ex-sample-covariance-rank-deficiency-when-p-exceeds-n`

### Opened dependency items

These direct or proof-critical suppliers were opened to check definitions,
constants, domains, and cited arguments:

- Foundational and Lasso: `def-axiom-of-choice`, `def-independent-random-elements`, `def-standard-normal-and-normal-laws`, `def-subgaussian-variable-and-vector`, `def-euclidean-spheres-and-closed-balls`, `def-p-norms-on-rn`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-cauchy-schwarz-finite`, `thm-finite-subgaussian-maximum-and-epsilon-net`.
- Probability, moments, and covariance: `lem-probability-measure-basic-identities`, `def-identically-distributed-and-iid-random-variables`, `def-moments-variance-and-covariance`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-borel-sigma-algebra`, `def-probability-measure`, `def-product-measure-on-sigma-finite-spaces`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-independent-random-elements-have-product-joint-law`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `cor-layer-cake-formulas-for-random-variables`, `thm-monotone-convergence-for-the-integral`, `thm-dominated-convergence`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-subexponential-independent-sums`, `thm-factorization-of-expectations-for-independent-variables`, `lem-measurable-functions-preserve-independence`, `thm-jensen-inequality-for-expectation`, `cor-cauchy-schwarz-for-random-variables`, `thm-holder-finite`.
- Matrix and net arguments: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `lem-epsilon-net-of-unit-sphere-has-cardinality-bound`.
- Gaussian mixture, KL, and testing: `def-countable-choice`, `def-multivariate-normal-law`, `def-total-variation-distance-for-probability-laws`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `thm-determinant-multiplicative`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-change-of-variables-for-expectation`, `def-kullback-leibler-divergence`, `def-trace-of-a-square-matrix`, `def-determinant-of-a-square-matrix`, `thm-determinant-is-product-of-eigenvalues`, `thm-operator-norm-is-the-largest-singular-value`, `def-frobenius-matrix-norm`, `def-metric-space`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-statistic-induces-deterministic-procedure`, `thm-fano-packing`, `thm-product-kl-additivity`.
- Rank argument: `cor-matrix-rank-nullity`, `def-row-space-column-space-nullspace-and-matrix-ranks`.

The batch-19 proof contract file contains 33 entries, matching the 30 A-page
items and three B-page items. I checked its cited suppliers, derivation rows,
boundary cases, and finite-smoke assertions against the corresponding current
proofs and witnesses.

## Review and repair

### Edit made

In `items/lem-fixed-design-subgaussian-score-concentration.md:43`, Facts &
Assumptions [F2], the local finite-maximum fact used `P(max |Z_j| > t)` while
step 2.1's zero-noise branch requires `P(max |Z_j| >= 1/m)`. The opened supplier
`thm-finite-subgaussian-maximum-and-epsilon-net`, Statement, supplies the
non-strict `>=` tail bound (including probability zero for zero proxy). I
changed the local fact to that exact bound. In
`research/mathematical-statistics-foundations-37-batch-19.proof-contracts.json`,
the F2 citation already quoted the supplier's non-strict statement; I updated
the zero-boundary evidence to record that the branch uses this bound. The item
had no `verification.judge` record to remove.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-fixed-design-subgaussian-score-concentration.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-fixed-design-subgaussian-score-concentration.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-fixed-design-subgaussian-score-concentration.md` — 1 item, 2 steps, 0 defects.

### Other mathematical checks

- The Lasso minimizer proof establishes continuity, coercivity, compactness,
  and convexity; the basic inequality and cone constraint follow from the
  stated score event. The incoherence-to-RE constants and the final prediction
  and coefficient constants follow from those bounds. The orthogonal-design
  example's scalar minimization is correct.
- The thresholding algorithm states its inputs, threshold, diagonal treatment,
  equality branch, and symmetric output. The weak-lq row-sum estimate includes
  both `q=0` and `0<q<1`; the entrywise deviation and high-probability constants
  follow from their stated event bounds.
- The dense covariance result handles the zero-proxy case and both oracle- and
  sample-centered estimators. The expected-risk lemma controls the bad event
  using finite eighth moments and the `p>=n^beta`, `a<=1` hypotheses.
- The diagonal lower bound applies when `c=0` and in the zero effective-count
  case. I checked the sparse Gaussian-mixture construction's covariance class
  membership, Gaussian cross-density integral, overlap bound, conditional
  nuisance-row estimate, total-variation reduction, and testing separation.
  The final theorem's small-count branch is controlled by the diagonal lower
  bound; its large-count branch uses the mixture lower bound; the zero-estimator
  branch gives the cap when `r_{n,p}>=1`.
- The collinear design witness and the centered sample-covariance rank argument
  are correct.

The primary Cai–Zhou paper was checked at the relevant locations in the
[author-hosted PDF](https://faculty.wharton.upenn.edu/wp-content/uploads/2013/05/Cai_2012_Optimal_Rates_Convergence_1.pdf): Section 2, printed p. 2392, states the `p>=n^beta` regime
and Theorem 1's uncapped rate; Section 3, pp. 2398–2401, gives the Gaussian
mixture lower-bound construction; Section 4, pp. 2401–2403, defines the
threshold estimator and its risk bound; Section 7.3, pp. 2410–2413, treats
the mixture-affinity argument. Theorem 1 does not state an upper restriction
on `log(p)/n`. The assigned counterexample establishes the need for a cap:
for `p_n=ceil(exp(n^2))`, the zero law remains in the `q=0` class, the zero
estimator has risk at most `4 tau^2`, while the uncapped rate expression tends
to infinity. The local sparse-mixture proof was checked directly rather than
relying on the paper's technical lemma as an unproved supplier.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `sparse-high-dimensional-estimation-and-covariance` (A) | Summary matches the assigned Lasso, dense covariance, weak-lq thresholding, and capped-rate results. No page prose edit needed. |
| `sparse-high-dimensional-estimation-and-covariance-examples` (B) | Summary matches the orthogonal-design, collinear-design, and rank-deficiency items. No page defect found; B-page prose is read-only for this role. |

## Unedited defects and blockers

No defects remain in assigned carriers that I could not edit. No blocker.

## Coverage note

I opened all 33 assigned items, both assigned pages, and the direct dependency
items needed to verify their claims. The referenced covariance paper's theorem
and relevant main-text argument locations are recorded above. No assigned
carrier or proof-critical direct dependency was left unread, and no unresolved
mathematical uncertainty remains.
