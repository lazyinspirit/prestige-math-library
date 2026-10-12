---
id: thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace
kind: theorem
title: Coherent six operations on analytic constructible field sheaves
status: draft
origin: pipeline
deps:
- lem-analytic-six-operation-support-and-trace-calculus
- thm-verdier-duality-on-oriented-stratified-complex-varieties
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- def-algebraically-constructible-complex-of-analytic-field-sheaves
- def-axiom-of-choice
- lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC and the actual geometric and derived-incidence suppliers of the Verdier theorem. For analytic algebraic maps on its proved constructible subcategory, the six operations $f^*,Rf_*,Rf_!,f^!,\otimes_k^L,R\mathcal Hom$ have their three adjunctions, composition and identity comparisons, ordinary proper and extraordinary proper base change, projection formula, support localization, dualizing transitivity and trace. The comparisons commute with Cartesian pasting, composition of maps, evaluation and trace, giving a coherent pull-push product calculus. For a locally trivial product projection with finite-type smooth fibre $F$, the actual finite product cochain model gives $R\mathrm{pr}_*\mathrm{pr}^*B\simeq B\otimes_k C^*(F;k)$, with its ordinary unit. Smooth base change for $Rf_*$ holds whenever a supplied factorization $f=p\circ j$ has $p$ proper and $j$ an open inclusion with the conical local models below; proper maps already satisfy it. Their finite constructible models commute with extension of coefficient fields. Geometric output preservation is the exact geometric supplier, not an additional axiom.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-analytic-six-operation-support-and-trace-calculus]] is used with its stated hypotheses.

[F2] The exact supplier [[thm-verdier-duality-on-oriented-stratified-complex-varieties]] is used with its stated hypotheses.

[F3] The exact supplier [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with its stated hypotheses.

[F4] The exact supplier [[def-algebraically-constructible-complex-of-analytic-field-sheaves]] is used with its stated hypotheses.

[F5] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

[F6] The finite product incidence resolutions and actual star acyclicity of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] compute the local product projection and its unit.

## Proof

1.1 Apply the support-and-trace lemma to the actual analytic maps. Its proper-support section and injective models give the ordinary exchange, projection formula, both support localization triangles, canonical composition, units and traces. Their equalities are section-level identities carried through the same resolution comparisons, so no unrelated triangulated-category isomorphisms are selected. [given, construct, algebra]

1.2 Apply the constructible Verdier theorem to the actual finite conical/incidence models. It supplies duality, orientation and the extraordinary exchange by dualizing the already canonical proper base-change map. Each duality comparison is evaluation/transposition of the same support model; functoriality therefore carries the proved pasting and trace squares to their dual squares. The tensor-Hom and ordinary inverse/direct-image adjunction are the signed dg comparisons of the ordinary operations lemma. This gives the coherent six-operation interface on the bounded constructible subcategory whenever its listed geometric supplier proves preservation of that subcategory. [given, construct, algebra]

1.3 For a product projection V×F→V, use the actual finite product incidence resolution: tensor the finite base diagram resolution with the fibre constant-diagram resolution. Each realized term has support the product of closed cells minus deleted faces. Its intersection with a small base star times F has contractible factors, so the independently proved constant-sheaf comparison makes it section-acyclic. Applying sections gives the finite double complex B|star⊗C*(F;k). These are natural restriction complexes; they identify the actual derived image and its adjunction unit with B⊗C*(F;k) and B⊗(k→C*(F;k)). For smooth base change of an open inclusion j, a local smooth chart is a product with a contractible ball. The boundary-star section model becomes its old finite cochain model tensored with the ball cochains, whose augmentation is a quasi-isomorphism by an explicit contraction. Thus the canonical open-inclusion exchange is a stalkwise quasi-isomorphism. If the supplied f=p∘j has p proper, combine this exchange with the already constructed proper base-change map for p; their compatibility with composition identifies the composite with the canonical f exchange. No compactification existence theorem is inferred: this clause applies to the stated supplied factorization. [F6, given, construct, algebra]

2.1 For field extension k→K, use the geometric supplier's finite local cellular/cochain models. Scalar extension is exact on vector spaces, commutes with finite sums and cohomology, and commutes with duals of finite-dimensional terms. Thus ordinary inverse image, finite cochain pushforward, tensor, internal Hom and the support-defined Verdier duality comparisons extend scalars termwise. The exceptional comparison follows from f^!=D_Xf*D_Y. Composition and traces extend because their maps are those same finite evaluation/section comparisons. This argument does not assert that infinite products of injective stalks commute with scalar extension. [given, construct, algebra] ∎

## Remarks

The local product clause uses the actual finite product incidence proof. The nonproper smooth base-change clause requires the explicitly supplied proper/open factorization and conical boundary model; it is not inferred from proper base change for an arbitrary nonproper map.
