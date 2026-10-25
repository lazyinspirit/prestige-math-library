---
id: ex-ratio-pick-freeze-index-estimator-is-biased
kind: example
title: A pick-freeze ratio can be biased at finite sample size
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [alg-pick-freeze-monte-carlo-sobol-estimators, thm-pick-freeze-sobol-covariance-identities, def-first-and-total-sobol-indices]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §2.1
      url: https://arxiv.org/pdf/1205.1774
---

## Example

Take one input $X\sim\operatorname{Bernoulli}(1/2)$ and $f(X)=X$. The true
first-order Sobol index is $1$. With two rows of
[[alg-pick-freeze-monte-carlo-sobol-estimators]], conditional on the algorithm
returning an index (its empirical variance denominator is positive), the
expected reported ratio is $5/6$. Thus unbiased numerator and denominator
estimators do not make their ratio unbiased.

## Facts & Assumptions

**Given:** The one-factor Bernoulli model and two independent rows of the stated pick-freeze bundle.

[F1] [[alg-pick-freeze-monte-carlo-sobol-estimators]]: the one-factor numerator is $N=f(X)f(X)-f(U)f(V)$ and the independent-pair denominator is $D=\frac12(f(W)-f(W'))^2$; the ratio $\bar N/\bar D$ is returned when the sample mean $\bar D>0$.

[F2] [[thm-pick-freeze-sobol-covariance-identities]]: the population first-order numerator and variance denominator are both $V_{\{1\}}$ and $V$.

[F3] [[def-first-and-total-sobol-indices]]: $S_1=V_{\{1\}}/V$ when $V>0$.

## Verification

**Given:** The model and algorithm convention in the Example.

1.1 Since $\mathbb EX=1/2$ and $\operatorname{Var}(X)=1/4$, the only ANOVA component is $f_{\{1\}}=X-1/2$, so $V_{\{1\}}=V=1/4$ and [F3] gives the true index $S_1=1$. [F2, F3, given, algebra]

1.2 In each row $r$, the first-order hybrid equals $X_r$, so $N_r=X_r-U_rV_r$ and $\mathbb EN_r=1/4$. Also $D_r=1/2$ exactly when $W_r\ne W'_r$, an event of probability $1/2$, and is zero otherwise. All numerator draws are independent of all denominator draws. If $K$ is the number of positive denominators in the two rows, then $K\sim\operatorname{Binomial}(2,1/2)$ and is independent of $N_1+N_2$. [F1, given, algebra]

2.1 On the return event $K>0$, $\bar D=K/4$ and $\bar N=(N_1+N_2)/2$. Independence and $\mathbb E[N_1+N_2]=1/2$ give $\mathbb E[\bar N/\bar D\mid K]=1/K$. Since $\mathbb P(K=1\mid K>0)=2/3$ and $\mathbb P(K=2\mid K>0)=1/3$, the conditional reported-ratio expectation is $2/3+(1/3)(1/2)=5/6$, different from the population index $1$ in step 1.1. Each $N_r$ and $D_r$ remains unbiased for $1/4$, but their ratio is biased when returned. [F1, F2, step 1.1, step 1.2, algebra] ∎

