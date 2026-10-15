---
id: ex-posterior-predictive-mixture-adds-parameter-uncertainty
kind: example
title: Posterior prediction adds parameter uncertainty to future sampling variation
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-predictive-law
  - thm-posterior-predictive-moment-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.3"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Example

Let the posterior put mass $1/2$ on each of $\theta=0$ and $\theta=1$, and let the future kernel be $Q_\theta=\operatorname{Bernoulli}(\theta)$. The posterior-predictive law is Bernoulli with parameter $1/2$.

## Facts & Assumptions

**Given:** $\Pi(\{0\})=\Pi(\{1\})=1/2$ and, conditionally on $\theta\in\{0,1\}$, the future observation has law $\operatorname{Bernoulli}(\theta)$.

[F1] The posterior-predictive law averages future kernels over the posterior. [[def-posterior-predictive-law]]

[F2] Its finite mean and variance decompose into averaged conditional moments and the posterior variance of the conditional mean. [[thm-posterior-predictive-moment-decomposition]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 By [F1], $Q^{\mathrm{pred}}(\{1\})=\frac12Q_0(\{1\})+\frac12Q_1(\{1\})=\frac12(0)+\frac12(1)=\frac12$. Since its support is $\{0,1\}$, this is $\operatorname{Bernoulli}(1/2)$, with mean $1/2$ and variance $1/4$. [given, F1, algebra]

1.2 The conditional means are $\mu(0)=0$ and $\mu(1)=1$, and both conditional variances are zero. Thus $\mathbb E_\Pi[\operatorname{Var}(Z\mid\theta)]=0$ and $\operatorname{Var}_\Pi(\mu)=1/4$. [given, algebra]

2.1 The predictive variance in step 1.1 equals the sum of those two terms in step 1.2, as asserted by [F2]. Here the entire predictive variance comes from posterior uncertainty about $\theta$, while future sampling conditional on $\theta$ contributes zero. [F2, step 1.1, step 1.2] ∎
