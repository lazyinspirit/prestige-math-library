---
id: lem-positive-noise-regularizes-observed-covariance
kind: lemma
title: Positive Gaussian observation noise makes the observed covariance positive definite
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 0
proof_strategy: direct
deps: [def-cholesky-factorisation-with-positive-diagonal]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2"
      url: "https://gaussianprocess.org/gpml/chapters/RW2.pdf"
    - title: "Niranjan Srinivas et al., Gaussian Process Optimization in the Bandit Setting, §2"
      url: "https://arxiv.org/pdf/0912.3995"
---

## Statement

Let $n\ge1$, let $K\in\mathbb R^{n\times n}$ be symmetric positive semidefinite, let $\sigma^2\ge0$, and put $C=K+\sigma^2I$. If $\sigma^2>0$, then $C$ is symmetric positive definite, even when $K$ is singular. If $\sigma^2=0$, then $C$ is positive definite exactly when $K$ is positive definite; zero noise is not guaranteed to make the solve available.

## Facts & Assumptions

**Given:** A symmetric matrix $K$ with $v^TKv\ge0$ for all $v\in\mathbb R^n$, and a real $\sigma^2\ge0$.

[F1] A real matrix is positive definite when it is symmetric and $v^TAv>0$ for every nonzero $v$, as in [[def-cholesky-factorisation-with-positive-diagonal]].

## Proof

1.1 The matrix $C$ is symmetric because $K$ and $I$ are symmetric. For every nonzero $v$, $v^TCv=v^TKv+\sigma^2\|v\|_2^2$. If $\sigma^2>0$, the first term is nonnegative and the second is strictly positive, so $v^TCv>0$; hence $C$ is positive definite by [F1]. [given, F1, algebra]

2.1 If $\sigma^2=0$, then $C=K$, so $C$ is positive definite if and only if $K$ is. This permits zero-noise solves exactly in the positive-definite observed-Gram cases and makes no pseudoinverse assertion in the singular cases. [given, F1, algebra] ∎

