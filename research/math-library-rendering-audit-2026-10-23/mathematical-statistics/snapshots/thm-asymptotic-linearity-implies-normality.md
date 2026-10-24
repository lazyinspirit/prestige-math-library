---
id: thm-asymptotic-linearity-implies-normality
kind: theorem
title: Asymptotic linearity implies asymptotic normality
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-asymptotically-linear-estimator-and-influence-function
  - thm-multivariate-iid-central-limit-theorem
  - thm-continuous-mapping-theorem
  - thm-slutsky-for-real-random-variables
  - thm-cramer-wold-device
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lecture 2, §2.9 (Springer, 2002)
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §§3–4 (2017)
      url: https://arxiv.org/pdf/1709.06418
---

## Statement

Assume the Axiom of Choice. Let $X_1,X_2,\ldots$ be iid with law $P$, let $k<\infty$, and let $\widehat\psi_n$ estimate $\psi(P)\in\mathbb R^k$. If it is asymptotically linear at $P$ with influence function $\varphi\in L^2_0(P)^k$, then

$$\sqrt n\{\widehat\psi_n-\psi(P)\}\Rightarrow N_k(0,\Sigma_\varphi),\qquad \Sigma_\varphi=P[\varphi\varphi^T].$$

The covariance may be singular. This is a distributional limit only; the theorem asserts neither local regularity nor estimator attainment of an efficiency bound.

## Facts & Assumptions

**Given:** The iid experiment, the finite-dimensional estimator and target, asymptotic linearity with $\varphi\in L^2_0(P)^k$, and AC.

[F1] [[def-asymptotically-linear-estimator-and-influence-function]]: $\widehat\psi_n-\psi(P)=(P_n-P)\varphi+o_P(n^{-1/2})$, where $P\varphi=0$ and $P\|\varphi\|^2<\infty$.

[F2] [[thm-multivariate-iid-central-limit-theorem]]: under AC, normalized sums of iid finite-second-moment vectors converge to the centered multivariate normal with their covariance, including singular covariance.

[F3] [[thm-continuous-mapping-theorem]]: continuous linear maps preserve convergence in distribution.

[F4] [[thm-slutsky-for-real-random-variables]]: adding a real random variable converging to zero in probability preserves a real distributional limit.

[F5] [[thm-cramer-wold-device]]: convergence of every one-dimensional projection to the corresponding projection of a specified Borel probability law implies vector convergence in distribution; this use assumes AC.

[A1] [[def-axiom-of-choice]]: AC is assumed by [F2] and [F5].

## Proof

**Given:** AC, iid $X_i\sim P$, $k<\infty$, and an estimator satisfying [F1].

1.1 Put $Z_n=n^{-1/2}\sum_{i=1}^n\varphi(X_i)$ and $R_n=\sqrt n\{\widehat\psi_n-\psi(P)\}-Z_n$. By [F1], $R_n\to0$ in probability. The vectors $\varphi(X_i)$ are iid, centered, and have finite second moment, so [F2] gives $Z_n\Rightarrow Z\sim N_k(0,\Sigma_\varphi)$. The covariance is positive semidefinite by $a^T\Sigma_\varphi a=P[(a^T\varphi)^2]\ge0$ for every $a\in\mathbb R^k$. [A1, F1, F2, given, algebra]

2.1 Fix any $a\in\mathbb R^k$. By [F3], $a^TZ_n\Rightarrow a^TZ$. Also $|a^TR_n|\le\|a\|\|R_n\|$, so $a^TR_n\to0$ in probability. Apply [F4] to obtain $a^T(Z_n+R_n)\Rightarrow a^TZ$. [F3, F4, step 1.1, given]

3.1 Step 2.1 holds for every $a$, and $Z$ is the specified Borel Gaussian law from step 1.1. [F5] therefore gives $Z_n+R_n\Rightarrow Z$, which is the asserted limit. No nonsingularity of $\Sigma_\varphi$ is used. [A1, F5, step 1.1, step 2.1] ∎

