---
id: lem-common-law-forces-two-point-tail-loss-bound
kind: lemma
title: "A common data law forces a two-point tail-loss bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-probability-measure
  - def-measurable-space
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5, §5.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Statement

Let $(\mathcal Z,\mathcal G,R)$ be a probability space and let $\Theta$ be a measurable space ([[def-measurable-space]]) with $\theta_0,\theta_1\in\Theta$. Let $\hat\theta:\mathcal Z\to\Theta$ be measurable and let $\ell:\Theta\times\Theta\to[0,+\infty]$ have measurable sections $a\mapsto\ell(\theta_i,a)$. If $\max\{\ell(\theta_0,a),\ell(\theta_1,a)\}\ge\kappa\ell(\theta_0,\theta_1)$ for every $a\in\Theta$, where $\kappa>0$, then $\max_{i=0,1}R\{\ell(\theta_i,\hat\theta)\ge\kappa\ell(\theta_0,\theta_1)\}\ge1/2$.

## Facts & Assumptions

**Given:** A probability space $(\mathcal Z,\mathcal G,R)$, two parameter values, a measurable estimator, measurable loss sections at those values, and the stated pairwise loss-separation condition.

[F1] [[def-probability-measure]]: $R(\mathcal Z)=1$.

[F2] [[def-measurable-space]]: $\Theta$ has a specified sigma-algebra.

## Proof

1.1 For every $z\in\mathcal Z$, apply the separation condition to $a=\hat\theta(z)$. At least one of $\ell(\theta_0,\hat\theta(z))$ and $\ell(\theta_1,\hat\theta(z))$ is at least $\kappa\ell(\theta_0,\theta_1)$. The loss-event sets are measurable by [given] and [F2], so the two event indicators sum to at least one pointwise. [given, F2, choose]

2.1 Integrating that indicator inequality under the probability measure $R$ gives $R(E_0)+R(E_1)\ge1$, where $E_i=\{\ell(\theta_i,\hat\theta)\ge\kappa\ell(\theta_0,\theta_1)\}$. Hence at least one probability is at least $1/2$. [F1, F2, step 1.1, algebra] ∎
