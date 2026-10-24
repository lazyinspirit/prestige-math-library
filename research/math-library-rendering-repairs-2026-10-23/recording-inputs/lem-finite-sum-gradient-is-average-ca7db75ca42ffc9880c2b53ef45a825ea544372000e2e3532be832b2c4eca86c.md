---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-finite-sum-gradient-is-average.json
  precheck: pass
id: lem-finite-sum-gradient-is-average
kind: lemma
title: Gradient of a finite sum is the finite sum of gradients
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-finite-sum
  - lem-of-naturals-positive
  - def-total-derivative-in-euclidean-space
  - thm-algebra-of-total-derivatives
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-induction-principle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Lebl, Basic Analysis I, Section 8.3, The Derivative"
      url: https://www.jirka.org/ra/html/sec_svtheder.html
      locator: Proposition 8.3.6, sum/scalar rules for total derivatives; Subsection 8.3.3, gradient representation.
---

## Statement

Let $U$ be open in $\mathbb{R}^d$, let $x\in U$, let $n\ge1$, and let $f_1,\ldots,f_n:U\to\mathbb{R}$ be totally differentiable at $x$. Put $F=n^{-1}\sum_{i=1}^n f_i$. Then $F$ is totally differentiable at $x$ and

$$
\nabla F(x)=\frac1n\sum_{i=1}^n\nabla f_i(x).
$$

## Facts & Assumptions

**Given:** The open domain $U$, $x$, $n$, and the functions in the Statement.

[F1] [[def-finite-sum]]: finite sums are recursively defined, with each successor sum equal to the preceding sum plus its next term.

[F2] [[thm-algebra-of-total-derivatives]]: the sum and scalar multiple of totally differentiable maps are totally differentiable, with derivatives equal to the corresponding sum and scalar multiple.

[F3] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: for each standard basis vector $e_j$, the partial derivative is $DF(x)e_j$, and the matrix of $DF(x)$ is the Jacobian.

[F4] [[def-jacobian-matrix-and-gradient]]: the gradient of a scalar function is the vector of its partial derivatives.

[F5] [[thm-induction-principle]]: a property true at zero and inherited by each successor holds for every natural index.

[F6] [[def-euclidean-inner-product]]: vectors in $\mathbb{R}^d$ are equal when their $d$ coordinates agree.

[F7] [[def-total-derivative-in-euclidean-space]]: total differentiability means a linear first-order approximation with a remainder whose norm divided by $\|h\|_2$ tends to zero.

[F8] [[lem-of-naturals-positive]]: the canonical real image of every natural $n\ge1$ is positive.

## Proof

**Given:** The domain and functions in the Statement.

1.1 For $0\le m\le n$ define $S_m:U\to\mathbb{R}$ by $S_m(y)=\sum_{i<m}f_{i+1}(y)$, using [F1]. The base $S_0$ is the zero function, whose total derivative is the zero linear map directly from [F7]. If $S_m$ is totally differentiable at $x$ with derivative $\sum_{i<m}Df_{i+1}(x)$, then $S_{m+1}=S_m+f_{m+1}$; [F2] makes it differentiable with derivative $\sum_{i<m}Df_{i+1}(x)+Df_{m+1}(x)=\sum_{i<m+1}Df_{i+1}(x)$. Induction [F5] proves this formula through $m=n$. [F1, F2, F5, F7, given, algebra, induction]

2.1 Since the canonical real image of $n$ is positive by [F8], it is nonzero; the field structure in [F1] therefore supplies its inverse $n^{-1}$. The scalar-multiple rule [F2] gives $DF(x)=n^{-1}\sum_{i<n}Df_{i+1}(x)$. [F1, F2, F8, step 1.1, given, algebra]

3.1 For each coordinate $j$, [F3] gives $\partial_j F(x)=DF(x)e_j=n^{-1}\sum_{i<n}Df_{i+1}(x)e_j=n^{-1}\sum_{i<n}\partial_j f_{i+1}(x)$. By [F4] these are exactly the coordinates of $n^{-1}\sum_{i=1}^n\nabla f_i(x)$; [F6] then identifies the vectors. Hence the displayed gradient formula holds. [F3, F4, F6, step 2.1, given, algebra] ∎
