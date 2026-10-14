---
id: ex-bernoulli-huber-modulus-and-identical-mixtures
kind: example
title: "Exact Bernoulli Huber modulus and indistinguishable mixtures"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-huber-contamination-model
  - def-contamination-modulus
  - def-total-variation-distance-for-probability-laws
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-convex-mixture-of-probability-laws
  - def-measurable-space
  - def-borel-sigma-algebra
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §§1 and 5"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5, §5.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Example

Take $\Theta=[0,1]$ with its Borel sigma-algebra and sample space $\{0,1\}$ with full power set. Let $\delta_0,\delta_1$ be the point masses, set $P_\theta=(1-\theta)\delta_0+\theta\delta_1$, and use absolute parameter loss $L(\theta,a)=|\theta-a|$. Then
$$
\omega(\epsilon,\Theta)=\min\{\epsilon/(1-\epsilon),1\}\quad(0\le\epsilon<1),\qquad \omega(1,\Theta)=1.
$$
For $0<\epsilon\le1/2$, set $\theta_0=0$, $\theta_1=\epsilon/(1-\epsilon)$, $Q_0=\delta_1$, and $Q_1=\delta_0$; both Huber mixtures are Bernoulli$(\epsilon)$. For $1/2\le\epsilon\le1$, endpoint laws can also be made identical.

## Facts & Assumptions

**Given:** The Bernoulli experiment, absolute loss, Huber mixtures, and the modulus definition.

[F1] [[def-huber-contamination-model]]: each observed coordinate has law $(1-\epsilon)P_\theta+\epsilon Q$.

[F2] [[def-contamination-modulus]]: $\omega$ is the supremum of parameter loss over clean pairs within the specified total-variation threshold, with the $\epsilon=1$ endpoint defined separately.

[F3] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum over measurable events, with no factor $1/2$.

[F4] [[def-dirac-measure]] and [[prop-dirac-measure-is-a-probability-measure]]: $\delta_b$ is the probability law concentrated at $b$.

[F5] [[lem-convex-mixture-of-probability-laws]]: convex mixtures of probability laws are probability laws.

[F6] [[def-measurable-space]] and [[def-borel-sigma-algebra]]: the parameter set uses its Borel measurable structure and the finite sample space its full-power-set measurable structure.

## Verification

1.1 The weights in $P_\theta=(1-\theta)\delta_0+\theta\delta_1$ are nonnegative and sum to one. By [F4] and [F5], each $P_\theta$ is a probability law. On the full power set of $\{0,1\}$ the four events are $\varnothing,\{0\},\{1\}$, and $\{0,1\}$. [given, F4, F5, F6, algebra]

2.1 For the four events in step 1.1, the probability differences are either zero or $\pm(\theta_0-\theta_1)$. Thus [F3] gives $TV(P_{\theta_0},P_{\theta_1})=|\theta_0-\theta_1|$. Under absolute loss, the allowed parameter separation is at most $\min\{\epsilon/(1-\epsilon),1\}$ when $\epsilon<1$. If the fraction is at most $1$, the pair $0,\epsilon/(1-\epsilon)$ attains it; if it is at least $1$, the endpoints attain separation $1$. The endpoint definition gives $\omega(1,\Theta)=1$. [F2, F3, step 1.1, algebra]

3.1 For $0<\epsilon\le1/2$, both chosen parameters lie in $[0,1]$. Under $(\theta_0,Q_0)$ the success probability is $\epsilon$; under $(\theta_1,Q_1)$ it is $(1-\epsilon)\epsilon/(1-\epsilon)=\epsilon$. Hence both mixtures are Bernoulli$(\epsilon)$. [F1, F4, step 2.1, algebra]

4.1 For $1/2\le\epsilon\le1$, take $\theta_0=0,\theta_1=1$, set $q_0=1/(2\epsilon)$ and $q_1=1-1/(2\epsilon)$, and define $Q_j=(1-q_j)\delta_0+q_j\delta_1$. The $q_j$ lie in $[0,1]$, so [F4] and [F5] make these probability laws. The mixture success probabilities are $\epsilon q_0=1/2$ and $(1-\epsilon)+\epsilon q_1=1/2$. At $\epsilon=1$ the clean part vanishes and both mixtures still equal Bernoulli$(1/2)$. [F1, F4, F5, step 3.1, algebra] ∎
