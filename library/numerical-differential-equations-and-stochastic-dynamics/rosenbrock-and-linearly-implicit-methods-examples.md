---
page: rosenbrock-and-linearly-implicit-methods-examples
title: Rosenbrock and linearly implicit methods — Examples
status: published
requires:
  - rosenbrock-and-linearly-implicit-methods
items: []
examples:
  - cex-omitting-rosenbrock-stage-correction-loses-order-two
  - ex-two-stage-rosenbrock-factorization-reuse
  - ex-rosenbrock-euler-stiff-decay-and-backward-euler
  - cex-approximate-jacobian-breaks-stiff-damping
---

These examples compute the scalar Rosenbrock–Euler factor and its backward-Euler match, show that a bounded zero Jacobian approximation can turn the selected two-stage method into an undamped explicit midpoint step on a stiff mode, and verify that omitting the second-stage correction destroys cubic local accuracy. A diagonal two-dimensional example counts one shifted QR factorization reused for two right-hand sides. The damping counterexample fixes $h\lambda=4$ and makes no order or uniform-convergence claim.
