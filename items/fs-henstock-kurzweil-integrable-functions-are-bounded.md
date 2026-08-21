---
id: fs-henstock-kurzweil-integrable-functions-are-bounded
kind: false-statement
title: "False: every Henstock–Kurzweil integrable function is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-unbounded-derivative-evaluated-by-henstock-kurzweil]
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
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

**False claim:** Every Henstock–Kurzweil integrable function on a compact interval is bounded.

## Facts & Assumptions

**Given:** The false universal claim.

[L1] $F(x)=x^2\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\sin1$ ([[ex-unbounded-derivative-evaluated-by-henstock-kurzweil]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim were true; the derivative in [L1] is HK integrable and unbounded on the same compact interval. [assume-contra, L1]

2.1 This contradicts the claimed boundedness, so the claim is false. [step 1.1, discharge-contradiction] ∎
