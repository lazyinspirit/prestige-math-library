---
page: vertex-modules-rational-and-logarithmic-regimes
title: "Vertex Modules, Rationality, and Logarithmic Regimes"
status: draft
requires:
  - vertex-algebra-state-field-foundations
  - category-o-finiteness-duality-and-blocks
items:
  - lem-module-jacobi-formal-delta-substitution-identity
  - def-vertex-algebra-module
  - def-conformal-vertex-algebra
  - def-admissible-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
  - def-ordinary-vertex-module
  - def-positive-energy-vertex-module
  - def-rational-vertex-algebra
  - def-c2-cofinite-vertex-algebra
  - def-logarithmic-vertex-module
  - def-rank-one-heisenberg-vertex-algebra
  - thm-rank-one-heisenberg-vertex-operator-algebra
  - lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi
  - thm-rank-one-heisenberg-jordan-fock-module
examples: []
---

This page fixes the module Jacobi identity for the ordinary non-super state–field convention of [[vertex-algebra-state-field-foundations]]. It separates the underlying vertex-algebra module axioms from conformal grading conditions: admissible, grading-restricted generalized, ordinary, and positive-energy modules are different specified classes. It uses rationality to mean complete reducibility of all admissible modules; finite numbers of simple modules and $C_2$-cofiniteness are recorded as separate properties.

The logarithmic regime consists of grading-restricted generalized modules on which $L_0$ is not semisimple. The definitions do not imply rationality, finite length, a tensor category, modularity, or character formulae. Such conclusions need their own suppliers with exact finiteness, conformal, and module hypotheses.

Companion: [[vertex-modules-rational-and-logarithmic-regimes-examples]].

## Reading prerequisites

The planned reading route is [[vertex-algebra-state-field-foundations]], followed by the category O page below for comparison. These page-level prerequisites do not assert a general equivalence between vertex-algebra modules and BGG category O.

## Existing library route

- [category-o-finiteness-duality-and-blocks](../lie-theory/category-o-finiteness-duality-and-blocks.md) defines classical BGG category O for a finite-dimensional complex semisimple Lie algebra using finite generation, a Cartan weight decomposition, and local finiteness for the positive nilpotent algebra. Its finiteness and block results use those hypotheses; they do not supply vertex-algebra fields, conformal gradings, or a blanket VOA equivalence.

- [highest-weight-theory-for-complex-semisimple-lie-algebras](../lie-theory/highest-weight-theory-for-complex-semisimple-lie-algebras.md) is the ordinary highest-weight route. Its modules are not identified here with vertex-algebra modules.

## Scope boundary

No Zhu-algebra equivalence, rationality criterion, fusion or tensor-category theorem, modularity theorem, or modular-character formula is asserted on this page. Assuming the Axiom of Choice, the companion gives a rational example; it also gives an algebraic warning about finite simple-module counts. The rank-one Heisenberg construction now supplies an explicit logarithmic conformal-VOA module, with its full field Jacobi and grading proofs on this A page.

## A concrete logarithmic conformal module

[[def-rank-one-heisenberg-vertex-algebra]] fixes the oscillator-polynomial vacuum space. [[thm-rank-one-heisenberg-vertex-operator-algebra]] proves its state-field reconstruction, normal monomial fields and central-charge-one conformal structure. [[lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi]] constructs Fock modules with arbitrary zero-mode endomorphism and proves full module Jacobi from an explicit Wick expression and the formal delta identity; no unproved twist or module reconstruction theorem is imported.

[[thm-rank-one-heisenberg-jordan-fock-module]] takes the actual two-dimensional zero mode $a_0=I+N$, $N^2=0$ and $N\ne0$. It proves admissibility, finite lower-bounded generalized weight spaces and $L_F(0)=D+I/2+N$. The companion [[ex-rank-one-heisenberg-jordan-module-is-logarithmic]] displays its conformal Jordan chain. The more general parameter family distinguishes the zero parameter, where the conformal mode becomes semisimple, from nonzero parameters. These constructions add no Zhu, fusion, modularity or classification conclusion.
