---
title: Dimension decreases under quotients
status: published
research_item: lem-author-14463ef2f4e5-quotient-dimension
dependency_level: 6
---

PDF p. 4: Finite valuative dimension

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

## Statement
For a commutative ring $A$ and ideal $I$, $\dim(A/I)\leq\dim A$, using $-1$ for the zero ring.

## Facts & Assumptions
**Given:** A commutative ring $A$ and an ideal $I$.

**Goal:** Compare the Krull dimensions of $A/I$ and $A$.

[F1] Krull dimension is the supremum of the lengths of strict chains of prime ideals. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

## Proof
1.1 The inverse image of a prime ideal under the quotient map $A\to A/I$ is prime. Distinct ideals of $A/I$ have distinct inverse images, since the map is surjective. Thus every strict prime chain in $A/I$ pulls back to a strict prime chain of the same length in $A$. [given, algebra]

2.1 Taking suprema gives the inequality. If $A/I$ is zero, its dimension is $-1$, and the same inequality holds by the convention in [F1]. [F1, step 1.1] ∎
