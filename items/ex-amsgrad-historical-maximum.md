---
id: ex-amsgrad-historical-maximum
kind: example
title: AMSGrad retains an earlier second-moment maximum
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-amsgrad
  - lem-adaptive-moment-updates-well-defined
  - def-euclidean-inner-product
  - def-interval
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
  - def-subgradient-and-subdifferential
  - def-ordered-field
  - lem-of-sign-rules
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§4 Algorithm 2, coordinatewise raw second moment and historical maximum, PDF p. 5."
---

## Example

On the one-dimensional domain $F=[-1,1]$, run uncorrected AMSGrad from $x_1=0$ with positive step sizes $\alpha_1,\alpha_2$, any first-moment weights in $[0,1)$, $\beta_2=1/2$, and losses $\ell_1(x)=2x$, $\ell_2(x)=0$, using their gradients $g_1=2$, $g_2=0$. The raw second moment decreases from $v_1=2$ to $v_2=1$, while the historical maximum remains $\widehat v_1=\widehat v_2=2$.

## Example references

[[alg-amsgrad]]: defines the raw second-moment recurrence and its coordinatewise historical maximum.

[[def-interval]]: $[-1,1]$ is the closed interval used as the domain.

[[lem-adaptive-moment-updates-well-defined]]: guarantees finite nonnegative moments and well-defined updates on the stated compact domain.

[Reddi, Kale, and Kumar, Algorithm 2](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** $F=[-1,1]$, $x_1=0$, $\beta_2=1/2$, and gradients $g_1=2$, $g_2=0$.

[F1] [[alg-amsgrad]]: $v_0=\widehat v_0=0$, $v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2$, and $\widehat v_t=\max\{\widehat v_{t-1},v_t\}$.

[F2] [[lem-adaptive-moment-updates-well-defined]]: the recurrence and weighted minimizations are well-defined for finite gradients on the nonempty compact convex domain.

[F3] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]] and [[def-convex-subset-of-euclidean-space]]: the interval is convex and the linear losses are convex.

[F4] [[def-subgradient-and-subdifferential]]: $g\in\partial\ell(x)$ when $\ell(y)\ge\ell(x)+g(y-x)$ for all $y$ in the domain.

[F5] [[def-ordered-field]] and [[lem-of-sign-rules]]: nonnegative coefficients preserve the interval bounds under weighted sums.

[F6] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a nonempty closed bounded subset of $\mathbb R$ is compact.

## Verification

**Given:** The initialization and two gradients in the Example.

1.1 The interval $[-1,1]$ is nonempty, closed, and bounded, so [F6] makes it compact. For $x,y\in[-1,1]$ and $\theta\in[0,1]$, [F5] gives $-1\le(1-\theta)x+\theta y\le1$, so the interval is convex. For either displayed linear loss, $\ell((1-\theta)x+\theta y)=(1-\theta)\ell(x)+\theta\ell(y)$; moreover, if $\ell(x)=ax$, its gradient $g=a$ satisfies $\ell(y)=\ell(x)+g(y-x)$, so it is a subgradient by [F4]. The first update gives $v_1=(1/2)0+(1/2)2^2=2$ and $\widehat v_1=\max\{0,2\}=2$. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 The second update gives $v_2=(1/2)2+(1/2)0^2=1$, so $v_2<v_1$; nevertheless $\widehat v_2=\max\{2,1\}=2=\widehat v_1$. [F1, F3, F4, step 1.1, given, algebra] ∎
