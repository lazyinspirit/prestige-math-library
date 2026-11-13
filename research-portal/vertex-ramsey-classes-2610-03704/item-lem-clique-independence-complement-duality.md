---
title: Clique and independence duality under complementation
status: published
research_item: lem-clique-independence-complement-duality
dependency_level: 0
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)


## Statement

For every finite simple graph $G$, a vertex subset is independent in $G$ if and only if it is a clique in $\overline G$. Thus $\alpha(G)=\omega(\overline G)$ and $\omega(G)=\alpha(\overline G)$.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

## Facts & Assumptions

[F1] A finite simple graph $G=(V,E)$ has finite vertex set $V$ and edge set $E\subseteq[V]^2$, the set of unordered pairs of distinct vertices. Its complement is $\overline G=(V,[V]^2\setminus E)$, and $\overline{\overline G}=G$. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[F2] Distinct vertices $u,v$ are adjacent in $G=(V,E)$ exactly when $\{u,v\}\in E$. A vertex subset is independent when no two of its distinct vertices are adjacent, and is a clique when every two of its distinct vertices are adjacent. The independence number $\alpha$ and clique number $\omega$ are the respective maxima of the cardinalities of these subsets; both maxima exist for finite graphs, including the empty graph. [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree) [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

## Proof

**Given:** A finite simple graph $G=(V,E)$.

**Goal:** Prove the stated subset equivalence and both equalities of numbers.

1.1 Let $S\subseteq V$. Each pair of distinct vertices of $S$ is a nonedge of $G$ exactly when it is an edge of $\overline G$. Therefore the condition that every such pair is a nonedge of $G$ is equivalent to the condition that every such pair is an edge of $\overline G$; this includes subsets with fewer than two vertices. Hence $S$ is independent in $G$ if and only if it is a clique in $\overline G$. [F1, F2]

2.1 The independent subsets of $G$ and the cliques of $\overline G$ are consequently the same subsets of the same vertex set, so their sets of cardinalities and their maxima coincide: $\alpha(G)=\omega(\overline G)$. Applying the same equivalence to $\overline G$ and using $\overline{\overline G}=G$ gives $\alpha(\overline G)=\omega(G)$. [F1, F2, step 1.1] ∎
