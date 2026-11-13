---
title: Weighted spectral bounds control the degree without loops
status: draft
research_item: lem-author-3bf637a47abd-weighted-offdiagonal-degree
dependency_level: 2
---

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)


## Statement

Let $A$ be a network on a finite nonempty $V$, $n=|V|$, $d_0>0$, and $L=D-A$ with $D_{xx}=d_A(x)=\sum_yA_{xy}$. Put $J_{xy}=1$, let $I$ be the identity matrix, and set $\Delta_L=L-d_0I+(d_0/n)J$. Suppose $c^-d_0I\preceq\Delta_L\preceq c^+d_0I$, where matrix order is the quadratic-form order on the vertex space. Then the degree without the loop, $s(x)=\sum_{y\ne x}A_{xy}=d_A(x)-A_{xx}$, satisfies $(1+c^-)d_0-d_0/n\le s(x)\le(1+c^+)d_0-d_0/n$ for every $x$. The network, vertex-space and matrix-order definitions are [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space) and [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm).

## Facts & Assumptions

[F1] The network Laplacian has diagonal entry $d_A(x)-A_{xx}=s(x)$ ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)).

[F2] The vertex-space matrix action and inner product use finite coordinate sums ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F3] If $aI\preceq B\preceq bI$ for a Hermitian matrix, then $a\le B_{xx}\le b$ ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 The matrix $\Delta_L$ is real symmetric, hence Hermitian in the vertex-space convention. Its diagonal entry equals $s(x)-d_0+d_0/n$, since $I_{xx}=J_{xx}=1$. [F1, F2, algebra]

2.1 Apply the diagonal order test [F3] to obtain $c^-d_0\le s(x)-d_0+d_0/n\le c^+d_0$. Adding $d_0-d_0/n$ proves the pointwise bounds for every vertex. No upper bound on the loop weights was used. [F3, step 1.1, algebra] ∎
