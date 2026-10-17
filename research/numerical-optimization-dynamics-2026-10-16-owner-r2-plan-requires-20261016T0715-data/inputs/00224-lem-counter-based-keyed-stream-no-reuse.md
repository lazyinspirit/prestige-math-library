---
id: lem-counter-based-keyed-stream-no-reuse
kind: lemma
title: "A keyed permutation stream does not reuse outputs before its counter interval ends"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [alg-counter-based-keyed-permutation-stream]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Salmon et al., Parallel Random Numbers: As Easy as 1, 2, 3, §2"
      url: "https://www.thesalmons.org/john/random123/papers/random123sc11.pdf"
---

## Statement

For a fixed key and counter interval in [[alg-counter-based-keyed-permutation-stream]], distinct counters produce distinct output words. If the interval is the full set $\{0,\ldots,2^w-1\}$, every word of that finite state set appears exactly once. These are deterministic no-reuse statements; they imply no probabilistic independence.

## Facts & Assumptions

**Given:** A fixed key, a bijection $\pi_k:S\to S$, and the counter procedure of [[alg-counter-based-keyed-permutation-stream]].

[F1] For a fixed key, the supplied map $\pi_k$ is a bijection of the finite counter set. [[alg-counter-based-keyed-permutation-stream]]

## Proof

1.1 If $c\ne c'$ are counters in the interval, injectivity of $\pi_k$ gives $\pi_k(c)\ne\pi_k(c')$. The procedure uses each counter at most once before returning exhausted, so no output repeats in that interval. [given, F1]

2.1 On the full counter set, the injective map $\pi_k$ has $2^w$ distinct outputs in a set of size $2^w$, hence its range is all of $S$. Thus every word appears exactly once, with no probability assertion. [F1, step 1.1, algebra] ∎
