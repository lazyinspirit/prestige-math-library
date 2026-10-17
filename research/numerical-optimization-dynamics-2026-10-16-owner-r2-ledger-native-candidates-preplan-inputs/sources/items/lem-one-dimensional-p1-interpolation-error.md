---
id: lem-one-dimensional-p1-interpolation-error
kind: lemma
title: Piecewise-linear interpolation has a first-derivative error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-ftc-second-part, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, thm-extreme-value-r]
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

Let $0=x_0<x_1<\cdots<x_N=1$ be a finite interval partition, $h:=\max_j(x_{j+1}-x_j)$, and $u\in C^2([0,1])$. Let $I_hu$ be the continuous piecewise-linear function with nodal values $I_hu(x_j)=u(x_j)$. Then

$$\|(u-I_hu)'\|_{L^2(0,1)}\le h\|u''\|_{L^\infty(0,1)}.$$

If $u(0)=u(1)=0$, then $I_hu$ also vanishes at both endpoints.

## Facts & Assumptions

**Given:** A finite interval partition, $h$ its maximum cell length, and $u\in C^2([0,1])$.

[F1] [[thm-ftc-second-part]]: if a differentiable function has an integrable derivative, its increment is the integral of that derivative.

[F2] [[thm-monotonicity-of-the-integral]]: for an integrable function bounded in absolute value by $C$, the integral over an interval of length $\ell$ has absolute value at most $C\ell$.

[F3] [[thm-additivity-over-subintervals]]: the integral over a finite partition is the sum of the cell integrals.

[F4] [[thm-extreme-value-r]]: a continuous function on the compact interval $[0,1]$ has a finite maximum and minimum.

## Proof

1.1 Fix a cell $K=[a,b]=[x_j,x_{j+1}]$ of length $h_K$. Its interpolant slope is $s_K=(u(b)-u(a))/h_K=h_K^{-1}\int_a^bu'(t)\,dt$ by [F1]. [given, F1, construct]

2.1 For every $x\in K$, $u'(x)-s_K=h_K^{-1}\int_a^b(u'(x)-u'(t))\,dt$. A second use of [F1] and then [F2] gives $|u'(x)-u'(t)|\le\|u''\|_\infty|x-t|\le h_K\|u''\|_\infty$, hence $|u'(x)-s_K|\le h_K\|u''\|_\infty$. [given, F1, F2, step 1.1, algebra]

3.1 The continuous function $|u''|$ has a finite maximum by [F4]. Integrating the squared pointwise bound from step 2.1 over $K$ gives $\int_K|(u-I_hu)'|^2\le h_K^3\|u''\|_\infty^2$. Repeated application of [F3], by induction on the number of cells, sums the integrals over the finite partition. Using $h_K\le h$ and $\sum_Kh_K=1$ gives $\|(u-I_hu)'\|_2^2\le h^2\|u''\|_\infty^2$. Taking nonnegative square roots proves the estimate; endpoint values follow from the nodal definition. [F3, F4, given, step 2.1, algebra] ∎
