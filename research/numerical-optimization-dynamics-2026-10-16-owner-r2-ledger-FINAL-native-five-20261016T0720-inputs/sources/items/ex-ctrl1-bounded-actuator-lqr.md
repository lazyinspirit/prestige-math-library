---
id: ex-ctrl1-bounded-actuator-lqr
kind: example
title: "A bounded-actuator LQR control and its exact objective"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-ctrl1-linear-lqr-control-problem, thm-ctrl1-lqr-existence-and-unique-optimal-control, thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.4–2.5"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 20–25: bounded-control LQR formulation, coercive quadratic cost, and first-order optimality."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–251, §2: linear-quadratic dynamics, control constraints, and adjoint optimality system."
---

## Example

Take $T=1$, $\dot x=u$, $x(0)=0$, $u(t)\in[-1,1]$, running cost $\frac12u(t)^2$, and terminal cost $\frac12(x(1)-1)^2$. The unique optimal actuator signal is the constant $u^*(t)=\frac12$, and its objective is $J(u^*)=\frac14$.

## Facts & Assumptions

**Given:** The scalar problem above and the LQR existence and variational-inequality results.

[F1] The state is $x_u(t)=\int_0^t u(s)ds$; the objective is $J(u)=\frac12\|u\|_2^2+\frac12(\int_0^1u-1)^2$ ([[def-ctrl1-linear-lqr-control-problem]]).

[F2] A feasible LQR problem has a unique minimizer under the theorem's closedness and axiom hypotheses ([[thm-ctrl1-lqr-existence-and-unique-optimal-control]]).

[F3] Every minimizer satisfies the global and control-only pointwise variational inequalities ([[thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch]]).

[A1] Exact real arithmetic is used.

## Verification

1.1 Put $m=\int_0^1u(t)dt$. Since $\int_0^1(u-m)^2dt=\int_0^1u^2dt-m^2$, direct expansion gives $J(u)=\frac12\|u-m\|_2^2+\frac12[m^2+(m-1)^2]=\frac12\|u-m\|_2^2+(m-\frac12)^2+\frac14\ge\frac14$. Equality requires $u=m$ almost everywhere and $m=\frac12$, so it occurs exactly at $u^*(t)=\frac12$, which satisfies the actuator bound. [F1, A1, algebra]

2.1 By [F2] an optimizer exists uniquely; step 1.1 identifies its value and control as $u^*$. Its state is $x(t)=t/2$, adjoint is constant $p(t)=x(1)-1=-1/2$, and reduced gradient $p+u^*=0$. Thus the pointwise control variational inequality from [F3] holds with equality for every admissible actuator value. Substitution into the objective gives $J(u^*)=\frac12(1/4)+\frac12(1/2-1)^2=\frac14$. [F1, F2, F3, step 1.1, algebra] ∎
