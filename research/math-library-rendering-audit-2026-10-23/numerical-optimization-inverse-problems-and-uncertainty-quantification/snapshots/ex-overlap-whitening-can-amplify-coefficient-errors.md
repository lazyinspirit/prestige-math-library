---
id: ex-overlap-whitening-can-amplify-coefficient-errors
kind: example
title: "An ill-conditioned overlap preserves exact Ritz values but amplifies coordinate errors"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-basis-projector-energy-model
  - prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $0<\varepsilon<1$, take
$$S_\varepsilon=\begin{pmatrix}1&1-\varepsilon\\1-\varepsilon&1\end{pmatrix}.$$
This overlap is positive definite but has spectral (2-norm) condition number
$(2-\varepsilon)/\varepsilon$. Cholesky whitening preserves exact generalized
Ritz values and Rayleigh quotients, while the map from whitened coordinates back
to basis coefficients has operator norm $\varepsilon^{-1/2}$. Thus exact
variational invariance does not imply good numerical conditioning.

## Facts & Assumptions

**Given:** $0<\varepsilon<1$, the overlap matrix $S_\varepsilon$, a Cholesky factor $S_\varepsilon=LL^*$, and a Hermitian pencil matrix.

[F1] Cholesky whitening gives an equivalent generalized Ritz pencil and preserves its Rayleigh quotient ([[prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil]]).

[F2] Hermitian matrices have orthonormal eigenbases ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]); the operator norm is the maximum of $\|Av\|_2$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Verification


1.1 The vectors $q_+=(1,1)/\sqrt2$ and $q_-=(1,-1)/\sqrt2$ are orthonormal and satisfy $S_\varepsilon q_+=(2-\varepsilon)q_+$ and $S_\varepsilon q_-=\varepsilon q_-$. Both eigenvalues are positive, and their ratio is $(2-\varepsilon)/\varepsilon$. [F2, given, algebra]

2.1 Let $S_\varepsilon=LL^*$ be its Cholesky factorization. By [F1], $y=L^*c$ preserves the exact generalized eigenvalues and Rayleigh quotient. For any matrix $A$, $\|A\|_2^2=\max_{\|x\|_2=1}x^*A^*Ax$, which equals the largest eigenvalue of the positive Hermitian matrix $A^*A$ by [F2]. Since $(L^{-1})^*L^{-1}=L^{-*}L^{-1}=S_\varepsilon^{-1}$, its eigenvalues are $1/\varepsilon$ and $1/(2-\varepsilon)$, so $\|L^{-1}\|_2=\varepsilon^{-1/2}$. For $A=L^{-*}$, $A^*A=L^{-1}L^{-*}=L^{-1}S_\varepsilon^{-1}L$, which is similar to $S_\varepsilon^{-1}$; hence $\|L^{-*}\|_2=\varepsilon^{-1/2}$ as well. The operator norm is attained on a unit vector in this finite-dimensional space, so a unit perturbation in a maximizing direction is amplified by this factor when converted back to coefficient coordinates. [F1, F2, step 1.1, algebra]

3.1 As $\varepsilon\downarrow0$, the condition number and coordinate amplification diverge, although the exact whitening identities in [F1] continue to hold for each $\varepsilon>0$. This is a conditioning observation; it gives no finite-precision energy-error estimate without a specified perturbation model. [F1, step 1.1, step 2.1, given] ∎

