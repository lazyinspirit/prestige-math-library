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
grid** on $[0,T]$ consists of an integer-valued random variable $N$ with
$1\le N<\infty$ almost surely and a sequence $(\tau_n)_{n\ge0}$ of stopping
times. It satisfies $\tau_0=0$, $\tau_n<\tau_{n+1}$ on $\{n<N\}$, and
$\tau_n=T$ on $\{n\ge N\}$. For every fixed integer $n\ge0$, define
$h_n=\tau_{n+1}-\tau_n$ and require that $h_n$ is
$\mathcal F_{\tau_n}$-measurable; on $\{n<N\}$ require also
$0<h_n\le h_{\max}$ for a deterministic $h_{\max}>0$. Thus $h_n=0$ on
$\{n\ge N\}$. A **budgeted** predictable grid has a deterministic integer
$B$ with $N\le B$ almost surely.

The condition $h_n\in\mathcal F_{\tau_n}$ says the next interval is selected
using information available at its left endpoint. Predictability is relative
to the specified filtration: a step choice using a trial Brownian increment
is excluded when it fails this measurability test. No Brownian motion or
filtration-relative independence assumption is part of this definition.
Brownian-bridge refinement can retain sampled increments, but retaining them
does not by itself establish the required measurability of the step choice.
