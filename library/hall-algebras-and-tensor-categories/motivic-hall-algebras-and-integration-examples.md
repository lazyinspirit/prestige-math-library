---
page: motivic-hall-algebras-and-integration-examples
title: "Motivic Hall Algebras and Integration Maps: Examples and Counterexamples"
status: published
requires:
  - motivic-hall-algebras-and-integration
items: []
examples:
  - ex-zero-arrow-quiver-motivic-hall-product
  - cex-untwisted-motivic-integration-fails-for-one-arrow-quiver
---

## Objective

These calculations test the A-page's quotient-first convention, stack
automorphism weights, and Euler twist. The finite-field realizations are
groupoid cardinalities of the stated rational-point groupoids, not unweighted
counts of isomorphism classes.

## Examples

- [[ex-zero-arrow-quiver-motivic-hall-product]] computes the split extension
  fiber for a one-vertex zero-arrow quiver. The extension has no nonzero
  class, but its endpoint-fixing automorphisms contribute the factor
  $\mathbb L^{-1}$.

- [[cex-untwisted-motivic-integration-fails-for-one-arrow-quiver]] uses the
  one-arrow quiver over $\mathbb F_2$ to show that omitting the Euler twist
  fails: the extension groupoid has cardinality $2$, while the untwisted
  monomial product has coefficient $1$.

Both items use the extension-stack formula and the finite-field
groupoid-cardinality specialization proved on the A page. Neither example
supplies a general theorem beyond its stated model and hypotheses.

Companion: [[motivic-hall-algebras-and-integration]].

