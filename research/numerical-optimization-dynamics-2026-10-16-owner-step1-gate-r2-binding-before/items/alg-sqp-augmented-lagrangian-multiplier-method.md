---
id: alg-sqp-augmented-lagrangian-multiplier-method
kind: algorithm
title: "Finite-budget augmented-Lagrangian multiplier method"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sqp-augmented-lagrangian-equality-and-inequality
  - def-kkt-residual-and-normal-cone
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 17 §17.4, printed pp. 511–521 / PDF pp. 529–539."
    - title: "Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods"
      url: https://www.mit.edu/~dimitrib/Constrained-Opt.pdf
      locator: "Chapter 2 §2.2, printed pp. 104–121."
---

## Definition

Fix a smooth program as in
[[def-sqp-augmented-lagrangian-equality-and-inequality]], a penalty
$\rho>0$, outer cap $K\ge1$, tolerances $\epsilon_k\ge0$, and KKT tolerance
$\tau\ge0$. An inner oracle receives $(x_k,\nu_k,\lambda_k,\rho,\epsilon_k)$
and either returns a point $x_k^+$ with a reported stationarity residual
$\|\nabla_x\mathcal L_\rho(x_k^+,\nu_k,\lambda_k)\|_2\le\epsilon_k$, or
an explicit failure.

Initialize $x_0\in U$, $\nu_0\in\mathbb R^p$, and
$\lambda_0\in\mathbb R^m_+$. For $k=0,\ldots,K-1$:

1. Call the inner oracle. On failure or a residual exceeding $\epsilon_k$,
   return `inner-failure` with the reported data.
2. Set
   $$\nu_{k+1}=\nu_k+\rho h(x_k^+),\qquad \lambda_{k+1}=[\lambda_k+\rho g(x_k^+)]_+.$$
3. If
   $r_{\rm KKT}(x_k^+,\nu_{k+1},\lambda_{k+1})\le\tau$, return
   `kkt-tolerance-reached`; otherwise set $x_{k+1}=x_k^+$ and continue.

If all $K$ outer iterations finish without that test passing, return
`outer-budget-exhausted` and the last point and multipliers. The routine
claims neither convergence nor that the inner oracle succeeds.

## Facts & Assumptions

**Given:** The finite caps and tolerances, the smooth program, and the
nonnegative initial inequality multiplier.

[F1] [[def-sqp-augmented-lagrangian-equality-and-inequality]] defines the
projected inequality augmented Lagrangian and updates
$\nu^+=\nu+\rho h(x^+)$, $\lambda^+=[\lambda+\rho g(x^+)]_+$.

[F2] [[def-kkt-residual-and-normal-cone]] defines the KKT residual as a sum
of stationarity, primal feasibility, dual feasibility and complementarity
residual norms.

[A1] The initial multiplier has $\lambda_0\ge0$, the penalty is positive,
and the outer cap is a positive finite integer.

## Proof

1.1 The initialization gives $\lambda_0\ge0$; each projection in [F1] again has nonnegative components, so every multiplier iterate is in the declared domain. A successful oracle return is checked against the declared inner residual tolerance before any update uses it. [given, A1, F1, algebra]

2.1 Each outer iteration performs one finite oracle call, one finite multiplier update, and one residual test from [F2]. Thus it either returns one of the stated statuses at that iteration or advances the integer index; the cap $K$ forces a return after finitely many iterations. The residual test only certifies its displayed tolerance and does not itself assert that the algorithm reaches it. [given, A1, F1, F2, step 1.1, algebra] ∎
