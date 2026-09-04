---
id: cex-reusing-random-bits-amplifies-success
kind: counterexample
title: "Repeating a randomized test with the same coin string gives no amplification"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-reusing-random-bits-amplifies-success]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement refuted

Reusing the same random bits amplifies success.

## Facts & Assumptions

**Given:** a randomized test whose output depends only on its first random bit.

[L1] The false statement being refuted is exactly the claim above ([[fs-reusing-random-bits-amplifies-success]]).

## Counterexample

**Proof technique:** direct.

1.1 Consider the randomized test that accepts exactly when its first random bit is $1$. Its success probability is $1/2$, so it is a legitimate witness against the statement in [L1] if repetition with the same randomness leaves that probability unchanged. [L1, given]

2.1 If the same random string is reused in two, ten, or one hundred repetitions, every repetition produces the same answer as the first one. So the majority outcome is still accept with probability $1/2$ and reject with probability $1/2$. No amplification occurs at all, and the statement is refuted. [step 1.1, algebra] ∎
