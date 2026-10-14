---
id: def-minimax-squared-operator-risk
kind: definition
title: "Minimax squared operator risk"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-probability-measure
  - def-product-measure-on-sigma-finite-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-independent-random-elements-have-product-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 5, Section 5.1"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 2"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Definition

Let $\mathcal Q$ be a family of probability laws on a common measurable sample space $(\mathcal Z,\mathcal C)$, and let $\Sigma(Q)\in\mathbb R^{p\times p}$ be a specified matrix parameter for each $Q\in\mathcal Q$, with fixed $p\ge1$. Give $\mathbb R^{p\times p}$ its usual Euclidean topology and Borel sigma-algebra. An estimator is a measurable map $\widehat\Sigma:(\mathcal Z,\mathcal C)\to(\mathbb R^{p\times p},\mathcal B(\mathbb R^{p\times p}))$. Define its squared operator risk at $Q$ and the minimax risk over $\mathcal Q$ by
$$R_Q(\widehat\Sigma)=\mathbb E_Q\|\widehat\Sigma-\Sigma(Q)\|_{\mathrm{op}}^2,\qquad\mathfrak R(\mathcal Q)=\inf_{\widehat\Sigma}\sup_{Q\in\mathcal Q}R_Q(\widehat\Sigma).$$

For a family $\mathcal P$ of one-observation laws on a common measurable space $(\mathcal X,\mathcal A)$, specify a matrix parameter $\Sigma(P)\in\mathbb R^{p\times p}$ for every $P\in\mathcal P$, with fixed $p\ge1$. For an integer $n\ge1$, the $n$-observation experiment observes $n$ independent observations, each with law $P$. Its sample space is $(\mathcal X^n,\mathcal A^{\otimes n})$ and its sample law is the finite product probability measure $P^{\otimes n}$; this is the joint law of the IID family in [[def-identically-distributed-and-iid-random-variables]] and [[def-independent-random-elements]]. For estimators $\widehat\Sigma:(\mathcal X^n,\mathcal A^{\otimes n})\to(\mathbb R^{p\times p},\mathcal B(\mathbb R^{p\times p}))$, define
$$R_{n,P}(\widehat\Sigma)=\mathbb E_{P^{\otimes n}}\|\widehat\Sigma-\Sigma(P)\|_{\mathrm{op}}^2,\qquad\mathfrak R_n(\mathcal P)=\inf_{\widehat\Sigma}\sup_{P\in\mathcal P}R_{n,P}(\widehat\Sigma).$$

An infinite expectation is allowed, so every measurable estimator has an extended nonnegative risk. Suprema of risks are taken in the ordered range $[0,\infty]$, with $\sup\varnothing:=0$, its least element. Thus when $\mathcal Q$ or $\mathcal P$ is empty the corresponding supremum is zero for every estimator, and its minimax risk is zero. The estimator class is nonempty because the constant zero matrix map is measurable. The operator norm is from [[def-operator-norm-on-a-finite-dimensional-inner-product-space]].
