---
id: "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models"
kind: lemma
title: "Complex algebraic constructible complexes have finite conical cochain models"
status: draft
origin: session
deps: ["thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications", "thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods", "thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology", "lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goresky, Sheaves and Perverse Sheaves; local finite-model reconstruction"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
proof_strategy: direct
---

## Statement

For a finite collection of separated finite-type complex varieties, algebraic maps, algebraic supports and bounded finite-rank algebraically constructible complexes, the compatible complex Whitney/conical stratification and deleted-boundary triangulation suppliers give finite local and global cochain models. Ordinary and compactly supported cohomology and ordinary derived Hom are bounded and degreewise finite; internal derived Hom is bounded constructible. Their finite cochain computations commute with every field extension. A noncompact variety is modeled by a finite compactification triangulation with a subcomplex deleted, not asserted to be a finite compact realization.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 The compatible stratification and control suppliers give finite smooth complex algebraic strata with the frontier condition and local conical products for the actual finite collection. The finite-triangulation supplier gives a finite deleted-boundary polyhedral model compatible with the stated cohomology supports. These are the named geometric construction results, not consequences of abstract derived categories. [given, F1, F2, F3, F4]

2.1 On each such supplied model, apply the actual derived incidence comparison. Its realized diagram injectives are independently acyclic on stars, and its finite projective bar models compute actual derived Hom. The local conical products transport these finite complexes along strata, proving the bounded constructible internal-Hom assertion. The global and relative finite cochains compute ordinary and compact-support groups. Tensor with a field extension preserves every finite matrix, kernel and cohomology group, proving all asserted scalar comparisons. [given, F1, F2, F3, F4] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
