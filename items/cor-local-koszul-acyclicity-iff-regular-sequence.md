---
id: cor-local-koszul-acyclicity-iff-regular-sequence
kind: corollary
title: "Local Koszul Acyclicity Iff Regular Sequence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-koszul-acyclicity-characterises-local-regular-sequences, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (cor-local-koszul-acyclicity-iff-regular-sequence). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. For a finite module $M$ over a Noetherian local ring, with $\mathbf x\subseteq\mathfrak m$ and $M/(\mathbf x)M\ne0$, $\mathbf x$ is $M$-regular if and only if its positive Koszul homology vanishes.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisite used here is [[thm-koszul-acyclicity-characterises-local-regular-sequences]].

## Proof

**Proof technique:** direct.

1.1 The forward direction is regular-sequence Koszul acyclicity. [given, algebra]

2.1 Under the assumed AC, the reverse direction of the local criterion applies; together with the terminal quotient hypothesis it gives regularity. This is the exact use of Choice. [step 1.1, algebra] ∎
