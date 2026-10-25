---
id: ex-two-simulation-covariance-is-random-and-singular
kind: example
title: "Two simulated square summaries give a random singular covariance"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-synthetic-likelihood-monte-carlo-estimation
  - def-synthetic-likelihood
  - lem-two-simulation-summary-covariance-is-singular-in-two-dimensions
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited only through the ideal-density and algorithm interfaces; the finite enumeration itself uses no choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David T. Frazier et al., Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, Journal of the American Statistical Association 118(544), 2821–2832 (2023)"
      url: "https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf"
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
---

## Example

Let the summary vector $Z=(Z^{(1)},Z^{(2)})$ be uniform on the four points $\{(-1,-1),(-1,1),(1,-1),(1,1)\}\subset\mathbb R^2$. For one parameter value, simulate $Z_1,Z_2$ independently from this law and use the two-simulation covariance formula of [[alg-synthetic-likelihood-monte-carlo-estimation]].

## Facts & Assumptions

**Given:** Two independent draws from the stated four-point summary law.

[A1] AC is inherited through the procedure’s Gaussian-density branch; it is not used in the finite probability calculations. [[def-axiom-of-choice]]

[F1] IID means a common law and mutual independence. [[def-identically-distributed-and-iid-random-variables]]

[F2] The covariance matrix uses centered second moments; the finite plug-in covariance is the Bessel-corrected matrix in the algorithm. [[def-moments-variance-and-covariance]] [[alg-synthetic-likelihood-monte-carlo-estimation]]

[F3] For any two two-dimensional vectors, that sample covariance is not positive definite. [[lem-two-simulation-summary-covariance-is-singular-in-two-dimensions]]

[F4] The algorithm returns unavailable when its plug-in covariance is not positive definite. [[alg-synthetic-likelihood-monte-carlo-estimation]]

[F5] The ideal synthetic likelihood uses the population summary mean and covariance, when the latter is positive definite. [[def-synthetic-likelihood]]

## Verification

1.1 Each coordinate has mean zero and variance one, while the cross moment is zero. Hence the population summary covariance is $I_2$, positive definite. [F2, F5, given, algebra]

1.2 By independence and the four equally likely support points, $P(Z_1=Z_2)=4(1/4)^2=1/4$. On this event the sample covariance is the zero matrix. [F1, F2, given, algebra]

2.1 The event $Z_1=(1,1)$ and $Z_2=(-1,-1)$ has probability $1/16$. On it, $\bar Z_2=(0,0)$ and $\widehat\Sigma_2=\begin{pmatrix}2&2\\2&2\end{pmatrix}$, which differs from the zero matrix in step 1.2. Thus the sample covariance is a nonconstant random matrix. [F1, F2, step 1.2, algebra]

3.1 By [F3], every two-simulation covariance here is not positive definite, so [F4] makes the finite plug-in synthetic likelihood unavailable for every outcome despite the positive-definite population covariance in step 1.1. [A1, F3, F4, step 1.1, algebra] ∎
