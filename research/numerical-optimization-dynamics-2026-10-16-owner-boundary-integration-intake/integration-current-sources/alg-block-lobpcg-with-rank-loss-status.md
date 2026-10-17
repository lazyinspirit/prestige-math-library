---
id: alg-block-lobpcg-with-rank-loss-status
kind: algorithm
title: "Finite-budget block LOBPCG for a Hermitian-definite pencil with explicit rank-loss status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §13.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "Andrew Knyazev, Recent implementations, applications, and extensions of LOBPCG, §1"
      url: "https://arxiv.org/pdf/1708.08354"
---

## Definition

Let $A=A^*\in\mathbb C^{n\times n}$, let $B=B^*>0$, and let
$T=T^*>0$ be a fixed preconditioning operator. Here $B>0$ and $T>0$ mean
$x^*Bx>0$ and $x^*Tx>0$ for every nonzero $x$. The $B$-inner product and
norm are those of [[def-b-inner-product-and-dual-norm-for-definite-pencil]].
Choose a block width $1\le q\le n$, a residual tolerance $\tau\ge0$, a finite
iteration budget $N_{\max}\ge0$, and an initial matrix $X_0$ with
$X_0^*BX_0=I_q$. The output is a block of Ritz pairs and one of
`converged`, `budget-exhausted`, `rank-loss`, or `invalid-initial-block`.

1. If $X_0$ does not have full column rank or does not satisfy
   $X_0^*BX_0=I_q$, return `invalid-initial-block`. Compute the Rayleigh-Ritz eigenpairs in
   $\operatorname{range}(X_0)$, sorted increasingly, and let $\Theta_0$ be the
   diagonal matrix of the $q$ Ritz values. Set the previous search block
   $D_0$ empty and initialize the iteration counter $k=0$.

2. At iteration $k$, form the original residual block
   $R_k=AX_k-BX_k\Theta_k$. If every column has Euclidean norm at most
   $\tau$, return `converged`. If $k=N_{\max}$, return
   `budget-exhausted` with $(\Theta_k,X_k)$.

3. Compute the preconditioned residual block $W_k=TR_k$ and set
   $Y_k=[X_k,W_k,D_k]$, omitting the empty block at $k=0$. Compute an exact
   rank-revealing $B$-QR with column pivoting as follows. Starting with no
   columns in $Q_k$, for each remaining column $y_j$ of $Y_k$ compute its
   residual $c_j=y_j-Q_k(Q_k^*By_j)$ and choose a column with largest
   $B$-norm $\|c_j\|_B$ (break ties by original column order). If the largest
   residual norm is zero, stop; otherwise append the normalized residual to
   $Q_k$ and remove that pivot column. Let $s_k$ be the number of columns
   appended and let $\Pi_k$ record the pivot order followed by the unused
   columns. If $s_k<q$, return `rank-loss` with the current Ritz pairs; no
   projected solve is attempted on that branch. Otherwise set
   $$S_k=Q_k^*BY_k\Pi_k(:,1:s_k).$$
   The pivot construction gives
   $$Y_k\Pi_k(:,1:s_k)=Q_kS_k,\qquad Q_k^*BQ_k=I_{s_k},$$
   and $S_k$ is invertible because its selected columns are independent.
   Dependent trial columns are discarded and their count is recorded as a
   rank-compression diagnostic.

4. The projected matrix $Q_k^*AQ_k$ is Hermitian, hence normal, so its
   orthonormal eigenbasis and real eigenvalues are supplied by
   [[thm-complex-spectral-theorem-for-normal-endomorphisms]]. Solve
   $Q_k^*AQ_kZ_k=Z_k\Theta_{k+1}$ and choose its $q$ smallest eigenvalues. Set
   $C_k=\Pi_k(:,1:s_k)S_k^{-1}Z_k$; then $Y_kC_k=Q_kZ_k$. Partition
   $C_k=\begin{bmatrix}C_X\\C_W\\C_D\end{bmatrix}$, omitting the $C_D$
   block when $D_k$ is empty. The projected metric is positive definite
   because for nonzero $z$, $(Q_kz)^*B(Q_kz)=\|z\|_2^2>0$. Set
   $$X_{k+1}=X_kC_X+W_kC_W+D_kC_D,\qquad D_{k+1}=W_kC_W+D_kC_D,$$
   again omitting the empty-block term. Let $\Theta_{k+1}$ be the selected
   diagonal Ritz-value matrix and increment $k$.

5. Repeat from step 2. No convergence, rate, or accuracy is asserted when the
   budget or rank-loss branch is returned. The exact SPD conditions on $B$ and
   $T$ define the permitted metric and preconditioner; no particular
   incomplete-factorization procedure is assumed.
