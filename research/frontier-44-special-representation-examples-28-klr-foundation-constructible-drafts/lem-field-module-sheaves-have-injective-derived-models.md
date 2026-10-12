---
id: "lem-field-module-sheaves-have-injective-derived-models"
kind: lemma
title: "Analytic field sheaves have injective derived models"
status: draft
origin: session
deps: ["lem-ringed-space-module-sheaves-enough-injectives", "thm-injective-complexes-model-the-bounded-below-derived-category", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Statement

Assume AC. For a topological space $X$ and a field $k$, $\operatorname{Sh}_k(X)$ is locally small Grothendieck and has supplied functorial injective embeddings and bounded-below injective replacements. Morphisms of its bounded derived category are computed by these replacements. The full subcategory of bounded algebraically constructible complexes is triangulated whenever a common compatible finite stratification is supplied.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[lem-ringed-space-module-sheaves-enough-injectives]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[thm-injective-complexes-model-the-bounded-below-derived-category]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[def-axiom-of-choice]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 Take the ringed space $(X,k_X)$. Its module sheaves are exactly $k$-sheaves, so the actual ringed-space injective supplier gives local-smallness, Grothendieck structure and functorial injective embeddings under AC. This specializes a module-sheaf theorem; an injective abelian-group sheaf is not silently treated as a $k$-injective. Iterate the functorial embedding on cokernels to supply objectwise resolutions. [given, F1, F2, F3]

2.1 Apply the bounded-below injective derived-model theorem to those replacements; AC supplies its dependent-choice requirement. Bounded truncations embed fully faithfully and give set-sized Hom groups. Shifts preserve bounded constructible cohomology. For a cone, refine the finite strata of both objects together; on each smooth stratum its long exact sequence has kernels and cokernels of finite-rank local systems, hence finite-rank local systems. Thus the full constructible subcategory is closed under shifts and cones. [given, F1, F2, F3] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
