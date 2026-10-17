---
id: def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union
kind: definition
title: "Cotangent space and cotangent bundle as a disjoint union"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional, def-tangent-bundle-as-a-disjoint-union]
justified_by: []
aliases: []
landmark: false
verification:
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

For a smooth manifold $M$ and a point $p\in M$, the **cotangent space** at $p$ is the algebraic dual $T_p^*M:=(T_pM)^*$. The **cotangent bundle** is the disjoint union
$$ T^*M:=\bigsqcup_{p\in M} T_p^*M. $$
