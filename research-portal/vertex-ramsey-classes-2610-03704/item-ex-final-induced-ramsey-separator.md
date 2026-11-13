---
title: Final induced-Ramsey separator
status: published
research_item: ex-final-induced-ramsey-separator
dependency_level: 17
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 4, Section 3, second paragraph
      statement: The graph A_k belongs to the induced k-colour vertex-Ramsey class of
        H_2 but not that of H_1, contradicting equality of the two classes.
      hypotheses: The Section 3 construction uses non-isomorphic connected finite
        graphs with edges, ordered by largest block order and then vertex order,
        with the specified independent remainder and base graph.
      reading_limits: The frozen article extraction and the assigned item were
        inspected. This reference attributes the article claim; it is not a
        proof premise for the verification below.
---

PDF p. 4: ` Section 3, second paragraph `

## Prerequisites

- [prop-recursive-induced-separator-invariant](item-prop-recursive-induced-separator-invariant)
- [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)


## Example

Let $k$ be a natural number with $k\geq2$, and let $H_1,H_2$ be non-isomorphic finite connected simple graphs, each with an edge, ordered so that $\beta(H_1)\geq\beta(H_2)$ and, if equality holds, $|V(H_1)|\geq|V(H_2)|$. A graph is connected if every two vertices are joined by a path. A block is a maximal 2-connected subgraph or a bridge with its endpoints; 2-connected means connected, having at least three vertices, and remaining connected after deletion of any vertex. A bridge is an edge whose deletion increases the number of connected components. For a graph with an edge, $\beta(H)$ is the greatest number of vertices in a block of $H$; for a nonempty edgeless graph, set $\beta(H)=1$.

Choose an independent set $I$ of $H_2$ and its nonempty induced remainder $F=H_2-I$ with $\beta(F)<\beta(H_2)$, and choose a finite simple core $A$ containing no induced copy of $H_1$ such that every colouring of its vertices with $k$ available colours has a monochromatic induced copy of $F$. Independent means that no two vertices of $I$ are adjacent. An induced copy is the image of an injective vertex map preserving adjacency and nonadjacency. Construct $A_1,\ldots,A_k$ by the specified recursive induced-separator construction, starting with $A_1=H_2$ and attaching copies of $A_{r-1}$ to a copy of $A$ at stage $r$.

Then $A_k\in\mathcal R^k_{\mathrm{ind}}(H_2)\setminus\mathcal R^k_{\mathrm{ind}}(H_1)$. Here $\mathcal R^k_{\mathrm{ind}}(H)$ consists of the nonempty finite simple graphs whose every vertex map to $\{1,\ldots,k\}$ has a monochromatic induced copy of $H$; colours need not all be used. Consequently the two induced vertex-Ramsey classes are distinct, contradicting any assumption that they are equal.

## Example references

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

## Facts & Assumptions

[F1] Under the hypotheses and recursive construction in the example, for every $2\leq r\leq k$ the invariant gives $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)$ and $A_r\notin\mathcal R^r_{\mathrm{ind}}(H_1)$. [prop-recursive-induced-separator-invariant](item-prop-recursive-induced-separator-invariant)

[F2] Membership in $\mathcal R^k_{\mathrm{ind}}(H)$ means that every vertex colouring with the $k$ available colours has a monochromatic induced copy of $H$; a colouring need not use every colour. [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class) [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

## Verification

**Given:** The ordered graphs, choices of $I$ and $A$, and recursive graphs in the example.

**Goal:** Verify the displayed class difference and the resulting inequality of classes.

1.1 Since $k$ is a natural number with $k\geq2$, take $r=k$ in F1. Thus $A_k\in\mathcal R^k_{\mathrm{ind}}(H_2)$ and $A_k\notin\mathcal R^k_{\mathrm{ind}}(H_1)$. [F1, given]

2.1 By F2 these are membership and nonmembership in the stated classes, so $A_k$ lies in their displayed set difference. A graph belonging to one class and not the other witnesses that the classes are unequal; hence equality would be contradicted. [F2, step 1.1] ∎
