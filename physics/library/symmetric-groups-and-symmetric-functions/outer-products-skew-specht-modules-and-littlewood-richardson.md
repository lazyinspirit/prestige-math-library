---
page: outer-products-skew-specht-modules-and-littlewood-richardson
title: "Outer Products, Skew Specht Modules, and Littlewood–Richardson Coefficients"
status: published
requires:
  - frobenius-characteristic-and-the-symmetric-group-character-dictionary
  - the-branching-rule-and-the-young-graph
  - tensor-product-multiplicities-and-littlewood-richardson
  - tensor-products-of-modules
items:
  - def-graded-bialgebra-and-hopf-algebra
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
  - lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation
  - lem-induction-commutes-with-an-external-tensor-factor
  - thm-littlewood-richardson-schur-product-expansion
  - thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring
  - def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
  - lem-connected-graded-bialgebra-has-a-recursive-antipode
  - thm-outer-littlewood-richardson-rule
  - prop-restriction-coproduct-is-schur-skewing
  - cor-outer-pieri-rules-for-trivial-and-sign-factors
  - cor-littlewood-richardson-coefficients-have-conjugation-symmetry
  - def-skew-multiplicity-module-over-c
  - thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c
  - thm-outer-induction-and-restriction-form-a-graded-hopf-algebra
examples: []
---

This page develops the induction product and restriction coproduct on the
graded character ring of the symmetric groups. The outer product gives a
commutative graded ring by
[[thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring]],
and restriction to ordered block subgroups supplies its coproduct. Together
with the recursive antipode for connected graded bialgebras, these structures
form a graded Hopf algebra by
[[thm-outer-induction-and-restriction-form-a-graded-hopf-algebra]].

## Outer induction and Littlewood–Richardson coefficients

The ring and character calculations use
[[lem-character-ring-of-a-direct-product-is-the-tensor-product]],
[[lem-induction-commutes-with-an-external-tensor-factor]], and
[[lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation]],
which make the product-group and conjugate-subgroup bookkeeping explicit. The
symmetric-function calculation is recorded in
[[thm-littlewood-richardson-schur-product-expansion]]; transporting it through
the Frobenius characteristic gives
[[thm-outer-littlewood-richardson-rule]]. The resulting coefficients are
symmetric under conjugating both input and output shapes and specialize to the
horizontal and vertical strip rules in
[[cor-littlewood-richardson-coefficients-have-conjugation-symmetry]] and
[[cor-outer-pieri-rules-for-trivial-and-sign-factors]].

## Restriction, skewing, and the Hopf structure

The coproduct is defined by restriction along ordered block embeddings in
[[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]].
[[prop-restriction-coproduct-is-schur-skewing]] identifies its characteristic
with Schur skewing. The generic bialgebra vocabulary and recursive antipode
are supplied in [[def-graded-bialgebra-and-hopf-algebra]] and
[[lem-connected-graded-bialgebra-has-a-recursive-antipode]]; the final Hopf
theorem proves compatibility for this specific induction and restriction
structure.

## Skew multiplicity modules

For $\mu\subseteq\lambda$, the multiplicity space
[[def-skew-multiplicity-module-over-c]] is an actual complex $S_r$-module.
Its decomposition into Specht modules with Littlewood–Richardson
multiplicities is proved in
[[thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c]].

The companion [[outer-products-skew-specht-modules-and-littlewood-richardson-examples]]
works through small outer products, a coefficient greater than one, and every
bidegree of the restriction coproduct for $\chi^{(3,1)}$.
