---
id: def-tree-forest-and-leaf
kind: definition
title: "Trees, forests, leaves and isolated vertices"
status: published
origin: session
deps: [def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
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

All graphs here are finite, simple and undirected ([[def-finite-simple-graph]]). A **forest** is a graph containing no cycle, and a **tree** is a connected forest ([[def-graph-walk-trail-path-and-cycle]], [[def-connected-graph-and-connected-component]]).

A vertex of degree one is a **leaf**. A vertex of degree zero is **isolated** ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]). Thus the one-vertex tree has an isolated vertex and no leaf under this convention. A **nontrivial tree** means a tree with at least two vertices.

## Remarks

- The null graph is a forest but not a tree, because it is not connected under the library convention.
- Every connected component of a nonnull forest is a tree.
