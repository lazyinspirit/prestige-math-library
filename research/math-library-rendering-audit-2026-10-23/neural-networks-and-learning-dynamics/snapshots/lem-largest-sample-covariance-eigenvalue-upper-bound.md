---
id: lem-largest-sample-covariance-eigenvalue-upper-bound
kind: lemma
title: "Finite-fourth-moment upper bound for the largest sample-covariance eigenvalue"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - cor-first-borel-cantelli-lemma-for-events
  - lem-sample-covariance-spectrum-confinement
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yin, Bai, and Krishnaiah, On the Limit of the Largest Eigenvalue of the Large Dimensional Sample Covariance Matrix, Theorem 3.1"
      url: "https://link.springer.com/content/pdf/10.1007/BF00353874.pdf"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 5, §5.2"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each positive integer $n$, let $p_n$ be a positive integer and let $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$, with $b_\gamma=(1+\sqrt\gamma)^2$, the upper-edge bound is
$$\limsup_{n\to\infty}\lambda_{\max}(S_n)\le b_\gamma\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1 and its high-moment proof in §4, printed pp. 517–520 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Bai and Silverstein, Theorem 5.10, printed pp. 105–112 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

[F1] [[lem-sample-covariance-spectrum-confinement]] gives a sharp norm confinement for the smaller Gram matrix after normalization by the larger rectangular dimension.

[F2] [[thm-singular-value-decomposition]] and [[thm-operator-norm-is-the-largest-singular-value]] identify the largest eigenvalue of either Gram matrix with the squared operator norm; these positive eigenvalues coincide.

## Proof

**Given:** The nested iid array, its upper-left rectangular blocks, and the hypotheses in the Statement.

1.1 Set $N_n=\max(n,p_n)$, $m_n=\min(n,p_n)$, $c_n=N_n/n\to c=\max(1,\gamma)$ and $y_n=m_n/N_n\to y=\min(\gamma,\gamma^{-1})$. Orient $X_n$ or its transpose as $Z_n$ with $m_n$ rows and $N_n$ columns. By F1, almost surely $\limsup\|Z_nZ_n^{\mathsf T}/N_n-(1+y)I\|\le2\sqrt y$. For each unit vector $v$, its quadratic form is at most $1+y$ plus this norm, so $\limsup\lambda_{\max}(Z_nZ_n^{\mathsf T}/N_n)\le(1+\sqrt y)^2$. [given, F1, F2, algebra]

2.1 By F2, $\lambda_{\max}(S_n)=c_n\lambda_{\max}(Z_nZ_n^{\mathsf T}/N_n)$. The previous bound gives $\limsup\lambda_{\max}(S_n)\le c(1+\sqrt y)^2$. If $\gamma\le1$ this constant is $(1+\sqrt\gamma)^2$; if $\gamma\ge1$ it is $\gamma(1+\gamma^{-1/2})^2=(1+\sqrt\gamma)^2$. The same identity holds at $\gamma=1$, even if the orientation changes infinitely often. [F2, step 1.1, algebra] ∎
