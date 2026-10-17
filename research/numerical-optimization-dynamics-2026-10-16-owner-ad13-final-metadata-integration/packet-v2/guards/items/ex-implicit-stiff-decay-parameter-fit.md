---
id: ex-implicit-stiff-decay-parameter-fit
kind: example
title: Backward Euler differentiates a stiff scalar decay fit on its exact branch
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-implicit-rk-stage-parameter-sensitivity, def-backward-euler-step-equation, lem-small-step-implicit-rk-branch-and-residual-error]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John C. Butcher, Implicit Runge-Kutta Methods, tutorial, §§1–2"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§2–3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
---

## Example

For $u'=-ku$ with fixed $u_0>0$ and step size $h>0$, take $k\in(0,(2h)^{-1})$ and the one-stage backward Euler equation $Y=u_0-hkY$. Its fixed-point map sends the invariant interval $[u_0/2,u_0]$ into itself and has contraction factor $hk<1/2$, so the branch selected by [[lem-small-step-implicit-rk-branch-and-residual-error]] is well defined. The observation is zero and the terminal loss is $J(k)=\frac12Y(k)^2$.

## Facts & Assumptions

**Given:** The scalar backward Euler stage equation, the stated parameter interval, and the terminal quadratic objective.

[F1] The one-stage implicit Runge--Kutta residual has the selected stage root and residual bound under its invariant-ball contraction hypotheses ([[lem-small-step-implicit-rk-branch-and-residual-error]]).

[F2] On a nonsingular selected stage branch, implicit differentiation gives $D_\theta Y=-G_Y^{-1}G_\theta$ and differentiates the Runge--Kutta update ([[thm-implicit-rk-stage-parameter-sensitivity]]).

[F3] Backward Euler is the one-stage implicit Runge--Kutta method with $A=(1)$ and $b=(1)$ ([[def-backward-euler-step-equation]]).

## Verification

1.1 Solving the scalar residual gives $(1+hk)Y=u_0$, hence $Y=u_0/(1+hk)$. Since $1+hk>0$, this is the unique root in the stated interval and agrees with the branch in [F1]. [F1, F3, given, algebra]

2.1 Differentiate the residual $(1+hk)Y-u_0=0$: $(1+hk)Y_k+hY=0$, so [F2] gives $Y_k=-hu_0/(1+hk)^2$. Therefore $J_k=YY_k=-hu_0^2/(1+hk)^3$. [F2, step 1.1, algebra] ∎ 