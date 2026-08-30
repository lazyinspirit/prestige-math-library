---
id: def-coordinate-derivations-at-a-point
kind: definition
title: "Coordinate derivations at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-germ-of-a-smooth-function-at-a-point, def-derivation-at-a-point-and-tangent-space, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: [lem-coordinate-derivations-are-well-defined-derivations]
aliases: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

## Definition

Let $(U,x)$ be a smooth chart on an $n$-manifold $M$ with $p\in U$ and $a:=x(p)$. For $1\le i\le n$, the **$i$th coordinate derivation at $p$** is the map $\partial_i|_p:C_p^\infty(M)\to\mathbb R$ defined by
$$ \partial_i|_p([f]) := \frac{\partial (f\circ x^{-1})}{\partial x^i}(a). $$
This is the intrinsic version of differentiating in the $i$th chart direction.
