---
id: ex-linear-gaussian-three-dimensional-variational-analysis
kind: example
title: Scalar Gaussian 3DVAR returns the exact analysis mean
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-data-assimilation-problem
  - alg-three-dimensional-variational-assimilation
  - thm-three-dimensional-variational-analysis-is-gaussian-map-update
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - alg-kalman-filter
  - thm-kalman-filter-is-exact-posterior
  - def-multivariate-normal-law
proof_strategy: direct
generation:
  role: example
axiom_use: Assume AC as required for the Gaussian laws and exact Kalman conditional-law supplier.
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 6 §6.2"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Example

Take a scalar Gaussian forecast with mean $m^f=0$ and variance $B=1$, observation map $H=1$, error variance $\Gamma=1$, and observed value $y=2$. The 3DVAR objective is $J(u)=\tfrac12u^2+\tfrac12(2-u)^2$.

## Facts & Assumptions

**Given:** AC and the one-dimensional Gaussian prior/error model, with $B=\Gamma=H=1$ and $y=2$.

[A1] AC is assumed for the Gaussian laws and conditional-law results. [[def-axiom-of-choice]]

[F1] The one-step linear-Gaussian model uses independent Gaussian initial and observation errors. [[def-linear-gaussian-state-space-model-with-independent-noises]]

[F2] The 3DVAR gain is $K=BH^T(HBH^T+\Gamma)^{-1}$ and its analysis is $m^f+K(y-Hm^f)$. [[alg-three-dimensional-variational-assimilation]]

[F3] The 3DVAR objective minimizer is the Gaussian MAP point and coincides with the Kalman analysis mean under these hypotheses. [[thm-three-dimensional-variational-analysis-is-gaussian-map-update]]

[F4] The exact Kalman analysis covariance is $P^a=P^f-KSK^T$ when the innovation $S$ is positive definite. [[alg-kalman-filter]]

[F5] Under AC the Kalman recursion is the exact Gaussian conditional law. [[thm-kalman-filter-is-exact-posterior]]

## Verification

**Given:** The objects and observations in the Example.

1.1 Here $S=HBH^T+\Gamma=2$ and $K=BH^TS^{-1}=1/2$. Thus the analysis is $m^a=0+(1/2)(2-0)=1$. [F2, given, algebra]

2.1 The independent Gaussian prior and observation-error model in the Example is the one-step model specified by [F1]. Completing the square gives $J(u)=\tfrac12u^2+\tfrac12(2-u)^2=(u-1)^2+1$, so its unique minimizer is $1$, agreeing with step 1.1 and [F3]. The Kalman covariance is $P^a=1-(1/2)2(1/2)=1/2$ by [F4]; [F5] therefore identifies the exact conditional law as $N(1,1/2)$. The 3DVAR output is its MAP point and supplies no covariance output. [A1, F1, F3, F4, F5, given, step 1.1, algebra] ∎
