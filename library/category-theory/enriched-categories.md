---
page: enriched-categories
title: "Enriched Categories"
status: draft
items: [def-enriched-category, rem-the-order-of-the-tensor-factors-in-composition, def-enriched-functor, rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness, def-enriched-natural-transformation, thm-the-compact-square-form-of-enriched-naturality, rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality, thm-enriched-categories-functors-and-natural-transformations-form-a-two-category, def-the-underlying-ordinary-category-of-an-enriched-category, thm-the-underlying-category-construction-is-a-two-functor, rem-the-underlying-category-can-lose-information, thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs, thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category, thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category, cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts, rem-the-commutative-monoid-case, thm-a-closed-monoidal-category-is-enriched-in-itself, def-representable-enriched-functor, thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set, thm-weak-enriched-yoneda-lemma, thm-strong-enriched-yoneda-lemma-as-a-particular-end, rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims, cor-the-enriched-yoneda-embedding-is-fully-faithful, def-cotensor-and-tensor, cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor, def-enriched-weighted-limit, thm-the-free-enriched-category-two-adjunction, def-conical-limit-in-an-enriched-category, thm-there-is-in-general-no-constant-enriched-functor, thm-conical-limits-do-not-suffice-in-the-enriched-setting, thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category, thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit, thm-enriched-completeness-is-cotensors-plus-small-conical-limits, rem-this-does-not-reduce-indexed-limits-to-conical-ones, thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories, thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor, cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base, rem-what-is-not-proved-about-change-of-base, def-enriched-adjunction, thm-a-right-enriched-adjoint-preserves-weighted-limits, thm-enriched-adjoint-functor-theorem-for-cotensored-categories, thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint, thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables]
examples: []
---

This page develops the Kelly-first enriched-category spine without flattening
the hypotheses. It starts with enrichment over a merely monoidal base, fixes
the composition-order convention, proves the square form of enriched
naturality, and records exactly where the underlying ordinary category forgets
real enriched information.

From there it identifies the standard recovery cases (`Cat`, thin bases,
`Set`, `Ab`, and the two-element lattice), proves the weak and strong enriched
Yoneda lemmas, introduces tensors, cotensors, enriched weighted limits, and
conical limits, and then isolates the point where conical limits stop being
enough. The page closes with change of base, enriched adjunctions, the
cotensor/tensor recognition criteria, and the representable weighted-colimit
density statement.
