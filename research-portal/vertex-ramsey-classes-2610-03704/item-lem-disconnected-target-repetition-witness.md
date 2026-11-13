---
title: Disjoint-copy witness against repetition
status: published
research_item: lem-disconnected-target-repetition-witness
dependency_level: 11
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Lemma 2.1, disconnected case, remaining sentences
      statement: For disconnected H with t components and A chosen using the join L
        and the independence gap, q = k(t-1)+1 disjoint copies of A form an
        induced k-colour Ramsey graph for H, although A itself is not one.
      hypotheses: H is a finite simple graph with at least one vertex and t at least 2
        connected components; k is a positive integer; A is as chosen in the
        disconnected case.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation; the proof below uses the
        listed suppliers and does not use the article as a premise.
---

PDF p. 2: ` Lemma 2.1, disconnected case, remaining sentences `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-graph-join](item-def-graph-join)
- [def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)
- [lem-disconnected-target-independence-gap](item-lem-disconnected-target-independence-gap)
- [lem-finite-palette-capacity](item-lem-finite-palette-capacity)
- [lem-finite-colouring-transport-and-restriction](item-lem-finite-colouring-transport-and-restriction)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)


## Statement

Let $H$ be a finite simple graph with connected components $H_1,\ldots,H_t$, where $t\geq2$, and let $k$ be a positive integer. Form their join $L=H_1\vee\cdots\vee H_t$. Let $A$ be a finite simple graph in $\mathcal R^k_{\mathrm{ind}}(L)$ with $\alpha(A)=\alpha(L)$, and put $q=k(t-1)+1$. Such a graph $A$ exists, $A\notin\mathcal R^k_{\mathrm{ind}}(H)$, and $qA\in\mathcal R^k_{\mathrm{ind}}(H)$.

A connected component is a maximal connected subgraph; connected means that every two vertices are joined by a path. The join retains the internal edges of disjoint copies of the components and adds all edges between distinct copies. An independent set has no adjacent pair of distinct vertices, and $\alpha$ is its maximum cardinality. A graph belongs to $\mathcal R^k_{\mathrm{ind}}(J)$ when every function from its vertices to $\{1,\ldots,k\}$ has a monochromatic induced copy of $J$; such a copy is the image of an injection preserving and reflecting adjacency. The graph $qA$ consists of $q$ disjoint copies of $A$ with no edges between them.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[def-graph-join](item-def-graph-join)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)

## Facts & Assumptions

[F1] For the stated $H$, $L$ and $k$, there exists $A\in\mathcal R^k_{\mathrm{ind}}(L)$ with $\alpha(A)=\alpha(L)$, and every such $A$ has no induced copy of $H$ and does not belong to $\mathcal R^k_{\mathrm{ind}}(H)$ ([lem-disconnected-target-independence-gap](item-lem-disconnected-target-independence-gap)).

[F2] The components have nonempty, pairwise disjoint vertex sets covering $V(H)$; each is induced on its vertex set, and there are no edges between distinct components. The join contains an induced copy of every component ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component), [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set), [def-graph-join](item-def-graph-join)).

[F3] In $qA$, the map $v\mapsto(i,v)$ identifies $A$ with the induced graph on the $i$th tagged part; different parts are disjoint and have no edges between them ([def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)).

[F4] Restricting a colouring preserves the colours of the remaining vertices; composing induced embeddings produces an induced embedding and transports monochromaticity ([lem-finite-colouring-transport-and-restriction](item-lem-finite-colouring-transport-and-restriction)).

[F5] If a set of more than $k(t-1)$ elements is coloured with $k$ colours, at least $t$ of its elements have the same colour ([lem-finite-palette-capacity](item-lem-finite-palette-capacity)).

[F6] An induced embedding is an injection that preserves and reflects adjacency between distinct vertices. Ramsey membership requires a monochromatic induced copy under every permitted colouring ([math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy), [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)).

## Proof

**Given:** $H$, its components, $k$, $L$, $A$ and $q$ as in the statement.

**Goal:** Prove the existence and nonmembership assertion for $A$ and show that every $k$-colouring of $qA$ contains a monochromatic induced copy of $H$.

1.1 Fact F1 gives the existence of $A$ and, for every permitted choice of $A$, gives $A\notin\mathcal R^k_{\mathrm{ind}}(H)$. Fix such an $A$ and an arbitrary colouring $c:V(qA)\to\{1,\ldots,k\}$. [given, F1, F6]

1.2 For each $i\in\{1,\ldots,q\}$, pull $c$ back along the tagged copy map $v\mapsto(i,v)$ to a $k$-colouring of $A$. Since $A\in\mathcal R^k_{\mathrm{ind}}(L)$, this colouring gives an induced embedding of $L$ whose image has one colour. Compose it with the tagged copy map; the resulting induced copy of $L$ lies in the $i$th part and is monochromatic for $c$. Choose one such copy and its colour for each of the finitely many indices. [given, F3, F4, F6, construct]

2.1 Because $q=k(t-1)+1>k(t-1)$, F5 gives distinct indices $i_1,\ldots,i_t$ whose chosen copies of $L$ have the same colour. For each $j$, restrict the induced embedding of $L$ in the $i_j$th part to the component copy $H_j$ inside $L$. This yields an induced embedding of $H_j$ in that part, and all of its image vertices have the common colour. [given, F2, F4, F5, step 1.2, choose]

3.1 Define a map on $V(H)$ by using the embedding selected for $H_j$ on $V(H_j)$. The component vertex sets partition $V(H)$, and the target parts are disjoint, so this map is well-defined and injective. Within a component it preserves and reflects adjacency; between different components there are no edges in $H$ and, because the target parts are distinct, no edges in $qA$. Thus the map is an induced embedding, and its image is monochromatic. As $c$ was arbitrary, $qA\in\mathcal R^k_{\mathrm{ind}}(H)$. [given, F2, F3, F6, step 2.1, construct] ∎

## Source notes

The article passage attributes the disconnected-case witness. The argument above derives it from the stated local and published suppliers.
