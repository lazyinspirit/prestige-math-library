---
id: cor-koszul-homology-supported-on-sequence-vanishing-set
kind: corollary
title: "Koszul Homology Supported On Sequence Vanishing Set"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sequence-ideal-annihilates-koszul-homology, def-support-of-a-module, lem-support-membership-by-annihilator]
proof_strategy: direct
verification:
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

For every $q$, $\operatorname{Supp}H_q(K(\mathbf x;M))\subseteq V((\mathbf x))$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-sequence-ideal-annihilates-koszul-homology]], [[def-support-of-a-module]], [[lem-support-membership-by-annihilator]].

## Proof

**Proof technique:** direct.

1.1 The sequence ideal annihilates each homology module. [given, algebra]

2.1 A prime in its support contains an annihilator of a nonzero element and therefore contains $(\mathbf x)$. [step 1.1, algebra] ∎
