---
id: ex-sequential-repetition-amplifies-error
kind: example
title: "Sequential repetition of a constant-gap protocol"
status: draft
origin: session
deps: [lem-sequential-repetition-amplifies-error]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arora and Barak, §8.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

For a protocol with completeness $3/4$ and soundness $1/4$, run $k$ independent copies and accept a strict majority.

## Verification

**Given:** the repeated protocol with odd $k$.

1.1 Its honest and cheating parameters satisfy the hypotheses $c>1/2>s$ of [[lem-sequential-repetition-amplifies-error]]. [given]

2.1 Thus each error probability is exponentially small in $k$; choosing an odd $k$ with that bound below $10^{-6}$ gives completeness at least $1-10^{-6}$ and soundness at most $10^{-6}$. [step 1.1, choose] ∎
