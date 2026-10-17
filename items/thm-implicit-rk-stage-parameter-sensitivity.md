---
id: thm-implicit-rk-stage-parameter-sensitivity
kind: theorem
title: An implicit Runge-Kutta stage has the stated parameter sensitivity on its selected branch
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-implicit-runge-kutta-stage-equations, lem-implicit-rk-stage-jacobian-nonsingular-on-branch, lem-small-step-implicit-rk-branch-and-residual-error, thm-implicit-differentiation-forward-and-adjoint-formulas, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§2–3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "John C. Butcher, Implicit Runge-Kutta Methods, tutorial, §§1–2"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
---

## Statement

Let $u=u(\theta)$ be $C^1$ and consider a selected $s$-stage Runge–Kutta branch for a $C^1$ parameter-dependent vector field $f(t,y,\theta)$. Let $F(Y,u,\theta)$ be the stack of its stage evaluations and
$$G(Y,u,\theta)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y,u,\theta).$$
Assume the branch is the unique root in the invariant ball of [[lem-small-step-implicit-rk-branch-and-residual-error]], and its stage derivative $G_Y$ obeys the hypotheses of [[lem-implicit-rk-stage-jacobian-nonsingular-on-branch]]. Then the branch $Y(\theta)$ is locally $C^1$ and
$$D_\theta Y=-G_Y^{-1}\bigl(G_uD_\theta u+G_\theta\bigr).$$
For the tableau weights $b=(b_1,\ldots,b_s)^T$ and update $\Psi_h(u,\theta)=u+h(b^T\otimes I_d)F(Y(\theta),u(\theta),\theta)$,
$$D_\theta\Psi_h=D_\theta u+h(b^T\otimes I_d)\bigl(F_YD_\theta Y+F_uD_\theta u+F_\theta\bigr).$$
These are exact derivatives of the selected algebraic stage branch. A finite-budget stage iteration is a different map and is not covered by this formula.

## Facts & Assumptions

**Given:** The selected implicit Runge–Kutta tableau, the $C^1$ field, the initial state map, the invariant stage branch and the stated Jacobian nonsingularity.

[F1] The stage residual is $G(Y,u,\theta)=Y-\mathbf1\otimes u-h(A\otimes I_d)F(Y,u,\theta)$, and the update uses the weighted stage evaluations ([[def-implicit-runge-kutta-stage-equations]]).

[F2] The selected branch is uniquely defined in its invariant ball when the contraction and ball-invariance hypotheses hold ([[lem-small-step-implicit-rk-branch-and-residual-error]]).

[F3] If a $C^1$ residual has a zero and an invertible state-block Jacobian, it has a local $C^1$ solution branch with derivative $-R_z^{-1}R_\theta$ ([[thm-implicit-differentiation-forward-and-adjoint-formulas]]).

[F4] The residual Jacobian is invertible under the stated contraction derivative bound ([[lem-implicit-rk-stage-jacobian-nonsingular-on-branch]]).

[F5] The derivative of a composition is given by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[A1] The field and stage maps are $C^1$ on an open neighborhood of the selected branch, and $G_Y$ is evaluated on that branch.

## Proof

1.1 By [F2], the stated root exists on the selected ball, and [F4] makes $G_Y$ invertible there. Regard $R(\theta,Y)=G(Y,u(\theta),\theta)$. Its parameter derivative is $R_\theta=G_uD_\theta u+G_\theta$. Apply [F3] to obtain the local branch and the displayed formula for $D_\theta Y$. [F1, F2, F3, F4, A1]

2.1 The update is the finite composition of $u(\theta)$, $Y(\theta)$ and the $C^1$ stage evaluation map in [F1]. Apply [F5] and the product rule for the linear output map $h(b^T\otimes I_d)$ to get the displayed derivative. [F1, F5, step 1.1, algebra]

3.1 The calculation differentiates the exact equation $G(Y,u(\theta),\theta)=0$ on its selected branch. It contains no update of a finite stage solver, so no derivative of a stopped iteration is asserted. [F1, step 1.1, step 2.1] ∎

