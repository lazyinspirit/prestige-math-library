---
id: ex-binomial-sample-proportion
kind: example
title: "The binomial sample proportion"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-statistic-and-estimator
  - def-bias-and-mean-squared-error
  - def-unbiased-estimator-and-umvu
  - thm-bias-variance-decomposition
  - def-moments-variance-and-covariance
  - def-variance-and-covariance
  - cor-covariance-vanishes-under-independence
  - thm-variance-of-a-finite-sum
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-bernoulli-and-binomial-random-variables
  - def-independence-of-finite-random-variables
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 5, PDF pp. 29–31"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 2–8"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
---

## Example

Let $X_1,\ldots,X_n$ be independent Bernoulli$(p)$ observations, where
$n\geq1$ and $p\in[0,1]$. For $\overline X=n^{-1}\sum_{i=1}^nX_i$,
$$\mathbb E_p[\overline X]=p,\qquad \operatorname{Var}_p(\overline X)=\operatorname{MSE}_p(\overline X)=\frac{p(1-p)}{n}.$$
The equalities include the degenerate endpoints $p=0$ and $p=1$.

## Facts & Assumptions

**Given:** The finite product Bernoulli experiment, $n\geq1$, and $p\in[0,1]$.

[F1] An estimator is unbiased when its expectation equals the estimand at every parameter; MSE is the squared-error expectation. ([[def-unbiased-estimator-and-umvu]], [[def-bias-and-mean-squared-error]])

[F2] Variance of a finite sum is the sum of individual variances and twice the sum of pairwise covariances. ([[thm-variance-of-a-finite-sum]])

[F3] Independent square-integrable variables have zero covariance. ([[cor-covariance-vanishes-under-independence]])

[F4] On a finite probability space, variance is the expectation of the centered square. ([[def-variance-and-covariance]])

[F5] Expectation is linear on finite linear combinations of integrable random variables. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F6] For an unbiased estimator, MSE equals variance. ([[thm-bias-variance-decomposition]])

[F7] A measurable real-valued data map to the named target is an estimator. ([[def-statistic-and-estimator]])

[F8] A Bernoulli$(p)$ variable takes values $1$ and $0$ with probabilities $p$ and $1-p$, and mutual independence of finite-valued variables means their joint cell probabilities factor. ([[def-bernoulli-and-binomial-random-variables]], [[def-independence-of-finite-random-variables]])

## Verification

**Proof technique:** direct.

1.1 Each $X_i$ and $\overline X$ is measurable on the finite product space, hence an estimator by [F7]. The Bernoulli law [F8] gives $P_p(X_i=1)=p$ and $P_p(X_i=0)=1-p$; summing these two values gives $\mathbb E_pX_i=p$ and $\operatorname{Var}_p(X_i)=(1-p)p^2+p(1-p)^2=p(1-p)$, including $p=0,1$. Thus [F5] gives $\mathbb E_p\overline X=p$, so $\overline X$ is unbiased by [F1]. [given, F1, F4, F5, F7, F8]

2.1 The independent $X_i$ are square-integrable, so [F3] makes every off-diagonal covariance zero. Applying [F2] gives $\operatorname{Var}_p(\sum_iX_i)=np(1-p)$ and hence $\operatorname{Var}_p(\overline X)=p(1-p)/n$. Since the bias is zero, [F6] gives the same value for MSE. [given, F2, F3, F6, step 1.1] ∎
