---
title: Quotienting a compatible surjection
status: published
research_item: lem-author-4057f3195e4f-quotient-restriction
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal)
- [math:thm-coset-multiplication-well-defined-iff-normal](https://alphabetamath.cc/item/thm-coset-multiplication-well-defined-iff-normal)
- [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws)
- [math:lem-coset-membership-and-equality](https://alphabetamath.cc/item/lem-coset-membership-and-equality)


## Statement
Let $r:A\to D$ be a surjective homomorphism of abelian groups, and let $P\subseteq A$ be a subgroup. Then $r$ induces a surjection $\bar r:A/P\to D/r(P)$ whose kernel is $(\ker r+P)/P$.

## Facts & Assumptions

**Given:** $r$, $A$, $D$ and $P$ as stated, with the notation $K$, $I$ and $H$ above.

[F1] Abelian groups are groups with commutative addition; a subgroup contains $0$ and is closed under addition and additive inverses ([math:def-group](https://alphabetamath.cc/item/def-group), [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)).

[F2] A group homomorphism is additive, and a map is surjective when every target element has a preimage. The kernel is the set of elements mapped to $0$, and the image is the set of values of the homomorphism ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)).

[F3] For a normal subgroup $N$ of a group $G$, the quotient $G/N$ consists of cosets with the induced group operation ([math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)). Independence of representatives is supplied by [math:thm-coset-multiplication-well-defined-iff-normal](https://alphabetamath.cc/item/thm-coset-multiplication-well-defined-iff-normal), and the group axioms, identity coset $N$ and inverse-coset formula are supplied by [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws). In additive notation this operation is $(g+N)+(h+N)=(g+h)+N$.

[F4] Every subgroup of an abelian group is normal ([math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal)).

[F5] In additive notation, $a+N=b+N$ if and only if $b-a\in N$, and $x\in a+N$ if and only if $x-a\in N$ ([math:lem-coset-membership-and-equality](https://alphabetamath.cc/item/lem-coset-membership-and-equality)).

Write $K=\ker r=\{a\in A:r(a)=0\}$, $I=r(P)=\{r(p):p\in P\}$, and define the subgroup-sum candidate $H=K+P:=\{k+p:k\in K,\ p\in P\}$.

**Goal:** Establish the quotient groups, the induced map, its surjectivity and its kernel.

## Proof

1.1 Additivity gives $r(0)=r(0)+r(0)$ and $r(x)+r(-x)=r(0)$, hence $r(0)=0$ and $r(-x)=-r(x)$ by the group axioms. Thus $K$ contains $0$, is closed under addition since $r(k+k_1)=0$ for $k,k_1\in K$, and is closed under inverses since $r(-k)=0$. Similarly $I$ contains $r(0)=0$, and $r(p)+r(p_1)=r(p+p_1)$ and $-r(p)=r(-p)$ show closure under addition and inverses because $P$ is a subgroup. Consequently $K\le A$ and $I\le D$. The set $H$ contains $0=0+0$, and commutativity gives $(k+p)+(k_1+p_1)=(k+k_1)+(p+p_1)$ and $-(k+p)=(-k)+(-p)$; these formulas prove that $H\le A$. Also $P\le H$ because $p=0+p$. The groups $A$, $D$ and $H$ are abelian, so [F4] makes $P$ normal in both $A$ and $H$, and $I$ normal in $D$. Therefore [F3] supplies the groups $A/P$, $D/I$ and $H/P$ with representative-independent addition. Each coset $h+P$ for $h\in H$ is the same subset whether formed inside $H$ or $A$, so $H/P$ is identified with the subgroup of $A/P$ consisting of these cosets, with the same addition. [given, F1, F2, F3, F4, algebra]

2.1 Define $\bar r(a+P)=r(a)+I$. If $a+P=a_1+P$, [F5] gives $a_1-a\in P$, so $r(a_1)-r(a)=r(a_1-a)\in I$ and again [F5] gives equal image cosets. This proves well-definedness. The identity $\bar r((a+P)+(b+P))=r(a+b)+I=(r(a)+I)+(r(b)+I)$ proves that $\bar r$ is a homomorphism. For each coset $d+I$, surjectivity of $r$ supplies an $a\in A$ with $r(a)=d$, hence $\bar r(a+P)=d+I$. Finally, the identity of $D/I$ is $I$, so $a+P\in\ker\bar r$ exactly when $r(a)\in I$, equivalently when $r(a)=r(p)$ for some $p\in P$. This is equivalent to $a-p\in K$, hence to $a\in K+P=H$. Thus the kernel consists exactly of the cosets $h+P$ with $h\in H$, which step 1.1 identified with $H/P=(\ker r+P)/P$. [step 1.1, F1, F2, F3, F5, given, construct, algebra] ∎
