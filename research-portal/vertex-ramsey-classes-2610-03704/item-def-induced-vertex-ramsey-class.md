---
title: Induced vertex-Ramsey class
status: published
research_item: def-induced-vertex-ramsey-class
dependency_level: 2
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Abstract and Introduction, first paragraph
      statement: The induced k-colour vertex-Ramsey class of H consists of graphs G
        for which every k-colouring of the vertices of G yields a monochromatic
        induced copy of H.
      hypotheses: H and G are graphs with at least one vertex, and k is a positive integer.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation; it is not used as a proof or
        as an independent prerequisite.
---

PDF p. 1: ` Abstract; Introduction, first paragraph `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)


## Definition

Let $H$ be a finite simple graph with at least one vertex, and let $k$ be a positive integer. The **induced $k$-colour vertex-Ramsey class** of $H$, denoted $\mathcal R^k_{\mathrm{ind}}(H)$, consists of those finite simple graphs $G$ with at least one vertex for which the following holds: for every function $c:V(G)\to\{1,\ldots,k\}$, there is an injection $\varphi:V(H)\to V(G)$ such that $c$ is constant on $\varphi(V(H))$ and, for all distinct $x,y\in V(H)$, $\{x,y\}\in E(H)$ if and only if $\{\varphi(x),\varphi(y)\}\in E(G)$.

Thus the image vertices induce a copy of $H$ and all have the same colour. A colouring need not use every colour, and adjacent vertices may receive the same colour. Membership is understood as a predicate on graphs; no set of all graphs with arbitrary vertex labels is assumed.

## Justification

The graph conventions specify the finite simple graphs and their vertex and edge sets. The colouring definition supplies the functions and the meaning of constant colour on the image. The induced-embedding definition identifies the displayed adjacency and nonadjacency condition with an induced copy isomorphic to $H$. Consequently the displayed condition determines membership for each graph $G$ without choosing a representative or assuming a universal set of graphs.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
