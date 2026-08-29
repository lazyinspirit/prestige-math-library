---
id: fs-chart-compatibility-needs-only-one-smooth-transition-direction
kind: false-statement
title: "One smooth transition direction does not guarantee chart compatibility"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smoothly-compatible-charts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

**False claim:** if one transition map between two charts is smooth, then the
charts are smoothly compatible.

## Facts & Assumptions

**Given:** The two charts on $\mathbb R$ with coordinate maps $\varphi(x)=x$ and $\psi(x)=x^3$.

[F1] Two charts are smoothly compatible only when both transition maps on the overlap are smooth ([[def-smoothly-compatible-charts]]).

## Refutation

**Proof technique:** direct.

1.1 The transition $\psi\circ\varphi^{-1}(x)=x^3$ is smooth on $\mathbb R$. [given] However the reverse transition is $\varphi\circ\psi^{-1}(x)=x^{1/3}$, which is not differentiable at $0$. [given]

2.1 By [F1], the failure of the reverse transition means these charts are not smoothly compatible. So one smooth direction is not enough. [F1, step 1.1] ∎
