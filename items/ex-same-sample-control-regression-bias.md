---
id: ex-same-sample-control-regression-bias
kind: example
title: A same-sample fitted coefficient can bias the estimator
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [def-control-variate-estimator, thm-same-sample-control-coefficient-remainder-is-op-one-over-n]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $X_i$ be IID uniform on $\{-1,0,1\}$, let $f(x)=x^2$, $h(x)=x$, and use $\theta=Eh(X)=0$. For $n=2$, fit the scalar coefficient on the same two observations by $\widehat\beta=\widehat{\operatorname{Cov}}(h,f)/\widehat{\operatorname{Var}}(h)$ when the sample variance is positive, and set it to $0$ when the sample variance is zero. The resulting control estimator is biased.

## Facts & Assumptions

**Given:** The three-point uniform law, sample size two, the specified $f,h,\theta$, and the zero-denominator convention.

[F1] [[thm-same-sample-control-coefficient-remainder-is-op-one-over-n]]: The same-sample coefficient is the inverse sample control covariance times the sample cross-covariance when defined, with a zero fallback when singular.

[F2] [[thm-same-sample-control-coefficient-remainder-is-op-one-over-n]] defines the plug-in estimator pointwise; for a scalar fitted coefficient it is $\bar f-\widehat\beta(\bar h-\theta)$.

## Verification

**Given:** Each of the nine ordered pairs $(X_1,X_2)\in\{-1,0,1\}^2$ has probability $1/9$.

1.1 On the three equal pairs, the fallback coefficient is zero and the estimates are $1,0,1$. On the two ordered pairs $(-1,1)$ and $(1,-1)$, the fitted slope is zero and each estimate is $1$. On each of the four ordered adjacent pairs $(-1,0),(0,-1),(0,1),(1,0)$, the fitted slope is respectively $-1,-1,1,1$, and direct substitution into [F2] gives estimate $0$. [F1, F2, given, algebra]

2.1 Exactly four of the nine equally likely pairs yield estimate $1$ and the other five yield $0$, so the expected estimate is $4/9$. The target is $Ef(X)=\frac13(1+0+1)=2/3$, hence this same-sample fitted-coefficient estimator is biased. [given, step 1.1, algebra] ∎
