---
title: A torsion kernel in a uniquely divisible group vanishes
status: published
research_item: lem-author-b87d598e83f3-torsion-kernel-injective
dependency_level: 1
---

## Prerequisites

- [lem-author-b87d598e83f3-unique-roots-torsion](item-lem-author-b87d598e83f3-unique-roots-torsion)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)


## Statement
Let $f:G\to H$ be a homomorphism of abelian groups. If multiplication by each positive integer is bijective on $G$, and every element of $\ker f$ is killed by some positive integer, then $f$ is injective.

## Facts & Assumptions
**Given:** The homomorphism and hypotheses in the statement.

**Goal:** Prove injectivity.

[F1] [lem-author-b87d598e83f3-unique-roots-torsion](item-lem-author-b87d598e83f3-unique-roots-torsion) proves that $G$ is torsion-free under the stated bijectivity hypothesis: $nx=0$ for a positive integer $n$ implies $x=0$.

[F2] [math:def-group](https://alphabetamath.cc/item/def-group) supplies the abelian group laws, additive identities $0$ and inverses $-x$ in $G$ and $H$. We write $a-b=a+(-b)$, and for a positive integer $n$ write $nx$ for the sum of $n$ copies of $x$; closure under addition makes this an element of the same group. An element is called torsion here precisely when some such $nx$ equals $0$.

[F3] [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) supplies $f(a+b)=f(a)+f(b)$ for $a,b\in G$.

[F4] [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism) defines $\ker f=\{x\in G:f(x)=0\}$, where the zero on the right is the identity of $H$.

[F5] [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) defines bijective as injective and surjective, and injective as $f(a)=f(b)$ implying $a=b$ for all domain elements.

[F6] [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties) gives $f(0)=0$ and $f(-b)=-f(b)$ for the group homomorphism $f$.

## Proof
1.1 For any $x\in\ker f$, the hypothesis supplies a positive integer $n$ with $nx=0$. The bijectivity hypothesis allows [F1] to give $x=0$. Conversely, [F6] gives $f(0)=0$, so $0\in\ker f$ by [F4]. Thus $\ker f=\{0\}$. [given, F1, F2, F4, F6]

2.1 Let $a,b\in G$ satisfy $f(a)=f(b)$. By [F3] and [F6], $f(a-b)=f(a)+f(-b)=f(a)-f(b)=0$, using the additive inverse law in $H$ from [F2]. Hence $a-b\in\ker f$ by [F4], so step 1.1 gives $a-b=0$. The group laws in [F2] yield $a=(a-b)+b=b$. This proves injectivity in the sense of [F5]. [F2, F3, F4, F5, F6, step 1.1] ∎
