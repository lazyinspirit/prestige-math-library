---
id: ex-sample-variance-delta-method
kind: example
title: "Sample variance from a multivariate delta method"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - thm-first-and-second-order-delta-method-for-random-vectors
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-multivariate-iid-central-limit-theorem
  - def-multivariate-normal-law
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 2, sample-variance setup and covariance, PDF p. 3 (printed final variance corrected here)"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, delta method, PDF pp. 10–12"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
---

## Example

Assume AC. Let $X_1,X_2,\ldots$ be iid real random variables with $\mathbb E|X_1|^4<\infty$. Put $\mu_j=\mathbb E[X_1^j]$ for $1\le j\le4$, $\sigma^2=\mu_2-\mu_1^2$, $\bar X_n=n^{-1}\sum_iX_i$, $Q_n=n^{-1}\sum_iX_i^2$, and $S_n^2=Q_n-\bar X_n^2$. Then
$$\sqrt n(S_n^2-\sigma^2)\Rightarrow N_1(0,\tau^2),\qquad \tau^2=\operatorname{Var}((X_1-\mu_1)^2)=\mathbb E[(X_1-\mu_1)^4]-\sigma^4=\mu_4-4\mu_1\mu_3+8\mu_1^2\mu_2-4\mu_1^4-\mu_2^2.$$
Here $\sigma^4=(\sigma^2)^2$ and $\tau^2=\operatorname{Var}((X_1-\mu_1)^2)$.

## Facts & Assumptions

**Given:** AC, iid real observations, and the finite fourth absolute moment.

[A1] AC is assumed so the library's multivariate iid central limit theorem and multivariate normal law apply.

[A2] $\mathbb E|X_1|^4<\infty$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: iid means a common law and mutual independence of the whole family.

[F2] [[lem-measurable-functions-preserve-independence]]: measurable coordinatewise maps of an independent family remain independent.

[F3] [[thm-multivariate-iid-central-limit-theorem]]: iid finite-dimensional vectors with finite second moment have a centered Gaussian weak limit with their covariance, under AC.

[F4] [[def-multivariate-normal-law]]: every scalar projection of a centered multivariate normal law is normal with the projected covariance.

[F5] [[thm-first-and-second-order-delta-method-for-random-vectors]]: a first-order expansion of a map at the target transfers a vector weak limit through its derivative.

[F6] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F7] [[def-moments-variance-and-covariance]]: for square-integrable $W$, $\operatorname{Var}(W)=\mathbb E[(W-\mathbb E W)^2]$; covariance is defined by the corresponding centered product.

## Verification

**Given:** The data, moments, sample variance, and assumptions in the example.

1.1 Let $Y_i=(X_i,X_i^2)$. The map $x\mapsto(x,x^2)$ is Borel, so [F1]–[F2] show that $(Y_i)$ is iid. By [A2], $\mathbb E\|Y_1\|^2=\mu_2+\mu_4<\infty$, with mean $(\mu_1,\mu_2)$ and covariance $$C=\begin{pmatrix}\mu_2-\mu_1^2&\mu_3-\mu_1\mu_2\\\mu_3-\mu_1\mu_2&\mu_4-\mu_2^2\end{pmatrix}.$$ By [A1] and [F3], $\sqrt n\{(\bar X_n,Q_n)-(\mu_1,\mu_2)\}\Rightarrow Z\sim N_2(0,C)$. [A1, A2, F1, F2, F3, F6]

2.1 The map $g(x,y)=y-x^2$ has $g(\mu_1,\mu_2)=\sigma^2$ and derivative $(u,v)\mapsto-2\mu_1u+v$. Apply [F5] to step 1.1 to get $\sqrt n(S_n^2-\sigma^2)\Rightarrow-2\mu_1Z_1+Z_2$. [F5, step 1.1, given, algebra]

3.1 By [F4], the limit is centered normal with variance $(-2\mu_1,1)C(-2\mu_1,1)^T=4\mu_1^2(\mu_2-\mu_1^2)-4\mu_1(\mu_3-\mu_1\mu_2)+\mu_4-\mu_2^2=\mu_4-4\mu_1\mu_3+8\mu_1^2\mu_2-4\mu_1^4-\mu_2^2$. Expanding $\mathbb E[(X_1-\mu_1)^4]-(\mu_2-\mu_1^2)^2$ gives the same expression. By [F7], it is $\operatorname{Var}((X_1-\mu_1)^2)$, so the displayed $\tau^2$ is exactly the limit variance. [F4, F7, step 1.1, step 2.1, given, algebra] ∎

## Remarks

The cited Duchi sample-variance example supplies the setup and covariance matrix, but its printed final variance $\mu_4-\mu_2^2$ omits the nonzero-mean terms. Step 3.1 derives the corrected variance directly; the printed expression agrees with it when $\mu_1=0$.
