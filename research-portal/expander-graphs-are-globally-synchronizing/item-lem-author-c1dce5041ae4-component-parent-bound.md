---
title: A parent-map bound for isolated components
status: draft
research_item: lem-author-c1dce5041ae4-component-parent-bound
dependency_level: 0
---

## Prerequisites

- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:def-graph-distance-and-girth](https://alphabetamath.cc/item/def-graph-distance-and-girth)
- [math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)


## Statement

Let $X_k$ count connected components with $k$ vertices in $G(n,p)$. For $2\le k\le n$,
$$\mathbb EX_k\le\binom nk k^{k-1}p^{k-1}(1-p)^{k(n-k)}.$$
This upper bound uses a root-parent encoding and does not require the exact count of labelled trees.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Edge indicators for distinct unordered vertex pairs are independent ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] A component consists of all vertices joined to a vertex by finite paths ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F3] Expectations are finite weighted sums ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F4] The coefficient $\binom nk$ counts $k$-element subsets of $[n]$ ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F5] An induced subgraph retains exactly the edges with both endpoints in its vertex set; a spanning subgraph has the full vertex set ([math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)).

[F6] A path has distinct vertices and length equal to its number of traversed edges; a cycle is a closed walk of length at least three with no other vertex repetition ([math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)).

[F7] Distance within a connected component is the minimum length of a path between the vertices ([math:def-graph-distance-and-girth](https://alphabetamath.cc/item/def-graph-distance-and-girth)).

[F8] The indicator of an event is one on that event and zero elsewhere ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

## Proof

**Proof technique:** direct.

1.1 Fix a $k$-vertex set $S$ and root it at its least labelled vertex. If the induced graph on $S$ is connected, every other vertex has a shortest path to the root. Choose as its parent the least labelled neighbor whose distance to the root is one smaller. Following parents strictly decreases distance and reaches the root, so the resulting $k-1$ distinct edges form a connected spanning graph with no cycle. There are at most $k^{k-1}$ parent maps, since each nonroot vertex chooses an element of $S$. Each map arising this way requires $k-1$ distinct internal edges. [F2, F5, F6, F7, algebra, construct]

2.1 For $S$ to be a component, its $k(n-k)$ crossing pairs must be absent. For each valid parent map from step 1.1 its internal required edges and those crossing pairs are disjoint. Independence gives probability $p^{k-1}(1-p)^{k(n-k)}$ for these requirements. Sum over at most $k^{k-1}$ maps and then over the $\binom nk$ sets $S$. The indicator of a union is bounded by the sum of its indicators; applying the finite expectation formula proves the bound, also at $p=0,1$ with zero exponents interpreted as empty products. [step 1.1, F1, F3, F4, F8, algebra] ∎
