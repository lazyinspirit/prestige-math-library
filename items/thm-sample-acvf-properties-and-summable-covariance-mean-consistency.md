---
id: thm-sample-acvf-properties-and-summable-covariance-mean-consistency
kind: theorem
title: "Sample-mean variance and positive semidefinite sample ACVF"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-variance-and-covariance-identities-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, complete 57-page lecture notes"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "STAT 720 Time Series Analysis, South Carolina course notes by Wang, focused Sections 2.1–2.2 and Lemma 2.3"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $X=(X_t)_{t\in\mathbb Z}$ be weakly stationary, with mean $\mu$ and
autocovariance $\gamma$, and define
$\bar X_n:=n^{-1}\sum_{t=1}^nX_t$ for $n\ge1$. Then
$$\operatorname{Var}(\bar X_n)=\frac1{n^2}\sum_{|h|<n}(n-|h|)\gamma(h).$$
If $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$, then
$$0\le\operatorname{Var}(\bar X_n)\le\frac1n\sum_{h\in\mathbb Z}|\gamma(h)|,$$
so $\mathbb E[(\bar X_n-\mu)^2]\to0$: the sample mean is consistent in $L^2$.
No mixing property or central limit theorem is asserted here. For every finite
real data vector, the zero-extended biased sample
ACVF $\widehat\gamma_n$ of
[[def-autocovariance-and-sample-autocovariance]] has nonnegative Toeplitz
quadratic forms.

## Facts & Assumptions

**Given:** A weakly stationary real process $X=(X_t)_{t\in\mathbb Z}$ with
mean $\mu$ and autocovariance $\gamma$, an integer $n\ge1$, and (for the
consistency conclusion) $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$. The sample
ACVF conclusion applies to every finite real data vector of length $n$.

[F1] [[def-strict-and-weak-stationarity-for-time-series]]: each $X_t$ has finite
second moment, $\mathbb E[X_t]=\mu$ is constant, and
$\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$ is independent of $t$.

[F2] [[def-moments-variance-and-covariance]] defines variance and covariance
from centered squares and products;
[[lem-variance-and-covariance-identities-for-random-variables]] gives
covariance bilinearity on finite linear combinations.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear on integrable random variables.

[F4] [[def-autocovariance-and-sample-autocovariance]]: after centering a data
vector by its sample mean, $\widehat\gamma_n(h)$ is the $1/n$ lagged product
sum, with zero extension for $|h|\ge n$.

## Proof

**Proof technique:** count pairs by their lag, bound the resulting covariance
sum, and write the sample Toeplitz form as a sum of squares.

1.1 Each $X_t$ is integrable because $2|X_t|\le1+X_t^2$ and the probability space has total mass one. Repeated application of [F3] gives $\mathbb E[\bar X_n]=\mu$. By [F2] and its cited covariance-bilinearity supplier, $\operatorname{Var}(\bar X_n)=n^{-2}\sum_{s=1}^n\sum_{t=1}^n\operatorname{Cov}(X_s,X_t)$. [F1, F2, F3, given, algebra]

1.2 Fix a data vector $x_1,\ldots,x_n$, let $y_t=x_t-\bar x_n$ for $1\le t\le n$, and set $y_t=0$ otherwise. By [F4], for every $h\in\mathbb Z$, $\widehat\gamma_n(h)=n^{-1}\sum_{t\in\mathbb Z}y_ty_{t+h}$. The sum is finite because $y$ has finite support. Replacing $t$ by $t-h$ and commuting the real factors shows $\widehat\gamma_n(-h)=\widehat\gamma_n(h)$. [F4, given, algebra]

2.1 For $s,t\in\{1,\ldots,n\}$, [F1] gives $\operatorname{Cov}(X_s,X_t)=\gamma(s-t)$. For each integer $h$ with $|h|<n$, exactly $n-|h|$ ordered pairs $(s,t)$ satisfy $s-t=h$, and no ordered pair has $|s-t|\ge n$. Grouping the finite sum in step 1.1 by $h=s-t$ proves the variance identity. [F1, step 1.1, algebra]

3.1 Under absolute covariance summability, every weight $n-|h|$ in the identity is between $0$ and $n$, so $0\le\operatorname{Var}(\bar X_n)\le n^{-2}\sum_{|h|<n}(n-|h|)|\gamma(h)|\le n^{-1}\sum_{h\in\mathbb Z}|\gamma(h)|$. [step 2.1, given, algebra]

4.1 Step 1.1 gives $\mathbb E[\bar X_n]=\mu$. Therefore $\mathbb E[(\bar X_n-\mu)^2]=\operatorname{Var}(\bar X_n)$, and the bound in step 3.1 tends to zero as $n\to\infty$. This is precisely $L^2$ consistency for the mean. [step 1.1, step 3.1, algebra]

5.1 Let $(a_j)_{j\in J}$ be any finitely supported real coefficient family indexed by integers. Expanding the finite sums and using the evenness from step 1.2 gives $\sum_{j,k\in J}a_ja_k\widehat\gamma_n(j-k)=n^{-1}\sum_{u\in\mathbb Z}(\sum_{j\in J}a_jy_{u+j})^2\ge0$. Only finitely many terms on the right are nonzero, and every summand is a square. Thus every finite Toeplitz quadratic form of $\widehat\gamma_n$ is nonnegative. [step 1.2, given, algebra] ∎