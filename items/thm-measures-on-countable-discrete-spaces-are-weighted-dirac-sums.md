---
id: thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
kind: theorem
title: "Every measure on a countable discrete space is its weighted sum of Dirac measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nonnegative-weighted-sums-of-measures, def-nonnegative-weighted-sum-of-measures, prop-dirac-measure-is-a-probability-measure, def-countable, def-measure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.25"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $X$ be at most countable and equip it with $\mathcal P(X)$. Every measure $\mu$ on this discrete measurable space is determined by the weights $w_x:=\mu(\{x\})$ and satisfies

$$\mu(E)=\sum_{x\in E}w_x,\qquad \mu=\sum_{x\in X}w_x\delta_x.$$

For finite $X$ this is a finite sum over a bijective finite listing; for countably infinite $X$ it is a series over a bijection $\mathbb N\to X$. No point is repeated. Each coefficient, including $+\infty$, is uniquely forced by $\mu$.

## Facts & Assumptions

**Given:** An at most countable set $X$ and a measure $\mu$ on $(X,\mathcal P(X))$.

[L1] An at most countable set is finite or is in bijection with $\mathbb N$ ([[def-countable]]).

[L2] A measure is countably additive on disjoint measurable sequences ([[def-measure]]).

[L3] Dirac set functions are probability measures ([[prop-dirac-measure-is-a-probability-measure]]), and nonnegative finite and countable weighted sums of measures are measures ([[def-nonnegative-weighted-sum-of-measures]], [[thm-nonnegative-weighted-sums-of-measures]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $\mu$ is the zero measure and the asserted expression is the empty weighted sum. [given, L2, L3]

1.2 If $X$ is finite and nonempty, choose a bijection $e:n\to X$ for some $n\ge1$. Every $E\subseteq X$ is the finite disjoint union of the singletons $\{e(i)\}$ with $e(i)\in E$, so $\mu(E)=\sum_{i<n,\ e(i)\in E}\mu(\{e(i)\})$. [given, L1, L2]

1.3 If $X$ is countably infinite, choose a bijection $e:\mathbb N\to X$. Every $E\subseteq X$ is the disjoint union of the sequence whose $k$-th term is $\{e(k)\}$ when $e(k)\in E$ and $\varnothing$ otherwise, so $\mu(E)=\sum_{k:e(k)\in E}\mu(\{e(k)\})$. [given, L1, L2]

1.4 Evaluating any asserted representation at the singleton $\{x\}$ leaves only the Dirac term at $x$, so its coefficient must be $\mu(\{x\})$. [given, L3]

2.1 In the finite case, the weighted Dirac sum with coefficients $w_{e(i)}=\mu(\{e(i)\})$ has the value computed in step 1.2 on every $E$; the explicit positive-infinity branch gives $0$ off $e(i)$ and $+\infty$ on sets containing it. [step 1.2, L3]

2.2 In the countably infinite case, the countable weighted Dirac sum has the value computed in step 1.3 on every $E$, with the same interpretation of infinite coefficients. [step 1.3, L3]

3.1 Steps 1.1, 2.1 and 2.2 prove the representation in the empty, finite nonempty, and countably infinite cases, and step 1.4 proves uniqueness of every coefficient. [step 1.1, step 2.1, step 2.2, step 1.4, L1] ∎
