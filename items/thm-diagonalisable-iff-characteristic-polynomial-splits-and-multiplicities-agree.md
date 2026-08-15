---
id: thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree
kind: theorem
title: "An endomorphism is diagonalisable if and only if its characteristic polynomial splits and every eigenvalue's geometric multiplicity equals its algebraic multiplicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-diagonalisability-eigenspace-direct-sum-criterion, def-algebraic-and-geometric-multiplicity-of-an-eigenvalue, thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent, def-polynomials-that-split-and-splitting-fields, def-characteristic-polynomial-of-an-operator, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, thm-determinant-of-a-triangular-matrix, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§8A–8B'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$. Then $T$ is diagonalisable if and only if $\chi_T$ splits over $F$ and, for every eigenvalue $\lambda$,

$$\dim E_\lambda(T)=\operatorname{mult}_{\chi_T}(\lambda).$$

The assertion includes the zero-dimensional case, where $\chi_T=1$ and the multiplicity condition is vacuous.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T:V\to V$.

[L1] The algebraic multiplicity is the exponent of $x-\lambda$ in $\chi_T$, and the geometric multiplicity is $\dim E_\lambda(T)$ ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

[L2] An endomorphism is diagonalisable exactly when its distinct eigenspaces have direct sum $V$ ([[thm-diagonalisability-eigenspace-direct-sum-criterion]]).

[L3] Eigenvectors belonging to distinct eigenvalues are linearly independent ([[thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]]).

[L4] A split polynomial is a product of linear factors, with repetitions allowed ([[def-polynomials-that-split-and-splitting-fields]]).

[L5] In any ordered basis, $\chi_T$ is the characteristic polynomial of the representing matrix, independently of the chosen basis ([[def-characteristic-polynomial-of-an-operator]]).

[L6] The characteristic polynomial of an endomorphism on an $n$-dimensional space is monic of degree $n$, and it is $1$ for $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[L7] For $n\ge1$, the determinant of a triangular matrix in $M_n(R)$ over a commutative ring is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[L8] For an endomorphism of a finite-dimensional space, $\sigma_F(T)=\{\lambda\in F:\chi_T(\lambda)=0\}$ ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $T$ is diagonalisable and $\dim V\ge1$, and choose an eigenbasis. Its matrix is diagonal, so $xI-[T]$ is triangular of positive size and [L5] and [L7] show that $\chi_T$ is the product of $x-\lambda$ over the diagonal entries. For each $\lambda$, the basis vectors carrying that diagonal entry form a basis of $E_\lambda(T)$; hence their number is both multiplicities in [L1]. [L1, L2, L4, L5, L7, choose]

1.2 Conversely, suppose $\chi_T$ splits and the multiplicities agree. By [L8] the roots of $\chi_T$ in $F$ are exactly the eigenvalues of $T$, so by [L4] the sum of the algebraic multiplicities of the eigenvalues is the degree of $\chi_T$, and [L6] identifies that degree with $\dim V$. Hence the sum of the dimensions of the distinct eigenspaces is $\dim V$. [L1, L4, L6, L8, algebra]

2.1 Choose a basis of each eigenspace. By [L3] their concatenation is independent, and step 1.2 says it has $\dim V$ vectors, so it is a basis. Therefore [L2] makes $T$ diagonalisable. [step 1.2, L2, L3, choose]

3.1 Steps 1.1 and 2.1 prove the equivalence when $\dim V\ge1$. If $\dim V=0$, the empty basis is an eigenbasis, so $T$ is diagonalisable by [L2]; [L6] gives $\chi_T=1$, which splits as an empty product by [L4]; and $T$ has no eigenvalue, so the multiplicity condition holds vacuously. Both sides therefore hold, which proves the equivalence in every finite dimension. [step 1.1, step 2.1, L2, L4, L6] ∎
