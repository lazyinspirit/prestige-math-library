---
id: lem-cauchy-product-of-real-power-series
kind: lemma
title: "Inside the common radius the product of two power-series sums is represented by the Cauchy product of their coefficients"
status: published
origin: session
deps: [cor-power-series-convergence-dichotomy, def-cauchy-product, cor-cauchy-product-absolute]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Power series, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Power_series"}]}
pipeline_run: null
---

## Statement

Suppose $f(x)=\sum_{n\ge0}a_n(x-c)^n$ and $g(x)=\sum_{n\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\min(R_f,R_g)$,

$$f(x)g(x)=\sum_{n=0}^{\infty}\left(\sum_{k=0}^{n}a_kb_{n-k}\right)(x-c)^n,$$

and the displayed product series converges absolutely.

## Facts & Assumptions

**Given:** The two power series in the statement and a point in their common open radius.

[L1] Both numerical series converge absolutely there ([[cor-power-series-convergence-dichotomy]]).

[L2] The Cauchy product of two absolutely convergent series converges absolutely to the product of their sums ([[def-cauchy-product]], [[cor-cauchy-product-absolute]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the numerical series with terms $a_k(x-c)^k$ and $b_j(x-c)^j$, whose absolute convergence is [L1]. [L1, L2]

2.1 Its $n$th Cauchy-product term is $\sum_{k=0}^{n}a_kb_{n-k}(x-c)^n$, which gives the formula and absolute convergence. [step 1.1, algebra] ∎
