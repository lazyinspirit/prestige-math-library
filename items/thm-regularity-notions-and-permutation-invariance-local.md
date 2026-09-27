---
id: thm-regularity-notions-and-permutation-invariance-local
kind: theorem
title: "Regularity Notions And Permutation Invariance Local"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regularity-notions-coincide-local-finite, cor-regular-sequences-permutable-local, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (thm-regularity-notions-and-permutation-invariance-local). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. Let $M$ be a finite module over a Noetherian local ring $(R,\mathfrak m)$, and let $\mathbf x\subseteq\mathfrak m$ satisfy $M/(\mathbf x)M\ne0$. Then ordinary, Koszul, and $H_1$ regularity coincide. Moreover, every permutation of an ordinary $M$-regular sequence in $\mathfrak m$ is $M$-regular.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-regularity-notions-coincide-local-finite]] and [[cor-regular-sequences-permutable-local]].

## Proof

**Proof technique:** direct.

1.1 Under the assumed AC, the preceding corollary identifies the three notions in the stated local setting. [given, algebra]

2.1 Under the same AC premise, the permutation corollary applies to ordinary regularity and equivalence transfers the conclusion. These two corollary applications are the uses of Choice. [step 1.1, algebra] ∎
