---
page: derived-functors
title: "Derived Functors"
status: draft
items:
  [def-supplied-projective-resolution-datum, def-supplied-injective-resolution-datum, def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data, prop-negative-derived-degrees-vanish-for-one-sided-resolutions, lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, lem-the-induced-homology-map-is-independent-of-the-comparison-lift, def-left-derived-map-relative-to-resolution-data, prop-left-derived-maps-preserve-identities, prop-left-derived-maps-preserve-composition, thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension, def-right-derived-map-relative-to-resolution-data, thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors, prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors, lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects, lem-the-change-of-projective-resolution-isomorphisms-are-natural, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws, rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, prop-positive-left-derived-functors-vanish-on-projective-objects, prop-positive-right-derived-functors-vanish-on-injective-objects, def-acyclic-object-for-a-left-exact-functor, def-acyclic-object-for-a-right-exact-functor, def-f-acyclic-resolution, thm-acyclic-resolution-theorem-for-right-derived-functors, thm-acyclic-resolution-theorem-for-left-derived-functors, cor-adapted-classes-compute-derived-functors, prop-an-exact-functor-has-vanishing-positive-derived-functors, prop-derived-functors-commute-with-finite-biproducts, prop-contravariant-derived-functors-are-derived-on-the-opposite-category, prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied, def-balanced-derived-bifunctor]
examples:
  [fs-enough-projectives-implies-a-canonical-resolution-for-every-object, fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift, fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself, fs-derived-functors-in-two-variables-are-automatically-balanced, fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution]
---

This page builds derived functors only relative to displayed projective or
injective resolution data. The object definitions, map definitions,
functoriality, and change-of-data isomorphisms are kept separate, so the phrase
"well defined" does not hide any missing choice, comparison, or naturality
step.

The second half of the page records the main usable consequences that do belong
at this stage: degree-zero recovery, vanishing on projectives or injectives,
acyclic-resolution computation, the exact-functor and finite-biproduct
corollaries, and the variance bridge to the opposite category. The long exact
sequence and universality structure remain deferred to the next page.
