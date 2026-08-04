---
id: thm-connected-iff-has-spanning-tree
kind: theorem
title: "A finite graph is connected if and only if it has a spanning tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-spanning-tree, lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement

A finite graph $G$ is connected if and only if it has a spanning tree.

## Facts & Assumptions

**Given:** A finite graph $G$.

[L1] Every maximal acyclic spanning subgraph of a connected graph is a spanning tree ([[lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree]]).

[F1] A spanning tree is a connected spanning subgraph ([[def-spanning-tree]]).

[F2] A finite graph has only finitely many edge subsets, so the family of acyclic spanning subgraphs has a maximal member.

[F3] A graph is connected when every two vertices are joined by a path ([[def-connected-graph-and-connected-component]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is connected, choose a maximal acyclic spanning subgraph $F$; the edgeless spanning subgraph shows that the choice family is nonempty. [F2]

2.1 By L1, $F$ is a spanning tree of $G$. [step 1.1, L1]

3.1 Conversely, if $G$ has a spanning tree $T$, every two vertices are joined by a path in $T$, hence by a path in $G$. Thus $G$ is connected. [F1, F3] ∎
