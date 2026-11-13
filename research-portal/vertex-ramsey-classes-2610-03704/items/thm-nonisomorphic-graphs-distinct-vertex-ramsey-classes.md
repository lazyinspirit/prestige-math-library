---
id: thm-nonisomorphic-graphs-distinct-vertex-ramsey-classes
kind: theorem
title: "Theorem 1.1: both vertex-Ramsey distinctions"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-vertex-ramsey-class
  - def-induced-vertex-ramsey-class
  - math:def-graph-isomorphism-and-complement
  - thm-distinct-ordinary-vertex-ramsey-classes
  - thm-distinct-induced-vertex-ramsey-classes
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-vertex-ramsey-class: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  thm-distinct-ordinary-vertex-ramsey-classes: mathematical-premise
  thm-distinct-induced-vertex-ramsey-classes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Abstract and Theorem 1.1; PDF pp. 2–4, Section 3
      statement: For non-isomorphic graphs and every positive integer k, both their
        ordinary k-colour vertex-Ramsey classes and their induced k-colour
        vertex-Ramsey classes are distinct.
      hypotheses: The article assumes that all graphs considered have at least one vertex.
      reading_limits: The frozen article text was inspected at the cited passages.
        This citation attributes the theorem; the proof below uses the declared
        local results.
dependency_level: 19
---

## Statement

Let $H_1,H_2$ be non-isomorphic finite simple graphs, each with at least one vertex, and let $k$ be a positive integer. Then $\mathcal R^k(H_1)\ne\mathcal R^k(H_2)$ and $\mathcal R^k_{\mathrm{ind}}(H_1)\ne\mathcal R^k_{\mathrm{ind}}(H_2)$.

Graphs are isomorphic if a bijection between their vertex sets preserves and reflects adjacency. For a graph $H$, $\mathcal R^k(H)$ is the collection of nonempty finite simple graphs $G$ for which every function $V(G)\to\{1,\ldots,k\}$ has a monochromatic ordinary copy of $H$: a subgraph isomorphic to $H$ whose vertices all have one colour. The induced class $\mathcal R^k_{\mathrm{ind}}(H)$ uses the same condition with induced copies, which also preserve nonadjacency. Equality of classes means equality of membership for every such graph $G$.

## Statement references

[[def-article-graph-conventions]]

[[math:def-graph-isomorphism-and-complement]]

[[def-vertex-ramsey-class]]

[[def-induced-vertex-ramsey-class]]

## Facts & Assumptions

[F1] For non-isomorphic nonempty finite simple graphs and any positive integer $k$, their ordinary $k$-colour vertex-Ramsey classes are distinct. [[thm-distinct-ordinary-vertex-ramsey-classes]]

[F2] For non-isomorphic nonempty finite simple graphs and any positive integer $k$, their induced $k$-colour vertex-Ramsey classes are distinct. [[thm-distinct-induced-vertex-ramsey-classes]]

## Proof

**Given:** Non-isomorphic finite simple graphs $H_1,H_2$, each with at least one vertex, and a positive integer $k$.

**Goal:** Prove both stated inequalities of vertex-Ramsey classes.

1.1 The given graphs and colour count satisfy the hypotheses of F1. Therefore $\mathcal R^k(H_1)\ne\mathcal R^k(H_2)$. [given, F1]

2.1 The same hypotheses satisfy F2. Therefore $\mathcal R^k_{\mathrm{ind}}(H_1)\ne\mathcal R^k_{\mathrm{ind}}(H_2)$. Combining the two inequalities proves the statement. [given, F2, step 1.1] ∎

## Source notes

The article citation attributes the combined theorem. The argument above composes the separate ordinary and induced results.
