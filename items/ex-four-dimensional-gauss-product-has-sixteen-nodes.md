---
id: ex-four-dimensional-gauss-product-has-sixteen-nodes
kind: example
title: Four two-node Gaussian rules give a sixteen-node tensor rule
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-tensor-product-gauss-rule
  - def-coordinatewise-product-moment-functional
  - thm-tensor-product-gauss-exactness-and-exponential-node-count
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Example

Take four coordinate moment data sets, each with a two-node Gaussian rule
$Q_j(f)=w_{j,1}f(x_{j,1})+w_{j,2}f(x_{j,2})$. The tensor rule has node set
$$ \{(x_{1,i_1},x_{2,i_2},x_{3,i_3},x_{4,i_4}): i_j\in\{1,2\}\}, $$
so it has $2^4=16$ distinct nodes. It is exact for every coordinatewise
polynomial $P$ with degree at most three in each variable. In particular,
$$ Q_\otimes(x_1^3x_2^2x_3x_4^0) =\prod_{j=1}^4\left(\sum_{i=1}^2w_{j,i}x_{j,i}^{\alpha_j}\right) =\prod_{j=1}^4\int x^{\alpha_j}\,d\mu_j(x), \quad (\alpha_1,\alpha_2,\alpha_3,\alpha_4)=(3,2,1,0). $$

## Facts & Assumptions

**Given:** Four order-three moment data sets and their two-node Gaussian rules.

[F1] [[def-tensor-product-gauss-rule]]: the tensor nodes are all coordinate
tuples and the tensor weights are products of the coordinate weights.

[F2] [[def-coordinatewise-product-moment-functional]]: the product-moment
functional on a coordinate monomial is the product of its coordinate moments.

[F3] [[thm-tensor-product-gauss-exactness-and-exponential-node-count]]: the
tensor rule is exact for the stated coordinatewise degree ranges and has the
product number of distinct nodes.

[F4] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]:
each coordinate rule integrates every degree-at-most-three monomial exactly.

[F5] [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]]: each
two-node Gaussian rule has distinct nodes.

## Proof

1.1 Since each coordinate has two distinct nodes by [F5], the sixteen coordinate tuples are distinct: two different tuples differ in a coordinate whose node entries are distinct. [F1, construct]

2.1 The node-count statement of [F3] gives $2\cdot2\cdot2\cdot2=16$. For each coordinate degree $\alpha_j\le3$, [F4] evaluates the corresponding one-dimensional sum as its moment. Distributing the finite sums in [F1] therefore gives the product of those four moments, which is [F2]. Taking the specified exponents proves the displayed calculation and the general coordinatewise exactness claim. [F1, F2, F3, F4, step 1.1, algebra] ∎
