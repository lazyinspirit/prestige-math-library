---
page: differential-algebraic-equations-and-consistent-initialization
title: "Differential algebraic equations and consistent initialization"
status: published
items:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - def-regular-differentiation-index
  - thm-index-one-dae-implicit-function-reduction
  - lem-index-one-dae-algebraic-residual-to-state-error
  - alg-index-one-dae-consistent-initialization
  - alg-index-one-dae-backward-euler-stepper
  - alg-index-one-dae-bdf2-stepper
  - lem-index-one-dae-backward-euler-local-branch
  - lem-index-one-dae-bdf2-local-branch
  - thm-index-one-dae-finite-budget-solvers-terminate
  - thm-index-one-dae-backward-euler-first-order-with-residuals
  - thm-index-one-dae-bdf2-second-order-with-residuals
examples: []
---

This page treats semi-explicit DAEs $x'=f(t,x,z)$, $g(t,x,z)=0$ on a selected regular index-one branch. It defines algebraic consistency, the local differentiation-index convention, and the reduced ODE supplied by the implicit function theorem. A uniform lower bound on the algebraic Jacobian converts algebraic residuals to errors in $z$; without that local bound, residual size alone gives no state-error estimate.

The finite-budget initialization, backward-Euler, and constant-step BDF2 procedures state their domains, residual units, status returns, and selected-branch conditions. Their termination and accuracy results are separate: backward Euler is first order with $O(h)$ starts and derivative/algebraic residuals of order $h$, while constant-step BDF2 is second order with $O(h^2)$ starts and residuals, a $C^3$ reduced solution, and the uniform tube bounds in the theorem. Neither result asserts that a finite Newton budget meets its residual target. Singular $g_z$, high index, and derivative-inconsistent initial data are outside these index-one guarantees.
