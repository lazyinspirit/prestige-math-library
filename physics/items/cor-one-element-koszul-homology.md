---
id: cor-one-element-koszul-homology
kind: corollary
title: "One Element Koszul Homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-one-element-koszul-complex, def-homology-object-of-a-chain-complex]
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

For $K(x;M)$, $H_0=M/xM$, $H_1=(0:_Mx)$, and $H_i=0$ for $i\notin\{0,1\}$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-one-element-koszul-complex]], [[def-homology-object-of-a-chain-complex]].

## Proof

**Proof technique:** direct.

1.1 The sole differential is multiplication by $x$, whose cokernel is $M/xM$. [given, algebra]

2.1 Its kernel is $(0:_Mx)$ and no other chain groups occur. [step 1.1, algebra] ∎
