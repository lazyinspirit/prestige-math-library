---
title: Explicit connected cover associated with a vertex subgroup
status: published
research_item: lem-author-2e40db4c81b4-subgroup-cover
dependency_level: 2
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


## Statement

Let $G$ be a connected small groupoid, $x$ an object, and $H\le G_x$ a subgroup. Form objects $Ha=\{ha:h\in H\}$ for all arrows $a:x\to y$, recording $y$. There is a connected covering $C_H\to G$ whose arrows are pairs $(Ha,g)$ with $g:y\to z$, from $Ha$ to $Hag$, projecting to $g$. Its chosen object is $H1_x=H$ and its characteristic subgroup there is $H$.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

## Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for small groupoids and left-to-right products, and [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for coverings and characteristic subgroups; a subgroup contains the identity and is closed under multiplication and inverses.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Two sets $Ha,Hb$ with the same recorded target coincide precisely when $a=hb$ for some $h\in H$, equivalently $ab^{-1}\in H$. Indeed a nonempty intersection yields $h_1a=h_2b$ and hence $a=h_1^{-1}h_2b$; the converse follows by closure of $H$. Consequently replacing $a$ by $ha$ leaves $Hag$ unchanged. These are sets because $G$ is small. [F1]

2.1 Define $(Ha,g)(Hag,k)=(Ha,gk)$. Associativity follows from that of $G$; the identity at $Ha$ is $(Ha,1_y)$ and the inverse of $(Ha,g)$ is $(Hag,g^{-1})$. Thus this is a groupoid and the projection is a functor, bijective on each source star since its arrows with prescribed source are exactly the pairs with all possible labels $g$. Between $Ha$ and $Hb$ the label $a^{-1}b$ gives an arrow, so it is connected. The loops at $H$ have precisely labels $g\in G_x$ with $Hg=H$, exactly $H$, which proves the characteristic-subgroup claim. [F1, step 1.1] ∎
