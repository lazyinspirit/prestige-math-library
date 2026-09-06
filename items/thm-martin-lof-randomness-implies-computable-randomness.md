---
id: thm-martin-lof-randomness-implies-computable-randomness
kind: theorem
title: "Martin-Löf randomness implies computable randomness"
status: draft
origin: session
deps: [def-martin-lof-test-and-random-sequence, def-computable-martingale]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Franklin and Porter, Theorem 2.7"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Statement
Every Martin-Löf random sequence is computably random.
## Proof
**Given:** a computable martingale $d$ and a sequence on which it succeeds.

1.1 A successful martingale has $d(\varepsilon)>0$, since a nonnegative martingale starting at $0$ is identically $0$. For each $n$, enumerate every string $\sigma$ with $d(\sigma)>2^n d(\varepsilon)$ and let $U_n$ be the union of its cylinders. Strict comparison with a computable real is computably enumerable, so $U_n$ is effectively open. [given]

2.1 The prefix-minimal threshold-crossing strings have the same union as $U_n$. The martingale conservation equation [[def-computable-martingale]] bounds their total measure by $2^{-n}$ (their total capital cannot exceed initial capital), so $(U_n)$ is a Martin-Löf test. [step 1.1, given]

3.1 Success puts the sequence in every level of that test, contradicting Martin-Löf randomness as defined in [[def-martin-lof-test-and-random-sequence]]. [step 2.1, contradiction] ∎
