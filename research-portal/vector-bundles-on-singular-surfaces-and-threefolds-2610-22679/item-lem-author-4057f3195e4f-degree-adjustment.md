---
title: Degree-zero representatives modulo a boundary class
status: published
research_item: lem-author-4057f3195e4f-degree-adjustment
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-group-power](https://alphabetamath.cc/item/def-group-power)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)
- [math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)


## Statement
Let $q:A\to D$ and $\deg:A\to\mathbb Z$ be homomorphisms of abelian groups. If $q$ is surjective and there is $e\in\ker q$ with $\deg(e)=1$, then $q$ maps $\ker(\deg)$ onto $D$.

## Statement references

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)

## Facts & Assumptions

[F1] We use additive notation for abelian groups: $0$ is the identity, $-x$ is the inverse and $x-y=x+(-y)$ ([math:def-group](https://alphabetamath.cc/item/def-group)). The codomain $(\mathbb Z,+)$ and the integer arithmetic used below are supplied by the commutative-ring structure of the integers ([math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)).

[F2] A homomorphism preserves addition; it also preserves zero, inverses and integer multiples, so $f(x-y)=f(x)-f(y)$ and $f(nx)=nf(x)$ for $n\in\mathbb Z$ ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)).

[F3] In additive notation $\ker f=\{x:f(x)=0\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)). Surjectivity means that each target element has a preimage ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F4] For $n\in\mathbb Z$ and an element $x$ of an additive group, $nx$ denotes the integer group power in additive notation, defined by repeated addition for nonnegative integers and inversion for negative integers ([math:def-group-power](https://alphabetamath.cc/item/def-group-power)).

**Given:** The homomorphisms and element in the statement.

**Goal:** Find a degree-zero preimage of every element of $D$.

## Proof

1.1 Given $y\in D$, choose $a\in A$ with $q(a)=y$ and put $a_0=a-\deg(a)e$. Then $\deg(a_0)=\deg(a)-\deg(a)\deg(e)=0$. [given, F1, F2, F3, F4, choose, construct]

2.1 Since $q(e)=0$, we also have $q(a_0)=q(a)-\deg(a)q(e)=q(a)=y$. Thus every $y$ has a preimage in $\ker(\deg)$. [given, F1, F2, F3, F4, step 1.1] ∎
