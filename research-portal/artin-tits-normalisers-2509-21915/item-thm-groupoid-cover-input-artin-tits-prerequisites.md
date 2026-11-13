---
title: Independent groupoid covering and universal-cover input
status: published
research_item: thm-groupoid-cover-input-artin-tits-prerequisites
dependency_level: 6
sources:
  references:
    - title: Ronald Brown, Topology and Groupoids, third edition, corrected electronic
        text
      url: https://groupoids.org.uk/pdffiles/topgrpds-e.pdf
      locator: 10.3.1–10.3.3 and Corollary 1, printed pp. 371–374; 10.4.2–10.4.3 and
        Corollary 1, pp. 376–377; 10.6.3–10.6.4, pp. 393–394
      reading_limits: Read extracted PDF text of these statements and proofs,
        including 10.6.2 on pp. 392–393. Formula conventions were checked in
        that text; no complete-book reading or independent review is claimed.
        The arguments here are local adaptations to left-to-right arrow products
        and ordinary composition of deck functors.
---

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)
- [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)
- [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)
- [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)
- [lem-author-2e40db4c81b4-universal-cover](item-lem-author-2e40db4c81b4-universal-cover)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)


## Statement

A covering $p:(E,e)\to(G,x)$ of nonempty connected small groupoids is a functor bijective on arrows with every fixed source. It is determined up to unique pointed isomorphism over $G$ by its characteristic subgroup $H=p(E_e)\le G_x$; unpointed isomorphism classes correspond to conjugacy classes of subgroups of $G_x$. A normal covering means that its deck transformations act transitively on one, hence every, fibre. This is equivalent to $H\lhd G_x$, and then $G_x/H\cong\mathrm{Deck}(p)$. Here arrow products are left to right and deck transformations use ordinary function composition; the isomorphism sends $aH$ to the deck transformation sending $e$ to the endpoint of the lift of $a$. Every such $G$ has a universal connected covering with trivial vertex groups, obtained by taking $H=\{1_x\}$.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)

[lem-author-2e40db4c81b4-universal-cover](item-lem-author-2e40db4c81b4-universal-cover)

## Facts & Assumptions

[F1] The groupoid conventions are [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) and the quotient is [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group). The five local prerequisites are [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) (unique lifts and characteristic subgroups), [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) (subgroup construction), [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) (pointed classification), [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient) (normality and the deck quotient), and [lem-author-2e40db4c81b4-universal-cover](item-lem-author-2e40db4c81b4-universal-cover) (universal covering).

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 The lift-fibre lemma gives the definition and injectivity on vertex groups. The subgroup construction realizes every subgroup, and pointed classification proves both its uniqueness with a chosen point and the conjugacy formulation without one. Thus the classification assertions hold with exactly the stated basepoint data. [F1]

2.1 The normal-deck-quotient lemma proves the equivalence of normality with transitivity and the asserted isomorphism, using precisely the multiplication convention in the Statement. The universal-cover lemma gives existence from the trivial subgroup, trivial vertex groups and universality. These prove all remaining assertions. [F1, step 1.1] ∎

## Source notes

This is a local synthesis of five authored intermediate prerequisites, following Brown’s lifting/subgroup construction. The previous citation omitted the deck-group location: it is 10.6.3, printed p. 393, and regularity is 10.6.4, pp. 393–394. Its anti-isomorphism has been converted explicitly, rather than silently identified with an isomorphism. No outstanding imported theorem or source-proof reconstruction is claimed.
