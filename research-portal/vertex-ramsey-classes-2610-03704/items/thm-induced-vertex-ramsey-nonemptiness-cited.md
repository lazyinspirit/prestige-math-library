---
id: thm-induced-vertex-ramsey-nonemptiness-cited
kind: theorem
title: Nonemptiness attributed to Folkman
status: published
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-induced-vertex-ramsey-class
  - def-hypergraph-copy-construction
  - thm-high-girth-high-chromatic-hypergraphs-cited
  - prop-construction-induced-ramsey-property
  - def-hypergraph-ramsey-construction-terminology
  - math:def-injection-surjection-bijection
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-hypergraph-copy-construction: mathematical-premise
  thm-high-girth-high-chromatic-hypergraphs-cited: mathematical-premise
  prop-construction-induced-ramsey-property: mathematical-premise
  def-hypergraph-ramsey-construction-terminology: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
proof_strategy: cases
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Introduction, first paragraph, citation [4]; PDF p. 4,
        References [4]
      statement: For every graph H and positive integer k, the induced k-colour
        vertex-Ramsey class of H is nonempty.
      hypotheses: The article assumes that all graphs considered have at least one
        vertex, and k is a positive integer.
      reading_limits: The frozen extracted article text was read at the cited
        passages. This reference attributes the assertion and is not a proof
        premise. Folkman's cited paper was not inspected.
dependency_level: 9
---

## Statement

For every finite simple graph $H$ with at least one vertex and every positive integer $k$, the induced $k$-colour vertex-Ramsey class $\mathcal R^k_{\mathrm{ind}}(H)$ is nonempty.

## Statement references

[[def-article-graph-conventions]]

[[def-induced-vertex-ramsey-class]]

## Facts & Assumptions

[F1] By [[def-article-graph-conventions]], a graph here has a nonempty finite vertex set and an edge set consisting of two-element subsets. A vertex $k$-colouring is any function into $\{1,\ldots,k\}$. An induced copy of $H$ in a graph $G$ preserves both adjacency and nonadjacency, and is monochromatic when its vertices all have the same colour.

[F2] By [[def-induced-vertex-ramsey-class]], $G\in\mathcal R^k_{\mathrm{ind}}(H)$ exactly when $G$ is a nonempty finite simple graph and every vertex $k$-colouring of $G$ has a monochromatic induced copy of $H$.

[F3] For a finite graph $H$ of order at least two, [[thm-high-girth-high-chromatic-hypergraphs-cited]] supplies a finite $|V(H)|$-uniform hypergraph of Berge girth at least three with no weak $k$-colouring. Here uniformity means each hyperedge has $|V(H)|$ vertices; no weak $k$-colouring means every assignment of the $k$ colours to its vertices has a monochromatic hyperedge. By [[def-hypergraph-copy-construction]], this hypergraph and bijections from $V(H)$ to its hyperedges give choices for the graph $G(H,3,k)$. The hypergraph terms, including Berge cycles and Berge girth, have the meanings in [[def-hypergraph-ramsey-construction-terminology]], and bijections have the meaning in [[math:def-injection-surjection-bijection]].

[F4] By [[prop-construction-induced-ramsey-property]], every graph obtained from those construction choices belongs to $\mathcal R^k_{\mathrm{ind}}(H)$.

## Proof

**Given:** A finite simple graph $H$ with at least one vertex and a positive integer $k$.

**Goal:** Exhibit a graph in $\mathcal R^k_{\mathrm{ind}}(H)$.

1.1 If $|V(H)|\geq2$, use F3 to choose a hypergraph and the finite family of bijections defining $G(H,3,k)$. The construction theorem F4 places this graph in $\mathcal R^k_{\mathrm{ind}}(H)$. [given, F3, F4, choose, assume-case]

1.2 If $|V(H)|=1$, take $G=H$. Every vertex $k$-colouring of $G$ makes its sole vertex monochromatic. The identity on that vertex is an induced copy of $H$ in $G$, since there are no pairs of distinct vertices on which adjacency or nonadjacency needs checking. Thus $G\in\mathcal R^k_{\mathrm{ind}}(H)$ by F2. [given, F1, F2, construct, assume-case]

2.1 The nonempty finite vertex set of $H$ has either one vertex or at least two, so one of the preceding steps supplies a member of the class. Hence the class is nonempty. [given, F1, step 1.1, step 1.2, cases-exhaustive] ∎

## Source notes

The article attributes the nonemptiness assertion to Folkman. That attribution is recorded here without using the article or the unread Folkman paper as a proof premise.
