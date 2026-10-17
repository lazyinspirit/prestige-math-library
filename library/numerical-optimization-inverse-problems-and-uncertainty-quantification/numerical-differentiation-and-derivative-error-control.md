---
page: numerical-differentiation-and-derivative-error-control
title: "Numerical differentiation and derivative error control"
status: published
items:
  - def-complex-step-derivative-estimator
  - def-finite-difference-stencils-and-evaluation-error-model
  - def-jacobian-and-hessian-vector-difference-products
  - def-structural-column-coloring-for-sparse-jacobian-recovery
  - lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative
  - thm-complex-step-derivative-has-second-order-error-under-holomorphy
  - thm-forward-and-central-difference-truncation-and-evaluation-error-bounds
  - thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds
  - thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring
  - def-richardson-extrapolation-under-a-fourth-order-remainder
  - thm-optimal-step-for-forward-and-central-difference-error-bounds
  - thm-richardson-extrapolation-has-fourth-order-error-bound
examples: []
---

This page defines forward and central difference stencils and proves their truncation and bounded-evaluation-error bounds. It derives the balancing steps for the displayed error bounds, gives a fourth-order Taylor remainder for central differences, and proves the corresponding Richardson estimate. The complex-step bound applies only to holomorphic extensions that are real on a real interval; errors in the imaginary component are divided by the step. A structural column coloring recovers a Jacobian only when the declared row supports safely contain all nonzeros and no row has a color collision. Directional Jacobian-vector and Hessian-vector differences retain their Taylor terms and deterministic or random evaluation errors. These derivative estimates do not establish Newton convergence without a separate perturbation theorem.
