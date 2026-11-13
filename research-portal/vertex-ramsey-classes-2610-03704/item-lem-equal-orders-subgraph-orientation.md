---
title: Orienting equal-order non-isomorphic targets
status: draft
research_item: lem-equal-orders-subgraph-orientation
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, ordinary classes, equal-order case
      statement: For non-isomorphic graphs of equal order, the labels can be chosen so
        that H1 is not a subgraph of H2.
      hypotheses: The graphs have equal order and are non-isomorphic; the article
        assumes graphs have at least one vertex.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation; the proof below uses the
        separate rigidity supplier.
---

PDF p. 2: ` Section 3, ordinary classes, equal-order case `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [lem-finite-mutual-embedding-rigidity](item-lem-finite-mutual-embedding-rigidity)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)


## Statement

Let $H_1$ and $H_2$ be non-isomorphic finite simple graphs of the same order, each with at least one vertex. Their labels can be chosen so that $H_2$ contains no copy of $H_1$.

The order of a graph is the number of its vertices. A copy of $H_1$ in $H_2$ is a subgraph of $H_2$ isomorphic to $H_1$; it need not be induced. A graph isomorphism is a bijection of vertex sets preserving and reflecting adjacency.

## Facts & Assumptions

[F1] A copy of a finite simple graph $J$ in a finite simple graph $L$ exists exactly when an ordinary embedding $J\to L$ exists. An ordinary embedding is an injective vertex map that preserves edges ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)).

[F2] If two finite simple graphs admit ordinary embeddings in both directions, then they are isomorphic ([lem-finite-mutual-embedding-rigidity](item-lem-finite-mutual-embedding-rigidity)).

[F3] The order of a finite graph is the cardinality of its vertex set ([def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)).

## Proof

**Given:** Non-isomorphic finite simple graphs $H_1,H_2$ of equal order, each with at least one vertex.

**Goal:** Choose their labels so that $H_2$ has no copy of $H_1$.

1.1 Ordinary embeddings cannot exist in both directions between the two graphs, since otherwise the rigidity fact would make them isomorphic, contrary to the hypothesis. Hence at least one direction has no ordinary embedding. [given, F2]

2.1 Label the source of a direction without an ordinary embedding $H_1$ and its target $H_2$. By the copy-embedding equivalence, $H_2$ contains no copy of $H_1$. Relabelling preserves the equal-order hypothesis. [given, F1, F3, step 1.1] ∎

## Source notes

The cited article uses this orientation in the equal-order case. The argument above derives it from mutual-embedding rigidity; in fact that rigidity gives the orientation even without the equal-order hypothesis.
