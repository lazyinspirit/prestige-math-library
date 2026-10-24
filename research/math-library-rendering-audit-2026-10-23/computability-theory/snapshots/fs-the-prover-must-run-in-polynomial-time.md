---
id: fs-the-prover-must-run-in-polynomial-time
kind: false-statement
title: "False: the prover must run in polynomial time"
status: published
origin: session
deps: [def-interactive-proof-transcript-round-and-strategy]
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
    - title: "Goldreich, Foundations of Complexity Theory, §11.2"
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

An IP prover must run in polynomial time.

## Refutation

**Given:** the interactive-protocol convention.

1.1 The verifier's polynomial running time bounds each message length and the number of rounds. [given]

2.1 A prover strategy in [[def-interactive-proof-transcript-round-and-strategy]] is an arbitrary response function, explicitly with no computability or time restriction. Therefore the asserted requirement is false. [step 1.1, given] ∎
