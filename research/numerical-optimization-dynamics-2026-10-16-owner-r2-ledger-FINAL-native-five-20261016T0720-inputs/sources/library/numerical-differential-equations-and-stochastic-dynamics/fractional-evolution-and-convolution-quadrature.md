---
page: fractional-evolution-and-convolution-quadrature
title: Fractional evolution and convolution quadrature
status: draft
items:
  - lem-fractional-integral-kernel-power-integral
  - def-caputo-derivative-and-fractional-integral
  - lem-continuous-fractional-integral-is-holder
  - lem-fractional-integral-semigroup
  - alg-uniform-and-graded-grid-l1
  - alg-backward-euler-convolution-quadrature
  - lem-backward-euler-cq-principal-branch-generating-function
  - lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions
  - lem-l1-positive-weights-and-discrete-comparison
  - lem-weakly-singular-fractional-gronwall
  - lem-backward-euler-cq-weights-and-partial-sums
  - thm-lipschitz-local-existence-for-caputo-volterra-equation
  - thm-l1-stability-and-smooth-data-error
  - lem-cq-quadratic-generating-coefficient-estimate
  - thm-backward-euler-cq-scalar-resolvent-stability
  - thm-backward-euler-cq-compatible-quadratic-first-order-error
examples: []
---

## Objective

This page establishes the weak-kernel power integral, defines the Caputo
derivative of order $0<\alpha<1$ on absolutely continuous functions, proves
its Volterra integral formulation and a local
Lipschitz existence theorem for the integral solution using Picard iteration
and a weakly singular Grönwall inequality, and supplies two scalar
time-stepping procedures. The uniform-grid L1 method has positive weights,
comparison stability, and an $O(h^{2-\alpha})$ error bound when the exact
solution belongs to $C^2([0,T])$. The same positive comparison argument gives
an error decomposition on graded grids, without an optimal graded-mesh rate.
Backward-Euler convolution quadrature uses the principal-branch generating
function $(1-z)^\alpha_{\operatorname{Log}}$ on $|z|<1$; its scalar resolvent
is stable for $\lambda\ge0$, and a
first-order error estimate is proved for the compatible datum $u(t)=u_0+t^2$.
The CQ result is scalar and supplies no sectorial-operator or contour estimate.

The planned page prerequisite [[composite-quadrature-rules]] supplies generic
smooth-integrand midpoint and Simpson rules. Its current interface has no
fractional-kernel error theorem; the L1 weights here are integrated exactly
and the CQ weights are derived from their generating function. Startup layers
and truncated-memory bias are treated as examples, not as covered by the
smooth-data error theorem.
