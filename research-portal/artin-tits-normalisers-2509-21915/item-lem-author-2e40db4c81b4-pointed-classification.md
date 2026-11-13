---
title: Pointed classification of connected groupoid coverings
status: draft
research_item: lem-author-2e40db4c81b4-pointed-classification
dependency_level: 3
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
- [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)
- [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)


## Statement

A pointed groupoid $(E,e)$ is a groupoid with a chosen object $e$; a pointed functor sends the chosen object to the chosen object. For coverings $p:E\to G$ and $q:E'\to G$, a functor over $G$ is a functor $F:E\to E'$ satisfying $q\circ F=p$. An isomorphism over $G$ is such a functor with a two-sided inverse functor; it is pointed when it sends $e$ to the chosen object $e'$ of $E'$. A pointed covering $p:(E,e)\to(G,x)$ is a covering with $p(e)=x$. Unpointed isomorphisms over $G$ forget the chosen objects but still commute with the projections to $G$.

Let $p:(E,e)\to(G,x)$ be a connected covering of connected small groupoids and set $H=p(E_e)$. There is a unique pointed isomorphism over $G$ from $(C_H,H)$ to $(E,e)$. Consequently two pointed connected covers of $(G,x)$ are pointedly isomorphic over $G$ exactly when their characteristic subgroups are equal. Without chosen objects, equality is replaced by conjugacy in $G_x$.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

## Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for functors and conjugation, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lifts and their endpoint criterion, and [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for the subgroup cover $C_H$ and its object and arrow formulas.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Send $Ha$ to the endpoint of the lift of $a$ from $e$. The identity lifts to $1_e$, so $H$ is sent to $e$. The endpoint criterion says precisely that this is well defined and injective on the objects over each target; all targets are retained, so it is injective on all objects. Connectedness of $E$ gives an arrow from $e$ to every object, so this map is surjective. Send $(Ha,g)$ to the unique lift of $g$ from the assigned object. Product lifting shows its target is the assigned object of $Hag$, and that this defines a functor over $G$. It is bijective on arrows because it is bijective on objects and on each source star. Its inverse therefore also preserves products and identities, making it an isomorphism. [F1]

2.1 Any pointed functor over $G$ must send every lift of $a$ from $H$ to the lift of $a$ from $e$, so it has the same objects and arrows. This proves uniqueness. An isomorphism preserving basepoints preserves the image of the vertex group, proving necessity and sufficiency of equality. If a basepoint changes along the lift of $a\in G_x$, conjugation gives the new image $a^{-1}Ha$: conjugate loops by the lifted arrow and apply the functor, in both directions. Every point above $x$ is reached by such a lift by connectedness. Hence an unpointed isomorphism gives conjugacy; conversely conjugacy permits choosing a point with the required image subgroup, after which pointed classification supplies the isomorphism. [F1, step 1.1] ∎
