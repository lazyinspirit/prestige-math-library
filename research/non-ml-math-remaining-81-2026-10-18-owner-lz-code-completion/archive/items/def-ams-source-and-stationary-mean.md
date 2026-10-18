---
id: def-ams-source-and-stationary-mean
kind: definition
title: "Asymptotically mean stationary sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
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

Defines an AMS law by convergence of Cesaro averages of its shifted path law to a stationary mean; calls it ergodic when that mean is ergodic.

## Facts & Assumptions

**Given:** A probability law $P$ on $\mathcal A^{\mathbb Z}$ and the left shift $T$.

[F1] [[def-finite-alphabet-stationary-source]]: a stationary law is invariant under the left shift.

## Proof

**Given:** The law, shift, and product sigma-algebra.

1.1 The law $P$ is asymptotically mean stationary (AMS) when for every measurable event $E$ the limit
$$\bar P(E)=\lim_{N\to\infty}\frac1N\sum_{j=0}^{N-1}P(T^{-j}E)$$
exists and the resulting set function is a probability measure. [given, algebra]

1.2 The resulting law $\bar P$ is called the stationary mean when it is stationary in the sense of [F1]. If $E$ is strictly shift invariant, then each summand $P(T^{-j}E)=P(E)$; hence $P(E)=\bar P(E)$. Tail events are handled by the separate domination lemma, not by this invariant-event identity. [F1, step 1.1, algebra]

1.3 Call the AMS source ergodic when its stationary mean $\bar P$ is ergodic as a measure-preserving system under the same shift. This is a property of the mean, not a claim that $P$ itself is stationary. [F1, step 1.2, algebra] ∎
