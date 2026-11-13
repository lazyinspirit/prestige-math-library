---
title: Construction 1 gives an induced vertex-Ramsey graph
status: published
research_item: prop-construction-induced-ramsey-property
dependency_level: 8
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Construction 1, monochromatic-hyperedge argument
      statement: Every k-colouring of the constructed graph gives a monochromatic
        hyperedge, which induces a copy of H; hence the graph belongs to the
        induced k-colour vertex-Ramsey class of H.
      hypotheses: H is a graph with at least one vertex, q is an integer at least 3,
        and k is a positive integer in the surrounding use.
      reading_limits: The frozen extracted article text at the cited passage was read.
        This reference attributes the article claim and is not used as a proof
        premise; the works cited there were not inspected for this item.
---

PDF p. 2: ` Construction 1, monochromatic-hyperedge argument `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)
- [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [thm-high-girth-high-chromatic-hypergraphs-cited](item-thm-high-girth-high-chromatic-hypergraphs-cited)
- [lem-construction-hyperedges-induce-copies](item-lem-construction-hyperedges-induce-copies)


## Statement

Let $H$ be a finite simple graph with at least one vertex, and let $q\geq3$ and $k\geq1$ be integers. For any choices defining the graph $G=G(H,q,k)$ in Construction 1, every $k$-colouring of $V(G)$ has a monochromatic hyperedge of the underlying hypergraph, and that hyperedge induces a copy of $H$ in $G$. Consequently $G\in\mathcal R^k_{\mathrm{ind}}(H)$. Such construction choices exist for every stated $H,q,k$.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)

[def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[thm-high-girth-high-chromatic-hypergraphs-cited](item-thm-high-girth-high-chromatic-hypergraphs-cited)

[lem-construction-hyperedges-induce-copies](item-lem-construction-hyperedges-induce-copies)

## Facts & Assumptions

[F1] By [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction), the underlying finite $|V(H)|$-uniform hypergraph $\mathcal H=(V,\mathcal E)$ has Berge girth at least $q$ and no weak $k$-colouring, and $V(G)=V$. Each hyperedge $e$ is assigned a bijection $f_e:V(H)\to e$. The construction and [thm-high-girth-high-chromatic-hypergraphs-cited](item-thm-high-girth-high-chromatic-hypergraphs-cited) supply choices for every stated $H,q,k$, including the one-vertex case.

[F2] By [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map) and [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette), a $k$-colouring is any function into $\{1,\ldots,k\}$, a subset is monochromatic when all its vertices receive the same colour, and such a function is a weak hypergraph colouring exactly when every hyperedge contains two vertices of different colours. Hypergraph and girth terminology is fixed by [def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology).

[F3] By [lem-construction-hyperedges-induce-copies](item-lem-construction-hyperedges-induce-copies), each hyperedge $e$ induces the transported piece of $H$, and $f_e$ is an induced embedding. An induced embedding preserves and reflects adjacency between distinct vertices, and its image induces a copy ([math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)). The graph and copy conventions are given in [def-article-graph-conventions](item-def-article-graph-conventions).

[F4] By [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class), a nonempty finite simple graph belongs to $\mathcal R^k_{\mathrm{ind}}(H)$ precisely when every function from its vertex set to $\{1,\ldots,k\}$ has a monochromatic induced copy of $H$.

## Proof

**Given:** A graph $H$, integers $q,k$, and fixed construction choices as in the statement.

**Goal:** Prove the monochromatic-hyperedge assertion and the induced Ramsey membership, and account for the existence of the construction choices.

1.1 Let $c:V(G)\to\{1,\ldots,k\}$ be arbitrary. Because $V(G)=V$, it is also a colouring of the hypergraph's vertex set. It cannot be a weak $k$-colouring, so some hyperedge $e$ fails the condition of containing two differently coloured vertices. Thus all vertices of $e$ have the same $c$-colour. Since $|e|=|V(H)|\geq1$, this is a nonempty monochromatic hyperedge. [given, F1, F2, choose]

2.1 The induced subgraph of $G$ on $e$ is a copy of $H$ under $f_e$, so it is monochromatic by step 1.1. In particular $G$ is nonempty. As $c$ was arbitrary, the defining condition for $G\in\mathcal R^k_{\mathrm{ind}}(H)$ holds. The choices used above exist for every stated $H,q,k$ by F1. This proves all assertions. [F1, F3, F4, step 1.1] ∎
