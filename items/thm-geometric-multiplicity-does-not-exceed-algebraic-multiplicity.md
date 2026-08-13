---
id: thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity
kind: theorem
title: 'The geometric multiplicity of an eigenvalue does not exceed its algebraic multiplicity'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-and-geometric-multiplicity-of-an-eigenvalue, lem-characteristic-polynomial-of-block-triangular-matrix, thm-dimension-of-a-linear-subspace, def-coordinate-column-and-matrix-of-a-linear-map]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.2'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional vector space, and let $\lambda$ be an eigenvalue. Then

$$\dim E_\lambda(T)\le \operatorname{mult}_{\chi_T}(\lambda).$$

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, $T\in\mathcal L(V)$, and an eigenvalue $\lambda$.

[L1] Geometric multiplicity is $\dim E_\lambda(T)$, while algebraic multiplicity is the largest exponent of $x-\lambda$ dividing $\chi_T$ ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

[L2] A linearly independent subset of a finite-dimensional space extends, without Choice, to a basis ([[thm-dimension-of-a-linear-subspace]], clause 3).

[L3] The matrix of a linear map records the coordinate columns of the images of the basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L4] The characteristic polynomial of a block-triangular matrix is the product of those of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Put $g=\dim E_\lambda(T)$. Choose a basis $e_1,\ldots,e_g$ of the eigenspace and extend it by [L2] to a basis of $V$. [L1, L2, given, choose]

2.1 Since $T(e_i)=\lambda e_i$ for $i\le g$, [L3] makes the matrix of $T$ in this basis block upper triangular with leading diagonal block $\lambda I_g$. [step 1.1, L3, given]

3.1 By [L4], $\chi_T(x)=\det(xI_g-\lambda I_g)q(x)=(x-\lambda)^gq(x)$ for the characteristic polynomial $q$ of the other diagonal block. [step 2.1, L4, algebra]

4.1 Thus $(x-\lambda)^g$ divides $\chi_T$, so the maximal exponent in [L1] is at least $g$. This is the claimed inequality; $g\ge1$ because $\lambda$ is an eigenvalue. [step 3.1, L1] ∎
