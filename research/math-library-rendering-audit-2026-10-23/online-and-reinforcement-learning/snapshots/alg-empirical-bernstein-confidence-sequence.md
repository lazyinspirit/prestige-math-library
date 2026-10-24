---
id: alg-empirical-bernstein-confidence-sequence
kind: algorithm
title: Empirical-Bernstein confidence-sequence interval update
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-predictable-discrete-time-process
  - def-subexponential-uniform-boundary
  - def-time-varying-target-confidence-sequence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences"
      url: https://arxiv.org/pdf/1810.08240v9
---

## Definition

Inputs are real bounds $a\leq b$, a nominal error level $\delta\in(0,1)$, an observation stream $(X_t)_{t\geq1}$ with $X_t\in[a,b]$ almost surely and $X_t$ measurable with respect to $\mathcal F_t$, a forecast stream $(\widehat X_t)_{t\geq1}$ with $\widehat X_t\in[a,b]$ almost surely and $\widehat X_t$ measurable with respect to $\mathcal F_{t-1}$, and, when $c=b-a>0$, an evaluation procedure for a Borel one-sided sub-exponential uniform boundary $u_{\delta/2,c}$ with crossing probability $\delta/2$ and scale $c$. The output is one interval $C_t$ at each positive integer time $t$.

1. If $c=0$, return $C_t=[a,a]$ at each time.

2. If $c>0$, initialize $\bar X_0=0$ and $V_0=0$. After receiving forecast $\widehat X_t$ and then observation $X_t$, update
$$\bar X_t=\left(1-\frac1t\right)\bar X_{t-1}+\frac{X_t}{t},\qquad V_t=V_{t-1}+(X_t-\widehat X_t)^2.$$
Return
$$C_t=\left[\bar X_t-\frac{u_{\delta/2,c}(V_t)}{t},\;\bar X_t+\frac{u_{\delta/2,c}(V_t)}{t}\right].$$

The procedure uses observations only through time $t$. The accumulated quantity $V_t$ is the observed sum of squared forecast errors; it is not a predictable conditional-variance process.

## Definition references

[[def-filtration-and-filtered-probability-space]]: $\mathcal F_t$ records information available at integer time $t$.

[[def-predictable-discrete-time-process]]: the forecast at time $t$ is measurable with respect to $\mathcal F_{t-1}$ before the observation at time $t$.

[[def-subexponential-uniform-boundary]]: the supplied boundary has the stated scale and crossing-probability guarantee.

[[def-time-varying-target-confidence-sequence]]: the output intervals are considered for simultaneous coverage of a target process.

[A Howard et al., Theorem 4, §4.1](https://arxiv.org/pdf/1810.08240v9)
