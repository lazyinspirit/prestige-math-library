---
id: thm-iid-monte-carlo-mean-consistency
title: "Strong and weak consistency of the IID Monte Carlo mean"
kind: theorem
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-monte-carlo-estimators
  - def-identically-distributed-and-iid-random-variables
  - thm-khinchin-weak-law-for-iid-integrable-variables
  - thm-kolmogorov-iid-l1-strong-law
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $(Y_i)_{i\ge1}$ be a real IID sequence with $\mathbb E|Y_1|<\infty$, and set $\mu=\mathbb E[Y_1]$. Then $\mathbb E|\bar Y_n-\mu|\to0$, so $\bar Y_n\to\mu$ in probability; moreover, $\bar Y_n\to\mu$ almost surely.

## Facts & Assumptions

**Given:** A real IID sequence $(Y_i)_{i\ge1}$ on one probability space with $\mathbb E|Y_1|<\infty$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means that all variables have the same law and the whole family is mutually independent.

[F2] [[def-iid-monte-carlo-estimators]]: The Monte Carlo sample mean is $\bar Y_n=n^{-1}\sum_{i=1}^nY_i$.

[F3] [[thm-khinchin-weak-law-for-iid-integrable-variables]]: For real IID variables with finite first absolute moment, $\mathbb E|S_n/n-\mu|\to0$, and consequently $S_n/n\to\mu$ in probability.

[F4] [[thm-kolmogorov-iid-l1-strong-law]]: For real IID variables with finite first absolute moment, $S_n/n\to\mu$ almost surely.

## Proof

1.1 By [F2], $\bar Y_n=S_n/n$. The hypotheses of [F3] hold by [F1] and the given integrability, so $\mathbb E|\bar Y_n-\mu|\to0$ and $\bar Y_n\to\mu$ in probability. [F1, F2, F3, given]

2.1 Under the same hypotheses, [F4] gives $S_n/n\to\mu$ almost surely. Rewriting with [F2] yields $\bar Y_n\to\mu$ almost surely. [F2, F4, given] ∎
