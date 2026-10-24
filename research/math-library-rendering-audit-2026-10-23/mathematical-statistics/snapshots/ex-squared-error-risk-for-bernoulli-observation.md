---
id: ex-squared-error-risk-for-bernoulli-observation
kind: example
title: Squared-error risk for a Bernoulli observation
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-loss-function-and-risk
  - def-statistic-and-estimator
  - def-probability-measure
  - cor-expectation-agrees-with-the-finite-weighted-sum
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources: {}
---

## Example

Observe one Bernoulli variable $X\in\{0,1\}$ with parameter
$\theta\in[0,1]$, so $P_\theta(\{1\})=\theta$ and
$P_\theta(\{0\})=1-\theta$. Estimate $\theta$ by the rule
$d(X)=X$ under squared-error loss $L(\theta,a)=(a-\theta)^2$. Its risk is
$$R(\theta,d)=\theta(1-\theta),$$
which is zero at both endpoints and has maximum $1/4$ at $\theta=1/2$.

## Facts & Assumptions

**Given:** The finite Bernoulli model, estimator, squared-error loss, and risk definition in the Example.

[F1] A probability measure is a measure with total mass one ([[def-probability-measure]]).

[F2] A statistic or estimator is a measurable data map to its target ([[def-statistic-and-estimator]]).

[F3] Risk is the integral of loss under the sampling law ([[def-loss-function-and-risk]]).

[F4] On a finite probability space, expectation is the probability-weighted sum ([[cor-expectation-agrees-with-the-finite-weighted-sum]]).

## Verification

**Proof technique:** direct finite verification.

1.1 For each $\theta\in[0,1]$, define $P_\theta(A)=\theta 1_{\{1\in A\}}+(1-\theta)1_{\{0\in A\}}$ for $A\subseteq\{0,1\}$. Its singleton masses are nonnegative and sum to one; any disjoint sequence of subsets has at most two nonempty terms, and their masses add to the union mass. Thus $P_\theta$ is a probability measure by [F1]. The identity rule $d(x)=x$ is measurable on the finite full-power-set spaces and estimates the target $\psi(\theta)=\theta$ by [F2]. [given, F1, F2]

1.2 The finite expectation formula [F4] and risk definition [F3] give $R(\theta,d)=(1-\theta)(0-\theta)^2+\theta(1-\theta)^2=\theta(1-\theta)$. [F3, F4, algebra]

2.1 Since $\theta(1-\theta)=\frac14-(\theta-\frac12)^2$, the risk is at most $1/4$, with equality at $\theta=1/2$; substitution gives risk zero at $\theta=0$ and $\theta=1$. [step 1.2, algebra] ∎
