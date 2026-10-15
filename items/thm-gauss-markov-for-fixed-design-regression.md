---
id: thm-gauss-markov-for-fixed-design-regression
kind: theorem
title: "Gauss–Markov theorem for estimable contrasts"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-fixed-design-linear-regression-model
  - def-linear-estimability-in-fixed-design
  - thm-linear-estimability-iff-row-space
  - thm-ols-unbiasedness-and-covariance-full-rank
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
proof_strategy: direct
---

## Statement

Let $X\in\mathbb R^{n\times p}$ have full column rank in a fixed-design
first-moment regression model. Suppose
$\operatorname{Cov}_\beta(\epsilon_\beta)=\sigma^2 I_n$ for a fixed
$\sigma^2>0$, where the vector covariance matrix has entries
$\operatorname{Cov}_\beta(\epsilon_{\beta,i},\epsilon_{\beta,j})$. For every
contrast $c^T\beta$, the OLS estimate
$c^T\widehat\beta$ is unbiased and has variance no larger than any other
linear unbiased estimator of that contrast. Thus OLS is **best linear
unbiased (BLUE)** for every estimable contrast. Here “best” means minimum
variance within the class of linear unbiased estimators; Gaussianity is not
assumed.

## Facts & Assumptions

**Given:** The fixed-design model and moment hypotheses in the Statement, a
contrast $c\in\mathbb R^p$, and any competing linear estimator $a^TY$.

[F1] Full-rank OLS is
$\widehat\beta=(X^TX)^{-1}X^TY$ and is unbiased.
[[thm-ols-unbiasedness-and-covariance-full-rank]].

[F2] A contrast is linearly estimable exactly when $X^Ta=c$ for some fixed
$a\in\mathbb R^n$; every such $a^TY$ is unbiased.
[[thm-linear-estimability-iff-row-space]].

[F3] Covariance is bilinear in finite linear combinations.
[[thm-covariance-bilinearity-and-symmetry]].

[F4] Variance is the covariance of a variable with itself.
[[def-moments-variance-and-covariance]].

[A1] The error has finite second moments, mean zero, and covariance
$\sigma^2I_n$ with $\sigma^2>0$.

## Proof

**Proof technique:** direct.

1.1 Define $a_0:=X(X^TX)^{-1}c\in\mathbb R^n$. Then $X^Ta_0=c$ and $a_0^TY=c^T(X^TX)^{-1}X^TY=c^T\widehat\beta$. By [F2], $c^T\beta$ is estimable and $a_0^TY$ is unbiased. [F1, F2, algebra]

2.1 Let $a^TY$ be any linear unbiased estimator of the same contrast. By [F2], $X^Ta=c$. Set $q:=a-a_0$. Then $X^Tq=0$, while $a_0\in\operatorname{col}(X)$; hence $q^Ta_0=0$. [given, F2, step 1.1, algebra]

3.1 From $Y=X\beta+\epsilon_\beta$, [A1], [F3], and [F4], $\operatorname{Var}_\beta(a^TY)=\sigma^2\|a\|_2^2=\sigma^2\|a_0+q\|_2^2=\sigma^2\|a_0\|_2^2+\sigma^2\|q\|_2^2\ge \operatorname{Var}_\beta(a_0^TY).$ Since $\sigma^2>0$, equality holds exactly when $q=0$. Therefore the OLS contrast estimator has minimum variance among all linear unbiased estimates. [given, A1, F3, F4, step 1.1, step 2.1, algebra] ∎