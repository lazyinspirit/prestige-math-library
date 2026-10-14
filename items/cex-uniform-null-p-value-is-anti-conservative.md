---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: cex-uniform-null-p-value-is-anti-conservative
kind: counterexample
title: "A measurable [0,1]-valued statistic need not be a valid p-value"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-statistical-experiment
  - def-p-value
  - def-test-size-and-power
  - def-measurable-function-between-measurable-spaces
  - def-probability-measure
  - cor-expectation-of-an-indicator-is-probability
  - lem-measurable-rejection-function-defines-randomized-test
justified_by: []
strategy: "Take a two-point null law and a measurable statistic that is zero on an event of probability one half; it violates the superuniform bound at u=1/4."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Every measurable statistic $p:\mathcal X\to[0,1]$ is a valid p-value for a
given null hypothesis.

## Facts & Assumptions

**Given:** A statistical experiment with a nonempty null hypothesis and a
disjoint nonempty alternative, and the definition of a valid p-value.

[F1] [[def-statistical-experiment]]: an experiment supplies a measurable data space and a probability law for each parameter.

[F2] [[def-p-value]]: a valid p-value must satisfy $P_\theta(p(X)\le u)\le u$ for every null parameter and every $u\in[0,1]$.

[F3] [[def-test-size-and-power]]: for the simple null
$\Theta_0=\{\theta_0\}$ and a nonempty disjoint alternative, size is the
rejection probability under $P_{\theta_0}$.

[F4] [[def-measurable-function-between-measurable-spaces]]: a statistic is measurable when all measurable target sets have measurable preimages.

[F5] [[cor-expectation-of-an-indicator-is-probability]]: the expectation of an event indicator is the event's probability.

[F6] [[lem-measurable-rejection-function-defines-randomized-test]]: every measurable function into $[0,1]$ defines a binary randomized test.

## Counterexample

1.1 Let $\mathcal X=\{0,1\}$ with the full sigma-algebra, $\Theta=\{\theta_0,\theta_1\}$, $\Theta_0=\{\theta_0\}$, and $\Theta_1=\{\theta_1\}$. Set $P_{\theta_0}(\{0\})=P_{\theta_0}(\{1\})=1/2$ and $P_{\theta_1}(\{0\})=0$, $P_{\theta_1}(\{1\})=1$. These masses define probability measures: they are nonnegative and sum to one, and on the two-point space countable additivity follows because at most two members of a disjoint family are nonempty. Define $p(0)=0$ and $p(1)=1$. It is measurable because every subset of $\mathcal X$ is measurable. [given, F1, F4, algebra, construct]

2.1 At $u=1/4$, $\{x:p(x)\le u\}=\{0\}$, so $P_{\theta_0}(p(X)\le1/4)=1/2>1/4$. Thus $p$ is not valid by [F2]. Thresholding it at $1/4$ defines a test by [F6], rejects on $\{0\}$, and has size $1/2$ by [F3,F5], so it is anti-conservative. The claimed implication is false. [F2, F3, F5, F6, step 1.1, algebra] ∎
