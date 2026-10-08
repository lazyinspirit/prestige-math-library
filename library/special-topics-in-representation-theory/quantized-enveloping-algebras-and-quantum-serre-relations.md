---
page: quantized-enveloping-algebras-and-quantum-serre-relations
title: Quantized Enveloping Algebras and Quantum Serre Relations
status: draft
requires:
- kac-moody-algebras-from-generalized-cartan-matrices
- tensor-products-of-modules
- permutation-statistics-inversions-and-eulerian-numbers
- harish-chandra-isomorphism-casimir-and-central-characters
- free-groups-and-presentations
- the-burau-representations
items:
- def-bialgebra-counit-and-antipode
- def-lie-bialgebra-and-root-graded-manin-triple
- def-symmetrizable-cartan-datum-for-a-quantum-group
- lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix
- def-quantum-integers-factorials-and-divided-powers-at-q-i
- lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part
- lem-an-antipode-is-unique
- thm-root-graded-manin-triple-gives-dual-lie-bialgebras
- def-drinfeld-jimbo-quantized-enveloping-algebra
- lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras
- lem-quantum-pascal-recurrence-and-gaussian-integrality
- def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum
- def-positive-negative-and-toral-quantum-subalgebras
- lem-q-binomial-expansion-for-q-commuting-elements
- lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions
- lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals
- lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra
- lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double
- thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
- thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free
- thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing
- thm-triangular-decomposition-of-a-quantized-enveloping-algebra
- thm-quantized-sl-two-string-formulas
examples: []
---

This page constructs the Drinfeld–Jimbo quantized enveloping algebra of a
symmetrizable Cartan datum and develops its quantum Serre relations, its Hopf
structure and its triangular decomposition. The datum with its symmetrizer,
lattices and normalization is fixed in
[[def-symmetrizable-cartan-datum-for-a-quantum-group]], and the $q_i$-integers,
factorials and divided powers used throughout are set up in
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]] with the Gaussian
calculus of [[lem-quantum-pascal-recurrence-and-gaussian-integrality]] and
[[lem-q-binomial-expansion-for-q-commuting-elements]].

## Presentation, Serre relations and Hopf structure

The algebra is presented by generators $E_i,F_i,K_h$ and the toral, mixed and
quantum Serre relations in
[[def-drinfeld-jimbo-quantized-enveloping-algebra]], with the Hopf foundations
[[def-bialgebra-counit-and-antipode]] and [[lem-an-antipode-is-unique]]. The
coproduct of a Serre element is controlled by
[[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]], the
bar and Chevalley involutions are checked on all relations in
[[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]], and
[[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] assembles the
coproduct, counit and antipode into a Hopf algebra with the subalgebras of
[[def-positive-negative-and-toral-quantum-subalgebras]].

## PBW ranks, duality and the triangular decomposition

The formal shuffle model of
[[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]] supplies
the coefficientwise Borel, the positive shuffle identity of
[[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]] and the
$q$-binomial cancellation behind
[[thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free]],
whose inputs include the coideal lemma
[[lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part]]
and the root-graded bialgebra duality of
[[def-lie-bialgebra-and-root-graded-manin-triple]],
[[thm-root-graded-manin-triple-gives-dual-lie-bialgebras]] and
[[lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras]];
[[lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix]] supplies
the Cartan coordinates. The classical PBW ranks and the nondegenerate pairing
of the halves are established in
[[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]].
[[lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double]]
presents the algebra as the crossed double of its two halves and the torus, and
[[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]] proves the resulting vector-space decomposition after the local normal-form and opposite-Serre commutator calculations. The total root grading retains all summands with positive degree minus negative degree equal to the prescribed degree, including the additional degree-zero summands. The rank-one string modules used in later
pages are computed in [[thm-quantized-sl-two-string-formulas]].

The companion [[quantized-enveloping-algebras-and-quantum-serre-relations-examples]]
works through the $U_q(\mathfrak{sl}_2)$ coproduct and antipode, a type-$A_2$
Serre calculation, the double-edge affine $A_1^{(1)}$ relation, and a
counterexample showing that unsymmetrized $q$-parameters break the Cartan
normalization.
