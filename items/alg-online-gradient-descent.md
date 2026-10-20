---
id: alg-online-gradient-descent
kind: algorithm
title: Projected online gradient descent
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-random-element-and-real-random-variable
  - def-euclidean-inner-product
  - def-metric-topology
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-jacobian-matrix-and-gradient
  - def-subgradient-and-subdifferential
  - thm-differentiable-convex-functions-and-gradient-inequality
  - def-countable-choice
  - def-hilbert-space
  - thm-euclidean-space-complete
  - thm-projection-onto-a-nonempty-closed-convex-set
  - lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§3.1, Algorithm 8 and Theorem 3.1, PDF pp. 63–66."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§11.8.1, projected online gradient updates, PDF pp. 161–162."
verification:
  precheck: n/a
---

## Definition

Let $d,T\ge1$ be integers, let $K\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $D,G\ge0$ be finite real bounds such that $\|u-v\|_2\le D$ for all $u,v\in K$ and $\|g_t\|_2\le G$. Supply an initial point $x_1\in K$. At each round $t=1,\ldots,T$, the learner plays $x_t$ and then receives the full loss function $f_t$ or the prescribed vector $g_t$. The smooth branch takes $f_t:U_t\to\mathbb R$ differentiable and convex on an open convex set $U_t\supseteq K$, with $g_t=\nabla f_t(x_t)$. The nonsmooth branch takes a convex function $f_t:C_t\to\mathbb R$ on a convex set $C_t\supseteq K$ and a supplied $g_t\in\partial f_t(x_t)$, where $\partial f_t(x_t)$ consists of vectors $g$ satisfying $f_t(y)\ge f_t(x_t)+\langle g,y-x_t\rangle$ for every $y\in C_t$; require explicitly that this inequality holds for every $u\in K$.

If $D=0$ or $G=0$, set $x_{t+1}=x_t$ at every round. If $D,G>0$, assume the Axiom of Countable Choice for the metric projection. Set $\eta_t=D/(G\sqrt t)$, put $y_{t+1}=x_t-\eta_tg_t$, and set $x_{t+1}=P_K(y_{t+1})$, the unique point of $K$ minimizing Euclidean distance to $y_{t+1}$. Return the decisions $x_1,\ldots,x_T$. Equip $\mathbb R^d$ with its Euclidean Borel $\sigma$-algebra and $K$ with the relative Borel $\sigma$-algebra. For random inputs, require $x_1$ to be a measurable $K$-valued random element and each $g_t$, whether supplied directly or computed as $\nabla f_t(x_t)$ in the smooth branch, to be a measurable $\mathbb R^d$-valued random element on the protocol's probability space. The vector update is continuous, and the nonexpansive projection is continuous, so each projected update remains measurable.

## Definition references

[[def-online-decision-protocol]]: the learner plays before receiving current-round feedback.

[[def-adversary-and-feedback-model]]: full-information feedback reveals the current loss function after the choice.

[[def-random-element-and-real-random-variable]]: randomized decisions and gradient inputs are measurable random elements.

[[def-euclidean-inner-product]]: the inner product and norm on $\mathbb R^d$ are the standard Euclidean ones.

[[def-metric-topology]]: open neighborhoods and closed decision sets are taken in the Euclidean metric topology.

[[def-convex-subset-of-euclidean-space]]: a convex decision set contains the segment between any two of its points.

[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity of a loss on its domain.

[[thm-differentiable-convex-functions-and-gradient-inequality]]: on an open convex domain, differentiable convex losses satisfy the gradient inequality.

[[def-jacobian-matrix-and-gradient]]: $\nabla f_t(x_t)$ is the vector of scalar partial derivatives in the standard Euclidean coordinates.

[[def-subgradient-and-subdifferential]]: the nonsmooth subgradient is a vector satisfying the stated supporting inequality on the function's domain.

[[def-countable-choice]]: Countable Choice is assumed only in the nondegenerate branch that invokes projection existence.

[[def-hilbert-space]]: a real Hilbert space is a complete real inner-product space.

[[thm-euclidean-space-complete]]: $\mathbb R^d$ with its Euclidean metric is complete for $d\ge1$.

[[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice, each point of a real Hilbert space has a unique nearest point in a nonempty closed convex set.

[[lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive]]: the metric projection is nonexpansive and therefore continuous.
