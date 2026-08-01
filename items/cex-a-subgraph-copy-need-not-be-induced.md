---
id: cex-a-subgraph-copy-need-not-be-induced
kind: counterexample
title: "$K_3$ contains $P_3$ as a subgraph but not as an induced subgraph"
status: published
origin: session
deps: [def-induced-embedding-and-induced-copy, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Statement refuted

Every ordinary subgraph copy of $H$ in $G$ is an induced copy.

## Facts & Assumptions

**Given:** The graphs $P_3$ and $K_3$.

[F1] Deleting one edge from $K_3$ leaves a spanning subgraph isomorphic to $P_3$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] An induced embedding must preserve both adjacency and nonadjacency ([[def-induced-embedding-and-induced-copy]]).

## Counterexample

**Proof technique:** direct.

1.1 By deleting one triangle edge, $K_3$ contains an ordinary subgraph copy of $P_3$. [F1]

1.2 Any injection from the three vertices of $P_3$ to the three vertices of $K_3$ is bijective, but the two endpoints of $P_3$ are nonadjacent while their images in $K_3$ are adjacent. [F2]

2.1 Thus $K_3$ contains no induced $P_3$, despite containing an ordinary subgraph copy. [step 1.1, step 1.2] ∎
