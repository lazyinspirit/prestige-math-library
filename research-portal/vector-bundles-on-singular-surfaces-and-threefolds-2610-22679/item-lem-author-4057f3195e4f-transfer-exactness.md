---
title: Transporting an exact sequence through isomorphisms
status: published
research_item: lem-author-4057f3195e4f-transfer-exactness
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)


## Statement
Suppose $H\xrightarrow{a}A\xrightarrow{b}D\to0$ is exact, and $u:A\to A'$ and $v:D\to D'$ are isomorphisms of abelian groups. Then $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

## Facts & Assumptions

[F1] The objects $H,A,D,A',D'$ are abelian groups, written additively, and the terminal $0$ is the trivial group ([math:def-group](https://alphabetamath.cc/item/def-group)).

[F2] The arrows $a:H\to A$ and $b:A\to D$ are group homomorphisms. A group homomorphism preserves addition, and composites of group homomorphisms are homomorphisms ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)).

[F3] The maps $u:A\to A'$ and $v:D\to D'$ are isomorphisms, meaning bijective group homomorphisms ([math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)). Injectivity means equal outputs force equal inputs; surjectivity means every target element has a preimage, and bijectivity means both ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)). The inverse $u^{-1}:A'\to A$ is a group homomorphism by [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism).

[F4] For a group homomorphism $f:G\to K$, its kernel is $\{x\in G:f(x)=0\}$ and its image is $\{f(x):x\in G\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)). Here exactness of $H\xrightarrow{a}A\xrightarrow{b}D\to0$ means that $b$ is surjective and $\ker b=\operatorname{im}a$; no injectivity of $a$ is assumed. The arrow to the trivial group is the unique zero map, so exactness at the terminal term is automatic.

[F5] Every group homomorphism preserves the identity, hence $v(0)=0$ in additive notation ([math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)).

**Given:** The abelian groups, homomorphisms, isomorphisms and exactness in the statement, with the conventions in [F1]–[F5].

**Goal:** Prove that $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

## Proof

1.1 By [F3], $u^{-1}$ is a homomorphism, so both $ua:H\to A'$ and $vbu^{-1}:A'\to D'$ are homomorphisms by composition. For any $d'\in D'$, surjectivity of $v$ gives $d\in D$ with $v(d)=d'$, and surjectivity of $b$ gives $x\in A$ with $b(x)=d$. Then $vbu^{-1}(u(x))=d'$. Hence the transported map is surjective. [F2, F3, F4]

2.1 For $x'\in A'$, injectivity of $v$ and the equality $v(0)=0$ from [F5] give $x'\in\ker(vbu^{-1})$ if and only if $u^{-1}(x')\in\ker b$. Exactness identifies this kernel with $\operatorname{im}a$, so the condition is equivalent to $u^{-1}(x')=a(h)$ for some $h\in H$, and hence to $x'=ua(h)$ for some $h\in H$. Thus $\ker(vbu^{-1})=\operatorname{im}(ua)$; with surjectivity from step 1.1 and the terminal zero map, this proves exactness. [F1, F2, F3, F4, F5, step 1.1] ∎
