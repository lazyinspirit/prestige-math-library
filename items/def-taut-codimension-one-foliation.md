---
id: def-taut-codimension-one-foliation
kind: definition
title: Taut codimension-one foliations
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-map-transverse-to-a-regular-foliation
- def-leaf-of-a-regular-foliation
- def-smooth-embedding
- def-embedded-submanifold-and-slice-chart
- def-compact-space
- def-connected-space
- def-countable-choice-principle-for-foliation-pair
justified_by:
- lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal
- prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.4, printed p. 155
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a codimension-one regular
foliation of a smooth manifold $M$, transversely oriented in this pair. $F$ is **taut**
if for every leaf $L$ of $F$ there is a closed transversal through $L$: an embedded
smooth loop $\gamma:S^1\to M$, everywhere transverse to $F$, with $\gamma(S^1)\cap
L\neq\varnothing$. The empty manifold is taut vacuously, but has no closed transversal. On a nonempty compact connected $M$, the leaf-by-leaf condition is equivalent
to the existence of a single closed transversal meeting every leaf, as proved in
[[lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal]].
For a closed oriented three-manifold the sufficient closed-two-form criterion is
[[prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation]]; that
three-dimensional criterion is not asserted here in other dimensions.
