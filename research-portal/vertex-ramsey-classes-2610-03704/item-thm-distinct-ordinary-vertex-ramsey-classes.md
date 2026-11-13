---
title: Ordinary part of Theorem 1.1
status: published
research_item: thm-distinct-ordinary-vertex-ramsey-classes
dependency_level: 5
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Theorem 1.1, first inequality; PDF p. 2, Section 3,
        ordinary-class argument
      statement: For any two non-isomorphic graphs $H_1,H_2$ and any positive integer
        $k$, $\mathcal R^k(H_1)\ne\mathcal R^k(H_2)$.
      hypotheses: All graphs considered in the article have at least one vertex.
      reading_limits: The frozen article text was read at the cited passages. This
        citation attributes the formulation and is not used as a proof premise.
---

PDF p. 1: ` Theorem 1.1, first inequality `; PDF p. 2: ` Section 3, ordinary-class argument `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [def-vertex-ramsey-class](item-def-vertex-ramsey-class)
- [prop-one-colour-ramsey-distinction](item-prop-one-colour-ramsey-distinction)
- [ex-different-orders-ordinary-ramsey-separator](item-ex-different-orders-ordinary-ramsey-separator)
- [ex-equal-orders-ordinary-ramsey-separator](item-ex-equal-orders-ordinary-ramsey-separator)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)


## Statement

Let $H_1,H_2$ be non-isomorphic finite simple graphs, each with at least one vertex, and let $k$ be a positive integer. Then $\mathcal R^k(H_1)\ne\mathcal R^k(H_2)$.

Graphs are isomorphic when a bijection of their vertex sets preserves and reflects adjacency. The ordinary vertex-Ramsey class $\mathcal R^k(H)$ consists of the nonempty finite simple graphs $G$ such that every function $V(G)\to\{1,\ldots,k\}$ has a monochromatic ordinary copy of $H$. An ordinary copy is a subgraph isomorphic to $H$; extra host edges between its vertices are allowed.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[def-vertex-ramsey-class](item-def-vertex-ramsey-class)

## Facts & Assumptions

[F1] For non-isomorphic nonempty finite simple graphs, the ordinary one-colour vertex-Ramsey classes are distinct ([prop-one-colour-ramsey-distinction](item-prop-one-colour-ramsey-distinction)).

[F2] If nonempty finite simple graphs $A,B$ have $|A|<|B|$ and $k\geq2$, there is a graph in $\mathcal R^k(A)\setminus\mathcal R^k(B)$ ([ex-different-orders-ordinary-ramsey-separator](item-ex-different-orders-ordinary-ramsey-separator)). Here graph order $|A|$ is the number of vertices of $A$ ([def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)).

[F3] If non-isomorphic nonempty finite simple graphs have equal order and $k\geq2$, they can be labelled so that there is a graph in the ordinary $k$-colour class of the second but not the first ([ex-equal-orders-ordinary-ramsey-separator](item-ex-equal-orders-ordinary-ramsey-separator)).

## Proof

**Given:** Non-isomorphic finite simple graphs $H_1,H_2$, each with at least one vertex, and a positive integer $k$.

**Goal:** Show that their ordinary $k$-colour vertex-Ramsey classes are distinct.

1.1 If $k=1$, the one-colour distinction fact gives $\mathcal R^1(H_1)\ne\mathcal R^1(H_2)$. [given, F1]

1.2 Suppose $k\geq2$ and the graph orders differ. Label the graph of smaller order $A$ and the other $B$. The different-order separator gives a graph belonging to $\mathcal R^k(A)$ but not $\mathcal R^k(B)$, so the two classes differ. [given, F2, choose]

2.1 Suppose $k\geq2$ and the graph orders are equal. The equal-order separator gives, after possibly exchanging the labels, a graph belonging to one of the two classes and not the other. Thus the classes differ in this case as well. The cases in steps 1.1, 1.2 and 2.1 exhaust positive $k$ and the possible orders, proving the theorem. [given, F3, step 1.1, step 1.2] ∎
