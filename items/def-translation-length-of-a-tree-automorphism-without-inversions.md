---
id: def-translation-length-of-a-tree-automorphism-without-inversions
kind: definition
title: "The translation length of a tree automorphism without inversions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-edge-inversion-and-action-without-inversions, def-simplicial-path-metric]
justified_by: [thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
aliases: []
landmark: false
verification:
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

Let $g$ be an automorphism of a simplicial tree $T$ that acts without
inversions. Its **translation length** is

$$\ell(g):=\min_{v\in V(T)} d_T(v,g v),$$

using the path metric of [[def-simplicial-path-metric]].

The existence of this minimum, together with the elliptic/hyperbolic
classification, is the content of
[[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]], recorded here in
`justified_by`.
