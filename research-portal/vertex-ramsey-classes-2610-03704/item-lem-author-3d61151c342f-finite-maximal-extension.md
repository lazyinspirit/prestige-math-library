---
title: Finite maximal extension of a 2-connected subgraph
status: published
research_item: lem-author-3d61151c342f-finite-maximal-extension
dependency_level: 1
---

## Prerequisites

- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)


## Statement

Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph, hence in a nontrivial block.

## Facts & Assumptions

[F1] A finite simple graph has finite vertex and edge sets, and its subgraphs are specified by subsets of these sets. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A maximal 2-connected subgraph is a nontrivial block; maximality is with respect to subgraph containment. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

## Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Let $H$ be the given 2-connected subgraph. There are finitely many subgraphs of the ambient graph, so the nonempty family of 2-connected subgraphs containing $H$ is finite. Choose one maximizing the sum of its vertex and edge counts. [F1]

2.1 A proper supergraph in that family would strictly increase that sum. There is therefore no larger 2-connected subgraph containing the chosen one, and it is a nontrivial block containing $H$. [F1, F2, step 1.1] ∎
