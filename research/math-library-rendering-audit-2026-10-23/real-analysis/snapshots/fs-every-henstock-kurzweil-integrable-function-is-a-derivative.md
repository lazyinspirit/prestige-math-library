---
id: fs-every-henstock-kurzweil-integrable-function-is-a-derivative
kind: false-statement
title: "False: every Henstock–Kurzweil integrable function is a derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-dirichlet-function-is-henstock-kurzweil-integrable, thm-darboux-theorem-for-derivatives, lem-q-and-irrationals-dense-r]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Exercise 1:21.2"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

**False claim:** Every Henstock–Kurzweil integrable function on an interval is the derivative of some function.

## Facts & Assumptions

**Given:** The indicator $d$ of the irrationals on $[0,1]$.

[L1] The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$ ([[ex-dirichlet-function-is-henstock-kurzweil-integrable]]).

[L2] Every derivative has the intermediate-value property ([[thm-darboux-theorem-for-derivatives]]).

[L3] The rationals and irrationals are both dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

## Refutation

**Proof technique:** contradiction.

1.1 By [L1], $d$ is HK integrable, and [L3] makes it take both values $0$ and $1$ on every nondegenerate subinterval while taking no value strictly between them. [given, L1, L3]

2.1 Suppose $d$ were a derivative; step 1.1 contradicts the intermediate-value property [L2], so the false claim is refuted. [step 1.1, L2, assume-contra, discharge-contradiction] ∎
