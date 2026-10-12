---
id: lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom
kind: lemma
title: "Cartesian simplicial sheaves model actual equivariant derived Hom"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent", "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom", "lem-field-module-sheaves-have-injective-derived-models"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

The preceding Definition gives a locally small triangulated category with conservative restriction to $X$ and the stated ordinary shift. Actual coinduced simplicial injectives compute derived morphisms. Locally split free-action descent identifies its finite GL Stiefel resolution with the full bounded resolution-triple subcategory on $X_N$. The bounded Hom/image comparisons of the Stiefel supplier hold, including degree-zero ring comparison and retract closure. The category is idempotent complete. No derived full faithfulness of restriction to $X$ is asserted.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] is used with its explicit hypotheses.

[F4] The actual stated local construction of [[lem-field-module-sheaves-have-injective-derived-models]] is used with its explicit hypotheses.

## Proof

1.1 The actual simplicial injective construction supplies its ambient bounded derived category and set-sized Hom groups. Cartesian cohomology is preserved by ordinary truncation, shifts and cones, by exactness of the nerve inverse images and the cohomology long exact sequence. Common compatible finite stratifications preserve constructibility under the same operations. Thus the defined full subcategory is triangulated. Cartesian cohomology is determined from degree zero, so vanishing after restriction to X detects the zero object. [given, F1, F2, F3, F4]

1.2 Apply locally split Cech derived descent to the free Stiefel resolution. The actual unit-cone bound and image criterion give exactly the full subcategory of resolution triples and its fully faithful bounded Hom comparison; these are maps in the genuine analytic derived category. Products of resolutions identify the comparison functors, and their uniqueness supplies the coherence cocycle. The degree-zero comparison respects composition and hence is a ring comparison. Its retract closure uses no degree-one extension-closure assumption. [given, F1, F2, F3, F4]

2.1 For an idempotent e on a bounded object K, form its telescope in the bounded-below derived category of ALL simplicial sheaves: S is the countable direct sum of K and T is Cone(1−shift(e):S→S). Exact sheaf coproducts give H(T)=colim(H(K),H(e))=im H(e), bounded Cartesian and finite-rank constructible. The first-summand map i:K→T satisfies ie=i. The map S→K with every component e annihilates 1−shift(e), so the triangle gives p:T→K with pi=e. H(ip)=Id, so ip is an isomorphism; replacing p by p(ip)^−1 gives ip=Id_T and pi=e. This splits the idempotent without requiring arbitrary coproducts inside the constructible subcategory. Perverse normalization is deliberately supplied by the separately named later bridge. [given, F1, F2, F3, F4] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
