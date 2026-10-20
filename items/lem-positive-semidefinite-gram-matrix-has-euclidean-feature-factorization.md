---
id: lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization
kind: lemma
title: A finite positive semidefinite kernel Gram matrix has a Euclidean feature factorization
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §7B, Real Spectral Theorem'
      url: 'https://linear.axler.net/LADR4e.pdf'
      locator: 'Theorem 7.29, printed pp. 244–245; apply to a real symmetric Gram matrix.'
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.3.1, printed pp. 423–424, for finite kernel inner-product representations.'
---

## Statement

Let $k$ be a real positive semidefinite kernel on a set $X$, let $n\ge1$, and let $x_1,\ldots,x_n\in X$. There are vectors $z_1,\ldots,z_n\in\mathbb R^n$ such that $k(x_i,x_j)=z_i^Tz_j$ for every $1\le i,j\le n$. The vectors may be zero and need not be linearly independent.

## Statement references

[Sheldon Axler, *Linear Algebra Done Right*, 4th ed., §7B, Theorem 7.29](https://linear.axler.net/LADR4e.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §12.3.1](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

## Facts & Assumptions

**Given:** A real positive semidefinite kernel $k$, an integer $n\ge1$, and points $x_1,\ldots,x_n\in X$.

[A1] The Gram matrix $K=(k(x_i,x_j))_{i,j=1}^n$ is real symmetric and satisfies $c^TKc\ge0$ for every $c\in\mathbb R^n$ ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

[F1] Every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof




1.1 Regard $K$ as an endomorphism of $\mathbb R^n$ with its usual dot product. By [A1], $K$ is symmetric, hence self-adjoint. By [F1], there are an orthonormal eigenbasis $q_1,\ldots,q_n$ and real eigenvalues $\lambda_1,\ldots,\lambda_n$ with $Kq_\ell=\lambda_\ell q_\ell$. [given, A1, F1, construct]


2.1 Since $\|q_\ell\|_2=1$, [A1] gives $\lambda_\ell=q_\ell^TKq_\ell\ge0$ for each $\ell$. Thus each $\sqrt{\lambda_\ell}$ is a real number, including when $\lambda_\ell=0$. [step 1.1, A1]


3.1 For $1\le i\le n$, define $z_i=(\sqrt{\lambda_1}(q_1)_i,\ldots,\sqrt{\lambda_n}(q_n)_i)\in\mathbb R^n$. The spectral decomposition $K=\sum_{\ell=1}^n\lambda_\ell q_\ell q_\ell^T$ then gives $z_i^Tz_j=\sum_{\ell=1}^n\lambda_\ell(q_\ell)_i(q_\ell)_j=K_{ij}=k(x_i,x_j)$ for all $i,j$. [step 1.1, step 2.1, construct, algebra] ∎

