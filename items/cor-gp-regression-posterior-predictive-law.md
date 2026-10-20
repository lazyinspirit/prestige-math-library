---
id: cor-gp-regression-posterior-predictive-law
kind: corollary
title: Finite Gaussian-process regression posterior and predictive law
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gaussian-process
  - def-gaussian-process-regression-observation-model
  - lem-gp-regression-observed-covariance-invertibility
  - thm-finite-gaussian-process-posterior-and-predictive-laws
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
justified_by: []
proof_strategy: direct
axiom_use: AC is used to construct the arbitrary-index Gaussian-process prior and to invoke the finite Gaussian-conditioning interface; the matrix application is choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2 §2.2
      url: https://gaussianprocess.org/gpml/chapters/RW2.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
---

## Statement

Assume AC. Let $\mathcal X$ be a set, $m:\mathcal X\to\mathbb R$, and
$k:\mathcal X\times\mathcal X\to\mathbb R$ a symmetric kernel whose every
finite Gram quadratic form on points of $\mathcal X$ is nonnegative. Let
$f=(f_t)_{t\in\mathcal X}$ be the canonical Gaussian process with
$m(t)=\mathbb E[f_t]$ and
$k(s,t)=\mathbb E[(f_s-m(s))(f_t-m(t))]$. For finite ordered lists
$A=(a_i)_{i=1}^r$ and $B=(b_j)_{j=1}^s$ in $\mathcal X$, set
$K_{AB}=(k(a_i,b_j))$; repetitions are allowed. Take
$X=(x_i)_{i=1}^n\in\mathcal X^n$ and
$X_*=(x_j^*)_{j=1}^p\in\mathcal X^p$ with $n,p\ge1$, and write
$m_X=(m(x_i))$, $m_*=(m(x_j^*))$, $f_X=(f_{x_i})$, and
$f_*=(f_{x_j^*})$. Let $\varepsilon\sim N_n(0,R)$ be independent of $f$,
where $R$ is symmetric positive semidefinite, and set $Y=f_X+\varepsilon$ and
$A_X=K_{XX}+R$. Suppose $A_X$ is positive definite. Then for every
$y\in\mathbb R^n$ the conditional law of $f_*$ given $Y=y$ has mean
$$m_*+K_{*X}A_X^{-1}(y-m_X)$$
and covariance
$$K_{**}-K_{*X}A_X^{-1}K_{X*}.$$
This covariance is positive semidefinite and may be singular. If
$\eta_*\sim N_p(0,R_*)$ is independent of the pair $(f,\varepsilon)$, where
$R_*$ is symmetric positive semidefinite, then the conditional law of
$f_*+\eta_*$ has the same mean and covariance with $R_*$ added. The displayed
kernel is defined for every $y$, although regular conditional versions are
determined only $P_Y$-almost surely.

## Statement references

[Rasmussen and Williams, GPML, Chapter 2 §2.2, equations (2.18)–(2.24), printed pp. 15–18](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

[Bishop, PRML, §6.4.2, equations (6.61)–(6.68), printed pp. 306–309](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

## Facts & Assumptions

**Given:** AC; a set $\mathcal X$, mean $m$, symmetric positive-semidefinite kernel $k$; finite ordered lists $X$ and $X_*$ of positive lengths; observation noise $\varepsilon\sim N_n(0,R)$ independent of the process with $R\succeq0$; optional test noise $\eta_*\sim N_p(0,R_*)$ independent of the pair $(f,\varepsilon)$ with $R_*\succeq0$; and $A_X=K_{XX}+R\succ0$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] Under AC, a mean function and symmetric positive-semidefinite kernel on an arbitrary index set determine a unique canonical process on the cylinder sigma-algebra with the stated finite Gaussian marginals; the construction supplies no sample-path continuity. [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

[F2] A real Gaussian process has multivariate-normal finite evaluation vectors, including repeated indices and singular covariance matrices. [[def-gaussian-process]]

[F3] For finite lists, independent Gaussian observation noise with PSD covariance and positive-definite observed covariance gives the stated all-$y$ conditional Gaussian kernel; its predictive covariance may be singular, and Gaussian test noise independent of the pair $(f,\varepsilon)$ adds its covariance. [[thm-finite-gaussian-process-posterior-and-predictive-laws]]

[F4] In this model, $A_X=K_{XX}+R$ is invertible exactly when it is positive definite. [[lem-gp-regression-observed-covariance-invertibility]]

## Proof

**Given:** The assumptions in the Statement.

1.1 By [A1] and [F1], the specified mean and kernel give the canonical cylinder-space Gaussian process. By [F2], its finite evaluations on $X$ and $X_*$ are jointly multivariate normal, including when either list has repetitions or a covariance block is singular. [A1, F1, F2, given, construct]

2.1 In the notation of the finite model, the observed block in [F3] is $C=K_{XX}+R=A_X$. By the hypothesis and [F4], $C\succ0$, so every inverse required by [F3] exists. Under the optional noisy-prediction hypothesis, $\eta_*$ is independent of the pair $(f,\varepsilon)$, exactly the joint-independence premise for [F3]'s Gaussian stack. Applying [F3] with these lists, means, noise covariance, and observed block gives the displayed conditional mean and covariance; its statement also gives positive semidefiniteness, possible singularity, the all-$y$ version, and the test-noise covariance addition. [A1, F3, F4, given, step 1.1] ∎
