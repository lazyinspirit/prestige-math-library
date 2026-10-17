---
id: thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds
kind: theorem
title: "Directional Jacobian and Hessian differences retain Taylor and evaluation-noise errors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobian-and-hessian-vector-difference-products, lem-derivatives-along-a-line-have-the-multinomial-expansion, thm-symmetry-of-higher-mixed-partials, cor-taylor-lagrange-and-cauchy-remainders, def-taylor-polynomial-and-remainder, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-abs-value, lem-of-abs-value, def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables, thm-factorization-of-expectations-for-independent-variables]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
dependency_level: 1
---

## Statement

Let $m,n\ge1$, $U\subseteq\mathbb R^n$ be open, $x\in U$, $v\in\mathbb R^n$, and $h>0$ with the required line segments contained in $U$. Use the estimators of [[def-jacobian-and-hessian-vector-difference-products]]. For a vector-valued map, $F\in C^k(U)$ means that each component $F_i$ is in $C^k(U)$. For $F\in C^2$, suppose each component $g_i(t):=F_i(x+tv)$ satisfies $|g_i''(t)|\le b_{2,i}$ for $0\le t\le h$, with $b_{2,i}\ge0$; put $M_{2,F}:=(\sum_{i<m} b_{2,i}^2)^{1/2}$. For $F\in C^3$, suppose $|g_i'''(t)|\le b_{3,i}$ for $-h\le t\le h$, with $b_{3,i}\ge0$; put $M_{3,F}:=(\sum_{i<m} b_{3,i}^2)^{1/2}$. Then

$$\|J_h^+(F,x,v)-JF(x)v\|_2\le M_{2,F}h/2,\qquad \|J_h^0(F,x,v)-JF(x)v\|_2\le M_{3,F}h^2/6.$$

For $f\in C^3$, set $q_j(t):=\partial_jf(x+tv)$, suppose $|q_j''(t)|\le a_{2,j}$ on $[0,h]$, with $a_{2,j}\ge0$, and put $M_{2,H}:=(\sum_{j<n} a_{2,j}^2)^{1/2}$. For $f\in C^4$, suppose $|q_j'''(t)|\le a_{3,j}$ on $[-h,h]$, with $a_{3,j}\ge0$, and put $M_{3,H}:=(\sum_{j<n} a_{3,j}^2)^{1/2}$. Then

$$\|H_h^+(f,x,v)-H_f(x)v\|_2\le M_{2,H}h/2,\qquad \|H_h^0(f,x,v)-H_f(x)v\|_2\le M_{3,H}h^2/6.$$

If each vector evaluation has Euclidean error at most $\delta$, the forward evaluation contribution is at most $2\delta/h$ and the central contribution at most $\delta/h$ (hence also at most $2\delta/h$). For a scalar output coordinate on a common probability space, suppose its two square-integrable evaluation noises are centered, with variances $\sigma_1^2,\sigma_0^2$ and covariance $c$. Their forward-difference noise variance is $(\sigma_1^2+\sigma_0^2-2c)/h^2$; the central formula has the same numerator divided by $4h^2$. If these centered noises are independent and both have variance $\sigma^2$, then the formulas reduce to $2\sigma^2/h^2$ forward and $\sigma^2/(2h^2)$ central. No variance sum or root-sum-square total-error claim is made without the stated centering and covariance information.

If every evaluation call used in a given estimate has Euclidean error at most a common $\delta\ge0$, then the inexact estimates of [[def-jacobian-and-hessian-vector-difference-products]] satisfy

$$\|\widehat J_h^+(F,x,v)-JF(x)v\|_2\le M_{2,F}h/2+2\delta/h,\qquad \|\widehat J_h^0(F,x,v)-JF(x)v\|_2\le M_{3,F}h^2/6+\delta/h,$$

$$\|\widehat H_h^+(f,x,v)-H_f(x)v\|_2\le M_{2,H}h/2+2\delta/h,\qquad \|\widehat H_h^0(f,x,v)-H_f(x)v\|_2\le M_{3,H}h^2/6+\delta/h.$$

The central evaluation contribution is at most $\delta/h$, so the conservative $2\delta/h$ contribution is also valid for the central estimates.

## Facts & Assumptions

**Given:** The domains, smoothness, component derivative bounds and evaluation-error hypotheses in the statement.

[F1] [[def-jacobian-and-hessian-vector-difference-products]]: the exact products and four directional estimators are as stated there; the inexact estimates replace each function or gradient evaluation by its inexact value, with error bounds applying per call.

[F2] [[lem-derivatives-along-a-line-have-the-multinomial-expansion]]: for a $C^k$ scalar field on an open set, derivatives of its restriction to an affine line are the corresponding directional partial-derivative sums through order $k$.

[F3] [[thm-symmetry-of-higher-mixed-partials]]: for a $C^k$ scalar field and $k\ge2$, permuting the order of the $k$ coordinate differentiations does not change the result.

[F4] [[cor-taylor-lagrange-and-cauchy-remainders]] and [[def-taylor-polynomial-and-remainder]]: for a real $C^2$ or $C^3$ function on an interval, the remainder after degree $1$ or degree $2$ is $g''(\xi)h^2/2$ or $g'''(\xi)h^3/6$.

[F5] [[def-p-norms-on-rn]] and [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: for nonempty finite-dimensional real output vectors, $\|\cdot\|_2$ is the Euclidean norm and obeys the triangle inequality and absolute homogeneity.

[F6] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: variance and covariance are centered second moments, and covariance is symmetric and bilinear on finite linear combinations of square-integrable real random variables.

[F7] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of integrable functions of independent real random variables factor into products of expectations.

[F8] [[def-abs-value]] and [[lem-of-abs-value]]: $|r|\ge0$ and $|rs|=|r|\,|s|$ for real $r,s$.

[F9] On a probability space, every square-integrable real random variable $X$ is integrable: $2|X|\le1+X^2$ gives $2\mathbb E|X|\le1+\mathbb E[X^2]<\infty$.

## Proof

**Given:** The hypotheses listed above.

1.1 For each component $i$, [F2] identifies $g_i'(0)=(JF(x)v)_i$. Apply [F4] through degree $1$ on $[0,h]$ to obtain $|(J_h^+)_i-(JF(x)v)_i|\le b_{2,i}h/2$. By [F8], these absolute values and bounds are nonnegative; squaring preserves their order because $b^2-a^2=(b-a)(b+a)\ge0$ when $0\le a\le b$. Sum over $i<m$ and use [F5] and the definition of $M_{2,F}$ to obtain the stated Euclidean vector bound. [given, F1, F2, F4, F5, F8, algebra]

1.2 For either the Jacobian-vector or gradient-difference Hessian-vector estimate, the forward evaluation perturbation is $(e_1-e_0)/h$. [F5] bounds its norm by $(\|e_1\|_2+\|e_0\|_2)/h\le2\delta/h$. For the central quotient the denominator is $2h$, giving $\delta/h$. [given, F1, F5, algebra]

1.3 For centered square-integrable coordinate noises $E_1,E_0$, [F6] and the definitions of variance and covariance give $\operatorname{Var}(E_1-E_0)=\operatorname{Cov}(E_1-E_0,E_1-E_0)$. Bilinearity and symmetry then yield $\sigma_1^2+\sigma_0^2-2c$. Dividing by $h^2$ or $(2h)^2$ gives the forward and central formulas. If the noises are independent with common variance $\sigma^2$, [F9] makes them integrable, so [F7] gives $\mathbb E[E_1E_0]=\mathbb E[E_1]\mathbb E[E_0]=0$; their covariance is $0$ by [F6], yielding $2\sigma^2/h^2$ and $\sigma^2/(2h^2)$. [given, F6, F7, F9, algebra]

2.1 For each component $i$, apply [F4] through degree $2$ at both $h$ and $-h$ to $g_i$. The constant and quadratic terms cancel in the central quotient, leaving $|(J_h^0)_i-(JF(x)v)_i|\le b_{3,i}h^2/6$. The same nonnegative-square comparison from step 1.1, [F8], and the sum defining $M_{3,F}$ give the central Jacobian-vector bound by [F5]. [given, F1, F2, F4, F5, F8, step 1.1, algebra]

2.2 For $q_j(t)=\partial_jf(x+tv)$, [F2] gives $q_j'(0)=\sum_k\partial_k\partial_jf(x)v_k$. By [F3] and the Hessian convention in [F1], this equals $(H_f(x)v)_j$. Applying [F4] through degree $1$ to each $q_j$ yields the component forward bound $a_{2,j}h/2$; the nonnegative-square comparison from step 1.1 gives the sum bound, and [F5] then yields $\|H_h^+-H_fv\|_2\le M_{2,H}h/2$. [given, F1, F2, F3, F4, F5, step 1.1, algebra]

2.3 Applying [F4] through degree $2$ at $h$ and $-h$ to each $q_j$ cancels the even terms and yields component error at most $a_{3,j}h^2/6$. The same nonnegative-square comparison from step 1.1, together with [F5], gives the central Hessian-vector bound. [given, F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Combining the two Jacobian-vector truncation bounds in steps 1.1 and 2.1, the two Hessian-vector truncation bounds in steps 2.2 and 2.3, and the corresponding evaluation bounds in step 1.2 by the Euclidean triangle inequality [F5] gives all four hatted-estimate bounds in the Statement. For random errors, the covariance identity in step 1.3 applies; absent centering/covariance hypotheses no root-sum-square conclusion follows. [step 1.1, step 2.1, step 2.2, step 2.3, step 1.2, step 1.3, F5] ∎
