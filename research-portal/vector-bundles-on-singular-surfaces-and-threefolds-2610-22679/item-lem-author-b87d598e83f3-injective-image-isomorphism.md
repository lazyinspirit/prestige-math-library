---
title: An injection identifies its domain with its image
status: published
research_item: lem-author-b87d598e83f3-injective-image-isomorphism
dependency_level: 0
---

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal)
- [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse)


## Statement
If $f:G\to H$ is an injective homomorphism of abelian groups, its corestriction $G\to\operatorname{im}f$ is an isomorphism. Here $\operatorname{im}f=\{f(a):a\in G\}$ carries the operation inherited from $H$, and the corestriction is the function $c:G\to\operatorname{im}f$ defined by $c(a)=f(a)$.

## Facts & Assumptions
**Given:** The injective group homomorphism in the statement; $G$ and $H$ are written additively as abelian groups in the sense of [math:def-group](https://alphabetamath.cc/item/def-group).

**Goal:** Construct the asserted isomorphism.

[F1] By [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal), $\operatorname{im}f$ is a subgroup of $H$. By [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), its group operation is the restriction of the operation on $H$; it is abelian because addition in $H$ is commutative.

[F2] A group homomorphism preserves the group operation, so $f(a+b)=f(a)+f(b)$ for $a,b\in G$; see [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism).

[F3] The image is precisely $\{f(a):a\in G\}$, as defined in [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism).

[F4] An injection has at most one preimage of each value, a surjection has a preimage of every codomain element, and a bijection has both properties; see [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

[F5] A bijection has a unique two-sided inverse function, with no choice principle required; see [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse).

[F6] An isomorphism of groups is a bijective group homomorphism; see [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism).

## Proof
1.1 By [F1], the image with its inherited addition is an abelian group. The function $c$ is well-defined by [F3] and satisfies $c(a+b)=f(a+b)=f(a)+f(b)=c(a)+c(b)$ by [F2], where the last sum is in the image. Thus $c$ is a homomorphism. Every element of the image is $f(a)=c(a)$ for some $a\in G$, so $c$ is surjective. If $c(a)=c(b)$, then $f(a)=f(b)$, hence $a=b$ by the given injectivity. Thus $c$ is bijective by [F4]. [F1, F2, F3, F4, given]

2.1 By [F5] and step 1.1, $c$ has an inverse function $u:\operatorname{im}f\to G$. For $y,z\in\operatorname{im}f$, write $y=c(a)$ and $z=c(b)$, using surjectivity. Then $u(y+z)=u(c(a+b))=a+b=u(y)+u(z)$, since $c$ is a homomorphism and $u(c(x))=x$. Thus the set-theoretic inverse also preserves addition. The bijective homomorphism $c$ is an isomorphism by [F6], as asserted. [F5, F6, step 1.1, algebra] ∎
