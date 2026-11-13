---
title: Disjoint translates of invariant Salvetti cover members
status: draft
research_item: lem-author-e61520261113-disjoint-cover-translates
dependency_level: 10
---

## Prerequisites

- [lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover)
- [lem-author-e61520261113-pair-stabilizers](item-lem-author-e61520261113-pair-stabilizers)
- [def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset)
- [lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action)
- [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)


## Statement

For the invariant cover of *Natural finite Salvetti good covers*, assume the finite diagonal action on $M$ is free. Every cover member satisfies $U(F,C)\cap gU(F,C)=\varnothing$ for $g\ne1$.

## Statement references

[lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

## Facts & Assumptions

[F1] The finite arrangement, finite linear group $G$, complement $M$, and invariant cover $\{U(F,C)\}$ are those of [lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover). In particular $gU(F,C)=U(gF,gC)$, and distinct cover members intersect only when their incident-pair indices form a chain.

[F2] Incident pairs form the partial order $P(\mathcal A)$ of [def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset), with its reflexivity, transitivity and antisymmetry.

[F3] Under the present hypotheses, $g(F,C)=(gF,gC)$ acts by order automorphisms on $P(\mathcal A)$, by [lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action), applied with $I=E$.

[F4] Since the diagonal action on $M$ is free, [lem-author-e61520261113-pair-stabilizers](item-lem-author-e61520261113-pair-stabilizers) gives $g(F,C)=(F,C)\Longrightarrow g=1$.

## Proof

**Given:** The finite group action, invariant cover, incident-pair order and trivial pair stabilizers in [F1]–[F4]. **Goal:** Prove that distinct translates of each individual cover member are disjoint.

**Proof technique:** direct.

1.1 Suppose $U(F,C)\cap gU(F,C)\ne\varnothing$ and put $p=(F,C)$. Naturality identifies the second member as $U(gF,gC)$. The chain criterion, or reflexivity if the indices coincide, implies that $p$ and $gp$ are comparable in $P(\mathcal A)$. [F1, F2]

2.1 Choose $h=g$ if $p\leq gp$. Otherwise $gp\leq p$, so applying the order automorphism $g^{-1}$ gives $p\leq g^{-1}p$; in this case choose $h=g^{-1}$. Thus $p\leq hp$. Because $G$ is finite, two powers $h^a,h^b$ with $a<b$ agree, giving $h^{b-a}=1$; put $m=b-a\geq1$. Applying successive powers of the order automorphism $h$ gives $p\leq hp\leq\cdots\leq h^mp=p$. Transitivity and antisymmetry therefore give $p=hp$, including when $m=1$. Since $h$ is $g$ or $g^{-1}$, it follows that $gp=p$. [F1, F2, F3, step 1.1]

3.1 The trivial pair-stabilizer conclusion now gives $g=1$. Consequently a nonidentity $g$ cannot satisfy $U(F,C)\cap gU(F,C)\ne\varnothing$, which proves the assertion. [F4, step 2.1] ∎
