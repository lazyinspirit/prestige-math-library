---
id: thm-known-variance-normal-z-test-power-and-minimum-sample-size
kind: theorem
title: "Exact power and least sample size for a known-variance normal z-test"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-power-and-sample-size-planning-specification
  - lem-least-feasible-sample-size-exists
  - lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
  - lem-iid-normal-sample-mean-law
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
  - def-natural-numbers
  - lem-ceiling-and-least-positive-integer-threshold
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal law, its characteristic-function formula, and characteristic-function uniqueness; no choice is used to obtain the least feasible integer."
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC. Let $X_1,\ldots,X_n$ be mutually independent with common law $N(\mu,\sigma^2)$, where $n\in\mathbb N_{\ge1}$, $\sigma>0$, and $\mu\in\mathbb R$. Fix $\mu_0\in\mathbb R$, $\alpha,\beta_{\rm II}\in(0,1)$, and $\delta>0$, and put $\mu_1=\mu_0+\delta$. Observe $\bar X_n=n^{-1}\sum_iX_i$ in the one-dimensional experiment with law $N(\mu,\sigma^2/n)$. For the upper-tail test of $H_0:\mu\le\mu_0$ against $H_1:\mu>\mu_0$ with rejection rule
$$\varphi_n(x)=\mathbf 1\!\left\{\frac{\sqrt n(x-\mu_0)}{\sigma}>z_{1-\alpha}\right\},$$
the test size is $\alpha$, and its power at any $\mu$ is
$$\pi_n(\mu)=\Phi\!\left(\frac{\sqrt n(\mu-\mu_0)}{\sigma}-z_{1-\alpha}\right).$$
The least positive integer sample size attaining target power $1-\beta_{\rm II}$ at $\mu_1$, with candidate sizes $\mathbb N_{\ge1}$, is
$$n_*=\max\!\left\{1,\left\lceil \left(\frac{\sigma}{\delta}\right)^2 \max\!\left\{0,z_{1-\alpha}+z_{1-\beta_{\rm II}}\right\}^{2}\right\rceil\right\}.$$
If $z_{1-\alpha}+z_{1-\beta_{\rm II}}\le0$, every positive integer size meets the target and the least is $1$. This is an exact result for the specified known-$\sigma$ normal model; it makes no approximation or claim for an unknown-$\sigma$ $t$-test or another sampling law.

## Facts & Assumptions

**Given:** AC; the independent normal sample and parameters in the Statement; the one-dimensional sample-mean experiment; and the definitions of test size and power.

[A1] Assume AC, as required by the Gaussian-law convention. It also supplies countable choice: apply AC to the family of values of any sequence of nonempty sets and compose the resulting choice function with that sequence. This discharges the countable-choice premise in [F5]. [[def-axiom-of-choice]] [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]]

[F1] The sample mean has law $N(\mu,\sigma^2/n)$, and its standardized value has law $N(\sqrt n(\mu-\mu_0)/\sigma,1)$. [[lem-iid-normal-sample-mean-law]]

[F2] $\Phi$ is continuous and strictly increasing, has no atoms, satisfies $\Phi(-x)=1-\Phi(x)$, and has unique quantiles $z_q$ with $\Phi(z_q)=q$. [[lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power]]

[F3] A statistical experiment specifies a data measurable space, a parameter set, and a probability law for each parameter; here the observation is $\bar X_n$ with law $N(\mu,\sigma^2/n)$. [[def-statistical-experiment]]

[F4] A randomized test has a measurable rejection-probability function $\varphi$; in this deterministic case it is the indicator of the rejection region. [[def-randomized-test]]

[F5] The affine statistic is continuous, its threshold set is Borel, and a measurable rejection function defines a randomized test. [[thm-algebra-of-continuous-functions]] [[cor-continuous-functions-are-borel-measurable]] [[def-measurable-function-between-measurable-spaces]] [[lem-measurable-rejection-function-defines-randomized-test]]

[F6] Power is the rejection probability at each parameter and size is the supremum of power over the nonempty null set. [[def-test-size-and-power]]

[F7] The planning rule returns the least feasible positive integer size when the feasible set is nonempty. [[def-power-and-sample-size-planning-specification]] [[lem-least-feasible-sample-size-exists]]

[F8] Define $\lceil x\rceil=-\lfloor -x\rfloor$; it is the least integer greater than or equal to $x$. [[lem-ceiling-and-least-positive-integer-threshold]]

## Proof

1.1 By [A1], countable choice is available for the Borel-measurability supplier in [F5]. The affine statistic $x\mapsto\sqrt n(x-\mu_0)/\sigma$ is continuous, so the strict upper-level rejection set is Borel and its indicator is measurable. [F5] therefore makes $\varphi_n$ a randomized-test function in the sample-mean experiment described by [F3]; [F1] gives its statistic the stated shifted normal law. [A1, F1, F3, F4, F5, given, algebra]

2.1 Write $\lambda_\mu=\sqrt n(\mu-\mu_0)/\sigma$. Under parameter $\mu$, the rejection probability is $1-\Phi(z_{1-\alpha}-\lambda_\mu)=\Phi(\lambda_\mu-z_{1-\alpha})$ by the symmetry in [F2]. This is the stated power function. [F1, F2, step 1.1, algebra]

3.1 On $H_0$, $\lambda_\mu\le0$. Since $\Phi$ is strictly increasing, the power in step 2.1 is increasing in $\mu$, so its supremum over $\mu\le\mu_0$ occurs at $\mu_0$. There it equals $\Phi(-z_{1-\alpha})=\Phi(z_\alpha)=\alpha$ by [F2]; hence the test size is $\alpha$. [F2, F6, step 2.1, algebra]

3.2 At $\mu_1=\mu_0+\delta$, target power is attained exactly when $\Phi(\delta\sqrt n/\sigma-z_{1-\alpha})\ge\Phi(z_{1-\beta_{\rm II}})$. Strict increase of $\Phi$ makes this equivalent to $\delta\sqrt n/\sigma\ge q$, where $q=z_{1-\alpha}+z_{1-\beta_{\rm II}}$. If $q\le0$, the left side is positive for every $n\ge1$, so all positive sizes qualify. If $q>0$, the condition is $n\ge(\sigma/\delta)^2q^2$. [F2, given, step 2.1, algebra]

4.1 For $q\le0$, the least positive size is $1$, which agrees with the displayed formula. For $q>0$, [F8] makes the least integer at least $(\sigma/\delta)^2q^2$ its ceiling, already positive. The cases in step 3.2 make the target-feasible set nonempty; step 3.1 shows that every candidate size satisfies the size constraint $s_n=\alpha$. Thus the target-feasible sizes are exactly the plans meeting the test request, and [F7] identifies their least size with the planning rule's output. The unified expression is the stated $n_*$. [F7, F8, step 3.1, step 3.2, algebra] ∎