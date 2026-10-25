---
id: lem-finite-second-moment-covariance-matrix-is-well-defined
kind: lemma
title: A finite second moment defines a positive semidefinite covariance matrix
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 1
---

## Statement

If $X\in\mathbb R^p$ is measurable and $\mathbb E\|X\|_2^2<\infty$, then
$\mu=\mathbb E X$ and $\Sigma=\mathbb E[(X-\mu)(X-\mu)^T]$ in
[[def-covariance-matrix-of-a-random-vector]] are well-defined entrywise,
$\Sigma$ is symmetric positive semidefinite, and
$\operatorname{tr}(\Sigma)=\mathbb E\|X-\mu\|_2^2$.

## Facts & Assumptions

**Given:** A finite-dimensional measurable random vector $X$ with
$\mathbb E\|X\|_2^2<\infty$.

[F1] [[def-covariance-matrix-of-a-random-vector]] defines the mean
coordinatewise and covariance entries by
$\mathbb E[(X_j-\mu_j)(X_k-\mu_k)]$.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]:
finite expectation is defined for integrable real random variables.

## Proof

1.1 For each coordinate, $|X_j|\le\|X\|_2$ and $|x|\le(1+x^2)/2$ imply $\mathbb E|X_j|<\infty$, so every $\mu_j$ exists. Also $\mathbb E(X_j-\mu_j)^2<\infty$, since $(X_j-\mu_j)^2\le2X_j^2+2\mu_j^2$. [given, F1, F2, algebra]

2.1 For every pair $j,k$, $2|(X_j-\mu_j)(X_k-\mu_k)|\le(X_j-\mu_j)^2+(X_k-\mu_k)^2$. Thus every covariance entry is integrable; all entries are finite and symmetry follows from commutativity of multiplication. [step 1.1, F1, F2, algebra]

3.1 For $a\in\mathbb R^p$, $a^T\Sigma a=\mathbb E[(a^T(X-\mu))^2]\ge0$, so $\Sigma$ is positive semidefinite. Summing the diagonal entries gives $\operatorname{tr}(\Sigma)=\sum_j\mathbb E(X_j-\mu_j)^2 =\mathbb E\sum_j(X_j-\mu_j)^2=\mathbb E\|X-\mu\|_2^2$; the sum is finite. [step 2.1, F1, F2, algebra] ∎