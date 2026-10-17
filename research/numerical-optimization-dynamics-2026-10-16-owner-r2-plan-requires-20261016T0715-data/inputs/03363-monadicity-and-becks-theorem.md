---
page: monadicity-and-becks-theorem
title: "Monadicity and Beck's Theorem"
status: published
items: [def-absolute-colimit, def-split-coequalizer,
        thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute,
        def-reflexive-pair,
        def-u-split-coequalizer-and-creation-of-their-coequalizers,
        thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras,
        thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras,
        thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs,
        lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor,
        thm-becks-monadicity-theorem, thm-becks-strict-monadicity-theorem,
        thm-crude-monadicity-the-reflexive-tripleability-theorem,
        thm-groups-are-monadic-over-sets, thm-modules-are-monadic-over-sets,
        lem-free-word-rings-are-unital-rings,
        thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor,
        lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers,
        thm-monoids-and-rings-are-monadic-over-sets,
        cor-group-actions-are-strictly-monadic-over-sets,
        lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets,
        thm-the-contravariant-power-set-functor-is-monadic,
        def-finitary-functor-and-finitary-monad,
        def-category-of-models-for-an-algebraic-theory,
        prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers,
        lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice,
        thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras,
        cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete,
        def-ultrafilter-extension-principle,
        lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit,
        lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra,
        lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism,
        def-topology-induced-by-an-ultrafilter-algebra,
        lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology,
        lem-closure-in-an-ultrafilter-algebra-topology,
        lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit,
        lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology,
        thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse,
        thm-compact-hausdorff-spaces-are-monadic-over-sets,
        cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity]
examples: [cex-a-conservative-functor-that-is-not-monadic,
           fs-becks-theorem-characterises-strict-monadicity,
           fs-every-conservative-right-adjoint-is-monadic,
           fs-a-u-split-pair-is-a-split-pair-in-the-domain,
           fs-the-forgetful-functor-from-topological-spaces-is-monadic]
---

Monads and their Eilenberg–Moore algebras provide the comparison functor attached to a right adjoint, while [[def-monadic-and-strictly-monadic-functor]] distinguishes equivalences from isomorphisms and [[def-conservative-functor]] defines reflection of isomorphisms. Coequalizers, creation of colimits, filtered colimits, compactness, Hausdorff separation, filters, and the ultrafilter monad supply the categorical and topological language used in the development.

Split and $U$-split coequalizers lead to the ordinary and strict forms of Beck's theorem and to the reflexive criterion. Applications establish monadicity for familiar algebraic categories, the contravariant power-set functor, finitary algebra categories, and compact Hausdorff spaces. The compact Hausdorff result follows by constructing mutually inverse topological and ultrafilter-algebra structures, with the ultrafilter lemma and dependent-choice costs stated where they enter.
