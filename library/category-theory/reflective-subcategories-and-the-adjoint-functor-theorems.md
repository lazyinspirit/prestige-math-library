---
page: reflective-subcategories-and-the-adjoint-functor-theorems
title: "Reflective Subcategories and the Adjoint Functor Theorems"
status: published
items: [def-reflective-subcategory-and-reflector,
        def-coreflective-subcategory-and-coreflector,
        thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow,
        thm-the-counit-of-a-reflection-is-an-isomorphism,
        thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible,
        thm-a-reflective-inclusion-creates-all-limits,
        thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has,
        cor-a-reflective-subcategory-of-a-complete-category-is-complete,
        def-subobject-and-quotient-object,
        thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence,
        thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections,
        def-intersection-of-a-family-of-subobjects,
        lem-wide-pullbacks-compute-intersections-independently-of-representatives,
        def-well-powered-and-co-well-powered-category,
        def-separating-set-and-coseparating-set,
        thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables,
        def-weakly-initial-object-and-jointly-weakly-initial-set,
        thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object,
        def-the-solution-set-condition,
        thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set,
        lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor,
        thm-general-adjoint-functor-theorem-objectwise-form,
        thm-general-adjoint-functor-theorem-functor-form,
        thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object,
        thm-special-adjoint-functor-theorem-objectwise-form,
        thm-special-adjoint-functor-theorem-functor-form,
        rem-choice-ledger-for-the-adjoint-functor-theorems,
        cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete,
        cor-a-continuous-functor-to-set-from-a-chosen-well-powered-saft-category-is-representable,
        thm-freyd-representability-theorem,
        rem-why-completeness-alone-is-not-enough-for-an-adjoint,
        thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces,
        prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses,
        thm-saft-yields-the-stone-cech-adjunction,
        thm-the-solution-set-for-the-underlying-set-functor-on-groups,
        cor-gaft-recovers-the-free-group-and-abelianisation-adjoints,
        thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces,
        thm-abelian-groups-are-reflective-in-groups,
        thm-commutative-rings-are-reflective-in-rings,
        thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups,
        fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint,
        fs-every-reflective-subcategory-is-closed-under-colimits,
        fs-a-reflective-inclusion-creates-colimits,
        fs-a-subobject-is-a-monomorphism]
examples: []
---

A reflective subcategory is full and has an inclusion with a left adjoint; its
dual is coreflective. Universal arrows recognise reflectivity objectwise, the
fully faithful inclusion forces the reflection counit to be invertible, and an
ambient object is already reflected exactly when its unit is invertible. These
facts show that the inclusion creates ambient limits in the library's ordinary,
isomorphism-invariant sense, while ambient colimits are formed in the
subcategory by applying the reflector rather than by inclusion.

The page then builds subobjects and quotient objects as mutual-factorisation
classes, their opposite order conventions, intersections of supplied families,
well-poweredness, separating and coseparating sets, and weakly initial sets.
The choice-free initial-object lemma drives GAFT through comma categories and a
solution set. A separate all-subobject-intersections lemma drives the exact SAFT
forms described below, with local smallness and every smallness or preservation
hypothesis stated rather than treated as background. Representability,
compact-Hausdorff/Stone–Čech, free-group, abelianisation, commutative-ring, and
torsion-free reflection applications close the page.
