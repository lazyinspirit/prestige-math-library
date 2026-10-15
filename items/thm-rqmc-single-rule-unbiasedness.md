---
id: thm-rqmc-single-rule-unbiasedness
kind: theorem
title: "Marginal uniformity makes an RQMC rule unbiased"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-rqmc-point-set-and-estimator
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-change-of-variables-for-expectation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Statement

Let $X_1,\ldots,X_n$ be a marginally uniform randomized point array in
$[0,1)^d$, with no independence assumption among its points. For every Borel
$f\in L^1([0,1)^d)$, the RQMC estimator
$\widehat I_n(f)=n^{-1}\sum_{i=1}^n f(X_i)$ is integrable and
$$\mathbb E[\widehat I_n(f)]=\int_{[0,1)^d}f(x)\,dx.$$

## Facts & Assumptions

**Given:** The probability space, the marginally uniform array, and a Borel integrable $f$.

[F1] [[def-rqmc-point-set-and-estimator]]: Each $X_i$ has normalized Lebesgue law, and $\widehat I_n(f)=n^{-1}\sum_i f(X_i)$.

[F2] [[thm-change-of-variables-for-expectation]]: If $g(X)$ is integrable, then $\mathbb E[g(X)]=\int g\,d\mathbb P_X$.

[F3] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The integral is linear on $L^1$.

## Proof

**Proof technique:** direct.

**Given:** $n\ge1$, $X_1,\ldots,X_n$ with the marginal laws in [F1], and $f\in L^1([0,1)^d)$.

1.1 By [F1], the law of every $X_i$ is normalized Lebesgue measure. Since $f$ is integrable for that law, [F2] gives $\mathbb E[f(X_i)]=\int_{[0,1)^d}f(x)\,dx=I(f)$ for each $i$, and each $f(X_i)$ is integrable. [F1, F2, given]

2.1 The finite sum of the integrable variables $f(X_i)$ is integrable. By linearity, $\mathbb E[\widehat I_n(f)]=n^{-1}\sum_{i=1}^n\mathbb E[f(X_i)]=n^{-1}\sum_{i=1}^n I(f)=I(f)$. No covariance or independence assumption is used. [F1, F3, step 1.1, algebra] ∎
