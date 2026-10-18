---
id: lem-periodic-cell-poincare
kind: lemma
title: Mean-zero Poincare inequality on the periodic cell
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-periodic-zero-mean-cell-space
  - def-countable-choice
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-holder-inequality-for-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.2.2, PDF pp. 6–7: Poincare inequality on the periodic mean-zero space."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.2, printed pp. 9–13: coercivity on periodic corrector spaces."
verification:
  precheck: pass
---
## Statement

Let $Y=(0,1)^d$ and $V_\#$ be the mean-zero periodic $H^1$ space of [[def-periodic-zero-mean-cell-space]]. Then every $v\in V_\#$ satisfies
$$\|v\|_{L^2(Y)}\le\sqrt d\,\|\nabla v\|_{L^2(Y)},$$
and every $v\in H^1_\#(Y)$ satisfies $\int_Y\nabla v=0$. Consequently $\|\nabla v\|_2$ is a complete norm on $V_\#$ equivalent to its inherited $H^1$ norm.

## Facts & Assumptions

**Given:** $Y=(0,1)^d$, the closure definition of $H^1_\#(Y)$ and $V_\#$, Countable Choice, coordinatewise FTC, integral Cauchy--Schwarz, and Tonelli.

[F1] [[def-periodic-zero-mean-cell-space]]: $H^1_\#(Y)$ is the $H^1$ closure of smooth periodic functions; $V_\#$ is its closed subspace of functions with integral zero.

[F2] [[cor-vector-valued-ftc-and-lipschitz-bound]]: the one-dimensional FTC applies to each smooth coordinate slice.

[F3] [[thm-holder-inequality-for-integrals]]: Cauchy--Schwarz bounds an integral over an interval of length at most one.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the unit-cube integrals can be evaluated by iterated integration.

[F5] [[def-countable-choice]]: Countable Choice is the declared background for the Sobolev closure conventions.

## Proof




1.1 For smooth periodic $v$, opposite-face values agree, so integrating each coordinate derivative over $Y$ and applying the one-dimensional FTC [F2] gives $\int_Y\partial_i v=0$. Approximate an arbitrary $v\in H^1_\#(Y)$ in $H^1$ by smooth periodic functions using [F1]; convergence of the derivatives in $L^2(Y)$ implies convergence of their integrals by [F3] and $|Y|=1$. Thus every component of $\int_Y\nabla v$ is zero. [F2, F1, F3, algebra]

1.2 For smooth periodic $v$, write $m=\int_Yv(y)\,dy$. For $x,y\in Y$, telescope from $y$ to $x$ one coordinate at a time. The $i$th difference is the integral of $\partial_i v$ along a segment of length at most one, with the earlier coordinates fixed at $x$ and later coordinates fixed at $y$. Cauchy--Schwarz [F3] bounds its square by the integral of $|\partial_i v|^2$ along the full unit coordinate interval. The inequality $|\sum_{i=1}^d b_i|^2\le d\sum_i|b_i|^2$ and Tonelli [F4], integrating in $x$ and $y$, then give $\int_Y\int_Y|v(x)-v(y)|^2\,dy\,dx\le d\sum_{i=1}^d\|\partial_i v\|_2^2.$ For each $x$, Jensen's inequality gives $|v(x)-m|^2=|\int_Y(v(x)-v(y))dy|^2\le\int_Y|v(x)-v(y)|^2dy$. Integrating in $x$ proves the stated inequality for smooth periodic mean-zero $v$. [F3, F4, algebra]

2.1 Approximate any $v\in V_\#$ in $H^1$ by smooth periodic $v_n$ using Countable Choice [F5]. Their means converge to zero by Cauchy--Schwarz, so $v_n-\int_Yv_n$ are smooth periodic mean-zero functions converging to $v$ in $H^1$. Passing to the limit in step 1.2 proves the inequality on $V_\#$. The inherited $H^1$ norm is complete because $V_\#$ is closed in $H^1_\#$; the inequality shows the gradient norm and $H^1$ norm are equivalent, hence the gradient norm is complete too. [F5, step 1.2, F1, F3, algebra] ∎
