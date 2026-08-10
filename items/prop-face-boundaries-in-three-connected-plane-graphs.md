---
id: prop-face-boundaries-in-three-connected-plane-graphs
kind: proposition
title: "In a three-connected plane graph, face boundaries are exactly the induced cycles whose deletion leaves the graph connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-face-boundaries-in-two-connected-plane-graphs, cor-whitney-k-connected-path-characterisation, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a three-connected plane graph. A subgraph $C$ is the boundary of a face if and only if $C$ is an induced cycle ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]) and $G-V(C)$ is connected or empty ([[def-graph-deletion-contraction-minor-and-subdivision]]).

## Facts & Assumptions

**Given:** A three-connected plane graph $G$ and a cycle $C$.

[L1] Every face of a two-connected plane graph is bounded by a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]).

[L2] In a three-connected graph, every two distinct vertices are joined by at least three internally vertex-disjoint paths ([[cor-whitney-k-connected-path-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 A facial boundary is a cycle by [L1]. It has no chord: a chord and three internally disjoint paths supplied by [L2] would force two disjoint arcs to cross on the nonfacial side. Moreover any two vertices outside the facial cycle have three internally disjoint connecting paths; at most two can meet the cycle in the two arcs bounding the face, so one avoids the cycle. Hence $G-V(C)$ is connected when nonempty. [L1, L2]

2.1 Conversely, an induced cycle has two polygonal sides. If it is not facial, each side contains a point of the drawing. Because $G-V(C)$ is connected, a path in $G-V(C)$ joins graph material from the two sides, but every such plane path must cross $C$. This contradicts the plane embedding. [step 1.1, L2]

3.1 Step 1.1 proves the forward implication and step 2.1 the reverse. If $C$ is spanning, deletion leaves the empty graph and one of its two sides contains no drawing, so the same reverse argument makes that side a face. [step 1.1, step 2.1, L2] ∎

