---
page: duality-and-rigidity-in-monoidal-categories
title: "Duality and Rigidity in Monoidal Categories"
status: published
items: [def-left-dual-and-right-dual-object,
        def-the-zig-zag-identities,
        rem-which-side-the-word-left-refers-to,
        thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual,
        thm-the-unit-is-self-dual,
        thm-reversing-the-tensor-product-exchanges-left-and-right-duals,
        thm-duals-are-unique-up-to-a-unique-compatible-isomorphism,
        thm-duality-yields-adjunctions-of-tensoring-functors,
        thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor,
        cor-a-second-proof-that-adjoints-are-unique,
        def-rigid-object-and-rigid-monoidal-category,
        thm-finite-dimensional-vector-spaces-are-rigid,
        def-the-dual-of-a-morphism,
        thm-left-duality-is-a-contravariant-antimonoidal-functor,
        thm-the-double-dual-is-a-monoidal-functor,
        thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism,
        thm-a-braided-rigid-category-has-a-drinfeld-morphism,
        def-the-categorical-trace-of-a-morphism-into-the-double-dual,
        rem-what-is-needed-before-a-trace-can-be-written,
        def-pivotal-structure,
        def-the-dimension-of-an-object-relative-to-a-pivotal-structure,
        def-spherical-structure,
        rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity,
        thm-in-a-spherical-category-the-left-and-right-traces-agree,
        thm-basic-properties-of-the-categorical-trace,
        rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses,
        def-twist-and-ribbon-structure,
        thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type,
        rem-rigidity-alone-does-not-make-a-tensor-category]
examples: [cex-not-every-monoidal-category-is-rigid,
           cex-left-and-right-duals-and-double-duals-need-not-collapse,
           fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category,
           fs-a-braiding-suffices-to-define-a-trace,
           fs-left-and-right-duals-of-an-object-are-isomorphic,
           fs-every-monoidal-category-is-rigid,
           fs-the-left-and-right-traces-always-agree,
           fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]
---

This page keeps three distinctions sharp. Left and right duals are different
data in a general monoidal category; a categorical trace is first typed on a
morphism into a double dual rather than on an arbitrary endomorphism; and
rigidity alone is weaker than the tensor-category hypotheses used later in the
track.

The route is duality first, then rigidity and concrete vector-space witnesses,
then functorial duality and the Drinfeld morphism, and only then the
trace-pivotal-spherical-ribbon ladder. The false statements at the end are
there to stop the common collapses: braiding is not yet trace, pivotal data can
vary, and left and right duals need not coincide.
