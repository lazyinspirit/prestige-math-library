---
id: def-finite-alphabet-stationary-source
kind: definition
title: "Finite-alphabet stationary source"
status: published
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
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
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

1.1 A basic product cylinder restricts only finitely many coordinates. Its inverse image under $T$ imposes the same restrictions on the coordinates shifted by one, so is again a product cylinder and is measurable. Since product cylinders generate the product sigma-algebra and inverse image preserves complements and countable unions, $T$ is measurable on that sigma-algebra. Call $P$ stationary when it is measure preserving under this measurable shift, precisely the condition in [F1]. [given, F1, algebra]

2.1 For a stationary $P$, call the source ergodic when each event $E$ satisfying $T^{-1}E=E$ has $P(E)\in\{0,1\}$; by [F2] this is exactly ergodicity of the probability system. [F2, step 1.1, algebra] ∎
