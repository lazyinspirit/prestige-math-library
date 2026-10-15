# Step 3a reader report — batch 29

Run: `bayesian-computational-statistics-62`  
Batch: `29`  
Assignment: `variance-reduction-and-randomized-integration` and its examples companion.

## Run and scope

The autopilot status showed the run in `3a-read`, with no worker currently running. The assigned batch manifest contains one A page with nine items and one B page with six examples. The working tree already contained many unrelated changes; this review changed only the assigned same-sample theorem and the current batch-29 proof contract, and added this report.

## Opened inventory

Assigned pages:

- `variance-reduction-and-randomized-integration` (A, draft): opened `library/bayesian-computational-statistics/variance-reduction-and-randomized-integration.md`.
- `variance-reduction-and-randomized-integration-examples` (B, draft): opened `library/bayesian-computational-statistics/variance-reduction-and-randomized-integration-examples.md`.

Assigned A items, reviewed in supplier order:

- `def-control-variate-estimator`
- `thm-control-variate-unbiasedness-and-optimal-coefficient`
- `def-antithetic-randomized-sampling`
- `lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance`
- `thm-antithetic-variance-and-monotone-sufficiency`
- `def-stratified-monte-carlo-estimator`
- `thm-stratified-unbiasedness-variance-and-proportional-allocation`
- `thm-same-sample-control-coefficient-remainder-is-op-one-over-n`
- `thm-independent-pilot-control-variate-is-conditionally-unbiased`

Assigned B examples, reviewed after their A suppliers:

- `ex-perfect-control-variate`
- `ex-uncorrelated-control-variate`
- `ex-monotone-antithetic-pair`
- `ex-proportional-stratification-variance-reduction`
- `ex-same-sample-control-regression-bias`
- `ex-independent-pilot-control-variate`

I opened the direct published supplier items used by the assigned proofs: `def-identically-distributed-and-iid-random-variables`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`, `def-conditional-expectation-given-a-sigma-algebra`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-cauchy-schwarz-for-random-variables`, `cor-chebyshev-inequality-for-random-variables`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-covariance-bilinearity-and-symmetry`, `thm-factorization-of-expectations-for-independent-variables`, `thm-change-of-variables-for-expectation`, `thm-independent-random-elements-have-product-joint-law`, `thm-grouping-independent-sigma-algebras`, `lem-measurable-functions-preserve-independence`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence`, and `thm-kolmogorov-iid-l1-strong-law`.

For the A page's declared page prerequisites, I also opened `iid-monte-carlo-integration-and-error` and `conditional-expectation`. I opened `thm-iid-monte-carlo-mean-consistency`, which the former page summary cites. No assigned item imports a theorem from that IID Monte Carlo page; batch 29 proves its own moment and variance assertions. The pilot result uses the published conditional-expectation definition and proves the event-integral characterization directly.

## Mathematical review and repair

The control-variate theorem correctly derives unbiasedness, the variance identity, and the scalar and positive-definite vector optima. The antithetic theorem correctly proves equal marginals, independence across pairs, the exact covariance comparison, and the stated coordinatewise-monotone sufficient condition. The opposite-monotonicity lemma handles square-integrable functions by bounded clamping and an $L^2$ limit. The stratified theorem states finite positive-probability strata and independent draws, proves the weighted variance, and limits its comparison to integer proportional allocation against an IID mean of the same total size. The pilot theorem's integrability and sigma-algebra independence hypotheses support its conditional expectation calculation. The six examples' finite calculations and conclusions check out.

I repaired `items/thm-same-sample-control-coefficient-remainder-is-op-one-over-n.md`. Its former Step 2.1 claimed that centering raw moments changes them only by products of sample-mean errors of order $O_P(n^{-1})$. For nonzero population means, the difference between raw second moments and population-centered covariances also has first-order terms, such as $\theta(\bar h_n-\theta)^{\mathsf T}$, which are generally only $O_P(n^{-1/2})$. The former sentence therefore did not establish the asserted root-$n$ covariance estimates.

The repaired step uses $W_i=h(X_i)-\theta$ and $V_i=f(X_i)-Pf$. It proves the centered first and second sample moments are $O_P(n^{-1/2})$ by Chebyshev and a finite union bound, then writes the empirical covariance corrections as products of centered sample-mean errors, which are $O_P(n^{-1})$. I also made the infinite IID sequence explicit because the proof uses the strong law to establish almost-sure eventual invertibility. This leaves the theorem's conclusion and the $n=2$ example unchanged. I reviewed `ex-same-sample-control-regression-bias` as the direct consumer; its finite-sample calculation remains valid.

The batch-29 proof contract was regenerated for the repaired item. I updated its current boundary-evidence step references following the canonical phase numbering. No `verification.judge` record was present on the item. The contract's nested `template_review` records remain preserved as historical evidence, but their item and row hashes bind the pre-repair carrier; they must not be treated as current-hash reviews.

## Citation review

Goodman's *Lecture Notes on Monte Carlo Methods*, Chapter 3 §2, PDF pp. 1–3, directly states the fixed-coefficient estimator, scalar variance quadratic and optimum, and vector normal equations. The accessible source text agrees with the claims used here. Owen's Chapter 8 §8.2 source excerpt states the antithetic variance/correlation relation and monotonicity criterion; §8.4 describes the finite-stratum design; §8.9 covers the fixed control-variate estimator. Glasserman's §4.1.3, printed p. 200, discusses same-sample dependence/bias, the $O(1/n)$ order, and independent pilot fitting; §4.2, printed p. 205, describes reflected uniform pairs. I found no citation-inaccuracy defect.

The browser could not load Owen's full PDF (timeout) or Glasserman's full book PDF (content-size limit). The review above uses accessible excerpts for the cited sections; it is not a complete rereading of either large PDF. I did not independently audit the full transitive closures of the published supplier items.

## Page verdicts

- `variance-reduction-and-randomized-integration`: **Pass.** Its summary accurately states the fixed-control scope, positive-definite vector case, exact antithetic comparison, finite-stratum variance, proportional-allocation comparator, same-sample remainder hypotheses, and independent-pilot condition. It does not claim unconditional variance reduction.
- `variance-reduction-and-randomized-integration-examples`: **Pass.** Its summary accurately previews the six examples and their limitations. No B-page edit was needed.

## Edits and validation

- Edited the assigned same-sample theorem's sample-sequence hypothesis and centering proof.
- Updated `research/bayesian-computational-statistics-62-batch-29.proof-contracts.json` for the new derivation and current step labels; retained the pre-edit boundary-review hash bindings.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-same-sample-control-coefficient-remainder-is-op-one-over-n.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-same-sample-control-coefficient-remainder-is-op-one-over-n.md`: pass.
- Focused strict proof-contract check for the repaired item: pass, zero errors and warnings.
- Final `node tools/proof-layout.mjs items/thm-same-sample-control-coefficient-remainder-is-op-one-over-n.md`: one item, four steps, zero defects.

## Unedited defects and blockers

No confirmed mathematical defects remain unedited in the assigned pages or items. No withdrawal is proposed. The only pending workflow maintenance is a fresh boundary review for the repaired theorem, because its preserved nested template-review hashes bind the pre-repair bytes. The source-browser limitation and the unreviewed transitive supplier closures are recorded above; neither produced an unresolved mathematical finding in this batch.
