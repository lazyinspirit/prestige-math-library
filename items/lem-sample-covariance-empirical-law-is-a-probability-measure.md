---
id: lem-sample-covariance-empirical-law-is-a-probability-measure
kind: lemma
title: "The empirical spectral distribution of a sample covariance matrix is a probability measure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - lem-finite-empirical-measure-is-a-probability-law
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For positive integers $n,p$ and a real matrix $X\in\mathbb R^{n\times p}$, set $S(X)=X^{\mathsf T}X/n$ and $\mu_{S(X)}=p^{-1}\sum_{j=1}^p\delta_{\lambda_j(S(X))}$, where the eigenvalues are counted with multiplicity. Then $\mu_{S(X)}$ is a Borel probability measure on $\mathbb R$, supported on $[0,\infty)$.

## Statement references

Bai and Silverstein, Chapter 3, §3.1, printed pp. 39–40 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** Positive integers $n,p$ and $X\in\mathbb R^{n\times p}$.

[F1] [[def-sample-covariance-empirical-spectral-distribution]] defines $S(X)=X^{\mathsf T}X/n$ and $\mu_{S(X)}=p^{-1}\sum_{j=1}^p\delta_{\lambda_j(S(X))}$.

[F2] A real symmetric matrix has a real orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F3] For every finite list of points of a measurable space, the equally weighted sum of their Dirac measures is a probability measure ([[lem-finite-empirical-measure-is-a-probability-law]]).

## Proof

1.1 The matrix $S(X)$ is symmetric because $(X^{\mathsf T}X)^{\mathsf T}=X^{\mathsf T}X$. For every $v\in\mathbb R^p$, $$v^{\mathsf T}S(X)v=\frac1n\|Xv\|_2^2\ge0.$$ By [F2], its eigenvalues are real; if $S(X)v=\lambda v$ with $v\ne0$, the displayed quadratic-form identity gives $\lambda\|v\|_2^2\ge0$, hence $\lambda\ge0$. [given, F1, F2, algebra]

2.1 Apply [F3] to the finite list $\lambda_1(S(X)),\ldots,\lambda_p(S(X))$ in the Borel space $\mathbb R$. The resulting empirical measure is exactly [F1] and is a Borel probability measure. Step 1.1 shows it assigns no mass outside $[0,\infty)$. [F1, F3, step 1.1] ∎ 