---
id: thm-tensor-product-gauss-exactness-and-exponential-node-count
kind: theorem
title: Tensor-product Gaussian quadrature preserves coordinatewise exactness
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-tensor-product-gauss-rule
  - def-coordinatewise-product-moment-functional
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - def-finite-sum
  - def-monoid-finite-product
  - lem-finite-sum-laws
  - thm-reals-field
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

## Statement

For $d\ge1$, take one-dimensional Gaussian rules $Q_j$ with orders $m_j$ and
moment data $(a_j,b_j,m_j,2m_j-1,\mu_j)$, and form their tensor rule
$Q_\otimes$ as in [[def-tensor-product-gauss-rule]]. For every coordinatewise
tensor polynomial $P$ of [[def-coordinatewise-product-moment-functional]],
$$ Q_\otimes(P)=I_\otimes(P). $$
The tensor rule has exactly $\prod_{j=1}^{d}m_j$ distinct nodes. In particular,
using the same $m\ge2$ nodes in each coordinate requires $m^d$ node
evaluations, exponential growth in $d$.

## Facts & Assumptions

**Given:** The finite family of one-dimensional Gaussian rules and a coordinatewise tensor polynomial.

[F1] [[def-tensor-product-gauss-rule]]: the tensor rule sums over all node tuples and multiplies the one-dimensional weights.

[F2] [[def-coordinatewise-product-moment-functional]]: $I_\otimes$ acts on a monomial $\prod_jx_j^{\alpha_j}$ by the product of its one-dimensional moments and extends by finite linearity.

[F3] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: each coordinate rule is exact on every monomial of degree at most $2m_j-1$.

[F4] [[def-finite-sum]], [[def-monoid-finite-product]], and [[lem-finite-sum-laws]]: finite sums distribute over finite products and finite products obey their recursive product rule.

[F5] [[thm-reals-field]]: multiplication and finite sums obey distributivity.

## Proof

1.1 For a coordinate monomial $P_\alpha(x)=\prod_{j=1}^{d}x_j^{\alpha_j}$, substitute the rule definition [F1] and distribute the finite sums: $Q_\otimes(P_\alpha) =\prod_{j=1}^{d}\left(\sum_{i_j=1}^{m_j}w_{i_j}^{(j)}(x_{i_j}^{(j)})^{\alpha_j}\right).$ [F1, F4, F5, algebra]

2.1 Since $0\le\alpha_j\le2m_j-1$, [F3] makes the $j$th factor in step 1.1 equal to $M_{\alpha_j}^{(j)}$. Their product is exactly $I_\otimes(P_\alpha)$ by [F2]. [F2, F3, step 1.1]

3.1 A coordinatewise tensor polynomial is a finite linear combination of these monomials. Both $Q_\otimes$ and $I_\otimes$ are linear finite sums, so step 2.1 extends term by term and proves $Q_\otimes(P)=I_\otimes(P)$. [F1, F2, step 2.1, algebra]

4.1 Each one-dimensional node list has $m_j$ distinct entries by [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]]. Two different tuples differ in at least one coordinate, whose node entries are distinct, so they give different points. The nested index loops in [F1] enumerate $m_1$ tuples for $d=1$; appending coordinate $d+1$ replaces each prior tuple by exactly $m_{d+1}$ distinct extensions. Iterating this finite recurrence gives exactly $\prod_jm_j$ nodes, hence $m^d$ when every $m_j=m\ge2$. [F1, F4, algebra] ∎
