---
id: lem-randomized-rangefinder-deterministic-svd-partition-error
kind: lemma
title: Deterministic SVD-partition error bound for the range finder
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-gaussian-randomized-range-finder, thm-singular-value-decomposition, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Theorem 9.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Theorem 11.4"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $A\in F^{m\times n}$, $k\ge1$, and $k<\ell\le\min(m,n)$. Partition an
$n\times\ell$ matrix $\Omega$ in right-singular-vector coordinates as
$V^*\Omega=[\Omega_1^T\ \Omega_2^T]^T$, where $\Omega_1\in F^{k\times\ell}$
has full row rank. If $Q$ is any orthonormal basis of $\operatorname{Ran}(A\Omega)$,
then
$$\|(I-QQ^*)A\|_2\le\sigma_{k+1}+\|\Sigma_2\Omega_2\Omega_1^\dagger\|_2,$$
where $A=U\Sigma V^*$ is an SVD, $\Sigma_2$ is the trailing block, and
$\sigma_{k+1}=0$ when fewer than $k+1$ singular values are positive. No
inverse of the leading singular-value block is used, so this includes
$\operatorname{rank}(A)<k$.

## Facts & Assumptions

**Given:** A finite real or complex matrix, $k<\ell\le\min(m,n)$, a sketch whose top block has full row rank, and an orthonormal basis of its range.

[F1] Every finite-dimensional real or complex linear map has an SVD with ordered singular values ([[thm-singular-value-decomposition]]).

[F2] The range-finder forms $Y=A\Omega$ and returns an orthonormal basis $Q$ of $\operatorname{Ran}(Y)$ ([[alg-gaussian-randomized-range-finder]]).

[F3] The operator norm is the maximum of $\|Tx\|$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]); unitary invariance follows directly because unitary maps preserve unit vectors.

[F4] The operator norm equals the largest singular value ([[thm-operator-norm-is-the-largest-singular-value]]).

## Proof

1.1 Choose the SVD from [F1] and set $\widetilde\Omega=V^*\Omega=[\Omega_1^T\ \Omega_2^T]^T$. Left multiplication by $U^*$ carries the sample range to $\operatorname{Ran}(\Sigma\widetilde\Omega)$, preserves the operator norm because it maps unit vectors bijectively to unit vectors by [F3], and carries $QQ^*$ to the orthogonal projector $P$ onto that range. It suffices to prove the estimate for $\Sigma$. [F1, F2, F3, choose]

2.1 Since $\Omega_1$ has full row rank, put $\Omega_1^\dagger=\Omega_1^*(\Omega_1\Omega_1^*)^{-1}$, so $\Omega_1\Omega_1^\dagger=I_k$. Let $Y=\Sigma[\Omega_1^T\ \Omega_2^T]^T$ and $C=Y\Omega_1^\dagger[I_k\ 0]$. The range of $C$ lies in $\operatorname{Ran}(Y)$, hence $(I-P)C=0$. [step 1.1, given, algebra]

3.1 The first $k$ rows of $\Sigma-C$ vanish because $\Omega_1\Omega_1^\dagger=I_k$, and the remaining rows form $[-\Sigma_2\Omega_2\Omega_1^\dagger\ \ \Sigma_2]$. Thus $\|(I-P)\Sigma\|_2=\|(I-P)(\Sigma-C)\|_2\le\|\Sigma-C\|_2\le\|\Sigma_2\Omega_2\Omega_1^\dagger\|_2+\|\Sigma_2\|_2$: the horizontal block is a sum of two zero-padded blocks, so the triangle inequality applies. By [F1] and [F4], $\|\Sigma_2\|_2=\sigma_{k+1}$, including zero-tail and rank-deficient cases. [step 2.1, F1, F3, F4, algebra] ∎
