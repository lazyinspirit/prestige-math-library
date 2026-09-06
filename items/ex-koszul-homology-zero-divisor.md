---
id: ex-koszul-homology-zero-divisor
kind: example
title: "Koszul Homology Zero Divisor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-one-element-koszul-homology]
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

## Example

For $R=k[t]/(t^2)$, $K(t;R)$ has $H_0\cong k$ and $H_1=(t)\cong k$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-one-element-koszul-homology]].

## Proof

**Proof technique:** direct.

1.1 In $k[t]/(t^2)$, multiplication by $t$ has kernel and image $(t)$. [given, algebra]

2.1 The one-element formula gives $H_0\cong k$ and $H_1\cong(t)\cong k$. [step 1.1, algebra] ∎
