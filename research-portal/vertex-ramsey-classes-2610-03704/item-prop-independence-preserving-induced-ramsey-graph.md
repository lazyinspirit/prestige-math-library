---
title: Induced Ramsey graph with the same independence number
status: published
research_item: prop-independence-preserving-induced-ramsey-graph
dependency_level: 9
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 2, second sentence after Construction 1
      statement: For every graph H and positive integer k, there is an induced
        k-colour vertex-Ramsey graph for H with the same independence number as
        H.
      hypotheses: The article considers graphs with at least one vertex and positive k.
      reading_limits: The frozen article text and rendered pages were inspected at the
        cited passage. This citation attributes the formulation only; it is not
        a proof premise.
---

PDF p. 2: ` Section 2, second sentence after Construction 1 `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)
- [prop-construction-induced-ramsey-property](item-prop-construction-induced-ramsey-property)
- [lem-small-two-connected-subgraphs-in-high-girth-realisations](item-lem-small-two-connected-subgraphs-in-high-girth-realisations)
- [lem-clique-independence-complement-duality](item-lem-clique-independence-complement-duality)
- [lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:cor-complete-graph-edge-count](https://alphabetamath.cc/item/cor-complete-graph-edge-count)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)


## Statement

For every finite simple graph $H$ with at least one vertex and every positive integer $k$, there is a finite simple graph $G\in\mathcal R^k_{\mathrm{ind}}(H)$ with $\alpha(G)=\alpha(H)$.

Here $\mathcal R^k_{\mathrm{ind}}(H)$ consists of graphs in which every vertex colouring with colours $1,\ldots,k$ has a monochromatic induced copy of $H$. An induced copy preserves both adjacency and nonadjacency, and $\alpha$ is the maximum size of a set of pairwise nonadjacent vertices.

## Facts & Assumptions

[F1] By [def-article-graph-conventions](item-def-article-graph-conventions) and [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class), graphs in this statement are finite and simple, colourings are arbitrary functions into the indicated palette, and induced Ramsey membership means that every such colouring contains a monochromatic induced copy.

[F2] By [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence) and [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers), the complement $\overline H$ has the same vertices and reverses adjacency between distinct vertices. A clique is a set of pairwise adjacent vertices, and $\omega(J)$ is the largest size of a clique in a finite graph $J$.

[F3] For any nonempty finite simple graph $J$, $q\geq3$, and $k\geq1$, [prop-construction-induced-ramsey-property](item-prop-construction-induced-ramsey-property) supplies a construction graph $R\in\mathcal R^k_{\mathrm{ind}}(J)$. By [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction), it is a realisation over a finite hypergraph of Berge girth at least $q$ whose pieces are copies of $J$ and whose edge set is the union of their edge sets. Each hyperedge induces a copy of $J$ by [prop-construction-induced-ramsey-property](item-prop-construction-induced-ramsey-property).

[F4] By [lem-small-two-connected-subgraphs-in-high-girth-realisations](item-lem-small-two-connected-subgraphs-in-high-girth-realisations), an occurrence of a 2-connected graph with fewer than $q$ edges in such a realisation lies in one piece. A graph is 2-connected when it has at least three vertices, is connected, and remains connected after deletion of any vertex ([def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)). A graph is connected when its vertex set is nonempty and every two vertices are joined by a path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F5] By [lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings), induced copies and their monochromatic vertex sets correspond under simultaneous complementation of target and host, and complementation is an involution. By [lem-clique-independence-complement-duality](item-lem-clique-independence-complement-duality), $\alpha(\overline R)=\omega(R)$ and $\omega(\overline H)=\alpha(H)$.

[F6] By [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient), $\binom{n}{2}$ is the natural number counting the two-element subsets of an $n$-element set. By [math:cor-complete-graph-edge-count](https://alphabetamath.cc/item/cor-complete-graph-edge-count), a complete graph on $n$ vertices has exactly $\binom{n}{2}$ edges.

## Proof

**Given:** A finite simple graph $H$ with at least one vertex and a positive integer $k$.

**Goal:** Construct a graph in $\mathcal R^k_{\mathrm{ind}}(H)$ whose independence number equals $\alpha(H)$.

1.1 Put $J=\overline H$ and $a=\omega(J)$. The graph $J$ is nonempty and finite, so $a\geq1$. Choose an integer $q\geq3$ greater than $\binom{a+1}{2}$, and choose a construction graph $R=G(J,q,k)$ as in F3. Then $R\in\mathcal R^k_{\mathrm{ind}}(J)$, and each piece is a copy of $J$. Since an induced copy of $J$ occurs on a hyperedge, a maximum clique of $J$ gives a clique of size $a$ in $R$. Thus $\omega(R)\geq a$. [given, F2, F3, F6, choose]

2.1 If $a=1$, $J$ has no edges: an edge would be a clique of size two. Every piece is therefore edgeless, and the union defining $R$ has no edges. Since $R$ contains a copy of the nonempty graph $J$, it is nonempty, so $\omega(R)=1=a$. [F2, F3, step 1.1]

2.2 Suppose $a\geq2$ and set $t=a+1$. If $R$ had a clique of size $t$, its vertices and all their edges would form an ordinary subgraph $K_t$. It has $\binom{t}{2}<q$ edges and is 2-connected: it is connected, has at least three vertices, and deleting any vertex leaves a connected complete graph. By F4 this occurrence would lie in a single piece. That piece is a copy of $J$, which has no clique of size $a+1$, a contradiction. Hence $\omega(R)\leq a$, and together with step 1.1, $\omega(R)=a$. [F2, F3, F4, F6, step 1.1]

3.1 Let $G=\overline R$. Any $k$-colouring of $G$ is also a colouring of $R$, since their vertex sets agree. Ramsey membership of $R$ gives a monochromatic induced copy of $J$; F5 transports it to a monochromatic induced copy of $\overline J=H$ in $G$. Thus $G\in\mathcal R^k_{\mathrm{ind}}(H)$. In either case above, $\alpha(G)=\omega(R)=a=\omega(\overline H)=\alpha(H)$ by F5. This proves the proposition. [F1, F2, F5, step 1.1, step 2.1, step 2.2] ∎

## Source notes

The cited article states this consequence after Construction 1. The explicit clique bound and the separate edgeless case are supplied by the local argument above.
