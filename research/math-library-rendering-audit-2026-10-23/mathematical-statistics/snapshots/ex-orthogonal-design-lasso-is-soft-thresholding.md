---
id: ex-orthogonal-design-lasso-is-soft-thresholding
kind: example
title: "The orthogonal-design Lasso is coordinatewise soft thresholding"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-gaussian-sequence-sparse-means-model
  - def-lasso-estimator
  - def-soft-thresholding-function
  - lem-lasso-objective-has-minimizer
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 2, Sections 2.3–2.4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

Let $n\ge d\ge1$, let $X\in\mathbb R^{n\times d}$ satisfy $X^TX=nI_d$, and let $Y\in\mathbb R^n$ be any response. Set $Z=X^TY/n$ and use the penalty $\tau>0$ from [[def-lasso-estimator]]. The unique Lasso minimizer has coordinates $\widehat\theta_j=S_\tau(Z_j)$.

In particular, if $Z_0\in\mathbb R^d$ is an observation from the sparse Gaussian sequence model of [[def-gaussian-sequence-sparse-means-model]] and $Y=XZ_0$, then $Z=Z_0$, so the same formula applies coordinatewise to that sequence observation. The square case $n=d$, $X=\sqrt n I_d$, and $Y=\sqrt n Z_0$ is included.

## Facts & Assumptions

**Given:** Integers $n\ge d\ge1$, a design $X\in\mathbb R^{n\times d}$ with $X^TX=nI_d$, a response $Y\in\mathbb R^n$, $Z=X^TY/n$, and $\tau>0$. For the Gaussian specialization, $Z_0$ is an observation from the stated Gaussian sequence model, with its Axiom of Choice hypothesis, and $Y=XZ_0$.

[F1] The Lasso objective is $n^{-1}\|Y-X\theta\|_2^2+2\tau\|\theta\|_1$ ([[def-lasso-estimator]]).

[F2] The Gaussian sequence observation has the form $(Z_0)_j=\theta_j^\ast+\sigma \xi_j/\sqrt n$ with independent standard normal $\xi_j$ ([[def-gaussian-sequence-sparse-means-model]]).

[F3] The soft-threshold map is $S_\tau(z)=z-\tau$ for $z>\tau$, $0$ for $-\tau\le z\le\tau$, and $z+\tau$ for $z<-\tau$ ([[def-soft-thresholding-function]]).

[F4] For every response, the minimizer set of the Lasso objective is nonempty ([[lem-lasso-objective-has-minimizer]]).

## Verification

1.1 Expanding [F1] and using $X^TX=nI_d$ and $X^TY/n=Z$ gives $Q_Y(\theta)=\|Y\|_2^2/n-2Z^T\theta+\|\theta\|_2^2+2\tau\|\theta\|_1$. Hence $Q_Y(\theta)=c(Y)+\sum_{j=1}^d((Z_j-\theta_j)^2+2\tau|\theta_j|)$, where $c(Y)=\|Y\|_2^2/n-\|Z\|_2^2$ is independent of $\theta$. The objective therefore separates into one-coordinate objectives plus a constant. [F1, given, algebra]

1.2 For a scalar $z$, on $\theta\ge0$ completing the square gives $(z-\theta)^2+2\tau\theta=(\theta-(z-\tau))^2+2\tau z-\tau^2$, whose constrained minimum is at $\max\{z-\tau,0\}$. On $\theta\le0$, $(z-\theta)^2-2\tau\theta=(\theta-(z+\tau))^2-2\tau z-\tau^2$, whose constrained minimum is at $\min\{z+\tau,0\}$. If $z>\tau$, the positive candidate has value $2\tau z-\tau^2$ and is below the negative-branch boundary value $z^2$ by $(z-\tau)^2$; if $z<-\tau$, the negative candidate is below the positive-branch boundary value by $(z+\tau)^2$; if $|z|\le\tau$, both constrained minima occur uniquely at $0$. Thus the unique scalar minimizer is $S_\tau(z)$. [F3, algebra, cases]

2.1 By [F4] the minimizer set is nonempty. Since each coordinate term in step 1.1 has the unique minimizer from step 1.2, their vector of minimizers is the unique global minimizer, and its coordinates satisfy $\hat\theta_j=S_\tau(Z_j)$ for every $j$. In the Gaussian specialization, $Y=XZ_0$ gives $Z=X^TXZ_0/n=Z_0$, so the formula applies pointwise to every realization of [F2]. When $n=d$ and $X=\sqrt n I_d$, this response is $Y=\sqrt n Z_0$, recovering the square case. [F1, F2, F4, given, step 1.1, step 1.2, algebra] ∎
