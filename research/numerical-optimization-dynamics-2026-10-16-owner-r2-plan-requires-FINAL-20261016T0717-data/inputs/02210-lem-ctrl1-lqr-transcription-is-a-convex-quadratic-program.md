---
id: lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program
kind: lemma
title: "A linear-quadratic transcription with affine constraints is a convex QP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-ctrl1-linear-lqr-control-problem, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, def-explicit-runge-kutta-tableau-and-stage-map, def-ctrl1-runge-kutta-tableau-and-stage-collocation, def-conic-optimization-primal-dual-models, def-inequality-constrained-program-and-kkt-geometry]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: linear/quadratic ODE models produce finite-dimensional NLPs under shooting and collocation."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–257, §§2–3: Runge–Kutta stage equations and discrete optimality systems for control problems."
---

## Statement

Consider a finite mesh and an LQR model whose pointwise linear dynamics are evaluated by a fixed Runge–Kutta tableau, explicit or implicit, whose stage quadrature weights are nonnegative, and whose running and terminal quadratic weights are positive semidefinite. Suppose every control, path, terminal, initial, and shooting/collocation constraint is specified by finitely many affine equalities or inequalities in the transcription variables. Then the finite transcription of [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]] is a convex quadratic program (QP): its objective is a convex quadratic polynomial and its equality and inequality constraints are affine. This is the finite NLP/QP branch used with the convex models in [[def-conic-optimization-primal-dual-models]].

## Facts & Assumptions

**Given:** A finite mesh, linear dynamics, a fixed explicit or implicit Runge–Kutta tableau, nonnegative stage weights, positive-semidefinite quadratic cost weights, and affine constraints.

[F1] An explicit RK stage is a finite affine recursion in prior stages; a general collocation stage satisfies $X_i=X_0+h\sum_k a_{ik}f(t_k,X_k,u)$ ([[def-explicit-runge-kutta-tableau-and-stage-map]], [[def-ctrl1-runge-kutta-tableau-and-stage-collocation]]).

[F2] The transcription imposes those stage/endpoint recursions as equality constraints and uses the displayed quadrature objective ([[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]).

[F3] A convex QP has a positive-semidefinite quadratic objective Hessian and affine equalities/inequalities ([[def-conic-optimization-primal-dual-models]], [[def-inequality-constrained-program-and-kkt-geometry]]).

## Proof

1.1 On each interval with linear dynamics, an explicit tableau has affine stages by recursion: the first stage is affine in the start and control, and if previous stages are affine then $X_i=X_0+h\sum_{k<i}a_{ik}F_k$ and $F_i=A(t_i)X_i+B(t_i)u$ are affine. For a general collocation tableau, the stage equation $X_i=X_0+h\sum_k a_{ik}(A(t_k)X_k+B(t_k)u)$ is affine in all stage variables, including when $A$ is not triangular. Thus the endpoint and stage equations over the finite mesh are affine equalities in the transcription variables. [F1, F2, given, induction, algebra]

2.1 Each quadrature term is a nonnegative scalar weight times a positive-semidefinite quadratic form applied to an affine state/control map, hence has positive-semidefinite Hessian; the terminal form has the same property. A finite sum of such Hessians is positive semidefinite, so the objective is convex quadratic. The remaining constraints are affine by hypothesis; thus [F3] identifies the transcription as a convex QP. [F2, F3, given, step 1.1, algebra] ∎
