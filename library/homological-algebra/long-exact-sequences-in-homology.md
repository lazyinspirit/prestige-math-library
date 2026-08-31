---
page: long-exact-sequences-in-homology
title: "Long Exact Sequences in Homology"
status: draft
items: [def-morphism-of-short-exact-sequences-of-complexes,
        lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes,
        def-preconnecting-arrow-on-cycles,
        lem-the-preconnecting-arrow-annihilates-boundaries,
        def-connecting-morphism-in-homology,
        prop-elementwise-formula-for-the-connecting-map-in-module-categories,
        lem-exactness-at-the-homology-of-the-left-complex,
        lem-exactness-at-the-homology-of-the-middle-complex,
        lem-exactness-at-the-homology-of-the-right-complex,
        lem-exactness-at-the-target-of-the-connecting-map,
        thm-long-exact-sequence-in-homology,
        thm-naturality-of-the-homology-connecting-morphism,
        cor-the-long-exact-homology-sequence-is-natural,
        thm-long-exact-sequence-in-cohomology,
        thm-naturality-of-the-cohomology-connecting-morphism,
        cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology,
        cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes,
        cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram,
        prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence,
        thm-the-cone-long-exact-sequence,
        prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign,
        cor-the-cone-criterion-from-the-general-long-exact-sequence,
        thm-long-exact-sequence-of-relative-homology-for-a-composable-pair,
        cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone,
        prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence,
        cor-homology-of-a-degreewise-split-direct-sum-sequence,
        cor-short-five-lemma-for-quasi-isomorphisms,
        prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees,
        def-homological-delta-functor-carried-by-homology-of-complexes,
        prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws]
examples: [fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof,
           fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map,
           fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes,
           fs-the-cohomology-connecting-morphism-lowers-degree,
           fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square]
---

This page builds the homology connecting morphism from the lift-boundary recipe
attached to a short exact sequence of complexes and shows how that construction
fits the categorical snake-diagram route already published elsewhere in the
library.

Once the connecting map is in place, the exactness and naturality of the long
exact sequence become the organizing mechanism for cone criteria, relative
homology, chain-splitting consequences, and the concrete homological
$\delta$-functor carried by homology.

