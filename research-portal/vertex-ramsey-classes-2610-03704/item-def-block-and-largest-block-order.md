---
title: Blocks and the parameter beta
status: draft
research_item: def-block-and-largest-block-order
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF page 1, Section 2, first paragraph
      statement: A block is a maximal 2-connected subgraph or a bridge; beta is the
        largest block order when the graph has an edge, and is 1 when it has no
        edges.
      hypotheses: The article considers graphs with at least one vertex.
      reading_limits: The frozen article text was read at the cited passage. This
        reference attributes the convention and notation; it is not used as a
        proof of well-definedness.
---

PDF p. 1: ` Section 2, first paragraph `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)


## Definition

Let $H$ be a finite simple graph with at least one vertex. A graph is **connected** if every two of its vertices are joined by a path; a component is a maximal connected subgraph. Deleting a vertex removes it and all incident edges; deleting an edge removes only that edge. A **bridge** is an edge whose deletion increases the number of components. A graph is **2-connected** if it has at least three vertices, is connected, and remains connected after deletion of any one vertex.

A **block** of $H$ is either a 2-connected subgraph maximal under subgraph containment in $H$, or the two-vertex, one-edge subgraph consisting of a bridge and its endpoints. Isolated vertices are not blocks under this convention. The **order** $|H|$ is its number of vertices and the **size** $\|H\|$ is its number of edges. If $\|H\|\geq 1$, define $\beta(H)$ to be the largest order of a block of $H$; if $\|H\|=0$, define $\beta(H)=1$.

## Justification

The graph conventions specify finite simple graphs and subgraph containment. The block-system definition specifies connectivity, deletion, bridges, 2-connected subgraphs and maximality, and proves that a finite graph with an edge has at least one nontrivial block. Its nontrivial blocks are exactly the blocks defined here, and its parameter $b(H)$ is their largest order when an edge exists and is $1$ otherwise. Thus $\beta(H)=b(H)$ is well-defined in both cases. The order and size notation is supplied by the graph-order definition. [def-article-graph-conventions](item-def-article-graph-conventions) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
