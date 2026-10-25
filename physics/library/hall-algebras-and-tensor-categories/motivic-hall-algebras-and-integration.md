---
page: motivic-hall-algebras-and-integration
title: "Motivic Hall Algebras and Integration Maps"
status: published
requires:
  - finitary-ringel-hall-algebras
  - derived-hall-algebras
  - cohomological-hall-algebras-and-quiver-correspondences
items:
  - def-motivic-stack-function-groups-for-quiver-representations
  - rem-derived-and-cohomological-hall-are-distinct
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-finite-field-stack-groupoid-cardinality
  - lem-quiver-motivic-extension-stack-class
  - thm-quiver-motivic-hall-convolution-associative
  - def-quiver-motivic-quantum-torus
  - lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations
  - rem-motivic-versus-untwisted-finitary-hall
  - thm-quiver-motivic-integration-is-multiplicative
examples: []
---

## Objective

For a finite quiver over a field, this page defines a motivic Hall algebra
from quotient stacks of representations and a relative stack-function
coefficient theory. The product is pull-push along the stack of short exact
sequences, with the first input the quotient and the second the
subrepresentation. It proves associativity by identifying both
parenthesizations with the same stack of three-step flags.

The page then defines the dimension-vector Euler pairing and proves that
integration of stack classes is multiplicative into the monoid algebra with
twist $\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$. The extension-groupoid
calculation supplies the exact exponent and sign.

## Conventions and prerequisites

The page-level reading route through
[[finitary-ringel-hall-algebras]] is retained. The local comparison remark
uses its actual untwisted product definition to distinguish finite subobject
counts from stack classes. The motivic construction is defined directly for
quiver representation stacks; it does not treat the
ordinary Ringel–Hall carrier as an accepted replacement for a stack
function.

The degree is the explicit dimension vector in $\mathbb N^{Q_0}$. This page
does not identify it with the Grothendieck group of every essentially small
abelian category. The coefficient group retains stack stabilizers and imposes
the stated cut-and-paste and vector-bundle-stack relations, with $\mathbb L$
inverted. The groupoid-count specialization over finite fields is defined and
proved locally for the examples.

## Results and proof route

The stack of sequences
$0\to B_{\mathbf e}\to E_{\mathbf d+\mathbf e}\to A_{\mathbf d}\to0$
gives the convolution. The local extension-stack lemma models its fibers by
off-diagonal arrow maps modulo changes of splitting and obtains
$\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)}$. The flag-stack theorem proves the
product is associative and unital. Bilinearity of $\chi_Q$ makes the twisted
dimension-vector target associative, and the local integration theorem then
proves the algebra homomorphism identity.

## Scope boundary

This is the ordinary stack-function construction for quiver representations
without a potential. It does not assert an orientation-dependent
3-Calabi–Yau integration theorem, a vanishing-cycle formula, derived Hall
associativity, a cohomological Hall product, wall crossing, or a physical BPS
state identification. Those constructions have separate coefficient
theories and hypotheses, as recorded in
[[rem-derived-and-cohomological-hall-are-distinct]].

Companion: [[motivic-hall-algebras-and-integration-examples]].

