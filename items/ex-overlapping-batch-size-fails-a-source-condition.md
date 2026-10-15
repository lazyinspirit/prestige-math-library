---
dependency_level: 2
id: ex-overlapping-batch-size-fails-a-source-condition
kind: example
title: A batch-size sequence fails the OBM consistency conditions
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-overlapping-batch-means-mcse
  - def-flegal-jones-obm-batch-size-conditions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Theorem 2 and Corollary 1
      url: https://arxiv.org/pdf/0811.1729
      locator: Theorem 2, PDF p. 8.
axiom_use: This is an arithmetic check on the stated sufficient condition and uses no choice principle.
---

## Example

Set $\delta=1$ and $b_n=\lfloor n^{1/2}\rfloor$ for $n\ge2$. This sequence
fails one Flegal–Jones batch-size condition,
$n^{2/(2+\delta)}(\log n)^3/b_n\to0$. The example establishes
inapplicability of this sufficient condition only; it does not imply that the
OBM estimator is inconsistent.

## Facts & Assumptions

**Given:** The sequence $b_n=\lfloor n^{1/2}\rfloor$ and the lower-growth batch-size premise retained in the corrected Flegal–Jones OBM contract.

[F1] The Flegal–Jones batch-size contract for exponent $\delta$ includes the lower-growth limit $n^{2/(2+\delta)}(\log n)^3/b_n\to0$. ([[def-flegal-jones-obm-batch-size-conditions]])

[F2] The OBM estimator uses overlapping batch means of integer length $b_n<n$. ([[alg-overlapping-batch-means-mcse]])

## Verification
1.1 For $n\ge2$, $n^{1/2}-1<b_n\le n^{1/2}$, so $b_n/n^{1/2}\to1$. Thus $n^{2/3}(\log n)^3/b_n\sim n^{1/6}(\log n)^3\to\infty$, which violates the required limit in [F1] at $\delta=1$. [F1, given, algebra]

2.1 Since $1\le b_n\le n^{1/2}<n$ for $n\ge2$, the finite OBM procedure in [F2] is defined. Step 1.1 establishes failure of one source sufficient condition only, not inconsistency of the estimator. [F2, step 1.1, given, algebra] ∎
