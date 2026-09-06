---
id: cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero
kind: corollary
title: "A closed form is flow-invariant when its contraction is zero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartans-magic-formula, prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

If $d\omega=0$ and $\iota_X\omega=0$, then $\omega$ is invariant under the local flow of $X$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

## Proof

**Proof technique:** direct.

1.1 Cartan's formula gives $\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega)=0$. [F1, given]

2.1 The flow-invariance criterion now makes $\omega$ invariant on every local flow domain. [step 1.1] ∎

