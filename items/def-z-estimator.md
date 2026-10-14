---
id: def-z-estimator
kind: definition
title: "Z-estimators"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-borel-sigma-algebra, def-estimator-sequence-in-iid-experiments, def-identically-distributed-and-iid-random-variables, def-metric-space, def-op-and-little-op-stochastic-bounds, thm-all-norms-on-rn-are-equivalent, def-probability-measure]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, PDF pp. 2–3 and 8–10"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, Lecture 5 §5.3, PDF pp. 55–56"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
---

## Definition

Let $P$ be a probability measure on $(\mathcal X,\mathcal A)$, let $X_1,X_2,\ldots$ be IID with law $P$ ([[def-probability-measure]], [[def-identically-distributed-and-iid-random-variables]]), and let $(\Theta,d)$ be a metric candidate space with its Borel sigma-algebra ([[def-metric-space]], [[def-borel-sigma-algebra]]). Fix a finite integer $q\ge1$ and a norm on $\mathbb R^q$. For each $\theta\in\Theta$, let $\psi_\theta:\mathcal X\to\mathbb R^q$ be measurable with $P\|\psi_\theta\|<\infty$. Define
$$\Psi_n(\theta)=P_n\psi_\theta=\frac1n\sum_{i=1}^n\psi_\theta(X_i),\qquad \Psi(\theta)=P\psi_\theta.$$

A measurable estimator sequence $\hat\theta_n$ into the Borel target $\Theta$ is a **Z-estimator** if it is an exact or $o_P(1)$-approximate root: $\Psi_n(\hat\theta_n)=0$ for every $n$, or $\|\Psi_n(\hat\theta_n)\|=o_P(1)$. Measurability is as in [[def-estimator-sequence-in-iid-experiments]], and $o_P(1)$ has the convention of [[def-op-and-little-op-stochastic-bounds]]. Whenever a random candidate is substituted into an estimating equation, assume the evaluation is measurable.

Because $q\ge1$ is finite, [[thm-all-norms-on-rn-are-equivalent]] gives constants $c,C>0$ with $c\|v\|_2\le\|v\|\le C\|v\|_2$ for every $v\in\mathbb R^q$. Thus for every $\mathbb R^q$-valued sequence, convergence of the chosen-norm tails to zero is equivalent to the Euclidean $o_P(1)$ convention in [[def-op-and-little-op-stochastic-bounds]].

This definition does not infer a Z-estimating equation from an M-criterion. Differentiating an M-criterion is justified only under additional differentiability and interior-point hypotheses; a nonsmooth criterion need not have a score equation.
