---
id: rem-chow-ring-and-grr-conventions
kind: remark
title: "Conventions for the Chow ring and Grothendieck-Riemann-Roch"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 20
deps:
  - def-algebraic-cycle-and-cycle-group
  - def-axiom-of-choice
  - def-chow-group-of-cycles-mod-rational-equivalence
  - def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - def-pushforward-in-algebraic-k-theory
  - lem-order-function-one-dimensional-local-domain
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958)"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Introduction and Sections 7-16 (the comparison source for the projective GRR statement)"
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.19, 42.60-42.62, 42.65-42.66 (tags 02RW, 0FEX-0FC1, 02UN, 02UO)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.19, 42.60-42.62, 42.65-42.66: conventions for rational equivalence, the intersection product, Todd classes and the statement-only GRR 42.66"
---

## Conventions

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the finite
coherent-resolution and cohomological suppliers. (i) Rational equivalence is the
version of [[def-chow-group-of-cycles-mod-rational-equivalence]] (Stacks 42.19.1,
tag 02RW; Fulton 1.3), with order functions on possibly singular integral closed
subschemes supplied by [[lem-order-function-one-dimensional-local-domain]]; the
equivalent $\mathbb P^1$-parametrized definition (Fulton 1.6; Stacks 43.8-43.9)
is not used but is consistent with it. (ii) $A^*(X)$ always denotes the
codimension-graded intersection ring of a smooth equidimensional $k$-scheme
([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]); on general
schemes $A_*(X)$ and operational Chern cap maps are used; ring-valued Chern
classes, character and Todd classes are obtained through the operational
identification on smooth schemes. (iii) The intersection product is the diagonal
Gysin construction (Stacks 42.62, tag 0FC0); the moving-lemma/Serre Tor-formula
construction of Stacks Chapter 43 is an independent route to the same product for
nonsingular projective varieties over an algebraically closed field and is not
needed here. (iv) In $K$-theory, $K_0$ and $K^0$ are identified on regular
quasi-projective finite-type schemes
([[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]),
and pushforward is defined via higher direct images with the AC/DC inheritance
declared in [[def-pushforward-in-algebraic-k-theory]].

## Hypotheses of the main theorem

[[thm-grothendieck-riemann-roch-for-projective-morphisms]] is stated for an
algebraically closed base field $k$, nonsingular irreducible quasi-projective
$k$-schemes $X,Y$, and a projective (hence proper) morphism $f$; the field
hypothesis agrees with the Borel-Serre proof scope. Vakil Classes 14/16/17/19 are
partial comparisons with omitted details; the complete proof used here is the
current local supplier chain, with the Borel-Serre introduction and Sections 7-16
as the independently retrieved comparison. The design-named Fulton source entry
was dropped by the owner with confidence certain after five item-level
alternatives per page were recorded; Fulton was not retrieved or read and is
retained only as a bibliographical comparison, never as a proof premise. No
claim is made here for singular targets, for proper non-projective morphisms, for
pairs over a non-algebraically-closed field, or in the $K$-theory of perfect
complexes; the singular and bivariant versions (Fulton, *Intersection Theory*,
Chapters 18 and 17) are outside this pair.

## Choice

The Axiom of Choice (and, where the coherence of higher direct images is
invoked, Dependent Choice) is inherited from the published coherent-cohomology
suppliers throughout; it is used to form the resolutions and direct images in
[[def-pushforward-in-algebraic-k-theory]] and is recorded in
[[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]].
The order function and the finiteness of the lengths it computes also use the
Axiom of Choice, as recorded in
[[lem-order-function-one-dimensional-local-domain]], so the whole Chow-theoretic
chain of this page carries the assumption explicitly. No choice-free claim is
made stronger here; the definitional part of the Chow groups uses no choice
beyond the free abelian group on a set, as recorded in
[[def-algebraic-cycle-and-cycle-group]].
