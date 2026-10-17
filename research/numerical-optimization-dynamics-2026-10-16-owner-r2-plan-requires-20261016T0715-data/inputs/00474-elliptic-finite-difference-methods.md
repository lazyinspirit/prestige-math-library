---
page: elliptic-finite-difference-methods
title: Elliptic finite-difference methods
status: draft
items:
  - def-rectangular-grid-and-dirichlet-flux-stencil
  - lem-discrete-summation-by-parts-poincare-and-inverse-bound
  - lem-variable-coefficient-flux-stencil-second-order-consistency
  - thm-elliptic-finite-difference-l2-error-on-rectangles
examples: []
---

On a rectangular uniform grid, this page defines the five-point Dirichlet Laplacian and a scalar divergence-form flux stencil with midpoint face coefficients. A discrete summation-by-parts identity and a discrete Poincaré estimate give a mesh-uniform inverse bound in the weighted grid $L^2$ norm. Taylor expansion with bounded fourth derivatives controls the complete interior residual and yields a second-order error estimate when exact Dirichlet boundary values are imposed. The rate is stated for a smooth solution; nonsmooth weak solutions require a separate approximation argument.
