---
page: mapping-cones-cylinders-and-chain-triangles
title: "Mapping Cones Cylinders and Chain Triangles"
status: published
items: [def-mapping-cone-of-a-chain-map,
        lem-the-mapping-cone-differential-squares-to-zero,
        def-canonical-inclusion-and-projection-for-a-mapping-cone,
        thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact,
        def-cone-triangle-of-a-chain-map,
        prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift,
        thm-the-cone-of-an-identity-map-is-contractible,
        prop-isomorphic-chain-maps-have-isomorphic-cones,
        def-morphism-of-chain-maps,
        thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones,
        prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes,
        lem-homotopic-maps-have-chain-isomorphic-mapping-cones,
        thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic,
        thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible,
        def-mapping-cylinder-of-a-chain-map,
        lem-the-mapping-cylinder-differential-squares-to-zero,
        thm-the-mapping-cylinder-factors-a-chain-map,
        prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder,
        cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence,
        prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone,
        prop-cones-preserve-chain-homotopy-equivalences-of-arrows,
        lem-the-three-cone-calculation-for-a-composite-chain-map,
        prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category,
        prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category,
        prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism,
        prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences,
        def-relative-homology-of-a-chain-map,
        prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows,
        cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms]
examples: [fs-the-mapping-cone-differential-needs-no-minus-sign,
           fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting,
           fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data,
           fs-an-acyclic-mapping-cone-is-contractible,
           fs-the-mapping-cylinder-factorization-is-a-model-category-factorization]
---

This page fixes the sign convention for mapping cones and then uses the cone and
cylinder formulas exactly at chain level. The central point is that cones detect
quasi-isomorphisms by acyclicity and detect chain-homotopy equivalences by
contractibility, and those are different criteria.

The page also records the honest functoriality boundary. Mapping cones are
strictly functorial on commuting squares of chain maps, but the later
triangulated-category page is where the library discusses arbitrary cone choices
and distinguished triangles.
