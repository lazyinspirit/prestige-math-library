---
id: ex-holdout-cv-training-size-bias
kind: example
title: "A holdout estimate targets a smaller training sample"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-cross-validation-split-and-risk-target
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - thm-cross-validation-risk-bias-at-training-size
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-factorization-of-expectations-for-independent-variables
  - def-bernoulli-and-binomial-random-variables
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §5.1.1"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 §5.1.1"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Example

Take $n=4$ IID observations $Z_i\sim\operatorname{Bernoulli}(1/2)$, squared loss $L(a,z)=(a-z)^2$, and the learning rule $A_k(z_1,\ldots,z_k)=k^{-1}\sum_{q=1}^kz_q$. Hold out $Z_4$ and train on $Z_1,Z_2,Z_3$. The expected holdout score estimates $R_3$, while training on all four observations has risk $R_4$.

## Facts & Assumptions

**Given:** The four IID Bernoulli observations, the sample-mean rule, squared loss, and holdout split above. Compute the training-size risks and their difference.

[F1] [[thm-cross-validation-risk-bias-at-training-size]]: the expected holdout score with $k$ training observations is $R_k$.

[F2] [[def-cross-validation-split-and-risk-target]]: $R_k=\mathbb E[L(A_k(Z_1,\ldots,Z_k),Z_{k+1})]$ for an independent test observation.

[F3] [[def-identically-distributed-and-iid-random-variables]]: the observations are mutually independent and have one common law.

[F4] [[def-moments-variance-and-covariance]]: variance is $\mathbb E[(X-\mathbb E X)^2]$ for square-integrable $X$.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of integrable functions of independent variables factor.

[F6] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: a holdout score averages losses on the validation indices after training on their complement.

[F7] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

## Verification

1.1 For $Z\sim\operatorname{Bernoulli}(p)$, [F7] gives $\mathbb E Z=p$ and the two-point expectation gives $\operatorname{Var}(Z)=p(1-p)$. Expanding the variance of $\bar Z_k=k^{-1}\sum_{q=1}^kZ_q$, the diagonal terms sum to $kp(1-p)$ and each cross covariance vanishes by [F3] and [F5]; hence $\operatorname{Var}(\bar Z_k)=p(1-p)/k$. [given, F3, F4, F5, F7, algebra]

2.1 The independent test variable $Z_{k+1}$ has mean $p$ and variance $p(1-p)$. Expanding $\mathbb E[(\bar Z_k-Z_{k+1})^2]$ around the common mean $p$, the centered cross term is zero by independence, so [F2] gives $R_k=\operatorname{Var}(\bar Z_k)+\operatorname{Var}(Z_{k+1})=p(1-p)(1+1/k)$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 At $p=1/2$, $R_3=\frac14(1+\frac13)=\frac13$ and $R_4=\frac14(1+\frac14)=\frac5{16}$. The split in [F6] holds out one observation, so [F1] gives expected holdout score $R_3$; its bias for full-sample risk is $R_3-R_4=\frac1{48}>0$. [F1, F2, F6, step 2.1, algebra] ∎
