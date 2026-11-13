---
id: lem-author-3d61151c342f-nonbridge-cycle
kind: lemma
title: Nonbridge edges lie on 2-connected cycles
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-cutvertex-and-nontrivial-block-system
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-connected-graph-and-connected-component
  - math:def-graph-deletion-contraction-minor-and-subdivision
  - math:def-bridge-in-a-graph
  - lem-author-3d61151c342f-cycle-two-connectivity
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
dependency_roles:
  def-cutvertex-and-nontrivial-block-system: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
  math:def-bridge-in-a-graph: mathematical-premise
  lem-author-3d61151c342f-cycle-two-connectivity: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

If an edge $uv$ of a finite connected simple graph $J$ is not a bridge, it lies on a simple cycle, and that cycle subgraph is 2-connected.

## Facts & Assumptions

[F1] Deleting an edge removes just that edge; a bridge is an edge whose deletion increases the number of connected components. [[math:def-graph-deletion-contraction-minor-and-subdivision]] [[math:def-bridge-in-a-graph]]

[F2] In a connected graph any two vertices can be joined by a path, whose vertices are distinct; a cycle closes such a path with one additional edge and has length at least three. [[math:def-connected-graph-and-connected-component]] [[math:def-graph-walk-trail-path-and-cycle]]

[F3] The subgraph consisting of a simple cycle is 2-connected, with 2-connectivity understood in the nontrivial block convention. [[lem-author-3d61151c342f-cycle-two-connectivity]] [[def-cutvertex-and-nontrivial-block-system]]

[F4] Every edge of a finite simple graph has two distinct endpoints, and each unordered pair of vertices occurs as at most one edge. [[math:def-finite-simple-graph]]

[F5] A subgraph is specified by a subset of the vertices and a subset of the edges whose endpoints lie in that vertex subset. [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

## Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Since $J$ is connected and $uv$ is not a bridge, $J-uv$ still has one connected component. Choose a $u$ to $v$ path in $J-uv$. Its length is at least two, because the graph is simple and the edge $uv$ was deleted. [F1, F2, F4]

2.1 Closing this path with $uv$ gives a simple cycle containing that edge. The cycle subgraph is 2-connected by the cycle lemma. [F2, F3, F5, step 1.1] ∎
