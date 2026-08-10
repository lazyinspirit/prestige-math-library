---
id: def-bridge-in-a-graph
kind: definition
title: "A bridge as an edge whose deletion increases the number of connected components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-deletion-contraction-minor-and-subdivision, def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite graph and let $e$ be an edge. Using edge deletion from [[def-graph-deletion-contraction-minor-and-subdivision]] and connected components from [[def-connected-graph-and-connected-component]], the edge $e$ is a **bridge** if $G-e$ has more connected components than $G$. Component vertex sets partition the graph as in [[cor-connected-components-partition-the-vertex-set]], so this comparison is unambiguous even when $G$ is disconnected.
