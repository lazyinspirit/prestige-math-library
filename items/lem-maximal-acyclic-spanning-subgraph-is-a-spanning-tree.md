---
id: lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree
kind: lemma
title: "A maximal acyclic spanning subgraph of a connected graph is a spanning tree"
status: published
origin: session
deps: [def-spanning-tree, def-tree-forest-and-leaf, def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, lem-edge-addition-to-a-tree, cor-cardinality-of-the-power-set, def-finite-cardinality, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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

Let $G$ be a finite connected graph. If $F$ is an acyclic spanning subgraph of $G$ maximal under edge inclusion among such subgraphs, then $F$ is a spanning tree of $G$.

## Facts & Assumptions

**Given:** A connected graph $G$ and an edge-maximal acyclic spanning subgraph $F$.

[F1] The connected components of $F$ partition $V(G)$ ([[cor-connected-components-partition-the-vertex-set]]).

[F2] A spanning tree is a connected acyclic spanning subgraph ([[def-spanning-tree]], [[def-tree-forest-and-leaf]]).

[F3] Connectedness supplies a path between vertices ([[def-connected-graph-and-connected-component]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ is disconnected, and choose vertices $u,v$ in distinct components of $F$. [assume-contra, F1]

1.2 A $u$-$v$ path in $G$ has a first edge $xy$ whose endpoints lie in distinct components of $F$. [F3, F1]

2.1 Adding $xy$ to $F$ cannot create a cycle, because a cycle through $xy$ would contain an $x$-$y$ path already in $F$, contrary to the choice of distinct components. [step 1.2]

3.1 Thus $F+xy$ is a strictly larger acyclic spanning subgraph, contradicting maximality. [step 2.1]

4.1 Hence $F$ is connected, and therefore it is a spanning tree. [F2, discharge-contradiction] ∎
