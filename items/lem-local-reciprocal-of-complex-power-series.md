---
id: lem-local-reciprocal-of-complex-power-series
kind: lemma
title: "A convergent complex power series with nonzero constant term has a convergent reciprocal power series locally"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-local-composition-of-complex-power-series, thm-termwise-differentiation-of-complex-power-series, cor-complex-differentiability-implies-continuity, prop-cauchy-products-of-complex-power-series, cor-uniqueness-of-complex-power-series-coefficients]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power-series supplementary notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum_{n\ge0}c_n(z-a)^n$ converges near $a$ and $c_0\ne0$, then $1/f$ is represented by a convergent power series on some neighbourhood of $a$. Its coefficients $d_n$ satisfy $d_0=c_0^{-1}$ and $d_n=-c_0^{-1}\sum_{k=1}^n c_kd_{n-k}$ for $n\ge1$.

## Facts & Assumptions

**Given:** A convergent complex power series $f$ with $f(a)=c_0\ne0$.

[L1] A composition of convergent complex power series has a local power-series expansion when the inner series has zero constant term ([[lem-local-composition-of-complex-power-series]]).

[L2] A complex power-series sum is holomorphic throughout its open disc of convergence ([[thm-termwise-differentiation-of-complex-power-series]]).

[L3] Complex differentiability at a point implies continuity there ([[cor-complex-differentiability-implies-continuity]]).

[L4] Products of convergent complex power series have the finite Cauchy-convolution coefficients on their common disc ([[prop-cauchy-products-of-complex-power-series]]).

[L5] Two power-series representations about the same centre that agree on a neighbourhood have equal coefficients ([[cor-uniqueness-of-complex-power-series-coefficients]]).

## Proof

**Proof technique:** direct.

1.1 Put $H(z)=1-f(z)/c_0$, so $H(a)=0$. By [L2] and [L3], $f$ is continuous at $a$; since $|H(z)-H(a)|=|f(z)-f(a)|/|c_0|$ and $c_0\ne0$, $H$ is continuous there. Hence on a sufficiently small disc one has $|H(z)|<1$. [L2, L3, choose, algebra]

2.1 The finite identity $(1-H)\sum_{m=0}^NH^m=1-H^{N+1}$ and $|H|<1$ give $(1-H)^{-1}=\sum_{m\ge0}H^m$. By [L1], this composition has a local power series. [step 1.1, L1, algebra]

3.1 Hence $1/f=c_0^{-1}(1-H)^{-1}$ has a local power series. Multiply it by $f$ using [L4] and compare with the constant series $1$ by [L5]; the constant coefficient gives $d_0=c_0^{-1}$, while for $n\ge1$ the nonempty sum over $1\le k\le n$ gives the displayed recursion. The nonzero constant term licenses division. If $f$ is constant, the same recursion gives $d_n=0$ for every $n\ge1$. [step 2.1, L4, L5, algebra] ∎
