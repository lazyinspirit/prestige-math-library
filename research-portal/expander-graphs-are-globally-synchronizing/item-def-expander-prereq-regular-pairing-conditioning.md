---
title: Pairings, simple-graph conditioning and model transfer
status: published
research_item: def-expander-prereq-regular-pairing-conditioning
dependency_level: 0
---

## Prerequisites

- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-conditional-probability](https://alphabetamath.cc/item/def-conditional-probability)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space)
- [math:def-matching-maximum-perfect-and-matching-number](https://alphabetamath.cc/item/def-matching-maximum-perfect-and-matching-number)
- [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)


## Definition

Let $n$ be a positive integer and $d$ a nonnegative integer with $nd=2m$ even. Put $V=\{1,\ldots,n\}$ and attach to each vertex $v$ the $d$ labelled half-edges $(v,1),\ldots,(v,d)$. A pairing is a partition of these $2m$ distinct half-edges into unordered two-element blocks; equivalently, it is a perfect matching of the complete simple graph on the half-edges. The empty set has one pairing. Choose a pairing uniformly from the finite set of all pairings.

Collapse each block to an edge between its two incident vertices. The result is a multigraph: different blocks may give the same unordered endpoints, and a block with both half-edges at one vertex gives a loop. Its degree at a vertex is the number of incident half-edges, so a loop contributes two and every vertex has degree $d$. Let $S$ be the event that the result has neither loops nor repeated edges; on $S$ the result is a simple graph. A labelled simple $d$-regular graph on $V$ is a set of two-element subsets of $V$ in which each vertex belongs to exactly $d$ edges.

If $S$ is nonempty, condition on $S$. The resulting simple graph is uniform over all labelled simple $d$-regular graphs on $V$. Each such graph has exactly $(d!)^n$ pairing realizations. There are $(2m)!/(2^m m!)$ pairings in all. For any event $A$ of pairings, $P(A^c\mid S)\leq P(A^c)/P(S)$, where $A^c$ is the complement of $A$ in the pairing space. Thus along any sequence with $P(S)>0$ and $P(A^c)/P(S)\to0$, the conditional probability of $A$ tends to one. In particular, a uniform positive lower bound on $P(S)$ suffices when $P(A^c)\to0$. No lower bound on $P(S)$ is asserted here.

The degree convention counts a loop twice. This differs from a matrix convention that puts a single unit in a diagonal entry for a loop: the corresponding row sum counts that loop once.

## Facts & Assumptions

[F1] The complete simple graph on a finite set has all two-element subsets of that set as edges, including when the set is empty ([math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)). A perfect matching consists of disjoint edges saturating every vertex; a simple graph has edges that are two-element subsets of its vertex set ([math:def-matching-maximum-perfect-and-matching-number](https://alphabetamath.cc/item/def-matching-maximum-perfect-and-matching-number), [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)).

[F2] In a nonempty finite uniform probability space each outcome has the same weight, and an event has probability equal to its cardinality divided by the cardinality of the outcome set ([math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space), [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F3] For events $B,C$ with $P(C)>0$, conditional probability is $P(B\mid C)=P(B\cap C)/P(C)$ ([math:def-conditional-probability](https://alphabetamath.cc/item/def-conditional-probability)).

[F4] The factorial satisfies $0!=1$ and $k!=k(k-1)!$ for positive integers $k$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

## Justification

**Given:** The labelled half-edges and integers specified in the definition; for conditioning assume additionally that $S$ is nonempty.

**Goal:** Establish that the construction and probabilities are well defined, count the pairings and graph realizations, and prove the conditional transfer bound.

1.1 The half-edge set is finite with even cardinality. Listing its elements and pairing successive elements constructs a pairing; for $m=0$ the empty partition is the unique pairing. Hence the uniform law exists by [F2]. Each half-edge occurs in exactly one block, so collapsing blocks produces exactly $d$ incidences at each vertex, counting both ends of a loop. The event $S$ is a subset of the finite pairing space and its outcomes collapse to simple $d$-regular graphs by [F1]. [F1, F2, construct]

1.2 Fix a labelled simple $d$-regular graph on $V$. At each vertex choose a bijection from its $d$ labelled half-edges to its $d$ incident edges. For every graph edge, pair the two half-edges assigned to it at its endpoints. This constructs a pairing yielding the graph. Conversely, every pairing yielding it gives exactly those vertexwise bijections, since the graph has no repeated edges. There are $d!$ choices at each vertex by successive choices and [F4], including the unique empty bijection when $d=0$; hence there are $(d!)^n$ realizations. [F1, F4, construct]

2.1 Order all $2m$ half-edges in $(2m)!$ ways, using successive choices and [F4]. Consecutive entries define a pairing. Each pairing arises from exactly $2^m m!$ such orders: choose one of two orders within each block and an order of the $m$ blocks. Thus the number of pairings is $(2m)!/(2^m m!)$, including $m=0$. [F4, step 1.1, algebra]

3.1 By [F2], every pairing has the same positive probability. Since $S$ is nonempty, [F3] applies, and step 1.2 shows that each simple $d$-regular graph has the same conditional probability; the conditional graph law is therefore uniform. Also $P(A^c\cap S)\leq P(A^c)$ by summing nonnegative outcome weights, so [F3] gives the stated bound. If its right-hand side tends to zero, the conditional probability of $A$ tends to one; a fixed positive lower bound for $P(S)$ gives the stated sufficient special case. [F2, F3, step 1.2, algebra] ∎
