---
id: def-predictable-stopping-time-grid
kind: definition
title: Predictable stopping-time grid
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-continuous-time-stopping-time
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, §2.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Definition

Assume $T>0$ and work on a filtered probability space with stopping times and
stopped sigma-algebras as defined in
[[def-continuous-time-stopping-time]]. A **finite predictable stopping-time
grid** on $[0,T]$ is a random integer $N<\infty$ almost surely and a sequence
of stopping times
$$0=\tau_0<\tau_1<\cdots<\tau_N=T$$
such that, for each $n<N$, the step length
$h_n=\tau_{n+1}-\tau_n$ is $\mathcal F_{\tau_n}$-measurable and satisfies
$0<h_n\le h_{\max}$ for a deterministic $h_{\max}>0$. Extend the sequence by
$\tau_n=T$ and $h_n=0$ for $n\ge N$. A **budgeted** predictable grid has a
deterministic integer $B$ with $N\le B$ almost surely.

The condition $h_n\in\mathcal F_{\tau_n}$ says the next interval is selected
using information available at its left endpoint. A decision that inspects
$W_{\tau_{n+1}}-W_{\tau_n}$ before fixing $h_n$ is not predictable under this
definition. Brownian-bridge refinement can preserve the sampled path after
such a decision, but does not make that grid predictable.
