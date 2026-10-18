---
id: cor-fixed-rate-lossless-coding-stationary-ergodic
kind: corollary
title: "Fixed-rate source coding theorem for stationary ergodic sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - cor-ergodic-shannon-mcmillan-breiman
  - lem-aep-implies-fixed-rate-lossless-coding
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

For a stationary ergodic finite-alphabet source, fixed-rate lossless coding has vanishing block error above the entropy rate and success probability tending to zero below it.

## Facts & Assumptions

**Given:** A stationary ergodic finite-alphabet source of entropy rate $h$, and fixed-length binary block codes.

[F1] [[cor-ergodic-shannon-mcmillan-breiman]]: $-n^{-1}\log_2P(X_0^{n-1})\to h$ almost surely, hence in probability.

[F2] [[lem-aep-implies-fixed-rate-lossless-coding]]: information convergence in probability gives vanishing error above $h$ and vanishing success below $h$.

## Proof

**Given:** The source, its entropy rate and coding convention.

1.1 Almost-sure convergence in [F1] implies convergence in probability: for each $\epsilon>0$, the indicators of deviations by more than $\epsilon$ tend almost surely to zero and are bounded by one, so their expectations tend to zero. [F1, given, algebra]

2.1 Apply [F2] with this AEP limit. For every $R>h$ there are rate-$R$ codes with block error tending to zero; for every $R<h$, every rate-$R$ code sequence has success probability tending to zero. At $R=h$ no boundary conclusion follows from the theorem. [F1, F2, step 1.1] ∎
