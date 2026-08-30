---
page: monoidal-categories-and-monoidal-functors
title: "Monoidal Categories and Monoidal Functors"
status: draft
items: [def-monoidal-category,
        rem-the-associator-runs-the-other-way-in-mac-lane,
        thm-the-pentagon-and-the-triangle-are-independent,
        def-strict-monoidal-category,
        def-the-reverse-and-the-opposite-of-a-monoidal-category,
        thm-a-category-with-finite-products-is-monoidal,
        cor-set-cat-and-every-complete-category-are-cartesian-monoidal,
        thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid,
        thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition,
        thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad,
        def-monoid-object-and-comonoid-object-in-a-monoidal-category,
        def-a-module-over-a-monoid-object,
        thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense,
        thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product,
        thm-monoid-objects-in-abelian-groups-are-rings,
        thm-modules-over-a-commutative-ring-form-a-monoidal-category,
        thm-a-poset-with-finite-meets-is-a-strict-monoidal-category,
        thm-the-left-unitor-of-a-tensor-product-is-determined,
        thm-the-right-unitor-of-a-tensor-product-is-determined,
        cor-the-two-unitors-agree-on-the-unit-object,
        rem-mac-lanes-original-conditions-and-what-became-of-them,
        rem-the-attribution-of-the-unit-redundancies,
        def-lax-strong-and-strict-monoidal-functor,
        rem-monoidal-functor-means-different-things-in-different-sources,
        def-monoidal-natural-transformation,
        thm-monoidal-functors-compose-and-laxness-is-preserved,
        thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects,
        def-monoidal-equivalence,
        def-parenthesised-tensor-word,
        thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers,
        rem-unbracketed-tensor-strings-are-not-yet-defined,
        rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]
examples: [fs-every-monoidal-category-is-strict,
           fs-the-unit-constraints-must-be-imposed-as-axioms,
           fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms,
           fs-the-pentagon-follows-from-the-triangle,
           fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category,
           fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]
---

This page introduces monoidal categories with the pentagon and triangle as the
only axioms, then records the first places where they come from: finite
products, endofunctor categories, module tensor products, and finite-meet
posets. It also isolates the unit-constraint redundancies, because later pages
need those formulas before coherence is available.

The second half fixes the functorial vocabulary. Lax, strong, and strict
monoidal functors are kept separate; monoid objects and their modules are
defined with all bracketings explicit; and the page ends by making the
bracketing discipline itself formal. Until the next coherence page, only
parenthesised tensor expressions are defined.
