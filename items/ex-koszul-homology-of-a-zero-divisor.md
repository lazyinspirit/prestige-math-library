---
id: ex-koszul-homology-of-a-zero-divisor
kind: example
title: "Koszul Homology Of A Zero Divisor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-one-element-koszul-homology, cor-koszul-homology-supported-on-sequence-vanishing-set]
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

For $R=k[s,t]/(st)$ and $x=s$, $H_0=R/(s)$, $H_1=(t)$, and both are supported on $V(s)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-one-element-koszul-homology]], [[cor-koszul-homology-supported-on-sequence-vanishing-set]].

## Proof

**Proof technique:** direct.

1.1 The annihilator of $s$ in $k[s,t]/(st)$ is $(t)$. [given, algebra]

2.1 Thus $H_0=R/(s)$ and $H_1=(t)$; both are killed by $s$ and supported on $V(s)$. [step 1.1, algebra] ∎
