---
title: Vertex-group exact sequence of a normal groupoid cover
status: published
research_item: prop-cover-exact-artin-tits-normalisers
dependency_level: 8
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 6, §2.4, (2.10) and following sentence (normal-cover exact
        sequence and endpoint map); PDF p. 2, §1.2.1 before Theorem 1.3
        (universal-cover deck-group assertion)
      statement: A normal groupoid covering gives an exact sequence from the vertex
        group upstairs to the vertex group downstairs and then to the deck
        group; a universal covering has deck group isomorphic to a vertex group
        of the base.
      hypotheses: The small connected groupoids and normal or universal covering
        conventions of §2.4.
      reading_limits: Pages 2 and 6 were extracted directly from the frozen article
        PDF and inspected for attribution of the respective assertions. The
        article is not used as a proof premise.
---

PDF p. 6: ` §2.4, (2.10) and following sentence `; PDF p. 2: ` §1.2.1 before Theorem 1.3: universal-cover deck group `

## Prerequisites

- [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)
- [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)
- [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)


## Statement

Let $F:\widetilde{\mathcal G}\to\mathcal G$ be a normal covering of nonempty connected small groupoids, and let $F(\widetilde x)=x$. A vertex group consists of all arrows from the specified object to itself. Use left-to-right arrow products and ordinary composition of deck functors. Then there is an exact sequence of groups

$$1\longrightarrow\widetilde{\mathcal G}_{\widetilde x}\xrightarrow{F}\mathcal G_x\xrightarrow{\psi}\operatorname{Deck}(F)\longrightarrow1.$$

Here $1$ denotes the trivial group. For group homomorphisms $A\xrightarrow{f}B\xrightarrow{g}C$, exactness at $B$ means $\operatorname{im}f=\ker g$; the displayed sequence requires this equality at each of its three intervening groups. The maps from and to $1$ are the unique homomorphisms.

For $\alpha\in\mathcal G_x$, the deck transformation $\psi(\alpha)$ sends $\widetilde x$ to the target of the unique lift of $\alpha$ with source $\widetilde x$. In particular, if $F$ is universal, then $\operatorname{Deck}(F)\cong\mathcal G_x$.

## Statement references

[def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)

[def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Facts & Assumptions

**Given:** The covering, base objects, and conventions in the Statement.

[F1] A covering has a unique lift of each base arrow from each prescribed object over its source. A universal covering has trivial vertex groups upstairs. [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[F2] For a connected normal covering, the induced map on the chosen vertex group is injective, its image $H=F(\widetilde{\mathcal G}_{\widetilde x})$ is normal in $\mathcal G_x$, and the quotient $\mathcal G_x/H$ is isomorphic to the deck group by the map sending $\alpha H$ to the deck transformation that takes $\widetilde x$ to the target of the lift of $\alpha$. These statements use the multiplication conventions in the Statement. [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[F3] For a normal subgroup $H$ of a group $G$, the quotient map $q:G\to G/H$, $q(g)=gH$, is surjective and has kernel $H$. Indeed, the coset product gives $q(gg')=q(g)q(g')$, every coset has a representative, the quotient identity is $H$, and $q(g)=H$ exactly when $g\in H$. [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[F4] For a group homomorphism $f:A\to B$, its kernel is $\{a\in A:f(a)=1_B\}$ and its image is $\{f(a):a\in A\}$. Use exactness as defined in the Statement, including the unique homomorphisms from and to the trivial group. [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Proof

**Given:** The data in the Statement.

**Goal:** Prove the exact sequence, the description of $\psi$, and the universal-cover consequence.

1.1 By [F2], $F$ embeds the upstairs vertex group in $\mathcal G_x$ with normal image $H$. Compose the quotient map $\mathcal G_x\to\mathcal G_x/H$ with the isomorphism in [F2] and call the composite $\psi$. By [F3] it is surjective with kernel $H$, while the first map is injective. Thus the displayed sequence is exact. The stated endpoint description of $\psi$ is the defining description of the isomorphism in [F2], with the unique lift supplied by [F1]. [F1, F2, F3, F4]

2.1 If $F$ is universal, [F1] makes $\widetilde{\mathcal G}_{\widetilde x}$ trivial, so $H$ is trivial. The normality criterion in the groupoid-covering input applies because the trivial subgroup is normal; hence the preceding construction applies to a universal connected covering. The quotient by the trivial subgroup is canonically isomorphic to $\mathcal G_x$, and [F2] identifies it with $\operatorname{Deck}(F)$. This proves the final assertion. [F1, F2, F3, F4, step 1.1] ∎

## Source notes

The article citation records attribution of the original assertion. The proof above uses the independently authored groupoid-covering input and the quotient-group and kernel/image definitions; exactness is defined inline.
