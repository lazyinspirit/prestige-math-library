---
id: fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported
kind: false-statement
title: "Pullback of a compactly supported form is always compactly supported"
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

The assertion that an arbitrary smooth pullback preserves compact support is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

## Refutation

**Proof technique:** direct.

1.1 Choose a compactly supported smooth function $\rho$ on $\mathbb R^2$ and a point $p$ with $\rho(p)=1$, then take the constant map $F:\mathbb R\to\mathbb R^2$, $F(t)=p$. [given]

2.1 Then $F^*\rho=1$ has support all of noncompact $\mathbb R$. The map is nonproper, so arbitrary pullback does not preserve compact support. [step 1.1] ∎
