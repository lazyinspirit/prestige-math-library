---
title: Join separator for equal-order targets
status: draft
research_item: ex-equal-orders-ordinary-ramsey-separator
dependency_level: 4
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, ordinary classes, equal-order case
      statement: For equal-order targets with H1 not contained in H2, the join of H2
        and a clique of order (k-1)(n-1) separates their ordinary k-colour
        vertex-Ramsey classes; the article gives the colouring with the H2 part
        in one colour and the other parts of size n-1 in the remaining colours.
      hypotheses: The target graphs have the same positive order n, H2 contains no
        ordinary copy of H1, and k is an integer at least two.
      reading_limits: The frozen article text was inspected at the cited passage. This
        reference attributes the construction and is not used as a proof
        premise.
---

PDF p. 2: ` Section 3, ordinary classes, equal-order case `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [def-graph-join](item-def-graph-join)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [def-vertex-ramsey-class](item-def-vertex-ramsey-class)
- [lem-equal-orders-subgraph-orientation](item-lem-equal-orders-subgraph-orientation)
- [lem-join-clique-monochromatic-completion](item-lem-join-clique-monochromatic-completion)
- [lem-finite-palette-capacity](item-lem-finite-palette-capacity)


## Example

Let $H_1$ and $H_2$ be finite simple graphs of the same order $n\geq1$, and suppose that $H_2$ contains no ordinary copy of $H_1$. Let $k\geq2$ be an integer. Form $G=H_2\vee K_{(k-1)(n-1)}$ using disjoint parts. Then $G\in\mathcal R^k(H_2)\setminus\mathcal R^k(H_1)$. In particular, any two non-isomorphic finite simple graphs of equal positive order can be labelled so that this construction separates their classes in that direction.

Here graph order means the number of vertices. An ordinary copy is a subgraph isomorphic to the target; extra host edges between its vertices are allowed. The join retains the edges within its parts and adds every cross-edge. The graph $K_m$ is complete on $m$ vertices, including the empty graph when $m=0$. A $k$-colouring is a function from the vertex set to $\{1,\ldots,k\}$; a copy is monochromatic when all its vertices have the same colour. The class $\mathcal R^k(H)$ consists of hosts for which every such colouring has a monochromatic ordinary copy of $H$.

## Facts & Assumptions

[F1] For a finite simple graph of order $n\geq1$ and integer $k\geq2$, every $k$-colouring of its join with $K_{(k-1)(n-1)}$ has a monochromatic ordinary copy of that graph ([lem-join-clique-monochromatic-completion](item-lem-join-clique-monochromatic-completion)).

[F2] If a finite set has at most $ab$ elements, where $a,b\geq1$ are integers, it admits an $a$-colouring with every colour class of size at most $b$ ([lem-finite-palette-capacity](item-lem-finite-palette-capacity)).

[F3] In a join the designated parts are disjoint, the first part induces a copy of its original graph, and the second part has the stated number of vertices. A copy has as many vertices as its target ([def-graph-join](item-def-graph-join), [def-article-graph-conventions](item-def-article-graph-conventions), [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)).

[F4] A colouring may leave colours unused. A host belongs to $\mathcal R^k(H)$ exactly when every $k$-colouring has a monochromatic ordinary copy of $H$ ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map), [def-vertex-ramsey-class](item-def-vertex-ramsey-class)).

[F5] Two non-isomorphic finite simple graphs of equal positive order can be labelled so that the second contains no ordinary copy of the first ([lem-equal-orders-subgraph-orientation](item-lem-equal-orders-subgraph-orientation)).

## Verification

**Given:** The graphs $H_1,H_2$, their common order $n$, the integer $k$, and the join $G$ in the example.

**Goal:** Prove the two class-membership assertions and the final orientation claim.

1.1 Apply the join completion fact to $H_2$. Every $k$-colouring of $G$ contains a monochromatic ordinary copy of $H_2$, so $G\in\mathcal R^k(H_2)$. [given, F1, F4]

1.2 Colour every vertex in the $H_2$ part with colour $1$. If $n\geq2$, apply the finite capacity fact to the clique part with $a=k-1$ and $b=n-1$, then relabel its $a$ colours as $2,\ldots,k$. Thus each of those colour classes has at most $n-1$ vertices. If $n=1$, the clique part is empty and the same conclusion holds with all those colours unused. This gives a $k$-colouring of all of $G$. [given, F2, F3, F4, construct]

2.1 A monochromatic copy of $H_1$ in colour $1$ would lie entirely in the $H_2$ part, where no such copy exists. A monochromatic copy in any other colour would require $n$ vertices, but that colour class has at most $n-1$. Thus this colouring has no monochromatic copy of $H_1$, and $G\notin\mathcal R^k(H_1)$. Together with step 1.1 this proves the displayed separation. [given, F3, F4, step 1.1, step 1.2]

3.1 For two non-isomorphic finite simple graphs of the same positive order, choose labels as in the orientation fact. Their labelled pair satisfies the hypotheses already used, so the same construction separates the classes in the stated direction. [F5, step 2.1] ∎
