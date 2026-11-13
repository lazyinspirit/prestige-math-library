---
id: lem-author-5a1e77100001-linear-action
kind: lemma
title: Linear symmetries act on the Salvetti model
status: published
domain: mathematics
origin: pipeline
deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-group-action
  - math:def-simplicial-map-and-its-geometric-realization
dependency_roles:
  def-author-5a1e77100001-sign-facets: mathematical-premise
  lem-author-5a1e77100001-facet-incidence: mathematical-premise
  def-author-5a1e77100001-salvetti-poset: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  def-complement-interface-artin-tits-prerequisites: mathematical-premise
  math:def-group-action: mathematical-premise
  math:def-simplicial-map-and-its-geometric-realization: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
formulation_deps:
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-group-action
  - math:def-simplicial-map-and-its-geometric-realization
argument_deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-group-action
  - math:def-simplicial-map-and-its-geometric-realization
dependency_level: 6
---

## Statement

Suppose a group acts linearly on $E$, preserves $I$ and permutes $\mathcal A$. Use the group-action convention of *Left group actions, transitive actions, and faithful actions*. It acts on the facets and incidence of *Facet incidence and localized chamber signs*, on the poset of *The incident facet and chamber poset* by $g(F,C)=(gF,gC)$, and on the model of *The Salvetti order complex and its finite CW case* by the realized simplicial maps of *A simplicial map and its geometric realization*. It also acts diagonally on the complement of *def-complement-interface-artin-tits-prerequisites*. These actions alone assert no equivariant homotopy equivalence.

## Statement references

[[lem-author-5a1e77100001-facet-incidence]]

[[def-author-5a1e77100001-salvetti-poset]]

[[lem-author-5a1e77100001-order-complex-model]]

[[def-complement-interface-artin-tits-prerequisites]]

[[math:def-group-action]]

[[math:def-simplicial-map-and-its-geometric-realization]]

## Facts & Assumptions

[F1] The chosen nonzero real linear functionals $h_H$ with $\ker h_H=H$ and their simultaneous sign fibers are defined in [[def-author-5a1e77100001-sign-facets]]. Facets and their incidence and localizations are sign-defined in [[lem-author-5a1e77100001-facet-incidence]], and incident pairs are ordered as in [[def-author-5a1e77100001-salvetti-poset]].

[F2] The model is the realization of chains in [[lem-author-5a1e77100001-order-complex-model]]; realized simplicial maps use barycentric coordinates as in [[math:def-simplicial-map-and-its-geometric-realization]]. The identity and composition requirements are those of [[math:def-group-action]].

[F3] The complement and its diagonal action are defined in [[def-complement-interface-artin-tits-prerequisites]].

## Proof
**Given:** the objects and hypotheses of the Statement.


Use the declared inputs [[def-author-5a1e77100001-sign-facets]], [[lem-author-5a1e77100001-facet-incidence]], [[def-author-5a1e77100001-salvetti-poset]], [[lem-author-5a1e77100001-order-complex-model]], [[def-complement-interface-artin-tits-prerequisites]], [[math:def-group-action]], [[math:def-simplicial-map-and-its-geometric-realization]] with the conventions in the Statement and Facts below.

**Proof technique:** direct.

**Goal:** prove every assertion in the Statement.

1.1 For each hyperplane $H$, the nonzero functional $h_{gH}\circ g$ has kernel $H$ and is a nonzero scalar multiple of $h_H$. Thus $g$ permutes sign coordinates, possibly reversing their signs, and maps every facet bijectively to a facet. Since it is a homeomorphism of $I$, it preserves relative closures and incidence. It sends $\mathcal A_F$ to $\mathcal A_{gF}$ and sends the localized chamber $C_F$ to $(gC)_{gF}$. [F1, given]

2.1 These facts preserve both conditions defining the order of incident pairs. Consequently $g$ maps finite chains to finite chains, so induces a simplicial automorphism. Its realization permutes barycentric coordinates, continuously on each closed simplex, hence continuously in the weak topology; its inverse is induced by $g^{-1}$. Identities and compositions hold on coordinates, giving an action by homeomorphisms. [F1, F2, step 1.1]

3.1 The diagonal map sends $H\times H$ to $gH\times gH$ and preserves $I\times I$, hence preserves the complement. Its inverse is the diagonal map of $g^{-1}$. Thus it is the action of [F3]. Nothing in steps 1.1, 2.1 and 3.1 constructs a comparison map between the two spaces. [F3, step 1.1, step 2.1] ∎
