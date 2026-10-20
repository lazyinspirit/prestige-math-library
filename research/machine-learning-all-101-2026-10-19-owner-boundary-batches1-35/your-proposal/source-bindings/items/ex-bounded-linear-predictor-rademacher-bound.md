---
id: ex-bounded-linear-predictor-rademacher-bound
kind: example
title: "Bounded linear predictors have a radius-dependent bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-rademacher-complexity
  - lem-cauchy-schwarz-for-finite-random-variables
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

Let $\langle u,v\rangle:=\sum_{j=1}^d u_jv_j$ and $\|u\|_2:=\sqrt{\sum_{j=1}^d u_j^2}$ on $\mathbb R^d$. Put $\mathcal X_R:=\{x\in\mathbb R^d:\|x\|_2\le R\}$ with its Borel sigma-algebra, let $m,d\ge1$, and let a fixed sample $x_1,\ldots,x_m\in\mathcal X_R$. Let $B,R\ge0$ satisfy $BR\le1$. For the loss class

$$\mathcal G:=\left\{g_w:\mathcal X_R\to[0,1],\quad g_w(x)=\frac{1+\langle w,x\rangle}{2},\quad \|w\|_2\le B\right\},$$

every $g_w$ takes values in $[0,1]$ on the sample domain $\{x:\|x\|_2\le R\}$, and

$$\widehat{\mathfrak R}_S(\mathcal G)\le\frac{BR}{2\sqrt m}.$$

## Example references

[[def-rademacher-complexity]]: fixes the empirical one-sided sign-average convention.

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: gives the Euclidean inner-product bound used to maximize over the ball.

[[lem-cauchy-schwarz-for-finite-random-variables]]: bounds the sign-average norm by its second moment.

## Facts & Assumptions

**Given:** The fixed sample, radii $B,R\ge0$ with $BR\le1$, and independent uniform signs.

[F1] In a real inner product space, $|\langle u,v\rangle|\le\|u\|\|v\|$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F2] For finite random variables, $(\mathbb E[XY])^2\le\mathbb E[X^2]\mathbb E[Y^2]$. [[lem-cauchy-schwarz-for-finite-random-variables]]

[F3] The empirical complexity is $\mathbb E_\sigma\sup_{g\in\mathcal G}m^{-1}\sum_i\sigma_i g(x_i)$. [[def-rademacher-complexity]]

## Verification

**Given:** The objects and hypotheses in the Example.

1.1 For every $w$ in the radius-$B$ ball and every sample point, [F1] gives $|\langle w,x_i\rangle|\le BR\le1$. Thus $g_w(x_i)\in[0,1]$, as required for the stated loss class. [F1, given]

1.2 Put $V_\sigma:=\sum_i\sigma_i x_i$. By [F3], $\widehat{\mathfrak R}_S(\mathcal G)=\frac1{2m}\mathbb E_\sigma[\sum_i\sigma_i+\sup_{\|w\|_2\le B}\langle w,V_\sigma\rangle]$. The sign sum has expectation zero. By [F1], $\langle w,V_\sigma\rangle\le B\|V_\sigma\|_2$; equality is attained at $w=BV_\sigma/\|V_\sigma\|_2$ when $V_\sigma\ne0$, while both sides are zero when $V_\sigma=0$. Therefore $\widehat{\mathfrak R}_S(\mathcal G)=\frac{B}{2m}\mathbb E_\sigma\|V_\sigma\|_2$. [F1, F3, given, construct, algebra]

2.1 Apply [F2] with $X=\|V_\sigma\|_2$ and $Y=1$ to get $(\mathbb E_\sigma\|V_\sigma\|_2)^2\le\mathbb E_\sigma\|V_\sigma\|_2^2$. Expanding the square and using $\mathbb E_\sigma[\sigma_i\sigma_j]=0$ for $i\ne j$ and $1$ for $i=j$ gives $\mathbb E_\sigma\|V_\sigma\|_2^2=\sum_i\|x_i\|_2^2\le mR^2$. Substitution in step 1.2 proves $\widehat{\mathfrak R}_S(\mathcal G)\le BR/(2\sqrt m)$. [F2, step 1.2, given, algebra] ∎
