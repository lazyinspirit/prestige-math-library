---
id: ex-independent-pilot-control-variate
kind: example
title: A random pilot coefficient remains conditionally unbiased
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [def-control-variate-estimator, thm-independent-pilot-control-variate-is-conditionally-unbiased]
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

Let the production draws be IID uniform on $[0,1]$, take $f(x)=x^2$, $h(x)=x$, and $\theta=1/2$. From an independent pilot draw $V\sim\operatorname{Unif}[0,1]$, set the random coefficient $\widehat\beta=2V$. The control estimator remains conditionally unbiased given the pilot.

## Facts & Assumptions

**Given:** The pilot variable $V$ is independent of all production draws and $\widehat\beta=2V$ has finite first moment.

[F1] [[thm-independent-pilot-control-variate-is-conditionally-unbiased]]: An integrable pilot-measurable coefficient independent of the production sample gives conditional expectation $E_Pf$.

[F2] [[def-control-variate-estimator]]: For a fixed scalar coefficient $b$, the estimator is $\bar f-b(\bar h-\theta)$.

## Verification

**Given:** The stated production and pilot laws.

1.1 Production integration gives $E_P f=\int_0^1x^2dx=1/3$ and $E_P h=\int_0^1x\,dx=1/2=\theta$; also $E|\widehat\beta|=E[2V]=1<\infty$. [given, algebra]

2.1 Set $\mathcal P=\sigma(V)$. The independent pilot makes $\mathcal P$ independent of the sigma-algebra of the entire production sample, and $\widehat\beta=2V$ is $\mathcal P$-measurable and integrable by step 1.1. The functions $f,h$ are bounded and hence integrable. The random-coefficient estimator defined in [F1] is $\bar f-2V(\bar h-1/2)$, extending the fixed-coefficient expression in [F2]. Therefore [F1] gives $E[\widehat\mu_{\widehat\beta}\mid\mathcal P]=1/3$ almost surely. [F1, F2, given, step 1.1, algebra] ∎
