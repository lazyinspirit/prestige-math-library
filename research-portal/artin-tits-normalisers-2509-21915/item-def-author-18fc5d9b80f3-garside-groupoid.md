---
title: Groupoid completion and Garside groupoids
status: draft
research_item: def-author-18fc5d9b80f3-garside-groupoid
dependency_level: 2
---

## Prerequisites

- [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)
- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)
- [math:ex-the-free-category-on-a-quiver](https://alphabetamath.cc/item/ex-the-free-category-on-a-quiver)
- [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)
- [math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid)
- [math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms](https://alphabetamath.cc/item/prop-category-isomorphisms-are-bijective-on-objects-and-morphisms)


## Definition

For a small category $\mathcal C$, form a directed graph with its objects as vertices, one edge $[f]:x\to y$ for each arrow $f:x\to y$, and a formal reverse edge $[f]^{-1}:y\to x$. Take finite directed paths and identify paths by the smallest equivalence relation compatible with concatenation containing $[1_x]=1_x$, $[f][g]=[fg]$ for composable arrows, and $[f][f]^{-1}=1_x$, $[f]^{-1}[f]=1_y$. The resulting category is the groupoid completion of $\mathcal C$. A Garside groupoid is a groupoid isomorphic to the completion of a Garside category. In the one-object case the completion is a group, called the group of fractions of that categorical Garside monoid.

## Definition references

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:ex-the-free-category-on-a-quiver](https://alphabetamath.cc/item/ex-the-free-category-on-a-quiver)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid)

[math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms](https://alphabetamath.cc/item/prop-category-isomorphisms-are-bijective-on-objects-and-morphisms)

## Justification

The intersection of all concatenation-compatible equivalence relations containing the listed relations exists, since the relation identifying all paths with the same endpoints is one such relation. The quotient inherits associative composition and identities from paths. Reversing a path and reversing each edge gives an inverse in the quotient, so every arrow is invertible. With one object, this groupoid is a group. This construction alone does not assert that the original category embeds in its completion.
