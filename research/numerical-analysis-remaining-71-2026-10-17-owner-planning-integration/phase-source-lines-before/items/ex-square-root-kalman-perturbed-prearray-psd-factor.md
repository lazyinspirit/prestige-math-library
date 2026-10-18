---
id: ex-square-root-kalman-perturbed-prearray-psd-factor
kind: example
title: "A nonzero prearray perturbation changes the posterior but keeps its factor product PSD"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-square-root-kalman-gram-perturbation-bound
  - lem-square-root-kalman-measurement-block-factor-identity
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

Use a scalar state and observation with $P^-=R=H=1$. The exact measurement
prearray is
$$Z=\begin{bmatrix}1&1\\0&1\end{bmatrix}.$$
For the perturbation calculation take
$$E=\begin{bmatrix}0&1/10\\0&0\end{bmatrix}, \qquad \widehat Z=Z+E.$$
This is a mathematical backward-perturbation example; it does not assert
that a particular floating-point QR produces this exact $E$.

## Facts & Assumptions

**Given:** The scalar prearray and the stated nonzero matrix perturbation.

[F1] A factor perturbation $E$ changes the Gram matrix by at most
$2\|Z\|_F\|E\|_F+\|E\|_F^2$.
[[lem-square-root-kalman-gram-perturbation-bound]]

[F2] When the innovation block is positive, the lower-right Schur complement
of the block QR Gram matrix is represented as $L_{22}L_{22}^T$.
[[lem-square-root-kalman-measurement-block-factor-identity]]

## Proof

**Given:** The matrices in the Example.

1.1 The exact Gram matrix is
$$ZZ^T=\begin{bmatrix}2&1\\1&1\end{bmatrix}.$$
Its innovation variance is $2$, its cross covariance is $1$, and its exact
posterior covariance is $1-1/2=1/2$. [F2, given, algebra]

1.2 The perturbed array and its Gram matrix are
$$\widehat Z=\begin{bmatrix}1&11/10\\0&1\end{bmatrix},\qquad \widehat Z\widehat Z^T= \begin{bmatrix}221/100&11/10\\11/10&1\end{bmatrix}.$$
Here $\|E\|_F=1/10$, $\|Z\|_F=\sqrt3$, and the Gram difference is
$\begin{bmatrix}21/100&1/10\\1/10&0\end{bmatrix}$, whose Frobenius norm is
$\sqrt{641}/100$; it is bounded by [F1].
The perturbed innovation remains positive, and its Schur complement is
$$1-\frac{(11/10)^2}{221/100} =1-\frac{121}{221}=\frac{100}{221}>0.$$
This differs from $1/2$ by $-21/442$. [F1, given, step 1.1, algebra]

2.1 By [F2], the perturbed Schur complement is exactly the represented
factor product $L_{22}L_{22}^T$, so it is positive semidefinite; here it is
the positive scalar $100/221$. The nonzero prearray perturbation changes the
posterior covariance, while the factor representation retains positive
semidefiniteness. [F2, step 1.2, algebra] ∎
