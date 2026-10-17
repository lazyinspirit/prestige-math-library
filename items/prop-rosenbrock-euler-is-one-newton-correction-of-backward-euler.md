---
id: prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler
title: "Autonomous Rosenbrock–Euler is one Newton correction of backward Euler"
kind: proposition
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rosenbrock-euler-step-map
  - def-backward-euler-step-equation
  - alg-newton-correction-for-vector-residuals
  - def-jacobian-matrix-and-gradient
  - def-c-one-map-and-local-inverse
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, pp. 42–45: linearization of implicit DIRK stages and linearly implicit Euler"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed p. 42: one Newton step followed by the simplified-Newton replacement"
---

## Statement

Let $d\ge1$ and let $f:U\to\mathbb R^d$ be autonomous and $C^1$ on an open $U\subseteq\mathbb R^d$, let $y\in U$, and let $h>0$. Suppose $I_d-hD f(y)$ is invertible. Then the exact-arithmetic Rosenbrock–Euler step with $\gamma=1$ is the first Newton correction of the backward-Euler residual at the initial guess $y$. This does not assert that the corrected point solves the full backward-Euler equation.

## Facts & Assumptions

**Given:** The autonomous field $f$, state $y$, step $h$, and the invertible shifted Jacobian.

[F1] [[def-backward-euler-step-equation]]: for an autonomous field, the backward-Euler residual at candidate $z$ is $G(z)=z-y-hf(z)$.

[F2] [[def-c-one-map-and-local-inverse]]: $C^1$ means totally differentiable at every point, with continuous total derivative.

[F3] [[def-jacobian-matrix-and-gradient]]: the Jacobian matrix has entries given by the state partial derivatives.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of total derivatives.

[F5] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: when a total derivative exists, its matrix is the Jacobian matrix.

[F6] [[alg-newton-correction-for-vector-residuals]]: for residual vector $r$ and invertible matrix $A$, the correction is the unique $s$ satisfying $As=-r$.

[F7] [[def-rosenbrock-euler-step-map]]: at $\gamma=1$, $k$ solves $(I_d-hDf(y))k=f(y)$ and the update is $y+hk$.

## Proof

**Given:** The data in the Statement.

1.1 From [F1], $G(y)=-hf(y)$. Since [F2] makes $f$ totally differentiable, [F4] differentiates $G$ at $y$ to $DG(y)=I_d-hDf(y)$; [F3] and [F5] identify the state derivative matrix with the Jacobian. [F1, F2, F3, F4, F5, algebra]

2.1 By [F6], the Newton correction $s$ solves $(I_d-hDf(y))s=-G(y)=hf(y)$. Since the matrix is invertible, uniqueness gives $s=hk$, where $k$ is the stage slope in [F7]. [F6, step 1.1, F7, algebra]

3.1 The corrected point is therefore $y+s=y+hk$, exactly the update in [F7]. It is one correction from $y$; the calculation establishes no further Newton correction and makes no claim that this point solves the backward-Euler equation. [step 2.1, F1, F7, algebra] ∎
