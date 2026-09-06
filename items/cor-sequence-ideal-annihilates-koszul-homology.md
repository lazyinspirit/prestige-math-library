---
id: cor-sequence-ideal-annihilates-koszul-homology
kind: corollary
title: "Sequence Ideal Annihilates Koszul Homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-generator-contraction-homotopy]
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

Every $x_i$, hence the ideal $(\mathbf x)$, annihilates every $H_q(K(\mathbf x;M))$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-generator-contraction-homotopy]].

## Proof

**Proof technique:** direct.

1.1 For each generator, the contraction identity is $dh_i+h_id=x_i\operatorname{id}$. [given, algebra]

2.1 Thus each $x_i$ acts trivially on homology, hence so does every element of $(\mathbf x)$. [step 1.1, algebra] ∎
