---
title: Uniqueness from squares and cubes
status: published
research_item: lem-author-30ec96de6e59-square-cube-uniqueness
dependency_level: 0
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)


## Statement
Let $A$ be a reduced commutative ring. If $a,b\in A$ satisfy $a^2=b^2$ and $a^3=b^3$, then $a=b$. Here reduced means that the only nilpotent element is zero.

## Statement references

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

## Facts & Assumptions

**Given:** A reduced commutative ring $A$ and elements $a,b$ with equal squares and equal cubes.

**Goal:** Prove $a=b$.

[F1] In a commutative ring, addition is an abelian group operation, multiplication is associative and commutative, and multiplication distributes over addition; these laws justify the polynomial expansion below ([math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)).

[F2] An element $u$ is nilpotent when $u^n=0$ for some integer $n\ge1$; in a reduced ring every such element is zero ([math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)).

## Proof

1.1 From the equalities, $a^2b=b^3=a^3$ and $ab^2=a^3$. Consequently $(a-b)^3=a^3-3a^2b+3ab^2-b^3=0$. [given, F1, algebra]

2.1 Reducedness gives $a-b=0$, so $a=b$. [given, F2, step 1.1] ∎
