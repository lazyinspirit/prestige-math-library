---
id: lem-connected-subgraphs-in-anticomplete-parts
kind: lemma
title: Connected subgraphs cannot cross anticomplete parts
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-set-partition-and-block
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-connected-graph-and-connected-component
  - math:def-graph-walk-trail-path-and-cycle
  - def-tagged-finite-graph-family
  - def-ordinary-edge-preserving-embedding
  - math:def-induced-embedding-and-induced-copy
dependency_roles:
  math:def-set-partition-and-block: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  def-tagged-finite-graph-family: mathematical-premise
  def-ordinary-edge-preserving-embedding: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $G$ be a finite simple graph whose vertex set is partitioned into parts such that no edge joins vertices in distinct parts. Every connected subgraph of $G$ has all its vertices in one part. In particular, the image of a connected graph under an ordinary or induced embedding into a disjoint graph family lies in one tagged part.

## Facts & Assumptions

[F1] A finite simple graph has a finite vertex set and edges that are two-element subsets of it. A subgraph has a subset of the vertices and a subset of the edges of its ambient graph. [[math:def-finite-simple-graph]] [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[F2] A connected graph is nonempty and every two of its vertices are joined by a path. A path is a finite list of distinct vertices whose consecutive pairs are edges; a one-vertex list is allowed. [[math:def-connected-graph-and-connected-component]] [[math:def-graph-walk-trail-path-and-cycle]]

[F3] The disjoint graph family has pairwise disjoint tagged parts covering its vertices, and no edge joins distinct tagged parts. [[def-tagged-finite-graph-family]]

[F4] An ordinary embedding is an injective vertex map preserving edges; its image vertices and image edges form a subgraph. An induced embedding is an ordinary embedding that also reflects edges. [[def-ordinary-edge-preserving-embedding]] [[math:def-induced-embedding-and-induced-copy]]

[F5] A set partition of a set is a family of nonempty, pairwise disjoint subsets whose union is that set. Thus each element belongs to exactly one block; the empty family partitions the empty set. [[math:def-set-partition-and-block]]

## Proof

**Given:** A graph $G$ with the stated partition and a connected subgraph $H$ of $G$.

**Goal:** Show that $V(H)$ lies in one part, and establish the embedding consequence.

1.1 Choose $u\in V(H)$ and let $P$ be the unique part containing $u$. For any $v\in V(H)$, connectivity gives a path $u=v_0,v_1,\ldots,v_m=v$ in $H$. Each consecutive pair is an edge of $G$. Starting with $v_0\in P$, each successive vertex must also belong to $P$: otherwise its edge from the preceding vertex would join distinct parts. Thus $v\in P$, including when $m=0$. Consequently $V(H)\subseteq P$. [given, F1, F2, F5]

2.1 For an ordinary embedding $f$ of a connected graph $J$ into a disjoint graph family, take the subgraph formed by its image vertices and image edges. It is connected: the image of a path in $J$ is a path in that subgraph, since $f$ is injective and preserves edges. The nonempty tagged parts are pairwise disjoint and still cover the vertex set of the disjoint graph family, so they form a set partition; deleting empty parts changes neither coverage nor the no-crossing-edge property. The image is nonempty because $J$ is connected. Applying step 1.1 to this partition puts $f(V(J))$ in one nonempty tagged part. An induced embedding is also an ordinary embedding, giving the same conclusion. [F2, F3, F4, F5, step 1.1] ∎
