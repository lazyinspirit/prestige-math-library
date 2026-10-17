---
id: lem-midpoint-quadrature-defect-for-p1-stiffness
kind: lemma
title: Midpoint quadrature defect for one-dimensional P1 stiffness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-variational-crime-error-framework, alg-composite-midpoint-rule, thm-composite-midpoint-error-bound, thm-additivity-over-subintervals, lem-triangle-inequality-finite, thm-cauchy-schwarz-and-the-euclidean-norm, thm-extreme-value-r]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, Theorem 7.1
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6 Numerical Integration
      url: https://fncbook.com/integration/
---

## Statement

Let $0=x_0<\cdots<x_N=1$ be a finite partition with cell lengths $h_K$ and maximum $h$. Let $A\in C^2([0,1])$, and let $v_h,w_h$ be continuous piecewise-linear functions. Define the exact and midpoint stiffness forms by

$$a(v_h,w_h):=\sum_K\int_KA(x)v_h'(x)w_h'(x)\,dx,\qquad a_h(v_h,w_h):=\sum_Kh_KA(m_K)v_h'|_Kw_h'|_K,$$

where $m_K$ is the cell midpoint and the cell derivatives are constant. Then

$$|a(v_h,w_h)-a_h(v_h,w_h)|\le\frac{h^2}{24}\|A''\|_{L^\infty(0,1)}\|v_h'\|_{L^2(0,1)}\|w_h'\|_{L^2(0,1)}.$$

The midpoint rule is exact for this stiffness integrand when $A$ is affine; for a general $C^2$ coefficient the displayed defect is retained. The bound is exact-arithmetic quadrature error, separate from roundoff.

## Facts & Assumptions

**Given:** The finite partition, $A\in C^2([0,1])$, and continuous piecewise-linear $v_h,w_h$.

[F1] [[alg-composite-midpoint-rule]]: on one cell $K$, the midpoint value times $h_K$ is the one-panel midpoint quadrature rule.

[F2] [[thm-composite-midpoint-error-bound]]: for $g\in C^2(K)$, the one-panel error is at most $h_K^3\|g''\|_{L^\infty(K)}/24$.

[F3] [[thm-additivity-over-subintervals]]: the integral over $[0,1]$ is the sum of cell integrals.

[F4] [[lem-triangle-inequality-finite]]: the absolute value of the sum of cell errors is bounded by their absolute values' sum.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the sum of products of two finite real lists is bounded by the product of their Euclidean norms.

[F6] [[thm-extreme-value-r]]: the continuous function $|A''|$ has a finite maximum on $[0,1]$.

## Proof

1.1 On a cell $K$, $v_h'|_K$ and $w_h'|_K$ are constants, so $g_K(x):=A(x)v_h'|_Kw_h'|_K$ is $C^2$; the discrete sample is the one-panel midpoint rule [F1]. Also $\|g_K''\|_\infty\le\|A''\|_\infty|v_h'|_K|w_h'|_K$. Applying [F2] with $n=1$ bounds the cell error by $h_K^3\|A''\|_\infty|v_h'|_K|w_h'|_K/24$. [given, F1, F2, construct]

2.1 Since $\|v_h'\|_{L^2(K)}=\sqrt{h_K}|v_h'|_K$ and similarly for $w_h$, step 1.1 equals at most $h_K^2\|A''\|_\infty\|v_h'\|_{L^2(K)}\|w_h'\|_{L^2(K)}/24$. [step 1.1, algebra]

3.1 Repeated application of [F3], by induction over the finite partition, expresses the total form difference as the sum of cell errors. Then [F4] and step 2.1 bound its absolute value by $h^2\|A''\|_\infty/24$ times $\sum_K\|v_h'\|_{L^2(K)}\|w_h'\|_{L^2(K)}$. Apply [F5] to these finite cell-norm lists; the result is the displayed global estimate. [F3, F4, F5, F6, step 2.1, algebra] ∎
