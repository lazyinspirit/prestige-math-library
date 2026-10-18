---
id: ex-square-root-kalman-singular-prior-positive-innovation
kind: example
title: "A singular prior factor with a positive innovation remains admissible"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-finite-budget-square-root-kalman-filter
  - lem-square-root-kalman-measurement-block-factor-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Take one state and one observation, one update step, $m_0=2$, $F=H=1$,
$y=7$, and factors $L_0=L_Q=0$, $L_R=1$. The initial, process, and
measurement covariances are $P_0=Q=0$ and $R=1$.

## Facts & Assumptions

**Given:** The scalar data in the Example and the exact factor update of
[[alg-finite-budget-square-root-kalman-filter]].

[F1] Prediction concatenates $FL_0$ and $L_Q$, then pads the factor array by
zero columns as needed.
[[alg-finite-budget-square-root-kalman-filter]]

[F2] The measurement prearray has blocks $\begin{bmatrix}L_R^{\mathrm{pad}}&HL^-\\0&L^-\end{bmatrix}$.
[[alg-finite-budget-square-root-kalman-filter]]

[F3] For positive innovation, the block QR factor gives the canonical
posterior covariance and mean, with singular posterior factors allowed.
[[lem-square-root-kalman-measurement-block-factor-identity]]

## Proof

**Given:** The scalar inputs in the Example.

1.1 The prediction array is $[FL_0,L_Q]=[0,0]$. Its QR upper factor is zero, so $L^-=0$ and $P^-=0$. The predicted mean is $m^-=1\cdot2=2$. The innovation is $v=7-1\cdot2=5$, and its covariance is $S=H P^-H^T+R=1$. Thus the canonical innovation is positive definite even though $P_0$ and $Q$ are singular. [F1, given, algebra]

2.1 The measurement prearray is $$ Z=\begin{bmatrix}1&0\\0&0\end{bmatrix}. $$ Its exact QR gives $L_{11}=1$, $L_{21}=0$, $L_{22}=0$. The solve gives $z=5$, so $m^+=m^-+L_{21}z=2$, while the represented posterior covariance is $L_{22}L_{22}^T=0$. [F2, step 1.1, algebra]

3.1 The canonical covariance update is $P^+=0-0\cdot1^{-1}\cdot0=0$ and the canonical mean update is $2+0\cdot1^{-1}\cdot5=2$. They agree with the factor output in step 2.1. The zero posterior factor is admissible by [F3]; no Cholesky factor of a positive-definite state covariance is required. [F3, step 2.1, algebra] ∎

