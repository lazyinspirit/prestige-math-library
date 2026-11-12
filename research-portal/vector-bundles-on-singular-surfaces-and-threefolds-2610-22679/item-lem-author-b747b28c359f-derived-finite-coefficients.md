---
title: Functorial finite coefficients for derived complexes
status: published
research_item: lem-author-b747b28c359f-derived-finite-coefficients
dependency_level: 4
---

PDF p. 4: Definition 2.2

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)


## Statement
For $C\in D(\mathbb Z)$ and a positive integer $n$, put $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. This construction and its cohomology groups are functorial in $C$. For every integer $i$ there is a natural short exact sequence
$$0\to H^i(C)/nH^i(C)\to H^i(C/n)\to H^{i+1}(C)[n]\to0,$$
where $H^{i+1}(C)[n]$ is the subgroup annihilated by $n$.

## Facts & Assumptions

[F1] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) supplies, for every positive integer $n$, the functor $T_n:D(\mathbb Z)\to D(\mathbb Z)$ computed by the two-term free resolution $[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$. It identifies $T_n(C)=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ with the multiplication-by-$n$ cone, without boundedness assumptions. It proves that this construction respects homotopies and quasi-isomorphisms and descends through localization, and that its coefficient short exact sequence is natural for every morphism in $D(\mathbb Z)$.

[F2] Use the derived category of cochain complexes of abelian groups, including its standing size convention and localization model, from [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). For every integer $i$, cohomology is a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$ by [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology).

## Proof

**Given:** $C\in D(\mathbb Z)$, a positive integer $n$, and an integer $i$, with the conventions in [F2].

**Goal:** Establish functoriality and the displayed natural exact sequence.

1.1 For this fixed $n$, take the functor $T_n$ supplied by [F1]. Its value at $C$ is the stated $C/n$, and its localization construction defines its action on all derived-category morphisms, independently of the chosen complex representative. Composing it with the functor $H^i$ from [F2] proves functoriality of $H^i(C/n)$; [F2] also gives functoriality of the integral cohomology terms. [given, F1, F2]

2.1 Choose a cochain complex $A$ representing $C$. The coefficient exact sequence of [F1] applied to $A$ is the displayed sequence, since its cone represents $T_n(C)$ by step 1.1. By [F1], its two maps descend through localization and are natural for every morphism in $D(\mathbb Z)$; hence changing the representative carries this sequence to the same derived-category sequence by the induced isomorphisms. Its objectwise exactness is the exactness supplied by [F1]. Thus the sequence is natural with the terms and functoriality asserted in the statement. [F1, F2, step 1.1] ∎
