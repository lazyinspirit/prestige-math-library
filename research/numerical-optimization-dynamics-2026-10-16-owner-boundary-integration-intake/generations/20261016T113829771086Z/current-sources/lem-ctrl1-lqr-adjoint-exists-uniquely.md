---
id: lem-ctrl1-lqr-adjoint-exists-uniquely
kind: lemma
title: "The backward LQR adjoint equation has a unique solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-ctrl1-lqr-adjoint-equation, lem-ctrl1-measurable-linear-ode-state-map, def-ctrl1-linear-lqr-control-problem, def-countable-choice, lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice, thm-c1-lipschitz-ac-bv-hierarchy, cor-boundedness-theorem-r, cor-cauchy-schwarz-inequality-for-l-two]
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
      locator: "Printed pp. 23–24: existence statement and backward adjoint equation; the terminal-value well-definedness proof is supplied here."
---

## Statement

Assume the Axiom of Countable Choice.

For every LQR data set in [[def-ctrl1-linear-lqr-control-problem]] and every admissible control $u$, the adjoint in [[def-ctrl1-lqr-adjoint-equation]] exists and is unique.

## Facts & Assumptions

**Given:** Countable Choice; the bounded measurable matrices $A,Q$, state $x_u$, target $x_d\in L^2$, and terminal value $P(x_u(T)-x_T)$.

[F1] The linear state lemma supplies a unique absolutely continuous solution of its Volterra integral equation for $C,D\in L^\infty$ and $v\in L^2$; under Countable Choice this constructed solution also satisfies $\dot y=C(t)y+D(t)v(t)$ almost everywhere ([[lem-ctrl1-measurable-linear-ode-state-map]], [[def-countable-choice]]).

[F2] The adjoint is defined by $-\dot p=A^Tp+Q(x_u-x_d)$ and $p(T)=P(x_u(T)-x_T)$ ([[def-ctrl1-lqr-adjoint-equation]]).

[F3] Under Countable Choice, an absolutely continuous vector curve with known $L^1$ derivative equals its initial value plus the componentwise Lebesgue integral of that derivative ([[lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice]]).

[F4] An absolutely continuous scalar function is continuous, and a continuous scalar function on a compact interval is bounded; these apply to each of the finitely many coordinates ([[thm-c1-lipschitz-ac-bv-hierarchy]], [[cor-boundedness-theorem-r]]).

[F5] On the finite horizon, $\|g\|_{L^1}\le\sqrt T\,\|g\|_{L^2}$ componentwise ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

1.1 The forcing $g(s):=Q(T-s)(x_u(T-s)-x_d(T-s))$ lies in $L^2(0,T;\mathbb R^n)$: $Q$ is essentially bounded, $x_u$ is continuous on a compact interval and hence bounded, and $x_d\in L^2$. Also $C(s):=A(T-s)^T\in L^\infty$. Apply [F1] with $D(s)=I$ and initial value $q(0)=P(x_u(T)-x_T)$ to obtain an absolutely continuous $q$ satisfying the forward Volterra integral equation and $\dot q=Cq+g$ almost everywhere. [F1, F2, F4, given, construct]

2.1 Set $p(t)=q(T-t)$. Time reversal preserves absolute continuity, and differentiating almost everywhere gives $-\dot p(t)=A(t)^Tp(t)+Q(t)(x_u(t)-x_d(t))$ with $p(T)=q(0)=P(x_u(T)-x_T)$. Thus $p$ satisfies [F2]. [step 1.1, F2, algebra]

3.1 If $\widetilde p$ is another adjoint solution, time reversal gives an absolutely continuous $\widetilde q(s)=\widetilde p(T-s)$ with $\widetilde q(0)=q(0)$ and $\dot{\widetilde q}=C\widetilde q+g$ almost everywhere. By [F4], $\widetilde q$ is continuous and bounded componentwise. Since $C\in L^\infty$, $g\in L^2$ and [F5] gives $g\in L^1$, the function $h=C\widetilde q+g$ belongs to $L^1$ componentwise. Apply [F3] to obtain $\widetilde q(s)=q(0)+\int_0^s(C(r)\widetilde q(r)+g(r))\,dr$ for every $s$. This is exactly the forward Volterra equation used to construct $q$ in step 1.1. Its actual integral-equation uniqueness in [F1] gives $\widetilde q=q$, hence $\widetilde p=p$. [F1, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
