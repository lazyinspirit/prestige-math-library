---
id: "lem-analytic-constructible-sheaves-admit-coherent-six-operations"
kind: lemma
title: "Actual analytic constructible sheaves admit coherent six operations"
status: draft
origin: session
deps: ["lem-complex-algebraic-stratifications-have-finite-conical-cochain-models", "lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model", "thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint", "thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace", "thm-verdier-duality-on-oriented-stratified-complex-varieties"]
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

Assume AC and characteristic-zero field coefficients. On separated finite-type complex varieties, the actual ordinary analytic sheaf operations restrict to bounded algebraically constructible complexes: $f^*\dashv Rf_*$, $Rf_!\dashv f^!$, tensor/internal-Hom adjunction, coherent composition, localization, base change, projection formula and trace. Proper $f$ satisfies $Rf_!=Rf_*$. Verdier duality is involutive there and exchanges these adjoints. On a smooth complex $d$-fold, $\omega_X=k_X[2d]$, and for a smooth map of relative dimension $d$, $f^!=f^*[2d]$. Coefficient extensions commute with these operations on bounded constructible inputs.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[thm-verdier-duality-on-oriented-stratified-complex-varieties]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 The actual compact-support adjoint and coherent six-operation suppliers construct the functors and their adjunction units/counits, not just unrelated isomorphisms. Their ordinary coherent composition, Cartesian exchange, projection/trace and localization diagrams are the asserted diagrams, including proper equality and the smooth local-product comparisons. No unproved external six-functor formalism is invoked. [given, F1, F2, F3, F4, F5]

1.2 The actual finite conical and incidence suppliers prove bounded constructibility and finite coefficient models for the stated finite collection. Therefore the constructed operations restrict to D_c^b, and their finite local cochain comparisons commute with field extension. This uses the actual support construction for compactly supported operations; it does not tensor infinite injective products. [given, F1, F2, F3, F4, F5]

2.1 The oriented stratified Verdier supplier gives its evaluation isomorphism and identifies the dualizing object on a smooth complex $d$-fold with $k[2d]$ through the positive complex orientation. Its adjunction construction gives duality exchange and the stated smooth extraordinary pullback. All those maps use the same ordinary units/counits and orientation, so their coherence remains the coherence of the actual construction. [given, F1, F2, F3, F4, F5] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
