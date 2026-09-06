---
id: lem-one-element-koszul-complex
kind: lemma
title: "One Element Koszul Complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

Let $R$ be a commutative unital ring, let $M$ be an $R$-module, and let
$x\in R$. Then $K(x;M)$ is $0\to M\xrightarrow{x}M\to0$, with the left
copy in degree $1$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]].

## Proof

**Proof technique:** direct.

1.1 For one basis element, the only exterior powers are $Re$ and $R$. [given, algebra]

2.1 The defining differential sends $e\otimes m$ to $xm$, producing the displayed two-term complex. [step 1.1, algebra] ∎
