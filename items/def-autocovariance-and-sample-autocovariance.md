---
id: def-autocovariance-and-sample-autocovariance
kind: definition
title: "Autocovariance and sample autocovariance"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-strict-and-weak-stationarity-for-time-series
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, complete 57-page lecture notes"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "STAT 720 Time Series Analysis, South Carolina course notes by Wang, focused Sections 2.1–2.2 and Lemma 2.3"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

For a weakly stationary real process $X=(X_t)_{t\in\mathbb Z}$, its
**autocovariance function** (ACVF) is
$$\gamma(h):=\operatorname{Cov}(X_{t+h},X_t),\qquad h\in\mathbb Z,$$
which is independent of $t$ by [[def-strict-and-weak-stationarity-for-time-series]].

For a finite data vector $x_1,\ldots,x_n\in\mathbb R$, where $n\ge1$, let
$$\bar x_n:=\frac1n\sum_{t=1}^n x_t.$$
Its **biased sample ACVF** is the zero-extended sequence on $\mathbb Z$ given by
$$\widehat\gamma_n(h):=\frac1n\sum_{t=1}^{n-|h|}(x_{t+|h|}-\bar x_n)(x_t-\bar x_n),\qquad |h|<n,$$
and $\widehat\gamma_n(h):=0$ for $|h|\ge n$. The absolute lag makes
$\widehat\gamma_n(-h)=\widehat\gamma_n(h)$.

For comparison, define the **pair-count-normalized rescaling**
$$\widetilde\gamma_n(h):=\frac1{n-|h|}\sum_{t=1}^{n-|h|}(x_{t+|h|}-\bar x_n)(x_t-\bar x_n),\qquad |h|<n,$$
and set it to zero for $|h|\ge n$. Its denominator is positive on the stated
domain. The names specify the denominator convention; they assert no
unbiasedness formula.
