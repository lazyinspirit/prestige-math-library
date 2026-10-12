---
id: "lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom"
kind: lemma
title: "Cartesian simplicial sheaves model actual equivariant derived Hom"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent", "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom", "lem-field-module-sheaves-have-injective-derived-models"]
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

The preceding Definition gives a locally small triangulated category with conservative restriction to $X$ and the stated ordinary shift. Actual coinduced simplicial injectives compute derived morphisms. Locally split free-action descent identifies its finite GL Stiefel resolution with the full bounded resolution-triple subcategory on $X_N$. The bounded Hom/image comparisons of the Stiefel supplier hold, including degree-zero ring comparison and retract closure. The normalized functor $A\mapsto A_N[\dim_\mathbb C B_N]$ is perverse exact and conservative. No derived full faithfulness of restriction to $X$ is asserted.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[lem-field-module-sheaves-have-injective-derived-models]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 The actual simplicial injective construction supplies its ambient bounded derived category and set-sized Hom groups. Cartesian cohomology is preserved by ordinary truncation, shifts and cones, by exactness of the nerve inverse images and the cohomology long exact sequence. Common compatible finite stratifications preserve constructibility under the same operations. Thus the defined full subcategory is triangulated. Cartesian cohomology is determined from degree zero, so vanishing after restriction to X detects the zero object. [given, F1, F2, F3, F4]

1.2 Apply locally split Cech derived descent to the free Stiefel resolution. The actual unit-cone bound and image criterion give exactly the full subcategory of resolution triples and its fully faithful bounded Hom comparison; these are maps in the genuine analytic derived category. Products of resolutions identify the comparison functors, and their uniqueness supplies the coherence cocycle. The degree-zero comparison respects composition and hence is a ring comparison. Its retract closure uses no degree-one extension-closure assumption. [given, F1, F2, F3, F4]

2.1 Let $u_N=\dim_\mathbb C U_N$ and $g=\dim_\mathbb C G$, so $s_N=u_N-g$. On $U_N\times X$, the two equalities $q_N^*A_N=\operatorname{pr}_X^*A_X$ and smooth perverse pullback with the shifts $g$ and $u_N$ show that $A_X$ is perverse exactly when $A_N[s_N]$ is. Surjective inverse image reflects the inequalities and zero objects. Perverse truncations are lifted by the explicit resolution image criterion, since pulling their base-shift-corrected finite-resolution versions gives the bounded ordinary truncations on X. Enlarging N to cover these fixed ordinary amplitudes makes that image test valid; unique truncation triangles prove independence. This is perverse exactness/conservativity, not derived forgetful full faithfulness. [given, F1, F2, F3, F4] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
