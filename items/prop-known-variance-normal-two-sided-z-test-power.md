---
id: prop-known-variance-normal-two-sided-z-test-power
kind: proposition
title: "Both tails determine power for the known-variance two-sided normal z-test"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
  - lem-iid-normal-sample-mean-law
  - def-standard-normal-and-normal-laws
  - def-statistical-experiment
  - def-randomized-test
  - def-test-size-and-power
  - def-measurable-function-between-measurable-spaces
  - cor-continuous-functions-are-borel-measurable
  - thm-algebra-of-continuous-functions
  - lem-measurable-rejection-function-defines-randomized-test
  - def-axiom-of-choice
  - def-countable-choice
  - lem-axiom-of-choice-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal law, its characteristic-function formula, and characteristic-function uniqueness."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §§7.1–7.4, printed pp. 149–159"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §7.2.2.2, PDF pp. 2019–2021"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/E-Handbook.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $X_1,\ldots,X_n$ be mutually independent with common law $N(\mu,\sigma^2)$, where $n\ge1$ and $\sigma>0$. For the simple null $H_0:\mu=\mu_0$ against the two-sided alternative $H_1:\mu\ne\mu_0$, let $Z_n=\sqrt n(\bar X_n-\mu_0)/\sigma$, let $c_\alpha=z_{1-\alpha/2}$ for $\alpha\in(0,1)$, and reject when $|Z_n|>c_\alpha$. This test has size $\alpha$. At $\mu=\mu_0+\delta$, where $\delta\in\mathbb R$, its rejection probability (the power function evaluated at this parameter) is
$$1-\Phi(c_\alpha-\lambda)+\Phi(-c_\alpha-\lambda), \qquad \lambda=\frac{\sqrt n\,\delta}{\sigma}.$$
For $\delta\ne0$ this is power at the stated alternative; for $\delta=0$ it is the null rejection probability. The first term is the upper-tail rejection probability and the second is the lower-tail rejection probability.

## Facts & Assumptions

**Given:** AC; the independent normal sample and parameters in the Statement; the simple null, the two-sided alternative, and the stated symmetric rejection region.

[A1] Assume AC, as required by the Gaussian-law convention. It also supplies countable choice: apply AC to the family of values of any sequence of nonempty sets and compose the resulting choice function with that sequence. This discharges the countable-choice premise in [F5]. [[def-axiom-of-choice]] [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]]

[F1] The standardized sample mean has law $N(\lambda,1)$ at $\mu=\mu_0+\delta$, and $N(0,1)$ at the null; these normal laws are affine shifts of the standard normal. [[lem-iid-normal-sample-mean-law]] [[def-standard-normal-and-normal-laws]]

[F2] $\Phi$ has unique quantiles, is strictly increasing, is symmetric about zero, and has no atoms. [[lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power]]

[F3] The sample-mean observation with its parameter-indexed probability laws is a statistical experiment. [[def-statistical-experiment]]

[F4] A randomized test has a measurable rejection-probability function $\varphi$; here it is the indicator of the two-sided rejection region. [[def-randomized-test]]

[F5] The affine statistic is continuous, its two-tail region is Borel, and a measurable rejection function defines a randomized test. [[thm-algebra-of-continuous-functions]] [[cor-continuous-functions-are-borel-measurable]] [[def-measurable-function-between-measurable-spaces]] [[lem-measurable-rejection-function-defines-randomized-test]]

[F6] Size is the null rejection probability for this singleton null, and the power function is the rejection probability under each parameter. [[def-test-size-and-power]]

## Proof

1.1 By [A1], countable choice is available for the Borel-measurability supplier in [F5]. The affine map $T(x)=\sqrt n(x-\mu_0)/\sigma$ is continuous, so the sample-mean rejection region $R=\{x\in\mathbb R:|T(x)|>c_\alpha\}=T^{-1}(( -\infty,-c_\alpha)\cup(c_\alpha,\infty))$ is Borel. Its indicator $\varphi=\mathbf1_R$ is measurable: preimages of Borel sets in $[0,1]$ are among $\varnothing,R,R^c,\mathbb R$. By [F5], it defines a randomized test in the experiment [F3], and $\varphi(\bar X_n)=\mathbf1_{\{|Z_n|>c_\alpha\}}$. By [F1], under $H_0$ the statistic $Z_n$ has law $N(0,1)$. Since $1-\alpha/2>1/2$, [F2] gives $c_\alpha>0$, and the two rejection tails are disjoint. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 Under the null, the probability of the upper tail is $1-\Phi(c_\alpha)=\alpha/2$, and the probability of the lower tail is $\Phi(-c_\alpha)=\alpha/2$ by symmetry and the quantile identity. Their sum is $\alpha$, proving the test size. [F2, F6, step 1.1, algebra]

3.1 Under $\mu=\mu_0+\delta$, [F1] gives $Z_n\sim N(\lambda,1)$. Thus $P(Z_n>c_\alpha)=1-\Phi(c_\alpha-\lambda)$, while $P(Z_n<-c_\alpha)=\Phi(-c_\alpha-\lambda)$; the no-atom clause in [F2] justifies the strict lower tail. The two events are disjoint by step 1.1, so their probabilities add to the stated power-function value. [F1, F2, step 1.1, algebra] ∎
