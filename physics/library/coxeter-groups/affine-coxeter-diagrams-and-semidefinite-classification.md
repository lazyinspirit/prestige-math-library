---
page: affine-coxeter-diagrams-and-semidefinite-classification
title: "Affine Coxeter Diagrams and Semidefinite Classification"
status: published
requires: [finite-coxeter-diagrams-and-complete-classification, affine-reflections-coroot-translations-and-alcoves]
items:
  - lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram
  - def-cg-irreducible-affine-coxeter-type
  - lem-cg-positive-radical-and-affine-gram-exclusions
  - def-cg-standard-affine-diagrams
  - lem-cg-affine-slice-simplex-and-wall-reflections
  - lem-cg-affine-type-crystallographic-alcove-diagrams
  - lem-cg-affine-diagram-enumeration
  - thm-cg-affine-gram-classification-and-euclidean-realization
examples: []
---

This page defines affine form type by the canonical Coxeter form: the diagram is
connected and the form is positive semidefinite of corank one. It proves the
positive-radical and proper-submatrix properties, classifies the standard affine
diagrams, and constructs the associated Euclidean simplex reflection action.
The crystallographic alcove model is matched by a facet-preserving similarity.
An infinite Coxeter group is not automatically of affine form type; twisted
Lie-theoretic diagrams and extended affine Weyl groups are separate conventions.

The items below are in current dependency order. The simplex-similarity result
uses only published prerequisites and supplies the geometric comparison needed
later in the classification.

## Items

- [[lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram]] proves
  that bounded Euclidean simplices with the same inward-unit-normal Gram matrix
  are similar with labelled facets matched, so their facet-reflection groups
  are conjugate.

- [[def-cg-irreducible-affine-coxeter-type]] defines affine form type and the
  radical quotient and affine slice.

- [[lem-cg-positive-radical-and-affine-gram-exclusions]] proves the positive
  radical ray, corank one, positive definiteness of proper principal submatrices,
  finiteness of proper standard parabolics, and the local domination exclusions.

- [[def-cg-standard-affine-diagrams]] records the standard affine list and its
  low-rank naming conventions.

- [[lem-cg-affine-slice-simplex-and-wall-reflections]] constructs the faithful
  Euclidean slice action, simplex, facet reflections, and closed-face
  intersection rule.

- [[lem-cg-affine-type-crystallographic-alcove-diagrams]] computes the
  crystallographic highest-root data, affine facet Gram matrices, and standard
  affine realizations.
- [[lem-cg-affine-diagram-enumeration]] completes the connected semidefinite
  corank-one diagram enumeration.
- [[thm-cg-affine-gram-classification-and-euclidean-realization]] assembles the
  classification, Euclidean realization, fundamental-domain properties, and
  conventions for coroot and coweight translation groups.

The page requires the finite Coxeter classification and the affine
reflection/coroot-translation theory. Its companion page tests the low-rank,
reducible, and indefinite cases. No Kac–Moody classification or twisted
Lie-theoretic diagram classification is asserted here.
