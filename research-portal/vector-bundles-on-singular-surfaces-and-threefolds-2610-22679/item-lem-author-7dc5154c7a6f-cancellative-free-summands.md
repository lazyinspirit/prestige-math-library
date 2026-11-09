---
title: Common projective complements and cancellation by free modules
status: draft
research_item: lem-author-7dc5154c7a6f-cancellative-free-summands
dependency_level: 2
---

## Prerequisites

- [lem-finite-projective-complements](item-lem-finite-projective-complements)

## Statement
Let $A$ be a commutative ring with unit. Call a finite projective $A$-module $P$ cancellative if, for every finite projective $Q$ and every integer $N\geq0$, $P\oplus A^N\cong Q\oplus A^N$ implies $P\cong Q$. This is equivalent to cancellation of an arbitrary common finite projective summand: $P\oplus T\cong Q\oplus T$ implies $P\cong Q$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The choice-free module clause states that every finite projective $T$ has a finite projective complement $T\prime$ with $T\oplus T\prime\cong A^N$. [lem-finite-projective-complements](item-lem-finite-projective-complements)

## Proof

1.1 If $P$ is cancellative in the free-summand sense and $P\oplus T\cong Q\oplus T$, add the complement $T\prime$ to both sides. Associativity converts this into $P\oplus A^N\cong Q\oplus A^N$, so $P\cong Q$. [F1, given]

2.1 Conversely $A^N$ is finite projective and can itself be used as the common summand $T$. Thus cancellation of arbitrary common summands implies the free-summand definition. This also proves the definition has the claimed precise meaning. [given, step 1.1] ∎
