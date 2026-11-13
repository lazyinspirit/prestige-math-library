---
id: lem-connected-graphs-repetition
kind: lemma
title: Connected targets have repetition
status: published
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-disjoint-graph-multiple
  - def-induced-vertex-ramsey-class
  - def-ramsey-repetition-property
  - def-unrestricted-finite-colouring-map
  - math:def-connected-graph-and-connected-component
  - lem-connected-subgraphs-in-anticomplete-parts
  - lem-finite-colouring-transport-and-restriction
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-disjoint-graph-multiple: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-ramsey-repetition-property: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  lem-connected-subgraphs-in-anticomplete-parts: mathematical-premise
  lem-finite-colouring-transport-and-restriction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Lemma 2.1, first proof paragraph
      statement: For a connected graph H, membership of A in the induced vertex-Ramsey
        class is equivalent to membership of each positive disjoint multiple qA;
        an avoiding colouring can be repeated on the copies.
      hypotheses: H and A are nonempty graphs, and k and q are positive integers.
      reading_limits: The frozen article text at the cited passage was inspected. This
        reference attributes the article claim; the proof below uses the
        declared local suppliers.
dependency_level: 4
---

## Statement

Let $k\geq1$ and let $H$ be connected. For every graph $A$ and integer $q\geq1$, $A\in\mathcal R^k_{\mathrm{ind}}(H)$ implies $qA\in\mathcal R^k_{\mathrm{ind}}(H)$, and a colouring of $A$ avoiding a monochromatic induced $H$ can be repeated on all copies to avoid one in $qA$. Thus $H$ has the Ramsey repetition property at $k$.

## Statement references

[[def-article-graph-conventions]]

[[def-disjoint-graph-multiple]]

[[def-induced-vertex-ramsey-class]]

[[def-ramsey-repetition-property]]

[[def-unrestricted-finite-colouring-map]]

[[math:def-connected-graph-and-connected-component]]

## Facts & Assumptions

[F1] Graphs are finite, simple and nonempty. A $k$-colouring is a function to $\{1,\ldots,k\}$; a copy is monochromatic when its vertices receive the same colour. An induced copy preserves both adjacency and nonadjacency. [[def-article-graph-conventions]] [[def-unrestricted-finite-colouring-map]]

[F2] The graph $qA$ has vertices $(i,v)$ for $1\leq i\leq q$ and $v\in V(A)$, with edges precisely between $(i,u)$ and $(i,v)$ when $uv$ is an edge of $A$. Its tagged parts are induced copies of $A$ with no edges between different parts. [[def-disjoint-graph-multiple]]

[F3] A graph belongs to $\mathcal R^k_{\mathrm{ind}}(H)$ exactly when every $k$-colouring contains a monochromatic induced copy of $H$. The repetition property at $k$ asserts this membership is equivalent for $A$ and $qA$ for every $A$ and positive $q$. [[def-induced-vertex-ramsey-class]] [[def-ramsey-repetition-property]]

[F4] A connected graph is nonempty and has a path between every two vertices. The image of a connected graph under an induced embedding into a disjoint graph family lies in one tagged part. [[math:def-connected-graph-and-connected-component]] [[lem-connected-subgraphs-in-anticomplete-parts]]

[F5] Restriction preserves the colours of vertices, and composition of induced embeddings is induced and preserves monochromaticity under the transported colouring. [[lem-finite-colouring-transport-and-restriction]]

## Proof

**Given:** A positive integer $k$, a connected graph $H$, a graph $A$, and a positive integer $q$.

**Goal:** Prove both membership implications and the stated construction of an avoiding colouring.

1.1 Suppose $A\in\mathcal R^k_{\mathrm{ind}}(H)$, and take any $k$-colouring of $qA$. Restrict it to the first tagged part and transport it to $A$ by $v\mapsto(1,v)$. Membership of $A$ gives a monochromatic induced embedding of $H$ in $A$. Composing with that tagged-copy map gives a monochromatic induced copy in $qA$. Since the original colouring was arbitrary, $qA\in\mathcal R^k_{\mathrm{ind}}(H)$. [F2, F3, F5, given]

1.2 Suppose instead that $A\notin\mathcal R^k_{\mathrm{ind}}(H)$. Choose a $k$-colouring $c$ of $A$ with no monochromatic induced copy of $H$, and colour every vertex $(i,v)$ of $qA$ by $c(v)$. If this colouring had a monochromatic induced copy of $H$, connectivity would put all its vertices in one tagged part. Projecting that part by $(i,v)\mapsto v$ would give a monochromatic induced copy of $H$ in $A$, contradicting the choice of $c$. Therefore the repeated colouring avoids such a copy and $qA\notin\mathcal R^k_{\mathrm{ind}}(H)$. [F1, F2, F3, F4, F5, given, construct]

2.1 Step 1.2 proves the contrapositive of the implication from membership of $qA$ to membership of $A$; step 1.1 proves the converse. Since $A$ and $q$ were arbitrary, their membership predicates are equivalent for every graph $A$ and positive integer $q$. This is the Ramsey repetition property at $k$. [F3, step 1.1, step 1.2] ∎
