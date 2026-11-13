---
title: Unique lifts, endpoint fibres and characteristic subgroups
status: draft
research_item: lem-author-2e40db4c81b4-lift-fibres
dependency_level: 1
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


## Statement

Let $p:E\to G$ be a functor of small groupoids, with $E,G$ connected and nonempty, bijective from the arrows with source $e$ to those with source $p(e)$ for every $e$. Such a functor is called a covering. Put $x=p(e)$ and $H=p(E_e)\le G_x$ (the characteristic subgroup at $e$). Products of arrows are read left to right. Lifts preserve products and inverses, $E_e\to G_x$ is injective, and two arrows $a,b:x\to y$ lifted from $e$ have equal endpoints exactly when $ab^{-1}\in H$.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F1] Use the small-groupoid, functor and vertex-group conventions of [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites). A subgroup means a subset containing the identity and closed under multiplication and inverses. The assumed source-wise bijections are the definition of covering.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 For composable arrows $a,b$, lift $a$ from $u$, then $b$ from its endpoint. Their composite projects to $ab$ and has source $u$, hence is its unique lift. Identity arrows lift to identities, and the inverse of a lift projects to the inverse arrow and is its unique lift from its source. This uses exactly preservation of composition and the source-wise bijection. [F1]

2.1 Two loops at $e$ with equal images are equal by injectivity on arrows with source $e$. Their image $H$ contains the identity and is closed under products and inverses, so is a subgroup. If the lifts of $a,b$ have equal endpoints, their first composite with the inverse of the second is a loop over $ab^{-1}$, giving membership in $H$. Conversely lift $ab^{-1}\in H$ as a loop at $e$, and then compose with the lift of $b$ from $e$. This projects to $a$ and ends where that lift of $b$ ends; uniqueness gives the assertion. [F1, step 1.1] ∎
