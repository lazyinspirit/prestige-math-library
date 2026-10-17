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

This page separates a measurable-control existence model from the pointwise smooth-data branch required to evaluate Runge–Kutta stages. It proves the bounded linear state map, weak closedness of compact convex actuator bounds, weak-to-uniform state convergence, and strong recovery by cell averages under Countable Choice. The LQR branch gives existence and uniqueness using the stated ultrafilter lemma, Dependent Choice, and Hahn–Banach assumptions, then derives the continuous adjoint, reduced gradient, and feasible-set variational inequality under their explicit choice hypotheses. The pointwise Hamiltonian condition is shown only for control-only constraints; a terminal-state example refutes the broader claim.

The transcription procedures cover single and multiple shooting, explicit stages, and implicit collocation with coupled stage residuals solved internally and their nonlinear-solve statuses returned. Declared path-constraint times are inserted as mesh nodes; sampled constraints do not certify continuous-path feasibility. Every equivalence-class datum used at a stage or quadrature time needs a chosen pointwise representative and sampling rule. Exact single/multiple shooting equivalence is finite-dimensional, and convex quadratic transcriptions reduce to QPs when sampled weights and constraints meet the stated assumptions. Mesh convergence is conditional on uniform objective consistency and feasible recovery. Strong convexity converts uniform state/quadrature and comparison-recovery bounds into an objective and control rate; an embedded RK difference alone is not a global error certificate.

The finite dispatcher reports decision variables, defects, constraints, KKT residuals, objective, and separate NLP, stage, IVP, quadrature, mesh, and budget statuses. Exact-Hessian SQP convergence is local for a fixed transcription under LICQ, strict complementarity, SOSC, and smoothness. A mesh-family KKT limit is also proved conditionally from residual consistency, uniformly bounded discrete KKT sensitivities, and reconstruction into common normed spaces; finite solver budgets may stop before convergence.
