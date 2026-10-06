---
page: weyl-character-and-multiplicity-formulas
title: Weyl Character and Multiplicity Formulas
status: draft
requires: [harish-chandra-isomorphism-casimir-and-central-characters, verma-modules-and-shapovalov-forms, the-bgg-resolution]
items: [
  def-completed-formal-character-ring-for-downward-cones,
  lem-casimir-comparison-on-a-weight-vector,
  lem-rho-minus-w-rho-is-a-sum-of-positive-roots,
  lem-weyl-length-parity-is-multiplicative,
  def-formal-character-of-a-finite-dimensional-weight-module,
  def-weyl-alternation-operator,
  lem-positive-root-strings-sum-the-freudenthal-correction,
  lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight,
  lem-geometric-series-invertibility-in-the-completed-character-ring,
  lem-weyl-alternants-are-skew-invariant,
  prop-characters-of-finite-dimensional-modules-are-weyl-invariant,
  prop-formal-characters-are-additive-and-multiplicative,
  thm-freudenthal-weight-multiplicity-recursion,
  cor-freudenthal-recursion-terminates-from-the-highest-weight,
  def-kostant-partition-function,
  thm-weyl-denominator-identity,
  lem-bgg-euler-character-gives-the-weyl-numerator,
  thm-weyl-character-formula,
  lem-regularized-evaluation-of-the-weyl-character-quotient-at-one,
  thm-kostant-weight-multiplicity-formula,
  thm-weyl-dimension-formula
]
examples: []
---

This page proves the denominator and character formulas rather than citing
them. The completed formal character ring $\mathcal R$ supplies the ambient
algebra in which Verma characters and finite products of geometric series are
legitimate formal objects; the BGG resolution of the predecessor page
produces the Euler-character identity, whose value at the trivial weight is
the Weyl denominator identity after multiplying by the Verma denominator.
Dividing by the invertible alternant $A(\rho)$, or equivalently multiplying
the Euler identity by the denominator, yields the Weyl character formula
$A(\lambda+\rho)A(\rho)^{-1}$, presented as a formal quotient in
$\mathcal R$ with no ordinary-function quotient intended before cancellation.

Extracting coefficients from that formal quotient introduces the Kostant
partition function and gives Kostant's multiplicity formula; the finite-sum evaluation
$e^\nu\mapsto\exp(2t(\nu,\rho))$ with $t\to0+$ regularizes the quotient at the trivial element and
gives the Weyl dimension formula. In parallel, tracing the Casimir element on a
weight space and summing over $\alpha$-strings yields Freudenthal's recursion,
whose coefficients are positive at actual non-top weights by the shifted-norm
inequality and whose computation terminates by induction on simple-root
height for each requested weight; the two algorithms are cross-checked on the
$\mathfrak{sl}_3$ adjoint module on the companion page.
