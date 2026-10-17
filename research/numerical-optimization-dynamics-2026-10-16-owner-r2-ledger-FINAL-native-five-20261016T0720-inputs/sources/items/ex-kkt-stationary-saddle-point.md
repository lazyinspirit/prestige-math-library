---
id: ex-kkt-stationary-saddle-point
kind: example
title: An unconstrained KKT point that is a saddle
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-critical-cone-equivalence-under-kkt
  - thm-second-order-necessary-condition-on-the-critical-cone
  - thm-second-order-sufficient-condition-on-the-critical-cone
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.4, printed pp. 342–346; KKT and critical-cone second-order conditions.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 4, local and global optimality; this saddle is a direct finite-dimensional calculation.
---

## Example

With no constraints, let $f(x_1,x_2)=x_1^2-x_2^2$. The origin satisfies
the KKT stationarity equation, but is a saddle point rather than a local
minimum.

## Facts & Assumptions

**Given:** The unconstrained $C^2$ objective
$f(x_1,x_2)=x_1^2-x_2^2$ and $x_*=(0,0)$.

[F1] With no constraints, KKT is $\nabla f(x_*)=0$ and the critical cone
is all of $\mathbb R^2$
([[def-inequality-constrained-program-and-kkt-geometry]]).

[F2] At a local minimizer satisfying LICQ, the Lagrangian Hessian is
nonnegative on the critical cone; strict positivity on every nonzero
critical direction is sufficient for a strict local minimum
([[thm-second-order-necessary-condition-on-the-critical-cone]],
[[thm-second-order-sufficient-condition-on-the-critical-cone]]).

## Verification

1.1 The gradient is $\nabla f(x_1,x_2)=(2x_1,-2x_2)$, so $\nabla f(0,0)=0$ and the origin is KKT. With no constraints, $\mathcal L_C(0)=\mathbb R^2$ and $\mathcal K(0)=\mathbb R^2$. The Hessian is $\begin{pmatrix}2&0\\0&-2\end{pmatrix}$, whose quadratic form at $d=(0,1)$ is $-2$. [given, F1, algebra]

2.1 For every $t\ne0$, $f(t,0)=t^2>0=f(0,0)$, while $f(0,t)=-t^2<0=f(0,0)$. Both points approach the origin as $t\to0$, so the origin is neither a local minimum nor a local maximum. The negative critical curvature also violates the necessary condition in [F2], and strict positivity required by its sufficient condition fails. [given, F2, step 1.1, algebra]

3.1 Thus stationarity alone is not an optimality certificate: this KKT point is a saddle. [step 1.1, step 2.1] ∎
