---
id: cex-full-lsqr-can-amplify-data-noise
kind: counterexample
title: A fully converged LSQR solve can amplify a small singular-direction error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-golub-kahan-lsqr-with-givens-and-status
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-euclidean-inner-product
  - def-natural-numbers
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pending
---

## Statement refuted

There is a constant independent of the matrix such that continuing the LSQR
projected solves to zero residual always gives an estimate within that
constant times the data-noise level of the exact solution.

## Concrete instance

For each integer $N\ge2$, let
$A_N=\operatorname{diag}(1,N^{-2})$, exact solution $x^\dagger=0$, exact
datum $y=0$, and noisy datum $y^\delta=(0,N^{-1})^T$. The noise level is
$\delta_N=N^{-1}\to0$. The un-stopped projected LSQR solve takes one
Golub–Kahan step and returns $x_1^\delta=(0,N)^T$ with zero residual. Thus
the error is $N$, which is not bounded by a fixed multiple of $\delta_N$.
With the assigned discrepancy-stopped procedure and zero initial guess, the
initial residual already satisfies $\|r_0\|=\delta_N\le\tau\delta_N$;
the procedure returns at index zero. The example concerns continuing to a
full solve and shows why early stopping matters.

## Facts & Assumptions

**Given:** The diagonal matrix, exact and noisy data, and zero initial guess.

[F1] [[alg-golub-kahan-lsqr-with-givens-and-status]]: The un-stopped version
uses the stated LSQR initialization and first projected solve; the assigned
procedure itself may return earlier at its discrepancy check.

[F2] [[def-matrix-product-and-identity-matrix]]: Matrix-vector multiplication is the coordinate sum of each row against the vector.

[F3] [[def-transpose-of-a-matrix]]: $(A^T)_{ji}=a_{ij}$.

[F4] [[def-euclidean-inner-product]]: $\|u\|_2=(u^Tu)^{1/2}$ on real coordinate vectors.

[F5] [[def-natural-numbers]]: The iteration dimension parameter $N$ is a natural number with $N\ge2$.

[F6] [[def-matrix-space]]: $A_N$ is a real $2\times2$ matrix and acts on real coordinate vectors by matrix multiplication.

## Refutation

1.1 For $A_N$ and $y^\delta$, $r_0=(0,N^{-1})^T$, so $\beta_1=N^{-1}$, $u_1=(0,1)^T$, $\alpha_1=N^{-2}$, and $v_1=(0,1)^T$. The first bidiagonalization residual is $A_Nv_1-\alpha_1u_1=0$, so $\beta_2=0$ and the one-dimensional projected least-squares problem is exact. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 Its scalar matrix is $B_1=(N^{-2})$ and right-hand side is $\beta_1e_1=N^{-1}e_1$, so the unique minimizer is $z_1=N$. Consequently $x_1^\delta=x_0+Nv_1=(0,N)^T$, $A_Nx_1^\delta=y^\delta$, and $\|x_1^\delta-x^\dagger\|_2=N$. The noise is $\|y^\delta-y\|_2=N^{-1}$, so the error-to-noise ratio is $N^2\to\infty$. This refutes the proposed uniform bound and shows that the projected solve can fit a small noise component in a weak singular direction. The terminal $\beta_2=0$ is the algorithm's breakdown branch after the projected iterate has been formed, so this calculation does not invoke a nonbreakdown theorem. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎