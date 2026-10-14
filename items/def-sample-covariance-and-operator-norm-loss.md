---
id: def-sample-covariance-and-operator-norm-loss
kind: definition
title: "Sample covariance estimators and squared operator loss"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 4, Section 4.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Definition

Let $n,p\ge1$ be integers and let $X_1,\ldots,X_n$ be independent identically distributed random vectors in $\mathbb R^p$ with finite second moments, mean $\mu=\mathbb E X_1$, and covariance matrix
$$\Sigma=\mathbb E[(X_1-\mu)(X_1-\mu)^{\mathsf T}].$$
The oracle-centered sample covariance and the sample-centered covariance are respectively
$$\widehat\Sigma_\mu=\frac1n\sum_{i=1}^n(X_i-\mu)(X_i-\mu)^{\mathsf T},\qquad \widehat\Sigma^\ast=\frac1n\sum_{i=1}^n(X_i-\bar X)(X_i-\bar X)^{\mathsf T},\quad \bar X=\frac1n\sum_{i=1}^nX_i.$$
For a matrix estimate $A$, squared operator loss is $\|A-\Sigma\|_{\mathrm{op}}^2$, with the operator norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. This definition distinguishes the known-mean raw second moment from the estimator that removes an unknown mean.
