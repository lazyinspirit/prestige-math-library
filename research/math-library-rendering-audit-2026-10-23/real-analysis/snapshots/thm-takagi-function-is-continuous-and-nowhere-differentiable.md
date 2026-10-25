---
id: thm-takagi-function-is-continuous-and-nowhere-differentiable
kind: theorem
title: "The Takagi series converges uniformly to a continuous nowhere differentiable function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tent-function-and-takagi-series, thm-weierstrass-m-test-for-function-series, thm-uniform-limit-continuous-real-functions, def-derivative]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Takagi function: a survey"
      url: "https://arxiv.org/abs/1110.1691"
pipeline_run: null
---

## Statement

The Takagi series $T(x)=\sum_{n\ge0}2^{-n}\phi(2^nx)$ converges uniformly on $[0,1]$. Its sum is continuous and has no finite derivative at any point of $[0,1]$, with one-sided derivatives at the endpoints understood.

## Facts & Assumptions
**Given:** The tent function and series are as in [[def-tent-function-and-takagi-series]].

[L1] The Weierstrass M-test gives uniform convergence from a summable uniform majorant ([[thm-weierstrass-m-test-for-function-series]]).

[L2] A uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L3] Differentiability requires convergence of the relevant difference quotients ([[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Since $0\le\phi\le1/2$, the $n$th summand is bounded by $2^{-n-1}$; its majorant series converges. Thus $T$ converges uniformly by [L1]. [given, L1, algebra]

1.2 For $x\in[0,1)$ and each $N$, let $u_N\le x<v_N$ be the adjacent dyadic rationals of order $N$; at $x=1$ use the left adjacent interval. Every summand of index at least $N$ vanishes at both endpoints, while each earlier summand is affine on that interval with slope $\varepsilon_k\in\{-1,1\}$. [given, algebra]

2.1 Every summand is continuous, so $T$ is continuous by [L2]. [step 1.1, L2, algebra]

2.2 Hence $\bigl(T(v_N)-T(u_N)\bigr)/(v_N-u_N)=\sum_{k<N}\varepsilon_k$. These secant slopes cannot converge to a finite real number, because consecutive partial sums differ by $\varepsilon_N$ of absolute value one. [step 1.2, algebra]

3.1 If a finite derivative existed at an interior point, both endpoint difference quotients and therefore their secant combination would tend to it; at a dyadic point or endpoint the same argument uses the nested one-sided dyadic intervals. This contradicts step 2.2 and [L3]. [step 2.2, L3, algebra] ∎
