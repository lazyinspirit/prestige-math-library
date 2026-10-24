---
id: fs-soundness-quantifies-only-over-honest-provers
kind: false-statement
title: "False: soundness quantifies only over honest provers"
status: published
origin: session
deps: [def-completeness-and-soundness]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Definition 8.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Soundness of an interactive proof quantifies only over the honest prover.

## Refutation

**Given:** the definition of soundness.

1.1 The honest prover is selected to establish completeness on yes instances; on a no instance it is not an adversarial model. [given]

2.1 By [[def-completeness-and-soundness]], soundness requires the acceptance bound for every prover strategy on every no input. Restricting it to an honest strategy changes the definition and cannot protect against cheating, so the statement is false. [step 1.1, given] ∎
