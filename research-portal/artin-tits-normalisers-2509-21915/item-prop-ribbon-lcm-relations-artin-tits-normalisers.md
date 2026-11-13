---
title: Two ribbon-lcm expressions and presentation
status: draft
research_item: prop-ribbon-lcm-relations-artin-tits-normalisers
dependency_level: 13
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 22, Remark 5.7 and equation (5.8)
      statement: The article asserts that the left lcm of two elementary ribbons has
        two generating expressions and that the resulting equalities present the
        reduced ribbon groupoid.
      hypotheses: Spherical Coxeter diagram, a fixed subset J, an associate I of J,
        and a,b outside I.
      reading_limits: Read the frozen article text of Remark 5.7 and equation (5.8).
        This reference records attribution only; the argument uses the
        independent completed supplier. The distinctness qualification below
        corrects the diagonal case.
    - title: "Eddy Godelle, Parabolic subgroups of Garside groups II: ribbons"
      url: https://arxiv.org/pdf/0811.0751v1
      locator: §2.3, printed p. 4; §4.2 opening, printed p. 20; Example 3.14, printed
        p. 15
      statement: In a spherical Artin positive ribbon category, the elementary nu
        ribbons are atoms; an atom has only one-edge representing paths in the
        atom graph.
      hypotheses: A finite-rank spherical Artin–Tits monoid with its standard
        nu-structure; the positive ribbon category with parabolic submonoids as
        objects.
      reading_limits: Read the category atom definition in §2.3 and the opening of
        §4.2, including its reference to Example 3.14, and the end of Corollary
        4.10. The proof of the nu-structure and the full article are not claimed
        read or reconstructed.
---

PDF p. 22: ` Remark 5.7; (5.8) `

## Prerequisites

- [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers)
- [rem-spherical-garside-artin-tits-normalisers](item-rem-spherical-garside-artin-tits-normalisers)
- [thm-ribbon-lcm-input-artin-tits-prerequisites](item-thm-ribbon-lcm-input-artin-tits-prerequisites)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-artin-pure-lifts-artin-tits-normalisers](item-def-artin-pure-lifts-artin-tits-normalisers)
- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [` Eddy Godelle, Parabolic subgroups of Garside groups II: ribbons · §2.3, printed p. 4; §4.2 opening, printed p. 20; Example 3.14, printed p. 15 `](https://arxiv.org/pdf/0811.0751v1)


## Statement

Let $\Gamma$ be a finite-rank spherical Coxeter diagram with vertex set $S$, let $A^+$ be its positive Artin monoid, and fix $J\subseteq S$. Use the reduced ribbon groupoid $\mathcal R(J)$ and elementary arrows $\mu_{a,I}=\Delta_I^{-1}\Delta_{I\cup\{a\}}:I\to K$ of [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers), where $I$ ranges over the associates of $J$ and $a\in S\setminus I$. Thus an associate means a subset whose standard parabolic Coxeter subgroup is conjugate to that of $J$.

For distinct $a,b\in S\setminus I$, the least common multiple $\mu_{a,I}\vee\mu_{b,I}$ for left divisibility in $A^+$ is represented by a morphism of $\mathcal R(J)$ with source $I$. It has exactly two expressions as composable products of elementary arrows: one begins with $\mu_{a,I}$ and the other with $\mu_{b,I}$. If their lengths are $m$ and $n$, respectively, these expressions have the form $\mu_{a_1,I_1}\cdots\mu_{a_m,I_m}$ and $\mu_{b_1,L_1}\cdots\mu_{b_n,L_n}$, with $a_1=a$, $b_1=b$, and $I_1=L_1=I$.

The elementary arrows, their formal inverses, and the groupoid identity and inverse laws generate $\mathcal R(J)$, and the equalities between these two expressions, over all associates $I$ and all distinct pairs $a,b\in S\setminus I$, give a complete set of defining relations. For $a=b$, the lcm is $\mu_{a,I}$ and has one elementary-arrow expression; the corresponding equality is tautological.

## Statement references

[def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers)

[rem-spherical-garside-artin-tits-normalisers](item-rem-spherical-garside-artin-tits-normalisers)

[thm-ribbon-lcm-input-artin-tits-prerequisites](item-thm-ribbon-lcm-input-artin-tits-prerequisites)

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-artin-pure-lifts-artin-tits-normalisers](item-def-artin-pure-lifts-artin-tits-normalisers)

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

## Facts & Assumptions

**Given:** A finite-rank spherical diagram, a subset $J\subseteq S$, an associate $I$ of $J$, and, for the two-path assertion, distinct $a,b\in S\setminus I$.

[F1] The reduced ribbon groupoid has exactly the associates of $J$ as objects and is generated by the displayed elementary arrows and their inverses. Each elementary arrow has an associate of $J$ as its target. [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers)

[F2] The elementary ribbons belong to $A^+$, and their left-divisibility lcm exists there. Left divisibility means $x$ divides $y$ when $y=xz$ for some $z\in A^+$. [rem-spherical-garside-artin-tits-normalisers](item-rem-spherical-garside-artin-tits-normalisers)

[F3] For the spherical Artin system, the all-subsets reduced ribbon groupoid has the presentation by elementary arrows and pairwise lcm equalities. For distinct $a,b$ outside a subset $I$, the lcm has exactly two elementary-arrow paths, starting respectively with the two specified arrows. This includes $I=\varnothing$, where the paths are the two alternating braid words. [thm-ribbon-lcm-input-artin-tits-prerequisites](item-thm-ribbon-lcm-input-artin-tits-prerequisites)

[F4] The Coxeter diagram, its Coxeter system and the spherical convention are supplied by [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). The associated finite-rank Artin–Tits group and its standard generators, identified with the presented Artin group, are supplied by [def-artin-pure-lifts-artin-tits-normalisers](item-def-artin-pure-lifts-artin-tits-normalisers).

[F5] A groupoid is a category in which every arrow has a two-sided inverse. For composable arrows $u:X\to Y$ and $v:Y\to Z$, the product $uv=v\circ u$ is read from left to right; associativity, identities and inverse laws use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).

## External input

Godelle’s positive ribbon category has each elementary ribbon as an atom; an atom has only one-edge representing paths in the atom graph, with equal edges identified. The spherical Artin monoid has the required standard nu-structure.

## Proof

**Proof technique:** direct.

**Goal:** Prove the two-path statement, the presentation on the associate class, and the diagonal qualification.

1.1 The hypotheses of F3 hold for the given spherical system and distinct $a,b\notin I$. Its elementary arrow $\nu(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$ is exactly $\mu_{a,I}$ by F1. F2 identifies the lcm as the left-divisibility lcm in $A^+$. F3 therefore supplies the two and only two elementary-arrow paths with the stated initial arrows. Since each arrow starting at an associate ends at an associate by F1, both paths lie in $\mathcal R(J)$ and start at $I$; writing their successive labels gives the displayed form. [given, F1, F2, F3, F4]

2.1 Restrict the presentation in F3 to objects that are associates of $J$. By F1 every elementary arrow and inverse incident to an associate remains in this object set, so any word in the full generating graph that starts at an associate stays there. Each defining lcm equality has two paths with the same source and target; consequently any application of a defining equality or a groupoid inverse or identity law to such a word also stays in the restricted graph. Thus the restricted relations give all and only the relations among its paths, and F1 identifies the resulting subgroupoid with $\mathcal R(J)$. [F1, F3, F5, step 1.1]

3.1 If $a=b$, its lcm with itself is $\mu_{a,I}$. By the independent atomicity input, every positive elementary-ribbon path representing this arrow consists of one edge; equal edges in the atom graph represent the same arrow. Thus its sole elementary-arrow expression is the one-arrow path, and the diagonal equality is tautological. [F2, step 1.1] ∎
