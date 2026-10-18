---
id: lem-hermitian-sphere-net-controls-operator-norm
kind: lemma
title: A sphere net controls a real or complex Hermitian operator norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 0
deps:
  - lem-epsilon-net-of-unit-sphere-has-cardinality-bound
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.1, Lemma 5"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $d\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$H\in\mathbb K^{d\times d}$ be Hermitian. Regard $\mathbb C^d$ as
$\mathbb R^{2d}$ for distances. A $1/4$-net $\mathcal N$ of the unit
sphere exists with $|\mathcal N|\le9^d$ over $\mathbb R$, and
$|\mathcal N|\le9^{2d}$ over $\mathbb C$. For every such net,
$$
\|H\|_2\le2\max_{v\in\mathcal N}|v^*Hv|.
$$

## Facts & Assumptions

**Given:** A Hermitian $d\times d$ matrix over $\mathbb K$, with $d\ge1$, and the Euclidean operator norm.

[F1] A Hermitian matrix has an orthonormal eigenbasis, real eigenvalues, and its operator norm is the largest absolute eigenvalue ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] The unit sphere in $\mathbb R^q$ has a $1/4$-net of size at most $(1+8)^q=9^q$ ([[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]).

[F3] The inner product satisfies $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$ over both fields ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], choose a unit eigenvector $u$ with eigenvalue $\lambda$ such that $|\lambda|=\|H\|_2$. [F1, choose]

2.1 Apply [F2] in real dimension $q=d$ when $\mathbb K=\mathbb R$, and $q=2d$ when $\mathbb K=\mathbb C$, to obtain the stated net-size bound and a $v\in\mathcal N$ with $\|u-v\|_2\le1/4$. [F2, step 1.1, choose]

3.1 Since $H=H^*$ and $u,v$ are unit vectors, $|u^*Hu-v^*Hv|\le|(u-v)^*Hu|+|v^*H(u-v)|\le2\|u-v\|_2\|H\|_2\le\|H\|_2/2$, using [F3] and the definition of operator norm. Therefore $|v^*Hv|\ge|u^*Hu|-\|H\|_2/2=\|H\|_2/2$, proving the claimed bound. [F1, F3, step 1.1, step 2.1, algebra] ∎
