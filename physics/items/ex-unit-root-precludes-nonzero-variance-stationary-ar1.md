---
id: ex-unit-root-precludes-nonzero-variance-stationary-ar1
kind: example
title: "A unit-root AR(1) has no weakly stationary solution with nonzero white noise"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-process-and-arma-model
  - def-strict-and-weak-stationarity-for-time-series
  - thm-arma-causality-and-invertibility-root-criteria
  - thm-stationary-arma-spectral-density
  - def-autocovariance-and-sample-autocovariance
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - def-countable-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorems 3.1 and 4.4"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.3"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Example

Let $\epsilon$ be centered white noise with variance $\sigma^2>0$. The
equation $X_t-X_{t-1}=\epsilon_t$ has AR polynomial $\phi(z)=1-z$, whose
root is $z=1$. It has no weakly stationary solution. Under Countable Choice,
this is a boundary illustration for the unit-circle-root premise of the paired
spectral-density theorem; it does not show that premise is essential, since
there is no stationary solution to which the density conclusion could apply.

## Facts & Assumptions

**Given:** A centered white-noise sequence $\epsilon$ with
$\operatorname{Var}(\epsilon_t)=\sigma^2>0$, and the proposed AR(1) equation
$X_t-X_{t-1}=\epsilon_t$.

[A1] Countable Choice is assumed only for the contextual comparison with the
spectral-density theorem; the covariance contradiction does not use it.

[F1] [[def-linear-process-and-arma-model]]: white noise has zero covariance
at nonzero lags, and the AR(1) equation has $\phi(z)=1-z$.

[F2] [[def-strict-and-weak-stationarity-for-time-series]] and
[[def-autocovariance-and-sample-autocovariance]]: under weak stationarity,
$\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$ is independent of $t$.

[F3] [[def-moments-variance-and-covariance]] defines variance and covariance;
[[cor-cauchy-schwarz-for-random-variables]] gives
$|\gamma(h)|\le\gamma(0)$.

[F4] The causal criterion in
[[thm-arma-causality-and-invertibility-root-criteria]] is stated for a
weakly stationary ARMA solution and excludes closed-unit-disk roots; under
Countable Choice, [[thm-stationary-arma-spectral-density]] excludes
unit-circle roots for its density conclusion. This example compares root
locations only and applies neither theorem to a nonexistent stationary
solution.



## Verification

1.1 Suppose a weakly stationary solution exists and write its autocovariance as $\gamma$. For every integer $h\ge1$, white-noise covariance gives $0=\operatorname{Cov}(\epsilon_{t+h},\epsilon_t)$. Substituting $\epsilon_s=X_s-X_{s-1}$ and expanding the four covariances using [F2] yields $$0=2\gamma(h)-\gamma(h-1)-\gamma(h+1).$$ [F1, F2, F3, given, algebra]

2.1 The recurrence in step 1.1 says $\gamma(h+1)-\gamma(h)=\gamma(h)-\gamma(h-1)$ for every $h\ge1$. Induction makes these first differences constant, so $\gamma(h)=\gamma(0)+h\,d$ for $h\ge0$, where $d=\gamma(1)-\gamma(0)$. [step 1.1, algebra]

3.1 By [F3], $|\gamma(h)|\le\gamma(0)$ for every $h$. The affine sequence in step 2.1 is bounded only if $d=0$, hence $\gamma(1)=\gamma(0)$. Then $$\sigma^2=\operatorname{Var}(X_t-X_{t-1}) =2\gamma(0)-2\gamma(1)=0,$$ contradicting the given $\sigma^2>0$. No weakly stationary solution exists. The polynomial root is $z=1$ by direct substitution, on the unit circle excluded by [F4]'s spectral-density premise under [A1]. Since the contradiction rules out a stationary solution, this only illustrates the boundary of that premise and does not establish its essentiality. [A1, F3, F4, step 2.1, given, algebra] ∎