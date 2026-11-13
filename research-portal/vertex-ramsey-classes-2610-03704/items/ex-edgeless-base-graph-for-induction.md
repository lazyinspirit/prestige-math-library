---
id: ex-edgeless-base-graph-for-induction
kind: example
title: Edgeless choice of A
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - def-independent-remainder-for-induction
  - def-induced-forbidden-class
  - def-induced-vertex-ramsey-class
  - def-unrestricted-finite-colouring-map
  - lem-finite-palette-capacity
  - lem-independent-deletion-leaves-a-vertex
  - math:def-standard-complete-bipartite-path-and-cycle-graphs
  - math:def-induced-embedding-and-induced-copy
  - math:def-finite-cardinality
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  def-independent-remainder-for-induction: mathematical-premise
  def-induced-forbidden-class: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  lem-finite-palette-capacity: mathematical-premise
  lem-independent-deletion-leaves-a-vertex: mathematical-premise
  math:def-standard-complete-bipartite-path-and-cycle-graphs: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning First
      statement: If F has no edges, take A to be an edgeless graph on k(|F|-1)+1
        vertices; the construction is asserted to lie in Forb(H1) and the
        induced k-colour vertex-Ramsey class of F.
      hypotheses: In the surrounding argument H1 and H2 are connected graphs, each
        with an edge; F is obtained by deleting an independent set from H2, and
        k is a positive integer.
      reading_limits: The frozen article text at the cited passage and its surrounding
        setup were read. This reference attributes the construction; the
        verification below is local.
dependency_level: 10
---

## Example

Let $H_1,H_2$ and the independent set $I$ be as in the induction setup: in particular, $H_1$ and $H_2$ are finite connected simple graphs, each with an edge, and $F=H_2-I$ is the induced graph on the vertices outside $I$. Let $k\geq1$ be an integer and suppose $F$ has no edges. Take $A$ to be an edgeless graph on $k(|F|-1)+1$ vertices, where $|F|$ is the number of vertices of $F$. Then $A\in\operatorname{Forb}(H_1)\cap\mathcal R^k_{\mathrm{ind}}(F)$.

Here edgeless means having no edges. The class $\operatorname{Forb}(H_1)$ consists of graphs with no induced copy of $H_1$; $\mathcal R^k_{\mathrm{ind}}(F)$ consists of graphs for which every assignment of the colours $1,\ldots,k$ to vertices has a monochromatic induced copy of $F$. An induced copy is the image of an injection preserving both adjacency and nonadjacency.

## Example references

[[math:def-finite-simple-graph]]

[[def-independent-remainder-for-induction]]

[[def-induced-forbidden-class]]

[[def-induced-vertex-ramsey-class]]

[[def-unrestricted-finite-colouring-map]]

[[math:def-standard-complete-bipartite-path-and-cycle-graphs]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-finite-cardinality]]

## Facts & Assumptions

[F1] Deleting an independent set from a finite simple graph with an edge leaves at least one vertex; in the induction setup this gives $|F|\geq1$. [[lem-independent-deletion-leaves-a-vertex]] [[def-independent-remainder-for-induction]]

[F2] If a finite set has more than $k(n-1)$ elements, then every colouring of it with $k$ colours has a colour class with at least $n$ elements, for positive integers $k,n$. [[lem-finite-palette-capacity]]

[F3] An edgeless graph has empty edge set. An induced embedding is an injection preserving adjacency and nonadjacency, and finite sets of the same cardinality admit a bijection. [[math:def-finite-simple-graph]] [[math:def-standard-complete-bipartite-path-and-cycle-graphs]] [[math:def-induced-embedding-and-induced-copy]] [[math:def-finite-cardinality]]

[F4] Membership in the forbidden class means absence of an induced copy; membership in the induced vertex-Ramsey class means that every permitted vertex colouring has a monochromatic induced copy. [[def-induced-forbidden-class]] [[def-induced-vertex-ramsey-class]] [[def-unrestricted-finite-colouring-map]]

## Verification

**Given:** The graphs and integer $k$ in the example, with $F$ edgeless and $A$ edgeless on $k(|F|-1)+1$ vertices.

**Goal:** Verify that $A$ belongs to both stated classes.

1.1 The graph $H_1$ has an edge, whereas $A$ has none. An induced embedding of $H_1$ into $A$ would send the endpoints of that edge to an edge of $A$, which is impossible. Thus $A\in\operatorname{Forb}(H_1)$. [given, F3, F4]

1.2 Put $n=|F|$. By nonemptiness $n\geq1$, and $|V(A)|=k(n-1)+1>k(n-1)$. For any $k$-colouring of $A$, the capacity bound gives a colour class containing at least $n$ vertices. Choose $n$ of them. [given, F1, F2, choose]

2.1 Both $F$ and the graph induced by the chosen vertices are edgeless and have $n$ vertices. A bijection from $V(F)$ to those vertices therefore preserves adjacency and nonadjacency, giving a monochromatic induced copy of $F$. Since the colouring was arbitrary, $A\in\mathcal R^k_{\mathrm{ind}}(F)$. Together with step 1.1 this proves the claimed intersection membership. [step 1.1, step 1.2, F3, F4] ∎
