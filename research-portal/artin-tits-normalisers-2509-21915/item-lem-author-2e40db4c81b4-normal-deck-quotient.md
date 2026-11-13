---
title: Normal coverings and the convention-correct deck quotient
status: published
research_item: lem-author-2e40db4c81b4-normal-deck-quotient
dependency_level: 4
sources:
  references:
    - title: Ronald Brown, Topology and Groupoids, third edition, corrected electronic
        text
      url: https://groupoids.org.uk/pdffiles/topgrpds-e.pdf
      locator: 10.3.1–10.3.3 and Corollary 1, printed pp. 371–374; 10.4.2–10.4.3 and
        Corollary 1, pp. 376–377; 10.6.3–10.6.4, pp. 393–394
      reading_limits: For this repair, read extracted PDF text of 10.6.2–10.6.4 and
        Corollary 1, printed pp. 392–394. Earlier locator ranges are retained
        for attribution only; no fresh reading of those ranges is claimed. The
        proof here is a local calculation with explicitly stated composition
        conventions.
      statement: For a connected groupoid covering with characteristic subgroup H at
        e, Brown 10.6.3 identifies the covering automorphism group
        anti-isomorphically with the normalizer quotient N(H)/H; 10.6.4 equates
        normal characteristic subgroups with uniform loop lifting.
      hypotheses: A covering morphism of connected groupoids, a chosen object e, and
        its characteristic subgroup H in the base vertex group.
---

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)
- [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)
- [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)
- [` Ronald Brown, Topology and Groupoids, third edition, corrected electronic text · 10.3.1–10.3.3 and Corollary 1, printed pp. 371–374; 10.4.2–10.4.3 and Corollary 1, pp. 376–377; 10.6.3–10.6.4, pp. 393–394 `](https://groupoids.org.uk/pdffiles/topgrpds-e.pdf)


## Statement

Let $p:(E,e)\to(G,x)$ be a connected covering and $H=p(E_e)$. A deck transformation is an invertible functor $T:E\to E$ with $pT=p$; deck transformations are multiplied by ordinary function composition, $ST=S\circ T$. They act freely on objects. Their action is transitive on a fibre (equivalently every fibre) exactly when $H$ is normal in $G_x$; such a covering is called normal. In this case $G_x/H\cong\mathrm{Deck}(p)$, with $aH$ sent to the unique deck transformation taking $e$ to the endpoint of the lift of $a$.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for groupoids and functors, [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) for normal subgroups and quotient groups, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lift uniqueness, [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for $C_H$, and [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) for pointed classification. Deck multiplication here is ordinary function composition, not left-to-right composition.

[F2] Use [math:def-group-action](https://alphabetamath.cc/item/def-group-action) for left actions and transitivity, [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action) for freeness, [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) for product preservation, and [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism) for bijective group homomorphisms.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Deck transformations form a group under ordinary composition: associativity is inherited from functions, the identity is over $G$, composites remain over $G$, and $pT=p$ implies $pT^{-1}=p$. Evaluation $T\cdot u=T(u)$ is a left action because $1\cdot u=u$ and $(ST)\cdot u=S(T(u))$; it restricts to every fibre since $pT=p$. By pointed classification work in $C_H$. A deck transformation fixing one object fixes every object and arrow: every object is reached by lifting a label from that object, and every arrow is fixed by its source and label. This proves freeness. If it sends $H$ to $Ha$ over $x$, the image of the vertex group there is $a^{-1}Ha$, since $Hag=Ha$ is equivalent to $aga^{-1}\in H$. An invertible functor over $G$ identifies the two vertex groups and their images, so $a^{-1}Ha=H$. Conversely this equality makes $T_a(Hb)=Hab$ and $T_a(Hb,g)=(Hab,g)$ well defined: replacing $b$ by $hb$ replaces $ab$ by $(aha^{-1})ab$. Its inverse is $T_{a^{-1}}$, and the displayed arrow formula verifies it is over $G$. [F1, F2]

2.1 Transitivity on the fibre over $x$ therefore holds precisely when every $a\in G_x$ normalizes $H$, precisely normality of $H$. Lifting an arrow $g:x\to y$ gives a bijection between the two fibres with inverse the lift of $g^{-1}$; deck transformations commute with these bijections by uniqueness. Thus transitivity on one fibre is equivalent to transitivity on every fibre. When $H$ is normal, every deck transformation is the unique $T_a$ with the specified image of $H$, and $T_a=T_b$ exactly when $Ha=Hb$. Finally $T_a\circ T_b(Hc)=Habc$, also on arrows, so $a\mapsto T_a$ is a surjective homomorphism whose elements sent to the identity are exactly $H$. Since $H$ is normal, $aH=Ha$, and the equality criterion $T_a=T_b$ exactly when $Ha=Hb$ makes $aH\mapsto T_a$ a well-defined bijection. The quotient product $(aH)(bH)=abH$ and the composition calculation show that this bijection preserves products, hence is the claimed group isomorphism. The endpoint prescription is part of this calculation, and would be an antihomomorphism if deck multiplication were instead read left to right. [F1, F2, step 1.1] ∎

## Source notes

Brown 10.6.3 uses an anti-isomorphism. The last calculation states the conversion explicitly: arrow products here are left to right, whereas products of deck functors are ordinary function composition. No disagreement with Brown is asserted.
