---
id: ex-gaussian-synthetic-likelihood-for-bernoulli-summary-law
kind: example
title: "A Gaussian synthetic likelihood for a Bernoulli summary is not exact"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-synthetic-likelihood
  - def-statistic-and-estimator
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
proof_strategy: direct
axiom_use: "AC is inherited only through the Gaussian synthetic-likelihood definition and density supplier; the finite Bernoulli calculation uses no choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
    - title: "Christopher C. Drovandi et al., Approximating the Likelihood in Approximate Bayesian Computation, Handbook of Approximate Bayesian Computation (2020)"
      url: "https://arxiv.org/pdf/1803.06645"
---

## Example

Let $\Theta=(0,1)$, let $Y\mid p$ be Bernoulli with $P_p(Y=1)=p$ and $P_p(Y=0)=1-p$, and use the identity summary $S(Y)=Y$.

## Facts & Assumptions

**Given:** The Bernoulli model and statistic above, with $p\in(0,1)$.

[A1] AC is assumed only to use the Gaussian synthetic-likelihood density interface. [[def-axiom-of-choice]]

[F1] The synthetic likelihood uses the Gaussian density with the exact summary mean and covariance when that covariance is positive definite. [[def-synthetic-likelihood]]

[F2] A positive-definite multivariate-normal law has the stated Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F3] A statistic is a measurable map, and its law is the pushforward law. [[def-statistic-and-estimator]] [[def-law-or-distribution-of-a-random-element]]

[F4] Means and variances are expectations and centered second moments. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] [[def-moments-variance-and-covariance]]

## Verification

1.1 The identity summary has mean $p$ and variance $p(1-p)>0$, so its ideal Gaussian synthetic likelihood is the density $g_p(x)=(2\pi p(1-p))^{-1/2}\exp\!\left(-\frac{(x-p)^2}{2p(1-p)}\right)$. [F1, F2, F3, F4, given, algebra]

2.1 For $x\in(1/4,3/4)$ and $p\in(0,1)$, $|x-p|<1$. Hence $g_p(x)\ge c_p:=(2\pi p(1-p))^{-1/2}\exp\!\left(-\frac{1}{2p(1-p)}\right)>0$. The Gaussian law therefore assigns $(1/4,3/4)$ probability at least $c_p/2>0$, since this interval has Lebesgue length $1/2$. [A1, F1, F2, step 1.1, algebra]

3.1 The true summary law is supported on $\{0,1\}$, so it assigns $(1/4,3/4)$ probability zero. It differs from the Gaussian law in step 2.1. Thus the Gaussian synthetic likelihood is not the exact likelihood of this non-Gaussian summary model. [F3, step 2.1, algebra] ∎
