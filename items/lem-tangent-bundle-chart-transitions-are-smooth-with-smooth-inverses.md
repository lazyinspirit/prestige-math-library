---
id: lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses
kind: lemma
title: "Tangent-bundle chart transitions are smooth with smooth inverses"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-tangent-bundle-chart, thm-change-of-coordinate-formula-for-tangent-bases, lem-matrix-inversion-preserves-ck-regularity]
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

If $(U,x)$ and $(V,y)$ are smooth charts on $M$, then the transition map $\widetilde y\circ \widetilde x^{-1}$ on $\widetilde x(\pi^{-1}(U\cap V))$ is smooth, and so is its inverse.

## Facts & Assumptions

**Given:** Smooth charts $(U,x)$ and $(V,y)$ with nonempty overlap.

[F1] The induced tangent-bundle chart records the base coordinate together with the coefficients in the coordinate tangent basis ([[def-induced-tangent-bundle-chart]]).

[L1] Tangent bases transform by the Jacobian of the coordinate change ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

[L2] Matrix inversion preserves $C^k$ regularity on the general linear group ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 If $v=\sum_i v^i\partial_{x^i}|_p$, then [L1] gives $v=\sum_j w^j\partial_{y^j}|_p$ with $w=J(a)v$, where $a:=x(p)$ and $J(a)=D(y\circ x^{-1})(a)$. Hence $\widetilde y\circ\widetilde x^{-1}(a,v)=(y\circ x^{-1}(a),J(a)v)$. [F1, L1, given]

2.1 The base part $y\circ x^{-1}$ is smooth, the matrix-valued map $a\mapsto J(a)$ is smooth, and matrix-vector multiplication is polynomial in the entries; therefore the transition map is smooth. [step 1.1]

3.1 Reversing the roles of $x$ and $y$ gives the inverse transition, whose fiber matrix is $J(a)^{-1}$. The smoothness of this inverse matrix field follows from [L2], so the inverse transition is smooth. [L1, L2, step 1.1] ∎
