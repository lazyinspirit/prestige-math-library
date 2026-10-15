---
id: alg-synthetic-likelihood-monte-carlo-estimation
kind: algorithm
title: "Finite-simulation plug-in synthetic-likelihood evaluation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-synthetic-likelihood
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-nondegenerate-multivariate-normal-law-has-density
justified_by: []
axiom_use: "AC is inherited from the synthetic-likelihood definition and Gaussian-density supplier; the simulation and covariance calculation add no choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
    - title: "Christopher C. Drovandi et al., Approximating the Likelihood in Approximate Bayesian Computation, Handbook of Approximate Bayesian Computation (2020)"
      url: "https://arxiv.org/pdf/1803.06645"
    - title: "David T. Frazier et al., Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, Journal of the American Statistical Association 118(544), 2821–2832 (2023)"
      url: "https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf"
---

## Definition

Assume AC only as required by the synthetic-likelihood definition and its Gaussian-density supplier ([[def-axiom-of-choice]] [[def-synthetic-likelihood]] [[thm-nondegenerate-multivariate-normal-law-has-density]]). IID means common law and mutual independence as in [[def-identically-distributed-and-iid-random-variables]]. This algorithm states the vector sample mean and covariance directly; covariance uses centered second moments as in [[def-moments-variance-and-covariance]].

**Inputs:** A parameter $\theta$, observed data $y$, a summary statistic $S:\mathcal X\to\mathbb R^d$ satisfying the contract of [[def-synthetic-likelihood]], an integer simulation count $m\ge2$, and a simulator that returns $m$ mutually independent observations with common law $P_\theta$.

**Output:** Either the finite-simulation plug-in synthetic-likelihood value at $S(y)$, or the explicit result **unavailable**.

1. Simulate $Y_1,\ldots,Y_m$ and compute $S_i:=S(Y_i)$. For each coordinate $j$, compute $\bar S_{m,j}:=m^{-1}\sum_{i=1}^m S_{i,j}$.
2. Set $\bar S_m:=(\bar S_{m,1},\ldots,\bar S_{m,d})^T$ and compute
   $$
   \widehat\Sigma_m:=(m-1)^{-1}\sum_{i=1}^m(S_i-\bar S_m)(S_i-\bar S_m)^T.
   $$
3. If $\widehat\Sigma_m$ is not positive definite, stop and return **unavailable**. Do not add a ridge term or otherwise modify the covariance.
4. If $\widehat\Sigma_m$ is positive definite, take its unique Cholesky factor $L$ with positive diagonal by [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]. Return the plug-in Gaussian density $(2\pi)^{-d/2}\det(\widehat\Sigma_m)^{-1/2}\exp\!\left[-\tfrac12(S(y)-\bar S_m)^T\widehat\Sigma_m^{-1}(S(y)-\bar S_m)\right]$ from [[def-synthetic-likelihood]] and [[thm-nondegenerate-multivariate-normal-law-has-density]].

This algorithm evaluates one parameter value. It does not optimize over $\theta$ and asserts no unbiasedness, convergence, consistency, posterior calibration, or optimizer property.
