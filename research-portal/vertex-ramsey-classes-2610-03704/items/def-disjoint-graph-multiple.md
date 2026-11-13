---
id: def-disjoint-graph-multiple
kind: definition
title: The disjoint multiple qA
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-tagged-finite-graph-family
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-tagged-finite-graph-family: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 2, paragraph before Lemma 2.1
      statement: For a graph A, the notation qA denotes a pairwise vertex-disjoint
        union of q copies of A.
      hypotheses: The article considers graphs with at least one vertex; the following
        repetition-property formulation takes q to be a positive integer.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This citation attributes the notation and is not a proof or independent
        prerequisite.
dependency_level: 2
---

## Definition

Let $A=(V(A),E(A))$ be a finite simple graph with at least one vertex, and let $q$ be a positive integer. Define $qA$ to be the graph with vertex set $\{1,\ldots,q\}\times V(A)$ and edge set $\{\{(i,u),(i,v)\}:1\leq i\leq q,\ \{u,v\}\in E(A)\}$.

Thus $qA$ is the disjoint union of $q$ copies of $A$: the copy indexed by $i$ has vertices $\{i\}\times V(A)$, and distinct copies have disjoint vertex sets and no edges between them. A copy here means a subgraph isomorphic to $A$; an isomorphism is a bijection of vertex sets that preserves and reflects adjacency.

## Definition references

[[def-article-graph-conventions]]

[[def-tagged-finite-graph-family]]

## Justification

Apply the tagged graph-family construction to the finite index set $\{1,\ldots,q\}$, taking each indexed graph to be $A$. It gives the displayed finite simple graph, with pairwise disjoint tagged parts and no edges between distinct parts. Within the part indexed by $i$, the map $v\mapsto(i,v)$ is a bijection that preserves and reflects adjacency, so that part with its internal edges is a copy of $A$. Since $q\geq1$ and $V(A)$ is nonempty, $qA$ has at least one vertex and meets the stated graph convention. The displayed sets determine the graph uniquely; any other disjoint union with the same indexed copies is isomorphic to it by the componentwise copy isomorphisms.
