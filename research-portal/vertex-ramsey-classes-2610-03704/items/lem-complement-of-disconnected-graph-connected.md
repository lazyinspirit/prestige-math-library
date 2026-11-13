---
id: lem-complement-of-disconnected-graph-connected
kind: lemma
title: Complement of a disconnected graph is connected
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-connected-graph-and-connected-component
  - math:cor-connected-components-partition-the-vertex-set
  - math:def-graph-isomorphism-and-complement
  - math:def-graph-walk-trail-path-and-cycle
dependency_roles:
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:cor-connected-components-partition-the-vertex-set: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, final paragraph
      statement: The authors reduce the case where both graphs are disconnected to the
        case where both are connected by complementation.
      hypotheses: The reduction occurs under the assumptions in the proof of Theorem
        1.1; the article assumes graphs have at least one vertex.
      reading_limits: The frozen article text was read at the cited passage. The
        reference attributes the context of the implicit connectivity fact; it
        is not a premise of the proof below.
dependency_level: 0
---

## Statement

Let $G$ be a finite simple graph with at least two distinct connected components. Then its complement $\overline G$ is connected. A connected component is the induced subgraph on the vertices reachable by paths from a given vertex; a graph is connected when it is nonempty and every two of its vertices are joined by a path. The complement has the same vertex set as $G$ and has an edge between distinct vertices exactly when $G$ does not.

## Statement references

[[math:def-finite-simple-graph]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-connected-graph-and-connected-component]]

[[math:cor-connected-components-partition-the-vertex-set]]

[[math:def-graph-isomorphism-and-complement]]

[[math:def-graph-walk-trail-path-and-cycle]]

## Facts & Assumptions

**Given:** A finite simple graph $G$ with at least two distinct connected components.

**Goal:** Prove that $\overline G$ is connected.

[F1] The component vertex sets are nonempty, partition $V(G)$, and consist of the vertices reachable by paths from their defining vertices ([[math:def-connected-graph-and-connected-component]], [[math:cor-connected-components-partition-the-vertex-set]]).

[F2] The complement has vertex set $V(G)$; distinct vertices are adjacent in it exactly when they are not adjacent in $G$ ([[math:def-graph-isomorphism-and-complement]], [[math:def-finite-simple-graph]]).

[F3] A path is a vertex list with distinct vertices and consecutive vertices adjacent. A single vertex is a path of length zero ([[math:def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Vertices in distinct components cannot be adjacent in $G$: an edge between them would be a path of length one, making them reachable from one another and hence members of the same component. Thus every pair of vertices in distinct components is adjacent in $\overline G$. [F1, F2, F3]

2.1 Let $x,y\in V(G)$. If $x=y$, the length-zero path joins them in $\overline G$. If they lie in distinct components, their complement edge is a path joining them. If they are distinct and lie in the same component, choose a vertex $z$ in a different component, which exists and is nonempty. Then $x,z,y$ are distinct and both consecutive pairs are complement edges, so $(x,z,y)$ is a path in $\overline G$. [given, F1, F3, step 1.1]

3.1 The vertex set of $\overline G$ is nonempty, since $G$ has a nonempty component, and every two of its vertices are joined by a path by step 2.1. Therefore $\overline G$ is connected. [F1, F2, step 2.1] ∎

## Source notes

The article's complementation reduction uses this connectivity fact implicitly. The proof above is a local argument from the stated definitions and component partition, not a proof imported from the article.
