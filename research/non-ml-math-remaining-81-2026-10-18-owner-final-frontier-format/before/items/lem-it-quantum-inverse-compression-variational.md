---
id: lem-it-quantum-inverse-compression-variational
kind: lemma
title: Inverse compression for a positive operator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-real-and-complex-inner-product-space
  - def-non-negative-and-positive-operator
  - def-self-adjoint-and-normal-endomorphism
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-jordan-von-neumann-polarization
  - lem-qc-linear-isometry-adjoint-identities
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces, with inner products linear in the first argument. Let $V:H\to K$ be a linear isometry, let $T:K\to K$ be positive definite, and let $s\ge0$. Then
$$V^\dagger(T+sI_K)^{-1}V\succeq(V^\dagger TV+sI_H)^{-1},$$
where $A\succeq B$ means $A-B$ is nonnegative.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K$, an isometry $V:H\to K$, a positive-definite operator $T$ on $K$, and $s\ge0$.

[F1] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument and conjugate-linear in its second.

[F2] [[def-non-negative-and-positive-operator]]: a positive operator is self-adjoint and has $\langle Tx,x\rangle>0$ for every nonzero $x$.

[F3] [[def-self-adjoint-and-normal-endomorphism]]: every self-adjoint endomorphism is normal.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: an isometry preserves the norm of every vector.

[F5] [[thm-jordan-von-neumann-polarization]]: the first-linear complex inner product is determined by the four norm values at $x+y,x-y,x+iy,x-iy$.

[F6] [[lem-qc-linear-isometry-adjoint-identities]]: a finite-dimensional linear isometry satisfies $V^\dagger V=I_H$.

[F7] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint is characterized by $\langle Vx,y\rangle=\langle x,V^\dagger y\rangle$; adjoints reverse compositions.

## Proof

1.1 Put $C=T+sI_K$ and $P=V^\dagger TV+sI_H$. The operator $C$ is self-adjoint and $\langle Cz,z\rangle=\langle Tz,z\rangle+s\|z\|^2>0$ for $z\ne0$. The adjoint identity [F8] and self-adjointness of $T$ give $\langle Pw,w\rangle=\langle TVw,Vw\rangle+s\|w\|^2>0$ for $w\ne0$, since [F4] gives $Vw\ne0$; the same adjoint identities show $P$ is self-adjoint. Thus both are normal by [F3] and positive definite by [F2]; [F7] diagonalizes each with strictly positive eigenvalues, so both inverses in the Statement exist. [given, F2, F3, F4, F7, F8, algebra]

2.1 For any positive-definite self-adjoint $C$ and any $y$, expansion using [F1] gives
$$2\operatorname{Re}\langle y,z\rangle-\langle Cz,z\rangle=\langle C^{-1}y,y\rangle-\langle C(z-C^{-1}y),z-C^{-1}y\rangle.$$
The last term is nonnegative and vanishes at $z=C^{-1}y$, hence $\langle C^{-1}y,y\rangle=\max_z(2\operatorname{Re}\langle y,z\rangle-\langle Cz,z\rangle)$. [given, F1, step 1.1, algebra]

3.1 Fix $x,w\in H$. By [F4]–[F5], the isometry preserves inner products, so $\langle Vx,Vw\rangle=\langle x,w\rangle$; [F6] gives $V^\dagger V=I_H$. Now apply step 2.1 to $y=Vx$ and $C=T+sI_K$, restricting the maximum to $z=Vw$. The restricted objective equals $2\operatorname{Re}\langle x,w\rangle-\langle Pw,w\rangle$. Maximizing over $w$ and applying step 2.1 to $P$ yields $\langle (T+sI_K)^{-1}Vx,Vx\rangle\ge\langle P^{-1}x,x\rangle$. Since this holds for every $x$, the difference of the two self-adjoint operators has nonnegative quadratic form, which is exactly the asserted operator order. [given, F4, F5, F6, step 2.1, algebra] ∎
