---
id: prop-maximal-plane-triangulation-characterisation
kind: proposition
title: "A two-connected plane graph of order at least three is maximal exactly when every face is triangular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-face-boundaries-in-two-connected-plane-graphs, def-maximal-plane-and-maximally-planar-graph, lem-plane-edge-face-incidence, thm-polygonal-jordan-curve, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.8"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

A **two-connected** plane graph with at least three vertices is maximal plane if and only if it is a plane triangulation ([[def-maximal-plane-and-maximally-planar-graph]]). Two-connectivity is what makes every facial boundary a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]); [[def-plane-graph-face-and-boundary]] assumes no boundary walk is a cycle until a connectivity result proves it, and the polygonal Jordan argument below is about polygons, not about walks that may repeat a vertex. Facial walks and cycles use [[lem-plane-edge-face-incidence]] and [[def-graph-walk-trail-path-and-cycle]].

## Facts & Assumptions

**Given:** A plane graph $G$ with at least three vertices.

[L1] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is maximal plane. In any face, every two distinct boundary vertices must already be adjacent, because a polygonal arc between them can be drawn inside the face. If a facial boundary had at least four distinct vertices or repeated a vertex, four boundary occurrences together with [L1] would force two of the complete set of boundary chords to cross. Hence every face has exactly three distinct boundary vertices and is triangular. [L1, construct]

2.1 Conversely, suppose every face is triangular. The interior of any proposed new plane edge must lie in one face of the old drawing, with both endpoints on its boundary. Those endpoints are already adjacent because that boundary is a triangle, so no missing edge can be added. [step 1.1, L1]

3.1 The order assumption excludes the one- and two-vertex degeneracies, and steps 1.1 and 2.1 prove both directions. [step 1.1, step 2.1] ∎

