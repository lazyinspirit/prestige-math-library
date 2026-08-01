---
id: def-spanning-tree
kind: definition
title: "Spanning trees of a graph"
status: published
origin: session
deps: [def-tree-forest-and-leaf, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Definition

Let $G$ be a graph. A **spanning tree** of $G$ is a spanning subgraph $T$ of $G$ that is a tree ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-tree-forest-and-leaf]]). Equivalently,

$$V(T)=V(G),\qquad E(T)\subseteq E(G),$$

and $T$ is connected and acyclic.

The null graph has no spanning tree under the library convention that a tree is nonempty and connected.
