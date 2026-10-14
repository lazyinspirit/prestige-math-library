---
id: def-bias-and-mean-squared-error
kind: definition
title: "Bias and mean squared error"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-statistic-and-estimator
  - lem-statistic-induces-deterministic-procedure
  - lem-dirac-integral-evaluation
  - def-loss-function-and-risk
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
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
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 5, PDF pp. 29–31"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 2–8"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment: a measurable data space, a parameter-label set,
and a family of probability measures on the data space. Let
$\psi:\Theta\to\mathbb R$ be its real-valued target function (estimand). An estimator
$T:\mathcal X\to\mathbb R$ is a measurable statistic
with the real Borel target ([[def-statistic-and-estimator]]). At a parameter
$\theta$ for which $T$ is integrable under $P_\theta$, its **bias** is
$$\operatorname{Bias}_\theta(T):=\mathbb E_\theta[T]-\psi(\theta).$$

Its **mean squared error** (MSE) is the extended nonnegative number
$$\operatorname{MSE}_\theta(T):=\mathbb E_\theta[(T-\psi(\theta))^2]\in[0,+\infty].$$
This is the risk of the deterministic rule induced by $T$ under squared-error
loss $L(\theta,a)=(a-\psi(\theta))^2$: its Dirac kernel is constructed in
[[lem-statistic-induces-deterministic-procedure]], and the risk supplier's
integral formula reduces to the displayed expectation when the action is
$T(x)$ by [[lem-dirac-integral-evaluation]]
([[def-loss-function-and-risk]]). For each fixed $\theta$, this loss is Borel
in the real action $a$; no measurable structure on $\Theta$ or measurability
of $\psi$ is required. The expectation convention is
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. If $T$ is
square-integrable under $P_\theta$, then its variance is defined by
[[def-moments-variance-and-covariance]] and this MSE is finite. Bias is not
defined at parameters where $T$ is not integrable.
