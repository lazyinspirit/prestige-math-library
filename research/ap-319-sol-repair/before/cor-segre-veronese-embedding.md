---
id: cor-segre-veronese-embedding
kind: corollary
title: The Segre-Veronese map is a closed embedding
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multihomogeneous-map-to-projective-space, lem-veronese-map-well-defined-closed-immersion, cor-projective-variety-product-exists]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.23 and 6.26
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---

## Statement

For $m,n\ge0$ and $a,b\ge1$, the map from $\mathbf P^m_k\times\mathbf P^n_k$ taking $([x],[y])$ to all monomials $x^\alpha y^\beta$ of bidegree $(a,b)$ is a closed embedding.

## Facts & Assumptions

**Given:** Integers $m,n\ge0$, positive integers $a,b$, and the page's algebraically closed field $k$.

## Proof

1.1 Apply $\nu_{m,a}$ and $\nu_{n,b}$ to the two factors. Their target coordinates are respectively all degree-$a$ and degree-$b$ monomials. [given]

2.1 Applying Segre to those two images produces exactly the products $x^\alpha y^\beta$, in the fixed product ordering. It is therefore the fixed-bidegree map of the statement. [step 1.1, algebra]

3.1 Let $X$ and $Y$ be the two Veronese images. The Veronese lemma makes them closed projective subvarieties with regular inverse maps. The construction in `cor-projective-variety-product-exists`, applied to $X,Y$, realizes their Segre image as a closed subset of the target projective space, with regular projections recovering its two factors. Compose these projections with the Veronese inverses. By the product universal property they give a regular map from this closed image to $\mathbf P^m\times\mathbf P^n$, inverse to the map in step 2.1. That forward map is a morphism by the multihomogeneous theorem, since a nonzero coordinate $x_i$ and a nonzero coordinate $y_j$ give the nonzero monomial $x_i^a y_j^b$. Thus the displayed map is an isomorphism onto a closed subvariety, as asserted. The argument includes a degree equal to one and a factor $\mathbf P^0$. [step 2.1] ∎
