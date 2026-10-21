---
id: def-plane-graph-face-and-boundary
kind: definition
title: "Plane embeddings of finite simple graphs, their faces, facial boundary walks and lengths (counting a bridge twice), and planar graphs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polygonal-arc-and-polygon, def-plane-region-and-frontier, def-finite-simple-graph, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Section 3.3"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Definition

A **plane graph** is a finite simple graph ([[def-finite-simple-graph]]) together with distinct points of $\mathbb R^2$ for its vertices and a polygonal arc ([[def-polygonal-arc-and-polygon]]) for each edge, joining its endpoints, such that an edge interior contains no vertex and two edge arcs meet only at a common endpoint. A finite simple graph is **planar** if it is isomorphic to the abstract graph underlying some plane graph.

A **face** is a region of the complement of the drawing ([[def-plane-region-and-frontier]]). The **boundary subgraph** of a face consists of the vertices and whole edges lying in its frontier; this is a subgraph in the sense of [[def-subgraph-induced-subgraph-and-spanning-subgraph]].

For a connected plane graph, walking once around a face with that face locally on the same side gives its **facial boundary walk**. Its **length** is the number of edge traversals, not the number of distinct edges: an edge incident with the same face on both local sides is traversed twice. For a disconnected plane graph a face may have several boundary walks; its boundary length is the sum of their lengths. No boundary walk is assumed to be a cycle unless a later connectivity result proves it.

