---
title: Independence numbers of disjoint families and complete joins
status: published
research_item: lem-independence-of-disjoint-families-and-joins
dependency_level: 1
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)
- [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)


## Statement

Let $J_1,\ldots,J_t$ be nonempty finite simple graphs, where $t\geq 1$. Let $D$ be their disjoint union, formed using tagged copies, and let $Q$ be their iterated complete join: it has the same tagged parts, retains the edges within each part, and has every possible edge between distinct parts. An independent set is a vertex set containing no adjacent pair, and $\alpha(J)$ is the maximum size of such a set in $J$. Then $\alpha(D)=\sum_{j=1}^t\alpha(J_j)$ and $\alpha(Q)=\max_{1\leq j\leq t}\alpha(J_j)$. If $t\geq 2$, this maximum is strictly less than the sum.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

## Facts & Assumptions

[F1] In the tagged disjoint family, the parts are pairwise disjoint, each part is a copy of its graph, and no edges join distinct parts. [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[F2] The complete connection of two disjoint graphs retains their internal edges and adds every edge between their vertex sets. [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)

[F3] For a finite simple graph, an independent set contains no two adjacent vertices, and its independence number is the attained maximum of the sizes of its independent sets. A nonempty graph has independence number at least one. [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[F4] The cardinality of a finite union of pairwise disjoint finite sets is the sum of their cardinalities; a finite sum splits over a partition of its index set. [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)

## Proof

**Given:** The graphs and constructions in the statement.

**Goal:** Prove the two formulas and the strict inequality when $t\geq 2$.

1.1 Let $S$ be independent in $D$. Its intersection with the $j$th tagged part corresponds to an independent set of $J_j$, so it has at most $\alpha(J_j)$ vertices. The intersections partition $S$; the finite sum rule gives $|S|\leq\sum_{j=1}^t\alpha(J_j)$. Conversely, choose an independent set of size $\alpha(J_j)$ in each $J_j$. Their tagged copies have no edges between them, so their union is independent in $D$ and has size $\sum_{j=1}^t\alpha(J_j)$. Therefore $\alpha(D)$ equals that sum. [F1, F3, F4]

1.2 By the complete-connection definition, successive joins retain all internal edges and make every two distinct tagged parts completely adjacent. Thus an independent set of $Q$ meets at most one part, and its size is at most $\max_j\alpha(J_j)$; this also holds for the empty set. Choose an index attaining that finite maximum and a maximum independent set in its part. It remains independent in $Q$, so $\alpha(Q)=\max_j\alpha(J_j)$. [F1, F2, F3]

2.1 If $t\geq 2$, choose an index $r$ attaining the maximum. Every $J_j$ is nonempty, so every $\alpha(J_j)\geq1$; in particular the sum over indices other than $r$ is positive. Splitting the sum at $r$ gives $\sum_j\alpha(J_j)>\alpha(J_r)=\max_j\alpha(J_j)$. Together with the preceding steps this proves all assertions. [step 1.1, step 1.2, F3, F4] ∎
