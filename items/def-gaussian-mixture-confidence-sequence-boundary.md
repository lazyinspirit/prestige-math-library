---
id: def-gaussian-mixture-confidence-sequence-boundary
kind: definition
title: Gaussian-mixture confidence-sequence boundary
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences, Proposition 5
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Martingales 1: Concentration Inequalities — Conjugate Mixtures, 36-771 lecture notes, Carnegie Mellon University, Fall 2018, Proposition 1"
      url: https://stat.cmu.edu/~aramdas/martingales18/L18-conjugate.pdf
---

## Definition

Let $\sigma^2>0$ be a supplied scale, let $\rho>0$ be a tuning parameter, and let $\alpha\in(0,1)$.
For $v\ge0$ define
$$u_\alpha(v):=\sqrt{(v+\rho)\log\!\left(\frac{v+\rho}{\alpha^2\rho}\right)}.$$
The expression is real because $(v+\rho)/(\alpha^2\rho)>1$. For a real data sequence
$x_1,x_2,\ldots$, set $\bar x_t=t^{-1}\sum_{i=1}^t x_i$ and define
$$C_0:=\mathbb R,\qquad C_t:=\left[\bar x_t-\frac{u_\alpha(t\sigma^2)}{t},\,\bar x_t+\frac{u_\alpha(t\sigma^2)}{t}\right]\quad(t\ge1).$$
The endpoints are included. This definition specifies an interval rule only; it makes no coverage or
time-uniform validity assertion.
