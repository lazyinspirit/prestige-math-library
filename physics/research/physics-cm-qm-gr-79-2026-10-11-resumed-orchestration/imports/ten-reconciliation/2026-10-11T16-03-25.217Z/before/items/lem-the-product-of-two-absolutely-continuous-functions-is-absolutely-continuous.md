---
id: lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
kind: lemma
title: "The product of two absolutely continuous functions is absolutely continuous"
status: published
origin: pipeline
deps: [def-absolutely-continuous-function]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Corollary 6.3.9"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

If $F,G\in AC[a,b]$, then $FG\in AC[a,b]$.

## Facts & Assumptions

**Given:** Absolutely continuous $F,G:[a,b]\to\mathbb R$.

## Proof

**Proof technique:** direct.

1.1 Absolute continuity [[def-absolutely-continuous-function]] implies continuity, hence $|F|\le M$ and $|G|\le N$ on the compact interval. Choose the two AC moduli with error $\varepsilon/(2\max\{M,1\})$ and $\varepsilon/(2\max\{N,1\})$. [given, choose]

2.1 For every interval, $|F(v)G(v)-F(u)G(u)|\le M|G(v)-G(u)|+N|F(v)-F(u)|$. Summing over a sufficiently short disjoint family gives $<\varepsilon$. [step 1.1, algebra]

3.1 This is the defining condition, also when a factor or the interval is degenerate. [step 2.1] ∎
