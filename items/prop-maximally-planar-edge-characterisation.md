---
id: prop-maximally-planar-edge-characterisation
kind: proposition
title: "For a two-connected planar graph of order at least three, maximal planarity is equivalent to having $3n-6$ edges"
status: published
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
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a simple planar graph with $n\ge3$ vertices. If $G$ has exactly
$3n-6$ edges, then $G$ is maximally planar in the sense of
[[def-maximal-plane-and-maximally-planar-graph]]. Conversely, if $G$ is
**two-connected** and maximally planar, then $G$ has exactly $3n-6$ edges. The
two conditions are therefore equivalent for two-connected $G$. Two-connectivity
is used only through [[prop-maximal-plane-triangulation-characterisation]],
which needs a facial boundary to be a cycle; the converse without that
hypothesis is not established here.

## Facts & Assumptions

**Given:** Such a planar graph $G$.

[L1] Every simple planar graph with $n\ge3$ vertices and $m$ edges satisfies $m\le3n-6$. Every plane triangulation with at least three vertices has equality ([[cor-planar-simple-graph-edge-bound]]).

[L2] A two-connected plane graph of order at least three is maximal exactly when every face is triangular ([[prop-maximal-plane-triangulation-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ be two-connected and maximally planar. Every plane embedding of $G$ is maximal plane: otherwise an edge added in that embedding would give a larger planar abstract graph. That embedding is a two-connected plane graph, because two-connectivity is a property of the abstract graph, so [L2] makes it a triangulation and [L1] gives $|E(G)|=3n-6$. [L1, L2]

2.1 Conversely, if $|E(G)|=3n-6$ and a missing edge could be added planarly, the resulting simple planar graph on the same $n$ vertices would have $3n-5$ edges, contradicting [L1]. Thus $G$ is maximally planar. [step 1.1, L1]

3.1 Step 2.1 holds for every $n\ge3$, and step 1.1 supplies the converse whenever $G$ is two-connected, so the two conditions are equivalent there. [step 1.1, step 2.1] ∎
