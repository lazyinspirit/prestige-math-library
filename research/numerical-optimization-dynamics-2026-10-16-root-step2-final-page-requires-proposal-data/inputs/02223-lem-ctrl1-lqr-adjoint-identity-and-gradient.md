---
id: lem-ctrl1-lqr-adjoint-identity-and-gradient
kind: lemma
title: "The LQR adjoint identity gives the reduced gradient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, def-ctrl1-lqr-adjoint-equation, lem-ctrl1-lqr-adjoint-exists-uniquely, thm-integration-by-parts-for-absolutely-continuous-functions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5.2"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 23–24: LQ adjoint system and control formula; the directional-derivative identity is proved here."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–257, §§2–3: continuous adjoint equation and discrete Hamiltonian-gradient relation."
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice.

For the LQR problem of [[def-ctrl1-linear-lqr-control-problem]], let $u\in\mathcal U_c$, let $x=x_u$, and let $p$ be its adjoint from [[def-ctrl1-lqr-adjoint-equation]]. Define the bounded linear map $DJ(u):L^2(0,T;\mathbb R^m)\to\mathbb R$ by
$$DJ(u)[w]=\int_0^T\big(B(t)^Tp(t)+R(t)u(t)\big)^Tw(t)\,dt.$$
It is the first-order norm derivative of $J$ at $u$ in the precise sense that $J(u+w)-J(u)-DJ(u)[w]=O(\|w\|_2^2)$ as $\|w\|_2\to0$.

## Facts & Assumptions

**Given:** The LQR data, $u,w\in L^2$, the state variation $\delta x=x_{u+w}-x_u$, and the adjoint $p$.

[F1] The state map is affine; its difference $\delta x$ satisfies $\dot{\delta x}=A\delta x+Bw$ and $\delta x(0)=0$ ([[lem-ctrl1-measurable-linear-ode-state-map]]).

[F2] The adjoint is absolutely continuous and satisfies $-\dot p=A^Tp+Q(x-x_d)$ and $p(T)=P(x(T)-x_T)$ ([[def-ctrl1-lqr-adjoint-equation]], [[lem-ctrl1-lqr-adjoint-exists-uniquely]]).

[F3] For absolutely continuous scalar functions, integration by parts gives $\int_0^T p^T\dot{\delta x}+\dot p^T\delta x=p(T)^T\delta x(T)-p(0)^T\delta x(0)$ componentwise ([[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F4] The integral pairing is bounded by the product of the $L^2$ norms ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[A1] Countable Choice and Dependent Choice are assumed for [F3], exactly as required by that supplier ([[def-countable-choice]], [[def-dependent-choice]]).

## Proof

1.1 By [F1], the state variation $\delta x=x_{u+w}-x$ is linear in $w$ and satisfies $\|\delta x\|_\infty\le C_0\|w\|_2$ for a fixed constant $C_0$. Expanding the running and terminal quadratic forms gives the linear term $\int_0^T (x-x_d)^TQ\delta x\,dt+\int_0^T u^TRw\,dt+(x(T)-x_T)^TP\delta x(T)$ and a remainder $\frac12\int_0^T(\delta x^TQ\delta x+w^TRw)dt+\frac12\delta x(T)^TP\delta x(T)$. Boundedness of $Q,R,P$ and the state-map estimate bound this remainder by $C\|w\|_2^2$. Thus the displayed linear term is the first-order norm derivative before rewriting its state contributions through the adjoint. [F1, given, algebra]

1.2 Apply [F3] to $p$ and $\delta x$, whose absolute continuity follows from [F1] and [F2]. Using their differential equations gives $p(T)^T\delta x(T)-p(0)^T\delta x(0)=-\int_0^T(x-x_d)^TQ\delta x\,dt+\int_0^T p^TBw\,dt$. Since $\delta x(0)=0$ and $p(T)=P(x(T)-x_T)$, rearranging yields $\int_0^T(x-x_d)^TQ\delta x\,dt+(x(T)-x_T)^TP\delta x(T)=\int_0^T p^TBw\,dt$. [F1, F2, F3, A1, algebra]

2.1 Substitute the identity from step 1.2 into the derivative coefficient of step 1.1 and use $(p^TBw)=(B^Tp)^Tw$ and $(u^TRw)=(Ru)^Tw$ because $R=R^T$ almost everywhere. The resulting coefficient is $DJ(u)[w]$. Moreover, $B^Tp+Ru\in L^2$ since $B,R$ are essentially bounded, $p$ is continuous, and $u\in L^2$; [F4] therefore makes $DJ(u)$ a bounded linear map. The quadratic remainder bound in step 1.1 proves the stated first-order norm expansion. [F1, F2, F4, step 1.1, step 1.2, algebra] ∎
