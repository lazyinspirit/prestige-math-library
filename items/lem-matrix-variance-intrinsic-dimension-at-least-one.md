---
id: lem-matrix-variance-intrinsic-dimension-at-least-one
kind: lemma
title: The covariance matrix variance ratio is at least one
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-matrix-variance-of-a-random-vector
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: No choice principle is used; one top eigenvector is supplied by the finite-dimensional spectral theorem.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §2"
      url: "https://arxiv.org/pdf/1708.00502"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 2
---

## Statement

Let $X\in\mathbb R^p$ have finite fourth moment, mean $\mu$, nonzero
covariance $\Sigma$, and matrix variance $\sigma_0^2$ as in
[[def-covariance-matrix-of-a-random-vector]] and
[[def-matrix-variance-of-a-random-vector]]. Then
$$d:=\frac{\sigma_0^2}{\|\Sigma\|_{\rm op}^2}\ge1.$$

## Facts & Assumptions

**Given:** A finite-dimensional random vector $X$ with
$\mathbb E\|X-\mu\|_2^4<\infty$ and nonzero covariance $\Sigma$.

[F1] [[def-covariance-matrix-of-a-random-vector]]: $\Sigma$ is symmetric
positive semidefinite and $\mathbb E[(v^T(X-\mu))^2]=v^T\Sigma v$.

[F2] [[def-matrix-variance-of-a-random-vector]]:
$\sigma_0^2=\|\mathbb E[\|X-\mu\|_2^2(X-\mu)(X-\mu)^T]\|_{\rm op}$.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a
nonzero positive semidefinite matrix has a unit eigenvector for its largest
eigenvalue, equal to its operator norm.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for square-integrable
real random variables $W$ and $1$, $(\mathbb EW)^2\le\mathbb EW^2$.

## Proof

1.1 Put $Y=X-\mu$ and choose a unit top eigenvector $v$ of $\Sigma$, with $\lambda=v^T\Sigma v=\|\Sigma\|_{\rm op}>0$ by [F1] and [F3]. The positive semidefinite matrix inside [F2] has operator norm at least its quadratic form at $v$, so $$\sigma_0^2\ge\mathbb E[\|Y\|_2^2(v^TY)^2] \ge\mathbb E[(v^TY)^4].$$ The second inequality follows pointwise from $\|Y\|_2^2\ge(v^TY)^2$. [F1, F2, F3, algebra]

2.1 The finite fourth moment makes $W=v^TY$ square-integrable. By [F4], $\mathbb E[W^4]\ge(\mathbb E[W^2])^2=\lambda^2$. Hence $\sigma_0^2\ge\|\Sigma\|_{\rm op}^2$, and division by this positive quantity proves $d\ge1$. [F1, F4, step 1.1, algebra] ∎