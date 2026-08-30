---
id: thm-the-global-differential-of-a-smooth-map-is-smooth
kind: theorem
title: "The global differential of a smooth map is smooth"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-global-differential-or-tangent-map, thm-coordinate-formula-for-the-differential, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
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
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

If $F:M\to N$ is smooth, then the global differential $dF:TM\to TN$ is a smooth map.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] The global differential sends $v\in T_pM$ to $dF_p(v)$ ([[def-global-differential-or-tangent-map]]).

[L1] In bundle charts, the fiber coordinates of $dF_p$ are given by the Jacobian matrix of the coordinate representative of $F$ ([[thm-coordinate-formula-for-the-differential]]).

[L2] Tangent bundles carry the smooth structures induced by bundle charts ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

## Proof

**Proof technique:** direct.

1.1 Choose charts $(U,x)$ on $M$ and $(V,y)$ on $N$ with $F(U)\subseteq V$, and let $\tilde F:=y\circ F\circ x^{-1}$. In the induced bundle charts, [L1] gives $\widetilde y\circ dF\circ \widetilde x^{-1}(a,v)=(\tilde F(a),D\tilde F(a)v)$. [F1, L1, L2, given]

2.1 The map $a\mapsto \tilde F(a)$ is smooth, the matrix entries of $D\tilde F(a)$ are smooth, and matrix-vector multiplication is polynomial in those entries and the components of $v$. Therefore the displayed local formula is smooth. [step 1.1]

3.1 Since this holds in bundle charts, [L2] implies that $dF:TM\to TN$ is smooth. [L2, step 2.1] ∎
