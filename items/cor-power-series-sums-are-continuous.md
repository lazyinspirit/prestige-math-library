---
id: cor-power-series-sums-are-continuous
kind: corollary
title: "The sum of a real power series is continuous at every point strictly inside its interval of convergence"
status: published
origin: session
deps: [thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-continuous-real-functions, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

If $f(x)=\sum_{n\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.

## Facts & Assumptions

**Given:** A power-series sum $f$ and a point $x_0$ strictly inside its radius.

[L1] The series converges uniformly on each closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L2] Every polynomial partial sum is continuous, since constants, the identity, powers, scalar multiples and finite sums are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ so small that $[x_0-\delta,x_0+\delta]$ lies strictly inside $|x-c|<R$. [given, choose]

1.2 The polynomial partial sums are continuous on this interval by [L2] and converge uniformly there to $f$ by [L1]. [L1, L2]

2.1 By [L3], $f$ is continuous on that interval, and in particular at $x_0$. [step 1.2, L3] ∎
