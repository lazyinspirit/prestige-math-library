---
id: def-finite-alphabet-stationary-source
kind: definition
title: "Finite-alphabet stationary source"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-measure-preserving-transformation-and-system
  - def-ergodic-measure-preserving-system
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Definition

Consider a finite nonempty alphabet $\mathcal A$, a probability measure $P$ on $\mathcal A^{\mathbb Z}$, and the left shift $T(x)_j=x_{j+1}$.

The shift is measurable on the product sigma-algebra. Call $P$ stationary when it is measure preserving under this shift, precisely the condition in [[def-measure-preserving-transformation-and-system]].

For a stationary $P$, call the source ergodic when each event $E$ satisfying $T^{-1}E=E$ has $P(E)\in\{0,1\}$; by [[def-ergodic-measure-preserving-system]] this is exactly ergodicity of the probability system.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathcal A$, a probability measure $P$ on $\mathcal A^{\mathbb Z}$, and the left shift $T(x)_j=x_{j+1}$.

[F1] [[def-measure-preserving-transformation-and-system]]: $T$ preserves $P$ exactly when $P(T^{-1}E)=P(E)$ for each measurable event $E$.

[F2] [[def-ergodic-measure-preserving-system]]: a probability-preserving system is ergodic when each strictly invariant event has probability zero or one.

## Proof

**Given:** The objects in the statement and the conventions [F1]–[F2].

1.1 The shift is measurable on the product sigma-algebra. Call $P$ stationary when it is measure preserving under this shift, precisely the condition in [F1]. [F1, given, algebra]

2.1 For a stationary $P$, call the source ergodic when each event $E$ satisfying $T^{-1}E=E$ has $P(E)\in\{0,1\}$; by [F2] this is exactly ergodicity of the probability system. [F2, step 1.1, algebra] ∎
