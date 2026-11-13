---
title: Ordinary embeddings as injections preserving edges
status: published
research_item: def-ordinary-edge-preserving-embedding
dependency_level: 0
---

## Prerequisites

- [math:def-function](https://alphabetamath.cc/item/def-function)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)


## Definition

Let $J$ and $G$ be finite simple graphs: each has a finite vertex set and a set of edges, each edge being a two-element subset of its vertex set. An **ordinary embedding** of $J$ in $G$ is a function $f:V(J)\to V(G)$ that is injective, meaning $f(x)=f(y)$ implies $x=y$, and preserves edges: if $\{x,y\}\in E(J)$, then $\{f(x),f(y)\}\in E(G)$.

An ordinary **copy** of $J$ in $G$ is a subgraph of $G$ isomorphic to $J$: its vertex and edge sets are subsets of those of $G$, and an isomorphism is a bijection of vertex sets preserving and reflecting edges. An ordinary embedding gives a copy on its image vertices using exactly its image edges; extra edges of $G$ between those vertices need not belong to the copy. Conversely, an isomorphism from $J$ to a subgraph of $G$ is an ordinary embedding into $G$.

An **induced embedding** additionally reflects edges: for distinct $x,y\in V(J)$, $\{f(x),f(y)\}\in E(G)$ implies $\{x,y\}\in E(J)$.

## Justification

The edge condition and injectivity ensure that every image edge is a two-element edge of $G$ on image vertices, so these vertices and edges form a subgraph. Regarded as a map from $V(J)$ onto its image, $f$ is bijective. It preserves edges by construction, and it reflects edges of this subgraph because each such edge is the image of an edge of $J$ and injectivity identifies its two preimages. Hence it is an isomorphism onto that subgraph. Conversely, the vertex bijection of an isomorphism onto a subgraph is injective into $V(G)$ and preserves edges in $G$, since every edge of the subgraph is an edge of $G$. Thus the definition agrees with the copy formulation. The additional reverse implication is precisely the edge-reflection condition in the definition of an induced embedding.
