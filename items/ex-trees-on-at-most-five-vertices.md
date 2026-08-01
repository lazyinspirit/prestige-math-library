---
id: ex-trees-on-at-most-five-vertices
kind: example
title: "The isomorphism types of trees on at most five vertices"
status: published
origin: session
deps: [thm-tree-characterisations, cor-tree-edge-count, cor-nontrivial-tree-has-two-leaves, thm-handshake-lemma-for-finite-simple-graphs, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

## Statement

Up to isomorphism, the numbers of trees on $1,2,3,4,5$ vertices are respectively $1,1,1,2,3$. Representatives are

$$K_1;\quad K_2;\quad P_3;\quad P_4,K_{1,3};\quad P_5,K_{1,4},\text{ and the tree with degree sequence }(3,2,1,1,1).$$

## Facts & Assumptions

**Given:** A tree $T$ on at most five vertices.

[L1] A tree on $n$ vertices has $n-1$ edges and, for $n\ge2$, at least two leaves ([[cor-tree-edge-count]], [[cor-nontrivial-tree-has-two-leaves]]).

[L2] The sum of degrees is twice the number of edges ([[thm-handshake-lemma-for-finite-simple-graphs]]).

[F1] Isomorphisms preserve degrees ([[def-graph-isomorphism-and-complement]]).

[F2] $K_n$, $K_{1,n}$ and $P_n$ have their standard edge sets ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** cases by $n$ and maximum degree.

1.1 In the case $n\le3$, connectedness and the edge count force $K_1,K_2,P_3$, respectively. [assume-case small, L1, F2]

1.2 In the case $n=4$, maximum degree two forces the connected acyclic graph $P_4$, while maximum degree three forces $K_{1,3}$. These degree sequences differ, so the two are nonisomorphic. [assume-case four, L1, L2, F1]

1.3 In the case $n=5$, maximum degree two gives $P_5$, maximum degree four gives $K_{1,4}$, and maximum degree three forces degree sequence $(3,2,1,1,1)$ by the degree sum $8$. [assume-case five, L1, L2]

2.1 Each displayed degree sequence determines the indicated tree: attach all remaining vertices to the unique high-degree vertex, with the degree-two vertex extending one arm in the third case. [step 1.3, L1]

3.1 The representatives in each row have different degree sequences, so they are pairwise nonisomorphic and the list is complete. [step 1.1, step 1.2, step 1.3, step 2.1, F1, cases-exhaustive] ∎
