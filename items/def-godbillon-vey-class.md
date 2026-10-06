---
id: def-godbillon-vey-class
kind: definition
title: "The Godbillon-Vey class of a codimension-one foliation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, lem-eta-wedge-d-eta-is-closed, lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form, lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form, def-de-rham-cohomology, def-de-rham-cohomology-ring, def-closed-and-exact-differential-forms, def-transversely-oriented-codimension-one-foliation, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation of a smooth manifold $M$, let $\omega$ be a nowhere-vanishing
defining $1$-form with $TF=\ker\omega$, and let $\eta$ be a smooth $1$-form with
$d\omega=\eta\wedge\omega$, whose existence is guaranteed by [[lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega]]. The **Godbillon-Vey class** of $F$
is $\mathrm{GV}(F):=[\eta\wedge d\eta]\in H^3_{\mathrm{dR}}(M;\mathbb R)$. It is well
defined: $\eta\wedge d\eta$ is closed ([[lem-eta-wedge-d-eta-is-closed]]), and the class
is unchanged by replacing $\eta$ by $\eta+f\omega$ ([[lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form]]) and by rescaling $\omega$
([[lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form]]). Only the de
Rham class over $\mathbb R$ is named; no integral refinement is defined on this page.
