---
id: def-edge-ramsey-class-context
kind: definition
title: Edge-Ramsey class terminology in the motivation
status: published
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
      locator: PDF p. 1, Introduction, paragraph following Theorem 1.1
      statement: The introduction refers to edge Ramsey classes and a question asking
        whether connected non-isomorphic graphs have distinct such classes.
      hypotheses: The article assumes that its graphs have at least one vertex.
      reading_limits: The frozen extracted article text was read at the cited passage.
        The passage does not define the edge-colour parameter; the cited paper
        of Fox and coauthors was not inspected. This reference is attribution,
        not a proof premise.
dependency_level: 2
---

## Definition

Let $H$ and $G$ be finite simple graphs with at least one vertex, and let $k$ be a positive integer. A $k$-edge-colouring of $G$ is any function $c:E(G)\to\{1,\ldots,k\}$; it need not use every colour. An ordinary copy of $H$ in $G$ is a subgraph of $G$ isomorphic to $H$, so extra edges of $G$ between its vertices are allowed. Such a copy is edge-monochromatic when $c(e)=c(f)$ for every two of its edges $e,f$; a copy with no edges is therefore edge-monochromatic.

The $k$-colour edge-Ramsey class of $H$ consists of those graphs $G$ for which every $k$-edge-colouring of $G$ has an edge-monochromatic ordinary copy of $H$. Here class membership is a predicate on graphs, with no choice of a universal set of labelled graphs implied.

## Definition references

[[def-article-graph-conventions]]

[[def-unrestricted-finite-colouring-map]]

[[def-ordinary-edge-preserving-embedding]]

## Justification

The graph conventions specify the finite vertex and edge sets and the ordinary-copy terminology. The colouring definition applies to the finite set $E(G)$, including when it is empty, and gives a definite equality predicate on each copy's edges. The ordinary-embedding definition identifies a copy with the image of an injective edge-preserving map; it does not require nonedges of $H$ to remain nonedges in $G$. Consequently the displayed universal condition gives an unambiguous membership predicate, including for an edgeless $H$.

## Extraction notes

The article mentions edge Ramsey classes but does not specify a colour count in the cited question. The parameter $k$ makes the edge-colouring analogue explicit without asserting which parameter the cited question intends.
