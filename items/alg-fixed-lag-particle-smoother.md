---
id: alg-fixed-lag-particle-smoother
kind: algorithm
title: Fixed-lag particle smoother
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-state-space-filtering-laws
  - alg-sequential-importance-resampling
  - alg-particle-backward-simulator
axiom_use: AC is inherited from the state-space and particle-kernel interfaces. The finite-lag procedure makes no additional choice.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.1"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Definition

For a finite horizon $T\ge0$, fix an integer lag $L\ge0$, a path count
$S\ge1$, and the normalized
filtering particle clouds and transition inputs required by
[[alg-particle-backward-simulator]]. For each time $t\in\{0,\ldots,T\}$,
put $s_t=\min(t+L,T)$. Independently for each $t$, run the particle backward
simulator using only the filtering clouds at times $0,\ldots,s_t$ and request
$S$ paths. Retain their time-$t$ coordinates $\widetilde X_t^{t,1},\ldots,
\widetilde X_t^{t,S}$ and return the empirical measure
$$\widehat\eta_{t|s_t}^{S}=\frac1S\sum_{r=1}^S\delta_{\widetilde X_t^{t,r}}.$$
In particle mode this empirical law approximates
$$\mathcal L(X_t\mid Y_{1:s_t}),$$
not the full smoothing law $\mathcal L(X_t\mid Y_{1:T})$ unless $s_t=T$ or
the two conditional laws happen to agree. The same procedure can use supplied
exact backward kernels when the model has no transition density; for each
$s_t$ it uses the supplied filtering kernel at $y_{1:s_t}$ and the backward
kernels for the corresponding prefix histories. On histories where these
kernels factor the truncated smoother, it samples that exact conditional law.

The procedure returns one truncated smoothing marginal per $t$. It does not
assert a bound on the lag bias, a forgetting rate, or convergence to the
full-data smoother for fixed $L$. Those conclusions require separate
conditions on the model.
