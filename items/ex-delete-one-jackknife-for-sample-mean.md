---
id: ex-delete-one-jackknife-for-sample-mean
kind: example
title: The delete-one jackknife variance for a sample mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-iid-empirical-bootstrap-sample
  - thm-delete-one-jackknife-linearization-for-smooth-statistics
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §3"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §10"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Example

For real data $X_1,\ldots,X_n$ with $n\ge2$, take $g(x)=x$. The delete-one pseudovalues are exactly the observations, and the jackknife variance estimate is the usual sample variance divided by $n$.

## Facts & Assumptions

**Given:** Real data $X_1,\ldots,X_n$, $n\ge2$, the delete-one definitions, and the estimator $g(x)=x$, so $\hat\theta_n=\bar X_n$ and $\hat\theta_{n,(-i)}=\bar X_{n,(-i)}$.

[F1] For $n\ge2$, define $\bar\theta_{n,(-)}=n^{-1}\sum_i\hat\theta_{n,(-i)}$, $p_{n,i}=n\hat\theta_n-(n-1)\hat\theta_{n,(-i)}$, and $V_{J,n}=(n-1)n^{-1}\sum_i(\hat\theta_{n,(-i)}-\bar\theta_{n,(-)})^2$. These are the finite-sample delete-one pseudovalues and jackknife variance; their definitions require no IID or moment assumptions.

[F2] The delete-one mean is $\bar X_{n,(-i)}=(n\bar X_n-X_i)/(n-1)$. [[def-iid-empirical-bootstrap-sample]]

## Verification

1.1 By [F2], $\bar X_{n,(-i)}=\bar X_n-(X_i-\bar X_n)/(n-1)$. Averaging over $i$ gives $\bar\theta_{n,(-)}=\bar X_n$, since $\sum_i(X_i-\bar X_n)=0$. [F2, given, algebra]

2.1 Substitution into [F1] gives $p_{n,i}=X_i$ and $V_{J,n}=\frac{n-1}{n}\sum_i\left(\frac{\bar X_n-X_i}{n-1}\right)^2 =\frac1{n(n-1)}\sum_i(X_i-\bar X_n)^2.$ Thus $V_{J,n}=s_n^2/n$, where $s_n^2=(n-1)^{-1}\sum_i(X_i-\bar X_n)^2$ is the unbiased sample variance. [F1, step 1.1, algebra] ∎
