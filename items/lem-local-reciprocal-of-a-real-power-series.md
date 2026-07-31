---
id: lem-local-reciprocal-of-a-real-power-series
kind: lemma
title: "A convergent real power series with nonzero constant term has a convergent reciprocal power series on a smaller neighbourhood"
status: published
origin: session
deps: [lem-cauchy-product-of-real-power-series, thm-geometric-series, cor-power-series-sums-are-continuous, cor-power-series-convergence-dichotomy, thm-double-series-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Power series, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Power_series"}]}
pipeline_run: null
---

## Statement

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have positive radius and $a_0\ne0$. Then on some neighbourhood of $c$, $1/f$ is represented by a convergent real power series about $c$.

## Facts & Assumptions

**Given:** The convergent power series $f$ with $f(c)=a_0\ne0$.

[L1] For $|z|<1$, $\sum_{m\ge0}(-z)^m=1/(1+z)$ ([[thm-geometric-series]]).

[L2] A power series converges absolutely inside its radius, and its sum is continuous there ([[cor-power-series-convergence-dichotomy]], [[cor-power-series-sums-are-continuous]]).

[L3] Finite powers of a power series are represented by repeated Cauchy products ([[lem-cauchy-product-of-real-power-series]]).

[L4] Absolutely convergent double series may be regrouped without changing their sum ([[thm-double-series-fubini]]).

## Proof

**Proof technique:** constructive.

1.1 Write $f=a_0+h$, where $h(c)=0$. By absolute convergence, choose $r>0$ inside the radius so small that $B_r:=\sum_{n\ge1}|a_n|r^n<|a_0|$. [construct, L2, choose]

2.1 By [L1], $1/f(x)=a_0^{-1}\sum_{m\ge0}(-h(x)/a_0)^m$ for $|x-c|\le r$. Expand each power by [L3]. [step 1.1, L1, L3]

3.1 The total absolute sum of the expanded terms is bounded by $|a_0|^{-1}\sum_m(B_r/|a_0|)^m<\infty$. By [L4], regrouping by powers of $x-c$ gives a convergent reciprocal power series on the neighbourhood. [step 1.1, step 2.1, L1, L4, discharge-construct] ∎
