---
id: def-m-estimator
kind: definition
title: "M-estimators"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-borel-sigma-algebra, def-estimator-sequence-in-iid-experiments, def-identically-distributed-and-iid-random-variables, def-metric-space, def-op-and-little-op-stochastic-bounds, def-probability-measure]
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
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, PDF pp. 2–8"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, Lecture 5 §5.3, PDF pp. 54–56"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
---

## Definition

Let $P$ be a probability measure on a measurable observation space $(\mathcal X,\mathcal A)$, and let $X_1,X_2,\ldots$ be IID with law $P$; IID means a common law and mutual independence of the whole family ([[def-probability-measure]], [[def-identically-distributed-and-iid-random-variables]]). Let $(\Theta,d)$ be a metric candidate space with its Borel sigma-algebra ([[def-metric-space]], [[def-borel-sigma-algebra]]). For each $\theta\in\Theta$, let $m_\theta:\mathcal X\to\mathbb R$ be measurable and assume $P|m_\theta|<\infty$. Define
$$P_nm_\theta=\frac1n\sum_{i=1}^n m_\theta(X_i),\qquad Pm_\theta=\int m_\theta\,dP.$$

A measurable estimator sequence $\hat\theta_n$ into the Borel target $\Theta$ is an **M-estimator** if it maximizes or minimizes $\theta\mapsto P_nm_\theta$; measurability is as in [[def-estimator-sequence-in-iid-experiments]]. It is an exact maximizer when $P_nm_{\hat\theta_n}=\sup_{\theta\in\Theta}P_nm_\theta$, and an $o_P(1)$-approximate maximizer when the finite measurable gap $\sup_{\theta\in\Theta}P_nm_\theta-P_nm_{\hat\theta_n}$ is $o_P(1)$. For minimization use the gap $P_nm_{\hat\theta_n}-\inf_{\theta\in\Theta}P_nm_\theta$. The notation $o_P(1)$ is that of [[def-op-and-little-op-stochastic-bounds]].

The maximizing and minimizing forms are both included; replacing $m_\theta$ by $-m_\theta$ converts one to the other. This definition does not assert that a maximizer exists, nor that the population criterion $Pm_\theta$ has a unique maximizer. Whenever a random candidate is substituted into the empirical or population criterion, assume that evaluation is measurable and finite.
