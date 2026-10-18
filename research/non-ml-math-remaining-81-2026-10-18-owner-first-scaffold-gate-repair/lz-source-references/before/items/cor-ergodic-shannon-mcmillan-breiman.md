---
id: cor-ergodic-shannon-mcmillan-breiman
kind: corollary
title: "Ergodic Shannon–McMillan–Breiman theorem"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-componentwise-shannon-mcmillan-breiman
  - thm-ergodicity-and-invariant-functions
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

For a stationary ergodic finite-alphabet source, the componentwise information-rate limit is the constant entropy rate.

## Facts & Assumptions

**Given:** A stationary ergodic finite-alphabet source with entropy rate $h$.

[F1] [[thm-componentwise-shannon-mcmillan-breiman]]: normalized block self-information converges almost surely to an invariant random variable of mean $h$.

[F2] [[thm-ergodicity-and-invariant-functions]]: every finite-valued invariant measurable function in an ergodic probability system is almost surely constant.

## Proof

**Given:** The source and [F1]–[F2].

1.1 By [F1], the normalized block information converges almost surely to an invariant $G^*$ with $E G^*=h$. Since the source is ergodic, [F2] makes $G^*$ a constant almost surely. [F1, F2, given]

2.1 The expectation of a constant equals that constant, so $G^*=h$ almost surely. Therefore $-n^{-1}\log_2P(X_0^{n-1})\to h$ almost surely. For $h=0$ this says the normalized information tends to zero; no positive-rate assumption is used. [F1, step 1.1, algebra] ∎
