---
id: lem-sdc-scalar-linear-iteration-matrix
kind: lemma
title: SDC iteration matrix for the scalar linear test equation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-explicit-left-euler-sdc-sweep
  - lem-sdc-fixed-point-is-collocation-stage
  - def-collocation-quadrature-tableau
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §§1.1 and 3
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

For the scalar test equation $y'=\lambda y$ and $z=h\lambda$, let $U^*$ be a collocation stage vector and $U^k$ the SDC iterates using the explicit-left-Euler stage block $Q_\Delta$ from [[alg-explicit-left-euler-sdc-sweep]]. Then
$$E^{k+1}=B(z)E^k,\qquad B(z):=(I-zQ_\Delta)^{-1}z(Q-Q_\Delta),\qquad E^k:=U^k-U^*.$$
The inverse exists for every real $z$ because $Q_\Delta$ is strictly lower triangular. In the induced infinity norm from [[def-collocation-quadrature-tableau]], $\|E^k\|_{\infty,2}\le\|B(z)\|_\infty^k\|E^0\|_{\infty,2}$. This identity makes no convergence claim when the powers of $B(z)$ do not tend to zero; stability of the fully solved collocation step alone is not an SDC iteration guarantee.

## Facts & Assumptions

**Given:** A fixed node set, its collocation matrices $Q,Q_\Delta$, a scalar $\lambda\in\mathbb R$, step $h>0$, and the scalar ODE $y'=\lambda y$.

[F1] [[alg-explicit-left-euler-sdc-sweep]]: the stage update is $U^{k+1}=\mathbf1u+hQ_\Delta F(U^{k+1})+h(Q-Q_\Delta)F(U^k)$.

[F2] [[lem-sdc-fixed-point-is-collocation-stage]]: the SDC fixed point is the collocation stage vector.

[F3] [[alg-explicit-left-euler-sdc-sweep]] makes $Q_\Delta$ strictly lower triangular; [[def-collocation-quadrature-tableau]] defines $\|A\|_\infty=\max_i\sum_j|a_{ij}|$.

## Proof

1.1 On this equation, $F(U)=\lambda U$. Subtract the fixed-point instance of [F1] from its $k$th sweep to obtain $(I-zQ_\Delta)E^{k+1}=z(Q-Q_\Delta)E^k.$ The diagonal of $I-zQ_\Delta$ consists of ones and it is lower triangular by [F3], so forward substitution uniquely solves this system for every $z\in\mathbb R$. [given, F1, F2, F3, algebra]

2.1 Solving step 1.1 gives $E^{k+1}=B(z)E^k$ with the displayed $B(z)$; induction yields $E^k=B(z)^kE^0$. For any vector $v$, the row-wise triangle inequality gives $\|B(z)v\|_{\infty,2}\le\|B(z)\|_\infty\|v\|_{\infty,2}$, so applying this bound $k$ times gives the stated power estimate. No bound less than one is asserted for general $z$ or node sets. [step 1.1, F3, algebra] ∎
