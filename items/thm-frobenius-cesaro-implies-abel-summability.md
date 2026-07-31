---
id: thm-frobenius-cesaro-implies-abel-summability
kind: theorem
title: "Frobenius' theorem: Cesaro summability of a real series implies Abel summability to the same value"
status: published
origin: session
deps: [lem-abel-transform-of-cesaro-means, def-abel-and-cesaro-summability-of-a-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Cesàro summation, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"}]}
pipeline_run: null
---

## Statement

If a real series is Cesaro summable to $s$, then it is Abel summable to $s$.

## Facts & Assumptions

**Given:** Cesaro means $\sigma_n\to s$ for the partial sums of $\sum a_n$.

[L1] If $(\sigma_n)$ is bounded, the Abel series converges for $0<x<1$ and its transform is $A(x)=(1-x)^2\sum_{n\ge0}\iota(n+1)\sigma_nx^n$ ([[lem-abel-transform-of-cesaro-means]]).

[L2] The nonnegative weights $w_n(x):=(1-x)^2\iota(n+1)x^n$ sum to $1$ for $0<x<1$. Indeed, apply the transform in [L1] to the series with coefficients $1,0,0,\ldots$, whose partial sums and Cesaro means are all $1$ ([[lem-abel-transform-of-cesaro-means]]).

[L3] Abel summability to $s$ means that the Abel series converges on $0\le x<1$ and tends to $s$ as $x\uparrow1$ ([[def-abel-and-cesaro-summability-of-a-series]]).

## Proof

**Proof technique:** direct.

1.1 Since $(\sigma_n)$ converges, it is bounded, so [L1] applies and $A(x)-s=\sum_{n\ge0}w_n(x)(\sigma_n-s)$. [given, L1, L2]

2.1 Given $\varepsilon>0$, choose $N$ with $|\sigma_n-s|<\varepsilon$ for $n\ge N$. The corresponding tail is at most $\varepsilon\sum_{n\ge N}w_n(x)\le\varepsilon$. [step 1.1, L2, choose]

3.1 For each fixed $n$, $w_n(x)\to0$ as $x\uparrow1$, so the finite head tends to $0$. Together with step 2.1 this gives $A(x)\to s$, which is Abel summability by definition. [step 1.1, step 2.1, L2, L3] ∎
