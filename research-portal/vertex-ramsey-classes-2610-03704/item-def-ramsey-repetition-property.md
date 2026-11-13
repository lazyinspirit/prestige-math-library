---
title: Ramsey repetition property at fixed k
status: draft
research_item: def-ramsey-repetition-property
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 2, paragraph before Lemma 2.1
      statement: For fixed k at least 1, H has the Ramsey repetition property when,
        for every integer q at least 1 and every graph A, qA belongs to the
        induced k-colour vertex-Ramsey class of H if and only if A does.
      hypotheses: The article considers graphs with at least one vertex and positive
        integers k and q.
      reading_limits: The frozen extracted article text was read at the cited
        paragraph. This reference attributes the formulation; it is not a proof
        or an independent prerequisite.
---

PDF p. 2: ` Section 2, paragraph before Lemma 2.1 `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)


## Definition

Fix a positive integer $k$. In this treatment a graph is a finite simple graph with a nonempty vertex set. A graph $H$ has the **Ramsey repetition property at $k$** if, for every positive integer $q$ and every graph $A$, $qA\in\mathcal R^k_{\mathrm{ind}}(H)$ if and only if $A\in\mathcal R^k_{\mathrm{ind}}(H)$.

Here $qA$ is the disjoint union of $q$ copies of $A$: its vertices are pairs $(i,v)$ with $1\leq i\leq q$ and $v\in V(A)$, and two vertices are adjacent exactly when their first coordinates agree and their second coordinates are adjacent in $A$. For a graph $G$, membership $G\in\mathcal R^k_{\mathrm{ind}}(H)$ means that every function $c:V(G)\to\{1,\ldots,k\}$ has a monochromatic induced copy of $H$. An induced copy is a set of vertices whose induced graph is isomorphic to $H$, preserving both adjacency and nonadjacency; monochromatic means that $c$ is constant on that set. The colouring may leave colours unused and need not assign different colours to adjacent vertices.

## Justification

The graph conventions give definite vertex sets, adjacency and induced copies. The disjoint-multiple definition gives the displayed tagged graph $qA$, which is finite, simple and nonempty for the stated $A$ and $q$. The colouring definition specifies the unrestricted functions and the monochromatic predicate. The induced vertex-Ramsey class definition therefore gives a definite membership predicate for both $A$ and $qA$. Quantifying the equivalence over positive integers $q$ and graphs $A$ consequently defines a definite property of $H$ at the fixed $k$; it does not assert that every graph has the property.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
