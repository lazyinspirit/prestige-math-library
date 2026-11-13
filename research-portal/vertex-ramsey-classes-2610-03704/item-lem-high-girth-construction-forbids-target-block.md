---
title: Block exclusion in the high-girth base graph
status: draft
research_item: lem-high-girth-construction-forbids-target-block
dependency_level: 11
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning First, choice of B and A
      reading_limits: The frozen extracted article text at the cited passage was read.
        This is attribution-only bibliography, not an imported premise. The
        local proof uses the declared mathematical suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning First, choice of B and A `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-block-and-largest-block-order](item-def-block-and-largest-block-order)
- [lem-nonempty-remainder-block-bounds](item-lem-nonempty-remainder-block-bounds)
- [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)
- [def-induced-forbidden-class](item-def-induced-forbidden-class)
- [lem-small-two-connected-subgraphs-in-high-girth-realisations](item-lem-small-two-connected-subgraphs-in-high-girth-realisations)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)
- [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)


## Statement

Let $H_1,H_2$ be non-isomorphic finite connected simple graphs with edges, with $\beta(H_1)\geq\beta(H_2)$. Let $I$ be an independent set of $H_2$ for which $F=H_2-I$ has an edge and $\beta(F)<\beta(H_2)$. Here an independent set has no edge between two of its vertices, and $H_2-I$ is the graph induced on the remaining vertices.

A block is a maximal 2-connected subgraph or a bridge together with its endpoints. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $\beta$ is the largest number of vertices in a block, and for a nonempty edgeless graph it is $1$. Choose a block $B$ of $H_1$ of order $\beta(H_1)$, put $q=|E(B)|+2$, and let $A=G(F,q,k)$ be any graph obtained by Construction 1 for a positive integer $k$.

Then $A$ contains no ordinary copy of $B$. Consequently $A\in\operatorname{Forb}(B)$ and $A\in\operatorname{Forb}(H_1)$, where $\operatorname{Forb}(J)$ is the class of finite nonempty simple graphs with no induced copy of $J$.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-block-and-largest-block-order](item-def-block-and-largest-block-order)

[lem-nonempty-remainder-block-bounds](item-lem-nonempty-remainder-block-bounds)

[def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)

[def-induced-forbidden-class](item-def-induced-forbidden-class)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

## Facts & Assumptions

[F1] Under the stated hypotheses, $\beta(H_1)\geq3$, and no piece of Construction 1 obtained from $F$ contains an ordinary copy of $B$. A block of order at least three is 2-connected. [lem-nonempty-remainder-block-bounds](item-lem-nonempty-remainder-block-bounds) [def-block-and-largest-block-order](item-def-block-and-largest-block-order)

[F2] Construction 1 uses a finite hypergraph $\mathcal H=(V,\mathcal E)$ of Berge girth at least $q$ and pieces $J_e=(e,E_e)$ isomorphic to $F$. Its graph is $A=(V,\bigcup_{e\in\mathcal E}E_e)$, so it is the hyperedge-indexed graph realisation of these pieces. A Berge cycle of length $s\geq2$ consists of distinct hyperedges $e_0,\ldots,e_{s-1}$ and distinct vertices $x_0,\ldots,x_{s-1}$ with $x_i\in e_i\cap e_{i+1}$, indices taken modulo $s$. Berge girth is the least length of such a cycle, or $\infty$ if none exists. [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction) [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation) [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[F3] In a graph realisation over a finite hypergraph of Berge girth at least $q\geq3$, every ordinary occurrence of a 2-connected graph with fewer than $q$ edges lies in one hyperedge piece, with both its vertices and its edges contained in that piece. The realisation and girth conventions are those in F2. [lem-small-two-connected-subgraphs-in-high-girth-realisations](item-lem-small-two-connected-subgraphs-in-high-girth-realisations) [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation) [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[F4] An ordinary copy is a subgraph isomorphic to the copied graph. An induced copy is an ordinary copy that contains every host edge between its vertices. A graph belongs to $\operatorname{Forb}(J)$ precisely when it has no induced copy of $J$. [def-article-graph-conventions](item-def-article-graph-conventions) [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding) [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy) [def-induced-forbidden-class](item-def-induced-forbidden-class)

## Proof

**Given:** The graphs, independent set, block, positive integer $k$ and construction choices in the statement.

**Goal:** Exclude ordinary copies of $B$ from $A$ and deduce both forbidden-class memberships.

1.1 The block bounds give $|V(B)|=\beta(H_1)\geq3$, so $B$ is 2-connected, and every piece of the construction excludes an ordinary copy of $B$. By F2, $A$ is the realisation of the specified pieces over a finite hypergraph with the stated Berge girth. Since $|E(B)|<|E(B)|+2=q$ and $q\geq3$, all hypotheses of F3 hold for $B$ in $A$. An ordinary occurrence in $A$ would lie in a single piece, contrary to its exclusion there. Thus $A$ has no ordinary copy of $B$. [given, F1, F2, F3]

2.1 Every induced copy of $B$ is an ordinary copy, so $A\in\operatorname{Forb}(B)$. If $A$ contained an induced copy of $H_1$, the image of the subgraph $B\subseteq H_1$ under the isomorphism onto that induced copy would be an ordinary copy of $B$ in $A$. This contradicts step 1.1. Hence $A\in\operatorname{Forb}(H_1)$. [given, F4, step 1.1] ∎
