---
id: cex-k-three-three-satisfies-the-planar-edge-bound
kind: counterexample
title: "$K_{3,3}$ satisfies $|E|\\le3|V|-6$ but is nonplanar, so the planar edge bound is not sufficient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-simple-graph-edge-bound, cor-k-five-and-k-three-three-are-nonplanar, def-standard-complete-bipartite-path-and-cycle-graphs, thm-handshake-lemma-for-finite-simple-graphs]
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
    - title: "R. Diestel, Graph Theory, 6th ed., Corollary 4.2.11"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement refuted

Every finite simple graph with $n\ge3$ vertices and at most $3n-6$ edges is planar.

## Facts & Assumptions

**Given:** The complete bipartite graph $K_{3,3}$ of [[def-standard-complete-bipartite-path-and-cycle-graphs]].

[L1] Every simple planar graph with $n\ge3$ vertices has at most $3n-6$ edges ([[cor-planar-simple-graph-edge-bound]]).

[L2] The graph $K_{3,3}$ is nonplanar ([[cor-k-five-and-k-three-three-are-nonplanar]]).

## Counterexample

**Proof technique:** direct.

1.1 The two parts of $K_{3,3}$ contain three vertices each, so $|V|=6$. Every vertex in either part is adjacent to all three vertices of the other part, giving $|E|=3\cdot3=9$; equivalently this follows from [[thm-handshake-lemma-for-finite-simple-graphs]]. Consequently $9\le3\cdot6-6=12$, so the necessary inequality in [L1] holds. [L1, algebra]

2.1 Nevertheless [L2] says that this graph is nonplanar. Hence satisfying the planar simple-graph edge bound does not suffice for planarity. [L2, step 1.1] ∎
