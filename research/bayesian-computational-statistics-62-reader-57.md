# Step 3a reader report — batch 57

Run: `bayesian-computational-statistics-62`  
Role: reader  
Scope: batch `57`

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/statistical-and-computational-error-accounting.md` (A page)
- `library/bayesian-computational-statistics/statistical-and-computational-error-accounting-examples.md` (B page)

Assigned items, reviewed with suppliers before their consumers:

- `def-statistical-and-computational-error-ledger`
- `thm-pathwise-error-ledger-decomposition`
- `thm-error-ledger-mse-covariance-identity`
- `thm-independent-replicate-variance-estimator`
- `cor-independent-replicate-mean-clt`
- `ex-bootstrap-finite-b-versus-sampling-error`
- `ex-permutation-pvalue-resolution`
- `ex-euler-discretization-bias-and-path-variance`
- `ex-rqmc-replicate-error-estimate`
- `ex-dot-product-roundoff-and-conditioning`
- `ex-correlated-error-components`

Supporting dependency items opened for the assigned proof paths:

- Probability, moments, independence, and limits: `def-probability-measure`, `def-random-element-and-real-random-variable`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `def-moments-variance-and-covariance`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-factorization-of-expectations-for-independent-variables`, `def-identically-distributed-and-iid-random-variables`, `thm-lindeberg-levy-iid-central-limit-theorem`, `def-axiom-of-choice`.
- Bootstrap and finite sampling: `def-statistical-experiment`, `def-resampling-sampling-unit-contract`, `def-measurable-space`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-empirical-measure`, `lem-empirical-measure-is-a-probability-measure`, `def-statistic-and-estimator`, `def-finite-probability-space-and-event`, `def-finite-cardinality`, `thm-cardinality-of-a-set-of-functions`, `thm-product-rule`, `thm-subset-of-a-finite-set`, `def-law-or-distribution-of-a-random-element`, `def-independent-sigma-algebras-and-events`, `alg-n-out-of-n-bootstrap-from-empirical-law`, `thm-bootstrap-draws-are-conditionally-iid-empirical-law`.
- Finite-group permutation inference: `def-group`, `def-independent-random-elements`, `def-group-action`, `def-finite-group-randomization-test`, `def-orbit-rank-p-value`, `def-uniform-finite-probability-space`, `lem-finite-multiset-randomized-rank-is-uniform`, `def-conditional-probability`, `lem-finite-probability-basic-laws`, `thm-finite-group-randomization-validity`.
- Euler and function properties: `cor-mean-value-theorem`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-chain-rule`, `cor-differentiable-implies-continuous`, `lem-measurable-functions-preserve-independence`.
- Floating-point analysis: `def-standard-relative-floating-point-model-and-unit-roundoff`, `lem-product-of-one-plus-deltas-gives-theta-n`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`.

Also opened `research/bayesian-computational-statistics-62-batch-57.proof-contracts.json` and the current batch-50 manifest entries for the bootstrap algorithm and conditional-IID theorem. The batch-50 items are suppliers in the dependency closure of `ex-bootstrap-finite-b-versus-sampling-error`.

## Review results

- `def-statistical-and-computational-error-ledger`: its scalar-domain restrictions, stage definitions, and caveats about conditioning, independence, and deterministic quadrature are coherent with the cited measurability result.
- `thm-pathwise-error-ledger-decomposition`: the telescoping identity and triangle bound hold, including the empty chain.
- `thm-error-ledger-mse-covariance-identity`: square integrability supplies the needed first moments and integrable cross-products; the bias and covariance correction and the pairwise-independence consequence are correct.
- `thm-independent-replicate-variance-estimator`: the finite-sample calculation gives the stated unbiased estimate of the replicate-mean variance for every `R >= 2`.
- `cor-independent-replicate-mean-clt`: the normalization matches the Lindeberg–Levy theorem, with AC and positive finite variance stated and used.
- `ex-bootstrap-finite-b-versus-sampling-error`: the observed-sample probability, empirical bootstrap law, finite-`B` realization, variance, and signed error chain calculate correctly. The batch-50 algorithm and conditional-IID theorem support the stated conditional law and make no validity claim.
- `ex-permutation-pvalue-resolution`: the orbit rank, plus-one realization, grid, and difference are correct; the example does not transfer the exact-orbit validity result to the finite-`B` value.
- `ex-euler-discretization-bias-and-path-variance`: the exact endpoint, Euler target, bias, replicate variance, and error decomposition are correct under the stated solution and IID-path assumptions.
- `ex-rqmc-replicate-error-estimate`: the replicate mean, squared deviations, and estimate `7/900` are correct, with computation variability kept distinct from data-sampling variation.
- `ex-dot-product-roundoff-and-conditioning`: the exact and rounded dot products, normal-range checks, `gamma_3` bound, and condition ratio are correct under the stated binary64 arithmetic.
- `ex-correlated-error-components`: the two-point construction has unit component variances, covariance one, and sum mean square four.

### Page verdicts

- `statistical-and-computational-error-accounting`: sound after the summary correction below; no remaining page defect found.
- `statistical-and-computational-error-accounting-examples`: the six summaries match their examples; no page defect found.

## Edit and evidence

Edited the A-page Summary sentence that said floating-point bounds require “normal-range and conditioning hypotheses.” The dot-product theorem requires $n\,u<1$ and normal-range products and sums; its statement does not require a condition-number hypothesis. The example uses the condition ratio to explain when cancellation makes the absolute error bound weak relative to the exact result. The summary now states these separately.

No item file was changed. Therefore no proof-contract update, judge-record removal, item reflow, precheck, or proof-layout run was triggered.

## Defects not editable in this assignment

None found.

## Blocker and coverage note

There was no content blocker. The live autopilot status recomputation fell back to its last report because `tools/step6-finalize.mjs` is missing; that fallback identified the run as active in Step 3a. The review checked the sources needed for the assigned inference paths, not every unrelated transitive ancestor of each published supplier.
