---
id: fs-power-series-uniform-on-its-open-interval
kind: false-statement
title: "FALSE: every power series converges uniformly on its entire open interval of convergence"
status: published
origin: session
deps: [thm-geometric-series, thm-uniform-cauchy-criterion-real-functions, def-pointwise-uniform-and-uniformly-cauchy-convergence]
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

**False claim:** every real power series converges uniformly on its entire open interval of convergence.

## Facts & Assumptions

**Given:** The geometric power series $\sum_{n\ge0}x^n$ on $(-1,1)$.

[L1] It converges pointwise there to $1/(1-x)$ ([[thm-geometric-series]]).

[L2] A sequence of real-valued functions converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

## Refutation

**Proof technique:** direct.

1.1 For every $N$, the difference between the $(N+1)$st and $N$th partial sums is $x^N$. Its supremum over $x\in(-1,1)$ is $1$. [given, algebra]

2.1 Thus the partial sums are not uniformly Cauchy and cannot converge uniformly by [L2], despite pointwise convergence on the entire open radius interval by [L1]. [step 1.1, L1, L2] ∎
