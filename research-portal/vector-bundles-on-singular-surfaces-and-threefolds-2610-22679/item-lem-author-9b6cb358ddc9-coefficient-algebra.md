---
title: Degree-three coefficient algebra on the lower-Chern kernel
status: published
research_item: lem-author-9b6cb358ddc9-coefficient-algebra
dependency_level: 26
---

PDF p. 14: Lemma6.4; scheme conventions p3

## Prerequisites

- [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan)
- [lem-author-9b6cb358ddc9-lower-vanishing](item-lem-author-9b6cb358ddc9-lower-vanishing)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. On every qcqs field-scheme $X$, the actual third Chern operation is additive on any subgroup of perfect $K_0(X)$ where $c_1=c_2=0$. In particular it is additive on $F^3_{\rm mot}K_0(X)$; it sends zero to zero and $-x$ to $-c_3(x)$ there.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. Choice and the fixed size bounds are inherited from perfect Cartan in [F1] at steps 1.1–2.1 and lower-class vanishing in [F2] at step 2.1. The subsequent coefficient arithmetic is finite algebra.

[F1] [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan) supplies the coefficientwise identity through degree three for every perfect class in this scope, with even first degrees and the actual motivic cup product.

[F2] [lem-author-9b6cb358ddc9-lower-vanishing](item-lem-author-9b6cb358ddc9-lower-vanishing) gives $c_1=c_2=0$ on $F^3$. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) records the formal inverse coefficient identity; its algebra also follows directly from [F1].

## Proof
**Given:** A subgroup $G\subseteq K_0(X)$ with the stated vanishing, and $x,y\in G$.

**Goal:** Derive the homomorphism assertion purely after the actual full-scope operation identities are available.

1.1 Extract the third coefficient in [F1]: $c_3(x+y)=c_3(x)+c_2(x)c_1(y)+c_1(x)c_2(y)+c_3(y).$ The two middle terms vanish by the hypothesis on $G$. Hence $c_3(x+y)=c_3(x)+c_3(y)$. [A1, F1, given]

2.1 The pointed operation gives $c_3(0)=0$. Applying step 1.1 to $x+(-x)=0$ gives $c_3(-x)=-c_3(x)$. Equivalently the formal inverse has third coefficient $-c_3+2c_1c_2-c_1^3$, which reduces to $-c_3$ on $G$. Apply [F2] with $G=F^3$, a subgroup by the image definition. [A1, F1, F2, step 1.1] ∎
