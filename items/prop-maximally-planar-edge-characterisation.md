---
id: prop-maximally-planar-edge-characterisation
kind: proposition
title: "For a planar graph of order at least three, maximal planarity is equivalent to having $3n-6$ edges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-maximal-plane-and-maximally-planar-graph, prop-maximal-plane-triangulation-characterisation, cor-planar-simple-graph-edge-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a simple planar graph with $n\ge3$ vertices. Then $G$ is maximally planar in the sense of [[def-maximal-plane-and-maximally-planar-graph]] if and only if it has exactly $3n-6$ edges.

## Facts & Assumptions

**Given:** Such a planar graph $G$.

[L1] Every simple planar graph with $n\ge3$ vertices has at most $3n-6$ edges, with equality for a triangulation ([[cor-planar-simple-graph-edge-bound]]).

[L2] A plane graph of order at least three is maximal exactly when every face is triangular ([[prop-maximal-plane-triangulation-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is maximally planar, every plane embedding is maximal: otherwise an edge added in that embedding would give a larger planar abstract graph. By [L2] it is a triangulation, and [L1] gives $|E(G)|=3n-6$. [L1, L2]

2.1 Conversely, if $|E(G)|=3n-6$ and a missing edge could be added planarly, the resulting simple planar graph on the same $n$ vertices would have $3n-5$ edges, contradicting [L1]. Thus $G$ is maximally planar. [step 1.1, L1]

3.1 The two implications prove the equivalence for every $n\ge3$. [step 1.1, step 2.1] ∎
