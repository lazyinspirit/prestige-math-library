---
id: cor-henstock-kurzweil-substitution-for-derivatives
kind: corollary
title: "Henstock–Kurzweil substitution for a derivative composed with a differentiable map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-every-derivative-is-henstock-kurzweil-integrable, thm-chain-rule]
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

Let $a<b$, let $\phi:[a,b]\to\mathbb R$ be differentiable, let $J$ be a nondegenerate interval containing $\phi([a,b])$, and let $F:J\to\mathbb R$ be differentiable with $F'=f$. Then $(f\circ\phi)\phi'$ is Henstock–Kurzweil integrable and

$$\int_a^b f(\phi(t))\phi'(t)\,dt=F(\phi(b))-F(\phi(a)).$$

No monotonicity of $\phi$ is required.

## Facts & Assumptions

**Given:** The functions and the containing interval in the Statement.

[L1] The chain rule gives $(F\circ\phi)'=(F'\circ\phi)\phi'$ ([[thm-chain-rule]]).

[L2] Every derivative is Henstock–Kurzweil integrable and evaluates by endpoint difference ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] throughout $[a,b]$ identifies the derivative of $F\circ\phi$ as $(f\circ\phi)\phi'$, including a constant $\phi$. [given, L1]

2.1 Applying [L2] to the composite gives its HK integrability and the displayed endpoint formula, which also covers reversed endpoint values of $\phi$. [step 1.1, L2] ∎
