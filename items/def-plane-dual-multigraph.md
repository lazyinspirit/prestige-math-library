---
id: def-plane-dual-multigraph
kind: definition
title: "The plane dual multigraph, with a vertex for each face and one crossing edge for each primal edge"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-graph-face-and-boundary, lem-plane-edge-face-incidence, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.6"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "J. Erickson, Planar Graphs, Section 9"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a connected plane graph with face set $F(G)$ ([[def-plane-graph-face-and-boundary]]). Its **dual multigraph** $G^*$ has vertex set $F(G)$ and one edge $e^*$ for every primal edge $e$. If the two local sides of $e$ belong to faces $f$ and $g$, then $e^*$ has endpoints $f,g$.

By [[lem-plane-edge-face-incidence]], a bridge has the same face on both local sides, so its dual edge is a loop. Different primal edges may have the same incident face pair, so their duals may be parallel. These are permitted by [[def-multigraph-loop-and-digraph]]. The definition is attached to the fixed plane embedding: different embeddings of the same abstract planar graph may have nonisomorphic dual multigraphs.

