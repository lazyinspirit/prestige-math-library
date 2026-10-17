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

Use [[alg-cross-entropy-pilot-production]]. Let $\mathcal G=\sigma(Y_1,\ldots,Y_m)$ and let $H\in\mathcal G$ be the event that the pilot succeeds and the algorithm's exact admissibility checker accepts the selected parameter $\widehat\theta$. On $H$, the checker guarantees $P|_A\ll Q_{\widehat\theta}$ and integrability under $Q_{\widehat\theta}$ of the piecewise contribution $w_{\widehat\theta}$ defined in the algorithm. Define $\widetilde p_{\rm CE}$ to equal the returned production estimate on $H$ and zero off $H$. Then
$$
\mathbb E[\widetilde p_{\rm CE}\mid\mathcal G]=\mathbf1_H P(A)\quad\text{almost surely}.
$$
In particular, the production estimate is conditionally unbiased almost surely on the successful, admissible pilot event. This gives no probability-of-success, proposal-optimization, finite-variance, logarithmic-efficiency, or total-work guarantee.

## Facts & Assumptions

**Given:** The pilot sigma-algebra $\mathcal G$, the successful and admissible event $H$, the frozen parameter $\widehat\theta$, the independent production sample, and the support and integrability conditions for $w_{\widehat\theta}$ certified by the algorithm's checker.

[F1] [[alg-cross-entropy-pilot-production]]: After a successful pilot the selected $\widehat\theta$ is frozen, and the production sample is IID from $Q_{\widehat\theta}$, independent of the pilot conditional on that parameter.

[F2] [[thm-ordinary-importance-sampling-is-unbiased]]: For a fixed proposal with support on the target event and an integrable weighted contribution, the ordinary importance-sampling mean equals the target expectation.

## Proof

1.1 The pilot outcome space need not be finite. For each $\theta\in\Theta$, the score $S(\theta)$ is $\mathcal G$-measurable, and $\Theta$ is finite. Therefore the success event, the exact-checker acceptance event, and the lexicographically least maximizing selector $\widehat\theta$ on success are $\mathcal G$-measurable. Partition $H$ into the finitely many events $H_\theta=H\cap\{\widehat\theta=\theta\}$. Conditional independence of the production sample from the pilot given $\widehat\theta$, as specified in [F1], means that on each $H_\theta$ its conditional law given $\mathcal G$ is IID $Q_\theta$. [F1, given]

2.1 On each $H_\theta$, the checker gives the support and integrability hypotheses for [F2]. That theorem gives conditional expectation $P(A)$ for each production contribution given $\mathcal G$, and linearity gives the same conditional expectation for their average. Since the finitely many $H_\theta$ partition $H$ and $\widetilde p_{\rm CE}=0$ off $H$, this proves $\mathbb E[\widetilde p_{\rm CE}\mid\mathcal G]=\mathbf1_H P(A)$ almost surely. [F2, step 1.1, given, algebra] ∎
