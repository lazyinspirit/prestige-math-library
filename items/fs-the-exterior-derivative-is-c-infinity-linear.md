---
id: fs-the-exterior-derivative-is-c-infinity-linear
kind: false-statement
title: 'The exterior derivative is $C^\infty$-linear'
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-exterior-derivative-is-a-graded-derivation]
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

The assertion that $d(f\omega)=f\,d\omega$ for all smooth $f$ and forms $\omega$ is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For homogeneous forms $\alpha$ and $\beta$, $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.$$ ([[thm-the-exterior-derivative-is-a-graded-derivation]]).

## Refutation

**Proof technique:** direct.

1.1 The graded Leibniz rule gives $d(f\omega)=df\wedge\omega+f\,d\omega$. [F1, given]

2.1 Take $M=\mathbb R$, $f=x$, and $\omega=1$; then $d(f\omega)=dx$ whereas $f\,d\omega=0$. [step 1.1] ∎
