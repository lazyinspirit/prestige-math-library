---
title: Avoidance using separated palettes and anticomplete attachments
status: published
research_item: lem-avoiding-connected-targets-in-separate-palette-parts
dependency_level: 2
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [lem-connected-subgraphs-in-anticomplete-parts](item-lem-connected-subgraphs-in-anticomplete-parts)


## Statement

Let $G$ and $J$ be finite simple graphs, with $J$ nonempty and connected. Suppose $V(G)$ is the disjoint union of a base set $B$ and attachment sets $P_t$, and no edge of $G$ joins distinct attachment sets. Let $c$ be a finite vertex colouring such that every vertex of $B$ has one fixed colour and every vertex in an attachment set has a different colour from that fixed colour. If $G[B]$ contains no induced copy of $J$ and each coloured $G[P_t]$ contains no monochromatic induced copy of $J$, then the coloured graph $G$ contains no monochromatic induced copy of $J$. Edges between $B$ and the attachment sets are unrestricted.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

## Facts & Assumptions

[F1] A finite simple graph has a finite vertex set and edges that are two-element subsets of it. For a vertex subset $S$, the induced subgraph $G[S]$ has vertex set $S$ and precisely the edges of $G$ with both endpoints in $S$. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A connected graph is nonempty and any two of its vertices are joined by a path, a finite list of distinct vertices with consecutive vertices adjacent. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F3] An induced embedding is an injective vertex map preserving and reflecting adjacency; its image induces a copy of the source graph. An edge-preserving injective map also gives a subgraph on its image vertices and image edges. [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy) [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[F4] A finite colouring assigns one colour to each vertex. A vertex set is monochromatic when all its vertices receive the same colour. [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[F5] If a graph's vertices are partitioned into parts with no edges between distinct parts, every connected subgraph has all its vertices in one part. [lem-connected-subgraphs-in-anticomplete-parts](item-lem-connected-subgraphs-in-anticomplete-parts)

## Proof

**Given:** The graphs, partition, colouring and avoidance hypotheses in the statement.

**Goal:** Show that $G$ has no monochromatic induced copy of $J$.

1.1 Suppose that an induced embedding $f$ of $J$ into $G$ has monochromatic image $X$. Since $J$ is nonempty, choose a vertex of $X$. If its colour is the fixed base colour, every vertex of $X$ has that colour and therefore lies in $B$. The same map is then an induced embedding into $G[B]$, because $G[B]$ retains exactly the ambient edges between vertices of $B$. This contradicts the assumed absence of an induced $J$ in $G[B]$. [given, F1, F3, F4]

2.1 Otherwise the common colour differs from the base colour, so $X$ is contained in the union $A$ of the attachment sets. The image vertices and image edges of $J$ form a connected subgraph of $G[A]$: images of paths in $J$ are paths because $f$ is injective and preserves edges. The nonempty attachment sets partition $A$, and no edge of $G[A]$ joins distinct parts. By the locality fact, $X$ lies in one $P_t$. The map $f$ is then an induced embedding into $G[P_t]$, and its image is monochromatic, contrary to the avoidance hypothesis for that attachment. Both possible colours lead to contradictions, so no such copy exists. [given, F1, F2, F3, F4, F5, step 1.1] ∎
