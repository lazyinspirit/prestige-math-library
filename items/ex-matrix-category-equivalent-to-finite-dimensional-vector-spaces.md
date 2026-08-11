---
id: ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces
kind: example
title: "Chosen bases exhibit $\\mathbf{Mat}_F$ as equivalent to finite-dimensional vector spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subcategory-and-full-subcategory, def-functor-and-contravariant-functor, def-full-faithful-and-essentially-surjective-functor, def-equivalence-and-adjoint-equivalence-of-categories, thm-fully-faithful-split-essentially-surjective-characterises-equivalence, prop-vector-spaces-and-linear-maps-form-category-vect, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, def-coordinate-column-and-matrix-of-a-linear-map, thm-matrix-representation-is-a-vector-space-isomorphism, thm-matrix-of-a-composite-is-the-product, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.5.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $\mathbf{Mat}_F$ have natural numbers as objects and $m\times n$ matrices
as morphisms $n\to m$. The coordinate functor identifies it, up to
equivalence, with the category of finite-dimensional $F$-vector spaces.

## Facts & Assumptions

**Given:** A field $F$ and, for every finite-dimensional $F$-vector space, a supplied ordered basis.

[L1] Finite-dimensional vector spaces form a full subcategory of $\mathbf{Vect}_F$ ([[def-subcategory-and-full-subcategory]], [[prop-vector-spaces-and-linear-maps-form-category-vect]]).

[L2] Matrix multiplication is associative and has identity matrices, including the zero-dimensional cases ([[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]]).

[L3] Linear maps in chosen coordinates correspond bijectively to matrices, and composition corresponds to matrix multiplication ([[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-matrix-representation-is-a-vector-space-isomorphism]], [[thm-matrix-of-a-composite-is-the-product]]).

[L4] Equal dimension characterizes isomorphism of finite-dimensional spaces ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

[L5] A fully faithful, split essentially surjective functor is an equivalence ([[def-functor-and-contravariant-functor]], [[def-full-faithful-and-essentially-surjective-functor]], [[def-equivalence-and-adjoint-equivalence-of-categories]], [[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], matrix multiplication and identity matrices make $\mathbf{Mat}_F$ a category. Define $K:\mathbf{Mat}_F\to\mathbf{FinVect}_F$ by $K(n)=F^n$ and by letting $K(A)$ be multiplication by the matrix $A$. [L1, L2]

2.1 Identity and composition are preserved by [L2] and [L3], so $K$ is a functor. [step 1.1, L2, L3, L5]

2.2 For every $m,n$, the map $A\mapsto K(A)$ is the coordinate bijection from $m\times n$ matrices to linear maps $F^n\to F^m$. Thus $K$ is fully faithful. [step 1.1, L3, L5]

2.3 Suppose an ordered basis has been supplied for each finite-dimensional vector space $V$. If its length is $n_V$, the coordinate map $F^{n_V}\to V$ is a specified isomorphism, including when $V=0$. Hence these choices split essential surjectivity. [step 1.1, L3, L4, L5]

3.1 The criterion in [L5] now makes $K$ an equivalence. Thus chosen bases turn arbitrary finite-dimensional spaces into coordinate models without asserting that the two categories are strictly identical. [step 2.1, step 2.2, step 2.3, L5] ∎
