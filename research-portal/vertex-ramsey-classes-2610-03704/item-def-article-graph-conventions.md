---
title: Graph and colouring conventions
status: draft
research_item: def-article-graph-conventions
dependency_level: 1
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Introduction, first paragraph; PDF p. 2, Section 3,
        complete-graph construction
      statement: The article assumes all graphs considered have at least one vertex,
        calls a subgraph isomorphic to H a copy of H, and uses vertex
        colourings, induced copies, and complete graphs.
      hypotheses: The conventions apply to the graphs and positive colour counts
        considered in the article.
      reading_limits: The frozen extracted article text was read at the cited
        passages. This reference attributes the article conventions; it is not a
        proof or an independent prerequisite.
---

PDF p. 1: ` Introduction, first paragraph `; PDF p. 2: ` Section 3, complete-graph construction `

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)


## Definition

For this treatment, a graph $H=(V(H),E(H))$ is a finite simple graph with at least one vertex: $V(H)$ is a nonempty finite set and $E(H)$ is a set of two-element subsets of $V(H)$. Two distinct vertices are adjacent when their two-element set is an edge, and are nonadjacent otherwise.

A subgraph $J$ of $G$ has $V(J)\subseteq V(G)$ and $E(J)\subseteq E(G)$. A graph isomorphism is a bijection between vertex sets that preserves and reflects adjacency. A copy of $H$ in $G$ is a subgraph of $G$ isomorphic to $H$; extra edges of $G$ between its vertices need not be edges of the copy. An induced copy is a copy whose edge set contains every edge of $G$ between its vertices, so both adjacency and nonadjacency agree with those in $H$.

For a positive integer $k$, a $k$-colouring of the vertices of $G$ is a function $c:V(G)\to\{1,\ldots,k\}$. It need not use every colour and adjacent vertices may have the same colour. A copy is monochromatic if $c$ has the same value at all its vertices.

For a positive integer $n$, $K_n$ denotes a complete graph on $n$ vertices, meaning that every two distinct vertices are adjacent. An edgeless graph is a graph whose edge set is empty.

## Justification

The finite-simple-graph convention specifies the vertex and edge sets and makes adjacency a definite condition. The subgraph and isomorphism definitions specify ordinary copies; equivalently, an edge-preserving injection gives a copy on its image vertices with its image edges. Requiring all host edges between those vertices gives the induced-subgraph condition, equivalently the adjacency-reflection condition for an induced embedding. The colouring supplier defines the function and monochromatic predicate without requiring surjectivity or proper colouring. The standard graph supplier specifies complete graphs and empty edge sets. Thus these conventions have definite meanings and are compatible with their suppliers.

## Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

## Extraction notes

The article explicitly imposes the nonempty-vertex convention and defines a copy as an isomorphic subgraph. Finiteness and simplicity are conventions of this treatment for the article's finite graph constructions; the cited passages do not separately state those axioms.
