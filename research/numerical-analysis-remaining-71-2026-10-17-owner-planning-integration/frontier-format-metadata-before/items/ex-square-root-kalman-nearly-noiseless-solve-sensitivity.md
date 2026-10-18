---
id: ex-square-root-kalman-nearly-noiseless-solve-sensitivity
kind: example
title: "A nearly noiseless weakly scaled observation amplifies innovation-solve residual"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-finite-budget-square-root-kalman-filter
  - lem-square-root-kalman-measurement-block-factor-identity
  - thm-square-root-kalman-finite-horizon-perturbation-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Take a scalar predicted variance $P^-=1$, observation coefficient
$H=10^{-3}$, and measurement variance $R=10^{-12}$. For innovation
$v=1$, suppose the computed triangular solve has residual
$L_{11}\widehat z-v=10^{-9}$, with no other mean-update error.

## Facts & Assumptions

**Given:** The scalar data and the exact factor mean update of
[[alg-finite-budget-square-root-kalman-filter]].

[F1] The innovation variance is $S=HP^-H^T+R$, the cross covariance is
$B=P^-H^T$, and the exact gain is $BS^{-1}$.
[[lem-square-root-kalman-measurement-block-factor-identity]]

[F2] The finite-horizon bound includes the forward-solve residual multiplied
by an upper bound for the gain norm.
[[thm-square-root-kalman-finite-horizon-perturbation-bound]]

## Proof

**Given:** The scalar inputs in the Example.

1.1 The signal part of the observation variance is $HP^-H^T=10^{-6}$, so
$R/(HP^-H^T)=10^{-6}$ and the observation noise is small relative to the
predicted signal variance. The innovation variance and cross covariance are
$$
S=10^{-6}+10^{-12}=\frac{1000001}{10^{12}},\qquad B=10^{-3}.
$$
Thus the exact gain is
$$
K=\frac{B}{S}=\frac{10^9}{1000001}.
$$
[F1, given, algebra]

1.2 In the scalar block QR, $L_{11}^2=S$ and $L_{21}L_{11}=B$, so
$L_{21}/L_{11}=K$. If
$L_{11}\widehat z-v=\rho=10^{-9}$, then
$\widehat z=(v+\rho)/L_{11}$. The induced mean-update error is therefore
$$
L_{21}\widehat z-Kv=K\rho=\frac{1}{1000001}
\approx9.99999000001\times10^{-7}.
$$
An absolute solve residual of $10^{-9}$ has produced an update error about
$10^{-6}$ because the gain is about $10^3$. The $K^\#\rho$ term in [F2]
provides a certified upper-bound counterpart when only a gain norm bound is
available. [F1, F2, step 1.1, algebra] ∎
