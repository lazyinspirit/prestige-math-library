---
id: cor-henstock-kurzweil-integration-by-parts
kind: corollary
title: "Henstock–Kurzweil integration by parts for differentiable factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-every-derivative-is-henstock-kurzweil-integrable, thm-linearity-of-the-henstock-kurzweil-integral, thm-algebra-of-derivatives]
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
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ and let $F,G$ be differentiable on $[a,b]$. Then $F'G$ is HK integrable if and only if $FG'$ is HK integrable, and whenever either condition holds,

$$\int_a^b F'G=F(b)G(b)-F(a)G(a)-\int_a^b FG'.$$

## Facts & Assumptions

**Given:** Differentiable functions $F,G$ on $[a,b]$.

[L1] Every derivative is Henstock–Kurzweil integrable and its integral is the endpoint increment ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

[L2] The product rule gives $(FG)'=F'G+FG'$ ([[thm-algebra-of-derivatives]]).

[L3] The Henstock–Kurzweil integral is linear ([[thm-linearity-of-the-henstock-kurzweil-integral]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L1], $F'G+FG'$ is HK integrable and its integral equals $F(b)G(b)-F(a)G(a)$. [given, L1, L2]

2.1 If either summand is integrable, [L3] applied to its difference from the integrable sum in step 1.1 makes the other integrable; rearranging gives the formula, and the same argument in the other order proves the reverse implication. [step 1.1, L3, algebra] ∎
