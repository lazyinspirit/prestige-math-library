---
page: lie-algebra-representations-enveloping-algebras-and-pbw
title: Lie Algebra Representations, Enveloping Algebras, and PBW
status: published
items:
  - def-lie-algebra-over-a-field
  - def-lie-subalgebra-ideal-and-center
  - lem-lie-algebra-quotient-bracket-is-well-defined
  - def-quotient-lie-algebra
  - def-homomorphism-of-possibly-infinite-dimensional-lie-algebras
  - prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras
  - def-direct-product-and-direct-sum-of-lie-algebras
  - def-derivation-of-a-lie-algebra
  - prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal
  - def-semidirect-product-of-lie-algebras
  - lem-semidirect-product-bracket-satisfies-jacobi
  - def-representation-of-a-lie-algebra
  - def-subrepresentation-quotient-representation-and-intertwiner
  - def-irreducible-completely-reducible-and-faithful-lie-algebra-representation
  - prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity
  - prop-direct-sum-dual-hom-and-tensor-representations
  - def-symmetric-and-exterior-powers-over-an-arbitrary-field
  - prop-symmetric-and-exterior-powers-are-lie-algebra-representations
  - prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping
  - def-universal-enveloping-algebra
  - lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra
  - thm-universal-property-of-the-universal-enveloping-algebra
  - thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra
  - prop-functoriality-of-the-universal-enveloping-algebra
  - def-pbw-filtration-on-the-universal-enveloping-algebra
  - def-associated-graded-algebra-of-a-filtered-algebra
  - prop-the-pbw-filtration-is-multiplicative-and-its-associated-graded-algebra-is-commutative
  - def-pbw-symbol-map-from-the-symmetric-algebra
  - lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis
  - lem-pbw-spanning-by-ordered-monomials
  - lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra
  - thm-poincare-birkhoff-witt
  - cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective
  - cor-the-enveloping-algebra-has-no-hidden-linear-relations-in-degree-one
  - thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero
  - prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra
  - prop-enveloping-algebra-of-a-direct-sum-is-the-tensor-product-of-enveloping-algebras
  - cor-schurs-lemma-for-irreducible-lie-algebra-representations
  - rem-hopf-algebra-structure-on-the-enveloping-algebra
  - fs-every-lie-subalgebra-is-an-ideal
  - fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign
  - fs-the-universal-enveloping-algebra-is-commutative
  - fs-the-canonical-map-g-to-u-g-is-injective-by-the-definition-of-a-quotient
  - fs-pbw-symmetrization-is-an-algebra-isomorphism-for-a-nonabelian-lie-algebra
  - fs-every-representation-of-a-lie-algebra-is-completely-reducible
examples: []
---

This page develops Lie algebras and their representations without a
finite-dimensional hypothesis. It first establishes ideals, quotients,
homomorphism theorems, derivations, and semidirect products, then constructs
subrepresentations, quotients, intertwiners, and the standard direct-sum,
dual, Hom, tensor, symmetric, and exterior operations. Alternation is used as
the bracket axiom, so the basic theory and the power constructions remain
valid in arbitrary characteristic.

The associative half uses the tensor and symmetric algebra constructions from
the tensor products page before defining the enveloping quotient and proving
the enveloping algebra's universal property. Representations are then
identified with unital modules over that quotient without assuming its
canonical Lie map is injective. The PBW filtration leads to a complete ordered-
monomial proof: termination is supplemented by the disjoint-pair and Jacobi
overlap checks needed for confluence and linear independence.

Every PBW basis statement is conditional on a supplied basis with a supplied
total order; no general basis-existence choice is invoked. Characteristic zero
is used only where factorial denominators enter symmetrization, and
symmetrization is asserted to be a filtered vector-space isomorphism rather
than an algebra map. The final false statements isolate these and other common
boundary errors. Concrete computations appear on
[[lie-algebra-representations-enveloping-algebras-and-pbw-examples]].
