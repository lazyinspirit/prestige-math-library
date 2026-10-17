---
id: def-ctrl1-linear-lqr-control-problem
kind: definition
title: "Finite-horizon bounded-control linear-quadratic ODE problem"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-weak-convergence-of-nets-and-sequences, def-euclidean-inner-product]
justified_by: [lem-ctrl1-measurable-linear-ode-state-map]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.4–2.5"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–24: measurable bounded linear dynamics, L2 controls, quadratic cost, and the LQ optimality system."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–251, §2: finite-horizon control problem, control constraints, Hamiltonian and continuous first-order system."
---

## Definition

Fix a finite horizon $T>0$, state and control dimensions $n,m\ge1$, and the real quotient space $L^2(0,T;\mathbb R^m)$ of measurable controls modulo equality almost everywhere ([[def-l-p-space-as-a-quotient-by-null-functions]]). Let $A\in L^\infty(0,T;\mathbb R^{n\times n})$ and $B\in L^\infty(0,T;\mathbb R^{n\times m})$ be equivalence classes, let $x_0,x_T\in\mathbb R^n$, and let $x_d\in L^2(0,T;\mathbb R^n)$. Let $U_c\subset\mathbb R^m$ be nonempty, compact and convex. The pointwise control set is
$$
\mathcal U_c:=\{u\in L^2(0,T;\mathbb R^m):u(t)\in U_c\text{ for almost every }t\}.
$$
Let $Q\in L^\infty(0,T;\mathbb R^{n\times n})$ and $R\in L^\infty(0,T;\mathbb R^{m\times m})$ be symmetric almost everywhere, with $Q(t)\succeq0$ and $rI\preceq R(t)\preceq MI$ almost everywhere for constants $0<r\le M<\infty$. Let $P\in\mathbb R^{n\times n}$ be symmetric positive semidefinite. For each $u\in\mathcal U_c$, its state is the unique continuous solution of the Volterra equation
$$
x_u(t)=x_0+\int_0^t\big(A(s)x_u(s)+B(s)u(s)\big)\,ds.
$$
The same state equation is defined for every $u\in L^2(0,T;\mathbb R^m)$, and the running and terminal cost on that ambient space is
$$
J(u)=\frac12\int_0^T\!\left((x_u(t)-x_d(t))^TQ(t)(x_u(t)-x_d(t))+u(t)^TR(t)u(t)\right)dt+\frac12(x_u(T)-x_T)^TP(x_u(T)-x_T).
$$
The constrained problem minimizes this ambient functional over $\mathcal F$, where additional path or terminal constraints are represented by a nonempty convex weakly sequentially closed set $\mathcal F\subseteq\mathcal U_c$; with no additional state constraints, $\mathcal F=\mathcal U_c$. “Weakly sequentially closed” means that every weakly convergent sequence in $\mathcal F$ has its weak limit in $\mathcal F$ ([[def-weak-convergence-of-nets-and-sequences]]). The definition asserts no optimizer or adjoint existence; the state-map well-definedness is supplied by [[lem-ctrl1-measurable-linear-ode-state-map]].
