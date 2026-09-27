---
id: cor-regularity-notions-coincide-local-finite
kind: corollary
title: "Regularity Notions Coincide Local Finite"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-local-koszul-acyclicity-iff-regular-sequence, lem-koszul-regular-implies-h-one-regular, lem-h-one-regular-local-implies-koszul-regular, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (cor-regularity-notions-coincide-local-finite). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. For finite $M$ over Noetherian local $(R,\mathfrak m)$ and $\mathbf x\subseteq\mathfrak m$ with nonzero terminal quotient, ordinary regularity, $M$-Koszul-regularity, and $M$-$H_1$-regularity are equivalent.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-local-koszul-acyclicity-iff-regular-sequence]], [[lem-koszul-regular-implies-h-one-regular]], and [[lem-h-one-regular-local-implies-koszul-regular]].

## Proof

**Proof technique:** direct.

1.1 Regularity implies Koszul regularity, which implies $H_1$-regularity. [given, algebra]

2.1 Under the assumed AC, the local $H_1$ implication and local acyclicity converse close the cycle. These applications are where Choice enters. [step 1.1, algebra] ∎
