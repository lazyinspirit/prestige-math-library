---
title: A right inverse makes a homomorphism surjective
status: published
research_item: lem-author-da44cda020c0-units-k1-split-surjective-homomorphism
dependency_level: 0
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)


## Statement
Let $d:G\to H$ and $s:H\to G$ be group homomorphisms with $d\circ s=\operatorname{id}_H$. Then $d$ is surjective and $s$ is injective. If $G$ is abelian, $G$ is the internal direct sum of $\ker(d)$ and $s(H)$.

Here $\ker(d)$ is the subgroup of elements mapped to the identity, and an internal direct sum means that each element has a unique expression as a product of one element from each subgroup.

## Statement references
[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)

## Facts & Assumptions
**Given:** Group homomorphisms $d,s$ with $d\circ s=\operatorname{id}_H$, meaning $d(s(h))=h$ for every $h\in H$.

**Goal:** Prove surjectivity, injectivity and, when $G$ is abelian, the direct-sum decomposition.

[F1] Groups and abelian groups, group homomorphisms, injective and surjective functions, and subgroups have the meanings in [math:def-group](https://alphabetamath.cc/item/def-group), [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) and [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), respectively.

[F2] The kernel of $d$ is a subgroup of $G$, and the image $s(H)=\{s(h):h\in H\}$ is a subgroup of $G$, by [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal) applied to $d$ and $s$.

[F3] Both homomorphisms preserve identities and inverses by [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties), claims 1 and 2; thus $s(1)=1$ and $d(x^{-1})=d(x)^{-1}$ for $x\in G$.

## Proof
**Proof technique:** Apply the right-inverse identity and decompose an arbitrary element.

1.1 Each $h\in H$ equals $d(s(h))$, so $d$ is surjective. If $s(h)=s(h')$, applying $d$ gives $h=h'$, so $s$ is injective. [given, F1, algebra]

2.1 Suppose $G$ is abelian. By [F2], $\ker(d)$ and $s(H)$ are subgroups. For $g\in G$, put $k=g\,s(d(g))^{-1}$. Product and inverse preservation give $d(k)=d(g)\,d(s(d(g)))^{-1}=d(g)\,d(g)^{-1}=1$, so $g=k\,s(d(g))$ lies in $\ker(d)s(H)$. If $s(h)\in\ker(d)$, then $h=d(s(h))=1$, and hence $s(h)=s(1)=1$; thus the two subgroups intersect only in the identity. If $ka=k'a'$ with $k,k'\in\ker(d)$ and $a,a'\in s(H)$, multiplying on the left by $(k')^{-1}$ and on the right by $a^{-1}$ gives $(k')^{-1}k=a'a^{-1}$. This element belongs to both subgroups, so it is $1$. Multiplying these two identity equations by $k'$ and $a$, respectively, gives $k=k'$ and $a'=a$. Every element therefore has the required unique expression, and commutativity gives the internal direct sum. [given, F1, F2, F3, step 1.1, algebra] ∎
