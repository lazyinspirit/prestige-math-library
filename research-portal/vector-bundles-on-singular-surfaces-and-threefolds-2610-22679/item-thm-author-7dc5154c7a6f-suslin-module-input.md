---
title: Suslin cancellation over affine algebras
status: draft
research_item: thm-author-7dc5154c7a6f-suslin-module-input
dependency_level: 0
---

## Prerequisites

None.

## Statement
Let $k$ be an algebraically closed field of arbitrary characteristic, let $A$ be a commutative unital finite-type $k$-algebra of Krull dimension $d$, and let $P$ be a finite projective $A$-module of constant rank $r\geq d$. Then $P$ is cancellative: for every finite projective $Q$ and every integer $N\geq0$, an isomorphism $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$.

## External input
This is an explicit established external input, attributed to Suslin 1977 through Keshari. The numbered argument only translates the exact statement and cancellation convention. The five local application items establish the separate affine/K-zero application interface; they do not reconstruct Suslin's deep cancellation argument. The factorial restriction in Keshari's abstract concerns a different rank-(d-1) problem and is absent from Theorem 1.1(i).

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The external input is exactly Keshari Theorem 1.1(i), with cancellative defined immediately above it.


## Proof

1.1 The affine algebra, base field and rank bound are the hypotheses of the imported theorem. Its conclusion says precisely that $P$ is cancellative in the source definition. [F1, given]

2.1 Expand the source definition in [F1], which explicitly uses a common finite free summand. It yields the displayed implication for every common finite free stabilization, including $N=0$. [F1, step 1.1] ∎
