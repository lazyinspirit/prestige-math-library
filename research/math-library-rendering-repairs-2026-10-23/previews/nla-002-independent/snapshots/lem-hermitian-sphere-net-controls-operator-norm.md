---
id: lem-hermitian-sphere-net-controls-operator-norm
kind: lemma
title: A sphere net controls a real or complex Hermitian operator norm
status: published
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
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.1, Lemma 5"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics:
        Lecture Notes, Chapter 1, Lemma 1.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

[F1] A complex Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]), and the operator norm is the maximum of $\|Hv\|_2$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] The unit sphere in $\mathbb R^q$ has a $1/4$-net of size at most $(1+8)^q=9^q$ ([[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]).

[F3] The inner product satisfies $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$ over both fields ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 Regard $H$ as a complex Hermitian matrix when $\mathbb K=\mathbb R$. By [F1], it has an orthonormal eigenbasis over $\mathbb C$; every eigenvalue is real because $Hv=\lambda v$ and $H=H^*$ give $\lambda\|v\|_2^2=v^*Hv=\overline{v^*Hv}=\overline\lambda\|v\|_2^2$. Choose a unit eigenvector $z$ for an eigenvalue $\lambda$ of largest absolute value. The diagonalization shows $\|H\|_2=|\lambda|$ over $\mathbb C$. If $\mathbb K=\mathbb C$, set $u=z$. If $\mathbb K=\mathbb R$, write $z=a+ib$; since $H$ and $\lambda$ are real, $Ha=\lambda a$ and $Hb=\lambda b$, and at least one of $a,b$ is nonzero. Normalize a nonzero part as $u$. The same diagonalization bounds the real operator norm by $|\lambda|$, while $u$ attains that bound, so $|u^*Hu|=|\lambda|=\|H\|_2$ over either field. [F1, choose, algebra]

2.1 Apply [F2] in real dimension $q=d$ when $\mathbb K=\mathbb R$, and $q=2d$ when $\mathbb K=\mathbb C$, to obtain the stated net-size bound and a $v\in\mathcal N$ with $\|u-v\|_2\le1/4$. [F2, step 1.1, choose]

3.1 Since $H=H^*$ and $u,v$ are unit vectors, $|u^*Hu-v^*Hv|\le|(u-v)^*Hu|+|v^*H(u-v)|\le2\|u-v\|_2\|H\|_2\le\|H\|_2/2$, using [F3] and the definition of operator norm. Therefore $|v^*Hv|\ge|u^*Hu|-\|H\|_2/2=\|H\|_2/2$, proving the claimed bound. [F1, F3, step 1.1, step 2.1, algebra] ∎
