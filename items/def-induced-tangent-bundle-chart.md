---
id: def-induced-tangent-bundle-chart
kind: definition
title: "The induced tangent bundle chart"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-tangent-bundle-as-a-disjoint-union, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

Let $(U,x)$ be a smooth chart on an $n$-manifold $M$. Every vector $v\in T_pM$ with $p\in U$ has a unique expansion $v=\sum_i v^i\partial_{x^i}|_p$ by [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]. The **induced tangent-bundle chart** is
$$ \widetilde x:\pi^{-1}(U)\to x(U)\times\mathbb R^n,\qquad v\mapsto (x(p),(v^1,\dots,v^n)). $$
