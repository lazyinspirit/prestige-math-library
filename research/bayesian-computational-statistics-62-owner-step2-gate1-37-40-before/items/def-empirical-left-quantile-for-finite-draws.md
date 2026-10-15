---
id: def-empirical-left-quantile-for-finite-draws
kind: definition
title: Left empirical quantile of finite draws
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §4.3"
      url: https://arxiv.org/pdf/1903.08008v5
verification:
  precheck: n/a
axiom_use: "Sorting a finite real list and selecting an indexed entry use no choice principle."
---

## Definition

Let $x_1,\ldots,x_S\in\mathbb R$ with $S\ge1$, and let
$x_{(1)}\le\cdots\le x_{(S)}$ be these values in nondecreasing order,
retaining multiplicities. For $0<u\le1$, the **left empirical $u$-quantile** is

$$Q_S(u):=x_{(\lceil Su\rceil)}.$$

Thus ties are retained, and the empirical CDF is
$F_S(t)=S^{-1}\#\{i:x_i\le t\}$. In particular, for $0<u<1$,
$Q_S(u)=\inf\{t:F_S(t)\ge u\}$. No interpolation between adjacent order
statistics is performed.
