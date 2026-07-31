---
id: thm-power-series-uniform-on-compact-subintervals
kind: theorem
title: "A power series converges absolutely and uniformly on every closed interval strictly inside its interval of convergence"
status: published
origin: session
deps: [cor-power-series-convergence-dichotomy, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, def-interval]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
verification:
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which

$$r:=\max\{|u-c|,|v-c|\}<R.$$

Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.

## Facts & Assumptions

**Given:** A power series of radius $R$ and a closed interval $[u,v]$ satisfying the strict interior condition above ([[def-interval]], [[def-series-of-real-functions]]).

[L1] The power series converges absolutely at every point whose distance from $c$ is less than $R$ ([[cor-power-series-convergence-dichotomy]]).

[L2] If $|f_n(x)|\le M_n$ for all $n,x$ and $\sum M_n$ converges, the Weierstrass M-test gives absolute pointwise and uniform convergence of $\sum f_n$ ([[thm-weierstrass-m-test-for-function-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a real $\rho$ with $r<\rho<R$, or merely $\rho>r$ when $R=+\infty$. Then the scalar series $\sum |a_n|\rho^n$ converges by [L1], applied at $x=c+\rho$. [given, L1, choose]

1.2 For every $x\in[u,v]$, order-convexity gives $|x-c|\le\max\{|u-c|,|v-c|\}=r<\rho$, and hence $|a_n(x-c)^n|\le |a_n|\rho^n$ for every $n$. [given, algebra]

2.1 Apply [L2] to $f_n(x)=a_n(x-c)^n$ and $M_n=|a_n|\rho^n$. The series is absolutely convergent at each $x\in[u,v]$ and uniformly convergent on the whole interval. [step 1.1, step 1.2, L2] ∎
