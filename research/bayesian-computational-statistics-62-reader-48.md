# Step 3a reader report — Batch 48

Run: `bayesian-computational-statistics-62`  
Assignment: `reader-48`

## Opened inventory

Read the batch-48 page manifest, proof contracts, and cross-batch dependency record. Opened both assigned pages and their required A-page dependencies:

- `data-assimilation-variational-and-ensemble-methods` — `library/bayesian-computational-statistics/data-assimilation-variational-and-ensemble-methods.md`
- `data-assimilation-variational-and-ensemble-methods-examples` — `library/bayesian-computational-statistics/data-assimilation-variational-and-ensemble-methods-examples.md`
- `numerical-optimization-for-statistical-computation` — `library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md`
- `kalman-smoothing-and-rts-recursion` — `library/bayesian-computational-statistics/kalman-smoothing-and-rts-recursion.md`

Opened all 17 assigned items in manifest dependency order (13 A-page items and four B-page examples):

- `lem-near-iid-exchangeable-arrays-have-convergent-means`
- `lem-probability-convergence-plus-higher-moments-gives-lp-convergence`
- `lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances`
- `def-data-assimilation-problem`
- `alg-ensemble-kalman-filter`
- `alg-four-dimensional-variational-assimilation`
- `alg-three-dimensional-variational-assimilation`
- `lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter`
- `lem-ensemble-kalman-update-preserves-joint-exchangeability`
- `lem-perturbed-observation-ensemble-kalman-moment-bounds`
- `thm-three-dimensional-variational-analysis-is-gaussian-map-update`
- `thm-three-dimensional-variational-assimilation-tracking-under-contraction`
- `thm-perturbed-observation-ensemble-kalman-large-ensemble-limit`
- `ex-finite-ensemble-covariance-fluctuation`
- `ex-four-dimensional-variational-objective-has-two-local-minima`
- `ex-nonlinear-observation-ensemble-kalman-does-not-recover-posterior`
- `ex-linear-gaussian-three-dimensional-variational-analysis`

Opened the current-run supplier bodies used by the assigned items: batch 6 `thm-multivariate-normal-conditional-law`; batch 23 `alg-gradient-descent` and `lem-armijo-backtracking-terminates-for-strict-descent-directions`; batch 41 `def-state-space-filtering-laws` and `thm-state-space-filtering-and-smoothing-laws-exist`; batch 42 `alg-kalman-filter`, `thm-kalman-filter-is-exact-posterior`, `lem-independent-noise-extends-a-conditional-law`, and `lem-one-step-kalman-gaussian-conditioning`; and batch 43 `def-fixed-interval-gaussian-smoothing-law`.

Also opened the relevant published and supporting dependencies: `cor-holder-inequality-for-random-variables`, `thm-holder-inequality-for-integrals`, `def-borel-sigma-algebra`, `def-measurable-function-between-measurable-spaces`, `def-axiom-of-choice`, `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `def-linear-gaussian-state-space-model-with-independent-noises`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`, `def-forward-and-back-substitution-for-triangular-systems`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-least-squares-solutions-and-normal-equation`, `thm-nondegenerate-multivariate-normal-law-has-density`, `thm-bayes-formula-for-dominated-kernels`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-factorization-of-expectations-for-independent-variables`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-dynkin-pi-lambda`, `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`, `thm-measurability-of-integration-against-a-kernel`, `def-general-state-space-model-by-kernels`, `thm-finite-horizon-state-space-kernel-law-exists-uniquely`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, `def-conditional-law-given-a-random-element`, `def-regular-conditional-distribution`, `def-measure-kernel-and-probability-kernel`, `def-standard-borel-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `def-jacobian-matrix-and-gradient`, `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`, `lem-bernoulli-inequality`, and `thm-of-archimedean`.

## Mathematical review

The exchangeable-row weak law and the probability-plus-moment lemma have sound hypotheses and proofs. The sample-covariance argument correctly reduces each entry to a scalar product row and uses the $L^4$ bound to obtain the required $L^2$ closeness. The 3DVAR normal-equation calculation, Gaussian MAP calculation, Kalman comparison, and contraction tracking estimate check out. The EnKF exchangeability, reference-ensemble, moment-bound, and fixed-horizon convergence arguments also check out under the stated linear-Gaussian and positive observation-covariance conditions. The four examples' covariance, quartic-objective, nonlinear-posterior, and scalar-Gaussian calculations are correct.

For the EnKF convergence method, I consulted Mandel, Cobb, and Beezley, [“On the Convergence of the Ensemble Kalman Filter,” arXiv:0901.2951v2](https://arxiv.org/pdf/0901.2951v2): §2, Lemmas 2–3 (exchangeable weak law and sample covariance); §3, equations (3.4)–(3.8) and Lemma 4 (perturbed-observation and reference ensembles); and §4, Lemma 5 and Theorem 1 proof (moment bounds and convergence). The paper states the linear-model, Gaussian-initialization, and Gaussian-observation setting; the assigned proofs supply their local finite-horizon process-noise and singular-state-covariance details rather than relying on the paper for those extensions.

## Edit and validation

Repaired `alg-four-dimensional-variational-assimilation`: the procedure invoked gradient descent on open domains but did not specify the compatible domains and codomains of the time-indexed model and observation maps or require the initial decision vector to belong to the selected domain. The dependency `alg-gradient-descent` requires its initial point in its open objective domain. The revised definition names each $U_t$, gives the map types and matrix dimensions, identifies the strong and weak decision domains, and requires the initial vector to be in the selected domain. This supplies the preconditions for both objectives and the delegated call while preserving the finite-run claim. Updated the `empty` boundary evidence in `research/bayesian-computational-statistics-62-batch-48.proof-contracts.json`. No `verification.judge` record was present to remove; no judgment or stamp was added.

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-four-dimensional-variational-assimilation.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-four-dimensional-variational-assimilation.md` — 0 checked, 0 failing; clean (the algorithm has no proof steps).
- `node tools/proof-layout.mjs items/alg-four-dimensional-variational-assimilation.md` — 1 item, 0 steps, 0 defects.

## Page verdicts

- `data-assimilation-variational-and-ensemble-methods` (A): sound. Its summary accurately states the finite-dimensional definitions, the hypotheses and scope of the 3DVAR and EnKF results, and the absence of a general 4DVAR optimizer-convergence claim.
- `data-assimilation-variational-and-ensemble-methods-examples` (B): sound. Its summary matches the four checked calculations and identifies the model, covariance, and ensemble assumptions relevant to them.

## Defects not edited

None. No defect was found in the opened dependencies outside batch 48. The only confirmed defect was repaired in the assigned in-flight 4DVAR algorithm.

## Blocker

None.

## Coverage note

All 17 assigned items, both assigned pages, both required A-page dependencies, the assigned proof-contract entries, and the direct supplier bodies needed for the mathematical checks were opened. Supporting definitions and results cited in those supplier proofs were checked at their relevant statements and proof steps. The external EnKF paper was used as a comparison source; the assigned local arguments were checked independently.
