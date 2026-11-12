---
title: Dimension decreases under quotients
status: published
research_item: lem-author-14463ef2f4e5-quotient-dimension
dependency_level: 6
---

PDF p. 4: Finite valuative dimension

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)


## Statement
For a commutative ring $A$ and ideal $I$, $\dim(A/I)\leq\dim A$, using $-1$ for the zero ring.

## Statement references
[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

## Facts & Assumptions
**Given:** A commutative ring $A$ and an ideal $I$.

**Goal:** Compare the Krull dimensions of $A/I$ and $A$.

[F1] Krull dimension is the supremum of the lengths of strict chains of prime ideals, with dimension $-1$ for the zero ring. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[F2] For the quotient ring $A/I$, contraction along the quotient map gives an inclusion-preserving bijection from its prime ideals to the prime ideals of $A$ containing $I$. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)

## Proof
1.1 By [F2], the inverse image of a prime ideal under the quotient map $A\to A/I$ is prime, and distinct prime ideals have distinct inverse images. Since contraction preserves inclusion, every strict prime chain in $A/I$ pulls back to a strict prime chain of the same length in $A$. [F2, given]

2.1 Taking suprema gives the inequality. If $A/I$ is zero, its dimension is $-1$, and the same inequality holds by the convention in [F1]. [F1, step 1.1] ∎
