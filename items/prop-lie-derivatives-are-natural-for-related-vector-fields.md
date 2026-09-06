---
id: prop-lie-derivatives-are-natural-for-related-vector-fields
kind: proposition
title: "Lie derivatives are natural for related vector fields"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-exterior-derivative-commutes-with-pullback, def-lie-derivative-of-a-differential-form, prop-related-vector-fields-have-related-lie-brackets, thm-cartans-magic-formula]
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

If $F:M\to N$ is smooth and $X$ and $Y$ are $F$-related, then $$\mathcal L_X(F^*\omega)=F^*(\mathcal L_Y\omega).$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$ ([[thm-the-exterior-derivative-commutes-with-pullback]]).

[F2] For every vector field $Z$ and differential form $\eta$, $\mathcal L_Z\eta=d(\iota_Z\eta)+\iota_Z(d\eta)$ ([[thm-cartans-magic-formula]]).

## Proof

**Proof technique:** direct.

1.1 Relatedness and the definition of pullback give $\iota_X(F^*\omega)=F^*(\iota_Y\omega)$; [F1] also gives $d(F^*\omega)=F^*(d\omega)$. [F1, given]

2.1 Apply [F2] to both sides of the first identity and use step 1.1: $$\mathcal L_X(F^*\omega)=d\bigl(F^*(\iota_Y\omega)\bigr)+F^*(\iota_Yd\omega)=F^*(\mathcal L_Y\omega).$$ [F1, F2, step 1.1] ∎
