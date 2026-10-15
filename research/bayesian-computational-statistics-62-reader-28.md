# Step 3a reader report — batch 28

Run: `bayesian-computational-statistics-62`  
Batch: `28`  
Reader: `reader-28`

## Scope and opened inventory

Opened the batch manifest `research/bayesian-computational-statistics-62-batch-28.pages.json`, the reader brief, and the repository instructions. The assigned pages and all seven assigned items were reviewed:

- A page: `iid-monte-carlo-integration-and-error`
- B page: `iid-monte-carlo-integration-and-error-examples`
- Items: `def-iid-monte-carlo-estimators`, `thm-iid-monte-carlo-mean-moments`, `thm-iid-monte-carlo-mean-consistency`, `thm-iid-monte-carlo-sample-variance-consistency`, `thm-iid-monte-carlo-central-limit`, `ex-gaussian-monte-carlo-integrand`, and `ex-finite-mean-infinite-variance-monte-carlo-integrand`.

The required page dependencies were also opened: `library/probability/central-limit-theorems.md` and `library/statistical-models-and-experiments/detection-and-quantification-limits.md`.

The direct published item suppliers used by the assigned items were opened: `def-identically-distributed-and-iid-random-variables`, `def-partial-sums-and-sample-means`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `thm-change-of-variables-for-expectation`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-variance-adds-for-pairwise-independent-random-variables`, `thm-khinchin-weak-law-for-iid-integrable-variables`, `thm-kolmogorov-iid-l1-strong-law`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `lem-measurable-functions-preserve-independence`, `def-axiom-of-choice`, `def-standard-normal-and-normal-laws`, `thm-lindeberg-levy-iid-central-limit-theorem`, `thm-continuous-mapping-theorem`, `lem-normal-location-scale-mean-and-variance`, `def-countable-choice`, `thm-probability-law-and-distribution-function-correspondence`, `def-random-element-and-real-random-variable`, `thm-real-power-continuity-and-derivatives`, `lem-rational-power-monotone`, `cor-layer-cake-formulas-for-random-variables`, `thm-layer-cake-formula-for-l-p-powers`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `lem-truncated-integrals-of-rational-powers`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `cor-continuous-functions-are-borel-measurable`, `thm-monotone-convergence-for-the-integral`, and `thm-continuous-implies-integrable`.

The current proof-contract carrier `research/bayesian-computational-statistics-62-batch-28.proof-contracts.json` was reviewed as evidence and updated for the two repairs below. No prior author verdict was used as a substitute for the item proofs.

## Repairs

1. In `items/thm-iid-monte-carlo-mean-moments.md`, Step 1.1 now establishes that the identity and the polynomial map used in change of variables are Borel measurable. Step 3.1 now names expectation linearity together with the variance definition for the scaling identity. These details close the measurability and centering steps used to transfer moments and scale the variance. The batch proof contract was updated. The item had no `verification.judge` record to remove.

2. In `items/ex-finite-mean-infinite-variance-monte-carlo-integrand.md`, the moment calculation initially established facts only for the identity variable under the constructed law, while the statement and consistency conclusion concern an arbitrary IID output with that common law. Added `thm-change-of-variables-for-expectation` to `deps` and a step transferring the first absolute and second moments from the identity variable to `Y_1`; this proves both `E[Y_1]=3` and `E[Y_1^2]=+∞`. The proof also applied the bounded Riemann-integrable bridge to `t^{-1/2}` without establishing Riemann integrability on `[1,N]`. Added `thm-continuous-implies-integrable` to `deps` and used it before applying the bridge. Added facts F16–F17 and updated the corresponding proof-contract citations and derivations. The item had no `verification.judge` record to remove.

After the final edits, `reflow.mts` reported both items unchanged; `precheck.mts` passed both; and the single batched proof-layout run reported `2 items, 8 steps, 0 defects`.

## Source checks

Durrett, *Probability: Theory and Examples*, 5th ed., was checked at the cited locations. Theorem 2.2.14, printed p. 65, gives the weak law for IID variables with finite first absolute moment; Theorem 2.4.1, printed pp. 76–78, gives the strong law under that moment hypothesis; and Theorem 3.4.1, printed pp. 144–145, gives the finite-positive-variance IID CLT. The [author-hosted PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) supports the corresponding local supplier interfaces. The weak-law source establishes convergence in probability; the local supplier proof separately establishes the stronger mean-absolute-error conclusion used by the Monte Carlo theorem.

Art Owen’s cited Chapter 2 PDF ([Monte Carlo Theory, Methods and Examples](https://artowen.su.domains/mc/Ch-intro.pdf)) repeatedly timed out when opened. Its exact equation locators therefore were not independently verified. The local arguments and the Durrett checks were sufficient to assess the mathematical claims; no defect was inferred from the unavailable fetch.

## Page verdicts

- `iid-monte-carlo-integration-and-error` (A): sound. Its summary preserves the first- versus second-moment distinction, states the AC condition for the CLT, and accurately limits the floating-point caveat.
- `iid-monte-carlo-integration-and-error-examples` (B): sound after the assigned item repairs. Its examples accurately separate finite-variance Gaussian conclusions from the finite-mean, infinite-second-moment case; the examples state their choice assumptions.

## Uneditable findings and blockers

No confirmed defects remain in out-of-scope pages or published dependencies. No cross-batch dependency defect was found. No blocker remains for this batch review.

## Coverage limitation

The assigned items, their direct published suppliers, and both page prerequisites were opened. I did not re-audit every transitive proof dependency of those published suppliers. Owen’s exact PDF equations could not be inspected because the host timed out; that is the only source-access limitation identified.
