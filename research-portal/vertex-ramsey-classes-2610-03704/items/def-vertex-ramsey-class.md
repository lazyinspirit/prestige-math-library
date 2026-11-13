---
id: def-vertex-ramsey-class
kind: definition
title: Ordinary vertex-Ramsey class
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-unrestricted-finite-colouring-map
  - def-ordinary-edge-preserving-embedding
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  def-ordinary-edge-preserving-embedding: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Abstract and Introduction, first paragraph
      statement: For a graph $H$ and a positive integer $k$, the $k$-colour
        vertex-Ramsey class consists of the graphs $G$ for which every
        $k$-colouring of the vertices has a monochromatic subgraph isomorphic to
        $H$.
      hypotheses: The article assumes all graphs considered have at least one vertex
        and takes $k$ to be positive.
      reading_limits: The frozen article text was read at the cited passages. This
        reference attributes the formulation; it is not a proof or an
        independent prerequisite.
dependency_level: 2
---

## Definition

Let $H$ be a finite simple graph with at least one vertex, and let $k$ be a positive integer. The **ordinary $k$-colour vertex-Ramsey class** of $H$, denoted $\mathcal R^k(H)$, consists of all finite simple graphs $G$ with at least one vertex for which the following holds: for every function $c:V(G)\to\{1,\ldots,k\}$, there is a subgraph $J$ of $G$ isomorphic to $H$ such that $c$ is constant on $V(J)$.

A subgraph has a subset of the host's vertices and a subset of its edges; an isomorphism is a bijection of vertex sets preserving and reflecting adjacency. Thus $J$ is an ordinary copy of $H$: edges of $G$ between vertices of $J$ may be absent from $J$. The function $c$ is an unrestricted $k$-colouring: it need not use every colour, and adjacent vertices may receive the same colour. Constant colour on $V(J)$ means that the copy is monochromatic.

## Justification

The graph conventions specify finite simple graphs, subgraphs and isomorphisms. The colouring definition supplies the stated functions and monochromatic condition, including unused colours. The ordinary embedding definition identifies an isomorphic subgraph with an injective edge-preserving map from $H$ into $G$: its image vertices and image edges form the copy, while extra host edges are allowed. Consequently the displayed membership condition is definite and does not impose inducedness or proper colouring. Here “class” denotes the collection specified by this condition; no universal set of all graphs is assumed.

## Definition references

[[def-article-graph-conventions]]

[[def-unrestricted-finite-colouring-map]]

[[def-ordinary-edge-preserving-embedding]]
