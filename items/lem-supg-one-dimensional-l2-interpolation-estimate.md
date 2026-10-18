---
id: lem-supg-one-dimensional-l2-interpolation-estimate
kind: lemma
title: "One-dimensional P1 interpolation has an L2 error bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-one-dimensional-convection-diffusion-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Example 5.16, printed pp. 55–56: cellwise P1 interpolation and the exact one-dimensional SUPG mesh."
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 24, Finite element error analysis"
      url: "https://jschoeberl.github.io/iFEM/FEM/erroranalysis.html"
      locator: "Complete Chapter 24 text; local interpolation-error argument and global mesh summation."
---

## Statement

Let $0=x_0<\cdots<x_N=1$ be a finite interval partition with maximum cell length $h$, and let $u\in C^2([0,1])$. Let $I_hu$ be the continuous piecewise-linear interpolant with the same nodal values as $u$. Then
$$\|u-I_hu\|_{L^2(0,1)}\le h^2\|u''\|_{L^\infty(0,1)}.$$

## Facts & Assumptions

**Given:** A finite interval partition of $[0,1]$, its maximum cell length $h$, and $u\in C^2([0,1])$.

[F1] By the definition of $I_hu$ in the Statement, on each interval cell it is affine and agrees with $u$ at both endpoints.

## Proof

1.1 Fix a cell $K=[a,b]$ of length $h_K$, and let $s_K=(u(b)-u(a))/h_K$ be the slope of $I_hu$ on $K$. By the fundamental theorem of calculus, $s_K=h_K^{-1}\int_a^b u'(t)\,dt$. For every $x\in K$, the same theorem gives $|u'(x)-u'(t)|\le h_K\|u''\|_\infty$, so averaging in $t$ yields $|(u-I_hu)'(x)|=|u'(x)-s_K|\le h_K\|u''\|_\infty$. [F1, given, construct]

2.1 Since $(u-I_hu)(a)=0$, integrating the derivative bound from step 1.1 over $[a,x]$ gives $|u(x)-I_hu(x)|\le h_K^2\|u''\|_\infty$ for every $x\in K$. Therefore $\|u-I_hu\|_{L^2(K)}^2\le h_K^5\|u''\|_\infty^2$. [step 1.1, given, algebra]

3.1 The cell interiors are disjoint, their lengths sum to $1$, and $h_K\le h$, so $\sum_Kh_K^5\le h^4\sum_Kh_K=h^4$. Summing step 2.1 over the cells and taking nonnegative square roots proves the estimate. [step 2.1, given, algebra] ∎
