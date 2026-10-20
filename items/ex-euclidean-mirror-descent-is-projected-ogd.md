---
id: ex-euclidean-mirror-descent-is-projected-ogd
kind: example
title: A quadratic mirror map gives a projected gradient step
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-online-mirror-descent
  - lem-mirror-descent-bregman-projection-exists
  - def-mirror-map-and-bregman-divergence
  - alg-online-gradient-descent
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - def-metric-bounded-diameter
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.4.1, quadratic regularizer and derivation of projected OGD, PDF pp. 103–104 (printed pp. 81–82)."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slides 24–26, dual gradient step and agile projection; the quadratic reduction is proved locally."
verification:
  precheck: n/a
---

## Example

Let $d\ge1$, let $K\subseteq\mathbb R^d$ be nonempty, bounded, closed, and convex with nonempty interior, choose $x_0\in\mathbb R^d$, and set $R(x)=\frac12\|x-x_0\|_2^2$ on $U=\mathbb R^d$. Initialize at a minimizer of $R$ on $K$. At any round with current decision $x_t\in K$ and gradient $g_t$, the agile mirror step with parameter $\eta>0$ has $y_{t+1}=x_t-\eta g_t$ and

$$x_{t+1}=\arg\min_{x\in K}B_R(x\|y_{t+1})=\arg\min_{x\in K}\frac12\|x-(x_t-\eta g_t)\|_2^2.$$

Thus its one-step update map is exactly the projected gradient update with the same step size. If $\eta$ is set to the current projected-gradient step size, the two displayed one-step maps agree.

## Example references

[[alg-online-mirror-descent]]: defines the agile dual step and Bregman projection.

[[lem-mirror-descent-bregman-projection-exists]]: establishes existence and uniqueness of the minimizer over $K$.

[[def-mirror-map-and-bregman-divergence]]: defines the quadratic regularizer's Bregman divergence and Hessian norms.

[[alg-online-gradient-descent]]: defines the projected gradient update with the current step size.

[[def-euclidean-inner-product]]: defines the Euclidean norm and inner product used in the quadratic.

[[def-convex-subset-of-euclidean-space]]: supplies the segment condition for the decision set.

[[def-metric-topology]]: closedness is in the Euclidean metric topology.

[[def-metric-bounded-diameter]]: boundedness is with respect to the Euclidean metric.

## Facts & Assumptions

**Given:** The quadratic regularizer, current decision, gradient, positive step size, and closed bounded convex set in the Example.

[F1] [[def-mirror-map-and-bregman-divergence]]: $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$.

[F2] [[alg-online-mirror-descent]]: the dual update satisfies $\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t$ and the next decision minimizes $B_R(\cdot\|y_{t+1})$ on $K$.

[F3] [[alg-online-gradient-descent]]: the projected gradient step is $x_{t+1}=P_K(x_t-\eta_tg_t)$, where $P_K(y)$ is the unique nearest point of $K$ to $y$.

[F4] [[lem-mirror-descent-bregman-projection-exists]]: the Bregman projection minimizer is unique for a strongly convex regularizer on compact $K$.

## Verification

1.1 Differentiating $R(x)=\frac12\|x-x_0\|_2^2$ gives $\nabla R(x)=x-x_0$ and $H_R(x)=I$, so the regularizer is $1$-strongly convex and its Hessian is positive definite everywhere. [given, F1, algebra]

1.2 The dual equation [F2] becomes $y_{t+1}-x_0=x_t-x_0-\eta g_t$, hence $y_{t+1}=x_t-\eta g_t$. [given, F2, algebra]

2.1 For $x,y\in\mathbb R^d$, substitution into [F1] gives $B_R(x\|y)=\frac12\|x-y\|_2^2$: expanding $\frac12\|x-x_0\|_2^2-\frac12\|y-x_0\|_2^2-\langle y-x_0,x-y\rangle$ cancels the cross terms and leaves this squared distance. [step 1.1, F1, algebra]

3.1 By step 2.1, minimizing $B_R(x\|y_{t+1})$ over $K$ is the same as minimizing Euclidean distance to $y_{t+1}$; [F4] gives a unique minimizer, which is $P_K(y_{t+1})$. Substitution of step 1.2 yields $P_K(x_t-\eta g_t)$, the projected-gradient update in [F3] when $\eta=\eta_t$. [step 2.1, step 1.2, F3, F4, algebra] ∎

