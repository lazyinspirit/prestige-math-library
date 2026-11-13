---
title: Induced forbidden-subgraph class
status: published
research_item: def-induced-forbidden-class
dependency_level: 2
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Section 2, first paragraph
      statement: Forb(H) denotes the set of all graphs with no induced copy of H.
      hypotheses: The article assumes that every graph considered has at least one vertex.
      reading_limits: The frozen extracted text at the cited passage was read. This
        reference attributes the article formulation; it is not an independent
        proof.
---

PDF p. 1: ` Section 2, first paragraph `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)


## Definition

Let $H$ be a graph under the conventions of this treatment: a finite simple graph with at least one vertex. The induced forbidden-subgraph class $\operatorname{Forb}(H)$ consists of all such graphs $G$ for which there is no induced copy of $H$ in $G$. Equivalently, there is no injection $\varphi:V(H)\to V(G)$ such that, for every pair of distinct vertices $x,y$ of $H$, $xy\in E(H)$ if and only if $\varphi(x)\varphi(y)\in E(G)$.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

## Justification

The graph conventions specify the admissible graphs, while the induced-copy definition makes the stated injection condition equivalent to the existence of an induced copy. Negating that condition therefore determines membership for each admissible $G$. The word class permits arbitrary vertex labels and does not require the collection of all such graphs to be a set.
