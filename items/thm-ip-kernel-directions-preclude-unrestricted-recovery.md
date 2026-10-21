---
id: thm-ip-kernel-directions-preclude-unrestricted-recovery
kind: theorem
title: Kernel directions preclude unrestricted recovery
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-identifiability-and-stability-modulus
  - def-metric-space
  - lem-metric-nonnegativity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3 and Chapter 4 §4.1"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
---

## Statement

Let $(X,d_X)$, $(Y,d_Y)$, and $(Q,d_Q)$ be metric spaces, let $U\subseteq X$ be a nonempty admissible truth class, let $F:U\to Y$ be a forward map, and let $q:U\to Q$ assign each truth its target class. Let $x_0,x_1\in U$, let $\delta\ge0$, and suppose a single datum $y\in Y$ satisfies

$$d_Y(y,F(x_0))\le\delta\quad\text{and}\quad d_Y(y,F(x_1))\le\delta.$$

For every deterministic data-only estimator, meaning every function $\widehat q:Y\to Q$, the two target-class losses at that datum satisfy

$$\max\{d_Q(\widehat q(y),q(x_0)),d_Q(\widehat q(y),q(x_1))\}\ge\frac12d_Q(q(x_0),q(x_1)).$$

In particular, if $F(x_0)=F(x_1)$ but $q(x_0)\ne q(x_1)$, no data-only estimator exactly recovers both truths. The quantitative bound also holds whenever the radius-$\delta$ data balls around the two forward data share the observed datum $y$.

## Statement references

[[def-ip-forward-map-and-solution-classes|Inverse-problem model and target-class loss]]

[[def-ip-identifiability-and-stability-modulus|Identifiability and deterministic estimators]]

[[def-metric-space|Metric triangle inequality]]

[[lem-metric-nonnegativity|Nonnegative metric distances]]

[Christian Clason, Regularization of Inverse Problems, Chapter 3 and Chapter 4 §4.1](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, and $(Q,d_Q)$; a nonempty set $U\subseteq X$; a map $F:U\to Y$; a target-class map $q:U\to Q$; truths $x_0,x_1\in U$; a radius $\delta\ge0$; a datum $y\in Y$ within distance $\delta$ of both $F(x_0)$ and $F(x_1)$; and an estimator $\widehat q:Y\to Q$.

[F1] [[def-ip-forward-map-and-solution-classes]]: the recovery target has a metric $d_Q$, and $q(x)$ is the target class of truth $x$.

[F2] [[def-ip-identifiability-and-stability-modulus]]: a deterministic data-only estimator is a function $Y\to Q$ and exact recovery requires $\widehat q(F(x))=q(x)$ for every admissible truth.

[F3] [[def-metric-space]]: the target metric satisfies separation and the triangle inequality.

[F4] [[lem-metric-nonnegativity]]: every metric distance is nonnegative.

## Proof

1.1 Put $z:=\widehat q(y)\in Q$. Since the estimator is a function evaluated at the single datum $y$, this is the same estimate for both truths. [given, F2]

1.2 By the triangle inequality for $d_Q$,
$$d_Q(q(x_0),q(x_1))\le d_Q(q(x_0),z)+d_Q(z,q(x_1)).$$ [F1, F3]

2.1 Let $M$ be the maximum of the two losses in the statement. Both losses are nonnegative by [F4] and each summand in step 1.2 is at most $M$, so $d_Q(q(x_0),q(x_1))\le2M$ and $M\ge\tfrac12d_Q(q(x_0),q(x_1))$. [step 1.2, F4, algebra]

3.1 If $F(x_0)=F(x_1)$ and their target classes differ, metric separation and nonnegativity give $d_Q(q(x_0),q(x_1))>0$; choosing $y=F(x_0)$ and $\delta=0$ satisfies the hypotheses, so step 2.1 rules out exact recovery of both. For a shared noisy datum the same estimator output from step 1.1 yields the same bound. [given, F2, F3, F4, step 1.1, step 2.1] ∎
