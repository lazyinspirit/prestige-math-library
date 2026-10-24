---
id: def-abel-and-cesaro-summability-of-a-series
kind: definition
title: "Abel summability by $\\lim_{x\\uparrow1}\\sum a_nx^n$ and Cesaro summability by the Cesaro means of the partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-cesaro-mean, def-function-limit, def-real-power-series-and-radius-of-convergence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Definition

For a real series $\sum_{n\ge0}a_n$, write its inclusive partial sums as

$$S_n:=\sum_{k=0}^{n}a_k$$

and their Cesaro means as

$$\sigma_n:=\frac1{\iota(n+1)}\sum_{k=0}^{n}S_k.$$

The series is **Cesaro summable to $s$** if $\sigma_n\to s$ ([[def-cesaro-mean]]).

It is **Abel summable to $s$** if the power series

$$A(x):=\sum_{n=0}^{\infty}a_nx^n$$

converges for every $0\le x<1$ and $\lim_{x\uparrow1}A(x)=s$ in the one-sided sense of [[def-function-limit]]. These are summability methods for the zero-indexed series of [[def-series]]; they do not assert ordinary convergence.
