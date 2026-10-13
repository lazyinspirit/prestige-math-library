---
page: equivariant-constructible-perverse-foundations
title: "Equivariant Constructible Perverse Foundations"
status: published
items: [def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
        lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences,
        lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap,
        lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
        lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
        thm-constructible-six-functors-proper-base-change-and-verdier-duality,
        lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative,
        thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
        thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]
requires:
  - analytic-constructible-sheaf-foundations
  - analytic-derived-six-operations-and-duality
  - complex-algebraic-stratified-topology
  - constructible-incidence-and-cochain-models
  - derived-categories
  - inner-product-spaces-and-orthogonality
  - relations-functions-and-quotients
  - sheaf-operations-exactness-ringed-spaces-and-module-pullback
  - the-serre-spectral-sequence-and-applications
  - topological-vector-bundles-and-grassmannian-classification
  - algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations
---

**Objective.** This page builds the equivariant constructible derived category
attached to an algebraic action of a product of complex general linear groups
on a separated finite-type complex algebraic variety, together with the finite
Stiefel frame resolutions that make its Hom and Ext groups computable. The
category is defined through the simplicial action nerve and the complexes with
Cartesian cohomology whose degree-zero restriction is algebraically
constructible; its well-formedness, the conservativity of the forgetful
restriction, the finite resolution-triple comparison and idempotent
completeness are proved directly, with the coinduced simplicial injective model
supplied by the locally split Cech descent input.

The second half develops the cohomological toolkit. A separate finite
cohomology-gap lemma records the vanishing of the constant-sheaf cohomology of
the general linear frame spaces in the Stiefel range; the acyclic-fiber lemma
then converts that gap into bounded Hom comparisons, an interval
full-faithfulness statement and the resolution-triple image criterion, with
extension closure reserved for the strict acyclicity bound. The six equivariant
operations, proper base change and the normalized dualizing object are
assembled from the ordinary constructible calculus through the finite
resolutions; the middle-perverse t-structure, its intersection complexes and
the degreewise finiteness of equivariant Ext with its characteristic-zero
scalar compatibility are transported through the same normalized bridge. The
companion page computes the smallest nontrivial example, where the trivial
action of the multiplicative group on a point already exhibits degreewise
finiteness without total finiteness.
