---
id: thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription
kind: theorem
title: "Exact-Hessian SQP converges locally to a regular transcription KKT point"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [def-ctrl1-smooth-transcription-data, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, alg-ctrl1-finite-budget-transcription-solver-dispatch, def-inequality-constrained-program-and-kkt-geometry, thm-second-order-sufficient-condition-on-the-critical-cone, alg-sqp-exact-hessian-newton-step, thm-sqp-exact-hessian-local-quadratic-convergence]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf"
      locator: "Chapter 18 §§18.1–18.2 and §18.10, printed pp. 528–537 and 562–563: Newton SQP equations and exact-Hessian local convergence conditions."
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 244–248: local NLP solution methods for direct optimal-control transcriptions."
---

## Statement

Fix a mesh and a finite transcription generated from the pointwise smooth data in [[def-ctrl1-smooth-transcription-data]]. Suppose its NLP functions have continuous derivatives through order three on an open neighborhood of a KKT point $(z_*,\mu_*)$, LICQ holds there, every active inequality multiplier is strictly positive, and the second-order sufficient condition holds on the critical cone. Then, after the correct active set is identified, the exact-Hessian full-step branch using [[alg-sqp-exact-hessian-newton-step]] is well-defined from a sufficiently close primal-dual start and converges quadratically to $(z_*,\mu_*)$. The finite-budget dispatch of [[alg-ctrl1-finite-budget-transcription-solver-dispatch]] may terminate before this local convergence is realized.

This is a fixed-transcription local theorem. It gives no global convergence, and no convergence of discrete KKT points as the mesh is refined. Such a mesh-limit conclusion needs separate constraint-consistency and discrete-sensitivity hypotheses; the required page [[discrete-continuous-and-pde-adjoint-sensitivities]] has no supplied item body in this batch handoff.

## Facts & Assumptions

**Given:** A fixed smooth finite transcription, a KKT pair, LICQ, strict complementarity, the second-order sufficient condition, a correct identified active set, and an initial primal-dual point sufficiently close to the KKT pair.

[F1] The transcription is a finite NLP formed by composing smooth data and finite RK stage maps ([[def-ctrl1-smooth-transcription-data]], [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]).

[F2] The KKT convention is $g_i\le0$ with nonnegative active multipliers ([[def-inequality-constrained-program-and-kkt-geometry]]).

[F3] The exact-Hessian local SQP theorem gives quadratic convergence for a $C^2$ NLP with LICQ, strict complementarity, SOSC, and locally Lipschitz active-KKT Jacobian ([[thm-sqp-exact-hessian-local-quadratic-convergence]]).

[F4] The strict second-order sufficient condition used here is positivity of the Lagrangian Hessian on every nonzero critical-cone direction ([[thm-second-order-sufficient-condition-on-the-critical-cone]]).

[F5] Continuous third derivatives on a compact neighborhood are bounded, so the second derivatives of the finite NLP functions are locally Lipschitz there ([[def-ctrl1-smooth-transcription-data]]).

## Proof

1.1 A fixed transcription has finitely many state, stage, and control variables. Its constraints and objective are finite compositions and sums of the pointwise data with three continuous derivatives and polynomial RK stage expressions, so they have continuous derivatives through order three on a neighborhood where every stage remains in the declared smooth tube. [F1, given, algebra]

2.1 The KKT map for the identified active set is built from the first derivatives of those objective and constraint functions. Its Jacobian is locally Lipschitz by continuity and local boundedness of their third derivatives in [F5]. The assumed LICQ, strict complementarity, and SOSC from [F4] are exactly the remaining hypotheses of [F3]. [F2, F3, F4, F5, given, step 1.1]

3.1 Apply [F3] to the active KKT system. It provides a neighborhood in which exact-Hessian full Newton steps are defined and converge quadratically from a sufficiently close start, which is the asserted local branch. The dispatcher has a finite outer cap, so it can stop before the infinite local sequence converges; no global or mesh-refinement claim follows. [F3, given, step 2.1, algebra] ∎
