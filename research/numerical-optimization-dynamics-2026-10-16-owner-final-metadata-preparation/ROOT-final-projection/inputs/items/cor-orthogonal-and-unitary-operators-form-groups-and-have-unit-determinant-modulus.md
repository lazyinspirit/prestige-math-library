---
id: cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
kind: corollary
title: "Orthogonal and unitary operators form groups, and their determinants have modulus one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-dimensional-isometry-characterisations, prop-adjoint-algebra, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, thm-operator-determinant-is-basis-independent, thm-operator-determinant-is-multiplicative, thm-determinant-of-transpose, lem-complex-conjugation-and-modulus-laws, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §7D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

The orthogonal operators on a finite-dimensional real inner product space form a group under composition, as do the unitary operators on a finite-dimensional complex inner product space. Every such operator $T$ satisfies

$$|\det T|=1.$$

Over $\mathbb R$, this says $\det T\in\{-1,1\}$. In dimension zero, the unique determinant is $1$.

## Facts & Assumptions

**Given:** Orthogonal or unitary operators on a fixed finite-dimensional inner product space.

[L1] Such an operator satisfies $T^{-1}=T^*$ and $T^*T=TT^*=I$ ([[thm-finite-dimensional-isometry-characterisations]]).

[L2] Adjoints reverse products and fix the identity ([[prop-adjoint-algebra]]).

[L3] In an orthonormal basis, the matrix of $T^*$ is the conjugate transpose of the matrix of $T$ ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

[L4] For $\dim V\ge1$ the operator determinant is independent of the ordered basis, in dimension zero it is the separately defined value $1$, and $\det(S\circ T)=\det(S)\det(T)$ ([[thm-operator-determinant-is-basis-independent]], [[thm-operator-determinant-is-multiplicative]]).

[L5] For $n\ge1$ and $A\in M_n(R)$ over a commutative ring, $\det(A^{\mathsf T})=\det(A)$; complex conjugation is a field automorphism, and $z\overline z=|z|^2$ ([[thm-determinant-of-transpose]], [[lem-complex-conjugation-and-modulus-laws]]).

[L6] Every finite-dimensional real or complex inner product space has an orthonormal basis, the empty one in dimension zero ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

**Proof technique:** direct.

1.1 The identity satisfies [L1]. If $S,T$ satisfy it, then [L2] gives $(ST)^*(ST)=T^*S^*ST=I$; and the inverse $T^{-1}=T^*$ also satisfies the same identities. Hence the operators are closed under identity, composition, and inverses, so form a group. [L1, L2]

1.2 Suppose $\dim V=n\ge1$ and choose an orthonormal basis by [L6]; write $A$ for the matrix of $T$ in it. By [L3] the matrix of $T^*$ is $\overline A^{\mathsf T}$, and since conjugation is a field automorphism it conjugates the determinant, so [L5] gives $\det(\overline A^{\mathsf T})=\det\overline A=\overline{\det A}$. Hence [L4] makes $\det(T^*)=\overline{\det T}$. Taking determinants in $T^*T=I$, where $I$ has matrix $I_n$ and so determinant $1$, [L4] gives $1=\overline{\det T}\det T=|\det T|^2$, so [L5] yields $|\det T|=1$. [L1, L3, L4, L5, L6, choose, algebra]

2.1 Over $\mathbb R$, the only real scalars of modulus one are $-1$ and $1$. If $V=0$, then [L4] gives the operator determinant $1$, so $|\det T|=1$ holds there as well, and the group has its single identity element. [step 1.2, L4] ∎
