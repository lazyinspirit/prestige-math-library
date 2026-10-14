---
id: def-covariance-matrix-of-a-random-vector
kind: definition
title: Covariance matrix of a finite-dimensional random vector
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-inner-product-norm
justified_by:
  - lem-finite-second-moment-covariance-matrix-is-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 0
---

## Definition

Let $X=(X_1,\ldots,X_p)$ be a measurable random vector in $\mathbb R^p$,
where $p\ge1$ is finite, and assume $\mathbb E\|X\|_2^2<\infty$. Define
the mean coordinatewise by $\mu_j=\mathbb E X_j$ and define the covariance
matrix by
$$\Sigma:=\mathbb E[(X-\mu)(X-\mu)^T],$$
where each entry is the expectation of the corresponding real random
variable. Write $\operatorname{tr}(\Sigma)=\sum_{j=1}^p\Sigma_{jj}$.

The well-definedness lemma proves these expectations are finite,
$\Sigma$ is symmetric positive semidefinite, and
$\operatorname{tr}(\Sigma)=\mathbb E\|X-\mu\|_2^2$.

