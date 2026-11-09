---
title: Uniqueness from squares and cubes
status: published
research_item: lem-author-30ec96de6e59-square-cube-uniqueness
dependency_level: 0
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

None.

## Statement
Let $A$ be a reduced commutative ring. If $a,b\in A$ satisfy $a^2=b^2$ and $a^3=b^3$, then $a=b$. Here reduced means that the only nilpotent element is zero.

## Facts & Assumptions

**Given:** A reduced commutative ring $A$ and elements $a,b$ with equal squares and equal cubes.

**Goal:** Prove $a=b$.

## Proof

1.1 From the equalities, $a^2b=b^3=a^3$ and $ab^2=a^3$. Consequently $(a-b)^3=a^3-3a^2b+3ab^2-b^3=0$. [given, algebra]

2.1 Reducedness gives $a-b=0$, so $a=b$. [given, step 1.1] ∎
