---
id: alg-randomized-coordinate-proximal-descent
kind: algorithm
title: "Randomized proximal coordinate descent with certified inner solves"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - def-euclidean-inner-product
  - lem-coordinate-block-smoothness-descent-model
justified_by:
  - lem-randomized-coordinate-prox-subproblem-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.7"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, §3.1"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Definition

Let $F(x)=f(x)+\sum_{i=1}^n g_i(x_{B_i})$ on $\mathbb R^d$, where $B_1,\ldots,B_n$ is a disjoint nonempty block partition, $f:\mathbb R^d\to\mathbb R$ is convex and continuously differentiable, and each $g_i:\mathbb R^{|B_i|}\to(-\infty,+\infty]$ is proper, closed and convex. Let $L_i>0$ satisfy the block-gradient Lipschitz bound of [[lem-coordinate-block-smoothness-descent-model]], choose majorizers $M_i\ge L_i$, probabilities $p_i>0$ with $\sum_i p_i=1$, a feasible initial point $x^0$, an update budget $K$, and nonnegative inner tolerances $\epsilon_0,\ldots,\epsilon_{K-1}$.

At update $k$, draw $I_k$ with probabilities $(p_i)$ independently of previous draws. For the selected block $i=I_k$, form
$$q_i^k(u)=\langle\nabla_i f(x^k),u-x^k_{B_i}\rangle+\frac{M_i}{2}\|u-x^k_{B_i}\|_2^2+g_i(u).$$
In exact mode, set $x^{k+1}_{B_i}$ to the global minimizer of $q_i^k$; leave every other block unchanged. In certified-inexact mode, an inner oracle returns $(u_k,\delta_k)$ with a certificate
$$0\le q_i^k(u_k)-\inf_u q_i^k(u)\le\delta_k\le\epsilon_k;$$
accept $u_k$ only when that certificate is available and valid. Otherwise return the last accepted point with status `inner-solve-failure`. The output is the current point, its objective value, the last certified inner gap when available, and status `tolerance-met`, `budget-limit`, or `inner-solve-failure`.

If a proximal-gradient stopping tolerance $\eta\ge0$ is requested, after each accepted update compute the block mapping
$$G_M(x)=\big(M_i[x_{B_i}-\operatorname{prox}_{g_i/M_i}(x_{B_i}-M_i^{-1}\nabla_i f(x))]\big)_{i=1}^n.$$
Here $\operatorname{prox}_{g_i/M_i}$ is the singleton proximal map of [[def-proximal-mapping]]. Stop with `tolerance-met` when $\|G_M(x)\|_2\le\eta$; otherwise stop after at most $K$ accepted updates with `budget-limit`. A finite budget or tolerance status is not an uncomputed objective-gap guarantee. Uniform sampling is $p_i=1/n$; nonuniform choices require the separate probability/step relation proved for the smooth gradient branch on this page.
