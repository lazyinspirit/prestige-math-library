---
id: lem-one-dimensional-p1-interpolation-error
kind: lemma
title: One-dimensional P1 interpolation has a first-derivative error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-ftc-second-part, thm-monotonicity-of-the-integral, thm-extreme-value-r, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 11, Local interpolation on affine meshes
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap11.pdf
      locator: "§§11.3–11.4, printed pp. 122–125; Theorem 11.13 and its complete proof, specialized to P1, d=1, p=2, r=2, m=1."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 24, Finite element error analysis
      url: https://jschoeberl.github.io/iFEM/FEM/erroranalysis.html
      locator: "Complete 407-line Chapter 24 page. Relevant ranges: lines 196–221, Bramble–Hilbert interpolation lemma and the complete global H1 interpolation estimate proof."
---

## Statement

Assume Countable Choice. Let $0=x_0<x_1<\cdots<x_N=1$ be a finite interval partition, $h:=\max_j(x_{j+1}-x_j)$, and $u\in C^2([0,1])$. Let $I_hu$ be the continuous piecewise-linear function with nodal values $I_hu(x_j)=u(x_j)$. Then

$$\|(u-I_hu)'\|_{L^2(0,1)}\le h\|u''\|_{L^\infty(0,1)}.$$

If $u(0)=u(1)=0$, then $I_hu$ also vanishes at both endpoints.

## Facts & Assumptions

**Given:** Countable Choice, a finite interval partition, $h$ its maximum cell length, and $u\in C^2([0,1])$.

[F1] [[thm-ftc-second-part]]: if a differentiable function has an integrable derivative, its increment is the integral of that derivative.

[F2] [[thm-monotonicity-of-the-integral]]: for an integrable function bounded in absolute value by $C$, the integral over an interval of length $\ell$ has absolute value at most $C\ell$.

[F3] Under Countable Choice, for every nonnegative measurable $q$ the map $E\mapsto\int_Eq$ is a measure, hence finitely additive on disjoint measurable cells ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]). Nonnegative Lebesgue integrals preserve bounds ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); a constant bound integrates as that constant times the interval length by the simple-integral formula and the box-measure theorem ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]), whose interval-measure statement assumes Countable Choice ([[def-countable-choice]]).

[F4] [[thm-extreme-value-r]]: a continuous function on the compact interval $[0,1]$ has a finite maximum and minimum.

## Proof

1.1 Fix a cell $K=[a,b]=[x_j,x_{j+1}]$ of length $h_K$. Its interpolant slope is $s_K=(u(b)-u(a))/h_K=h_K^{-1}\int_a^bu'(t)\,dt$ by [F1]. [given, F1, construct]

2.1 For every $x\in K$, $u'(x)-s_K=h_K^{-1}\int_a^b(u'(x)-u'(t))\,dt$. A second use of [F1] and then [F2] gives $|u'(x)-u'(t)|\le\|u''\|_\infty|x-t|\le h_K\|u''\|_\infty$, hence $|u'(x)-s_K|\le h_K\|u''\|_\infty$. [given, F1, F2, step 1.1, algebra]

3.1 The continuous function $|u''|$ has a finite maximum by [F4]. On each open cell $K^\circ=(x_j,x_{j+1})$, $q=|u'-s_K|^2$ is continuous and hence measurable; define $q=0$ at the finitely many nodes. This gives a nonnegative measurable representative of the squared derivative error, bounded by the finite cell bounds in step 2.1. The Lebesgue interval-measure and monotonicity facts in [F3] give $\int_K|(u-I_hu)'|^2\le h_K^3\|u''\|_\infty^2$. The open cells are disjoint and their complement consists of finitely many nodes of Lebesgue measure zero. Finite additivity of the measure $E\mapsto\int_Eq$ from [F3], with zero contribution from the nodes where $q=0$, therefore identifies the global Lebesgue squared norm with the sum of these cell integrals. Using $h_K\le h$ and $\sum_Kh_K=1$ gives $\|(u-I_hu)'\|_2^2\le h^2\|u''\|_\infty^2$. Taking nonnegative square roots proves the estimate; endpoint values follow from the nodal definition. [F3, F4, given, step 2.1, algebra] ∎
