---
id: cex-c6-and-two-triangles-share-a-degree-sequence
kind: counterexample
title: "$C_6$ and the disjoint union of two triangles have the same degree sequence but are not isomorphic"
status: published
origin: session
deps: [fs-degree-sequence-determines-a-simple-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement, def-connected-graph-and-connected-component]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement refuted

The false statement [[fs-degree-sequence-determines-a-simple-graph]] claims that
a finite simple graph is determined up to isomorphism by its degree sequence.

## Facts & Assumptions

**Given:** $G=C_6$ and $H=C_3\mathbin{\dot\cup}C_3$, the disjoint union of two triangles.

[F1] $C_n$ is the cycle graph on $n$ vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] Isomorphisms preserve adjacency and therefore preserve path-reachability and connectedness ([[def-graph-isomorphism-and-complement]], [[def-connected-graph-and-connected-component]]).

## Counterexample

**Proof technique:** direct.

1.1 Every vertex of $G$ lies on the six-cycle and has degree $2$. Every vertex of $H$ lies on one of its two triangles and has degree $2$. Thus both degree sequences are $(2,2,2,2,2,2)$. [given, F1]

1.2 The graph $G$ is connected, since either direction around the cycle gives a path between any two vertices. The graph $H$ is disconnected, since no edge joins its two triangles. [given, F1]

2.1 By [F2], connectedness is invariant under isomorphism, so $G\not\cong H$. They have the same degree sequence by step 1.1, which refutes the stated claim. [step 1.1, step 1.2, F2] ∎
