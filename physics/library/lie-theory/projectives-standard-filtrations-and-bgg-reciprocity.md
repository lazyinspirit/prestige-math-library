---
page: projectives-standard-filtrations-and-bgg-reciprocity
title: "Projectives Standard Filtrations and Bgg Reciprocity"
status: published
requires:
  - category-o-finiteness-duality-and-blocks
  - semisimple-lie-algebras-cohomology-and-levi-theory
  - projective-and-injective-resolutions
  - ext-and-balanced-resolutions
  - yoneda-extensions-and-homological-dimension
items:
  - def-truncated-category-o-at-a-finite-weight-ideal
  - lem-maximal-label-vectors-in-a-finite-truncation-are-singular
  - lem-maximal-verma-is-projective-in-a-finite-truncation
  - lem-dominant-weights-are-maxima-of-their-weyl-orbits
  - lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective
  - lem-block-projection-preserves-projectives
  - lem-finite-dimensional-tensors-reach-every-block-simple
  - lem-finite-length-objects-decompose-into-indecomposables
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - thm-category-o-has-enough-projectives
  - lem-hom-from-projectives-counts-simple-composition-factors
  - def-verma-flag-and-its-multiplicities
  - lem-verma-flag-multiplicities-are-independent-of-the-flag
  - lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
  - lem-maximal-weight-verma-peels-off-a-standard-filtration
  - lem-direct-summands-of-verma-filtered-objects-are-verma-filtered
  - thm-projectives-in-category-o-have-verma-flags
  - lem-standard-costandard-hom-and-ext-vanishing
  - lem-hom-to-costandards-counts-verma-flag-factors
  - thm-bgg-reciprocity
  - cor-projective-standard-labels-lie-above-the-head
  - cor-injectives-have-costandard-filtrations
  - def-dot-action-facets-and-single-wall-translation-data
  - def-translation-functor-between-o-blocks
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - lem-weight-norm-bound-for-finite-dimensional-simple-modules
  - lem-dominant-norm-distance-comparison
  - lem-single-wall-tensor-weight-exclusion
  - thm-translation-to-and-from-a-wall-on-standard-modules
examples: []
---

This page develops the projective objects of a block of category
$\mathcal O$ and their standard filtrations. Truncating a block at a finite
downward-closed ideal of one linkage class makes every weight vector of a
maximal label singular, so a maximal-label Verma module is projective in its
truncation and projective covers are indecomposable and unique. Tensoring with
finite-dimensional modules and projecting to a block preserve projectives and
produce enough of them; every projective then carries a finite Verma flag, and
restricted duality turns the resulting reciprocity into costandard flags for
injectives.

The second half sets up translation functors across a single wall. Dominant
norm comparison and the weight bound for finite-dimensional simples give a
tensor-weight exclusion lemma, which computes the standard factors surviving
translation: translation to the wall sends a standard module to a standard
module, and translation from the wall is a two-factor extension. The arguments
use the Axiom of Choice wherever the block, finite-length and duality
suppliers do; each statement records its own hypotheses.
