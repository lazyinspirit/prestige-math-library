---
title: Complementation transports induced copies on fixed vertices
status: draft
research_item: lem-complement-transports-induced-embeddings
dependency_level: 1
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:lem-complement-commutes-with-induced-subgraphs](https://alphabetamath.cc/item/lem-complement-commutes-with-induced-subgraphs)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)


## Statement

Let $J$ and $G$ be finite simple graphs. An injection $f:V(J)\to V(G)$ is an induced embedding of $J$ into $G$ if and only if it is an induced embedding of $\overline J$ into $\overline G$. For any fixed finite vertex-colouring of $G$, the same map and vertex set transport monochromatic induced copies in either direction between these two pairs of graphs. Complementation is an involution on finite simple graphs.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Facts & Assumptions

**Given:** Finite simple graphs $J$ and $G$, an injection $f:V(J)\to V(G)$, and a finite vertex-colouring $c$ of $G$.

**Goal:** Prove the embedding equivalence, the monochromatic-copy correspondence, and the complementation involution.

[F1] An induced embedding is an injection preserving and reflecting adjacency for every pair of distinct vertices; its image induces a copy of the domain graph ([math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F2] The complement has the same vertices, and a pair of distinct vertices is an edge of the complement exactly when it is not an edge of the original graph ([math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)).

[F3] A vertex-colouring is a function on the vertex set; a subset is monochromatic exactly when all its vertices have the same colour ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F4] For every vertex subset $W$ of $G$, $\overline{G[W]}=\overline G[W]$ ([math:lem-complement-commutes-with-induced-subgraphs](https://alphabetamath.cc/item/lem-complement-commutes-with-induced-subgraphs)).

[F5] A finite simple graph is determined by its vertex set and its set of edges, each of which is an unordered pair of distinct vertices ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)).

[F6] An injection $f:A\to B$ satisfies $f(x)=f(y)\Rightarrow x=y$ for $x,y\in A$; its image is $f[A]=\{f(x):x\in A\}$ ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F7] For $W\subseteq V(G)$, the induced subgraph is $G[W]=(W,E(G)\cap[W]^2)$, where $[W]^2$ is the set of unordered pairs of distinct vertices of $W$ ([math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)).

## Proof

**Proof technique:** direct.

1.1 Complementation leaves vertices fixed. For each distinct $x,y\in V(J)$, injectivity makes $f(x)$ and $f(y)$ distinct. If $f$ is induced from $J$ to $G$, then $xy\in E(\overline J)$ if and only if $xy\notin E(J)$, if and only if $f(x)f(y)\notin E(G)$, if and only if $f(x)f(y)\in E(\overline G)$. Thus $f$ is induced from $\overline J$ to $\overline G$. [given, F1, F2, F6]

2.1 For any finite simple graph, complementing twice leaves its vertex set fixed and restores membership of every pair of distinct vertices in its edge set. These are all possible edges, so the twice-complemented graph equals the original. Applying step 1.1 to $\overline J$ and $\overline G$ gives the converse embedding implication. [F2, F5, step 1.1]

3.1 Put $W=f(V(J))$. The equivalence above uses the same injection and image $W$ in both ambient graphs; moreover, $\overline{G[W]}=\overline G[W]$. The colouring $c$ has the same domain in $G$ and $\overline G$, so $W$ is monochromatic in one exactly when it is monochromatic in the other. Hence the corresponding induced copies are monochromatic together, completing all claims. [F1, F2, F3, F4, F6, F7, step 1.1, step 2.1] ∎
