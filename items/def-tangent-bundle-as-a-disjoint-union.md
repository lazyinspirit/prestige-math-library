---
id: def-tangent-bundle-as-a-disjoint-union
kind: definition
title: "The tangent bundle as a disjoint union"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivation-at-a-point-and-tangent-space]
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

The **tangent bundle** of a smooth manifold $M$ is the disjoint union
$$ TM:=\bigsqcup_{p\in M} T_pM. $$
An element of $TM$ is a tangent vector together with its base point, and the projection $\pi:TM\to M$ sends a vector in $T_pM$ to $p$. At this stage, no topology or smooth structure is yet imposed on $TM$.
