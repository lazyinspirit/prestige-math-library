---
id: alg-independent-block-transversal
kind: algorithm
title: Greedy choice in the block-cutvertex tree
status: published
origin: pipeline
domain: mathematics
deps:
  - def-block-cutvertex-tree-terminology
  - math:def-finite-simple-graph
  - math:def-connected-graph-and-connected-component
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
dependency_roles:
  def-block-cutvertex-tree-terminology: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Observe that
      statement: Starting with a root block, choose one of its vertices; process
        subsequent blocks away from the root, choosing no vertex when the
        attachment vertex has already been chosen and otherwise choosing another
        vertex of the block.
      hypotheses: The graph is connected and has an edge.
      reading_limits: The frozen article text was read at the cited passage. This
        citation attributes the procedure and is not used to establish its
        properties.
dependency_level: 6
---

## Definition

The input is a finite connected simple graph $H$ with at least one edge. A cutvertex is a vertex whose deletion increases the number of connected components. A block is a maximal 2-connected subgraph or a bridge together with its endpoints; 2-connected means connected, with at least three vertices, and remaining connected after deletion of any one vertex, while a bridge is an edge whose deletion increases the number of connected components.

Form the block-cutvertex tree: its nodes are the blocks and cutvertices, with a block node adjacent to precisely the cutvertex nodes representing vertices in that block. Choose any block node as the root. Process the other block nodes in nondecreasing distance from the root, breaking ties arbitrarily. The attachment vertex of a nonroot block is the cutvertex represented by the node immediately following that block node on its path to the root.

Initially choose any vertex of the root block and put it in $I$. For each subsequent block $B$, let $a$ be its attachment vertex. If $a$ is already in $I$, leave $I$ unchanged; otherwise choose any vertex of $B$ other than $a$ and add it to $I$. After all blocks have been processed, output $I$. The root, ordering of tied blocks, and vertices selected are choices, so the procedure may have more than one output for the same input.

## Definition references

[[def-block-cutvertex-tree-terminology]]

## Justification

The block-cutvertex tree terminology supplies the incidence tree, a root block, unique paths and attachment vertices for every nonroot block under the stated hypotheses. Every block has at least two vertices: a bridge block has its two endpoints, and a 2-connected block has at least three vertices. Thus the root choice and each required choice outside an attachment vertex are available. The graph is finite, so it has finitely many blocks; the prescribed order therefore processes all of them in finitely many stages. Each stage specifies how to update the set $I$, and the final output is a subset of $V(H)$. These observations establish that the procedure can be carried out; they do not assert its separate independence or block-meeting properties.
