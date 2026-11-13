---
title: Finite symmetric networks and loop removal
status: published
research_item: def-expander-prereq-loop-compatible-networks
dependency_level: 0
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)
- [math:def-finite-weighted-graph-laplacian](https://alphabetamath.cc/item/def-finite-weighted-graph-laplacian)
- [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)
- [math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid)


## Definition

A **network** consists of a nonempty finite vertex set $V$ and a real matrix $A=(A_{xy})_{x,y\in V}$ that is symmetric and entrywise nonnegative. A diagonal entry $A_{xx}$ is a loop weight. Its **loop-free part** is $W=A-\operatorname{diag}(A_{xx})$, where the diagonal matrix has entries $A_{xx}$ and all off-diagonal entries zero. The **support graph** has vertex set $V$ and edge set $\{\{x,y\}:x\ne y,\ W_{xy}>0\}$. Define the degree $d(x)=\sum_{y\in V}A_{xy}$, counting the diagonal entry once, and put $D=\operatorname{diag}(d(x))$. The network Laplacian is $D-A$.

The matrix $D-A$ is also the weighted Laplacian of $W$: $D-A=\operatorname{diag}(\sum_y W_{xy})-W$. A simple unweighted graph is represented by the special case $A_{xx}=0$ and $A_{xy}\in\{0,1\}$ for all $x,y$; its edges are precisely the pairs with $A_{xy}=1$.

## Facts & Assumptions

[F1] A finite simple graph has edges that are two-element subsets of its vertex set; its adjacency matrix has entry one exactly at adjacent distinct vertices. See [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) and [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph).

[F2] For a finite symmetric nonnegative matrix with zero diagonal, the weighted Laplacian is the diagonal matrix of row sums minus that matrix, and its support graph has an edge exactly at a positive entry. See [math:def-finite-weighted-graph-laplacian](https://alphabetamath.cc/item/def-finite-weighted-graph-laplacian).

[F3] A finite square matrix over $\mathbb R$ is a function on a finite square index set; a listing of $V$ identifies a $V$-indexed real array with such a matrix. See [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring).

[F4] A sum of real numbers indexed by a finite set is the sum in the additive commutative monoid of $\mathbb R$, computed using any enumeration; its value is independent of that enumeration. See [math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid).

## Justification

**Given:** A network $(V,A)$ as defined above.

**Goal:** Verify the support-graph and Laplacian constructions and the simple-graph special case.

1.1 Choose a listing $V=\{v_1,\ldots,v_n\}$, where $n=|V|\ge1$. The array $A$ becomes the square real matrix with entries $A_{v_i v_j}$; diagonal matrices and matrix differences here are formed entrywise. The row sums in this listing agree with the sums indexed by $V$ and do not depend on the listing. The matrix $W$ is symmetric and nonnegative, has zero diagonal, and has $W_{xy}=A_{xy}$ for $x\ne y$. Thus its positive off-diagonal entries define an unordered set of two-element subsets of $V$, and the support graph is a finite simple graph. After any listing of $V$, $W$ satisfies the hypotheses of the weighted-Laplacian definition. [given, F1, F2, F3, F4]

2.1 For each $x$, $\sum_y W_{xy}=d(x)-A_{xx}$. Consequently $D=\operatorname{diag}(\sum_y W_{xy})+\operatorname{diag}(A_{xx})$ and $A=W+\operatorname{diag}(A_{xx})$, so the diagonal terms cancel in $D-A$. If $A$ has zero diagonal and entries in $\{0,1\}$, its support graph has adjacency matrix $A$ in any chosen vertex order; conversely every finite simple graph on nonempty $V$ gives such a matrix. This also shows that the degree $d(x)$ retains a loop weight even though the Laplacian does not. [step 1.1, F1, F2, F3, F4, algebra] ∎
