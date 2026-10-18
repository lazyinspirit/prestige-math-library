---
page: finitary-ringel-hall-algebras
title: "Finitary Ringel–Hall Algebras"
status: draft
requires:
  - algebraic-representation-and-tensor-symmetry-map
  - cyclotomic-klr-algebras-and-highest-weight-categorification
items:
  - def-hall-finitary-abelian-category
  - lem-hall-flags-lift-through-a-quotient
  - def-jordan-quiver-nilpotent-representation-category
  - def-untwisted-hall-algebra
  - lem-jordan-quiver-category-is-finitary
  - lem-jordan-quiver-isoclasses-are-partition-indexed
  - lem-untwisted-hall-product-finiteness
  - thm-untwisted-hall-algebra-is-associative-and-unital
  - thm-generic-jordan-hall-algebra-is-symmetric-functions
examples: []
---

## Objective

This page constructs the untwisted Hall algebra of a small finitary abelian
category over an arbitrary commutative coefficient ring. With the fixed
convention that $[M]*[N]$ counts subobjects isomorphic to $N$ with quotient
isomorphic to $M$, its local proofs establish finite coefficients, finite
support, the zero-object unit, and associativity by counting two-step flags.
They use finite Hom sets and finite Yoneda $\operatorname{Ext}^1$ sets; they do
not assume finite-field linearity, enough projectives or injectives, or a
finite-subobject condition for every object.

A separate finite-field specialization develops the Jordan-quiver Hall
algebra. It proves the partition classification, Hall-polynomial structure
constants, and the generator-normalized isomorphism from its generic algebra
to the stable symmetric-function ring. The detailed calculations are on the
[[finitary-ringel-hall-algebras-examples|companion examples page]].

## Reading route and logical suppliers

The canonical plan declares both
[[algebraic-representation-and-tensor-symmetry-map]] and
[[cyclotomic-klr-algebras-and-highest-weight-categorification]] as page-level
reading prerequisites. These routes provide algebra and categorification
context. Neither is used as an item-level premise in the Hall counting proofs.
In particular, the published quiver-flag/KLR convolution theorem is a distinct
construction and does not establish Hall-product associativity.

## Normalization and scope

The coefficient $g^L_{M,N}$ is an integer count of subobject classes. Its
image in the coefficient ring is formed by repeated addition; no automorphism
cardinality is divided out. The square-root Euler twist, Green coproduct and
quantum-group comparison have additional hypotheses and belong to later
pages.

The Hall product $*$ is a multiplication on the Hall module. The Hall inner
product on symmetric functions is a separate bilinear form, defined by
[[def-hall-inner-product-on-symmetric-functions]]. The generic ring
isomorphism here does not identify that pairing with a Green pairing or claim a
Hall–Littlewood basis normalization.
