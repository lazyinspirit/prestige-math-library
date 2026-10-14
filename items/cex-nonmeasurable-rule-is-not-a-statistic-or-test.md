---
id: cex-nonmeasurable-rule-is-not-a-statistic-or-test
kind: counterexample
title: "A nonmeasurable rule is not a statistic or test"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-randomized-procedure-as-a-markov-kernel
  - def-randomized-test
  - def-measurable-function-between-measurable-spaces
  - def-measurable-space
  - def-sigma-algebra
  - def-probability-measure
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Statement refuted

Every set map from a statistical data space to the binary action space is a
statistic or a randomized test function.

## Facts & Assumptions

**Given:** The two-point data set, its trivial sigma-algebra, the one-point parameter set, and the map $\varphi(x)=x$.

[F1] A sigma-algebra contains the full space and is closed under complements and countable unions ([[def-sigma-algebra]]).

[F2] A measurable space is a set paired with a sigma-algebra ([[def-measurable-space]]).

[F3] The Dirac measure $\delta_0$ is a probability measure on every sigma-algebra on $\{0,1\}$ ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]).

[F4] An experiment is a data measurable space, parameter set, and family of probability measures ([[def-statistical-experiment]]).

[F5] A map is measurable exactly when preimages of measurable target sets are measurable ([[def-measurable-function-between-measurable-spaces]]).

[F6] A statistic is a measurable data map ([[def-statistic-and-estimator]]).

[F7] A randomized test function is measurable and is the action-1 probability of a binary kernel ([[def-randomized-test]]).

[F8] A randomized procedure kernel has measurable action-event evaluations ([[def-randomized-procedure-as-a-markov-kernel]]).

## Counterexample

**Given:** Let $\mathcal X=\{0,1\}$ carry the trivial sigma-algebra $\mathcal A=\{\varnothing,\mathcal X\}$. Take a singleton parameter set $\Theta=\{\theta_0\}$ with sampling law $P_{\theta_0}=\delta_0$, and give the action space $\{0,1\}$ its full power-set sigma-algebra. Define the set map $\varphi(x)=x$.

1.1 The family $\mathcal A=\{\varnothing,\mathcal X\}$ contains $\mathcal X$, and its only members have complements in $\mathcal A$; any countable union of its members is either empty or $\mathcal X$. Hence $\mathcal A$ is a sigma-algebra and $(\mathcal X,\mathcal A)$ is a measurable space. [given, F1, F2]

1.2 In the full action sigma-algebra, $\{1\}$ is measurable, but $\varphi^{-1}(\{1\})=\{1\}\notin\mathcal A$. Therefore $\varphi$ is not measurable by [F5]. [given, F5]

2.1 The point mass $P_{\theta_0}=\delta_0$ is a probability measure on this measurable space by [F3]. Thus the stated one-parameter family is a statistical experiment. [given, F3, F4, step 1.1]

3.1 In this valid experiment, the map is not a statistic by [F6] and is not a randomized test function by [F7], since step 1.2 shows it is not measurable. [F6, F7, step 1.2, step 2.1]

4.1 If $\varphi$ were the action-1 evaluation of a procedure kernel, then $x\mapsto K(x,\{1\})=\varphi(x)$ would have to be measurable by [F8], contradicting step 1.2. Thus the map is not a randomized procedure either, proving the stated claim false. [F8, step 1.2, step 2.1, step 3.1] ∎
