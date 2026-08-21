---
id: fs-henstock-kurzweil-integrable-implies-riemann-integrable
kind: false-statement
title: "False: Henstock–Kurzweil integrability implies Riemann integrability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-dirichlet-function-is-henstock-kurzweil-integrable]
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

**False claim:** Every Henstock–Kurzweil integrable function is Riemann integrable.

## Facts & Assumptions

**Given:** The false implication.

[L1] The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$ and is not Riemann integrable ([[ex-dirichlet-function-is-henstock-kurzweil-integrable]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the implication were true; [L1] gives a function satisfying its hypothesis but not its conclusion. [assume-contra, L1]

2.1 This contradiction refutes the implication, so the converse of the Riemann-to-HK theorem is false. [step 1.1, discharge-contradiction] ∎
