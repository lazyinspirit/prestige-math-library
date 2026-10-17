---
page: numerical-boundary-value-problems-examples
title: Linear numerical boundary-value problems — Examples
status: draft
items: []
examples:
  - ex-centered-difference-dirichlet-quadratic-exact
  - ex-first-order-neumann-closure-causes-first-order-bvp-error
  - ex-dirichlet-inverse-infinity-norm-tight-at-n3
---

## Examples

The first example shows that the scheme represents its exact quadratic solution on every mesh. The second computes the global error produced by a first-order backward difference for a Neumann endpoint: the interior stencil is exact on a quadratic, but the boundary closure yields a max error of exactly $h/2$. This mixed-boundary example illustrates the retained boundary-closure warning and is outside the theorem's zero-Dirichlet hypotheses. The last example defines the row-sum matrix norm, proves its equivalence with the induced infinity operator norm, and exhibits the uniform $1/8$ inverse bound sharply at $N=3$.
