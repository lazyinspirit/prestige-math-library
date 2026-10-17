---
page: implicit-stiff-time-stepping-and-algebraic-error
title: Implicit stiff time stepping and algebraic error
status: published
items:
  - def-implicit-residual-and-algebraic-error-units
  - lem-strongly-monotone-continuous-map-is-bijective
  - def-backward-euler-step-equation
  - def-implicit-runge-kutta-stage-equations
  - def-two-stage-sdirk-tableau
  - def-two-stage-radau-iia-tableau
  - def-scalar-rk-a-and-l-stability
  - lem-small-step-implicit-rk-branch-and-residual-error
  - alg-newton-chord-implicit-residual-with-factorization-reuse
  - thm-backward-euler-dissipative-resolvent-contraction
  - prop-two-stage-sdirk-order-two-and-l-stability
  - prop-two-stage-radau-iia-order-three-and-l-stability
  - thm-backward-euler-algebraic-update-residual-error-budget
  - thm-implicit-rk-global-order-with-stage-residual-control
  - cor-constant-step-bdf2-order-two-with-consistent-start
  - alg-implicit-stiff-time-stepper-with-consistent-starts
examples: []
---

This page defines backward Euler and implicit Runge–Kutta residual conventions, local stage branches, and finite Newton or chord solves with explicit factorization costs. It proves scalar L-stability for the selected two-stage SDIRK and two-stage Radau IIA methods, a globally defined backward Euler resolvent for dissipative fields, residual-to-update error bounds, and global order under shrinking stage residuals. Constant-step BDF2 inherits its second-order conclusion only with the selected-root, smooth-tube, and consistent-start hypotheses supplied by its variable-step theorem.

Scalar L-stability describes the linear scalar test equation. It does not imply nonlinear contractivity. A finite Newton or chord status records solver work and residual size; a forward-error estimate requires a separately stated inverse or stability bound.
