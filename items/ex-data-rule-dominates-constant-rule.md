---
id: ex-data-rule-dominates-constant-rule
kind: example
title: A data-dependent rule dominates a constant rule
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-loss-function-and-risk
  - def-risk-domination-and-admissibility
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

Let $\Theta=\{0,1\}$ and observe $X\in\{0,1\}$ with
$P_\theta(\{x\})=1$ when $x=\theta$ and zero otherwise. Under squared-error
loss, the constant rule $d_0(x)=0$ has risk $0$ at $\theta=0$ and $1$ at
$\theta=1$. The data rule $d_1(x)=x$ has risk zero at both parameters, so it
dominates $d_0$.

## Facts & Assumptions

**Given:** The finite model, two decision rules, squared-error loss, and domination definition in the Example.

[F1] A probability measure has total mass one ([[def-probability-measure]]).

[F2] A statistic or estimator is a measurable data map ([[def-statistic-and-estimator]]).

[F3] Risk is the expected loss under the sampling law ([[def-loss-function-and-risk]]).

[F4] Domination requires weakly lower risk at every parameter and strict improvement at one parameter ([[def-risk-domination-and-admissibility]]).

[F5] Finite expectations are probability-weighted sums ([[cor-expectation-agrees-with-the-finite-weighted-sum]]).

## Verification

**Proof technique:** direct finite verification.

1.1 For each $\theta\in\{0,1\}$, let $P_\theta$ be the point mass at $\theta$. In any disjoint sequence of events at most one event contains $\theta$, so this law is countably additive and has total mass one; it is a probability measure by [F1]. Both maps $d_0(x)=0$ and $d_1(x)=x$ are measurable on the finite full-power-set spaces by [F2]. [given, F1, F2]

1.2 Under squared-error loss, the only data value with positive $P_\theta$-mass is $x=\theta$. The finite-sum formula [F5] and risk definition [F3] therefore give $R(\theta,d_0)=\theta^2=\theta$ and $R(\theta,d_1)=(\theta-\theta)^2=0$. [F3, F5, algebra]

2.1 The risks satisfy $R(\theta,d_1)\leq R(\theta,d_0)$ at both parameters, and the inequality is strict at $\theta=1$. Thus $d_1$ dominates the constant rule $d_0$ by [F4]. [F3, F4, step 1.2] ∎
