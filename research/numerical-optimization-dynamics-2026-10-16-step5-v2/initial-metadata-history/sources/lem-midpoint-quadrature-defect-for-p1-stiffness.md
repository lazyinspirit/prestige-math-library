---
id: lem-midpoint-quadrature-defect-for-p1-stiffness
kind: lemma
title: Midpoint quadrature defect for one-dimensional P1 stiffness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-variational-crime-error-framework, def-countable-choice, def-calligraphic-l-p-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions, def-l-infinity-on-a-measure-space, def-essential-supremum-with-respect-to-a-measure, def-nonnegative-lebesgue-integral, def-nonnegative-simple-measurable-function, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-continuous-implies-integrable, lem-changing-a-function-at-finitely-many-points, alg-composite-midpoint-rule, thm-composite-midpoint-error-bound, thm-additivity-over-subintervals, lem-triangle-inequality-finite, thm-cauchy-schwarz-and-the-euclidean-norm, thm-extreme-value-r]
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

Assume Countable Choice. Let $0=x_0<\cdots<x_N=1$ be a finite partition with cells $K=[x_{j-1},x_j]$, cell lengths $h_K$, and maximum $h$. Let $A\in C^2([0,1])$, and let $v_h,w_h$ be continuous piecewise-linear functions. Write $v'_K,w'_K$ for their constant cell slopes and take their a.e. derivatives as $L^2$ representatives. Define the exact and midpoint stiffness forms by

$$a(v_h,w_h):=\int_{(0,1)}A(x)v_h'(x)w_h'(x)\,d\lambda_1(x),\qquad a_h(v_h,w_h):=\sum_Kh_KA(m_K)v'_Kw'_K,$$

where $m_K$ is the cell midpoint and the cell derivatives are constant. Then

$$|a(v_h,w_h)-a_h(v_h,w_h)|\le\frac{h^2}{24}\|A''\|_{L^\infty(0,1)}\|v_h'\|_{L^2(0,1)}\|w_h'\|_{L^2(0,1)}.$$

Moreover, $\|v_h'\|_{L^2(0,1)}^2=\sum_Kh_K|v'_K|^2$, and likewise for $w_h'$.

The midpoint rule is exact for this stiffness integrand when $A$ is affine; for a general $C^2$ coefficient the displayed defect is retained. The bound is exact-arithmetic quadrature error, separate from roundoff.

## Facts & Assumptions

**Given:** Countable Choice, the finite partition, $A\in C^2([0,1])$, and continuous piecewise-linear $v_h,w_h$.

[F1] [[alg-composite-midpoint-rule]]: on one cell $K$, the midpoint value times $h_K$ is the one-panel midpoint quadrature rule.

[F2] [[thm-composite-midpoint-error-bound]]: for $g\in C^2(K)$, the one-panel error is at most $h_K^3\|g''\|_{L^\infty(K)}/24$.

[F3] [[thm-additivity-over-subintervals]]: the integral over $[0,1]$ is the sum of cell integrals.

[F4] [[lem-triangle-inequality-finite]]: the absolute value of the sum of cell errors is bounded by their absolute values' sum.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the sum of products of two finite real lists is bounded by the product of their Euclidean norms.

[F6] [[thm-extreme-value-r]]: the continuous function $|A''|$ attains a finite maximum on $[0,1]$. Because every relative interval has positive Lebesgue measure by [F8], this maximum is its essential supremum ([[def-essential-supremum-with-respect-to-a-measure]], [[def-l-infinity-on-a-measure-space]]).

[F7] The $L^2$ norm is the square root of the integral of the square ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]). A finite-valued measurable function has simple integral $\sum_jc_j\lambda_1(E_j)$ ([[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]]), and its nonnegative Lebesgue integral agrees with that value ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F8] Under Countable Choice, every interval in $[0,1]$ has Lebesgue measure equal to its length; in particular each open cell $K^\circ=(x_{j-1},x_j)$ has measure $h_K$ and each mesh node is null ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-countable-choice]]).

[F9] Under Countable Choice, a bounded Riemann-integrable function on $[0,1]$ has the same Riemann and Lebesgue integrals ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[def-countable-choice]]).

[F10] A continuous function on a closed interval is Riemann integrable, and changing its values at finitely many points preserves its integral ([[thm-continuous-implies-integrable]], [[lem-changing-a-function-at-finitely-many-points]]).

## Proof

1.1 For each cell, define $g_v=v'_K$ and $g_w=w'_K$ on $K^\circ$, and set both representatives to $0$ at the finitely many mesh nodes. Their squares are nonnegative simple functions. By [F7] and [F8], $\|v_h'\|_2^2=\sum_K|v'_K|^2\lambda_1(K^\circ)=\sum_Kh_K|v'_K|^2$, and the same identity holds for $w_h'$ and for the cell-restricted norms. [given, F7, F8, construct]

1.2 On a cell $K$, $v'_K$ and $w'_K$ are constants, so $g_K(x):=A(x)v'_Kw'_K$ is $C^2$; the discrete sample is the one-panel midpoint rule [F1]. Also $\|g_K''\|_\infty\le\|A''\|_\infty|v'_K||w'_K|$. Applying [F2] with $n=1$ bounds the cell error by $h_K^3\|A''\|_\infty|v'_K||w'_K|/24$. [given, F1, F2, construct]

2.1 By step 1.1, the cell error in step 1.2 is at most $h_K^2\|A''\|_\infty\|v_h'\|_{L^2(K)}\|w_h'\|_{L^2(K)}/24$. [step 1.1, step 1.2, algebra]

3.1 The global integrand $A v_h'w_h'$ is bounded. On each cell its representative differs at most at the endpoints from the continuous function $g_K(x)=A(x)v'_Kw'_K$, so [F10] makes each cell restriction Riemann integrable with the same cell integral as $g_K$. Repeated application of [F3] then makes the global integrand Riemann integrable and expresses its integral as the sum of the cell integrals. By [F9], its Lebesgue integral on $[0,1]$ equals this Riemann integral; the endpoints are null by [F8], so this is also $a(v_h,w_h)$. Thus $a(v_h,w_h)-a_h(v_h,w_h)$ is the sum of the cell errors. The finite-sum triangle inequality [F4] and step 2.1 bound its absolute value by $h^2\|A''\|_\infty/24$ times $\sum_K\|v_h'\|_{L^2(K)}\|w_h'\|_{L^2(K)}$. Cauchy–Schwarz [F5] and the norm decompositions in step 1.1 give the displayed global estimate. [F3, F4, F5, F6, F8, F9, F10, step 1.1, step 2.1, algebra] ∎
