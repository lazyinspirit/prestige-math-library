---
id: prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation
kind: proposition
title: "Lie derivative of forms is a degree-zero graded derivation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-differential-form, thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, def-wedge-product-of-differential-forms]
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

For forms $\alpha,\beta$, $\mathcal L_X(\alpha\wedge\beta)=(\mathcal L_X\alpha)\wedge\beta+\alpha\wedge(\mathcal L_X\beta)$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, $\mathcal L_X\omega$ is the Lie derivative of $\omega$ regarded as an alternating covariant tensor. ([[def-lie-derivative-of-a-differential-form]]).

## Proof

**Proof technique:** direct.

1.1 The wedge of alternating forms is the alternating restriction of their tensor product. [F1, given]

2.1 Restricting the tensor product rule for $\mathcal L_X$ to that alternating product yields the degree-zero graded rule. [step 1.1] ∎

