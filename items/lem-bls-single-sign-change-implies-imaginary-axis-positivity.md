---
dependency_level: 0
id: lem-bls-single-sign-change-implies-imaginary-axis-positivity
kind: lemma
title: A single sign change proves BLS imaginary-axis positivity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-complex-trigonometric-and-hyperbolic-functions
- def-real-elementary-functions-and-domains
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://arxiv.org/pdf/1803.06016v2
    locator: Section5 and BS07 Section4.3 single sign-change criterion
---

## Statement

Let $M\ge1$, $\delta>0$, and $x_0,\ldots,x_{M-1}\in\mathbb R$ satisfy $\sum_jx_j=1$. Suppose an integer $k\in\{0,\ldots,M-1\}$ satisfies $x_j\le0$ for $j<k$ and $x_j\ge0$ for $j>k$; the pivot $x_k$ is unrestricted. Define
$$
h(r)=\left(\operatorname{sinc}^2(\delta r/2)\sum_{j=0}^{M-1}x_j\cos(j\delta r)\right)^2,\qquad \operatorname{sinc}(0)=1.
$$
Then $h(r)\ge0$ for real $r$ and $h(it)\ge1$ for every real $t$. The signs and normalization are finite exact comparisons when the vector is rational. They are sufficient, not necessary, for positivity; arbitrary signed vectors are not asserted to pass.

## Facts & Assumptions

**Given:** The integer, scale, vector and pivot of the Statement.

[F1] Complex trigonometric and hyperbolic functions are defined by the exponential formulas. [[def-complex-trigonometric-and-hyperbolic-functions]]

[F2] The real exponential has its convergent power series and its ordinary ordered-real interpretation. [[def-real-elementary-functions-and-domains]]

## Proof

1.1 From [F1], $\cos(iju)=\cosh(ju)$ and $\operatorname{sinc}(iu/2)=\sinh(u/2)/(u/2)$, interpreted as one at $u=0$. The power series in [F2] give $\cosh v=\sum_{a\ge0}v^{2a}/(2a)!$ and $\sinh v/v=\sum_{a\ge0}v^{2a}/(2a+1)!$. Hence $\cosh v$ is even, at least one, and nondecreasing in $|v|$; also $\sinh v/v\ge1$ including the value at zero. [given, F1, F2, algebra]

2.1 Put $u=\delta t$. For $j<k$, monotonicity gives $\cosh(ju)\le\cosh(ku)$, and multiplication by $x_j\le0$ reverses that inequality. For $j>k$, the reverse comparison holds and $x_j\ge0$ preserves it. At $j=k$ there is equality for any sign. Summing gives $\sum_jx_j\cosh(ju)\ge\cosh(ku)\sum_jx_j=\cosh(ku)\ge1$. Thus squaring and multiplying by $(\sinh(u/2)/(u/2))^4\ge1$ proves $h(it)\ge1$. The real-axis expression is the square of a real number and so is nonnegative. This includes $M=1$, a pivot at either endpoint, zero coefficients and $t=0$. [given, step 1.1, algebra] ∎
