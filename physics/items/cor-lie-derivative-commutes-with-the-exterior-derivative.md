---
id: cor-lie-derivative-commutes-with-the-exterior-derivative
kind: corollary
title: "Lie derivative commutes with the exterior derivative"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-exterior-derivative-squares-to-zero, thm-cartans-magic-formula]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For every vector field $X$, $\mathcal L_Xd=d\mathcal L_X$ on differential forms.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every differential form $\omega$, $d(d\omega)=0$. ([[thm-the-exterior-derivative-squares-to-zero]]).

## Proof

**Proof technique:** direct.

1.1 Apply $d$ to $\mathcal L_X=d\iota_X+\iota_Xd$; $d^2=0$ leaves $d\mathcal L_X=d\iota_Xd$. [F1, given]

2.1 Applying Cartan's formula to $d\omega$ gives $\mathcal L_Xd\omega=d\iota_Xd\omega$, the same expression. [step 1.1] ∎

