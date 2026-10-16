---
id: lem-qc-complete-positivity-implies-choi-positivity
kind: lemma
title: "Complete positivity implies Choi positivity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-dimension, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, prop-adjoint-algebra, def-non-negative-and-positive-operator, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, prop-standard-coordinate-inner-products, def-qc-completely-positive-map, def-qc-choi-matrix, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-qc-tensor-map, lem-qc-tensor-product-basis-and-dimension, lem-qc-linear-isometry-adjoint-identities]
justified_by: []
proof_strategy: direct
dependency_level: 5
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.6 and 3.3.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, fix an
ordered orthonormal basis $\mathcal B$ of $H$, and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be completely positive. Then
$J_{\mathcal B}(\Phi)$ is non-negative.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, an ordered
orthonormal basis $\mathcal B=(e_i)_{i<n}$ of $H$, and a completely positive
linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$.

[F1] [[def-non-negative-and-positive-operator]]: an endomorphism is
non-negative when it is self-adjoint and its quadratic form is non-negative.

[F2] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
each finite-dimensional inner-product space has an ordered orthonormal basis,
including the empty basis in dimension zero.

[F3] [[def-dimension]]: a space of dimension zero is the zero space.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and
[[prop-adjoint-algebra]]: adjoints satisfy their defining pairing identity,
$ (ST)^\dagger=T^\dagger S^\dagger$, and
$(T^\dagger)^\dagger=T$ for compatible finite-dimensional maps.

[F5] [[prop-standard-coordinate-inner-products]]: the standard basis of
$\mathbb C^n$ is orthonormal for its standard coordinate inner product.

[F6] [[lem-qc-linear-isometry-adjoint-identities]]: a surjective linear
isometry between finite-dimensional complex inner-product spaces satisfies
$W^\dagger W=I$ and $WW^\dagger=I$.

[A1] [[def-qc-completely-positive-map]]: for each integer $r\ge1$, the
block amplification $\Phi^{(r)}$ sends non-negative operators on
$H\otimes\mathbb C^r$ to non-negative operators on $K\otimes\mathbb C^r$.

[A2] [[def-qc-tensor-register-and-permutation]] and
[[lem-qc-tensor-product-basis-and-dimension]]: the product basis is ordered
with the displayed factor order and is orthonormal.

[A3] [[def-qc-tensor-map]]: on elementary tensors, an operator tensor acts by
applying its first and second factor maps to their respective factors.

[L1] [[def-qc-choi-matrix]]: $J_{\mathcal B}(\Phi)=
\sum_{i,j<n}E_{ij}\otimes\Phi(E_{ij})$, input factor first and output factor
second, with $E_{ij}x=\langle x,e_j\rangle e_i$.

## Proof


1.1 If $\dim H=0$, [F3] makes the Choi sum empty. If $\dim K=0$, the output operator space contains only the zero map, so every $\Phi(E_{ij})=0$. In either case $J_{\mathcal B}(\Phi)=0$ is non-negative. Assume now both spaces are nonzero, write $\mathcal B=(e_i)_{i<n}$, let $R=\mathbb C^n$ have its standard orthonormal basis $(c_i)_{i<n}$ by [F5], and set $\Omega=\sum_{i<n}e_i\otimes c_i$. Define $Q_\Omega x=\langle x,\Omega\rangle\Omega$. The root pairing is linear in its first argument, so $Q_\Omega$ is linear. For all $x,y$, $\langle Q_\Omega x,y\rangle= \langle x,\Omega\rangle\langle\Omega,y\rangle= \langle x,Q_\Omega y\rangle$, and $\langle Q_\Omega x,x\rangle=|\langle x,\Omega\rangle|^2\ge0$. Thus $Q_\Omega$ is non-negative by [F1]. [given, F1, F3, F5, algebra]

2.1 For $i,j<n$, let $F_{ij}:R\to R$ be the matrix unit $F_{ij}c_k=0$ for $k\ne j$ and $F_{ij}c_j=c_i$. On the product basis $(e_k\otimes c_l)$, the product pairing gives $Q_\Omega(e_k\otimes c_l)=0$ if $k\ne l$, and $Q_\Omega(e_k\otimes c_k)=\Omega$. The same action is given by $\sum_{i,j<n}E_{ij}\otimes F_{ij}$, so $Q_\Omega=\sum_{i,j<n}E_{ij}\otimes F_{ij}$ by [A2] and [A3]. The $R$-blocks of $Q_\Omega$ are therefore $E_{ij}$; the actual block rule in [A1] gives the non-negative operator $Y=\Phi^{(n)}(Q_\Omega)=\sum_{i,j<n}\Phi(E_{ij})\otimes F_{ij}$ on $K\otimes R$. [given, A1, A2, A3, step 1.1, algebra]

3.1 Choose an ordered orthonormal basis $(f_\alpha)_{\alpha<m}$ of $K$ by [F2]. By [A2], both $(f_\alpha\otimes c_j)_{\alpha,j}$ and $(e_j\otimes f_\alpha)_{j,\alpha}$ are orthonormal bases. Let $W:K\otimes R\to H\otimes K$ be the linear map sending $f_\alpha\otimes c_j$ to $e_j\otimes f_\alpha$. This bijection of orthonormal bases is a surjective linear isometry; [F6] gives $W^\dagger W=I$ and $WW^\dagger=I$. Applying the map and its inverse to product basis vectors shows $W(\Phi(E_{ij})\otimes F_{ij})W^\dagger=E_{ij}\otimes\Phi(E_{ij})$ for each $i,j$. Hence $WY W^\dagger=J_{\mathcal B}(\Phi)$ by [L1]. [given, F2, F6, A2, A3, L1, step 2.1, choose, construct]

4.1 By [F4], $WY W^\dagger$ is self-adjoint because $Y$ is self-adjoint. For every $z\in H\otimes K$, the adjoint identity gives $\langle WY W^\dagger z,z\rangle= \langle YW^\dagger z,W^\dagger z\rangle\ge0$, since $Y$ is non-negative. Therefore $J_{\mathcal B}(\Phi)$ is non-negative. [F1, F4, step 2.1, step 3.1, algebra] ∎

