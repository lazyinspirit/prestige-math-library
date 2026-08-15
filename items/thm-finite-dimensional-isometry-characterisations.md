---
id: thm-finite-dimensional-isometry-characterisations
kind: theorem
title: "For an endomorphism in finite dimension, preserving lengths, preserving inner products, carrying orthonormal bases to orthonormal bases, and $T^*T=I$ are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-isometry-and-orthogonal-or-unitary-operator, prop-pythagorean-parallelogram-and-polarisation-identities, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-operator-determinant-is-multiplicative, thm-operator-invertible-iff-determinant-nonzero, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, thm-orthogonal-nonzero-vectors-are-linearly-independent, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: equivalence
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., results 7.45, 7.49, and 7.53'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For an endomorphism $T$ of a finite-dimensional real or complex inner product space $V$, the following are equivalent:

1. $T$ preserves norms.
2. $T$ preserves inner products.
3. $T$ sends every orthonormal basis to an orthonormal basis.
4. $T$ sends some orthonormal basis to an orthonormal basis.
5. $T^*T=I$.

Whenever these conditions hold, $T$ is invertible and $T^{-1}=T^*$, so also $TT^*=I$. The zero-dimensional case is included.

## Facts & Assumptions

**Given:** An endomorphism $T$ of a finite-dimensional inner product space $V$.

[L1] Real and complex polarisation identities recover the inner product from the norm ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[L2] Every finite-dimensional inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L3] An adjoint is characterised by $\langle Tv,w\rangle=\langle v,T^*w\rangle$, and adjoint algebra gives $(ST)^*=T^*S^*$ and $T^{**}=T$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[prop-adjoint-algebra]]).

[L4] Operator determinants are multiplicative, and a finite-dimensional endomorphism is invertible exactly when its determinant is nonzero ([[thm-operator-determinant-is-multiplicative]], [[thm-operator-invertible-iff-determinant-nonzero]]).

[L5] A linear isometry is a linear map preserving every vector norm ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[L6] If $\langle z,w\rangle=0$ for every $w$ in an inner product space, then $z=0$ ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

[L7] Every finite orthogonal list of nonzero vectors is linearly independent ([[thm-orthogonal-nonzero-vectors-are-linearly-independent]]).

[L8] A subspace of a finite-dimensional space has the same dimension as the ambient space exactly when it is the whole space ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** equivalence.

1.1 If $T$ preserves norms, substitute $Tu,Tv$ into the appropriate real or complex polarisation identity [L1]. Every norm term is unchanged, so $\langle Tu,Tv\rangle=\langle u,v\rangle$. Thus (1) implies (2). [L1, L5]

1.2 If $T$ preserves inner products, it sends every orthonormal basis to an orthonormal list. By [L7] this list is independent; its span therefore has dimension $\dim V$, so [L8] makes it all of $V$. Thus (2) implies (3), while (3) implies (4) by the existence in [L2]. [L2, L7, L8]

1.3 Suppose an orthonormal basis $(e_i)$ has orthonormal image $(Te_i)$. Expanding arbitrary $u,v$ in $(e_i)$ shows directly that $\langle Tu,Tv\rangle=\langle u,v\rangle$. Hence (4) implies (2), and setting $u=v$ shows (2) implies (1). [L2, algebra]

1.4 By the defining adjoint identity [L3], (2) is equivalent to $\langle u,(T^*T-I)v\rangle=0$ for all $u,v$. Conjugate symmetry and nondegeneracy [L6] make this equivalent to $(T^*T-I)v=0$ for every $v$, hence to $T^*T=I$. Thus (2) and (5) are equivalent. [L3, L6, algebra]

1.5 Under (5), multiplicativity in [L4] gives $\det(T^*)\det(T)=1$, so $\det(T)\ne0$. Hence $T$ is invertible and $T^*T=I$ gives $T^{-1}=T^*$. Consequently $TT^*=I$. [L4]

2.1 All implications remain valid for the empty orthonormal basis of $V=0$, where the identity endomorphism is the unique map. [L2] ∎
