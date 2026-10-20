---
id: thm-bai-yin-smallest-singular-value-limits
kind: theorem
title: "Bai–Yin lower singular-value limits and full rank away from aspect one"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - cor-rank-equals-number-of-nonzero-singular-values
  - lem-sample-covariance-spectrum-confinement
  - lem-nonbacktracking-covariance-high-moment-bound
  - lem-fixed-degree-covariance-trace-and-edge-witnesses
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Yin, Limit of the Smallest Eigenvalue of a Large-Dimensional Sample Covariance Matrix, Theorem 1"
      url: "https://doi.org/10.1214/aop/1176989118"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Theorem 5.11"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each $n$, let $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to\gamma\in(0,\infty)$. Let $s_{r_n}(X_n)$ be the smallest among the $r_n:=\min(n,p_n)$ singular values, counting zero values. Then, almost surely: if $\gamma<1$, $s_{r_n}(X_n)/\sqrt n\to1-\sqrt\gamma$, so $X_n$ has full column rank for all sufficiently large $n$; if $\gamma>1$, $s_{r_n}(X_n)/\sqrt n\to\sqrt\gamma-1$, so $X_n$ has full row rank for all sufficiently large $n$; and if $\gamma=1$, the smallest positive singular value is eventually defined and, divided by $\sqrt n$, tends to zero.

## Statement references

Bai and Yin, Theorem 1, official publication record; the complete paper was not retrieved ([publication record](https://doi.org/10.1214/aop/1176989118)).

Bai and Silverstein, Theorem 5.11, printed pp. 112–113 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

[F1] [[lem-sample-covariance-spectrum-confinement]] supplies the nonbacktracking finite-fourth-moment confinement of the smaller Gram matrix.

[F2] [[lem-nonbacktracking-covariance-high-moment-bound]] supplies the independent coarse norm bound needed by [[lem-fixed-degree-covariance-trace-and-edge-witnesses]]. The latter proves $\limsup\lambda_{\min}^{+}(X_nX_n^{\mathsf T}/n)\le(1-\sqrt\gamma)^2$ and eventual existence of positive eigenvalues using fixed polynomial witnesses.

[F3] [[thm-singular-value-decomposition]] identifies the eigenvalues of the smaller Gram matrix with the squares of all $r_n=\min(n,p_n)$ singular values, including zeros; [[cor-rank-equals-number-of-nonzero-singular-values]] identifies full rectangular rank with positivity of all these values.

## Proof

**Given:** The nested iid array, its upper-left blocks, and the hypotheses in the Statement.

1.1 Write $N_n=\max(n,p_n)$, $r_n=\min(n,p_n)$, $c_n=N_n/n\to c=\max(1,\gamma)$ and $y_n=r_n/N_n\to y:=\min(\gamma,\gamma^{-1})$. Orient $X_n$ as $Z_n$ with $r_n$ rows. F1 and the quadratic-form lower bound give $\liminf\lambda_{\min}(Z_nZ_n^{\mathsf T}/N_n)\ge(1-\sqrt y)^2$ almost surely. By F3, $s_{r_n}(X_n)^2/n=c_n\lambda_{\min}(Z_nZ_n^{\mathsf T}/N_n)$, so its liminf is at least $c(1-\sqrt y)^2=(1-\sqrt\gamma)^2$. [given, F1, F3, algebra]

2.1 If $\gamma\ne1$, this last constant is positive. Thus all $r_n$ singular values are positive eventually, and F3 gives eventual full column rank when $\gamma<1$ and full row rank when $\gamma>1$. The smallest positive eigenvalue of $X_nX_n^{\mathsf T}/n$ then equals $s_{r_n}(X_n)^2/n$. Its limsup is at most $(1-\sqrt\gamma)^2$ by F2; combined with step 1.1 this proves convergence of that squared singular value. Taking the nonnegative square root gives respectively $1-\sqrt\gamma$ and $\sqrt\gamma-1$. [F2, F3, step 1.1, algebra]

3.1 If $\gamma=1$, F2 supplies positive eigenvalues eventually and a smallest positive eigenvalue with limsup at most zero. Nonnegativity makes its limit zero. F3 transfers this to the square of the smallest positive singular value divided by $n$, and the nonnegative square root tends to zero. No claim of eventual full rank at aspect one is needed. The argument for either endpoint uses confinement and independent trace witnesses, not MP weak convergence. [F2, F3, algebra, step 2.1] ∎
