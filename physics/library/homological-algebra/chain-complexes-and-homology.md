---
page: chain-complexes-and-homology
title: "Chain Complexes and Homology"
status: published
items: [def-chain-complex-in-an-abelian-category,
        def-cochain-complex-in-an-abelian-category,
        def-bounded-bounded-below-and-bounded-above-complex,
        def-zero-and-stalk-complex,
        def-cycle-and-boundary-subobjects-of-a-complex,
        lem-the-boundary-subobject-factors-through-the-cycle-subobject,
        def-homology-object-of-a-chain-complex,
        def-cohomology-object-of-a-cochain-complex,
        def-exactness-of-a-complex-at-a-degree-and-acyclic-complex,
        thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero,
        prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees,
        def-chain-map,
        def-cochain-map,
        prop-identities-and-composites-of-chain-maps-are-chain-maps,
        def-category-of-chain-complexes,
        lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries,
        thm-a-chain-map-induces-a-well-defined-map-on-homology,
        prop-homology-respects-identities-and-composition,
        thm-homology-is-an-additive-functor,
        def-quasi-isomorphism,
        prop-isomorphisms-of-complexes-are-quasi-isomorphisms,
        prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is,
        def-subcomplex,
        lem-the-differential-descends-to-a-quotient-complex,
        def-quotient-complex,
        def-short-exact-sequence-of-complexes,
        lem-the-kernel-of-a-chain-map-is-computed-degreewise,
        lem-the-cokernel-of-a-chain-map-is-computed-degreewise,
        prop-images-and-coimages-of-chain-maps-are-computed-degreewise,
        thm-the-category-of-complexes-in-an-additive-category-is-additive,
        thm-the-category-of-complexes-in-an-abelian-category-is-abelian,
        cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise,
        prop-a-subcomplex-is-the-kernel-of-its-quotient-map,
        thm-the-first-isomorphism-theorem-for-complexes,
        prop-finite-biproducts-of-complexes-are-computed-degreewise,
        prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials,
        prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps,
        thm-an-exact-functor-commutes-with-homology,
        cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative,
        def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups,
        thm-euler-poincare-formula-for-finite-free-complexes]
examples: [fs-any-sequence-of-morphisms-is-a-chain-complex,
           fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles,
           fs-a-chain-map-is-determined-by-its-maps-on-homology,
           fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes,
           fs-an-additive-functor-commutes-with-homology,
           fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category]
---

Successive differentials squaring to zero are the load-bearing datum of the
page. That single equation first turns boundaries into subobjects of cycles, so
that homology is a genuine quotient, and then controls how chain maps act on
cycles, boundaries, kernels, cokernels, and exactness.

The page keeps the general ambient category abelian and avoids element language
except in the module and abelian-group examples on the companion. After the
basic homology constructions it builds the category of complexes degreewise,
records quasi-isomorphisms and the exact-functor comparison on homology, and
ends with the deliberately narrow Euler-Poincare formula for finite complexes
of finite-rank free abelian groups.
