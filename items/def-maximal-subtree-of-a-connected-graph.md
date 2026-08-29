---
id: def-maximal-subtree-of-a-connected-graph
kind: definition
title: "A maximal subtree of a connected graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-graph-with-edge-reversal, def-simplicial-tree]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Definition

Let $X$ be a connected oriented graph. A **maximal subtree** of $X$ is a
subgraph $T\subseteq X$ with the same vertex set as $X$ such that $T$ is a
simplicial tree and every edge of $X\setminus T$ joins vertices already
connected in $T$.

Equivalently, $T$ is a spanning tree of the underlying connected graph.
