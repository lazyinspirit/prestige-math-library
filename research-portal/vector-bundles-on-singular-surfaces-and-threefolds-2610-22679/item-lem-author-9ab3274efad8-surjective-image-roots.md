---
title: Roots descend through a surjective homomorphism
status: published
research_item: lem-author-9ab3274efad8-surjective-image-roots
dependency_level: 0
---

PDF p. 13: Divisibility of the Picard group

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-group-power](https://alphabetamath.cc/item/def-group-power)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)


## Statement
Let $q: A \to B$ be a surjective homomorphism of abelian groups and let $n$ be a positive integer. If multiplication by $n$ is surjective on $A$, then multiplication by $n$ is surjective on $B$.

## Statement references

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-group-power](https://alphabetamath.cc/item/def-group-power)

## Facts & Assumptions

[F1] The groups $A$ and $B$ are written additively, and a group homomorphism $q$ preserves their addition ([math:def-group](https://alphabetamath.cc/item/def-group), [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)).

[F2] For an element $y$ of either group, $ny$ denotes its $n$-fold sum, defined recursively by $0y=0$ and $(k+1)y=ky+y$; these multiples are well-defined by the group-power construction in additive notation ([math:def-group-power](https://alphabetamath.cc/item/def-group-power)). Multiplication by $n$ means the function $y \mapsto ny$ from that group to itself. An $n$-th additive root of $b$ means an element $y$ with $ny=b$.

[F3] A function $f:X\to Y$ is surjective if for each $y\in Y$ there is an $x\in X$ with $f(x)=y$ ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F4] A group homomorphism preserves integer powers; in additive notation, $q(nx)=nq(x)$ for every integer $n$ and every $x\in A$ ([math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties), claim 3).

**Given:** $q$, $A$, $B$ and the positive integer $n$ as stated, with $q$ and multiplication by $n$ on $A$ surjective.

**Goal:** Find an $n$-th additive root of every element of $B$.

## Proof

1.1 For $b\in B$, surjectivity of $q$ gives $a\in A$ with $q(a)=b$. Surjectivity of multiplication by $n$ on $A$ gives $x\in A$ with $nx=a$. [given, F2, F3, choose]

2.1 Since $q$ is a homomorphism, $nq(x)=q(nx)=q(a)=b$. Thus $q(x)$ is the required root, and multiplication by $n$ on $B$ is surjective. [F1, F2, F3, F4, step 1.1] ∎
