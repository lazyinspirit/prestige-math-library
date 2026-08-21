---
id: thm-riemann-integrable-functions-are-henstock-kurzweil-integrable
kind: theorem
title: "Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-darboux-equals-riemann, def-tagged-partition-and-riemann-sum, def-gauge-and-fine-tagged-partition]
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

Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral.

## Facts & Assumptions

**Given:** A Riemann integrable $f$ on $[a,b]$ with value $I$.

[L1] For every $\varepsilon>0$, Riemann integrability gives $\delta>0$ such that every tagged partition of mesh below $\delta$ has sum within $\varepsilon$ of $I$ ([[thm-darboux-equals-riemann]]).

[L2] A tagged partition is gauge-fine when every cell lies in its tag's centered gauge interval ([[def-gauge-and-fine-tagged-partition]]).

## Proof

**Proof technique:** direct.

1.1 If $a=b$, both integrals are $0$; otherwise take the constant gauge $\gamma(x)=\delta/2$ from [L1], so [L2] makes every $\gamma$-fine cell shorter than $\delta$ and the whole partition has mesh below $\delta$. [given, L1, L2, algebra]

2.1 The universal estimate in [L1] therefore applies to every $\gamma$-fine tagged partition, which is exactly the HK definition with the same value $I$. [step 1.1, L1] ∎
