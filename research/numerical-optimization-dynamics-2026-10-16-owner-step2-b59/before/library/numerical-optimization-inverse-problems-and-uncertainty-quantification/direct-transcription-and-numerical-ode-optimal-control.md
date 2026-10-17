---
page: direct-transcription-and-numerical-ode-optimal-control
title: Direct transcription and numerical ode optimal control
status: draft
items:
  - def-ctrl1-linear-lqr-control-problem
  - def-ctrl1-smooth-transcription-data
  - lem-ctrl1-measurable-linear-ode-state-map
  - lem-ctrl1-control-box-is-weakly-closed
  - def-ctrl1-control-mesh-and-piecewise-constant-parameterization
  - lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence
  - lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence
  - def-ctrl1-runge-kutta-tableau-and-stage-collocation
  - def-ctrl1-lqr-adjoint-equation
  - lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous
  - lem-ctrl1-lqr-adjoint-exists-uniquely
  - thm-ctrl1-lqr-existence-and-unique-optimal-control
  - alg-ctrl1-indirect-shooting-for-the-ode-optimality-system
  - lem-ctrl1-lqr-adjoint-identity-and-gradient
  - thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch
  - cex-ctrl1-terminal-constraints-break-pointwise-control-vi
  - alg-ctrl1-runge-kutta-shooting-and-collocation-transcription
  - lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent
  - lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program
  - thm-ctrl1-mesh-consistent-lqr-minimizers-converge
  - thm-ctrl1-objective-and-control-error-from-consistency-bounds
  - alg-ctrl1-finite-budget-transcription-solver-dispatch
  - thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription
examples: []
---

This page separates a measurable-control existence model from the pointwise smooth-data branch required to evaluate Runge–Kutta stages. It proves the bounded linear state map, weak closedness of compact convex actuator bounds, weak-to-uniform state convergence, and strong recovery by cell averages. The LQR branch gives existence and uniqueness using the stated ultrafilter lemma, Dependent Choice, and Hahn–Banach assumptions, then derives the continuous adjoint, reduced gradient, and feasible-set variational inequality. The pointwise Hamiltonian condition is shown only for control-only constraints; a terminal-state example refutes the broader claim.

The transcription definitions distinguish single shooting, multiple shooting, explicit RK stages, and general implicit RK collocation, where coupled stages remain NLP variables and constraints. Costs use the chosen quadrature rule, and path constraints are enforced only at declared nodes. Exact single/multiple shooting equivalence is finite-dimensional. Convex linear-quadratic transcriptions with affine constraints reduce to convex QPs. Mesh convergence and objective/control error estimates are conditional on uniform objective consistency and recovery; the embedded adaptive RK difference is not itself a global error certificate. A finite dispatcher routes convex QPs to primal-dual methods and general NLPs to SQP with explicit finite statuses. Exact-Hessian SQP convergence is local for a fixed transcription under LICQ, strict complementarity, SOSC, and smoothness; no mesh-limit KKT result is asserted.

The discrete continuous/PDE adjoint-sensitivity page is a declared prerequisite. Its current batch-96 manifest has an empty item inventory, while the current library carrier lists 17 items and their item files are present. The finite-graph adjoint and conditional order-$p$ gradient-error interfaces are used above; the manifest/carrier inventory mismatch is recorded for owner reconciliation. Neither interface is treated as independent approval.
