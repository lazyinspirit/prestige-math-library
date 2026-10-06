---
page: unipotent-solvable-groups-and-borel-fixed-points
title: "Unipotent and Solvable Groups and Borel Fixed Points"
status: draft
requires:
  - group-schemes-of-finite-type-over-a-field
  - affine-group-schemes-hopf-algebras-and-rational-representations
  - algebraic-group-actions-orbits-stabilizers-and-controlled-quotients
  - groups-of-multiplicative-type-and-arithmetic-tori
  - finite-proper-and-projective-morphisms
  - quasi-coherent-and-coherent-sheaves-and-vector-bundles
  - nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties
  - proj-projective-schemes-twisting-sheaves-and-ampleness
items:
  - def-unipotent-algebraic-group
  - def-coconnected-hopf-algebra
  - def-upper-unitriangular-group-scheme
  - def-derived-subgroup-and-solvable-algebraic-group
  - def-trigonalizable-algebraic-group
  - def-borel-subgroup-and-maximal-torus
  - def-crossed-homomorphism-and-hochschild-extension
  - lem-unipotent-representation-criterion
  - lem-upper-unitriangular-coordinate-ring-is-coconnected
  - lem-coconnected-comodules-have-fixed-vectors
  - lem-upper-unitriangular-central-series
  - thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients
  - thm-unipotent-group-triangular-criterion
  - lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces
  - lem-distinct-characters-are-linearly-independent
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - lem-derived-subgroup-properties
  - lem-trigonalizable-iff-invariant-flags
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - lem-closed-finite-index-subgroup-of-connected-group-points
  - prop-smooth-commutative-algebraic-groups-are-trigonalizable
  - thm-lie-kolchin-for-smooth-connected-solvable-groups
  - lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant
  - lem-fixed-locus-and-normal-orbit-closure
  - thm-borel-fixed-point-for-complete-schemes
  - lem-flag-variety-of-a-vector-space
  - lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag
  - thm-quotient-by-a-borel-subgroup-is-complete
  - lem-power-map-on-unipotent-groups-is-bijective
  - lem-smooth-multiplicative-type-groups-are-generated-by-their-finite-subgroups
  - prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal
  - def-hochschild-cohomology-of-algebraic-groups
  - lem-shapiro-lemma-and-induced-modules-are-acyclic
  - prop-linearly-reductive-iff-h1-vanishes
  - prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups
  - lem-multiplicative-type-groups-are-linearly-reductive
  - lem-ga-torsors-over-affine-schemes-are-trivial
  - prop-extensions-of-multiplicative-type-groups-by-vector-groups-split
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
  - lem-dimension-one-smooth-connected-group-is-ga-or-gm
  - lem-smooth-trigonalizable-group-normal-series-refinement
  - lem-central-ga-subgroup-of-smooth-connected-unipotent-group
  - thm-trigonalizable-extensions-split-over-algebraically-closed-fields
  - thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate
  - thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate
  - thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field
examples: []
---

This page develops the structure theory of unipotent and solvable affine algebraic
groups over a field and the conjugacy theorems for Borel subgroups and maximal
tori over an algebraically closed field. It defines unipotent groups by the
fixed-vector property, proves the triangular criterion that identifies them with
closed subgroups of the upper unitriangular groups (equivalently with coconnected
coordinate Hopf algebras), and then builds the Hochschild cohomology, induced
modules and linear-reductivity apparatus used to split extensions. The additive
and multiplicative one-dimensional groups, the central series of the
unitriangular groups, and the dimension-one classification supply the local
computations. Lie-Kolchin and Borel fixed points supply the flag and completeness arguments.
Splitting a smooth connected solvable group as its unipotent radical semidirect
a maximal torus then supplies torus conjugacy. Diagonalizable-complement and
maximal-diagonalizable-subgroup conjugacy are stated with their required
smoothness domains, including the counterexamples outside those domains.
Together these results prove conjugacy of Borel subgroups, maximal tori and
Borel pairs.

The Axiom of Choice is declared with its exact uses in the orbit-dimension,
density and cohomological splitting items; the counterexample item is choice-free.
Statements are stated over the precise hypotheses the proofs use: perfectness,
smoothness, connectedness and algebraic closedness are named where they are
needed, and the Milne-only cohomology and torsor inputs are recorded with exact
locators. The items are current-run drafts. The reader report records the source and
scheme-theoretic qualifications checked for this pair.
