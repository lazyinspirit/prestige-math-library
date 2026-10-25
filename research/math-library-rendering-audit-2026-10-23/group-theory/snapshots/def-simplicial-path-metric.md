---
id: def-simplicial-path-metric
kind: definition
title: "The simplicial path metric on a tree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-tree, thm-unique-reduced-path-characterisation-of-simplicial-trees]
justified_by: [lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Definition

Let $T$ be a simplicial tree. By
[[thm-unique-reduced-path-characterisation-of-simplicial-trees]], every two
vertices $v,w$ are joined by a unique reduced path. Define the
**simplicial path metric**

$$d_T(v,w)$$

to be the length of that unique reduced path.

The fact that this definition is geodesic and integer-valued is proved in
[[lem-path-metric-on-a-tree-is-geodesic-and-integer-valued]], recorded here in
`justified_by`.
