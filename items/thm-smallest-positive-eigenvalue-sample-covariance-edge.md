---
id: thm-smallest-positive-eigenvalue-sample-covariance-edge
kind: theorem
title: "Almost-sure limit and structural-zero count at the lower sample-covariance edge"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-bai-yin-smallest-singular-value-limits
  - thm-singular-value-decomposition
  - cor-rank-equals-number-of-nonzero-singular-values
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-identically-distributed-and-iid-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Yin, Limit of the Smallest Eigenvalue of a Large-Dimensional Sample Covariance Matrix, official publication record"
      url: "https://doi.org/10.1214/aop/1176989118"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Theorem 5.11"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each positive integer $n$, let $p_n$ be a positive integer and let $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to\gamma\in(0,\infty)$. Set $S_n=X_n^{\mathsf T}X_n/n$ and let $\lambda_{\min}^{+}(S_n)$ denote its smallest positive eigenvalue whenever one exists. If $\gamma<1$, then almost surely $X_n$ has full column rank for all sufficiently large $n$, so $S_n$ has no zero eigenvalues eventually and $\lambda_{\min}(S_n)\to(1-\sqrt\gamma)^2$. If $\gamma>1$, then almost surely $X_n$ has full row rank for all sufficiently large $n$, so $S_n$ has exactly $p_n-n$ zero eigenvalues and $\lambda_{\min}^{+}(S_n)\to(\sqrt\gamma-1)^2$. If $\gamma=1$, then almost surely $\lambda_{\min}^{+}(S_n)\to0$.

## Statement references

Bai and Yin, Theorem 1, official publication record; the full paper was not retrievable ([publication record](https://doi.org/10.1214/aop/1176989118)).

Bai and Silverstein, Theorem 5.11, printed p. 106 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

[F1] [[thm-bai-yin-smallest-singular-value-limits]] supplies the lower singular-value limits, eventual full rectangular rank when $\gamma\ne1$, and the eventually defined closing positive edge when $\gamma=1$.

[F2] [[thm-singular-value-decomposition]] and [[cor-rank-equals-number-of-nonzero-singular-values]] identify positive covariance eigenvalues with squared positive singular values divided by $n$ and their number with the rank. The zero multiplicity is therefore $p_n-\operatorname{rank}X_n$ by [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

## Proof

**Given:** The nested iid array and hypotheses in the Statement.

1.1 When $\gamma<1$, F1 gives full column rank eventually. Thus F2 gives no covariance zero eigenvalues eventually, and the least eigenvalue is $s_{p_n}(X_n)^2/n\to(1-\sqrt\gamma)^2$. [given, F1, F2, algebra]

2.1 When $\gamma>1$, F1 gives full row rank eventually. Then F2 gives exactly $p_n-n$ zero eigenvalues and identifies the smallest positive eigenvalue with $s_n(X_n)^2/n\to(\sqrt\gamma-1)^2$. [F1, F2, algebra, step 1.1]

3.1 When $\gamma=1$, F1 gives an eventually defined smallest positive singular value whose ratio to $\sqrt n$ tends to zero. F2 squares this ratio to obtain $\lambda_{\min}^{+}(S_n)\to0$. Intersecting the relevant probability-one supplier events proves every asserted almost-sure conclusion. [F1, F2, algebra, step 2.1] ∎
