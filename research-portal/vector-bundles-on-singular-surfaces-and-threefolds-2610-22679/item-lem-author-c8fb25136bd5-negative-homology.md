---
title: Negative homology of the cycle complex
status: published
research_item: lem-author-c8fb25136bd5-negative-homology
dependency_level: 5
---

PDF p. 13: CH3 identification and degree seven vanishing

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

For a field $k$, a smooth finite-type $k$-scheme $X$, $r\geq0$, and an integer $n<0$, one has $H_nz^r(X,\bullet)=0$.

## Facts & Assumptions
**Given:** $k$, $X$, $r$ and $n$ as in the statement.

**Goal:** Compute the indicated homology group.

[F1] The Bloch complex has zero chain group in every negative degree, and its homology is the kernel modulo the image. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 Since $n<0$, the chain group in degree $n$ is zero, so the kernel of its outgoing differential is zero. [F1]

2.1 The incoming image is a subgroup of this zero kernel; consequently their quotient is zero. [F1, step 1.1] ∎
