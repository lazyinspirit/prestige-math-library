---
id: cex-geometric-power-series-not-uniform-on-its-open-interval
kind: counterexample
title: "The geometric series converges pointwise but not uniformly on $(-1,1)$"
status: published
origin: session
deps: [fs-power-series-uniform-on-its-open-interval, thm-geometric-series, def-pointwise-uniform-and-uniformly-cauchy-convergence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "MIT 18.100C, Lecture 11: Power Series", url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"}]}
pipeline_run: null
---

## Statement

The partial sums of $\sum_{n\ge0}x^n$ converge pointwise to $1/(1-x)$ on $(-1,1)$ but do not converge uniformly there.

## Facts & Assumptions

**Given:** The geometric-series partial sums on $(-1,1)$.

[L1] Pointwise convergence follows from the geometric-series theorem ([[thm-geometric-series]]).

[L2] Uniform convergence implies the uniform Cauchy property ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Verification

**Proof technique:** direct.

1.1 Consecutive partial sums differ by $x^N$, whose supremum over $(-1,1)$ is $1$ for every $N$. [given, algebra]

2.1 Thus the partial sums are not uniformly Cauchy by [L2] and hence not uniformly convergent, though [L1] gives pointwise convergence. This is the counterexample recorded in [[fs-power-series-uniform-on-its-open-interval]]. [step 1.1, L1, L2] ∎
