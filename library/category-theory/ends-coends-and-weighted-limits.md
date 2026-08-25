---
page: ends-coends-and-weighted-limits
title: "Ends Coends and Weighted Limits"
status: published
items: [def-dinatural-transformation,
        prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural,
        thm-dinatural-transformations-do-not-compose-in-general,
        def-wedge-and-cowedge,
        def-end-and-coend,
        thm-ends-and-coends-are-unique-up-to-unique-isomorphism,
        thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends,
        def-twisted-arrow-category,
        thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor,
        thm-an-end-is-a-limit-over-the-twisted-arrow-category,
        prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor,
        cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete,
        thm-an-end-is-an-equalizer-between-two-products,
        thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation,
        thm-a-module-valued-coend-is-a-quotient-of-a-direct-sum-by-the-dinaturality-submodule,
        thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends,
        cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends,
        cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends,
        def-parametrised-end-and-parametrised-coend,
        thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters,
        thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end,
        lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately,
        thm-fubini-for-ends,
        cor-ends-commute-with-ends,
        thm-the-set-of-natural-transformations-is-an-end,
        cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity,
        thm-the-end-form-of-the-yoneda-lemma,
        thm-the-ninja-yoneda-lemma-in-coend-form,
        def-functor-tensor-product,
        def-set-weighted-limit-and-weighted-colimit,
        thm-a-weighted-limit-is-unique-up-to-unique-isomorphism,
        prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight,
        def-power-and-copower-by-a-set,
        thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies,
        thm-a-weighted-limit-is-an-end,
        thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements,
        cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target,
        cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements,
        thm-the-constant-singleton-weight-recovers-an-ordinary-limit,
        thm-weighted-limits-over-a-representable-weight-are-evaluation,
        thm-representable-functors-carry-weighted-limits-to-weighted-limits,
        thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor,
        rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits,
        rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows]
examples: [fs-dinatural-transformations-compose,
           fs-every-end-exists,
           fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention,
           fs-every-functor-preserves-ends,
           fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram,
           fs-yonedas-original-notation-agrees-with-the-modern-one]
---

Opposite and product categories, natural transformations, cones, limits, and the Yoneda machinery already provide the ordinary categorical language used here. This page also uses the published functor category and its size control, the category of elements, representing-object uniqueness, and the comparison results that identify products, equalizers, pullbacks, and adjoint preservation as special cases of universal properties.

This page introduces dinaturality, wedges, ends, coends, and the twisted arrow category, then proves the two standard computational descriptions: as limits over $\operatorname{Tw}(\mathcal C)$ and as equalizers or coequalizers. It next develops parametrised ends, Fubini, natural transformations as an end, the coend form of Yoneda, and the set-weighted theory of powers, weighted limits, representable weights, and hom-weighted coends, with false statements isolating the variance and existence traps.
