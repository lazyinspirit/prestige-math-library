---
id: ex-an-integrable-pfaffian-equation-with-a-local-first-integral
kind: example
title: "An integrable Pfaffian equation with a local first integral"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pfaffian-frobenius-criterion, cor-frobenius-local-first-integrals]
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

On $\mathbb R^2$, the nowhere-zero form $\alpha=dy$ defines the integrable Pfaffian equation $dy=0$, with first integral $y$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $\theta^1,\ldots,\theta^{n-k}$ locally frame $\mathcal D^\circ$, then $\mathcal D$ is involutive if and only if $$d\theta^a=\sum_b\eta^a_b\wedge\theta^b$$ locally for every $a$; equivalently, its annihilator ideal is differential. ([[thm-pfaffian-frobenius-criterion]]).

## Verification

**Proof technique:** direct.

1.1 The form $dy$ is nowhere zero and $d(dy)=0$, so it satisfies the Pfaffian criterion. [F1, given]

2.1 Its kernel consists of vectors tangent to the lines $y=\mathrm{constant}$, and $y$ is the displayed local first integral. [step 1.1] ∎

