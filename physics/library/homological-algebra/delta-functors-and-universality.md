---
page: delta-functors-and-universality
title: "Delta Functors and Universality"
status: published
items:
  [def-homological-delta-functor, def-cohomological-delta-functor, def-morphism-of-homological-delta-functors, def-morphism-of-cohomological-delta-functors, def-universal-delta-functor, def-effaceable-homological-delta-functor-in-positive-degrees, def-effaceable-cohomological-delta-functor-in-positive-degrees, lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor, def-connecting-map-for-left-derived-functors, lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts, thm-left-derived-functors-form-a-homological-delta-functor, thm-right-derived-functors-form-a-cohomological-delta-functor, prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors, cor-derived-long-exact-sequence, prop-positive-left-derived-functors-are-effaceable-by-projectives, prop-positive-right-derived-functors-are-effaceable-by-injectives, lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle, lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle, lem-extend-a-degree-zero-transformation-through-one-dimension-shift, lem-the-effacement-extension-is-independent-of-the-effacing-morphism, lem-the-effacement-extension-commutes-with-connecting-morphisms, thm-effaceable-homological-delta-functors-are-universal, thm-effaceable-cohomological-delta-functors-are-universal, thm-derived-functors-are-universal-delta-functors, cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic, cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero, prop-an-exact-base-functor-has-the-trivial-universal-delta-functor, prop-satellites-give-the-first-derived-functor, rem-universality-is-the-construction-independence-principle]
examples:
  [fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor, fs-effaceability-means-every-positive-value-is-zero, fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends, fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof, fs-universality-removes-the-need-for-supplied-resolution-data]
---

This page packages the long exact sequence data attached to derived functors
into the abstract language of delta functors. The first half isolates the
structure itself, including the connecting maps built from horseshoe
resolutions and the proof that these maps do not depend on the auxiliary
horseshoe choices once the supplied resolution data are fixed.

The second half proves the universality criterion from effacement. That is the
point at which delta functors become a comparison tool rather than only a way
to print long exact sequences: once a degree-zero construction is known to be
universal, later balance arguments can reduce higher-degree comparison to the
degree-zero map and then invoke uniqueness.
