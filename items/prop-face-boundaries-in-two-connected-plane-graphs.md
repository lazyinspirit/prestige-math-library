---
id: prop-face-boundaries-in-two-connected-plane-graphs
kind: proposition
title: "Every face of a two-connected plane graph is bounded by a cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-plane-edge-face-incidence, cor-whitney-k-connected-path-characterisation, def-vertex-and-edge-connectivity, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.6"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

In a two-connected plane graph ([[def-vertex-and-edge-connectivity]]), every facial boundary walk is a cycle ([[def-graph-walk-trail-path-and-cycle]]). Edge incidence is supplied by [[lem-plane-edge-face-incidence]].

## Facts & Assumptions

**Given:** A two-connected plane graph $G$ and a face $f$ with its closed boundary walk.

[L1] For $k\ge1$, a finite graph on at least $k+1$ vertices is $k$-connected if and only if every two distinct vertices are joined by at least $k$ internally vertex-disjoint paths ([[cor-whitney-k-connected-path-characterisation]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose the facial boundary walk repeats a vertex $v$ before returning to its start. The two portions between consecutive occurrences leave $v$ through different local sectors of the face. [assume-contra]

2.1 Vertices or edges incident with those two portions lie in different components of $G-v$: a path between them avoiding $v$ would, together with boundary subpaths, cross the face boundary in the plane. Thus $v$ is a cut vertex. [step 1.1]

3.1 By [L1], two-connectivity supplies two internally vertex-disjoint paths between vertices chosen on the two portions, so deletion of $v$ cannot separate them. This contradicts step 2.1. The boundary walk has no repeated vertex and is therefore a cycle. [step 2.1, L1, discharge-contradiction] ∎
