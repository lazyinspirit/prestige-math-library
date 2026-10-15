# Step 3a reader report — batch 52

Run: `bayesian-computational-statistics-62`  
Batch: `52`  
Role: reader

## Inventory reviewed

Assigned pages opened:

- `bootstrap-failure-and-subsampling`
- `bootstrap-failure-and-subsampling-examples`

All eleven assigned items opened and reviewed in dependency order:

- `def-m-out-of-n-bootstrap-and-subsampling`
- `lem-uniform-cdf-order-and-quantile-coverage`
- `lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform`
- `lem-bernoulli-root-laws-are-uniformly-weak-close`
- `thm-ordinary-bootstrap-fails-for-uniform-endpoint`
- `thm-m-out-of-n-resampling-valid-for-uniform-endpoint`
- `thm-uniform-subsampling-coverage-under-root-law-control`
- `thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals`
- `ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy`
- `ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage`
- `ex-nonsmooth-boundary-bootstrap-failure`

Additional page context opened: `iid-bootstrap-and-jackknife-validity`, which contains the conditional empirical-bootstrap CLT supplier cited by the batch's nonsmooth-boundary theorem.

Relevant supplier items opened included:

- Resampling, CDF, and coverage foundations: `def-statistic-and-estimator`, `def-identically-distributed-and-iid-random-variables`, `lem-finite-empirical-measure-is-a-probability-law`, `def-dirac-measure`, `def-probability-measure`, `def-measure`, `def-nonnegative-extended-series`, `def-cumulative-distribution-function-of-a-random-variable`, `def-bernoulli-and-binomial-random-variables`, `def-confidence-set-and-coverage`, `def-partial-sums-and-sample-means`, `def-m-out-of-n-bootstrap-and-subsampling`.
- Quantile, endpoint, and weak-metric results: `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `lem-bernoulli-and-binomial-mean-and-variance`, `cor-chebyshev-inequality-for-random-variables`, `def-levy-prokhorov-metric`, `def-weak-convergence-of-borel-probability-measures`, `thm-levy-prokhorov-metric-metrizes-weak-convergence`, `thm-logarithm-derivative-and-integral`, `lem-uniform-cdf-order-and-quantile-coverage`, `thm-portmanteau-theorem`.
- Normal and delta-method results: `def-axiom-of-choice`, `def-standard-normal-and-normal-laws`, `lem-normal-location-scale-mean-and-variance`, `lem-iid-normal-sample-mean-law`, `thm-first-and-second-order-delta-method-for-random-vectors`, `thm-heine-cantor-r`, `def-moments-variance-and-covariance`.
- Conditional-bootstrap CLT chain: `thm-conditional-iid-bootstrap-clt-for-empirical-law`, `def-iid-empirical-bootstrap-sample`, `lem-empirical-bootstrap-law-is-a-probability-measure`, `lem-finite-index-bootstrap-sample-is-conditionally-iid`, `lem-iid-sample-covariance-converges`, `def-row-wise-independent-centered-triangular-array`, `def-total-row-variance-and-lindeberg-condition`, `lem-standard-normal-cdf-is-continuous-and-strictly-increasing`, `thm-lindeberg-feller-central-limit-theorem-sufficiency`, `thm-slutsky-for-real-random-variables`, `thm-almost-sure-convergence-implies-convergence-in-probability`, `lem-finite-bootstrap-cdf-supremum-is-measurable`, `lem-measurable-functions-preserve-independence`, `thm-khinchin-weak-law-for-iid-integrable-variables`, `thm-dominated-convergence`, `cor-markov-inequality-for-random-variables`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-heine-cantor-metric`, `thm-well-ordering-principle`, `cor-archimedean-reciprocal`, `def-convergence-in-distribution-for-real-random-variables`.
- Separability needed for the Lévy–Prokhorov theorem: `def-separable-space`, `thm-rationals-countable`, `lem-q-and-irrationals-dense-r`.

The published supplier statements and the proof clauses used by assigned items were checked for hypothesis and conclusion matching. I did not audit every unrelated upstream dependency of those published suppliers.

## Edits and evidence

1. `items/thm-uniform-subsampling-coverage-under-root-law-control.md`
   - Added a deterministic parity witness showing that each one-sided root-law comparison can fail under `m → ∞`, `m/n → 0`, even with `a_m/a_n → 0`.
   - Moved the existing constant-statistic witness into the numbered proof. It shows that feasible-root control can fail, and coverage can be zero, even when the two root-law comparisons hold exactly.
   - Clarified that the one-sided coverage claims retain the feasible-root condition.
   - Updated the batch proof contract with the new witness derivations, revised step mapping, and citation uses. No `verification.judge` field was present to remove.
   - Evidence: for `P=δ₀`, `a_k=k`, `T_k=1_{k odd}/k`, and `m_n=⌊√n⌋`, even and odd `m` blocks give point-mass roots in opposite orders, so each one-sided CDF supremum is 1 on an infinite subsequence. For `T_k≡1/k`, both actual root laws are `δ₁`, but either resampling root is `δ_{1-m/n}`; the interval at `α₁=α₂=1/4` is `{m/n²}` and excludes the target 0.

2. `items/ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage.md`
   - Added fact F15 and its direct dependencies to establish that the real line is separable before applying the Lévy–Prokhorov metrization theorem.
   - Updated its proof contract with the separability citations and the current statement quote for `thm-uniform-subsampling-coverage-under-root-law-control`.
   - No `verification.judge` field was present to remove.

3. `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md`
   - Made the supplier locators explicit: the ordinary-bootstrap atom comes from `thm-ordinary-bootstrap-fails-for-uniform-endpoint`, Proof step 1.2, and continuity of the sampling-root limit comes from `thm-m-out-of-n-resampling-valid-for-uniform-endpoint`, Proof step 1.1.
   - Updated the affected proof-contract quotes and step inputs to match those locators.
   - No `verification.judge` field was present to remove.

For each changed item, the required `reflow.mts` and `precheck.mts` commands passed. The final batched proof-layout command reported `3 items, 14 steps, 0 defects`.

External context checked:

- [Bickel, Götze, and van Zwet, *Resampling Fewer Than n Observations*](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf), §2.3, Example 3 (PDF pp. 4–5), documents ordinary-bootstrap failure for an extremum; §3, Theorem 1 (PDF pp. 8–9), gives the `m→∞`, `m/n→0` subsampling result under its stated conditions. The batch's uniform-endpoint calculations are proved locally.
- [Romano and Shaikh, *On the Uniform Asymptotic Validity of Subsampling and the Bootstrap*](https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf), §2, Theorem 2.1 (PDF p. 5), gives the one-sided and two-sided root-CDF conditions for quantile coverage; Theorem 2.2 (PDF p. 6) treats feasible CDF approximation. The assigned theorem supplies its own proof for the stated formulation.

## Uneditable defect

`thm-conditional-iid-bootstrap-clt-for-empirical-law` is an in-run dependency assigned in batch 51 and is used by `thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals`. At initial inspection, its Proof step 6.1 said “Applying steps 2.2–2.4,” although only step 2.2 and steps 3.1–5.1 existed. The bracketed step citations pointed to the relevant subsequence argument, so this was a nonfatal citation defect. Before this report was written, the producer was updated; its current step 6.1 refers to the construction in step 2.2 and its consequences in steps 3.1–5.1. I did not capture a raw hash at the initial read, so the earlier bytes cannot be bound; the findings JSON therefore has `observed_source: null`.

## Page verdicts

- `bootstrap-failure-and-subsampling` — **Pass.** Its summary matches the endpoint results, the root-law coverage conditions, and the demonstrated limitation of the `m`-regime.
- `bootstrap-failure-and-subsampling-examples` — **Pass.** The three examples match their assigned theorems; the weak-metric example is distinct from the `m/n→0` endpoint argument.

## Blocker

None for batch 52. The historical in-run dependency concern is reported with the source-byte limitation described above.
