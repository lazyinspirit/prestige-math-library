---
id: prop-index-one-eigenvector-step-is-the-local-newton-correction
kind: proposition
title: "An exact index-one eigenvector-following step is the Newton correction at a saddle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-index-one-eigenvector-following-step
  - alg-newton-correction-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - cor-hessian-is-symmetric
  - thm-total-derivative-computes-directional-and-partial-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3: local quadratic error estimate for a nonsingular vector root"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (90)–(93): exact Jacobian correction for a square system"
---

## Statement

Let $V\in C^4(U,\mathbb R)$ on an open $U\subseteq\mathbb R^d$, and put $F=\nabla V$. At any accepted update of [[alg-index-one-eigenvector-following-step]], the step is the unique vector $p$ solving

$$DF(x)p=-F(x),\qquad DF(x)=\nabla^2V(x).$$

Suppose $x_*$ is a critical point, its Hessian is nonsingular with exactly one negative eigenvalue, and the Hessian is Lipschitz on a neighborhood of $x_*$. Then for all initial points in a sufficiently small ball about $x_*$, every update that the algorithm attempts before it stops is the ordinary exact-Jacobian Newton update and satisfies the local quadratic estimate supplied by [[thm-updated-jacobian-newton-local-quadratic-convergence]]. A gradient or eigensolve stopping status creates no later update, and no global-start guarantee is asserted.

## Facts & Assumptions

**Given:** The smooth potential, square gradient residual, accepted branch checks, nonsingular index-one critical point, and local Hessian-Lipschitz hypothesis in the Statement.

[F1] [[alg-index-one-eigenvector-following-step]]: after its eigenpair and enclosure checks, it calls the square vector Newton correction with Jacobian $H(x)=\nabla^2V(x)$ and residual $\nabla V(x)$.

[F2] [[alg-newton-correction-for-vector-residuals]]: if the Jacobian is invertible, its correction is the unique $p$ solving $J(x)p=-F(x)$.

[F3] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: for a $C^2$ square residual with a simple zero and locally Lipschitz Jacobian that is invertible at the zero, exact-Jacobian Newton updates from a sufficiently small ball remain local and satisfy a quadratic error bound; the finite method may stop first.

[F4] [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]] fix the Jacobian, gradient, and Hessian conventions. [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies the matrix of $D(\nabla V)$ with the gradient Jacobian, and [[cor-hessian-is-symmetric]] makes its entries agree with $\nabla^2V$. Critical points are precisely zeros of $F$.

[A1] The Hessian at an index-one critical point is nonsingular: its one negative eigenvalue and all remaining positive eigenvalues are nonzero.

## Proof

**Given:** The hypotheses of the Statement.

1.1 At an accepted update, [F1] supplies the exact Hessian Jacobian and gradient residual to the Newton-correction procedure, and its validated ordered enclosures put every Hessian eigenvalue at distance at least $\gamma$ from zero. Thus the Hessian is invertible; [F2] makes the returned correction the unique solution of $\nabla^2V(x)p=-\nabla V(x)$, so the selected step is exactly the vector Newton step. [F1, F2, F4]

1.2 Let $x_*$ be the critical point. By [F4], $F(x_*)=0$ and $DF(x_*)=\nabla^2V(x_*)$ is invertible by [A1]. Since $V\in C^4$, $F$ is $C^2$; the assumed local Hessian-Lipschitz bound is a local Lipschitz bound on $DF$. Thus the hypotheses of [F3] hold. [A1, F3, F4, given]

2.1 The algorithm's update, whenever it is attempted, is the exact correction from step 1.1. Applying [F3] to this recurrence gives the asserted local quadratic bound and invariant neighborhood for every attempted update; if the algorithm stops on a residual or certification branch, there is no later point to which that update claim applies. No conclusion outside the local hypotheses follows. [F1, F3, step 1.1, step 1.2] ∎
