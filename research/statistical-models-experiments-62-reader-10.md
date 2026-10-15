# Step 3a reader report — batch 10

Run: `statistical-models-experiments-62`  
Batch: `10`  
Role: reader

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/stratified-sampling-and-allocation.md`
- `library/statistical-models-and-experiments/stratified-sampling-and-allocation-examples.md`

Required pages opened as context:

- `library/statistical-models-and-experiments/finite-populations-and-sampling-designs.md`
- `library/statistical-models-and-experiments/horvitz-thompson-variance-and-srswor.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`

All seven assigned items opened:

- `def-stratified-sampling-design-and-estimator`
- `thm-stratified-total-unbiasedness-and-variance`
- `thm-neyman-allocation-minimizes-stratified-variance`
- `thm-cost-optimal-stratified-allocation`
- `ex-proportional-and-disproportionate-stratified-allocation`
- `ex-zero-variance-stratum-allocation-boundary`
- `ex-rounding-neyman-allocation-to-integer-sample-sizes`

Dependency items opened to check the definitions, estimates, and variance arguments:

- `def-algebra-of-subsets`, `def-sigma-algebra`, `def-measurable-space`, `def-measure`, `def-measure-space`, `def-probability-measure`, `def-finite-probability-space-and-event`
- `def-expectation-on-a-finite-probability-space`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`
- `def-statistic-and-estimator`, `def-unbiased-estimator-and-umvu`, `def-borel-sigma-algebra`, `def-indicator-random-variable`, `def-inclusion-covariance-difference`
- `lem-finite-population-design-law-is-a-probability-measure`, `thm-linearity-of-expectation`, `lem-indicator-expectation-and-products`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-expectation-of-an-indicator-is-probability`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-covariance-bilinearity-and-symmetry`, `thm-variance-of-a-finite-sum`
- `def-finite-population-and-sampling-design`, `def-simple-random-sampling-without-replacement`, `thm-horvitz-thompson-total-is-design-unbiased`, `thm-horvitz-thompson-variance-and-pair-inclusion-estimator`, `thm-srswor-mean-variance-and-finite-population-correction`

I also consulted the batch manifest and batch-10 proof contracts as navigation and evidence; neither was treated as a mathematical verdict. Review focused on the current item and page text. I checked the directly used dependency claims and their immediate variance/expectation support; I did not independently re-audit remote foundational prerequisite closures unrelated to these arguments.

## Mathematical review

- The stratified design specifies a finite nonempty partition, admissible integer sample sizes, the normalized product law for independent within-stratum SRSWOR, the weighted estimator, and the fixed-value convention. It defines within-stratum variance only where needed for noncertainty strata.
- In the unbiasedness and variance theorem, finite inclusion counting gives each unit in stratum `h` inclusion probability `n_h/N_h`. The Horvitz–Thompson result therefore applies. The per-stratum variance follows from the SRSWOR correction; the displayed product law makes cross-stratum covariances zero. The certainty case is handled as a constant contribution. The expectation notation change between the observed-record and design sample spaces is immediately supplied by the finite-population definition's `E_y^d[h] = E_d[h ∘ O_y]` clause.
- The fixed-size and cost-optimal continuous allocation proofs correctly reduce the varying part of the variance to `sum a_h^2/x_h`, use the finite pairwise-square identity, and establish the equality cases and unique normalized allocations. Their positive-variance, positive-budget/cost, and uncapped-continuous qualifications are preserved.
- The examples' arithmetic checks: variances `128/3` and `80` in the two-allocation comparison; zero-variance-stratum admissible allocation variance `27/2`; and continuous weights yielding `(3/8, 45/8)`, nearest-integer `(0, 6)`, plus the feasible `(1, 5)` example variance `92`.

## Page verdicts

- `stratified-sampling-and-allocation`: **Pass.** The summary accurately states the design, estimator, variance, continuous allocation formulas, and their constraint caveats.
- `stratified-sampling-and-allocation-examples`: **Pass.** The summary accurately describes the three examples and does not claim that the feasible integer correction is generally optimal.

The three required pages were opened for context and were not assigned verdicts in this batch.

## Edits and unresolved defects

- Edits: none. No confirmed defect required an authorized item or A-page repair. B-page prose was left unchanged.
- Uneditable defects: none identified in the assigned items, assigned pages, or dependency claims reviewed.
- Blocker: none.

No item source was changed, so reflow, precheck, and proof-layout were not run.
