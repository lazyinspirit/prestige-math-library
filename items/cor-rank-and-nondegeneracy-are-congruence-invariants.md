---
id: cor-rank-and-nondegeneracy-are-congruence-invariants
kind: corollary
title: 'Congruent matrices have the same rank; hence rank and nondegeneracy of a bilinear form are basis-independent'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-change-of-basis-for-a-bilinear-form-is-congruence, thm-matrix-of-a-composite-is-the-product, prop-transpose-laws, def-linear-isomorphism-and-invertible-linear-map, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

If $A'=P^{\mathsf T}AP$ with $P$ invertible, then $\operatorname{rank}A'=\operatorname{rank}A$. Consequently the rank and nondegeneracy of a bilinear form do not depend on the basis used to represent it.

## Facts & Assumptions

**Given:** Congruent matrices $A'=P^{\mathsf T}AP$ with $P$ invertible.

[L1] Congruence is precisely the matrix relation arising from a basis change for a bilinear form ([[thm-change-of-basis-for-a-bilinear-form-is-congruence]]).

[L2] Matrix multiplication represents composition of the associated linear maps ([[thm-matrix-of-a-composite-is-the-product]]).

[L3] Transpose reverses products and sends an inverse to the inverse transpose ([[prop-transpose-laws]]).

[L4] An invertible linear map is a linear isomorphism and has a two-sided linear inverse ([[def-linear-isomorphism-and-invertible-linear-map]]). Two finite-dimensional spaces are linearly isomorphic if and only if they have the same dimension ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Right multiplication by the invertible $P$ is precomposition with an isomorphism, so $\operatorname{im}(AP)=\operatorname{im}(A)$. Left multiplication by $P^{\mathsf T}$ maps this image isomorphically to $\operatorname{im}(P^{\mathsf T}AP)$, because [L3] makes $P^{\mathsf T}$ invertible. [L2, L3, L4, given]

2.1 Therefore the two image spaces have the same dimension, so $\operatorname{rank}A'=\operatorname{rank}A$. [step 1.1, L4]

3.1 By [L1], matrices of one bilinear form in two bases are congruent. Rank is thus basis-independent, and nondegeneracy is also basis-independent because it is equivalent to invertibility of a representing matrix, which the congruence relation preserves in both directions. [step 2.1, L1, L3, L4] ∎
