---
id: thm-finite-history-best-linear-predictor-exists-uniquely
kind: theorem
title: Existence and uniqueness of the finite-history predictor class
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-best-linear-forecast-from-a-finite-history
  - def-strict-and-weak-stationarity-for-time-series
  - thm-normal-equations-for-best-affine-l2-prediction
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Let $X=(X_t)_{t\in\mathbb Z}$ be a weakly stationary real process and let
$n,h\ge1$. The affine $L^2$ minimization defining the finite-history best
linear forecast of $X_{n+h}$ from $X_1,\ldots,X_n$ has a unique minimizing
almost-sure class, even when the history covariance matrix is singular.

## Facts & Assumptions

**Given:** A weakly stationary real process $X$ on one probability space and
integers $n,h\ge1$.

[F1] Weak stationarity gives square-integrability of every $X_t$.
[[def-strict-and-weak-stationarity-for-time-series]]

[F2] For finitely many square-integrable real variables on one probability
space, the affine $L^2$ projection has a unique minimizing class and an affine
representative; singular covariance may make coefficients nonunique, but any
two coefficient solutions yield the same predictor class.
[[thm-normal-equations-for-best-affine-l2-prediction]]

[F3] The finite-history forecast minimizes squared $L^2$ error over the
affine span of the constant and $X_1,\ldots,X_n$ classes.
[[def-best-linear-forecast-from-a-finite-history]]

## Proof

1.1 Fix $n,h\ge1$ and take target $X_{n+h}$ with regressors $X_1,\ldots,X_n$. By [F1] these variables are square-integrable, so [F2] supplies a unique minimizing almost-sure class in their affine span. [given, F1, F2]

2.1 By [F3], the affine span used in [F2] is exactly $M_n$, so the unique minimizing class from step 1.1 is the finite-history forecast. The uniqueness asserted is of the $L^2$ class, not necessarily of its coefficients; this remains true when the history covariance is singular by [F2]. [F2, F3, step 1.1] ∎