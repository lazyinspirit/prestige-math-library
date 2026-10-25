---
id: cor-k-five-and-k-three-three-are-nonplanar
kind: corollary
title: "$K_5$ and $K_{3,3}$ are nonplanar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-simple-graph-edge-bound, cor-triangle-free-planar-edge-bound, def-standard-complete-bipartite-path-and-cycle-graphs, cor-complete-graph-edge-count, thm-handshake-lemma-for-finite-simple-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Corollary 4.2.11"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activities 295-296"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

The complete graph $K_5$ and complete bipartite graph $K_{3,3}$ of [[def-standard-complete-bipartite-path-and-cycle-graphs]] are nonplanar.

## Facts & Assumptions

**Given:** The two finite simple graphs $K_5$ and $K_{3,3}$; their degrees may also be counted with [[thm-handshake-lemma-for-finite-simple-graphs]].

[L1] The complete graph $K_V$ on $n$ vertices has exactly $\binom n2$ edges ([[cor-complete-graph-edge-count]]).

[L2] Every simple planar graph with $n\ge3$ vertices has at most $3n-6$ edges ([[cor-planar-simple-graph-edge-bound]]).

[L3] Every triangle-free simple planar graph with $n\ge3$ vertices has at most $2n-4$ edges ([[cor-triangle-free-planar-edge-bound]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $K_5$ has $\binom52=10$ edges, but [L2] would permit at most $3\cdot5-6=9$ in a planar graph. Hence $K_5$ is nonplanar. [L1, L2, algebra]

2.1 The graph $K_{3,3}$ has six vertices and nine edges. It is triangle-free because a closed walk alternates between its two parts and therefore has even length. A planar embedding would contradict [L3], whose bound is $2\cdot6-4=8$. [step 1.1, L3, algebra] ∎

