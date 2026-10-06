---
id: cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class
kind: corollary
title: "Closed defining forms have vanishing Godbillon-Vey class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-godbillon-vey-class, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields, def-de-rham-cohomology, def-closed-and-exact-differential-forms, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation of a smooth manifold $M$ defined by a closed nowhere-vanishing
$1$-form $\omega$ with $TF=\ker\omega$ (so that $\ker\omega$ is integrable by [[prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields]]). Then
$\mathrm{GV}(F)=0$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$ of a smooth manifold $M$ defined by a closed nowhere-vanishing one-form $\omega$ with $TF=\ker\omega$, and the standing countable choice assumption.

[F1] For a defining form $\omega$ and a one-form $\eta$ with $d\omega=\eta\wedge\omega$, the Godbillon-Vey class is the de Rham class $\mathrm{GV}(F)=[\eta\wedge d\eta]$. ([[def-godbillon-vey-class]]).

[F2] For a transversely oriented codimension-one foliation with nowhere-vanishing defining form $\omega$ there is a smooth one-form $\eta$ with $d\omega=\eta\wedge\omega$. ([[lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega]]).

## Proof

**Proof technique:** direct.

1.1 For the closed defining form $\omega$ the choice $\eta=0$ satisfies $d\omega=0=0\wedge\omega$, so it is one of the forms whose existence the divisibility lemma [F2] guarantees. [F2, given]

2.1 The Godbillon-Vey form of this choice is $\eta\wedge d\eta=0\wedge0=0$, so the class defined in [F1] is the class of the zero form, namely $\mathrm{GV}(F)=0$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$; this applies in particular to fibre foliations of bundles over $S^1$ defined by pullbacks of volume forms on the circle, and no choice principle is used. [F1, step 1.1] ∎
