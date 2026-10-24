---
id: alg-online-mirror-descent
kind: algorithm
title: Agile online mirror descent
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-mirror-map-and-bregman-divergence
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-subgradient-and-subdifferential
  - thm-differentiable-convex-functions-and-gradient-inequality
justified_by:
  - lem-mirror-descent-bregman-projection-exists
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.3, Algorithm 14, agile update and Bregman projection, PDF pp. 100–103 (printed pp. 78–81)."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slide 26, agile dual update and Bregman projection; slides 24–25 describe the distinct lazy cumulative update."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $(K,U,R)$ be a mirror regularizer with $R$ $m$-strongly convex on $K$ for some $m>0$. Fix an integer horizon $T\ge1$ and a step size $\eta>0$. Admissibility requires the unique minimizer of $R$ on $K$ to lie in $U$; initialize $x_1$ at this minimizer. At each round $t=1,\ldots,T$, play $x_t$ before observing the full current loss $f_t$, with losses and gradients written in the same affine coordinates used for $K$. Use either of these feedback cases:

1. $f_t$ is differentiable and convex on an open convex set containing $K$, and $g_t=\nabla f_t(x_t)$.
2. $f_t$ is convex on a convex set containing $K$, and a supplied vector $g_t$ satisfies $f_t(u)\ge f_t(x_t)+\langle g_t,u-x_t\rangle$ for every $u\in K$.

For each round require that there is a unique $y_{t+1}\in U$ satisfying

$$\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t.$$

Set $x_{t+1}$ to the minimizer of $B_R(x\|y_{t+1})$ over $x\in K$, and require this minimizer to lie in $U$ so that the next dual update is defined. The Bregman minimizer exists and is unique under the stated strong-convexity and compactness hypotheses. Output the decisions $x_1,\ldots,x_T$; the final $x_{T+1}$ is the internal post-round iterate.

## Definition references

[[def-mirror-map-and-bregman-divergence]]: gives the domains, strong-convexity condition, Bregman divergence, and Hessian notation.

[[def-online-decision-protocol]]: the learner chooses using only the previous history before the round's current loss is observed.

[[def-adversary-and-feedback-model]]: full-information feedback reveals the current loss after the learner's choice.

[[def-convex-subset-of-euclidean-space]]: convex domains contain every segment between their points.

[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: defines convexity of each loss function.

[[def-euclidean-inner-product]]: the pairing in the subgradient condition is the Euclidean inner product.

[[def-jacobian-matrix-and-gradient]]: $\nabla f_t(x_t)$ is the Euclidean gradient vector.

[[def-subgradient-and-subdifferential]]: a supplied vector satisfying the stated supporting inequality is a subgradient at $x_t$.

[[thm-differentiable-convex-functions-and-gradient-inequality]]: the smooth feedback case supplies the same supporting inequality for every comparator in $K$.
