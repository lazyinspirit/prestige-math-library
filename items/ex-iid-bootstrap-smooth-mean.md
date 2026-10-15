---
id: ex-iid-bootstrap-smooth-mean
kind: example
title: The IID bootstrap for a smooth mean functional
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-iid-empirical-bootstrap-sample
  - thm-iid-bootstrap-validity-for-smooth-statistics
  - def-axiom-of-choice
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
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §4"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
---

## Example

Let $X_1,X_2,\ldots$ be IID real random variables with mean $\mu$ and variance $0<\sigma^2<\infty$, and estimate $\theta=\mu$ by the sample mean. This is the smooth statistic $g(x)=x$ in the theorem.

## Facts & Assumptions

**Given:** The IID sample, finite positive variance, and ideal empirical bootstrap.

[A1] AC is assumed as required by the multivariate and conditional IID CLTs used below. [[def-axiom-of-choice]]

[F1] For a Borel $g$, the estimator is $g(\bar X_n)$ and the bootstrap estimator is $g(\bar X_n^*)$. [[def-iid-empirical-bootstrap-sample]]

[F2] Under the stated moment and differentiability hypotheses, the centered sample and bootstrap roots have the same $N(0,\sigma^2)$ first-order limit. [[thm-iid-bootstrap-validity-for-smooth-statistics]]

## Verification

1.1 Here $g(x)=x$ is Borel and differentiable everywhere with derivative $a=1$. Thus $a^T\Sigma a=\operatorname{Var}(X_1)=\sigma^2\in(0,\infty)$, so all assumptions of [F2] hold. [A1, F1, given]

2.1 Since $\hat\theta_n=\bar X_n$ and $\hat\theta_n^*=\bar X_n^*$ by [F1], [F2] gives $\sqrt n(\bar X_n-\mu)\Rightarrow N(0,\sigma^2)$ and the conditional law of $\sqrt n(\bar X_n^*-\bar X_n)$ converges weakly in probability to the same normal law. This is first-order distributional validity only. [A1, F2, step 1.1] ∎
