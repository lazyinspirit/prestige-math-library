---
id: thm-cross-entropy-production-unbiased-given-pilot
kind: theorem
title: Independent cross-entropy production is conditionally unbiased
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-cross-entropy-pilot-production
  - thm-ordinary-importance-sampling-is-unbiased
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 2, Cross-Entropy Method"
      url: "https://laub.au/rare-events/slides/L2.slides.html"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, `5"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Statement

Use [[alg-cross-entropy-pilot-production]]. Conditional on any successful pilot outcome with selected parameter $\widehat\theta$, suppose the independent production proposal satisfies $P|_A\ll Q_{\widehat\theta}$ and the weighted contribution $\mathbf1_A\,dP/dQ_{\widehat\theta}$ is integrable under $Q_{\widehat\theta}$. Then the production estimate satisfies
$
\mathbb E[\widehat p_{\rm CE}\mid\text{pilot}]=P(A).
$
This statement is conditional on successful fitting and valid production support/integrability. It gives no probability-of-success, proposal-optimization, finite-variance, logarithmic-efficiency, or total-work guarantee.

## Facts & Assumptions

**Given:** A successful pilot, the frozen parameter $\widehat\theta$, the independent production sample, support and integrability as stated.

[F1] [[alg-cross-entropy-pilot-production]]: After a successful pilot the selected $\widehat\theta$ is frozen, and the production sample is IID from $Q_{\widehat\theta}$, independent of the pilot conditional on that parameter.

[F2] [[thm-ordinary-importance-sampling-is-unbiased]]: For a fixed proposal with support on the target event and an integrable weighted contribution, the ordinary importance-sampling mean equals the target expectation.

## Proof

1.1 The pilot takes values in a finite sample space of pilot outcomes and the algorithm's finite candidate set has a deterministic lexicographic tie rule. Thus conditioning on a successful pilot fixes $\widehat\theta$; by [F1], the production draws then have the fixed IID law $Q_{\widehat\theta}$. [F1, given]

2.1 Under the given support and integrability conditions, [F2] applies to this fixed proposal and event indicator. It gives expectation $P(A)$ for each production contribution, and finite-sum linearity gives the same conditional expectation for their average $\widehat p_{\rm CE}$. [F2, given, algebra] ∎
