---
title: A complete weighted network distinguishes a loop cap from spectral control
status: published
research_item: lem-author-3bf637a47abd-weighted-complete-example
dependency_level: 4
---

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [lem-author-3bf637a47abd-weighted-scale-covariance](item-lem-author-3bf637a47abd-weighted-scale-covariance)
- [lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope)


## Statement

On $V=\{1,2\}$ take $A=2J$, $d_0=4$, $\alpha=1/1000$, $c^-=-1/100$ and $c^+=1/100$, where $J$ is the $2\times2$ all-ones matrix. Degrees and Laplacians have the network convention [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks), and matrix norms and order have the vertex-space convention [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space). Both $\|A-(d_0/2)J\|\le\alpha d_0$ and $c^-d_0I\preceq L-d_0I+(d_0/2)J\preceq c^+d_0I$ hold, and $c^->-1$, $0<\alpha<1/5$, $c^-<0<c^+$. Yet $d_{\max}=4>(1+c^+)d_0+1-d_0/2=76/25$. The loop-dependent bound of [lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope) remains valid. This example concerns this degree bound only; it makes no assertion that a synchronization theorem fails.

## Facts & Assumptions

[F1] Degrees are row sums and the network Laplacian is $D-A$ ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)); finite matrix action and norms use [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space).

[F2] Common positive rescaling preserves the normalized centered-matrix inequalities ([lem-author-3bf637a47abd-weighted-scale-covariance](item-lem-author-3bf637a47abd-weighted-scale-covariance)).

[F3] The upper degree envelope with arbitrary loops has $\ell_{\max}$ in place of a fixed unit cap ([lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope)).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Begin with $A=J$ on two vertices and $d_0=2$. Both row degrees are $2$, so $L=2I-J$ and both centered matrices are zero. Apply [F2] with $\lambda=2$: the asserted $A=2J$, $d_0=4$ have degrees $4$, $L=4I-2J$, and again both residuals are zero. A zero norm satisfies the positive adjacency bound, and $-(1/25)I\preceq0\preceq(1/25)I$ follows by testing quadratic forms. All strict sign inequalities in the Statement follow immediately from the chosen rational numbers. [F1, F2, algebra]

2.1 The proposed unit-cap expression is $(101/100)4+1-2=76/25<4$. In contrast, here $\ell_{\max}=2$, so [F3] gives $d_{\max}\le(101/100)4-2+2=101/25$, which is true. Thus the failure comes exactly from substituting a unit loop cap for an arbitrary nonnegative loop, despite exact centered spectral residuals. [F1, F3, step 1.1, algebra] ∎
