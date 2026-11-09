---
title: Scheme sites and sheafification
status: published
research_item: def-scheme-sites-and-sheafification
dependency_level: 5
---

PDF p. 4: Nisnevich sheaves and cdh cohomology

## Prerequisites

- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)
- [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf)
- [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated)
- [lem-author-cf6ede58b450-separated-plus-sheaf](item-lem-author-cf6ede58b450-separated-plus-sheaf)
- [lem-author-cf6ede58b450-plus-universal](item-lem-author-cf6ede58b450-plus-universal)

## Definition
Fix Grothendieck universes U in V. A scheme site here is a U-small category C whose objects are schemes and whose morphisms are scheme morphisms, equipped with a Grothendieck topology J. A sieve on X is a set of arrows into X closed under precomposition; a topology selects covering sieves, including the maximal sieve, stable under pullback and satisfying transitivity. A presheaf of sets is a contravariant functor C → Set_V. It is a sheaf when, for every covering sieve, every compatible family of sections indexed by its arrows has a unique amalgamation on the target.

The sheafification of a presheaf F is the sheaf aF = (F+)+, equipped with the composite F → F+ → (F+)+. Here F+(X) consists of matching families on covering sieves of X, with two families identified when they agree on a common covering subsieve; restriction uses pullback of sieves. Equivalently, a is left adjoint to the inclusion of sheaves into presheaves, with the displayed composite as unit.

A big site over a base S has a specified category of S-schemes as its objects; an S-scheme is a scheme equipped with a morphism to S, and its morphisms commute with those structure maps. A small site of a fixed S-scheme X instead uses a specified category of schemes over X, such as a suitable category of étale X-schemes. The chosen categories and covering topologies must be stated separately: the words small and big alone do not determine them. A complex of abelian sheaves, or a derived presheaf, requires its own abelian or derived-category conventions; set-valued sheafification alone does not assert a complex-valued descent or localization theorem.

## Definition references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

## Justification
The size hypotheses make the sets of sieves, matching families and equivalence classes legitimate V-small sets. The plus construction is a presheaf and its unit is natural by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf). It is separated by [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated), so its second application is a sheaf by [lem-author-cf6ede58b450-separated-plus-sheaf](item-lem-author-cf6ede58b450-separated-plus-sheaf). For every sheaf G, applying [lem-author-cf6ede58b450-plus-universal](item-lem-author-cf6ede58b450-plus-universal) successively to F and F+ gives natural bijections Hom((F+)+,G) ≅ Hom(F+,G) ≅ Hom(F,G). This proves the stated adjunction and identifies its unit. The definitions of the scheme categories require the separately specified topology and size bound; they do not claim that every possible category of schemes is U-small.
