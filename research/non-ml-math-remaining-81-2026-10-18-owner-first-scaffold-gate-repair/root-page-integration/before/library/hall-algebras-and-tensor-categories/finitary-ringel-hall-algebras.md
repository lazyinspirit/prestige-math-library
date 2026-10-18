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
  - def-hall-littlewood-scalar-product-and-functions
  - lem-jordan-block-automorphism-count
  - thm-jordan-hall-pairing-and-hall-littlewood-basis
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
to the stable symmetric-function ring. The normalized partition basis is
identified with the monic Hall–Littlewood functions, and the inverse-
automorphism Green pairing is computed in power-sum coordinates by an
independent pair-of-flags count. The detailed calculations are on the
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
isomorphism uses $\Phi_q(u_{(1^r)})=q^{-r(r-1)/2}e_r$. The local
[[thm-jordan-hall-pairing-and-hall-littlewood-basis]] proves
$\Phi_q(u_\lambda)=q^{-n(\lambda)}P_\lambda(x;q^{-1})$. The transported
Green form on degree $d$ is $q^{-d}$ times the standard Hall–Littlewood
form at parameter $q^{-1}$; its power-sum norms are
$z_\lambda\prod_i(q^{\lambda_i}-1)^{-1}$. These are distinct from the
ordinary Hall inner product. This Jordan pairing computation requires no
general Green coproduct theorem.
