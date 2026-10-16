---
id: prop-qa-34-sample-inner-product-estimator
kind: proposition
title: Estimate an inner product from ℓ2-sampling access
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
  - def-finite-probability-space-and-event
  - def-independence-of-finite-random-variables
  - lem-finite-probability-basic-laws
  - thm-chebyshev-inequality
  - thm-finite-union-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: Alan Frieze, Ravi Kannan, and Santosh Vempala, Fast Monte-Carlo Algorithms for Finding Low-Rank Approximations
      url: https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/FriezeKV-lowrank.pdf
---

## Statement

Let $x\in\mathbb R^n$ be nonzero with exact norm, ℓ2 sample access, and entry-query access, and let $y\in\mathbb R^n$ have entry-query access and known norm. For $0<\epsilon\le1$, a positive integer $m\ge16/\epsilon^2$, and a positive integer $r$ with $2^{-r}\le\delta<1$, there is a finite estimator using the lower median of $r$ block means, with $mr$ samples from $x$ and at most $mr$ entry queries to each of $x$ and $y$, such that
$$\mathbb P\left(|\widehat\mu-\langle x,y\rangle|>\epsilon\|x\|_2\|y\|_2\right)\le\delta.$$
If $y=0$, return $0$ without sampling. All sample and entry-query costs are charged.

## Facts & Assumptions

**Given:** The access interfaces, $\epsilon,m,r,\delta$ and vectors in the Statement.

[F1] [[def-qa-34-l2-sample-query-access]]: sampling index $i$ from nonzero $x$ gives probability $x_i^2/\|x\|_2^2$.

[F2] [[thm-chebyshev-inequality]]: for a finite real variable $Z$ and $t>0$, $\mathbb P(|Z-\mathbb E Z|\ge t)\le\operatorname{Var}(Z)/t^2$.

[F3] [[def-independence-of-finite-random-variables]]: independent samples give independent copies of any deterministic function of the sampled index.

[F4] [[thm-finite-union-bound]]: the probability of a finite union is at most the sum of the event probabilities.

## Proof



1.1 If $y=0$, the prescribed output $0$ equals $\langle x,y\rangle$ and has zero error. Suppose henceforth $y\ne0$. For one sample $I\sim D_x$, query $x_I$ and $y_I$ and define $Z=\|x\|_2^2 y_I/x_I$ when $x_I\ne0$ and $Z=0$ when $x_I=0$. Since a zero coordinate has sampling probability zero, [F1] gives $\mathbb E Z=\sum_{i:x_i\ne0}x_i y_i=\langle x,y\rangle$. [given, F1, algebra, cases]

2.1 Directly from the sampling law [F1], $\mathbb E[Z^2]=\|x\|_2^2\sum_{i:x_i\ne0}y_i^2\le\|x\|_2^2\|y\|_2^2$. Hence $\operatorname{Var}(Z)\le\mathbb E[Z^2]\le\|x\|_2^2\|y\|_2^2$. [step 1.1, F1, algebra]

3.1 Partition $mr$ independent samples into $r$ disjoint blocks of size $m$. Let $M_b$ be the mean of $Z$ in block $b$ and define $\widehat\mu$ to be the $\lceil r/2\rceil$-th order statistic of $M_1,\ldots,M_r$ (the lower median). Independence gives each block mean variance at most $\|x\|_2^2\|y\|_2^2/m$. Apply [F2] with the positive threshold $t=\epsilon\|x\|_2\|y\|_2$; each block mean is outside the target interval with probability at most $1/(m\epsilon^2)\le1/16$. [given, step 1.1, step 2.1, F2, F3, construct, algebra]

4.1 If the median $\widehat\mu$ lies outside the target interval, at least $\lceil r/2\rceil$ block means lie outside it. For each fixed subset of that size the probability all its blocks fail is at most $(1/16)^{\lceil r/2\rceil}$ by [F3]; there are at most $2^r$ such subsets. By [F4], the failure probability is at most $2^r(1/16)^{\lceil r/2\rceil}\le2^{-r}\le\delta$. [step 3.1, F3, F4, algebra] ∎
