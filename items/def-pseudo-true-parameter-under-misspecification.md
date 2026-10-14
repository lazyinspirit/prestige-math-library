---
id: def-pseudo-true-parameter-under-misspecification
kind: definition
title: "Pseudo-true parameter under misspecification"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
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
    - title: "Yen-Chi Chen, UW STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
---

## Definition

Let $\mathcal X$ be a set, let $\mathcal A$ be a sigma-algebra on it, let $\Theta\subseteq\mathbb R^d$ be nonempty, and let $\mu$ be a fixed sigma-finite measure on $(\mathcal X,\mathcal A)$. Suppose $(p_\theta)_{\theta\in\Theta}$ is a specified family of nonnegative measurable densities with $\int p_\theta\,d\mu=1$. Let $P$ be the actual data probability measure; it need not equal any model law $p_\theta\mu$ ([[def-probability-measure]]). Assume $p_\theta(X)>0$ $P$-almost surely and $\ell_\theta(X):=\log p_\theta(X)$ is integrable under $P$ for every parameter considered. Expectation means integration against $P$ ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

The population log-likelihood criterion is $M_P(\theta):=\mathbb E_P[\ell_\theta(X)]$. A **pseudo-true parameter** is any maximizer $\theta^*\in\operatorname*{argmax}_{\theta\in\Theta}M_P(\theta)$. It is unique when this argmax set is the singleton $\{\theta^*\}$. The model is **misspecified relative to $P$** when $P\ne p_\theta\mu$ for every $\theta\in\Theta$. This definition does not assert existence, uniqueness, interiority, or separation of the maximizer; those are theorem hypotheses when needed.
