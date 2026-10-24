---
id: lem-qa-17-reversible-transition-self-adjoint-on-l2-pi
kind: lemma
title: "A finite reversible transition operator is self-adjoint on weighted L2"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-17-finite-reversible-chain
  - def-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-self-adjoint-and-normal-endomorphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For a finite reversible chain $(X,P,\pi)$, equip $\mathbb C^X$ with $\langle f,g\rangle_\pi:=\sum_x\pi_x f_x\overline{g_x}$. Then $P$ is self-adjoint for this inner product, and the mean-zero subspace

$$H_0:=\{f:\sum_x\pi_xf_x=0\}=\{f:\langle f,\mathbf 1\rangle_\pi=0\}$$

is invariant under $P$. The restriction $P|_{H_0}$ is therefore a well-defined endomorphism and is self-adjoint for the restricted inner product.

## Facts & Assumptions

**Given:** A finite set $X$, a row-stochastic $P$, and a strictly positive stationary probability vector $\pi$ satisfying detailed balance $\pi_xP_{xy}=\pi_yP_{yx}$.

[F1] [[def-qa-17-finite-reversible-chain]]: $\pi_x>0$, $\pi P=\pi$, and $\pi_xP_{xy}=\pi_yP_{yx}$ for every $x,y$.

[F2] [[def-inner-product-space]]: the inner product is linear in the first argument, conjugate-linear in the second, conjugate-symmetric, and positive definite.

[F3] [[def-self-adjoint-and-normal-endomorphism]]: an endomorphism is self-adjoint when it equals its adjoint.

## Proof

1.1 Positivity of every $\pi_x$ makes $\langle f,f\rangle_\pi=\sum_x\pi_x|f_x|^2$ nonnegative and zero only when $f=0$; the finite weighted sum is sesquilinear and conjugate-symmetric, so it is an inner product. [F1, F2, algebra]

2.1 For arbitrary $f,g$, expand and use detailed balance: $\langle Pf,g\rangle_\pi=\sum_{x,y}\pi_xP_{xy}f_y\overline{g_x}=\sum_{x,y}\pi_yP_{yx}f_y\overline{g_x}=\sum_y\pi_yf_y\overline{(Pg)_y}=\langle f,Pg\rangle_\pi$. Thus $P$ is self-adjoint. [F1, F3, step 1.1, algebra]

3.1 Stationarity gives $\sum_x\pi_x(Pf)_x=\sum_y(\sum_x\pi_xP_{xy})f_y=\sum_y\pi_yf_y$. Hence a mean-zero $f$ has mean-zero image, so $H_0$ is invariant; restricting the identity in step 2.1 to $H_0$ proves the restriction is self-adjoint. [F1, step 2.1, algebra] ∎
