---
id: lem-abel-transform-of-cesaro-means
kind: lemma
title: "For $0<x<1$, the Abel transform of a series is $(1-x)^2\\sum_{n\\ge0}(n+1)\\sigma_nx^n$, where $\\sigma_n$ are the Cesaro means of its partial sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, def-finite-sum, thm-geometric-series, lem-power-monotone, lem-of-abs-value, def-cauchy-product, cor-cauchy-product-absolute, thm-direct-comparison-test, lem-series-linearity, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

Let $S_n:=\sum_{k=0}^{n}a_k$ and $\sigma_n:=\iota(n+1)^{-1}\sum_{k=0}^{n}S_k$. If $(\sigma_n)$ is bounded, then for every $0<x<1$ the Abel series converges and

$$\sum_{n=0}^{\infty}a_nx^n=(1-x)^2\sum_{n=0}^{\infty}\iota(n+1)\sigma_nx^n.$$

## Facts & Assumptions

**Given:** The coefficients, partial sums, and Cesaro means in the statement.

[L1] The canonical natural $\iota(n+1)$ is positive. Thus, putting $T_n:=\sum_{k=0}^{n}S_k$, the definition of $\sigma_n$ gives $T_n=\iota(n+1)\sigma_n$. Also $S_n=T_n-T_{n-1}$ with $T_{-1}:=0$; putting $S_{-1}:=0$ gives $a_n=S_n-S_{n-1}$ for every $n\ge0$ ([[def-abel-and-cesaro-summability-of-a-series]], [[def-finite-sum]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] For $0<x<1$, the geometric series is absolutely convergent because its terms are nonnegative. Its Cauchy product with itself has coefficient $\sum_{k=0}^{n}x^kx^{n-k}=\iota(n+1)x^n$ and sum $1/(1-x)^2$ ([[thm-geometric-series]], [[lem-power-monotone]], [[lem-of-abs-value]], [[def-cauchy-product]], [[cor-cauchy-product-absolute]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] Convergent real series may be added, subtracted and scaled term by term ([[lem-series-linearity]]).

[L4] A nonnegative series dominated termwise by a convergent nonnegative series converges ([[thm-direct-comparison-test]]).

## Proof

**Proof technique:** direct.

1.1 Choose $M\ge0$ with $|\sigma_n|\le M$ for every $n$. Then $|T_nx^n|\le M\iota(n+1)x^n$; [L2] and [L3] give convergence of the majorant series, so [L4] gives absolute convergence of $\sum_nT_nx^n$. [L1, L2, L3, L4, choose]

2.1 Since $S_n=T_n-T_{n-1}$, step 1.1 gives absolute convergence of $\sum_nS_nx^n$. With $T_{-1}=0$, the shifted series satisfies $\sum_{n\ge0}T_{n-1}x^n=x\sum_{n\ge0}T_nx^n$; combining the two convergent series by [L3] gives $\sum_{n\ge0}S_nx^n=(1-x)\sum_{n\ge0}T_nx^n$. [step 1.1, L1, L3, algebra]

3.1 Since $a_n=S_n-S_{n-1}$ with $S_{-1}=0$, step 2.1 likewise gives absolute convergence and $\sum_na_nx^n=(1-x)\sum_nS_nx^n$. Substitute step 2.1 and $T_n=\iota(n+1)\sigma_n$ to get the formula. [step 2.1, L1, L3] ∎
