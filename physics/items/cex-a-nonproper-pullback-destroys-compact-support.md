---
id: cex-a-nonproper-pullback-destroys-compact-support
kind: counterexample
title: "A nonproper pullback destroys compact support"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-of-a-differential-form, def-smooth-section-local-section-and-support]
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

There are a compactly supported form $\omega$ and a nonproper smooth map $F$ for which $F^*\omega$ has noncompact support.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

## Counterexample

**Proof technique:** direct.

1.1 Let $\rho\in C_c^\infty(\mathbb R)$ satisfy $\rho(0)=1$ and take the constant nonproper map $F:\mathbb R\to\mathbb R$, $F(t)=0$. [given]

2.1 Then $F^*\rho=1$ has support $\mathbb R$, which is noncompact despite $\rho$ having compact support. [step 1.1] ∎

