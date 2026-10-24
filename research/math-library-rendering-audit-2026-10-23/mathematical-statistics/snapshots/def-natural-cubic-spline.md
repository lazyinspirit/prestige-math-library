---
id: def-natural-cubic-spline
kind: definition
title: Natural cubic splines
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Tibshirani, Nonparametric Regression: Splines and RKHS Methods, §§2.1–2.3"
      url: https://www.stat.berkeley.edu/~ryantibs/statlearn-s23/lectures/splines_rkhs.pdf
---

## Definition

Let $[a,b]$ be a bounded interval and let $a\le t_1<\cdots<t_r\le b$ with $r\ge2$. A natural cubic spline with knots $t_1,\ldots,t_r$ is a $C^2$ function on $[a,b]$ that is a polynomial of degree at most three on every $[t_j,t_{j+1}]$, has second derivative zero at $t_1$ and $t_r$, and is extended linearly on $[a,t_1]$ and $[t_r,b]$ when those intervals are nonempty. The knots $t_j$ are the distinct breakpoints; repeated observations at the same input do not create additional knots.
