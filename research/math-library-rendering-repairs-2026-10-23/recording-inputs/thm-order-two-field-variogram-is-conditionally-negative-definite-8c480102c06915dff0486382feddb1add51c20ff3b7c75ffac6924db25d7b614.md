---
id: thm-order-two-field-variogram-is-conditionally-negative-definite
kind: theorem
title: "Order-two intrinsic variograms are conditionally negative definite"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Evgeny Spodarev, Random Fields I: Lecture Notes (Draft, 2009)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf"
    - title: "Hermine Biermé, Introduction to random fields and scale invariance: Lecture I (2016)"
      url: "https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf"
---

## Statement

Let $X=(X(t))_{t\in\mathbb R^d}$ be order-two intrinsically stationary in the
sense of [[def-random-field-stationarity-covariance-and-variogram]], with
variogram $\gamma(h)=\tfrac12\mathbb E[(X(t+h)-X(t))^2]$. Then for every
$n\ge1$, sites $s_1,\ldots,s_n\in\mathbb R^d$, and real coefficients
$a_1,\ldots,a_n$ with $\sum_i a_i=0$,
$$\sum_{i=1}^n\sum_{j=1}^n a_i a_j\gamma(s_i-s_j)\le0.$$
This is conditional negative definiteness over real coefficients. If $X$ is
also wide stationary with covariance function $C$, then
$$\gamma(h)=C(0)-C(h)\qquad(h\in\mathbb R^d).$$
The proof is choice-free.

## Facts & Assumptions

**Given:** A real order-two intrinsically stationary field on $\mathbb R^d$,
and, for the covariance identity, the additional assumption of wide
stationarity.

[F1] [[def-random-field-stationarity-covariance-and-variogram]]: for each
$h\in T-T$, the first and second raw moments of $X(t+h)-X(t)$ are finite and
independent of the admissible starting site; $\gamma(h)$ is half the common
second moment. Wide stationarity supplies square-integrable levels, a
constant mean, and covariance depending only on displacement.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and
[[def-moments-variance-and-covariance]]: expectations, variances, and
covariances are the corresponding integrals of integrable variables, centered
squares, and centered products.

[F3] [[lem-variance-and-covariance-identities-for-random-variables]]:
covariance is symmetric and bilinear for finite linear combinations of
square-integrable real variables.

## Proof

**Given:** The field and, when used, the additional wide-stationarity
hypothesis.

1.1 Suppose first that $X$ is wide stationary. For every $s,h$, its increments have mean zero because the field mean is constant. Wide stationarity gives $C(h)=\operatorname{Cov}(X(s),X(s+h))$ and $C(-h)=\operatorname{Cov}(X(s+h),X(s))$; covariance symmetry [F3] therefore gives $C(-h)=C(h)$. Both level variances equal $C(0)$, and the cross-covariance in the increment variance is $C(-h)=C(h)$. Thus $$\mathbb E[(X(s+h)-X(s))^2]=\operatorname{Var}(X(s+h)-X(s))=2C(0)-2C(h).$$ Dividing by two gives $\gamma(h)=C(0)-C(h)$. [F1, F2, F3, given, algebra]

1.2 For arbitrary sites $s_1,\ldots,s_n$, set $Y_i:=X(s_i)-X(0)$. Each $Y_i$ is square-integrable by order-two intrinsic stationarity, since it is an increment from $0$ to $s_i$. Moreover, $Y_i-Y_j=X(s_i)-X(s_j)$, so [F1] gives $$2\gamma(s_i-s_j)=\mathbb E[(Y_i-Y_j)^2].$$ All cross products are integrable because $2|Y_iY_j|\le Y_i^2+Y_j^2$. [F1, F2, given, construct]

2.1 Expanding the finite sum from step 1.2 and using $\sum_i a_i=0$ yields
$$
\begin{aligned} \sum_{i,j}a_i a_j\gamma(s_i-s_j) &=\frac12\sum_{i,j}a_i a_j\mathbb E[Y_i^2+Y_j^2-2Y_iY_j]\\ &=-\mathbb E\!\left[\left(\sum_i a_iY_i\right)^2\right]\le0. \end{aligned}
$$
[step 1.2, given, algebra]

3.1 The two sums containing $Y_i^2$ or $Y_j^2$ vanish because each contains the factor $\sum_i a_i$; the remaining term is the negative expectation of a square. No choice principle is used. [step 2.1, given, algebra] ∎