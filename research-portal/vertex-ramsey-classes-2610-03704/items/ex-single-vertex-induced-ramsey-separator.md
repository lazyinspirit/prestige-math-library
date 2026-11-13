---
id: ex-single-vertex-induced-ramsey-separator
kind: example
title: Single-vertex target case
status: published
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-induced-vertex-ramsey-class
  - math:def-standard-complete-bipartite-path-and-cycle-graphs
  - math:def-induced-embedding-and-induced-copy
  - math:def-walks-paths-and-connectedness-in-a-simple-graph
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  math:def-standard-complete-bipartite-path-and-cycle-graphs: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-walks-paths-and-connectedness-in-a-simple-graph: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, first paragraph after Figure 1
      statement: If one of two non-isomorphic connected targets is $K_1$, then $K_1$
        belongs to its induced vertex-Ramsey class but not to that of the other
        target. The remaining argument assumes both targets have an edge.
      hypotheses: The targets are non-isomorphic connected graphs with at least one
        vertex, and $k$ is a positive integer.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation; the verification below is
        local.
dependency_level: 3
---

## Example

Let $k$ be a positive integer, and let $H_1,H_2$ be non-isomorphic finite simple connected graphs with at least one vertex each. If $H_1=K_1$, then $K_1\in\mathcal R^k_{\mathrm{ind}}(H_1)\setminus\mathcal R^k_{\mathrm{ind}}(H_2)$. The same conclusion with the target labels exchanged holds when $H_2=K_1$. Consequently, after these cases are handled, both connected targets have at least one edge.

Here $K_1$ is the complete graph on one vertex. A graph is connected if every two of its vertices are joined by a path, a finite list of distinct vertices with consecutive vertices adjacent. The induced $k$-colour vertex-Ramsey class of a target consists of the graphs in which every vertex colouring by $k$ available colours has a monochromatic induced copy of that target. An induced copy is the image of an injection preserving both adjacency and nonadjacency; monochromatic means that all its vertices have the same colour.

## Example references

[[def-article-graph-conventions]]

[[def-induced-vertex-ramsey-class]]

[[math:def-standard-complete-bipartite-path-and-cycle-graphs]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-walks-paths-and-connectedness-in-a-simple-graph]]

## Facts & Assumptions

[F1] By [[def-article-graph-conventions]] and [[math:def-standard-complete-bipartite-path-and-cycle-graphs]], a finite simple graph has edges consisting of pairs of distinct vertices, and $K_1$ has one vertex and no edges.

[F2] By [[def-induced-vertex-ramsey-class]] and [[math:def-induced-embedding-and-induced-copy]], class membership requires a monochromatic induced embedding for every $k$-colouring; such an embedding is injective and preserves and reflects adjacency.

[F3] By [[math:def-walks-paths-and-connectedness-in-a-simple-graph]], any two vertices of a connected graph are joined by a path whose consecutive vertices are adjacent.

## Verification

**Given:** The hypotheses of the example, first with $H_1=K_1$.

**Goal:** Establish the displayed class difference and the stated reduction.

1.1 For any $k$-colouring of $K_1$, its only vertex is monochromatic, and the identity map is an induced embedding of $H_1=K_1$ into $K_1$. Hence $K_1\in\mathcal R^k_{\mathrm{ind}}(H_1)$. [given, F1, F2]

2.1 The nonempty graph $H_2$ cannot have exactly one vertex: a finite simple graph on one vertex has no edges and is isomorphic to $K_1$. Thus it has at least two vertices, so no injection from its vertex set to the one-vertex set of $K_1$ exists. In particular, $K_1$ contains no induced copy of $H_2$ under any colouring; since $k\geq1$, a $k$-colouring of $K_1$ exists, and $K_1\notin\mathcal R^k_{\mathrm{ind}}(H_2)$. Exchanging the labels proves the symmetric case. [given, F1, F2, step 1.1]

3.1 If a nonempty connected simple graph has at least two vertices, a path between two distinct vertices has a consecutive pair, which is an edge. Every nonempty one-vertex simple graph is isomorphic to $K_1$; hence, once the single-vertex cases have been handled, each connected target has an edge. [given, F1, F3, step 2.1] ∎
