---
id: lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
kind: lemma
title: "Complex algebraic constructible complexes have finite conical cochain models"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-axiom-of-choice,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent,
       thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods,
       thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beilinson-Bernstein-Deligne, Faisceaux pervers (Asterisque 100), 1.4 and 2.1 (constructibility and local cohomology); Bernstein-Lunts, Equivariant Sheaves and Functors, Part I (finite resolution construction)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For quasi-projective complex varieties and
finitely many algebraic operations/support collections, the geometric suppliers
give individually chosen compatible smooth Whitney strata, conical local
products and finite deleted-boundary triangulation models for each operation.
No simultaneous stratification of an arbitrary cyclic diagram respecting all
marked supports is asserted. On any separated finite-type complex variety,
bounded algebraically constructible objects have bounded finite ordinary and
compact-support cohomology, ordinary derived Hom and bounded constructible
internal Hom, with coefficient-extension compatibility, by these models locally
and finite affine-open descent globally. A noncompact variety is not asserted
to be a finite compact realization.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] is used with its explicit hypotheses.

[F4] The actual stated local construction of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with its explicit hypotheses. This in-run batch-36 supplier is currently a draft without a recorded Step-3 decision, so its use below carries an open reconciliation obligation.

[F5] The actual stated local construction of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with its explicit hypotheses. This in-run batch-36 supplier is likewise a draft without a recorded Step-3 decision, so its use below carries an open reconciliation obligation.

[A1] AC is inherited exactly for the geometric and analytic supplier constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For each individual quasi-projective map and support collection, apply the actual compatible-stratification and control suppliers, followed by their fixed-space triangulation supplier. This is the precise geometric scope actually authored upstream. On each supplied finite deleted-boundary model the incidence theorem proves the finite local/global cochains, internal-Hom constructibility and field-extension comparison. Choices for different operations need not form one jointly stratified cyclic diagram. [given, F1, F2, F3, F4, F5]

1.2 A separated finite-type variety has a finite affine-open cover, whose finite intersections are affine: its closed diagonal identifies each two-chart intersection with a closed subscheme of the affine chart product, and iterate. Each intersection is quasi-projective. Apply the local geometric/incidence construction there. The actual finite open-cover Cech derived augmentation assembles their cochains. Only finitely many intersection degrees occur, and the finitely many local cohomology bounds give a uniform finite total bound. Hence ordinary/global derived Hom and cohomology are bounded and finite, and their finite complexes commute with field extension. Compact-support models are assembled by the ordinary open/closed support resolution and the same finite local models. Internal Hom is locally computed on the finite affine cover and its bounds are uniform; its algebraic constructibility is local and a finite refinement of the locally closed support pieces globalizes it. [given, F1, F2, F3, F4, F5]

2.1 For a map locally over an affine target chart, choose a finite affine cover of its source preimage and all finite intersections, as in step 1.2. Apply the one-morphism geometric supplier of step 1.1 to their finite disjoint union mapping to that target, with the required supports; this gives a common target constructibility model for the finite collection of pushforward terms. The source-inclusion Cech diagram need not itself be jointly stratified. Its actual derived augmentation then assembles the pushforward. Thus the individual-operation use of step 1.1 is sufficient for the separated finite-type constructions, and no false cyclic-diagram compatibility is imported. [given, F1, F2, F3, F4, F5, step 1.1, step 1.2] ∎

## Remarks

- **Dependency status.** Steps 1.1–2.1 use the in-run batch-36 suppliers
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  and `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`,
  currently drafts without recorded Step-3 decisions; those uses are provisional
  pending reconciliation of those suppliers and their actual uses, as flagged
  in the pair report.
- **Scope.** The global finiteness conclusion is obtained by finite
  affine-open descent on separated finite-type varieties; it is not obtained
  from a compactification of a general separated variety, and no noncompact
  variety is asserted to be a finite compact realization.
