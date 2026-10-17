---
page: variational-crimes-and-strang-lemmas-examples
title: "Variational crimes and Strang lemmas — Examples"
status: published
items: []
examples:
  - ex-midpoint-underintegrated-p2-stiffness-loses-coercivity
  - ex-nonconforming-residual-breaks-galerkin-orthogonality
  - ex-two-node-gauss-polynomial-exactness-and-x4-error
---

The first example computes exact and one-point midpoint stiffness on a quadratic zero-boundary function: the exact value is $1/3$ while the midpoint value is zero, so no positive discrete coercivity constant exists. The second constructs a two-cell broken test with residual $-1/4$, making the nonconforming consistency term visible and showing why the conforming Céa hypothesis does not apply. The last example derives the two-node Gauss nodes and weights on $[-1,1]$, checks degree-three exactness, and computes the absolute $x^4$ quadrature error $8/45$.
