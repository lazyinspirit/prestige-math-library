---
title: Set-sized groupoids, functors and composition conversion
status: draft
research_item: def-small-groupoid-interface-artin-tits-prerequisites
dependency_level: 0
---

## Prerequisites

- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)


## Definition

A small category is a category whose objects and morphisms each form a set; each morphism carries its source and target. A groupoid is a category in which every morphism has a two-sided inverse. A groupoid is connected when it is nonempty and there is an arrow between every ordered pair of objects.

For arrows $a:x\to y$ and $b:y\to z$, write $ab=b\circ a$; hence composition is read from left to right. A covariant functor sends objects to objects and arrows to arrows with the corresponding sources and targets, preserving identities and composition. An automorphism is a functor from a category to itself with a two-sided inverse functor.

For an object $x$ of a small groupoid $\mathcal G$, its vertex group $\mathcal G_x$ is the set of arrows $x\to x$ with the left-to-right product and identity $1_x$. Given an arrow $a:x\to y$, the associated conjugation map $c_a:\mathcal G_x\to\mathcal G_y$ is $c_a(u)=a^{-1}ua$.

## Definition references

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:def-group](https://alphabetamath.cc/item/def-group)

## Justification

The category axioms give associative composition and identities; in a groupoid every arrow has an inverse. Thus the endomorphisms at $x$ are closed under the indicated composition and form a group, with identity $1_x$ and inverses inherited from the groupoid. The left-to-right notation is a relabelling of the existing composite, so associativity and identities remain valid. The connectedness condition agrees with the zigzag definition because arrows in a groupoid can be reversed and composed.

For $a:x\to y$, the composite $a^{-1}ua$ is an endomorphism of $y$. Associativity and $aa^{-1}=1_x$ show $c_a(uv)=c_a(u)c_a(v)$; the map $v\mapsto ava^{-1}$ is its two-sided inverse. Hence $c_a$ is a group isomorphism ([math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)). It depends on the specified arrow $a$; no global choice of connecting arrows is required.
