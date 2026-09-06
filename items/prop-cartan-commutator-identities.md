---
id: prop-cartan-commutator-identities
kind: proposition
title: "Cartan commutator identities"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartans-magic-formula, cor-lie-derivative-commutes-with-the-exterior-derivative, prop-interior-product-on-forms-is-a-graded-antiderivation, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

With $[A,B]=AB-(-1)^{|A||B|}BA$ for homogeneous graded operators, $$[\mathcal L_X,\iota_Y]=\iota_{[X,Y]},\qquad [\mathcal L_X,\mathcal L_Y]=\mathcal L_{[X,Y]},\qquad \iota_X\iota_Y+\iota_Y\iota_X=0.$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

## Proof

**Proof technique:** direct.

1.1 Using $\mathcal L_X=[d,\iota_X]$ and $d^2=0$, expand the graded commutator with $\iota_Y$; the antiderivation signs give $[\mathcal L_X,\iota_Y]=\iota_{[X,Y]}$. [F1, given]

2.1 The same expansion together with the bracket characterization of $\mathcal L_X$ gives $[\mathcal L_X,\mathcal L_Y]=\mathcal L_{[X,Y]}$; alternating insertion gives $\iota_X\iota_Y+\iota_Y\iota_X=0$. [step 1.1] ∎

