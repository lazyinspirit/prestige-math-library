# Step 3a reader report — batch 42

Run: `statistical-models-experiments-62`  
Role: reader  
Assignment: batch `42`

## Scope and page verdicts

Read the batch manifest `research/statistical-models-experiments-62-batch-42.pages.json`, both assigned pages, all ten assigned items, and the direct item suppliers used by their definitions and proofs. The manifest and proof contracts were used to identify scope and exact claim locations, not as mathematical verdicts.

- **A page `arma-causality-invertibility-and-spectra` — pass after the repair below.** Its summary matches the local statements: white noise is only uncorrelated, the root criteria require cancellation, the spectral-density result needs only the no-unit-circle-root condition, and the inference conclusions retain their listed hypotheses.
- **B page `arma-causality-invertibility-and-spectra-examples` — pass.** Its summary matches the three examples and each calculation states the needed probability and moment assumptions.

No blocker remains. No defect remains unedited.

## Assigned inventory

Pages opened:

- `library/statistical-models-and-experiments/arma-causality-invertibility-and-spectra.md`
- `library/statistical-models-and-experiments/arma-causality-invertibility-and-spectra-examples.md`

Assigned items opened in dependency order:

- A page: `def-linear-process-and-arma-model`; `lem-absolutely-summable-linear-filters-preserve-weak-stationarity`; `thm-arma-causality-and-invertibility-root-criteria`; `thm-stationary-arma-spectral-density`; `thm-stable-linear-process-sample-mean-clt`; `thm-fixed-order-autoregressive-ols-martingale-limit`; `cor-stable-ar-long-run-variance-plug-in-consistency`.
- B page: `ex-arma-common-factor-cancellation-and-root-classification`; `ex-unit-root-precludes-nonzero-variance-stationary-ar1`; `ex-dependent-white-noise-is-not-iid`.

The 49 distinct direct supplier items opened were:

```text
def-strict-and-weak-stationarity-for-time-series
def-moments-variance-and-covariance
def-autocovariance-and-sample-autocovariance
cor-cauchy-schwarz-for-random-variables
lem-variance-and-covariance-identities-for-random-variables
thm-tonelli-theorem-for-sigma-finite-product-spaces
thm-tonelli-for-nonnegative-double-series
thm-fatou-lemma
cor-every-complex-polynomial-splits-into-linear-factors
def-time-series-spectral-measure-and-periodogram
def-radon-measure-on-an-lch-space
def-countable-choice
lem-unit-circle-is-a-compact-metrizable-topological-group
thm-compactness-agrees-with-metric-compactness
thm-compact-implies-complete-and-totally-bounded
lem-compact-metric-space-has-a-countable-dense-subset
def-polish-space
thm-borel-probability-measures-on-polish-spaces-are-inner-regular
def-probability-measure
thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
prop-order-and-scalar-rules-for-the-nonnegative-integral
def-identically-distributed-and-iid-random-variables
def-axiom-of-choice
thm-lindeberg-levy-iid-central-limit-theorem
thm-vector-slutsky
thm-continuous-maps-preserve-convergence-in-probability
thm-portmanteau-theorem
cor-markov-inequality-for-random-variables
def-standard-normal-and-normal-laws
def-stationary-process-and-canonical-shift
def-ergodic-measure-preserving-system
thm-stationary-process-birkhoff-ergodic-limit
thm-kolmogorov-iid-l1-strong-law
def-filtration-and-filtered-probability-space
def-square-integrable-martingale-difference-array-and-variance-clock
def-conditional-expectation-as-an-ae-class
def-independent-sigma-algebras-and-events
lem-measurable-functions-preserve-independence
thm-factorization-of-expectations-for-independent-variables
thm-dominated-convergence
thm-martingale-central-limit-theorem
thm-cramer-wold-device
thm-vector-stochastic-order-calculus
def-convergence-in-distribution-of-random-elements
def-convergence-in-probability
def-multivariate-normal-law
def-chi-square-law
cor-real-spectral-theorem-for-self-adjoint-endomorphisms
thm-independent-random-elements-have-product-joint-law
```

## Repair and evidence

In [the filter lemma, step 5.1](../items/lem-absolutely-summable-linear-filters-preserve-weak-stationarity.md#L77), replaced the unsupported equality
`E[sum |c_j d_k Z_{t-j-k}|] = E|Z_0| (sum |c_j|)(sum |d_k|)` with the valid bound obtained from Tonelli and step 1.1:

`E[sum |c_j d_k Z_{t-j-k}|] = sum |c_j d_k| E|Z_{t-j-k}| <= sqrt(gamma(0)) (sum |c_j|)(sum |d_k|)`.

Weak stationarity fixes the means and covariances, but not the full marginal laws or absolute first moments. Step 1.1 establishes the uniform Cauchy–Schwarz bound `E|Z_s| <= sqrt(gamma(0))` for every integer `s`, which supplies the finite expectation needed for almost-sure absolute convergence and reindexing of the double series. The theorem statement is unchanged. Updated the corresponding `step-5-1` derivation in `research/statistical-models-experiments-62-batch-42.proof-contracts.json`. The item had no `verification.judge` record to remove.

Required checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-absolutely-summable-linear-filters-preserve-weak-stationarity.md` — passed; the item was reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-absolutely-summable-linear-filters-preserve-weak-stationarity.md` — passed, 1 proof checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-absolutely-summable-linear-filters-preserve-weak-stationarity.md` — passed, 5 steps, 0 defects.

No other assigned claim or proof step required repair. The root criteria proof checks necessity by comparing absolutely summable filter coefficients against positive-variance white noise and proves sufficiency by geometric expansions; the separate causal and invertible conclusions do not assume one another. The spectral-density proof constructs its Radon measure and verifies the Fourier coefficients directly, so it does not assume causality or invertibility. The stable linear-process CLT's endpoint remainder has a uniform `L^2` bound under its weighted summability hypothesis. The fixed-order OLS proof's martingale increments, predictable variance, Lindeberg bound, singular-design fallback, residual variance consistency, and Wald limit follow from the stated filtration, stationarity/ergodicity, moment, and Gram assumptions. The plug-in corollary uses the fixed-intercept OLS result and the nonzero value of `phi(1)`; its fallback event has probability tending to zero. The three examples' constructions and witnesses are valid.

## Source checks

- Wang, *STAT 720 Time Series Analysis*, Theorems 3.1–3.2, printed pp. 48–50, supports the causal and invertible root criteria. Theorem 4.4, printed pp. 61–62, explicitly allows a noncausal/noninvertible ARMA process; under white noise, a no-common-zero assumption and no autoregressive zero on the unit circle, it gives the stated `sigma^2/(2 pi) |theta/phi|^2` density. [Course notes PDF](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf).
- Meinshausen, *Time Series Analysis: Notes for the course HS 2022*, §2.5, printed pp. 21–22, discusses the common-zero and root conditions; §3.1, printed pp. 35–38, gives the spectral representation context. The supplied `stat.ethz.ch` URL did not render in the web tool; I checked the same 57-page HS 2022 notes on ETH's `people.math.ethz.ch` host. [ETH course notes PDF](https://people.math.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf).
- Wang §6.1, cited alongside the OLS result, gives the asymptotic result for the Yule–Walker estimator, not this OLS theorem. The OLS statement is established by its local proof and local martingale-CLT supplier; the source is only contextual in that item.

## Uneditable defects and blocker

None. No suspected defect was found in a dependency that could not be edited. No blocker.
