---
id: def-edge-inversion-and-action-without-inversions
kind: definition
title: "Edge inversions and actions without inversions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-automorphism-and-group-action-on-a-simplicial-graph]
justified_by: []
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
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Definition

Let $G$ act on an oriented graph $X$. An element $g\in G$
**inverts** an oriented edge $e$ when

$$g(e)=\bar e.$$

The action is **without inversions** when no oriented edge is inverted by any
group element.
