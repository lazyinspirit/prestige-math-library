---
id: thm-zero-order-factorization-holomorphic-function
kind: theorem
title: "The order of a zero is the exponent in its local holomorphic factorization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-order-of-zero-holomorphic-function, thm-taylor-expansion-holomorphic-function, cor-complex-power-series-coefficient-formula, thm-complex-analytic-functions-are-holomorphic, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{ord}_a(f)$ and factorization"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorems 2.27 and 2.31"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on a neighbourhood of $a$. A holomorphic function has finite order $m$ at $a$ if and only if, on some neighbourhood of $a$, it has the form $f(z)=(z-a)^m g(z)$ with $g$ holomorphic and $g(a)\ne0$.

Moreover, $\operatorname{ord}_a(f)=+\infty$ if and only if $f$ vanishes on a neighbourhood of $a$.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on a neighbourhood of $a$.

[L1] The order $\operatorname{ord}_a(f)$ is the least natural $n$ for which the $n$th Taylor coefficient is nonzero, and is $+\infty$ when every Taylor coefficient is zero ([[def-order-of-zero-holomorphic-function]]).

[L2] Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L3] Every function analytic on an open subset of $\mathbb C$ is holomorphic there ([[thm-complex-analytic-functions-are-holomorphic]]).

[L4] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L5] A convergent complex power-series representation has uniquely determined coefficients, equal to the derivatives at its centre divided by the corresponding factorials ([[cor-complex-power-series-coefficient-formula]]).

## Proof

**Proof technique:** direct.

1.1 For the finite-order-to-factorization direction, suppose $\operatorname{ord}_a(f)=m<+\infty$ and write the Taylor expansion from [L2] as $f(z)=\sum_{n\ge0}c_n(z-a)^n$; [L1] gives $c_0=\cdots=c_{m-1}=0$ and $c_m\ne0$, so formally $f(z)=(z-a)^m\sum_{k\ge0}c_{m+k}(z-a)^k$. [L1, L2]

1.2 For the factorization-to-finite-order direction, suppose $f(z)=(z-a)^mg(z)$ locally with $g$ holomorphic and $g(a)\ne0$; expanding $g(z)=\sum_{k\ge0}b_k(z-a)^k$ by [L2] gives $b_0=g(a)\ne0$. Multiplication by $(z-a)^m$ gives a convergent power-series representation of $f$ whose coefficients below degree $m$ vanish and whose degree-$m$ coefficient is $b_0$; [L5] identifies these with the Taylor coefficients of $f$, so [L1] gives $\operatorname{ord}_a(f)=m$. [L1, L2, L5, algebra]

2.1 For the finite-order-to-factorization direction, define $g(z)=\sum_{k\ge0}c_{m+k}(z-a)^k$ on the Taylor disc: at $z=a$ the series has value $c_m$, and away from $a$ its absolute convergence follows by dividing the absolutely convergent tail of the series in step 1.1 by $|z-a|^m$; thus $g$ is analytic and [L3] makes it holomorphic. [step 1.1, L3, algebra]

3.1 For the finite-order-to-factorization direction, step 2.1 gives $g(a)=c_m\ne0$, and [L4] supplies a smaller neighbourhood on which $g$ remains nonzero; hence the required local factorization holds, including $m=0$ where the factor is $1$. [step 2.1, L4]

4.1 For the infinite-order equivalence, [L1] says infinite order means that every Taylor coefficient is zero, and [L2] then makes $f$ vanish on a neighbourhood of $a$; conversely, if $f$ vanishes on a neighbourhood, all of its derivatives and hence all of its Taylor coefficients at $a$ are zero, so [L1] gives infinite order. [L1, L2] ∎
