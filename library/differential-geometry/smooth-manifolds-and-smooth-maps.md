---
page: smooth-manifolds-and-smooth-maps
title: "Smooth Manifolds and Smooth Maps"
status: published
items: [def-topological-manifold-without-boundary,
        def-manifold-chart-coordinate-domain-and-coordinate-functions,
        def-coordinate-representation-of-a-map,
        def-smoothly-compatible-charts,
        lem-smooth-chart-compatibility-is-symmetric-and-reflexive,
        def-smooth-atlas,
        lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas,
        prop-compatibility-of-smooth-atlases-is-an-equivalence-relation,
        lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas,
        def-smooth-structure-generated-by-an-atlas,
        thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas,
        def-smooth-manifold,
        prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
        prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure,
        prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
        prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds,
        def-c-r-and-smooth-maps-between-smooth-manifolds,
        lem-chart-independence-of-c-r-smoothness,
        prop-smooth-maps-are-continuous,
        prop-identity-maps-and-composites-of-smooth-maps-are-smooth,
        def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
        prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets,
        prop-smoothness-is-local-on-the-source,
        lem-smooth-maps-paste-over-an-open-cover,
        prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth,
        prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth,
        prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth,
        prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism,
        lem-coordinate-balls-form-a-basis-of-a-topological-manifold,
        prop-topological-manifolds-are-locally-compact-and-locally-path-connected,
        prop-components-of-a-topological-manifold-are-open-and-at-most-countable,
        thm-topological-manifolds-are-sigma-compact,
        thm-topological-manifolds-are-metrizable-and-paracompact,
        rem-manifold-conventions-and-the-role-of-second-countability,
        fs-every-hausdorff-locally-euclidean-space-is-a-manifold,
        fs-a-chart-domain-is-an-open-subset-of-euclidean-space,
        fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas,
        fs-a-bijective-smooth-map-is-a-diffeomorphism,
        fs-chart-compatibility-needs-only-one-smooth-transition-direction,
        fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable]
examples: []
---

This page separates the topological manifold axioms from the atlas and maximal
atlas that define a smooth structure, then proves that smoothness of a map does
not depend on the chosen smooth charts. The final block records the global
topological consequences forced by the library convention that manifolds are
Hausdorff and second countable.
