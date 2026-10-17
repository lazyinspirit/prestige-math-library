---
id: def-ctrl1-lqr-adjoint-equation
kind: definition
title: "Continuous adjoint equation for the linear-quadratic ODE"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, def-vector-valued-derivative-and-integral, def-absolutely-continuous-function]
justified_by: [lem-ctrl1-lqr-adjoint-exists-uniquely]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5.2"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 23–24: backward adjoint equation and terminal condition for the LQ problem."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–250, §2: continuous adjoint and terminal condition in the Hamiltonian first-order system."
---

## Definition

For the data of [[def-ctrl1-linear-lqr-control-problem]] and an admissible control $u$ with state $x_u$, a **continuous LQR adjoint** is an absolutely continuous curve $p:[0,T]\to\mathbb R^n$ satisfying, almost everywhere,
$$
-\dot p(t)=A(t)^Tp(t)+Q(t)(x_u(t)-x_d(t)),\qquad p(T)=P(x_u(T)-x_T).
$$
Existence and uniqueness for this terminal-value equation are established by [[lem-ctrl1-lqr-adjoint-exists-uniquely]]. This sign convention is the one for the minimization Hamiltonian $H(t,x,p,u)=L(t,x,u)+p^T(A(t)x+B(t)u)$.
