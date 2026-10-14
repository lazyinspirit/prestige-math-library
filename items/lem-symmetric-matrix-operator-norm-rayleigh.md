---
id: lem-symmetric-matrix-operator-norm-rayleigh
kind: lemma
title: "A symmetric matrix operator norm is its largest absolute Rayleigh quotient"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, Chapter 7"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $A\in\mathbb R^{p\times p}$ be symmetric, where $p\ge1$. Then
$$\|A\|_{\mathrm{op}}=\max_{\|v\|_2=1}|v^{\mathsf T}Av|=\max_j|\lambda_j|,$$
where $\lambda_1,\ldots,\lambda_p$ are the eigenvalues of $A$.

## Facts & Assumptions

**Given:** A symmetric real matrix $A\in\mathbb R^{p\times p}$ with $p\ge1$.

[F1] A symmetric real matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] The operator norm is the maximum of $\|Av\|_2$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Choose an orthonormal eigenbasis $e_1,\ldots,e_p$ with eigenvalues $\lambda_1,\ldots,\lambda_p$ by [F1], and put $M=\max_j|\lambda_j|$. For a unit vector $v=\sum_jc_je_j$, orthonormality gives $\sum_jc_j^2=1$ and $\|Av\|_2^2=\sum_j\lambda_j^2c_j^2\le M^2$. Equality is attained at an eigenvector whose eigenvalue has absolute value $M$. Thus [F2] gives $\|A\|_{\mathrm{op}}=M$. [F1, F2, algebra, choose]

2.1 For the same unit vector, $v^{\mathsf T}Av=\sum_j\lambda_jc_j^2$, so $|v^{\mathsf T}Av|\le\sum_j|\lambda_j|c_j^2\le M$. At an eigenvector with absolute eigenvalue $M$, equality holds. Therefore the largest absolute Rayleigh quotient equals $M=\|A\|_{\mathrm{op}}$. [F1, step 1.1, algebra] ∎
