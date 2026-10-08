---
page: direct-integral-decomposition-and-type-i-groups
title: Direct Integral Decomposition and Type I Groups
status: published
requires:
  - unitary-representations-positive-type-and-gns
  - group-c-star-algebras-and-the-fell-unitary-dual
  - measurable-hilbert-fields-and-direct-integral-operators
  - conditional-distributions-and-regular-conditional-probability
  - mackeys-imprimitivity-theorem
  - pontryagin-duality-for-locally-compact-abelian-groups
items:
  - def-direct-integral-of-unitary-representations
  - def-factor-representation-and-primary-representation
  - lem-l-one-of-a-second-countable-group-is-separable
  - def-measurable-field-of-von-neumann-algebras
  - lem-measurable-gram-schmidt-and-constant-field-trivializations
  - lem-closed-witness-codings-and-measured-projections
  - lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - def-commensurator-unitary-character-and-monomial-induced-representation
  - lem-c-star-state-gns-purity-and-polish-state-space
  - def-mackey-borel-structure-and-countable-separation
  - lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous
  - lem-borel-relations-admit-conull-borel-uniformizations
  - def-type-i-factor-representation-and-type-i-group
  - lem-polar-decomposition-and-nonzero-partial-isometries-in-factors
  - lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra
  - lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity
  - lem-monomial-induced-representations-transversal-model-properties
  - lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two
  - lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-separable-type-i-factors-are-multiples-of-irreducible-representations
  - lem-monomial-irreducibility-criterion
  - lem-monomial-inequivalence-criterion
  - lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra
  - lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers
  - lem-pure-state-excision-and-essential-orbit-density
  - lem-faithful-essential-pure-state-orbits-obstruct-countable-separation
  - lem-primitive-ideals-have-standard-borel-quotient-norm-codings
  - lem-multiplicity-of-a-type-i-factor-representation-is-well-defined
  - lem-central-diagonal-disintegration-has-factor-fibers
  - cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums
  - lem-local-analytic-separation-and-saturated-borel-quotients
  - thm-central-decomposition-into-factor-representations
  - lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings
  - lem-gcr-kernel-and-mackey-borel-characterizations
  - lem-central-spectral-models-transport-and-intertwiners-disintegrate
  - lem-separable-group-c-star-type-i-and-smooth-dual-criteria
  - thm-essential-uniqueness-of-central-decomposition
  - thm-equivalent-characterizations-of-second-countable-type-i-groups
  - thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition
  - thm-irreducible-direct-integral-decomposition-for-type-i-groups
  - thm-essential-uniqueness-of-type-i-irreducible-disintegration
examples: []
---

This page develops the measurable structure behind decomposing a separable unitary representation into factor representations and, for type-I groups, irreducible representations with multiplicity. The measure spaces are standard Borel and sigma-finite, the groups are second countable and locally compact, and the Axiom of Choice is carried through the constructions that use it.

The first suppliers establish measurable orthonormal frames, conull Borel selection and the operator-algebra machinery needed for disintegration. A countable integrated group-algebra family gives genuine strongly continuous representation fibres. Measurable commutants and centres then show that diagonalizing the centre produces factor fibres ([[thm-central-decomposition-into-factor-representations]]). Central transport identifies two such models by a measure-class base isomorphism and measurable fibre unitaries ([[thm-essential-uniqueness-of-central-decomposition]]).

For a type-I factor, matrix units identify an irreducible carrier and its multiplicity space. The measurable version chooses minimal projections in the commutant and proves that their orthogonal sum exhausts the fibre. The C*-algebra criteria connect this structure to primitive kernels, the Mackey Borel structure and the Fell topology ([[thm-equivalent-characterizations-of-second-countable-type-i-groups]]). With the resulting standard dual, conditional kernels regroup equivalent irreducible fibres; ideal-support projections prove that the dual-labelled model is central. The resulting measure class and multiplicity function are intrinsic to the representation ([[thm-irreducible-direct-integral-decomposition-for-type-i-groups]], [[thm-essential-uniqueness-of-type-i-irreducible-disintegration]]).

The final non-type-I theorem exhibits two equivalent irreducible integrals with disjoint component classes while retaining canonical central decomposition ([[thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition]]). The companion examples illustrate characters, compact-group atomic decompositions, an ICC factor and the failure of canonical irreducible multiplicity data.
