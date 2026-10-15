---
id: def-best-linear-forecast-from-a-finite-history
kind: definition
title: Best linear forecast from a finite history
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-linear-combination-and-span
justified_by:
  - thm-finite-history-best-linear-predictor-exists-uniquely
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Definition

Let $X=(X_t)_{t\in\mathbb Z}$ be a weakly stationary real process on one
probability space, with common mean $\mu$, and let $n,h\ge1$ be integers. Its
**finite-history best linear forecast** of $X_{n+h}$ from $X_1,\ldots,X_n$ is
the unique almost-sure class minimizing squared $L^2$ error over the affine
subspace $M_n:=\{[a_0+a_1X_1+\cdots+a_nX_n]:a_0,\ldots,a_n\in\mathbb R\}\subseteq L^2(\mathbb P)$.
Here $[Z]$ denotes the almost-sure equivalence class of a square-integrable
random variable, as in [[def-l-p-space-as-a-quotient-by-null-functions]], and
the finite linear span uses [[def-linear-combination-and-span]]. Weak
stationarity and its moment conditions are those of
[[def-strict-and-weak-stationarity-for-time-series]]. Existence and uniqueness
of the minimizing class are established by
[[thm-finite-history-best-linear-predictor-exists-uniquely]]. The term *best linear* refers to
this affine $L^2$ projection; it does not assert equality with a conditional
expectation without additional hypotheses.
