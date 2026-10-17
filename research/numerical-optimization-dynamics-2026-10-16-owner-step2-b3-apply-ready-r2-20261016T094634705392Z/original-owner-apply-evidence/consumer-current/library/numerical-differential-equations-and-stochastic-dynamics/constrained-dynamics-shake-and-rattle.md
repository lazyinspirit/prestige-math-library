---
page: constrained-dynamics-shake-and-rattle
title: Constrained dynamics shake and rattle
status: draft
items:
  - def-regular-holonomic-phase-space-and-dynamics
  - lem-smooth-residual-quotient-extension
  - lem-regular-holonomic-phase-space-is-symplectic-cotangent
  - lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold
  - def-regular-classical-rattle-step-map
  - thm-local-holonomic-constrained-hamiltonian-flow
  - lem-rattle-scaled-position-and-momentum-branches
  - alg-finite-budget-rattle-step-with-scaled-residuals
  - thm-rattle-exact-constraint-preservation-and-reversibility
  - thm-rattle-symplecticity-on-regular-constraint-phase-space
  - thm-finite-budget-rattle-solver-returns-status
  - thm-rattle-second-order-global-accuracy-on-compact-tubes
  - thm-rattle-scaled-solve-residual-error-budget
examples: []
---

This page treats a constant SPD mass matrix and a smooth holonomic constraint on compact regular configuration charts. Uniform branch and trajectory estimates use compact subsets of the regular phase manifold, so both position and momentum remain bounded. It identifies the regular consistent phase manifold with the cotangent bundle of the regular configuration manifold, derives the constrained Hamiltonian flow locally, and defines the RATTLE step by its actual position and momentum residual equations with the regular multiplier branches selected by scaled implicit-function equations.

At exact algebraic solves RATTLE preserves both constraints, is symmetric, and is symplectic for the restricted canonical form. On a compact regular tube its local defect is cubic and its fixed-time global error is quadratic. Finite solver residuals are handled separately: position and tangency residuals are scaled by their different powers of the step, and a finite Newton budget may return an inconclusive status. Since a nonzero residual output need not be consistent, repeated finite solves use the proved local phase-space retraction before the next step. Exact energy conservation is not asserted.
