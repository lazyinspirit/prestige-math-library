---
page: chain-homotopy-and-the-homotopy-category
title: "Chain Homotopy and the Homotopy Category"
status: published
items: [def-graded-morphism-of-chain-complexes,
        def-hom-complex-of-chain-complexes,
        lem-the-hom-complex-differential-squares-to-zero,
        prop-zero-cocycles-in-the-hom-complex-are-chain-maps,
        def-chain-homotopy,
        def-null-homotopic-chain-map,
        prop-chain-homotopy-is-an-equivalence-relation,
        lem-chain-homotopy-is-compatible-with-addition-and-composition,
        prop-null-homotopic-maps-form-a-two-sided-additive-ideal,
        thm-chain-homotopic-maps-induce-the-same-map-on-homology,
        cor-null-homotopic-maps-induce-zero-on-homology,
        def-chain-homotopy-equivalence,
        def-contractible-complex,
        thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism,
        cor-a-contractible-complex-is-acyclic,
        def-homotopy-classes-of-chain-maps,
        lem-composition-of-homotopy-classes-is-well-defined,
        def-homotopy-category-of-chain-complexes,
        thm-the-homotopy-category-is-additive,
        prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive,
        thm-homology-factors-uniquely-through-the-homotopy-category,
        prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category,
        thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex,
        def-shift-of-a-chain-complex,
        lem-the-shifted-differential-squares-to-zero,
        def-shift-of-a-chain-map-and-chain-homotopy,
        thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories,
        prop-homology-of-a-shift-is-shifted-homology,
        prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms,
        def-suspension-and-desuspension-of-a-chain-complex,
        lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible,
        thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split,
        thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split,
        prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes,
        prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence]
examples: [fs-chain-homotopic-maps-are-equal-as-chain-maps,
           fs-every-acyclic-complex-is-contractible,
           fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence,
           fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities,
           fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign]
---

Homology remembers less than a chain complex, and this page isolates the first
equivalence relation it forgets. A chain homotopy is a degree-one family whose
graded commutator with the differential measures the difference between chain
maps, so null-homotopic maps form the ideal that must be quotiented before the
homotopy category can even be defined honestly.

The page keeps the distinction between acyclic and contractible explicit,
builds the additive quotient category $K(\mathcal A)$, and then fixes the sign
convention for shifts that later cone and triangle constructions depend on.
