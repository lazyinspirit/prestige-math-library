---
id: lem-qc-positive-choi-matrix-yields-kraus-operators
kind: lemma
title: "A positive Choi matrix yields finite Kraus operators"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-dimension, def-coordinate-column-and-matrix-of-a-linear-map, def-matrix-product-and-identity-matrix, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, def-qc-choi-matrix, def-qc-kraus-representation, lem-qc-tensor-product-basis-and-dimension, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique]
justified_by: []
proof_strategy: direct
dependency_level: 4
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.3.1–3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, let
$\mathcal B=(e_i)_{i<n}$ be an ordered orthonormal basis of $H$, and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be complex-linear. If
$J_{\mathcal B}(\Phi)$ is non-negative, then $\Phi$ has a finite Kraus
representation with at most $\dim(H)\dim(K)$ operators.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, an ordered
orthonormal basis $\mathcal B=(e_i)_{i<n}$ of $H$, a complex-linear map
$\Phi:\mathcal L(H)\to\mathcal L(K)$, and $J_{\mathcal B}(\Phi)\succeq0$.

[F1] [[thm-non-negative-operator-characterisations]]: a non-negative
finite-dimensional operator has an orthonormal eigenbasis with non-negative
real eigenvalues.

[F2] [[thm-non-negative-square-root-exists-and-is-unique]]: a non-negative
finite-dimensional operator has a non-negative square root $S$ with $S^2=J$.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
finite-dimensional $H$ and $K$ admit ordered orthonormal bases, including
empty bases when a space is zero.

[F4] [[def-coordinate-column-and-matrix-of-a-linear-map]]: a linear map is
determined by its coordinate columns on an ordered basis.

[F5] [[def-matrix-product-and-identity-matrix]]: matrix products are
row-by-column finite sums, including zero-sized shapes.

[F6] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in
orthonormal bases, the matrix of an adjoint is the conjugate transpose.

[F7] [[lem-qc-tensor-product-basis-and-dimension]]: the product basis
$(e_i\otimes f_\alpha)_{i<n,\alpha<m}$ is orthonormal and has size $nm$,
including zero-dimensional factors.

[L1] [[def-qc-choi-matrix]] (same-page definition): in the input-first product
basis, $J_{\mathcal B}(\Phi)=\sum_{i,j<n}E_{ij}\otimes\Phi(E_{ij})$.

[L2] [[def-qc-kraus-representation]] (same-page definition): a Kraus
representation is a finite family of maps $K_a:H\to K$ with
$\Phi(X)=\sum_aK_aXK_a^\dagger$ for every $X$.

## Proof


1.1 If $\dim H=0$ or $\dim K=0$, the input or output operator space is zero, so $\Phi=0$ and the empty family is a Kraus representation. Assume both dimensions are positive and choose an ordered orthonormal basis $(f_\alpha)_{\alpha<m}$ of $K$ by [F3]. If $J_{\mathcal B}(\Phi)=0$, its $(i,\alpha),(j,\beta)$ product-basis entry is the $(\alpha,\beta)$ entry of $\Phi(E_{ij})$ by [L1], so every $\Phi(E_{ij})=0$. For each $X\in\mathcal L(H)$, the finite sum $\sum_{i,j<n}x_{ij}E_{ij}$ whose coordinate entries are those of $X$ agrees with $X$ on each $e_j$; [F4] therefore makes it equal to $X$. Thus $\Phi=0$ and the empty family works also in this case. [given, F3, F4, F5, F7, L1, algebra, choose]

1.2 Suppose $J_{\mathcal B}(\Phi)\ne0$. Let $S=J_{\mathcal B}(\Phi)^{1/2}$ be its non-negative square root from [F2]. By [F1], choose an orthonormal eigenbasis $(v_a)_{a<nm}$ of $S$ with eigenvalues $s_a\ge0$. Then $J_{\mathcal B}(\Phi)=S^2=\sum_{a:s_a>0}s_a^2v_av_a^\dagger$. For each $a$ with $s_a>0$, put $w_a=s_av_a$ and write $w_a=\sum_{i<n,\alpha<m}w_{a,i\alpha}e_i\otimes f_\alpha$. Define the linear map $K_a:H\to K$ on the basis by $K_ae_i=\sum_{\alpha<m}w_{a,i\alpha}f_\alpha$. [given, F1, F2, F3, F7, choose, construct]

2.1 For every $i,j<n$ and $\alpha,\beta<m$, the $(i,\alpha),(j,\beta)$ entry of [L1] is $\sum_{a:s_a>0}w_{a,i\alpha}\overline{w_{a,j\beta}}$. The $(\alpha,\beta)$ entry of $\sum_aK_aE_{ij}K_a^\dagger$ is $\sum_a(K_a)_{\alpha i}\overline{(K_a)_{\beta j}}$, which is the same sum because $(K_a)_{\alpha i}=w_{a,i\alpha}$ by construction and [F6] gives the conjugate-transpose matrix of $K_a^\dagger$. Therefore $\Phi(E_{ij})=\sum_aK_aE_{ij}K_a^\dagger$ for every matrix unit. [F4, F5, F6, L1, step 1.2, algebra]

3.1 Every $X\in\mathcal L(H)$ is the finite coordinate combination $\sum_{i,j<n}x_{ij}E_{ij}$ established in step 1.1. By linearity, step 2.1 therefore gives $\Phi(X)=\sum_aK_aXK_a^\dagger$ for every $X$. There are at most $nm=\dim(H)\dim(K)$ retained operators because the eigenbasis of $S$ has $nm$ elements; when $J=0$ the empty family was handled in step 1.1. This is a finite Kraus representation by [L2]. [step 1.1, step 2.1, F4, F7, L2, algebra] ∎

