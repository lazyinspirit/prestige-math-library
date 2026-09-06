---
id: cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms
kind: corollary
title: "Pullback carries closed forms to closed forms and exact forms to exact forms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-exterior-derivative-commutes-with-pullback]
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

Let $F:M\to N$ be smooth and let $\omega$ be a differential form on $N$.
If $d\omega=0$, then $d(F^*\omega)=0$; if $\omega=d\eta$ for a differential
form $\eta$ on $N$, then $F^*\omega=d(F^*\eta)$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] Exterior differentiation commutes with pullback by a smooth map ([[thm-the-exterior-derivative-commutes-with-pullback]]).

## Proof

**Proof technique:** direct.

1.1 Naturality gives $d(F^*\omega)=F^*(d\omega)$, so a closed form pulls back to a closed form. [F1, given]

2.1 If $\omega=d\eta$, the same equality applied to $\eta$ reads $F^*\omega=d(F^*\eta)$, proving exactness preservation. [F1] ∎
