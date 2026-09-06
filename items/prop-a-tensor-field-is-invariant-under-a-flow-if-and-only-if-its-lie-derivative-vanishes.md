---
id: prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes
kind: proposition
title: "A tensor field is flow-invariant exactly when its Lie derivative vanishes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-tensor-field, lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

On every common local flow domain, $\Phi_t^*T=T$ for all defined $t$ if and only if $\mathcal L_XT=0$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $X$ has local flow $\Phi_t$ and $T$ is a smooth tensor field, its Lie derivative is $$\mathcal L_XT=\left.\frac d{dt}\right|_{t=0}\Phi_t^*T,$$ on every local flow domain where this derivative is defined. ([[def-lie-derivative-of-a-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 If $\Phi_t^*T=T$, differentiating at zero gives $\mathcal L_XT=0$. [F1, given]

2.1 Conversely the derivative of $\Phi_t^*T$ is $\Phi_t^*(\mathcal L_XT)$; it vanishes when $\mathcal L_XT=0$, so the pullback curve is constant on each common domain. [step 1.1] ∎

