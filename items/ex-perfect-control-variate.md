---
id: ex-perfect-control-variate
kind: example
title: A perfect-correlation control removes all variance
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [def-control-variate-estimator, thm-control-variate-unbiasedness-and-optimal-coefficient]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $X_i$ be IID uniform on $[0,1]$, take $f(x)=h(x)=x$, and use the known control mean $\theta=1/2$. The fixed coefficient $\beta=1$ gives an exact estimate with no Monte Carlo variance.

## Facts & Assumptions

**Given:** The uniform law on $[0,1]$, $f=h=\operatorname{id}$, and the known mean $\theta=1/2$.

[F1] [[thm-control-variate-unbiasedness-and-optimal-coefficient]]: The scalar minimizing coefficient is $\operatorname{Cov}(f(X),h(X))/\operatorname{Var}(h(X))$ when $\operatorname{Var}(h(X))>0$.

[F2] [[def-control-variate-estimator]]: $\widehat\mu_\beta=n^{-1}\sum_i[f(X_i)-\beta(h(X_i)-\theta)]$.

## Verification

**Given:** The specified $f,h,\theta$ and IID $X_i\sim\operatorname{Unif}[0,1]$.

1.1 Direct integration gives $E X=1/2$ and $\operatorname{Var}(X)=\int_0^1(x-1/2)^2dx=1/12>0$, so [F1] gives $\beta^*=1$. [F1, algebra]

2.1 For every sample value, $X_i-(X_i-1/2)=1/2$. By [F2], $\widehat\mu_1=1/2$ identically, hence its variance is zero and its expectation is the target $1/2$. [F2, step 1.1, given] ∎
