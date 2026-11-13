---
id: def-graph-join
kind: definition
title: Join of graphs
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-graph-isomorphism-and-complement
  - def-article-graph-conventions
  - def-tagged-finite-graph-family
  - math:def-complete-connection-of-two-disjoint-graphs
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  def-article-graph-conventions: mathematical-premise
  def-tagged-finite-graph-family: mathematical-premise
  math:def-complete-connection-of-two-disjoint-graphs: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Section 2, first paragraph; PDF p. 2, Lemma 2.1, disconnected
        case
      statement: The join of two graphs consists of vertex-disjoint copies with all
        edges between the copies; the disconnected case uses the iterated join
        of the components.
      hypotheses: The article considers graphs with at least one vertex; the displayed
        iterated join has at least two components.
      reading_limits: The frozen extracted article text was read at the cited
        passages. This reference attributes the article formulation; it is not a
        proof or an independent prerequisite.
dependency_level: 2
---

## Definition

Let $t\geq 1$ be an integer and let $H_1,\ldots,H_t$ be finite simple graphs. Form their tagged disjoint graph family $D$, whose part for $i$ is $\{i\}\times V(H_i)$ and whose edges within that part are exactly $\{(i,u),(i,v)\}$ for $\{u,v\}\in E(H_i)$. The **join** $H_1\vee\cdots\vee H_t$ is the graph on $V(D)$ whose edges are the edges of $D$ together with every pair of vertices from distinct tagged parts. Thus each part induces a copy of its graph, and every vertex in one part is adjacent to every vertex in another part.

In particular, $G\vee H$ is obtained from vertex-disjoint copies of $G$ and $H$ by adding all edges between the copies. The construction also permits empty vertex sets, although the article's graph convention requires its graphs to be nonempty.

## Definition references

[[def-article-graph-conventions]]

[[def-tagged-finite-graph-family]]

[[math:def-complete-connection-of-two-disjoint-graphs]]

[[math:def-finite-simple-graph]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-graph-isomorphism-and-complement]]

## Justification

The tagged-family construction gives a finite vertex set, pairwise disjoint parts, and exactly the stated edges within each part. Adding the specified pairs from distinct parts gives a uniquely determined set of two-element subsets of that finite vertex set, hence a finite simple graph. The map $v\mapsto(i,v)$ is an isomorphism from $H_i$ to the subgraph induced by its tagged part. Any other choice of pairwise disjoint isomorphic copies gives an isomorphic join by applying the chosen isomorphisms part by part; within-part adjacency and all cross-part adjacency are preserved and reflected. For $t=2$, the construction is the complete connection of the two tagged copies. For $t=1$, it is a tagged copy of $H_1$.
