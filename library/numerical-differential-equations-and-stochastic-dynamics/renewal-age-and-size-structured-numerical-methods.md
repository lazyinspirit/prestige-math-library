---
page: renewal-age-and-size-structured-numerical-methods
title: "Renewal age and size structured numerical methods"
status: published
items:
  - def-age-structured-renewal-transport-problem
  - def-size-structured-transport-and-division-kernel
  - thm-age-structured-renewal-characteristic-solution
  - def-age-structured-renewal-finite-cutoff-model
  - alg-size-structured-finite-volume-flux-and-kernel-quadrature
  - alg-age-cohort-characteristic-quadrature
  - thm-age-structured-renewal-semigroup-growth-and-data-stability
  - thm-size-structured-positivity-number-and-weighted-moment-identities
  - thm-age-structured-renewal-finite-cutoff-characteristic-solution
  - alg-age-structured-positive-birth-quadrature
  - thm-age-cohort-quadrature-weak-consistency
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability
  - thm-age-structured-renewal-smooth-first-order-convergence
  - thm-age-structured-renewal-bv-l1-convergence
  - thm-age-structured-renewal-cutoff-tail-and-outflow-bound
examples: []
---

This page develops two related but distinct structured-population models. The age model follows unit-speed age characteristics with mortality and a renewal birth boundary. It supplies the characteristic/Volterra solution, the absorbing finite-age version, positive birth quadrature, and an explicit upwind finite-volume scheme. Under the transport-plus-loss CFL, the scheme preserves nonnegativity and satisfies a discrete mass bound. Compatible smooth data give a first-order cell-mass and reconstructed-density estimate when the true birth quadrature defect is controlled. BV data need no initial boundary compatibility; the separate compactness argument gives (L^1) convergence without a Taylor rate.

The cutoff analysis keeps survival, outflow, and the initial-age tail visible as a separate error. The cohort method advances ages exactly and approximates survival and births; its consistency result is in bounded-Lipschitz measure norm, not (L^1) for atomic measures. A narrow maturation profile approaches a delayed birth term under stated Lipschitz bounds, while a finite-width kernel is not an exact delay. Capped adaptive indicators do not certify true quadrature error.

The size model uses a fixed interval, strictly positive growth, an absorbing upper boundary, parent removal, and a measurable nonlocal daughter kernel. Its variable-width finite-volume update uses positive daughter coefficients and gives exact discrete number and center-weighted-size balances. The first moment is conserved by division only when daughter-size production cancels parent removal; an arbitrary kernel need not satisfy that identity. Moving boundaries, zero growth, and discontinuous coefficients are outside this model.
