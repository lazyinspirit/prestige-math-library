---
page: character-polynomials-fi-modules-and-representation-stability
title: "Character Polynomials, FI-Modules, and Representation Stability"
status: draft
requires:
  - frobenius-characteristic-and-the-symmetric-group-character-dictionary
  - outer-products-skew-specht-modules-and-littlewood-richardson
  - kronecker-coefficients-and-internal-products
  - categories-functors-and-natural-transformations
  - group-cohomology-as-a-derived-functor
  - noetherian-rings-and-hilbert-basis
items:
  - def-fi-category-and-fi-module
  - def-finite-generation-and-generation-degree-of-an-fi-module
  - def-fi-coinvariant-functors-and-transition-maps
  - def-injectivity-surjectivity-and-stability-degree-of-an-fi-module
  - lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields
  - def-weight-of-a-characteristic-zero-fi-module
  - def-free-fi-module-generated-by-an-sm-module
  - lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules
  - lem-branching-rule-for-specht-induction-and-coinvariants
  - lem-free-fi-modules-have-explicit-weight-and-stability-bounds
  - lem-generation-degree-bounds-surjectivity-degree-and-weight
  - prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated
  - lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight
  - prop-specht-constituents-of-an-fi-module-have-bounded-first-row
  - thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category
  - def-uniform-representation-stability-for-consistent-sn-sequences
  - prop-weight-and-stability-degree-give-uniform-representation-stability-range
  - thm-finite-generation-is-equivalent-to-uniform-representation-stability
  - def-character-polynomial-in-cycle-counts
  - lem-padded-irreducible-characters-have-character-polynomials
  - thm-finitely-generated-fi-modules-have-eventual-character-polynomials
  - prop-fi-module-realizing-one-padded-irreducible-family
  - cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial
examples: []
---

This page develops the FI-module machinery of Church–Ellenberg–Farb and its
character-polynomial consequences over a field of characteristic $0$. The
framework is fixed by [[def-fi-category-and-fi-module]], with free modules
[[def-free-fi-module-generated-by-an-sm-module]] and generation in bounded
degree [[def-finite-generation-and-generation-degree-of-an-fi-module]]; the
presentation of finitely generated modules as quotients of free ones is
[[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]]. The
representation theory used throughout is the characteristic-zero Specht theory
of [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]],
whose induction and coinvariant forms are recorded in
[[lem-branching-rule-for-specht-induction-and-coinvariants]].

The quantitative invariants of an FI-module come from the coinvariant functors
$\Phi_a$ and their transition maps in
[[def-fi-coinvariant-functors-and-transition-maps]]: the injectivity,
surjectivity and stability degrees of
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]], and the
weight of [[def-weight-of-a-characteristic-zero-fi-module]]. For free modules
these are computed exactly in
[[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]], and
[[lem-generation-degree-bounds-surjectivity-degree-and-weight]] bounds surjectivity degree and weight by
the generation degree. Constituents of a module of bounded weight are detected
on coinvariants by
[[lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight]], while
[[prop-specht-constituents-of-an-fi-module-have-bounded-first-row]] shows that
a stability degree bounds the second row of every Specht label.
[[prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated]]
records closure under pointwise tensor products, and
[[thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category]]
(Noetherianity over Noetherian $\mathbb Q$-algebras) supplies the finiteness
input for everything that follows; the page-level prerequisites used here are
collected from the character dictionary, the outer-product and Kronecker pages,
the categories page, group cohomology, and the Hilbert basis development.

Representation stability is stated for consistent sequences in
[[def-uniform-representation-stability-for-consistent-sn-sequences]]. The
stable range $n\ge\operatorname{weight}(V)+\operatorname{stab-deg}(V)$ is
established in
[[prop-weight-and-stability-degree-give-uniform-representation-stability-range]],
and [[thm-finite-generation-is-equivalent-to-uniform-representation-stability]]
identifies finite generation with uniform representation stability for modules
with finite-dimensional values. The character-polynomial story begins with
[[def-character-polynomial-in-cycle-counts]] and
[[lem-padded-irreducible-characters-have-character-polynomials]], which
produces a polynomial for each padded irreducible family; the family itself is
realised as a single finitely generated FI-module in
[[prop-fi-module-realizing-one-padded-irreducible-family]]. Summing the padded
polynomials along the stable constituents gives
[[thm-finitely-generated-fi-modules-have-eventual-character-polynomials]], and
evaluation at the identity yields the eventual polynomiality of dimensions in
[[cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial]].
