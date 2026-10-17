---
id: ex-polynomial-chaos-coefficients-and-sobol-indices
kind: example
title: Polynomial-chaos coefficients group by variable support
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-finite-product-chaos-input, lem-positive-moment-gram-produces-univariate-chaos-polynomials, def-chaos-orthonormal-tensor-basis, def-first-and-total-sobol-indices, thm-product-hoeffding-anova-decomposition, def-product-coordinate-projections, def-moments-variance-and-covariance]
proof_strategy: direct
axiom_use: No choice principle is used; the four-point calculation directly proves orthonormality and completeness for this example.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Dongbin Xiu and George Em Karniadakis, The Wiener–Askey Polynomial Chaos for Stochastic Differential Equations, §§4–5
      url: https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf
---

## Example

Let $X_1,X_2$ be independent symmetric two-point inputs on $\{-1,1\}$, and
take the full degree-one tensor index set
$\Lambda=\{(0,0),(1,0),(0,1),(1,1)\}$. Its basis is
$$1,\quad X_1,\quad X_2,\quad X_1X_2.$$
For the exact finite expansion $f=2+3X_1+4X_1X_2$, the coefficients are
$c_{00}=2$, $c_{10}=3$, $c_{01}=0$, and $c_{11}=4$. The variance is $25$,
with $S_1=9/25$, $S_2=0$, $S_{T_1}=1$, and $S_{T_2}=16/25$.

## Facts & Assumptions

**Given:** Independent symmetric two-point inputs, the full degree-one tensor
index set, and the exact finite expansion in the Example.

[F1] [[def-finite-product-chaos-input]]: finite independent real inputs use their product law and a finite admissible degree box; the degree condition alone asserts no polynomial completeness.

[F2] [[lem-positive-moment-gram-produces-univariate-chaos-polynomials]]: for the symmetric two-point law with cutoff one, the orthonormal degree-one polynomials are $1$ and $x$.

[F3] [[def-chaos-orthonormal-tensor-basis]]: a finite tensor basis consists of products of the univariate polynomials over a declared finite multi-index set.

[F4] [[def-product-coordinate-projections]]: $P_J$ averages over coordinates outside $J$ and lifts the result to the full product space.

[F5] [[thm-product-hoeffding-anova-decomposition]]: coordinate averages define components that reconstruct $f$, are orthogonal, and contribute their squared norms to the variance.

[F6] [[def-first-and-total-sobol-indices]]: first and total indices divide variance-component sums by positive total variance.

[F7] [[def-moments-variance-and-covariance]]: variance is the expected square of the output after subtracting its mean.

## Verification

**Given:** The finite product law, index set and exact expansion of the Example.

1.1 Each coordinate has mean zero and second moment one, so its degree-one monomial Gram matrix is the identity. The construction [F2] therefore gives $1$ and $x_j$, whose products in [F3] are the four displayed functions. On the four equiprobable outcomes $(1,1),(1,-1),(-1,1),(-1,-1)$, their value vectors are $(1,1,1,1)$, $(1,1,-1,-1)$, $(1,-1,1,-1)$, and $(1,-1,-1,1)$. These vectors are pairwise orthogonal and each has squared length four, so under weights $1/4$ the functions are orthonormal. Four independent functions on a four-point support form a basis of its four-dimensional $L^2$ space. [F1, F2, F3, given, algebra]

2.1 The functions in step 1.1 are linearly independent, so the exact expansion has unique coefficients: $c_{00}=2$, $c_{10}=3$, $c_{01}=0$, and $c_{11}=4$. The centered output is $3X_1+4X_1X_2$. Orthogonality gives $V=\mathbb E[(3X_1+4X_1X_2)^2]=9+16=25$ by [F7]. The exact displayed finite expansion needs no infinite Parseval assertion. [F7, step 1.1, given, algebra]

2.2 Product averaging [F4] and $\mathbb EX_j=0$ give $P_\varnothing f=2$, $P_{\{1\}}f=2+3X_1$, and $P_{\{2\}}f=2$. The component definition in [F5] yields $f_{\{1\}}=3X_1$, $f_{\{2\}}=0$, and $f_{\{1,2\}}=4X_1X_2$. Their variance contributions are $9,0,16$ because $\mathbb EX_j^2=1$, matching the coefficient sums grouped by support. [F1, F4, F5, given, step 1.1, algebra]

3.1 Dividing these components by $V=25$ according to [F6] gives $S_1=9/25$, $S_2=0$, $S_{T_1}=(9+16)/25=1$, and $S_{T_2}=16/25$. The family is complete here by the finite four-point argument in step 1.1. Finite cutoff and positive moment Gram hypotheses alone do not imply completeness for a general input law. [F6, step 1.1, step 2.1, step 2.2, algebra] ∎


## Remarks

This example's full degree-one basis is complete because its input support has
four points. In general the finite cutoff and positive moment Gram hypotheses
of UQ1 do not imply completeness; an infinite coefficient formula needs a
separate law-specific completeness hypothesis.
