---
id: thm-positive-tangent-hessian-implies-strict-projector-minimum
kind: theorem
title: "A positive tangent Hessian gives a strict local projector minimum"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-basis-projector-energy-model
  - prop-finite-projector-energy-reality-and-gradient
  - lem-rank-r-projector-grassmann-chart-and-tangent
  - thm-finite-projector-commutator-stationarity
  - thm-ftc-first-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3, Princeton University Press (2008), §§3.4.4 and 3.5.7"
      url: https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf
verification: {}
---

## Statement

Let $P_0\in\mathcal P_r$ be stationary for the $C^2$ energy $E$ of
[[def-finite-basis-projector-energy-model]]. Use its graph chart $P(X)$ from
[[lem-rank-r-projector-grassmann-chart-and-tangent]], with $P(0)=P_0$, and put
$\psi(X)=E(P(X))$. If there is $c>0$ such that
$$D^2\psi(0)[X,X]\ge c\|X\|_F^2\quad\text{for every }X:U\to U^\perp,$$
then $P_0$ is a strict isolated local minimum on $\mathcal P_r$. Since
projectors identify frames related by unitary rotations, this is a strict local
minimum modulo orbital gauge. This is a sufficient condition, not a claim that
every stationary point satisfies it.

## Facts & Assumptions

**Given:** A $C^2$ energy on $\mathcal P_r$, a stationary projector $P_0$, its graph chart, and a positive lower bound $c$ for the chart Hessian.

[F1] Stationarity on $\mathcal P_r$ is the vanishing of the derivative on every tangent direction ([[thm-finite-projector-commutator-stationarity]]).

[F2] The graph map $X\mapsto P(X)$ is a smooth one-to-one coordinate chart near $P_0$; frames differing by a unitary represent the same projector ([[lem-rank-r-projector-grassmann-chart-and-tangent]]).

[F3] The fundamental theorem of calculus differentiates an integral of a continuous function ([[thm-ftc-first-part]]); applying it twice gives the second-order integral remainder used below.

## Proof


1.1 The derivative of $\psi$ at $0$ is $D\psi(0)[X]=DE(P_0)[DP(0)[X]]$. The chart differential is tangent by [F2], so stationarity [F1] makes this derivative zero for every $X$. [F1, F2, given]

2.1 By the assumed Hessian bound and continuity of $D^2\psi$, there is a neighborhood of $0$ in which $D^2\psi(Y)[X,X]\ge(c/2)\|X\|_F^2$ for every $X$. For $X$ in this neighborhood, the one-variable fundamental theorem of calculus [F3] applied twice to $t\mapsto\psi(tX)$ gives $\psi(X)-\psi(0)-D\psi(0)[X]=\int_0^1(1-t)D^2\psi(tX)[X,X]dt\ge\frac c4\|X\|_F^2$. By step 1.1 this is positive for every nonzero $X$. [F2, F3, given, step 1.1, algebra]

3.1 The graph chart is one-to-one and maps an open neighborhood of $0$ onto a neighborhood of $P_0$ in projector space by [F2]. Step 2.1 therefore proves that every distinct nearby projector has strictly larger energy. Projectors represent unitary-equivalence classes of occupied frames, so the same statement is strict local minimality modulo orbital gauge. [F2, step 2.1] ∎

