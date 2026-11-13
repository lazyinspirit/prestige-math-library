---
title: "Lemma 2.1: repetition characterizes connectivity"
status: published
research_item: lem-ramsey-repetition-iff-connected
dependency_level: 12
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Lemma 2.1 and proof
      statement: For every positive integer k, a graph has the Ramsey repetition
        property if and only if it is connected.
      hypotheses: The article considers nonempty graphs and positive integers k.
      reading_limits: The frozen article text at the cited passage was read. This
        reference attributes the formulation; it is not a proof premise.
---

PDF p. 2: ` Lemma 2.1 and proof `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-ramsey-repetition-property](item-def-ramsey-repetition-property)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)
- [lem-connected-graphs-repetition](item-lem-connected-graphs-repetition)
- [lem-disconnected-target-repetition-witness](item-lem-disconnected-target-repetition-witness)


## Statement

Let $k\geq1$ be an integer and let $H$ be a finite simple graph with at least one vertex. Then $H$ has the Ramsey repetition property at $k$ if and only if $H$ is connected.

Connected means that every two vertices of $H$ are joined by a path. The repetition property means that, for every finite simple nonempty graph $A$ and every integer $q\geq1$, $A\in\mathcal R^k_{\mathrm{ind}}(H)$ if and only if $qA\in\mathcal R^k_{\mathrm{ind}}(H)$. Here $qA$ is the disjoint union of $q$ copies of $A$, and membership in $\mathcal R^k_{\mathrm{ind}}(H)$ means that every colouring of the graph's vertices with colours from $\{1,\ldots,k\}$ contains a monochromatic induced copy of $H$. An induced copy preserves both adjacency and nonadjacency, and monochromatic means that all its vertices have the same colour.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-ramsey-repetition-property](item-def-ramsey-repetition-property)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

## Facts & Assumptions

[F1] For a connected finite simple nonempty graph $H$ and positive integer $k$, $H$ has the Ramsey repetition property at $k$. [lem-connected-graphs-repetition](item-lem-connected-graphs-repetition)

[F2] The connected components of a finite graph partition its vertex set. They are nonempty connected subgraphs; if the nonempty graph is disconnected, it has at least two components. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)

[F3] If a finite simple graph $H$ has $t\geq2$ connected components and $k$ is positive, there exist a finite simple graph $A$ and a positive integer $q$ such that $A\notin\mathcal R^k_{\mathrm{ind}}(H)$ but $qA\in\mathcal R^k_{\mathrm{ind}}(H)$. Specifically, the witness lemma takes $q=k(t-1)+1$ and supplies an eligible $A$. [lem-disconnected-target-repetition-witness](item-lem-disconnected-target-repetition-witness)

[F4] The repetition property requires the two membership predicates for $A$ and $qA$ to agree for every permitted $A$ and positive $q$. [def-ramsey-repetition-property](item-def-ramsey-repetition-property)

## Proof

**Given:** A positive integer $k$ and a finite simple nonempty graph $H$.

**Goal:** Show that $H$ has the repetition property at $k$ exactly when $H$ is connected.

1.1 If $H$ is connected, F1 applies to the given $H$ and $k$, so $H$ has the repetition property at $k$. [given, F1]

2.1 If $H$ is disconnected, F2 gives $t\geq2$ connected components. By F3, there are a permitted graph $A$ and positive integer $q$ for which $qA$ belongs to $\mathcal R^k_{\mathrm{ind}}(H)$ but $A$ does not. This contradicts the universal equivalence required by F4, so $H$ does not have the repetition property. Thus the repetition property implies connectivity by contraposition; together with step 1.1, this proves the equivalence. [given, F2, F3, F4, step 1.1] ∎
