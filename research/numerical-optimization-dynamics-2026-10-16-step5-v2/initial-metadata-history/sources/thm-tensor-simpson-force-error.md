---
id: thm-tensor-simpson-force-error
kind: theorem
title: Tensor composite Simpson error for a two-dimensional force integral
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-tensor-simpson-force-evaluator
  - alg-composite-simpson-rule
  - thm-composite-simpson-error-bound
  - thm-extreme-value-metric
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-heine-borel-rn
  - def-ck-and-multi-index-notation-in-several-variables
proof_strategy: direct
axiom_use: No choice principle is used; all rules are finite exact-arithmetic sums.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Tobin Driscoll and Richard Braun, Fundamentals of Numerical Computation, Section 5.6
      url: https://fncbook.com/integration/
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
---

## Statement

Let $a<b$, $c<d$, let $n_x,n_y\ge2$ be even integers, and set $R=[a,b]\times[c,d]$, $h_x=(b-a)/n_x$, $h_y=(d-c)/n_y$. If $F\in C^4(R,\mathbb R^2)$ and
$$M_{40}=\max_R|\partial_x^4F|,\qquad M_{04}=\max_R|\partial_y^4F|,$$
then the tensor evaluator of [[alg-tensor-simpson-force-evaluator]] satisfies
$$\left|\int_R F-Q_yQ_xF\right|\le\frac{\sqrt2\,|R|}{180}\bigl(h_x^4M_{40}+h_y^4M_{04}\bigr),\qquad |R|=(b-a)(d-c).$$
Here and in applications of this estimate, $F\in C^4(R,\mathbb R^2)$ means that each coordinate of $F$ is the restriction to $R$ of a scalar $C^4$ function on an open neighborhood of $R$, in the sense of [[def-ck-and-multi-index-notation-in-several-variables]]. The displayed derivatives are taken coordinatewise from these extensions; their values on $R$ are independent of the extensions, since the extensions agree on the interior and their derivatives are continuous up to the boundary.

On every declared input, if each oracle query returns a value or evaluation-failure, the evaluator terminates with its specified status. For the valid inputs above, with the exact oracle returning $F$ at every grid point, the evaluator terminates and returns a vector after exactly $(n_x+1)(n_y+1)$ oracle queries. This is an exact-arithmetic quadrature bound, not a roundoff estimate.

## Facts & Assumptions

**Given:** The rectangle, even panel counts, $F\in C^4(R,\mathbb R^2)$, and the derivative bounds in the Statement.

[F1] The tensor evaluator applies the one-dimensional composite Simpson rule successively in each coordinate ([[alg-tensor-simpson-force-evaluator]]).

[F2] For a scalar $C^4$ function on an interval of length $B-A$ with even panel count and width $h$, Simpson error is at most $(B-A)h^4\max|f^{(4)}|/180$ ([[thm-composite-simpson-error-bound]]).

[F3] The composite Simpson weights are nonnegative and sum to the interval length ([[alg-composite-simpson-rule]]).

[F4] Continuous fourth derivatives attain finite maxima on the compact rectangle ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F5] The Euclidean norm on $\mathbb R^2$ has the triangle inequality and the displayed coordinate formula ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof
1.1 Invalid endpoints or panel counts return immediately without queries. Otherwise, the grid is finite, and any failed query returns immediately. If no query fails, each supplier call uses an evaluable interpolant, admissible panel counts and a finite sum, so the evaluator returns a vector. For the valid inputs in the error bound, there are exactly $(n_x+1)(n_y+1)$ grid points; the exact oracle returns $F$ at each, so none of the valid-input queries fails. The remaining supplier calls use evaluable interpolants, even positive panel counts and finite sums. Thus the evaluator terminates with a vector after the stated number of oracle queries. Fix a component $F_k$, $k=1,2$, and write $I_x,I_y$ for exact integration and $S_x,S_y$ for the composite Simpson operators. Add and subtract $I_yS_xF_k$: $I_yI_xF_k-S_yS_xF_k=I_y(I_x-S_x)F_k+(I_y-S_y)S_xF_k.$ The maxima in the Statement are finite by [F4]. For each fixed $y$, [F2] bounds the first one-dimensional error by $(b-a)h_x^4M_{40}/180$; integrating in $y$ gives $(b-a)(d-c)h_x^4M_{40}/180$. [given, F1, F2, F4, algebra]

2.1 The $y$ derivative commutes with the finite $x$-weighted sum. Applying [F2] to each fixed $x$ and then summing the nonnegative Simpson weights from [F3] bounds the second term by $(b-a)(d-c)h_y^4M_{04}/180$. Thus each coordinate error is at most $E=|R|(h_x^4M_{40}+h_y^4M_{04})/180$. [F2, F3, step 1.1]

3.1 If both coordinate errors have absolute value at most $E$, their Euclidean norm is at most $(E^2+E^2)^{1/2}=\sqrt2E$. Substitution of the value of $E$ from step 2.1 proves the Statement. [F5, step 2.1, algebra] ∎
