---
id: lem-independent-deletion-leaves-a-vertex
kind: lemma
title: Nonempty remainder after deleting an independent set
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-clique-and-independence-numbers
  - math:def-graph-deletion-contraction-minor-and-subdivision
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-finite-cardinality
  - math:thm-subset-of-a-finite-set
  - def-cutvertex-and-nontrivial-block-system
dependency_roles:
  math:def-clique-and-independence-numbers: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  def-cutvertex-and-nontrivial-block-system: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

If a finite simple graph $J$ has an edge and $I\subseteq V(J)$ is independent, then $V(J)\setminus I$ is nonempty. Its induced graph is finite. If this remainder has an edge, its maximum nontrivial block order is at least two.

An independent set contains no edge with both endpoints in it. The induced graph on $V(J)\setminus I$, also written $J-I$, has that vertex set and precisely the edges of $J$ with both endpoints in it. A nontrivial block is either a maximal 2-connected subgraph or a bridge together with its two endpoints; 2-connected graphs have at least three vertices. The order of a graph is its number of vertices.

## Facts & Assumptions

[F1] Every edge of a simple graph has two distinct endpoints. An independent set contains no edge with both endpoints in it. [[math:def-finite-simple-graph]] [[math:def-clique-and-independence-numbers]]

[F2] A subset of a finite set is finite. Vertex deletion produces the induced graph on the remaining vertices, whose edges are those of the original graph with both endpoints remaining. [[math:thm-subset-of-a-finite-set]] [[math:def-graph-deletion-contraction-minor-and-subdivision]] [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[F3] A nonempty finite graph with an edge has at least one nontrivial block, and its maximum block order exists. Each nontrivial block is either 2-connected with at least three vertices or a bridge-edge subgraph with two vertices. Graph order is the finite cardinality of the vertex set. [[def-cutvertex-and-nontrivial-block-system]] [[math:def-finite-cardinality]]

## Proof

**Given:** A finite simple graph $J$ with an edge and an independent set $I\subseteq V(J)$.

**Goal:** Prove that $J-I$ is nonempty and finite, and that its maximum nontrivial block order is at least two if it has an edge.

1.1 Choose an edge $uv$ of $J$. Its endpoints are distinct and cannot both belong to $I$, so at least one belongs to $V(J)\setminus I$. This set is a subset of the finite set $V(J)$ and is therefore finite. Consequently $J-I$, the induced graph on it, is a nonempty finite simple graph. [F1, F2, given]

2.1 If $J-I$ has an edge, its nontrivial block family is nonempty and has a maximum order. Every member has at least two vertices, whether it is 2-connected or a bridge-edge subgraph. Therefore the maximum order is at least two. This proves all the assertions. [F3, step 1.1] ∎
