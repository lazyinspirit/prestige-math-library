---
id: def-unbiased-estimator-and-umvu
kind: definition
title: "Unbiased estimators and UMVU estimators"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-statistic-and-estimator
  - def-bias-and-mean-squared-error
  - def-moments-variance-and-covariance
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
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Definition 5.2, PDF pp. 29–30"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Jun Shao, STAT 709 Lecture 15: UMVUE, PDF pp. 1–3"
      url: "https://pages.cs.wisc.edu/~shao/stat709/stat709-15.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 2–8"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
---

## Definition

Let $T$ be an estimator of a real estimand $\psi$ in a statistical experiment.
It is **unbiased** if it is integrable under every $P_\theta$ and
$$\mathbb E_\theta[T]=\psi(\theta)\qquad\text{for every }\theta\in\Theta.$$
Equivalently, its bias from [[def-bias-and-mean-squared-error]] is zero at every
parameter. It is a **finite-variance unbiased estimator** if it is unbiased
and square-integrable under every $P_\theta$.

A finite-variance unbiased estimator $T$ is **uniformly minimum-variance
unbiased** (UMVU) for $\psi$ if, for every $\theta\in\Theta$ and every other
finite-variance unbiased estimator $U$ of the same estimand,
$$\operatorname{Var}_\theta(T)\leq\operatorname{Var}_\theta(U).$$
The same estimator must satisfy these inequalities throughout the parameter
space; the definition asserts no existence of a UMVU estimator. Variance has
the meaning in [[def-moments-variance-and-covariance]].
