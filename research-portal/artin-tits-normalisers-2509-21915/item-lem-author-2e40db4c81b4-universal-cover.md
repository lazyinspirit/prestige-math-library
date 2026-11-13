---
title: Universal groupoid covering from the trivial subgroup
status: published
research_item: lem-author-2e40db4c81b4-universal-cover
dependency_level: 5
sources:
  references:
    - title: Ronald Brown, Topology and Groupoids, third edition, corrected electronic
        text
      url: https://groupoids.org.uk/pdffiles/topgrpds-e.pdf
      locator: 10.3.1–10.3.3 and Corollary 1, printed pp. 371–374; 10.4.2–10.4.3 and
        Corollary 1, pp. 376–377; 10.6.3–10.6.4, pp. 393–394
      reading_limits: The locator ranges are retained from the existing attribution.
        This repair read the current local groupoid suppliers and the published
        definitions of normal subgroup, quotient group, group homomorphism and
        group isomorphism. No fresh reading of Brown or independent review is
        claimed; the revised argument is proved locally from those item inputs.
---

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)
- [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)
- [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)
- [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)
- [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)


## Statement

Every nonempty connected small groupoid $G$, with a chosen object $x$, has a connected cover $U=C_{\{1_x\}}\to G$ with trivial vertex groups. Equivalently each morphism set between two objects upstairs is a singleton. Choose $1_x$ as the object of $U$ over $x$. A pointed connected cover of $(G,x)$ is called universal if it admits a unique pointed functor over $G$ to every pointed connected cover of $(G,x)$. The cover $U$ is universal, and each of these unique pointed functors from $U$ is itself a covering. A universal cover is unique up to unique pointed isomorphism, is normal, and has deck group isomorphic to $G_x$. Arrow products are read left to right, and deck transformations are multiplied by ordinary function composition.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)

[math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for groupoids, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lift uniqueness, [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for subgroup covers, [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) for pointed covers, functors and isomorphisms over $G$, and [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient) for normal coverings, deck transformations and normal deck quotients.

[F2] Use [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup) for invariance under conjugation, [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) for the quotient and its coset product, [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) for product-preserving maps, and [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism) for bijective group homomorphisms.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Apply the subgroup construction to $H=\{1_x\}$. Its objects are individual arrows $a$ from $x$, and an arrow from $a$ to $b$ has the unique possible label $a^{-1}b$. Thus each morphism set is a singleton, in particular every vertex group is trivial. Conversely in any connected groupoid with trivial vertex groups, two arrows $u,v$ with the same endpoints satisfy $uv^{-1}=1$, hence $u=v$, and connectedness guarantees existence. [F1]

2.1 Given a pointed connected cover $(E,e)\to(G,x)$, send object $a$ to the endpoint of its lift from $e$ and arrow $(a,g)$ to the lift of $g$ there. Product lifting makes this a functor over $G$. On each source star both projections are bijections to the same base star, so this functor is a covering; uniqueness follows by lifting from the chosen point. [F1, step 1.1]

3.1 If $(V,v)\to(G,x)$ is another universal cover in the stated sense, its universal property and that of $U$ give unique pointed functors $F:U\to V$ and $K:V\to U$ over $G$. Both $K\circ F$ and the identity of $U$ are pointed endofunctors over $G$, so uniqueness for $U$ gives $K\circ F=\mathrm{id}_U$. Similarly uniqueness for $V$ gives $F\circ K=\mathrm{id}_V$. Thus $F$ is the unique pointed isomorphism over $G$ from $U$ to $V$; no assertion about the characteristic subgroup of $V$ was assumed. [F1, step 2.1]

4.1 Put $N=\{1_x\}$. For each $a\in G_x$, $aNa^{-1}=\{a1_xa^{-1}\}=N$, so $N$ is normal. Its characteristic-subgroup realization in $U$ and the normal-deck-quotient lemma therefore make $U$ normal with $G_x/N\cong\mathrm{Deck}(U\to G)$. Each coset $aN=\{a\}$ is a singleton, so $\phi:G_x/N\to G_x$, $\phi(aN)=a$, is well defined and bijective. The quotient product gives $\phi((aN)(bN))=ab=\phi(aN)\phi(bN)$, so $\phi$ is a group isomorphism. Combining these isomorphisms proves $\mathrm{Deck}(U\to G)\cong G_x$ with the stated deck convention. For the isomorphism $F$ in step 3.1, $T\mapsto F\circ T\circ K$ identifies the deck groups, preserves ordinary composition and intertwines their actions on the corresponding fibres; hence $V$ is also normal with the same deck-group conclusion. [F1, F2, step 1.1, step 3.1] ∎
