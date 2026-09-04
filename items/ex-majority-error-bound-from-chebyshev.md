---
id: ex-majority-error-bound-from-chebyshev
kind: example
title: "A concrete majority-vote error estimate from Chebyshev's inequality"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-majority-error-bound-from-chebyshev]
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

## Example

If $25$ independent trials are each correct with probability $3/4$, then the majority vote is wrong with probability at most $9/25$.

## Facts & Assumptions

**Given:** $25$ independent Bernoulli trials, each correct with probability
$3/4$.

[L1] The Chebyshev majority bound gives $\mathbb P(S\le k/2)\le 9/k$ whenever each trial has success probability at least $2/3$ ([[lem-majority-error-bound-from-chebyshev]]).

## Verification

**Proof technique:** direct.

1.1 The hypotheses of [L1] hold with $k=25$ because $3/4\ge 2/3$. [L1, given]

2.1 Therefore the majority error probability is at most $9/25$. This is a concrete instance of the general $O(1/k)$ estimate. [L1, step 1.1, algebra] ∎
