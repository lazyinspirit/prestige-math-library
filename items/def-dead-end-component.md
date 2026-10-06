---
id: def-dead-end-component
kind: definition
title: Dead-end components
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-regular-foliation-atlas
- def-leaf-of-a-regular-foliation
- def-saturated-neighbourhood-of-a-leaf
- def-embedded-smooth-submanifold-with-boundary
- def-embedded-submanifold-and-slice-chart
- def-compact-space
justified_by:
- lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.4, printed p. 156
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, printed p. 36
---

## Definition

Let $F$ be a smooth cooriented codimension-one foliation of a boundaryless manifold $M$. A **dead-end component** is a compact embedded region $N\subsetneq M$ of ambient dimension with **nonempty boundary**, saturated by leaves of $F$, whose boundary is a union of leaves and whose positive transverse direction points inward at every boundary point. Equivalently, a positive transverse path starting in $N$ cannot leave $N$. The equivalence follows in a boundary defining coordinate $r\ge0$: inwardness gives $dr(\gamma')>0$ at every boundary crossing, so a first exit is impossible; conversely an outward transverse vector gives a short exiting path. Compactness and the boundary charts make the boundary a finite union of compact leaves, as shown in [[lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary]]. A foliation with no such region is **dead-end free**.

Nonempty boundary excludes an entire connected component of a disconnected ambient manifold, where the inward condition would be vacuous. The definition is componentwise and is unchanged by replacing an existing region by its connected component with boundary. The open formulation in other treatments describes the interior of a trapping region; it is not used to assert a compact closure without proof.
