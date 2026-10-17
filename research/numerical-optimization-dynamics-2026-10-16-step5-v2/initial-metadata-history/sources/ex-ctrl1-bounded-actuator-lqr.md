---
id: ex-ctrl1-bounded-actuator-lqr
kind: example
title: "A bounded-actuator LQR control and its exact objective"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-ctrl1-linear-lqr-control-problem, def-ctrl1-lqr-adjoint-equation, lem-ctrl1-lqr-adjoint-exists-uniquely, lem-ctrl1-lqr-adjoint-identity-and-gradient, def-countable-choice, def-dependent-choice]
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

**Given:** The scalar problem above.

[F1] The state is $x_u(t)=\int_0^t u(s)ds$; the objective is $J(u)=\frac12\|u\|_2^2+\frac12(\int_0^1u-1)^2$ ([[def-ctrl1-linear-lqr-control-problem]]).

[F2] Under Countable Choice, the backward adjoint exists uniquely and satisfies $-\dot p=0$ and $p(1)=x(1)-1$ ([[lem-ctrl1-lqr-adjoint-exists-uniquely]], [[def-ctrl1-lqr-adjoint-equation]]).

[F3] Under Countable Choice and Dependent Choice, the reduced gradient is $B^Tp+Ru$ ([[lem-ctrl1-lqr-adjoint-identity-and-gradient]]).

[A1] Countable Choice and Dependent Choice are assumed only for the reduced-gradient verification in step 3.1 ([[def-countable-choice]], [[def-dependent-choice]]).

[A2] Exact real arithmetic is used.

## Verification

1.1 Put $m=\int_0^1u(t)dt$. Since $\int_0^1(u-m)^2dt=\int_0^1u^2dt-m^2$, direct expansion gives $J(u)=\frac12\|u-m\|_2^2+\frac12[m^2+(m-1)^2]=\frac12\|u-m\|_2^2+(m-\frac12)^2+\frac14$. [F1, A2, algebra]

2.1 Both squared terms are nonnegative, so $J(u)\ge\frac14$. Equality holds exactly when $u=m$ almost everywhere and $m=\frac12$, hence exactly for $u^*(t)=\frac12$ almost everywhere. This control satisfies $[-1,1]$ and direct substitution gives $J(u^*)=\frac14$. Therefore it is the unique minimizer. [step 1.1, given, algebra]

3.1 The state is $x(t)=t/2$. By [F2], the adjoint equation is $-\dot p=0$ with terminal value $p(1)=x(1)-1=-1/2$. The constant curve $p(t)=-1/2$ solves it, and uniqueness in [F2] makes this the adjoint. Under [A1], [F3] gives the reduced gradient $g=p+u^*=0$. Thus $g(t)(c-u^*(t))=0$ for every $c\in[-1,1]$, so the control-only pointwise variational inequality holds with equality for this example. The optimizer and objective calculation in steps 1.1–2.1 used no choice axiom. [A1, F2, F3, step 2.1, algebra] ∎
