---
id: thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing
kind: theorem
title: "Cohomological dimension is detected by vanishing"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, def-cohomological-dimension-of-a-group, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Proposition 4.2.2"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

For $n\ge0$, $\operatorname{cd}_{\mathbb Z}G\le n$ if and only if $H^q(G;M)=0$ for every left $G$-module $M$ and every $q>n$.

## Proof

**Given:** An integer $n\ge0$.

1.1 If $\operatorname{pd}_{\mathbb Z[G]}\mathbb Z\le n$, higher $\operatorname{Ext}_{\mathbb Z[G]}^q(\mathbb Z,M)$ vanishes for every $M$. [given]

2.1 Conversely, the stated vanishing is exactly the higher-Ext criterion applied to the trivial module. Identify Ext with group cohomology to obtain both implications. [step 1.1] ∎
