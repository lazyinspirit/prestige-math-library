---
id: ex-uncorrelated-control-variate
kind: example
title: An uncorrelated control has no variance benefit
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

Let $A$ and $B$ be independent fair signs, let $X=(A,B)$, and set $f(A,B)=A$, $h(A,B)=B$, and $\theta=0$. The optimal fixed control coefficient is zero, so this control does not reduce variance.

## Facts & Assumptions

**Given:** The four equiprobable outcomes $(A,B)\in\{-1,1\}^2$.

[F1] [[thm-control-variate-unbiasedness-and-optimal-coefficient]]: The scalar optimum is covariance divided by control variance when that variance is positive.

[F2] [[def-control-variate-estimator]]: The fixed-coefficient estimate subtracts $\beta(\bar h-\theta)$ from $\bar f$.

## Verification

**Given:** $f=A$, $h=B$, $EA=EB=0$, and the four outcomes each have probability $1/4$.

1.1 Summing the four table values gives $Ef=Eh=0$, $\operatorname{Var}(h)=1$, $\operatorname{Var}(f)=1$, and $\operatorname{Cov}(f,h)=E[AB]=0$. [given, algebra]

2.1 By [F1], $\beta^*=0$ and the minimum variance of one corrected draw equals $\operatorname{Var}(f)=1$. Thus [F2] reduces to the ordinary sample mean, with variance $1/n$; this control gives no reduction. [F1, F2, step 1.1] ∎
