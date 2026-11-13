---
title: Cycles are 2-connected
status: published
research_item: lem-author-3d61151c342f-cycle-two-connectivity
dependency_level: 1
---

## Prerequisites

- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)


## Statement

The subgraph consisting of a simple cycle in a finite simple graph is 2-connected.

## Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

## Facts & Assumptions

[F1] A simple cycle has at least three vertices, all distinct except for the repeated endpoint; its consecutive vertices are adjacent. [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F2] A graph is 2-connected when it has at least three vertices, is connected, and remains connected after deleting any vertex. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F3] A graph is connected when its vertex set is nonempty and every two vertices are joined by a path. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

## Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Write the cycle in its cyclic vertex order. Following that order joins any two cycle vertices, so the cycle subgraph is connected and has at least three vertices. [F1, F3]

2.1 After any vertex is deleted, the remaining vertices in cyclic order starting just after that vertex form a path containing all remaining vertices. Thus the remaining graph is connected, proving 2-connectivity. [F1, F2, F3, step 1.1] ∎
