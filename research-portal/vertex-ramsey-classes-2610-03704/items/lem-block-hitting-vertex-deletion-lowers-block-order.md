---
id: lem-block-hitting-vertex-deletion-lowers-block-order
kind: lemma
title: Block-hitting deletion lowers maximum block order
status: published
origin: pipeline
domain: mathematics
deps:
  - lem-block-containment-under-subgraph-embeddings
  - def-cutvertex-and-nontrivial-block-system
  - math:def-graph-deletion-contraction-minor-and-subdivision
  - math:def-finite-cardinality
  - math:def-connected-graph-and-connected-component
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-bridge-in-a-graph
  - math:thm-subset-of-a-finite-set
  - math:def-clique-and-independence-numbers
dependency_roles:
  lem-block-containment-under-subgraph-embeddings: mathematical-premise
  def-cutvertex-and-nontrivial-block-system: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-bridge-in-a-graph: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:def-clique-and-independence-numbers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $J$ be a finite connected simple graph with an edge, and let $S\subseteq V(J)$ meet the vertex set of every nontrivial block. If $J-S$ is nonempty, then $b(J-S)<b(J)$. Independence of $S$ is not required.

A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. A nontrivial block is either a maximal 2-connected subgraph or the two-vertex subgraph consisting of a bridge and its endpoints; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $b$ is the largest number of vertices in a nontrivial block; for an edgeless nonempty graph, $b=1$. The graph $J-S$ is obtained by deleting the vertices in $S$ and their incident edges.

## Statement references

[[def-cutvertex-and-nontrivial-block-system]]

[[math:def-graph-deletion-contraction-minor-and-subdivision]]

[[math:def-finite-cardinality]]

[[math:def-bridge-in-a-graph]]

[[math:def-clique-and-independence-numbers]]

## Facts & Assumptions

[F1] Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph. [[lem-block-containment-under-subgraph-embeddings]]

[F2] The block and $b$ conventions are those in the statement; in particular the maximum exists for a finite nonempty graph with an edge. [[def-cutvertex-and-nontrivial-block-system]] [[math:def-finite-cardinality]]

[F3] Vertex deletion leaves a subgraph on the undeleted vertices. Edge deletion removes only the specified edge. Vertices in the same component are joined by a path, and a path has distinct vertices. [[math:def-graph-deletion-contraction-minor-and-subdivision]] [[math:def-connected-graph-and-connected-component]] [[math:def-graph-walk-trail-path-and-cycle]]

[F4] A bridge is an edge whose deletion increases the number of components. [[math:def-bridge-in-a-graph]]

[F5] If $A$ is finite and $B$ is a proper subset of $A$, then $B$ is finite and $|B|<|A|$: the subset inequality holds and equality would force $B=A$. [[math:thm-subset-of-a-finite-set]]

[F6] A vertex set is independent when no two of its distinct vertices are adjacent. [[math:def-clique-and-independence-numbers]]

## Proof

**Given:** A finite connected simple graph $J$ with an edge, a set $S$ meeting every nontrivial block of $J$, and nonempty $H=J-S$.

**Goal:** Prove $b(H)<b(J)$.

1.1 Since $J$ has an edge, it has a nontrivial block and $b(J)\geq 2$. If $H$ is edgeless, then $b(H)=1<b(J)$, so assume that $H$ has an edge. Let $B$ be a nontrivial block of $H$ with $|V(B)|=b(H)$. [F2]

2.1 If $B$ is 2-connected, it is a 2-connected subgraph of $J$, hence lies in a maximal 2-connected subgraph $C$ of $J$. The set $S$ meets $V(C)$, while $V(B)$ is disjoint from $S$. Thus $V(B)$ is a proper subset of the finite set $V(C)$, and $b(H)=|V(B)|<|V(C)|\leq b(J)$. [F1, F2, F3, F5, step 1.1]

2.2 Otherwise $B$ consists of a bridge edge $e=uv$ of $H$ and its endpoints. The edge $e$ is not a bridge of $J$: if it were, its endpoint subgraph would be a nontrivial block of $J$ met by $S$, contrary to both endpoints surviving in $H$. Consequently $u$ and $v$ are connected in $J-e$; otherwise adding $e$ to $J-e$ would merge their distinct components, so deleting $e$ would increase the component count. A path from $u$ to $v$ in $J-e$, together with $e$, forms a simple cycle with at least three vertices. This cycle is 2-connected, since deleting any vertex leaves a connected path. By [F1] it lies in a maximal 2-connected subgraph $C$ of $J$. Therefore $b(H)=2<|V(C)|\leq b(J)$. [F1, F2, F3, F4, step 1.1]

3.1 The edgeless case and the two possible types of $B$ cover all cases, so $b(J-S)=b(H)<b(J)$. No step used independence of $S$. [F6, step 1.1, step 2.1, step 2.2] ∎
