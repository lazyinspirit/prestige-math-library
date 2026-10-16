---
id: def-qa-29-expectation-estimation-task
kind: definition
title: "Finite expectation-estimation task"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Sections 1–2"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Sections 1.2 and 6.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

A **finite expectation-estimation task** consists of a nonempty finite set $X$, a probability law $p:X\to[0,1]$ with $\sum_{x\in X}p_x=1$, and an exactly encoded real-valued function $g:X\to[a,b]$, where $a\le b$ are finite rationals. Its target is
$$\mu:=\mathbb E_p[g]=\sum_{x\in X}p_xg(x).$$

For rational parameters $\varepsilon>0$ and $0<\delta<1$, an $(\varepsilon,\delta)$ estimator is a randomized or quantum procedure that outputs a real number $\widetilde\mu$ satisfying
$$\Pr\bigl(|\widetilde\mu-\mu|\le\varepsilon\bigr)\ge1-\delta.$$
The task specifies the target law and success event only. A particular procedure must state how it accesses samples or coherent state preparation and must charge those resources separately.

A value that approximates an underlying real-valued observable to error $\tau$ defines a different task with target $\mathbb E_p[\widetilde g]$; any claim about $\mathbb E_p[g]$ must add the encoding error $\tau$ to its error budget.
