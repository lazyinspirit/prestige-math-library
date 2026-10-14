# Step 3a reader report — batch 8

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Assignment: batch `8`

## Opened inventory

Assigned pages opened:

- `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `finite-sample-tests-neyman-pearson-and-valid-p-values-examples`

The three required prerequisite pages were also opened for context: `estimators-and-randomized-procedures`, `dominated-experiments-likelihood-and-sufficiency`, and `losses-risk-and-decision-rules`. Their relevant supplier items were checked below; no defect affecting this batch was found in their page summaries.

All 14 assigned items were read, in supplier-to-consumer order:

1. `lem-integrable-signed-function-integration-against-density`
2. `lem-likelihood-ratio-threshold-exists`
3. `lem-common-support-likelihood-ratio-is-measurable`
4. `def-p-value`
5. `lem-measurable-rejection-function-defines-randomized-test`
6. `lem-test-zero-one-loss-risk-identities`
7. `def-test-size-and-power`
8. `def-likelihood-ratio-test-with-boundary-randomization`
9. `thm-p-value-superuniformity`
10. `lem-likelihood-ratio-test-is-measurable-and-exact-size`
11. `thm-neyman-pearson-lemma`
12. `cex-uniform-null-p-value-is-anti-conservative`
13. `ex-discrete-neyman-pearson-randomized-boundary`
14. `ex-continuous-neyman-pearson-likelihood-ratio-test`

Relevant dependency statements opened included:

- Measure, density, and integration: `def-measure`, `def-probability-measure`, `def-measure-with-density`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-against-a-density`, `prop-measure-monotonicity`, `thm-continuity-from-below-for-measures`, `thm-continuity-from-above-for-measures`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, and `cor-expectation-of-an-indicator-is-probability`.
- Statistics, kernels, and risk: `def-statistical-experiment`, `def-statistic-and-estimator`, `def-measurable-function-between-measurable-spaces`, `def-sigma-algebra`, `def-measure-kernel-and-probability-kernel`, `def-randomized-procedure-as-a-markov-kernel`, `lem-procedure-action-law-is-measurable`, `def-randomized-test`, and `def-loss-function-and-risk`.
- Likelihood ratios and density representatives: `def-axiom-of-choice`, `def-countable-choice`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `def-radon-nikodym-derivative`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, and `thm-arithmetic-and-lattice-operations-preserve-measurability`.
- Order, finite sums, and examples: `def-complete-ordered-field`, `def-infimum`, `thm-infimum-property`, `thm-well-ordering-principle`, `cor-archimedean-reciprocal`, `def-counting-measure`, `prop-counting-measure-is-a-measure`, `def-finite-sigma-finite-and-semifinite-measures`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `cor-continuous-functions-are-borel-measurable`, `thm-continuous-implies-integrable`, `def-partition-and-refinement`, `def-darboux-sums`, `def-darboux-integral`, `thm-darboux-equals-riemann`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `def-finite-sum`, `lem-finite-sum-laws`, `thm-induction-principle`, and `def-canonical-natural`.

For these external suppliers I checked the exact definitions or statements needed for the assigned arguments. I did not independently re-audit every supplier's proof body.

## Review and edits

- `thm-p-value-superuniformity`: the original title said a valid p-value “gives a level test,” although the local `def-test-size-and-power` definition requires nonempty disjoint null and alternative hypotheses. The theorem's level conclusion is expressly conditional on specifying a nonempty disjoint alternative. I changed the title to **“Valid p-values yield level tests for nonempty disjoint alternatives.”** The pointwise rejection bound and proof are sound.
- `ex-discrete-neyman-pearson-randomized-boundary`: the item called its dominator counting measure but cited only `def-counting-measure`, which defines the counting set function and points to `prop-counting-measure-is-a-measure` for its measure property. The Neyman–Pearson supplier also requires a sigma-finite dominator. I added the measure proposition and finite/sigma-finite definition as dependencies, proved finiteness from the two singleton masses and sigma-finiteness from the constant whole-space cover, and explicitly verified the finite density representatives using the simple-integral formula. The ratios, cutoff, size $1/4$, power $3/8$, and optimality conclusion are correct. The batch proof contract was updated. The precheck proposed canonical phase numbering; I adopted it and reran the checks.
- `ex-continuous-neyman-pearson-likelihood-ratio-test`: the proof used Darboux-sum bounds for a Riemann integral without citing the local theorem connecting the two notions. I added `thm-darboux-equals-riemann` to the dependencies and Facts. I also made the restriction-measure construction explicit and verified that $p_0=1$ is a density via the integral of an indicator/simple function. The Riemann-to-Lebesgue equality has the required countable-choice hypothesis; the density normalizations, threshold, size $1/4$, power $7/16$, and simple-hypothesis optimality conclusion are correct. The batch proof contract was updated.

No `verification.judge` records were present on the changed items. No page prose or out-of-batch content was edited. No defects remained unedited.

## Page verdicts

- `finite-sample-tests-neyman-pearson-and-valid-p-values` — **Pass after the title repair.** Its summary accurately limits the p-value level consequence to a specified nonempty disjoint alternative and describes the two-law common-dominator result without claiming composite-hypothesis optimality.
- `finite-sample-tests-neyman-pearson-and-valid-p-values-examples` — **Pass after the example repairs.** The counterexample violates superuniformity at $u=1/4$; the discrete boundary calculation gives size $1/4$ and power $3/8$; the continuous example gives rejection region $(3/4,1]$, size $1/4$, and power $7/16$.

## Validation and blockers

- `reflow` and `precheck` passed for all three changed items. The discrete example first received a canonical-form proposal; after adopting it, precheck passed.
- `node tools/proof-layout.mjs` on the three changed item paths reported 13 steps and 0 defects.
- Blocker: none.
