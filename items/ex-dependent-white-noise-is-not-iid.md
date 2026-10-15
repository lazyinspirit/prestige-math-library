---
id: ex-dependent-white-noise-is-not-iid
kind: example
title: "Uncorrelated white noise need not be iid"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-linear-process-and-arma-model
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-factorization-of-expectations-for-independent-variables
  - def-moments-variance-and-covariance
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 2.1 and Theorem 3.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.2"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Example

Let $(U_t)_{t\in\mathbb Z}$ be iid Rademacher variables,
$\mathbb P(U_t=1)=\mathbb P(U_t=-1)=1/2$, and define
$X_t:=U_{t-1}(1+U_t)$. Then $X$ is strictly stationary, centered, has
variance $2$, and has zero covariance at every nonzero lag, but
$X_t$ and $X_{t+1}$ are dependent. Thus the white-noise assumption used for
the ARMA spectrum does not itself imply iid innovations.

## Facts & Assumptions

**Given:** A two-sided iid family of Rademacher random variables and
$X_t=U_{t-1}(1+U_t)$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: iid means
mutual independence and a common marginal law.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: finite
subfamilies of the iid sequence have product joint laws, unchanged by a
common shift of the indices.

[F3] [[thm-factorization-of-expectations-for-independent-variables]]:
expectations of products of integrable functions of independent variables
factor.

[F4] [[def-moments-variance-and-covariance]] defines the means, variances,
and covariances used below.

[F5] [[def-strict-and-weak-stationarity-for-time-series]],
[[def-autocovariance-and-sample-autocovariance]], and
[[def-linear-process-and-arma-model]]: strict stationarity is shift
invariance of finite-dimensional laws; weak stationarity uses the constant
mean and lag-only autocovariance; white noise is centered with finite
positive variance and zero nonzero-lag covariance.



## Verification

1.1 Every finite tuple of $X$ values is the same coordinatewise measurable function of a finite tuple of iid $U$ values. By [F1]–[F2], shifting all indices leaves the latter tuple's law unchanged, so the finite-dimensional laws of $X$ are shift invariant. Thus $X$ is strictly stationary. [F1, F2, given, construct]

2.1 Independence and [F3] give $\mathbb E[X_t]=\mathbb E[U_{t-1}]\mathbb E[1+U_t]=0$ and $\mathbb E[X_t^2]=\mathbb E[U_{t-1}^2]\mathbb E[(1+U_t)^2]=2$. For lag one, $\mathbb E[X_tX_{t+1}] =\mathbb E[U_{t-1}(1+U_t)U_t(1+U_{t+1})]=0$ because $U_{t-1}$ is independent of the remaining factors and has mean zero. For lag $h\ge2$, $X_t$ and $X_{t+h}$ use disjoint iid coordinates, so they are independent and centered and their covariance is zero. Negative lags have the same covariance by symmetry. Hence $X$ is weakly stationary and is white noise with variance $2$. [F3, F4, F5, step 1.1, given, algebra]

3.1 Let $A=\{X_t=0\}$ and $B=\{X_{t+1}=2\}$. Since $U_{t-1}\in\{-1,1\}$, $A=\{U_t=-1\}$ and $\mathbb P(A)=1/2$. The event $B$ requires $U_t=U_{t+1}=1$, so $\mathbb P(B)=1/4$ while $A\cap B=\varnothing$. Therefore $\mathbb P(B\mid A)=0\ne\mathbb P(B)$, proving that adjacent observations are dependent. [F1, given, step 2.1, algebra] ∎