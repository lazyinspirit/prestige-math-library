---
title: Block-cutvertex tree terminology
status: draft
research_item: def-block-cutvertex-tree-terminology
dependency_level: 5
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, independent-set paragraph
      statement: For a connected graph with an edge, the article starts with a root
        block in the block-cutvertex tree, processes blocks away from the root,
        and refers to the attachment vertex of each subsequent block.
      hypotheses: The graph is connected and has an edge.
      reading_limits: The frozen article text was read at the cited passage. This
        citation attributes the usage; it is not a proof or an independent
        prerequisite for the terminology.
---

PDF p. 3: ` Section 3, independent-set paragraph `

## Prerequisites

- [def-block-and-largest-block-order](item-def-block-and-largest-block-order)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)
- [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)
- [math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)


## Definition

Let $G$ be a finite connected simple graph with at least one edge. A cutvertex is a vertex whose deletion, together with its incident edges, increases the number of connected components. A block is a maximal 2-connected subgraph, or the subgraph consisting of a bridge and its two endpoints. Here 2-connected means connected, having at least three vertices, and remaining connected after deletion of any one vertex; a bridge is an edge whose deletion increases the number of connected components.

The **block-cutvertex tree** of $G$ is the incidence graph with one formally labelled node for each block and one differently labelled node for each cutvertex. A block node and a cutvertex node are adjacent exactly when the cutvertex belongs to that block; there are no other edges. A tree is a connected graph with no cycle.

Choose a block node as the **root block**. The distance of a node from the root is the number of edges in the unique path joining them. To process blocks **away from the root**, process their nodes in nondecreasing distance from the root, with ties in any order. For a nonroot block $B$, its **attachment vertex** is the cutvertex of $G$ represented by the node immediately following $B$ on the unique path from $B$ to the root. If there is only one block, it is the root and there are no nonroot blocks or attachment vertices.

## Definition references

[def-block-and-largest-block-order](item-def-block-and-largest-block-order)

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

## Justification

The block and cutvertex definitions determine the two finite node families and the incidence relation. The graph has an edge, so it has a block. The block-incidence decomposition states that this incidence graph is a tree under the stated hypotheses. Formal labels keep the two node types distinct.

In a tree, each pair of nodes is joined by a unique path. Thus distances and the prescribed ordering are definite. A nonroot block node has a first neighbour on its path to the root; the incidence graph is bipartite, so that neighbour is a cutvertex node, and its associated vertex is uniquely determined. The one-block case has no nonroot block to which this prescription must be applied.

## Extraction notes

The article uses the root and attachment terminology in its greedy prescription. The explicit incidence construction and the choice of nondecreasing distance formalize that usage; the structural tree assertion is supplied independently by the block-incidence decomposition.
