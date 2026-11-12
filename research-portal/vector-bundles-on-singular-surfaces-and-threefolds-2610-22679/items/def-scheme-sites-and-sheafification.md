---
id: def-scheme-sites-and-sheafification
kind: definition
title: Scheme sites and sheafification
status: published
domain: mathematics
deps:
  - math:def-scheme-over-base
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-cf6ede58b450-plus-presheaf
  - lem-author-cf6ede58b450-plus-separated
  - lem-author-cf6ede58b450-separated-plus-sheaf
  - lem-author-cf6ede58b450-plus-universal
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-etale-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-natural-transformation
  - math:def-equivalence-relation
  - math:def-adjunction-by-unit-counit-and-triangle-identities
  - math:thm-the-adjunction-hom-set-bijection-under-local-smallness
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-cf6ede58b450-plus-presheaf: mathematical-premise
  lem-author-cf6ede58b450-plus-separated: mathematical-premise
  lem-author-cf6ede58b450-separated-plus-sheaf: mathematical-premise
  lem-author-cf6ede58b450-plus-universal: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:def-equivalence-relation: mathematical-premise
  math:def-adjunction-by-unit-counit-and-triangle-identities: mathematical-premise
  math:thm-the-adjunction-hom-set-bijection-under-local-smallness: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 5
---

## Definition
Fix Grothendieck universes U in V. A scheme site here is a U-small category C whose objects are schemes and whose morphisms are scheme morphisms, equipped with a Grothendieck topology J. A sieve on X is a set of arrows into X closed under precomposition; a topology selects covering sieves, including the maximal sieve, stable under pullback and satisfying transitivity. A presheaf of sets is a contravariant functor C → Set_V. It is a sheaf when, for every covering sieve, every compatible family of sections indexed by its arrows has a unique amalgamation on the target.

The sheafification of a presheaf F is the sheaf aF = (F+)+, equipped with the composite F → F+ → (F+)+. Here F+(X) consists of matching families on covering sieves of X, with two families identified when they agree on a common covering subsieve; restriction uses pullback of sieves. Equivalently, a is left adjoint to the inclusion of sheaves into presheaves, with the displayed composite as unit.

A big site over a base S has a specified category of S-schemes as its objects; an S-scheme is a scheme equipped with a morphism to S, and its morphisms commute with those structure maps. A small site of a fixed S-scheme X instead uses a specified category of schemes over X, such as a suitable category of étale X-schemes. The chosen categories and covering topologies must be stated separately: the words small and big alone do not determine them. A complex of abelian sheaves, or a derived presheaf, requires its own abelian or derived-category conventions; set-valued sheafification alone does not assert a complex-valued descent or localization theorem.

## Definition references
[[math:def-scheme-over-base]]

[[def-author-cf6ede58b450-site-plus-data]]

[[math:def-scheme]]

[[math:def-morphism-of-schemes]]

[[math:def-etale-morphism-schemes]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-category]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-natural-transformation]]

[[math:def-equivalence-relation]]

[[math:def-adjunction-by-unit-counit-and-triangle-identities]]

[[math:thm-the-adjunction-hom-set-bijection-under-local-smallness]]

## Justification
The size hypotheses make the sets of sieves, matching families and equivalence classes legitimate V-small sets. Here universe closure means transitivity, pairing, power-set closure and indexed-union closure as in [[math:def-grothendieck-universe-closure-convention]]; relative smallness and the plus-construction data are as in [[def-author-cf6ede58b450-site-plus-data]], and equivalence classes and quotient sets have the meaning in [[math:def-equivalence-relation]]. The plus construction is a presheaf and its unit is natural by [[lem-author-cf6ede58b450-plus-presheaf]]. It is separated by [[lem-author-cf6ede58b450-plus-separated]], so its second application is a sheaf by [[lem-author-cf6ede58b450-separated-plus-sheaf]]. For every sheaf G, applying [[lem-author-cf6ede58b450-plus-universal]] successively to F and F+ gives natural bijections Hom((F+)+,G) ≅ Hom(F+,G) ≅ Hom(F,G). Here Hom denotes natural transformations in the sense of [[math:def-natural-transformation]]; presheaf morphisms have componentwise identities and composition, and the category of sheaves has the same morphisms between sheaves. For two presheaves F and G, such a transformation is a family of functions F(X) → G(X) indexed by the U-small object set of C; these families form a V-small set by universe closure, and the naturality equations select a subset. Thus these categories have set-valued Hom collections. The natural bijections therefore give the stated adjunction in the sense of [[math:def-adjunction-by-unit-counit-and-triangle-identities]] by the converse direction of [[math:thm-the-adjunction-hom-set-bijection-under-local-smallness]]. Since the bijections are composition with F → F+ → (F+)+, they identify this composite as the unit. The definitions of the scheme categories require the separately specified topology and size bound; they do not claim that every possible category of schemes is U-small.
