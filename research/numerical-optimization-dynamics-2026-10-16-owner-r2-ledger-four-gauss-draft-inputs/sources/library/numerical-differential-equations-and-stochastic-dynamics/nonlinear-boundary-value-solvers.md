---
page: nonlinear-boundary-value-solvers
title: "Nonlinear Boundary-Value Solvers"
status: draft
requires: [picard-lindelof-and-first-order-odes, nonlinear-equations-and-newton-methods]
items: [def-nonlinear-two-point-bvp-and-boundary-residual, lem-c1-ode-flow-on-common-tube, def-certified-ivp-approximation-and-sensitivity-interface, def-linearized-two-point-bvp-operator-and-conditioning, def-midpoint-collocation-residual-for-bvps, prop-multiple-shooting-residual-zero-iff-bvp-solution, prop-shooting-residual-zero-iff-bvp-solution, alg-midpoint-collocation-for-nonlinear-bvps, lem-midpoint-bvp-discrete-linearized-inverse, prop-midpoint-residual-zero-is-collocation, prop-multiple-shooting-residual-block-jacobian, prop-shooting-residual-derivative, alg-multiple-shooting-for-nonlinear-bvps, alg-single-shooting-for-nonlinear-bvps, thm-midpoint-collocation-local-branch-and-error-budget, cor-local-newton-convergence-for-midpoint-bvp-collocation, cor-local-newton-convergence-for-shooting-bvp-residual, thm-shooting-residual-error-budget]
examples: []
---

This page defines square nonlinear two-point boundary-value problems and exact shooting residuals, then separates exact flow sensitivity from the derivative and error contract of a numerical IVP evaluator. Single and multiple shooting are formulated as finite-budget residual solvers, with their exact residual Jacobians and solution correspondences proved locally. The implicit-midpoint section defines the normalized collocation residual, proves its discrete linearized inverse from a bounded inverse for the continuous BVP, and derives a local second-order branch estimate with an algebraic residual budget. Newton claims remain local and finite-budget, and the estimates keep IVP error, mesh error, residual error, and BVP conditioning distinct.
