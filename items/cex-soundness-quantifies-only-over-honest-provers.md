---
id: cex-soundness-quantifies-only-over-honest-provers
kind: counterexample
title: "A cheating-prover witness to the soundness quantifier"
status: published
origin: session
deps: [fs-soundness-quantifies-only-over-honest-provers]
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

## Statement refuted

Checking only an honest prover would suffice for soundness.

## Counterexample

**Given:** a no-instance and a verifier which accepts exactly the message
`claim` and rejects the message `reject`.

1.1 Let the designated honest prover always send `reject`; it is rejected, so an honest-only check reports no problem. [given]

2.1 A cheating prover sends `claim` and is accepted with probability $1$. This contradicts soundness and exhibits exactly the defect identified in [[fs-soundness-quantifies-only-over-honest-provers]]. [step 1.1, given] ∎
