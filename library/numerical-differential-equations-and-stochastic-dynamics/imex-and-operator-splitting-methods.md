---
page: imex-and-operator-splitting-methods
title: Imex and operator splitting methods
status: draft
items:
  - def-additive-ode-and-partition
  - def-dirichlet-sine-mode-heat-splitting-model
  - alg-imex-euler-step
  - def-exact-split-flows-lie-strang-and-bracket
  - lem-diagonal-heat-semigroup-generator-domain
  - lem-imex-euler-local-branch
  - def-ars222-additive-tableau-and-stages
  - lem-lie-strang-local-error-expansions
  - lem-dirichlet-forcing-coefficients-exceed-the-generator-domain
  - thm-imex-euler-local-order-and-stability
  - lem-ars222-coefficient-identities
  - lem-ars222-stage-branch-and-residual-control
  - thm-lie-strang-global-orders-and-subflow-error
  - thm-imex-euler-global-order-one
  - thm-imex-euler-algebraic-residual-budget
  - thm-ars222-additive-order-two-and-tolerance
  - prop-ars222-bivariate-stability-region
examples: []
---

This page studies finite-dimensional autonomous additive systems $y'=a(y)+b(y)$. Under the stated common-tube and branch hypotheses for sufficiently small steps, IMEX Euler evaluates $a$ explicitly and solves the $b$ equation on a selected local branch. Its local defect is second order in the step, its exact-root map has a one-step Lipschitz bound, and its fixed-time global error is first order. An unscaled per-step update residual of order $h^2$ preserves that first-order global bound.

The fixed ARS(2,2,2) pair is defined by its explicit and diagonally implicit tableaus and three stages. The local proof expands both component fields and verifies the coupled colored second-order terms directly. Under uniform selected-branch and smooth-tube hypotheses for sufficiently small steps, its two implicit stages use separate branch conditions; a stage-two residual of order $h^2$ and final-stage residual of order $h^3$ give an order-two global error. The scalar stability proposition gives the exact two-variable region and makes no matrix or PDE stability claim.

For exact finite-dimensional split flows, Lie composition has global order one and symmetric Strang composition has global order two for sufficiently small steps under common-tube hypotheses. Approximate subflow errors have their own per-step budgets and require a stability bound for the composed approximate map. The companion page supplies noncommuting matrix, finite-matrix Schrödinger, two-cell reaction-diffusion, stiff scalar, and boundary-forcing examples.

The boundary example is a fully specified diagonal sequence-space heat model. It proves the generator domain, identifies constant Dirichlet-incompatible forcing outside that domain, and computes a two-sided $h^{5/4}$ Strang error at fixed time. This is not a convergence theorem for general unbounded operators or PDEs.
