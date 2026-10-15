---
id: ex-monotone-antithetic-pair
kind: example
title: A monotone uniform integrand has a zero-variance antithetic pair
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [def-antithetic-randomized-sampling, thm-antithetic-variance-and-monotone-sufficiency]
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

Take $d=1$, $T(u)=u$, $f(x)=x$, and $U\sim\operatorname{Unif}[0,1]$. The antithetic pair average is constant, while the ordinary mean of two independent draws has positive variance.

## Facts & Assumptions

**Given:** $U$ uniform on $[0,1]$, $T(u)=u$, and $f(x)=x$.

[F1] [[def-antithetic-randomized-sampling]]: A pair averages $f(T(U))$ and $f(T(1-U))$.

[F2] [[thm-antithetic-variance-and-monotone-sufficiency]]: The antithetic variance is $(\sigma^2+\operatorname{Cov}(Y,\widetilde Y))/(2n)$; it is no larger than the IID comparator exactly when the covariance is nonpositive, and is strictly smaller exactly when the covariance is negative.

## Verification

**Given:** The one-dimensional uniform input and identity sampler/integrand.

1.1 Direct integration gives $EU=E(1-U)=1/2$, $\operatorname{Var}(U)=1/12$, and $E[U(1-U)]=1/6$, so $\operatorname{Cov}(U,1-U)=1/6-1/4=-1/12$. [given, algebra]

2.1 For each pair, $(U+(1-U))/2=1/2$, so [F1] gives a constant estimator of variance zero. By [F2], the comparator variance for two independent uniform draws is $(1/12)/2=1/24$, hence the reduction is strict. [F1, F2, step 1.1, algebra] ∎
