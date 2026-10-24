---
id: thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
kind: theorem
title: Ordinary importance sampling has finite variance and a CLT under a weighted second moment
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-integration-against-a-density
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-is-unbiased
  - cor-variance-adds-for-pairwise-independent-random-variables
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-iid-monte-carlo-central-limit
  - thm-change-of-variables-for-expectation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-moments-variance-and-covariance
  - lem-measurable-functions-preserve-independence
  - def-identically-distributed-and-iid-random-variables
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Quan Zhou, STAT 689 Unit 1: Introduction, Rejection and Importance Sampling, §1.3, Theorem 1.2"
      url: "https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf"
    - title: "Monte Carlo Methods course notes, Chapter 6 §§6.1, 6.2"
      url: "https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf"
    - title: "Data Science and Statistical Modelling, Chapter 5 §5.3.1, Theorem 5.4"
      url: "https://www.louisaslett.com/Courses/DSSM/notes/simulation.html"
    - title: "Tuan Anh Le, Importance Sampling, §Importance Sampling"
      url: "https://www.tuananhle.co.uk/notes/is.html"
---

## Statement

Use the hypotheses and notation of [[thm-ordinary-importance-sampling-is-unbiased]]. Define
$$Y_i:=\begin{cases}f(X_i)\tilde p(X_i)/(Z_pq(X_i)),&q(X_i)>0,\\0,&q(X_i)=0\end{cases},\qquad \theta:=\int f\,d\pi,\qquad \sigma^2:=\operatorname{Var}_Q(Y_1).$$
If $\mathbb E_Q[Y_1^2]<\infty$, then $\hat\mu_{\mathrm{IS}}$ has finite variance and
$$\operatorname{Var}_Q(\hat\mu_{\mathrm{IS}})=\frac{\sigma^2}{n}=\frac1n\left(\frac1{Z_p^2}\int_{\{q>0\}}\frac{f(x)^2\tilde p(x)^2}{q(x)}\,d\mu(x)-\theta^2\right).$$
This finite-sample conclusion is choice-free. For the central limit conclusion, let $(X_i)_{i\ge1}$ be an IID sequence with law $Q$, and apply the estimator to its first $n$ draws for each $n\ge1$. If, in addition, AC holds, then
$$\sqrt n\bigl(\hat\mu_{\mathrm{IS}}-\theta\bigr)\Rightarrow N(0,\sigma^2).$$
No finite variance or normal-limit claim is made when the weighted second moment is infinite.

## Facts & Assumptions

**Given:** The integrable ordinary importance sampling setup from [[thm-ordinary-importance-sampling-is-unbiased]], plus $\mathbb E_Q[Y_1^2]<\infty$. For the CLT conclusion, take an IID sequence $(X_i)_{i\ge1}$ with law $Q$ and assume AC.

[F1] [[alg-importance-sampling]]: The estimate is the sample average of the weighted values $Y_i=f(X_i)\tilde p(X_i)/(Z_pq(X_i))$, with value $0$ when $q(X_i)=0$; the algorithm also establishes that this piecewise weighted-integrand map is measurable.

[F2] [[thm-ordinary-importance-sampling-is-unbiased]]: Under its support and integrability hypotheses, $\mathbb E_Q[\hat\mu_{\mathrm{IS}}]=\theta=\int f\,d\pi$.

[F3] [[lem-measurable-functions-preserve-independence]]: Applying measurable coordinatewise maps to an independent family preserves independence.

[F4] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence.

[F5] [[cor-variance-adds-for-pairwise-independent-random-variables]]: The variance of a finite sum of pairwise-independent square-integrable real variables is the sum of their variances. [[lem-variance-and-covariance-identities-for-random-variables]]: Covariance is bilinear on finite linear combinations, so $\operatorname{Var}(aY)=a^2\operatorname{Var}(Y)$ and $\operatorname{Var}(Y)=\mathbb E[Y^2]-(\mathbb EY)^2$.

[F6] [[thm-change-of-variables-for-expectation]]: For a nonnegative measurable function of a random element with law $Q$, expectation equals its integral against $Q$.

[F7] [[def-moments-variance-and-covariance]]: For square-integrable real $Y$, $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E Y)^2]$.

[F8] [[thm-iid-monte-carlo-central-limit]]: Under AC, a real IID sample with positive finite variance satisfies $\sqrt n(\bar Y_n-\mathbb EY_1)\Rightarrow N(0,\operatorname{Var}(Y_1))$.

[F9] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere.

[F10] [[def-standard-normal-and-normal-laws]]: $N(m,0)$ is the Dirac law $\delta_m$.

[A1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; it is assumed only for the central limit conclusion.

[F11] [[thm-integration-against-a-density]]: for a nonnegative measurable density $r$ and nonnegative measurable $h$, $\int h\,d(r\,d\mu)=\int hr\,d\mu$, including infinite values.

## Proof

**Given:** The weighted values $Y_i$ from the Statement and the finite second moment $\mathbb E_Q[Y_1^2]<\infty$.

1.1 By [F1], each $Y_i$ is obtained from $X_i$ by the same measurable weighted-integrand map and $\hat\mu_{\mathrm{IS}}=n^{-1}\sum_{i=1}^nY_i$. Since the $X_i$ are IID, [F3] preserves independence and their common law under this map; [F4] therefore makes $(Y_i)$ IID. [F1, F3, F4, given]

2.1 Applying [F2] to a sample of size one gives $\mathbb E_QY_1=\theta$, and it also gives $\mathbb E_Q[\hat\mu_{\mathrm{IS}}]=\theta$ for the supplied sample. By step 1.1 every $Y_i$ has the same finite second moment and variance $\sigma^2$, and the finite family is pairwise independent. Thus [F5] gives $\operatorname{Var}_Q(\sum_{i=1}^nY_i)=n\sigma^2$ and $\operatorname{Var}_Q(\hat\mu_{\mathrm{IS}})=n^{-2}(n\sigma^2)=\sigma^2/n$. [F2, F5, given, step 1.1, algebra]

3.1 Use [F11] with density $r=q$ for integration against $Q$. Applying [F6] to the nonnegative squared weighted integrand gives $\mathbb E_Q[Y_1^2]=Z_p^{-2}\int_{\{q>0\}}f(x)^2\tilde p(x)^2/q(x)\,d\mu(x)$. By [F5] and step 2.1, $\sigma^2=\mathbb E_Q[Y_1^2]-\theta^2$, proving the displayed variance formula. [F1, F5, F6, step 2.1, given, algebra, F11]

4.1 For the CLT, use the given IID sequence $(X_i)_{i\ge1}$ and assume AC as in [A1]. The measurable transformation in step 1.1 now makes $(Y_i)_{i\ge1}$ IID. If $\sigma^2>0$, [F8] applies to the IID sequence from step 1.1 with mean $\theta$ from step 2.1 and yields the stated normal limit. If $\sigma^2=0$, [F7] gives $\mathbb E_Q[(Y_1-\theta)^2]=0$, so [F9] implies $Y_1=\theta$ $Q$-almost surely. By the common-law conclusion of step 1.1, each event $\{Y_i\ne\theta\}$ is null; for each fixed $n$, the union of the first $n$ such events is null. Thus $\bar Y_n=\theta$ almost surely for each $n$, and the centered sample mean has law $\delta_0=N(0,0)$ for every $n$ by [F10]. The variance argument in the preceding steps used no choice axiom. [A1, F7, F8, F9, F10, step 1.1, step 2.1, step 3.1, given, algebra] ∎
