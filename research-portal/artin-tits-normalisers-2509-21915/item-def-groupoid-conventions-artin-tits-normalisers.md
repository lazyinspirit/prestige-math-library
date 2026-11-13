---
title: Connected small groupoids and vertex groups
status: draft
research_item: def-groupoid-conventions-artin-tits-normalisers
dependency_level: 1
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 6, §2.4, first paragraph
      statement: A groupoid is a category in which every morphism is invertible; the
        article assumes groupoids small and connected. Its vertex group at x is
        the endomorphism group at x. Composition is read left to right, and the
        vertex group is independent of x up to isomorphism.
      hypotheses: The objects are in a connected small groupoid.
      reading_limits: The frozen article text at the cited paragraph was inspected.
        This reference attributes the article's conventions and is not used as a
        proof prerequisite.
---

PDF p. 6: ` §2.4, first paragraph `

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)


## Definition

A groupoid is a category in which every morphism has a two-sided inverse. Here all groupoids are small, meaning that their objects and morphisms each form a set, and connected, meaning that they are nonempty and there is a morphism between each ordered pair of objects. Composition is read left to right: for $a:x\to y$ and $b:y\to z$, the product $ab$ means $b\circ a$.

For an object $x$ of a groupoid $\mathcal G$, the vertex group $\mathcal G_x=\operatorname{End}_{\mathcal G}(x)$ consists of the morphisms $x\to x$, with composition as multiplication and the identity morphism $1_x$ as identity. The vertex groups at any two objects are isomorphic; the isomorphism need not be canonical.

## Definition references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

## Justification

By [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites), the category identities and associative composition, together with the inverses of groupoid morphisms, make the endomorphisms at $x$ a group. The left-to-right product is the same composite expressed in the indicated order.

For objects $x,y$, connectedness supplies a morphism $a:x\to y$. The map $u\mapsto a^{-1}ua$ sends $\mathcal G_x$ to $\mathcal G_y$. Associativity and $aa^{-1}=1_x$ show that it preserves products, and $v\mapsto ava^{-1}$ is its inverse. Thus it is a group isomorphism. Its construction depends on the chosen morphism $a$.
