---
title: Cohomology of a cochain complex
status: published
research_item: lem-author-b747b28c359f-cochain-cohomology
dependency_level: 0
---

PDF p. 4: Definition 2.2

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)
- [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal)
- [math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal)
- [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws)
- [math:cor-quotient-of-an-abelian-group-is-abelian](https://alphabetamath.cc/item/cor-quotient-of-an-abelian-group-is-abelian)


## Statement
For a cochain complex $C$ of abelian groups and an integer $i$, the quotient $H^i(C)=\ker(d^i:C^i\to C^{i+1})/\operatorname{im}(d^{i-1}:C^{i-1}\to C^i)$ is an abelian group.

A cochain complex consists of abelian groups $C^i$ and homomorphisms $d^i$ satisfying $d^{i+1}d^i=0$. Elements of the kernel are cocycles and elements of the image are coboundaries.

## Facts & Assumptions

[F1] Abelian groups are groups with commutative operation, written additively here, and group homomorphisms preserve the operation: [math:def-group](https://alphabetamath.cc/item/def-group) and [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism).

[F2] For an additive group homomorphism $f:G\to H$, its kernel is $\{x\in G:f(x)=0\}$ and its image is $\{f(x):x\in G\}$, as in [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism).

[F3] A subgroup carries the restricted group operation; normality means invariance under conjugation: [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup) and [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup).

[F4] The kernel of a group homomorphism is a subgroup of its domain, and its image is a subgroup of its codomain: [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal).

[F5] Every subgroup of an abelian group is normal: [math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal).

[F6] For a group $G$ and a normal subgroup $N$, the quotient group $G/N$ consists of cosets, with a well-defined group operation induced by that of $G$: [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) and [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws).

[F7] If $G$ is abelian and $N$ is a normal subgroup, then $G/N$ is abelian: [math:cor-quotient-of-an-abelian-group-is-abelian](https://alphabetamath.cc/item/cor-quotient-of-an-abelian-group-is-abelian).

## Proof

**Given:** A cochain complex $C$ and an integer $i$, with the square-zero condition stated in the inline definition.

**Goal:** Show that the displayed quotient is an abelian group.

1.1 Put $Z=\ker d^i$ and $B=\operatorname{im}d^{i-1}$. If $x\in B$, then $x=d^{i-1}(y)$ for some $y$, so $d^i(x)=d^id^{i-1}(y)=0$ by the given square-zero condition; hence $B\subseteq Z$. By [F4], $Z$ and $B$ are subgroups of $C^i$. Their restricted operations agree, so $B$ is a subgroup of $Z$ by [F3]. Commutativity in $C^i$ restricts to $Z$, which is therefore abelian by [F1]; thus [F5] makes $B$ normal in $Z$. [given, F1, F2, F3, F4, F5]

2.1 By [F6], $Z/B$ inherits a well-defined group operation, additively $(z+B)+(z'+B)=(z+z')+B$. Since $Z$ is abelian, [F7] makes this quotient abelian. By the formula in the Statement, it is $H^i(C)$. [step 1.1, F6, F7] ∎
