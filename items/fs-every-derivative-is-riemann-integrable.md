---
id: fs-every-derivative-is-riemann-integrable
kind: false-statement
title: "False: every derivative is Riemann integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-unbounded-derivative-evaluated-by-henstock-kurzweil, def-darboux-integral, thm-every-derivative-is-henstock-kurzweil-integrable]
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

**False claim:** Every derivative on a compact interval is Riemann integrable.

## Facts & Assumptions

**Given:** The false universal claim.

[L1] $F(x)=x^2\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\sin1$ ([[ex-unbounded-derivative-evaluated-by-henstock-kurzweil]]).

[L2] Every derivative is Henstock–Kurzweil integrable ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

[L3] The Darboux definition of Riemann integrability begins with a bounded function on $[a,b]$ ([[def-darboux-integral]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim were true; [L1] supplies a derivative unbounded near zero, while [L3] requires boundedness for Riemann integrability, a contradiction. [assume-contra, L1, L3]

2.1 The correct conclusion for the same derivative is [L2]: it is HK integrable and [L1] evaluates its integral by endpoint difference. [L1, L2, discharge-contradiction] ∎

## Remarks

The bounded Volterra derivative gives a stronger, distinct failure of Riemann integrability ([[cex-volterra-bounded-derivative-not-riemann-integrable]]); it is not used in this refutation.
