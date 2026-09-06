---
id: cor-local-koszul-acyclicity-iff-regular-sequence
kind: corollary
title: "Local Koszul Acyclicity Iff Regular Sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-koszul-acyclicity-characterises-local-regular-sequences]
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
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

For a finite module $M$ over a Noetherian local ring, with $\mathbf x\subseteq\mathfrak m$ and $M/(\mathbf x)M\ne0$, $\mathbf x$ is $M$-regular if and only if its positive Koszul homology vanishes.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[thm-koszul-acyclicity-characterises-local-regular-sequences]].

## Proof

**Proof technique:** direct.

1.1 The forward direction is regular-sequence Koszul acyclicity. [given, algebra]

2.1 The reverse direction is the local converse; together with the terminal quotient hypothesis it gives regularity. [step 1.1, algebra] ∎
