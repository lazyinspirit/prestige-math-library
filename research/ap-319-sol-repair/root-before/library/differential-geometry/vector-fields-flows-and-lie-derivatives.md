---
page: vector-fields-flows-and-lie-derivatives
title: "Vector Fields Flows and Lie Derivatives"
status: published
items: [def-smooth-vector-field-as-a-tangent-bundle-section,
        prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components,
        def-action-of-a-vector-field-on-smooth-functions,
        prop-a-vector-field-acts-as-a-derivation-of-smooth-functions,
        thm-derivations-of-smooth-functions-are-smooth-vector-fields,
        def-f-related-vector-fields,
        prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law,
        def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism,
        lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed,
        prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field,
        def-lie-bracket-of-smooth-vector-fields,
        lem-the-commutator-of-vector-field-derivations-is-a-derivation,
        prop-coordinate-formula-for-the-lie-bracket,
        thm-vector-fields-form-a-lie-algebra,
        prop-leibniz-rules-for-the-lie-bracket-with-function-multiples,
        prop-related-vector-fields-have-related-lie-brackets,
        cor-diffeomorphism-pushforward-preserves-lie-brackets,
        prop-coordinate-vector-fields-commute,
        def-integral-curve-of-a-vector-field,
        thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves,
        thm-unique-maximal-integral-curve-through-each-point,
        def-complete-vector-field,
        def-local-and-global-flow,
        thm-fundamental-theorem-on-flows,
        prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains,
        prop-the-generating-vector-field-is-invariant-under-its-flow,
        prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global,
        thm-compactly-supported-vector-fields-are-complete,
        cor-every-smooth-vector-field-on-a-compact-manifold-is-complete,
        prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it,
        thm-flow-box-theorem,
        cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves,
        def-flowout-of-an-embedded-submanifold,
        thm-flowout-theorem,
        def-lie-derivative-of-a-function,
        def-lie-derivative-of-a-vector-field,
        thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket,
        prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes,
        thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute,
        prop-related-complete-vector-fields-have-intertwined-flows,
        def-time-dependent-vector-field-and-evolution-operator,
        thm-time-dependent-vector-fields-have-local-smooth-evolution-operators,
        prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law,
        thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval,
        fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field,
        fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map,
        fs-every-smooth-vector-field-is-complete,
        fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field,
        fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p,
        fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent]
examples: []
---

This page develops vector fields from two equivalent viewpoints: smooth sections
of the tangent bundle and derivations of $C^\infty(M)$. It then builds
$F$-relatedness, diffeomorphic pushforwards, the Lie bracket, manifold integral
curves, maximal flows, completeness criteria, flow boxes, flowouts, and the
vector-field Lie derivative with the sign convention $\mathcal L_XY=[X,Y]$. The
time-dependent tail stays at the evolution-operator level; general tensor-field
and differential-form Lie derivatives are deferred to the later tensor and
Cartan-calculus pages.
