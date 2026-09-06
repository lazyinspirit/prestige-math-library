---
id: cor-regularity-notions-coincide-local-finite
kind: corollary
title: "Regularity Notions Coincide Local Finite"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-local-koszul-acyclicity-iff-regular-sequence, lem-koszul-regular-implies-h-one-regular, lem-h-one-regular-local-implies-koszul-regular]
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

For finite $M$ over Noetherian local $(R,\mathfrak m)$ and $\mathbf x\subseteq\mathfrak m$ with nonzero terminal quotient, ordinary regularity, $M$-Koszul-regularity, and $M$-$H_1$-regularity are equivalent.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-local-koszul-acyclicity-iff-regular-sequence]], [[lem-koszul-regular-implies-h-one-regular]], [[lem-h-one-regular-local-implies-koszul-regular]].

## Proof

**Proof technique:** direct.

1.1 Regularity implies Koszul regularity, which implies $H_1$-regularity. [given, algebra]

2.1 The local $H_1$ implication and local acyclicity converse close the cycle. [step 1.1, algebra] ∎
