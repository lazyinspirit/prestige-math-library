---
id: def-strict-and-weak-stationarity-for-time-series
kind: definition
title: "Strict and weak stationarity for integer-indexed time series"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-stochastic-process-and-finite-dimensional-distributions
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, complete 57-page lecture notes"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "STAT 720 Time Series Analysis, South Carolina course notes by Wang, focused Sections 2.1–2.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $X=(X_t)_{t\in\mathbb Z}$ be a real-valued stochastic process on one
probability space, so each $X_t$ is a real random variable and each finite
tuple has its pushforward law
([[def-stochastic-process-and-finite-dimensional-distributions]],
[[def-random-element-and-real-random-variable]],
[[def-law-or-distribution-of-a-random-element]]).
We call $X$ a **time series** here because its index set is $\mathbb Z$.

The process is **strictly stationary** when for every integer $r\ge1$, every
$t_1,\ldots,t_r\in\mathbb Z$, and every shift $m\in\mathbb Z$,
$$\mathcal L(X_{t_1+m},\ldots,X_{t_r+m})=\mathcal L(X_{t_1},\ldots,X_{t_r}).$$
This condition concerns the full finite-dimensional laws and imposes no moment
condition by itself.

The process is **weakly stationary** when $E[|X_t|^2]<\infty$ for every
$t\in\mathbb Z$, its mean $\mu:=E[X_t]$ is independent of $t$, and for every
$h\in\mathbb Z$ the covariance
$$\gamma(h):=\operatorname{Cov}(X_{t+h},X_t)$$
is independent of $t$. Expectation, variance, and covariance have the meanings
in [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and
[[def-moments-variance-and-covariance]]. Strict stationarity alone therefore
does not supply the moment hypotheses needed for covariance or sample-mean
claims.
