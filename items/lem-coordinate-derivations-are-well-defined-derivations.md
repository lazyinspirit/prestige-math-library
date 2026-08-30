---
id: lem-coordinate-derivations-are-well-defined-derivations
kind: lemma
title: "Coordinate derivations are well-defined derivations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-germ-of-a-smooth-function-at-a-point, def-derivation-at-a-point-and-tangent-space, def-coordinate-derivations-at-a-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
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

For every smooth chart $(U,x)$ containing $p$, each coordinate operator $\partial_i|_p$ from [[def-coordinate-derivations-at-a-point]] is a well-defined derivation at $p$.

## Facts & Assumptions

**Given:** A smooth chart $(U,x)$ containing $p$ and an index $i$.

[F1] Equal germs have equal representatives on some neighbourhood of $p$ ([[def-germ-of-a-smooth-function-at-a-point]]).

[F2] The coordinate derivation is defined by differentiating a chart representative at the coordinate point $a=x(p)$ ([[def-coordinate-derivations-at-a-point]]).

[F3] Derivations are linear maps satisfying the Leibniz rule ([[def-derivation-at-a-point-and-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 If $[f]=[g]$, then $f\circ x^{-1}$ and $g\circ x^{-1}$ agree on a neighbourhood of $a$, so their $i$th partial derivatives at $a$ are equal; hence $\partial_i|_p$ is well defined by [F1] and [F2]. [F1, F2, given]

1.2 Linearity is immediate from linearity of partial differentiation, and the usual product rule for partial derivatives gives $\partial_i|_p([fg])=f(p)\,\partial_i|_p([g])+g(p)\,\partial_i|_p([f])$. [F2, given]

2.1 Thus $\partial_i|_p$ satisfies [F3], so it is a derivation at $p$. [F3, step 1.1, step 1.2] ∎
