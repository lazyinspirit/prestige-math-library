---
page: kan-extensions-density-and-the-free-cocompletion
title: "Kan Extensions Density and the Free Cocompletion"
status: draft
items: [def-left-and-right-kan-extension,
        rem-the-left-right-naming-clash,
        thm-kan-extensions-are-unique-up-to-unique-isomorphism,
        def-global-kan-extension,
        thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran,
        thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions,
        def-pointwise-kan-extension-by-the-comma-category-formula,
        thm-existence-of-pointwise-kan-extensions,
        def-pointwise-kan-extension-by-preservation-by-representables,
        thm-the-two-notions-of-pointwise-agree,
        def-absolute-kan-extension,
        thm-left-adjoints-preserve-left-kan-extensions,
        thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise,
        thm-kan-extensions-as-coends,
        thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category,
        thm-an-adjunction-is-an-absolute-kan-extension,
        thm-evaluation-is-the-limit-over-the-coslice-category,
        thm-evaluation-is-the-colimit-over-the-slice-category,
        thm-density-for-a-small-category,
        thm-density-as-a-self-kan-extension-for-a-small-category,
        def-dense-subcategory,
        thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion,
        def-codensity-monad,
        thm-the-codensity-construction-satisfies-the-monad-laws,
        thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad]
examples: [fs-every-kan-extension-is-pointwise,
           fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor,
           fs-the-free-cocompletion-theorem-holds-for-a-large-source-category,
           fs-the-yoneda-embedding-preserves-colimits]
---

This page uses the published language of functor categories, comma categories, adjunctions, Yoneda, and weighted limits to turn Kan extensions from a universal property into something computable. Restriction along $K$, representables, and categories of elements are the bridges: they let the same object be read as a local extension, a comma-category colimit or limit, and later as a coend or end.

It defines local, global, pointwise, and absolute Kan extensions; proves their uniqueness, the restriction adjunctions, the fully faithful extension theorem, and the coend/end formulas; then reinterprets limits, colimits, adjunctions, and evaluation as Kan extensions. From there it proves density for presheaves, identifies Yoneda as its own pointwise left Kan extension, derives the free-cocompletion theorem for presheaf categories, and closes with the codensity monad and its ultrafilter realization.
