---
id: lem-author-3d61151c342f-unique-edge-block
kind: lemma
title: Every edge belongs to exactly one nontrivial block
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-cutvertex-and-nontrivial-block-system
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-connected-graph-and-connected-component
  - math:def-graph-deletion-contraction-minor-and-subdivision
  - math:def-bridge-in-a-graph
  - lem-author-3d61151c342f-overlapping-two-connected-union
  - lem-author-3d61151c342f-finite-maximal-extension
  - lem-author-3d61151c342f-nonbridge-cycle
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
dependency_roles:
  def-cutvertex-and-nontrivial-block-system: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
  math:def-bridge-in-a-graph: mathematical-premise
  lem-author-3d61151c342f-overlapping-two-connected-union: mathematical-premise
  lem-author-3d61151c342f-finite-maximal-extension: mathematical-premise
  lem-author-3d61151c342f-nonbridge-cycle: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement

In a finite connected simple graph with an edge, every edge belongs to exactly one nontrivial block.

## Facts & Assumptions

[F1] Nontrivial blocks are maximal 2-connected subgraphs and bridge endpoint subgraphs. In a 2-connected graph deletion of any vertex leaves a connected graph with at least two vertices. [[def-cutvertex-and-nontrivial-block-system]]

[F2] Paths join vertices in a connected graph, deletion removes the specified vertices or edges, and a bridge is an edge whose deletion disconnects its component. [[math:def-graph-walk-trail-path-and-cycle]] [[math:def-connected-graph-and-connected-component]] [[math:def-graph-deletion-contraction-minor-and-subdivision]] [[math:def-bridge-in-a-graph]]

[F3] Two 2-connected subgraphs sharing two vertices have 2-connected union, and every 2-connected subgraph has a maximal 2-connected extension in a finite graph. [[lem-author-3d61151c342f-overlapping-two-connected-union]] [[lem-author-3d61151c342f-finite-maximal-extension]]

[F4] Every nonbridge edge of a finite connected simple graph lies on a 2-connected cycle. [[lem-author-3d61151c342f-nonbridge-cycle]]

[F5] A finite simple graph has a finite vertex set and an edge set of two-element subsets of it, so each edge has two distinct endpoints. A subgraph has a subset of the ambient vertices and a subset of the ambient edges, with both endpoints of every retained edge retained. [[math:def-finite-simple-graph]] [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

## Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 No edge $uv$ of a 2-connected subgraph $H$ can be a bridge of the ambient graph. Indeed $u$ has a neighbor $w$ in $H$ distinct from $v$: otherwise deleting $v$ isolates $u$ from a third vertex. A path from $w$ to $v$ in $H-u$, preceded by $uw$, is a path from $u$ to $v$ avoiding $uv$. Any path using $uv$ can replace it by this alternative walk; erasing portions between repeated vertices gives a path. Deleting $uv$ therefore cannot disconnect any pair formerly joined. [F1, F2, F5]

2.1 If an edge is a bridge, its endpoint subgraph is a nontrivial block and step 1.1 excludes every 2-connected block containing it; no other bridge endpoint subgraph contains that edge. If it is not a bridge, the cycle lemma and maximal-extension lemma place it in a maximal 2-connected block. Two such blocks containing it share both endpoints; their 2-connected union forces them to coincide by maximality. Thus each edge belongs to exactly one block. [F1, F3, F4, F5, step 1.1] ∎
