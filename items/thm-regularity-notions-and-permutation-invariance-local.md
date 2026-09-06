---
id: thm-regularity-notions-and-permutation-invariance-local
kind: theorem
title: "Regularity Notions And Permutation Invariance Local"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regularity-notions-coincide-local-finite, cor-regular-sequences-permutable-local]
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
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Let $M$ be a finite module over a Noetherian local ring $(R,\mathfrak m)$, and let $\mathbf x\subseteq\mathfrak m$ satisfy $M/(\mathbf x)M\ne0$. Then ordinary, Koszul, and $H_1$ regularity coincide. Moreover, every permutation of an ordinary $M$-regular sequence in $\mathfrak m$ is $M$-regular.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-regularity-notions-coincide-local-finite]], [[cor-regular-sequences-permutable-local]].

## Proof

**Proof technique:** direct.

1.1 The preceding corollary identifies the three notions in the stated local setting. [given, algebra]

2.1 The permutation corollary applies to ordinary regularity and equivalence transfers the conclusion. [step 1.1, algebra] ∎
