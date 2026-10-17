---
page: numerical-boundary-value-problems
title: Linear numerical boundary-value problems
status: draft
items:
  - alg-centered-difference-dirichlet-bvp
  - lem-centered-difference-dirichlet-inverse-maxnorm
  - lem-centered-difference-dirichlet-truncation-residual
  - thm-centered-difference-dirichlet-second-order-error
examples: []
---

## Objective

This page treats the one-dimensional problem $-u''=g$ on $(0,1)$ with exact homogeneous Dirichlet values at both endpoints. For $N\ge1$, the method uses the uniform mesh $h=1/(N+1)$, the centered second-difference stencil on the $N$ interior nodes, and an exact Thomas recurrence. The local proof establishes unique solvability and a discrete maximum principle; the barrier $q(x)=x(1-x)/2$ gives $\|A_h^{-1}\|_\infty\le1/8$ uniformly in the mesh. For a solution with four continuous derivatives and $|u^{(4)}|\le M$, the interior residual is at most $Mh^2/12$, while the prescribed endpoint closure has zero residual. Therefore the exact algebraic solution has global max-norm error at most $Mh^2/96$. A nonzero linear-solve residual contributes a separate $\|\rho_h\|_\infty/8$ term. No general collocation or variable-coefficient convergence theorem is asserted.
