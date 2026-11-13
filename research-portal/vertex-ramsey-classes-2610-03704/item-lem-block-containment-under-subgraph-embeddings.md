---
title: Block containment and monotonicity under subgraphs
status: published
research_item: lem-block-containment-under-subgraph-embeddings
dependency_level: 1
---

## Prerequisites

- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)


## Statement

Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph. If nonempty finite simple graphs $J$ and $L$ admit an ordinary embedding of $J$ in $L$, then $b(J)\leq b(L)$. In particular, a 2-connected graph with more than $b(L)$ vertices cannot occur as a subgraph of $L$.

Here 2-connected means having at least three vertices, being connected, and remaining connected after deletion of any one vertex. Maximality is with respect to subgraph containment. The nontrivial blocks of a graph are its maximal 2-connected subgraphs and its bridge-edge subgraphs; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $b$ is the largest order, meaning number of vertices, of a nontrivial block; for an edgeless nonempty graph it is $1$. An ordinary embedding is an injective vertex map that preserves edges, with extra edges allowed in the target.

## Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

[F1] A finite simple graph has finitely many subgraphs; its edges have two distinct endpoints. A subgraph has subsets of the ambient graph's vertices and edges. [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F2] An ordinary embedding is an isomorphism onto the subgraph formed by its image vertices and image edges. [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[F3] Vertices lie in the same component exactly when a path joins them. A simple cycle has at least three distinct vertices and deleting any vertex leaves a connected path on the remaining vertices. Deleting an edge removes that edge, while deleting a vertex also removes its incident edges. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

[F4] A bridge is an edge whose deletion increases the component count. The nontrivial blocks and the parameter $b$ have the meanings stated above; their finite maximum exists when there is an edge. [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Proof

**Given:** A finite simple graph $L$, and, for the monotonicity claim, a nonempty finite simple graph $J$ with an ordinary embedding $f$ into nonempty $L$.

**Goal:** Establish maximal containment and the stated inequalities.

1.1 Let $C$ be a 2-connected subgraph of $L$. The finite, nonempty family of 2-connected subgraphs of $L$ containing $C$ has a member $M$ maximal under subgraph containment: otherwise a strictly increasing chain could be extended indefinitely within that finite family. Any 2-connected subgraph properly containing $M$ would also contain $C$, so $M$ is maximal among all 2-connected subgraphs of $L$. [F1, F4]

2.1 Every edge $e=uv$ of $L$ lies in a nontrivial block. If $e$ is a bridge, its endpoint subgraph is such a block. Otherwise $u$ and $v$ remain in the same component of $L-e$: if they were in different components, adding $e$ back would merge exactly their two components and deletion of $e$ would increase the component count. A path from $u$ to $v$ in $L-e$, together with $e$, forms a simple cycle. This cycle is 2-connected, so step 1.1 puts it, and hence $e$, in a maximal 2-connected subgraph of $L$. [F1, F3, F4, step 1.1]

3.1 If $J$ is edgeless, then $b(J)=1\leq b(L)$: the right side is $1$ when $L$ is edgeless and at least $2$ otherwise, by step 2.1. Suppose instead that $J$ has an edge, and choose a nontrivial block $B$ of order $b(J)$. If $B$ is 2-connected, its image under $f$ is a 2-connected subgraph of $L$: the isomorphism preserves paths and vertex deletion, so connectivity and connectivity after each vertex deletion are preserved. By step 1.1 its image lies in a nontrivial block of $L$. If $B$ is a bridge-edge subgraph of $J$, its image edge lies in a nontrivial block of $L$ by step 2.1, whether or not that image edge is a bridge in $L$. In either case injectivity gives $|V(B)|\leq b(L)$, proving $b(J)\leq b(L)$. [F2, F3, F4, step 1.1, step 2.1]

4.1 If a 2-connected graph occurs as a subgraph of $L$, step 1.1 contains it in a maximal 2-connected subgraph of $L$. Its order is therefore at most $b(L)$, proving the final assertion. [F4, step 1.1] ∎
