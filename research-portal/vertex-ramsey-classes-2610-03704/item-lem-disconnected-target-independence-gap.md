---
title: Independence gap for the join of components
status: draft
research_item: lem-disconnected-target-independence-gap
dependency_level: 10
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Lemma 2.1, disconnected case, first three sentences
      statement: For a disconnected graph H with components H_i and their join L,
        choose an induced k-colour Ramsey graph A for L with alpha(A) =
        alpha(L). The independence number of A is strictly less than that of H,
        so A has no induced H and is not in the induced Ramsey class of H.
      hypotheses: The article considers graphs with at least one vertex and positive
        colour counts; the displayed disconnected case has at least two
        components.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation and is not a proof premise.
---

PDF p. 2: ` Lemma 2.1, disconnected case, first three sentences `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-graph-join](item-def-graph-join)
- [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [prop-independence-preserving-induced-ramsey-graph](item-prop-independence-preserving-induced-ramsey-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)
- [lem-independence-of-disjoint-families-and-joins](item-lem-independence-of-disjoint-families-and-joins)
- [lem-independence-monotone-under-embeddings](item-lem-independence-monotone-under-embeddings)


## Statement

Let $H$ be a finite simple graph with connected components $H_1,\ldots,H_t$, where $t\geq2$, and let $k$ be a positive integer. Put $L=H_1\vee\cdots\vee H_t$. There is a finite simple graph $A\in\mathcal R^k_{\mathrm{ind}}(L)$ with $\alpha(A)=\alpha(L)$, and every such $A$ satisfies $\alpha(A)=\alpha(L)=\max_i\alpha(H_i)<\sum_i\alpha(H_i)=\alpha(H)$. Consequently $A$ contains no induced copy of $H$ and $A\notin\mathcal R^k_{\mathrm{ind}}(H)$.

Here a connected component is a maximal connected subgraph, and a connected graph has a path between every pair of its vertices. The join is formed from disjoint copies of the $H_i$ by retaining their internal edges and adding all edges between distinct copies. An independent set has no adjacent pair of distinct vertices, and $\alpha$ is its maximum cardinality. The class $\mathcal R^k_{\mathrm{ind}}(J)$ consists of graphs in which every vertex colouring with colours $1,\ldots,k$ has a monochromatic induced copy of $J$; an induced copy preserves both adjacency and nonadjacency.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[def-graph-join](item-def-graph-join)

[def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

## Facts & Assumptions

[F1] The connected components of a graph have nonempty, pairwise disjoint vertex sets covering its vertices, and each component is the induced graph on its vertex set. A component is a reachability class: adjacent vertices are connected by a path of one edge. See [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set), [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component), and [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle).

[F2] The tagged disjoint union has a copy of each graph as a part and no edges between different parts; the join retains the part edges and makes distinct parts completely adjacent. See [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family) and [def-graph-join](item-def-graph-join).

[F3] For nonempty finite simple graphs, the independence number of their tagged disjoint union is the sum of their independence numbers, and that of their complete join is their maximum. If there are at least two parts, the maximum is strictly smaller than the sum. See [lem-independence-of-disjoint-families-and-joins](item-lem-independence-of-disjoint-families-and-joins).

[F4] For every nonempty finite simple graph $J$ and positive integer $k$, there is a finite induced $k$-colour Ramsey graph $B$ for $J$ with $\alpha(B)=\alpha(J)$. See [prop-independence-preserving-induced-ramsey-graph](item-prop-independence-preserving-induced-ramsey-graph).

[F5] If $J$ has an induced embedding into a finite simple graph $G$, then $\alpha(J)\leq\alpha(G)$. An induced copy yields such an embedding. See [lem-independence-monotone-under-embeddings](item-lem-independence-monotone-under-embeddings).

[F6] Induced Ramsey membership requires a monochromatic induced copy for every colouring $V(G)\to\{1,\ldots,k\}$; colourings need not use every colour. See [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class).

## Proof

**Given:** A finite simple graph $H$ with components $H_1,\ldots,H_t$, where $t\geq2$, and a positive integer $k$.

**Goal:** Establish the existence and independence gap for $A$, and exclude $A$ from the induced Ramsey class of $H$.

1.1 By F1, the component vertex sets partition $V(H)$, and no edge of $H$ joins distinct components: such an edge would be a path joining their endpoints. Thus the map sending each vertex $v$ of the $i$th component to its tagged vertex $(i,v)$ is an isomorphism from $H$ to the tagged disjoint union of the $H_i$. It preserves and reflects adjacency, so it sends independent sets bijectively to independent sets of the same size; consequently the two graphs have the same independence number. [given, F1, F2]

2.1 Each $H_i$ is nonempty by F1. Applying F3 to these components and using the isomorphism in step 1.1 gives $\alpha(H)=\sum_i\alpha(H_i)$. By the definition of $L$ and F3, $\alpha(L)=\max_i\alpha(H_i)<\sum_i\alpha(H_i)$. The graph $L$ is finite, simple and nonempty, so F4 supplies an $A\in\mathcal R^k_{\mathrm{ind}}(L)$ with $\alpha(A)=\alpha(L)$. These equalities and the strict inequality hold for every such $A$. [given, F1, F2, F3, F4, step 1.1]

3.1 If such an $A$ contained an induced copy of $H$, F5 would give $\alpha(H)\leq\alpha(A)$, contradicting step 2.1. Hence it has no induced copy of $H$. The constant colouring of $V(A)$ with colour $1$ is permitted because $k\geq1$; it has no monochromatic induced copy of $H$. By F6, $A\notin\mathcal R^k_{\mathrm{ind}}(H)$. This proves the lemma. [given, F5, F6, step 2.1] ∎

## Source notes

The cited article passage attributes the displayed disconnected-case conclusion. The argument above uses the listed local suppliers.
