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
$\rho>0$, finite outer cap $K\ge1$, finite per-call inner cap $M\ge1$,
tolerances $\epsilon_k\ge0$, and KKT tolerance $\tau\ge0$. A supplied
finite-budget inner procedure receives
$(x_k,\nu_k,\lambda_k,\rho,\epsilon_k,M)$, performs at most $M$ inner
iterations, and returns one of: `success(x_k^+,\widehat\epsilon_k)` with
$x_k^+\in U$ and
$\widehat\epsilon_k=\|\nabla_x\mathcal L_\rho(x_k^+,\nu_k,\lambda_k)\|_2
\le\epsilon_k$; `budget-exhausted(x_{\rm last},\widehat\epsilon_{\rm last})`
with $x_{\rm last}\in U$ and
$\widehat\epsilon_{\rm last}=
\|\nabla_x\mathcal L_\rho(x_{\rm last},\nu_k,\lambda_k)\|_2$; or
`failure(data)` when it cannot continue or report a residual. Each inner
iteration and report computation is finite, and the procedure returns by its
cap.

Initialize $x_0\in U$, $\nu_0\in\mathbb R^p$, and
$\lambda_0\in\mathbb R^m_+$. For $k=0,\ldots,K-1$:

1. Call the inner procedure with cap $M$. On
   `budget-exhausted(x_{\rm last},\widehat\epsilon_{\rm last})`, return
   `inner-budget-exhausted` with current $(x_k,\nu_k,\lambda_k)$, that point,
   and residual. On `failure(data)`,
   return `inner-failure` with the data. If a purported success reports a
   residual exceeding $\epsilon_k$, return `inner-failure` with the reported
   data. Otherwise store its reported inner residual
   $\widehat\epsilon_k$.
2. Set
   $$\nu_{k+1}=\nu_k+\rho h(x_k^+),\qquad \lambda_{k+1}=[\lambda_k+\rho g(x_k^+)]_+.$$
3. Set $r_k=r_{\rm KKT}(x_k^+,\nu_{k+1},\lambda_{k+1})$. If $r_k\le\tau$,
   return `kkt-tolerance-reached` with $x_k^+$, $(\nu_{k+1},\lambda_{k+1})$,
   $r_k$, and $\widehat\epsilon_k$; otherwise set $x_{k+1}=x_k^+$ and
   continue.

If all $K$ outer iterations finish without that test passing, return
`outer-budget-exhausted` with $x_K$, $(\nu_K,\lambda_K)$, the last KKT
residual $r_{K-1}$, and inner residual $\widehat\epsilon_{K-1}$. The routine
claims neither convergence nor that the inner procedure succeeds within its
cap.

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
and the inner and outer caps are positive finite integers. The supplied
inner procedure obeys its cap and returns the stated residual or failure
data.

## Proof

1.1 The initialization gives $\lambda_0\ge0$; each projection in [F1] again has nonnegative components, so every multiplier iterate is in the declared domain. A successful inner-procedure return is checked against the declared inner residual tolerance before any update uses it. [given, A1, F1, algebra]

2.1 Each outer iteration performs at most $M$ inner iterations, one finite
multiplier update, and one residual test from [F2]. Thus it either returns
one of the stated inner statuses at that iteration or advances the integer
index; the cap $K$ forces a return after at most $KM$ inner iterations and
$K$ outer tests. If the outer cap is reached, the last reported inner and
KKT residuals are returned. The residual test only certifies its displayed
tolerance and does not itself assert that the algorithm reaches it. [given,
A1, F1, F2, step 1.1, algebra] ∎
