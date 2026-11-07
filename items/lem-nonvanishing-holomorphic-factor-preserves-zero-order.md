---
id: lem-nonvanishing-holomorphic-factor-preserves-zero-order
kind: lemma
title: "A nonvanishing holomorphic factor preserves zero order"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-taylor-expansion-holomorphic-function
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-cauchy-products-of-complex-power-series
  - def-order-of-zero-holomorphic-function
  - thm-complex-numbers-form-a-field
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §3.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
      locator: "Ch. 4, §3.2, printed pp. 127–130"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 3 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
      locator: "Ch. 3, §1, printed pp. 73–74, Theorem 1.1"
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and let $f,g:U\to\mathbb C$ be holomorphic. If $g(a)\ne0$, then
$$\operatorname{ord}_a(fg)=\operatorname{ord}_a(f),$$
where the order is the least index of a nonzero Taylor coefficient and is $+\infty$ when every Taylor coefficient vanishes.

## Statement references

[[def-order-of-zero-holomorphic-function]]

[Lars V. Ahlfors, *Complex Analysis*, 3rd ed., Ch. 4 §3.2, printed pp. 127–130](https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf)

[Elias M. Stein and Rami Shakarchi, *Complex Analysis*, Ch. 3 §1, printed pp. 73–74, Theorem 1.1](https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf)

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, holomorphic functions $f,g:U\to\mathbb C$, and $g(a)\ne0$.

[F1] [[thm-taylor-expansion-holomorphic-function]]: each function holomorphic near $a$ equals its Taylor series on a sufficiently small disc about $a$.

[F2] [[prop-algebra-of-holomorphic-functions-in-several-variables]]: the product $fg$ is holomorphic on $U$.

[F3] [[prop-cauchy-products-of-complex-power-series]]: on a common disc, the Taylor coefficient of $fg$ at index $n$ is $c_n=\sum_{k=0}^{n}a_kb_{n-k}$ when $a_k,b_k$ are the Taylor coefficients of $f,g$.

[F4] [[def-order-of-zero-holomorphic-function]]: the order is the least index with nonzero Taylor coefficient, or $+\infty$ exactly when every coefficient is zero.

[F5] [[thm-complex-numbers-form-a-field]]: a product of two nonzero complex numbers is nonzero.

## Proof

1.1 By [F1], choose a disc about $a$ on which $f$ and $g$ equal their Taylor series, and write those coefficients as $(a_k)_{k\ge0}$ and $(b_k)_{k\ge0}$. Their constant coefficients satisfy $b_0=g(a)\ne0$. [given, F1, choose]

1.2 The product $fg$ is holomorphic by [F2], and [F3] gives its Taylor coefficients $c_n=\sum_{k=0}^{n}a_kb_{n-k}$ on a possibly smaller common disc. [given, F1, F2, F3]

2.1 If $\operatorname{ord}_a(f)=m<+\infty$, then [F4] gives $a_k=0$ for $k<m$ and $a_m\ne0$. For $n<m$, every summand of $c_n$ has a zero factor $a_k$; for $n=m$, all terms except $a_mb_0$ vanish, and $a_mb_0\ne0$ by [F5]. Thus $m$ is the least index with $c_m\ne0$, so $\operatorname{ord}_a(fg)=m$. [F3, F4, F5, step 1.2]

3.1 If $\operatorname{ord}_a(f)=+\infty$, [F4] gives $a_k=0$ for every $k$, so [F3] gives $c_n=0$ for every $n$ and [F4] gives $\operatorname{ord}_a(fg)=+\infty$. The finite and infinite cases exhaust the definition of order, proving the claim. [F3, F4, step 1.2] ∎
