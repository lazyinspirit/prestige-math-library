---
id: def-maximal-plane-and-maximally-planar-graph
kind: definition
title: "Maximal plane graphs, plane triangulations, and maximally planar abstract graphs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-graph-face-and-boundary, def-graph-deletion-contraction-minor-and-subdivision, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Definition

A plane graph ([[def-plane-graph-face-and-boundary]]) is **maximal plane** if no edge can be added between two nonadjacent existing vertices while preserving a plane embedding with the same vertex positions. It is a **plane triangulation** if every face, including the unbounded face, has boundary a triangle in the sense of [[def-standard-complete-bipartite-path-and-cycle-graphs]].

An abstract simple planar graph is **maximally planar** if adding any missing edge makes it nonplanar. Edge addition and the underlying abstract graph follow [[def-graph-deletion-contraction-minor-and-subdivision]]. Maximal plane refers to a fixed embedding; maximally planar refers to the abstract graph.

