---
title: Invariant of the recursive induced separator
status: draft
research_item: prop-recursive-induced-separator-invariant
dependency_level: 16
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Next and subsequent argument;
        PDF p. 4, Section 3, first two paragraphs
      statement: The recursively constructed graphs satisfy A_1 = H_2 and, for 2 <= r
        <= k, A_r belongs to the induced r-colour vertex-Ramsey class of H_2 but
        not that of H_1.
      hypotheses: The Section 3 construction uses non-isomorphic connected finite
        graphs with edges, ordered by largest block order and then vertex order,
        and the specified independent remainder and base graph.
      reading_limits: Attribution of the extracted formulation; this citation is not
        used as a proof premise. The present argument uses the declared base and
        induction-step suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning Next and subsequent argument `; PDF p. 4: ` Section 3, first two paragraphs `

## Prerequisites

- [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [lem-recursive-separator-base-case](item-lem-recursive-separator-base-case)
- [lem-recursive-separator-avoids-first-target](item-lem-recursive-separator-avoids-first-target)
- [lem-recursive-separator-forces-second-target](item-lem-recursive-separator-forces-second-target)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)
- [def-article-graph-conventions](item-def-article-graph-conventions)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)


## Statement

Let $k\geq2$ be an integer, and let $H_1,H_2$ be non-isomorphic finite connected simple graphs, each with an edge, ordered so that $\beta(H_1)\geq\beta(H_2)$ and, if equality holds, $|V(H_1)|\geq|V(H_2)|$. For a graph with an edge, $\beta(H)$ is the greatest number of vertices in a block of $H$; for a nonempty edgeless graph, set $\beta(H)=1$. A block is a maximal 2-connected subgraph or a bridge with its endpoints. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any vertex; a bridge is an edge whose deletion increases the number of connected components. Connected means that every two vertices are joined by a path.

Use the recursive induced-separator construction: an independent set $I$ of $H_2$ and its induced remainder $F=H_2-I$ satisfy $\beta(F)<\beta(H_2)$; a finite simple core $A$ has no induced copy of $H_1$ and every colouring of its vertices with $k$ available colours has a monochromatic induced copy of $F$. The construction sets $A_1=H_2$ and, for each integer $r$ with $2\leq r\leq k$, attaches disjoint copies of $A_{r-1}$ to a copy of $A$ as specified there. Independent means that no edge has both endpoints in $I$; an induced copy is the image of an injective vertex map preserving adjacency and nonadjacency.

Then $A_1=H_2$, and for every integer $r$ with $2\leq r\leq k$ we have $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)\setminus\mathcal R^r_{\mathrm{ind}}(H_1)$. In fact the same membership and nonmembership hold for $r=1$. Here, for a positive integer $s$, $\mathcal R^s_{\mathrm{ind}}(H)$ is the class of nonempty finite simple graphs for which every map from the vertex set to $\{1,\ldots,s\}$ has an induced copy of $H$ whose vertices all receive one colour; not every available colour need occur.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

## Facts & Assumptions

[F1] The construction gives $A_1=H_2$ and defines the finite graphs through stage $k$ under the stated hypotheses. [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)

[F2] Under these hypotheses, $A_1\in\mathcal R^1_{\mathrm{ind}}(H_2)$ and $A_1\notin\mathcal R^1_{\mathrm{ind}}(H_1)$. [lem-recursive-separator-base-case](item-lem-recursive-separator-base-case)

[F3] For each integer $r$ with $2\leq r\leq k$, if $A_{r-1}\notin\mathcal R^{r-1}_{\mathrm{ind}}(H_1)$, then $A_r\notin\mathcal R^r_{\mathrm{ind}}(H_1)$. [lem-recursive-separator-avoids-first-target](item-lem-recursive-separator-avoids-first-target)

[F4] For each integer $r$ with $2\leq r\leq k$, if $A_{r-1}\in\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$, then $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)$. [lem-recursive-separator-forces-second-target](item-lem-recursive-separator-forces-second-target)

[F5] A property of natural numbers holding at zero and passing from each number to its successor holds at every natural number. [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)

## Proof

**Given:** The graphs, ordering, choices and recursive construction in the statement.

**Goal:** Prove the asserted membership and nonmembership at every stage through $k$, together with $A_1=H_2$.

1.1 For a natural number $n$, let $P(n)$ assert that, if $n+1\leq k$, then $A_{n+1}\in\mathcal R^{n+1}_{\mathrm{ind}}(H_2)$ and $A_{n+1}\notin\mathcal R^{n+1}_{\mathrm{ind}}(H_1)$. The base case $P(0)$ follows from F2. [F2, given, base]

2.1 Suppose $P(n)$. If $(n+1)+1\leq k$, then $n+1\leq k$, so $P(n)$ supplies both properties at stage $n+1$. Since $2\leq(n+1)+1\leq k$, F3 and F4 give the corresponding nonmembership and membership at stage $(n+1)+1$. If $(n+1)+1>k$, the implication defining $P(n+1)$ holds vacuously. Thus $P(n)$ implies $P(n+1)$ in either case. [F3, F4, step 1.1, ih]

3.1 Induction gives $P(n)$ for every natural number. For each integer $r$ with $1\leq r\leq k$, the number $n=r-1$ is natural; taking this $n$ yields both properties at stage $r$. In particular they hold throughout the requested range $2\leq r\leq k$, and F1 supplies $A_1=H_2$. This proves the invariant. [F1, F5, step 2.1, discharge-induction] ∎
