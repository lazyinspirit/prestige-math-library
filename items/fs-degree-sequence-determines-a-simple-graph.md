---
id: fs-degree-sequence-determines-a-simple-graph
kind: false-statement
title: "FALSE: a finite simple graph is determined up to isomorphism by its degree sequence"
status: published
origin: session
deps: [def-graph-isomorphism-and-complement, def-graph-adjacency-incidence-neighbourhood-and-degree, def-standard-complete-bipartite-path-and-cycle-graphs]
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

## Statement

**FALSE.** A finite simple graph is determined up to isomorphism by its degree
sequence.

## Facts & Assumptions

**Given:** The cycle graph $C_6$ and the graph $H$ that is the disjoint union of two copies of $C_3$.

[F1] $C_n$ has $n$ vertices arranged in one cycle for $n\ge3$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A graph isomorphism is a bijection preserving adjacency in both directions, and therefore sends cycles to cycles of the same length ([[def-graph-isomorphism-and-complement]]).

[F3] The degree sequence records the multiset of vertex degrees ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Refutation

**Proof technique:** direct.

1.1 Every vertex of $C_6$ has degree $2$. Every vertex of $H$ lies on one of its two triangles and also has degree $2$. Thus both degree sequences are $(2,2,2,2,2,2)$. [given, F1, F3]

1.2 The graph $H$ contains a cycle of length $3$, namely either triangle, whereas $C_6$ contains no triangle because its only edges join consecutive vertices on its six-cycle. [given, F1]

2.1 If $C_6\cong H$, [F2] would carry a triangle of $H$ to a triangle of $C_6$, contradicting step 1.2. Hence the graphs have the same degree sequence but are not isomorphic, refuting the claim. [step 1.1, step 1.2, F2] ∎
