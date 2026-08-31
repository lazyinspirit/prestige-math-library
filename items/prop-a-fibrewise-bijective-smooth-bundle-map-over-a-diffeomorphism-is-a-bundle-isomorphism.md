---
id: prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism
kind: proposition
title: "A fibrewise bijective smooth bundle map over a diffeomorphism is a bundle isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-bundle-map-over-a-smooth-base-map, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, thm-real-square-matrix-invertible-iff-determinant-nonzero, lem-matrix-inversion-preserves-ck-regularity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $\Phi:E\to F$ be a smooth vector bundle map over a diffeomorphism
$f:M\to N$. If each fibre map $\Phi_p:E_p\to F_{f(p)}$ is bijective, then
$\Phi$ is a vector bundle isomorphism.

## Facts & Assumptions

**Given:** A smooth bundle map $\Phi:E\to F$ over a diffeomorphism $f:M\to N$, with each $\Phi_p$ bijective.

[L1] In local frames, smooth bundle maps are given by smooth matrix-valued functions ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]).

[L2] A real square matrix is invertible exactly when its determinant is nonzero ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[L3] A smooth matrix-valued map has smooth inverse matrix entries wherever its determinant never vanishes ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 If the common fibre rank is $0$, then every fibre is the zero vector space, so $\Phi$ is already the unique smooth bundle map between zero bundles over $f$ and hence a bundle isomorphism. Otherwise choose local frames so that on one trivializing neighborhood, $\Phi(p,v)=(f(p),A(p)v)$. Fibrewise bijectivity means that each matrix $A(p)$ is invertible, so [L2] gives $\det A(p)\neq0$ for every $p$. [L1, L2, given]
2.1 In the positive-rank case, [L3] makes the entries of $A^{-1}$ smooth on the same neighborhood. Thus the local inverse is $(q,w)\mapsto(f^{-1}(q),A(f^{-1}(q))^{-1}w)$, which is smooth because $f^{-1}$ is smooth. These local inverses agree on overlaps, so $\Phi$ is a smooth bundle isomorphism. Together with the rank-$0$ branch of step 1.1, this proves the proposition. [L3, step 1.1, algebra] ∎
