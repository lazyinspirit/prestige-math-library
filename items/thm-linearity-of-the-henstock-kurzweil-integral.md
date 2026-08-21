---
id: thm-linearity-of-the-henstock-kurzweil-integral
kind: theorem
title: "Linearity of the Henstock–Kurzweil integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, prop-henstock-kurzweil-integral-is-unique, thm-cousins-lemma-for-gauges, lem-finite-sum-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

The Henstock–Kurzweil integral is linear. If $f,g$ are integrable on $[a,b]$ and $c,d\in\mathbb R$, then $cf+dg$ is integrable and

$$\int_a^b(cf+dg)=c\int_a^b f+d\int_a^b g.$$

## Facts & Assumptions

**Given:** HK-integrable functions $f,g$ and scalars $c,d$.

[L1] For every $\varepsilon>0$, one gauge controls every fine tagged Riemann sum of an HK-integrable function ([[def-henstock-kurzweil-integral-on-a-compact-interval]]).

[L2] Finite sums are additive and commute with scalar multiplication ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 For $f+g$, take the pointwise minimum of gauges from [L1] with half the requested error; by [L2], $S(f+g,P)=S(f,P)+S(g,P)$, and the triangle inequality gives the required estimate. [given, L1, L2]

2.1 For a scalar multiple, the case of scalar $0$ is immediate, and otherwise [L1] with tolerance $\varepsilon/|c|$ and [L2] gives $\int cf=c\int f$; combining the sum and scaling conclusions proves the formula. [step 1.1, L1, L2, algebra] ∎
