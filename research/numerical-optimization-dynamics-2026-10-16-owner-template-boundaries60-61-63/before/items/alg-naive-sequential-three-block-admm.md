---
id: alg-naive-sequential-three-block-admm
kind: algorithm
title: "Naive sequential three-block ADMM"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Caihua Chen, Bingsheng He, Yinyu Ye, and Xiaoming Yuan, The direct extension of ADMM for multi-block convex minimization problems is not necessarily convergent, §§2–3"
      url: "https://web.stanford.edu/~yyye/ADMM-final.pdf"
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
---

## Definition

For proper closed convex $f_i:\mathbb R^{n_i}\to(-\infty,+\infty]$, linear
$A_i:\mathbb R^{n_i}\to\mathbb R^p$, data $b\in\mathbb R^p$, penalty
$\rho>0$, and scaled multiplier $u^k$, the **naive sequential three-block
ADMM** sweep is
$$x_1^{k+1}\in\arg\min_{x_1}f_1(x_1)+\frac\rho2\|A_1x_1+A_2x_2^k+A_3x_3^k-b+u^k\|^2,$$
then $x_2^{k+1}$ minimizes the same augmented residual with $x_1^{k+1}$,
$x_2$ variable and $x_3^k$ fixed; then $x_3^{k+1}$ minimizes it with the
first two new blocks; finally
$$u^{k+1}=u^k+A_1x_1^{k+1}+A_2x_2^{k+1}+A_3x_3^{k+1}-b.$$
Only exact attained block minimizers advance the state. A finite solver must
return an explicit failed or cap-exhausted status if it cannot certify a
minimizer. This is a definition of a procedure and asserts no convergence.

## Facts & Assumptions

**Given:** The three proper closed convex objectives, linear maps, $b$, $\rho>0$, current state, and finite inner caps.

[A1] Dimensions match, $f_i$ are proper closed convex, $\rho>0$, and inner caps are finite.


[F1] [[def-proper-closed-convex-function-on-rn]]: each objective is proper closed convex.

[F2] [[def-euclidean-inner-product]]: the augmented residual norm is the Euclidean norm in $\mathbb R^p$.

## Verification


1.1 Each displayed block objective is the corresponding convex objective plus a nonnegative continuous quadratic in its block variable; the order fixes later blocks at their newest available values. The update is therefore precisely the sequential Gauss–Seidel extension of the two-block recurrence. [A1, F1, F2, given, given]

2.1 An exact update requires each argmin to be nonempty and attained. The definition requires explicit failure rather than an uncertified approximate point when a finite cap is exhausted, and makes no claim that the cap succeeds or that the outer sequence converges. [A1, F1, given] ∎
