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

Consider a measurable alphabet $(\mathcal A,\mathcal B)$, a probability law $P$ on $\mathcal A^{\mathbb Z}$ with its product sigma-algebra, and the measurable left shift $T(x)_j=x_{j+1}$.

The law $P$ is asymptotically mean stationary (AMS) when for every measurable event $E$ the limit
$\bar P(E)=\lim_{N\to\infty}\frac1N\sum_{j=0}^{N-1}P(T^{-j}E)$
exists and the resulting set function is a probability measure.

The resulting law $\bar P$ is called the stationary mean when it is invariant under $T$, in the sense of [[def-measure-preserving-transformation-and-system]]. If $E$ is strictly shift invariant, then each summand $P(T^{-j}E)=P(E)$; hence $P(E)=\bar P(E)$. Tail events are handled by the separate domination lemma, not by this invariant-event identity.

Call the AMS source ergodic when its stationary mean $\bar P$ is ergodic as a measure-preserving system under the same shift. This uses [[def-ergodic-measure-preserving-system]] and is a property of the mean, not a claim that $P$ itself is stationary. For finite discrete alphabets these conventions agree with [[def-finite-alphabet-stationary-source]].

## Facts & Assumptions

**Given:** A measurable alphabet $(\mathcal A,\mathcal B)$, a law $P$ on its two-sided product space, and the left shift $T$.

[F1] [[def-measure-preserving-transformation-and-system]]: a probability law is invariant under a measurable shift exactly when $P(T^{-1}E)=P(E)$ for every measurable event $E$.

[F2] [[def-ergodic-measure-preserving-system]]: ergodicity of a probability-preserving system means that every strictly invariant measurable event has probability zero or one.

## Proof

**Given:** The law, shift, and product sigma-algebra.

1.1 Inverse images of product cylinders under $T$ are product cylinders; since these generate the product sigma-algebra, $T$ is measurable. The law $P$ is asymptotically mean stationary (AMS) when for every measurable event $E$ the limit $$\bar P(E)=\lim_{N\to\infty}\frac1N\sum_{j=0}^{N-1}P(T^{-j}E)$$ exists and the resulting set function is a probability measure. [given, algebra]

2.1 For each measurable $E$, the Ces\`aro averages for $T^{-1}E$ and $E$ differ by $$\frac1N\sum_{j=0}^{N-1}P(T^{-(j+1)}E)-\frac1N\sum_{j=0}^{N-1}P(T^{-j}E)=\frac{P(T^{-N}E)-P(E)}N.$$ The numerator has absolute value at most $1$, so its quotient tends to zero. Taking limits, which exist by step 1.1 for both events, gives $\bar P(T^{-1}E)=\bar P(E)$. Thus the Ces\`aro limit is stationary in the sense of [F1]. [given, step 1.1, F1, algebra]

3.1 The resulting law $\bar P$ is called the stationary mean when it is stationary in the sense of [F1]. If $E$ is strictly shift invariant, then each summand $P(T^{-j}E)=P(E)$; hence $P(E)=\bar P(E)$. Tail events are handled by the separate domination lemma, not by this invariant-event identity. [F1, step 1.1, step 2.1, algebra]

4.1 Call the AMS source ergodic when its stationary mean $\bar P$ is ergodic as a measure-preserving system under the same shift. This is a property of the mean, not a claim that $P$ itself is stationary. [F2, step 3.1, algebra] ∎

