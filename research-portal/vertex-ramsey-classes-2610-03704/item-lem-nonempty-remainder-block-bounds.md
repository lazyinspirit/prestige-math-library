---
title: Block bounds in the edged-F case
status: published
research_item: lem-nonempty-remainder-block-bounds
dependency_level: 10
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning First
      statement: When the chosen remainder F has an edge, beta(F) is at least two,
        beta(H1) is at least three, and a largest block B of H1 is not contained
        in any copy of F placed on a hyperedge in Construction 1.
      hypotheses: H1 and H2 are non-isomorphic finite connected simple graphs with
        edges, ordered and equipped with the independent remainder as stated in
        the item.
      reading_limits: The frozen article text at the cited passage was read. This
        reference attributes the formulation; the proof below uses the declared
        mathematical suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning First, edged-F case `

## Prerequisites

- [def-independent-remainder-for-induction](item-def-independent-remainder-for-induction)
- [def-block-and-largest-block-order](item-def-block-and-largest-block-order)
- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)
- [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)
- [lem-block-containment-under-subgraph-embeddings](item-lem-block-containment-under-subgraph-embeddings)


## Statement

Let $H_1,H_2$ be non-isomorphic finite connected simple graphs with edges, ordered so that $\beta(H_1)\geq\beta(H_2)$. Let $I$ be an independent set of $H_2$ such that $F=H_2-I$ satisfies $\beta(F)<\beta(H_2)$. An independent set contains no edge with both endpoints in it; $H_2-I$ is the induced graph on the vertices outside $I$. Suppose that $F$ has an edge.

Then $\beta(F)\geq2$ and $\beta(H_1)\geq3$. If $B$ is a block of $H_1$ of order $\beta(H_1)$, no copy of $F$ placed on a hyperedge in Construction 1 contains a subgraph isomorphic to $B$.

A block is a maximal 2-connected subgraph or a bridge together with its endpoints. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deleting any one vertex; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $\beta$ is the largest number of vertices in a block; for a nonempty edgeless graph it is $1$. A copy of a graph is a subgraph isomorphic to it, allowing extra edges in the ambient graph.

## Statement references

[def-independent-remainder-for-induction](item-def-independent-remainder-for-induction)

[def-block-and-largest-block-order](item-def-block-and-largest-block-order)

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)

## Facts & Assumptions

[F1] The chosen independent remainder is a nonempty finite graph and satisfies $\beta(F)<\beta(H_2)\leq\beta(H_1)$. [def-independent-remainder-for-induction](item-def-independent-remainder-for-induction)

[F2] If an independent deletion from a finite simple graph with an edge leaves a graph with an edge, the remainder's largest nontrivial block order is at least two. [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)

[F3] A block of order at least three is 2-connected. Every 2-connected subgraph of a finite simple graph lies in a maximal 2-connected subgraph; consequently its order is at most the host's largest block order. [def-block-and-largest-block-order](item-def-block-and-largest-block-order) [lem-block-containment-under-subgraph-embeddings](item-lem-block-containment-under-subgraph-embeddings)

[F4] Each hyperedge piece in Construction 1 is isomorphic to $F$. A copy is an isomorphic subgraph, and isomorphisms preserve and reflect adjacency. [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction) [def-article-graph-conventions](item-def-article-graph-conventions)

## Proof

**Given:** The stated graphs, independent set and remainder, with $F$ containing an edge.

**Goal:** Prove the two block-order bounds and the noncontainment assertion.

1.1 By the independent-deletion bound, $\beta(F)\geq2$. The strict inequality $\beta(F)<\beta(H_2)$ and the ordering $\beta(H_2)\leq\beta(H_1)$ therefore give $\beta(H_1)\geq3$, since these block orders are integers. [F1, F2, given]

2.1 A largest block $B$ exists because $H_1$ has an edge. Its order is $\beta(H_1)\geq3$, so it is 2-connected. If a hyperedge piece contained a subgraph isomorphic to $B$, transporting that subgraph across the piece's isomorphism with $F$ would give a 2-connected subgraph of $F$ of order $\beta(H_1)$. The containment bound would then give $\beta(H_1)\leq\beta(F)$, contradicting $\beta(F)<\beta(H_1)$. Thus no such piece contains $B$. [F1, F3, F4, step 1.1] ∎
