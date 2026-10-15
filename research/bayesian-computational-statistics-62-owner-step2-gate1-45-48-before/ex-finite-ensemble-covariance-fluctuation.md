---
id: ex-finite-ensemble-covariance-fluctuation
kind: example
title: A two-member Gaussian ensemble has a fluctuating covariance
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-ensemble-kalman-filter
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
proof_strategy: direct
generation:
  role: example
axiom_use: Assume AC as required by the standard-normal law definition; no additional choice is used.
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 8"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Example

Let $X_1,X_2$ be independent $N(0,1)$ forecast members. The divisor-$N$ sample covariance used by [[alg-ensemble-kalman-filter]] at $N=2$ is random and differs from the true forecast variance with positive probability.

## Facts & Assumptions

**Given:** Independent $X_1,X_2\sim N(0,1)$ and the divisor-$N$ covariance convention of [[alg-ensemble-kalman-filter]].

[A1] AC is assumed in the standard-normal construction. [[def-axiom-of-choice]]

[F1] The standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$, which is strictly positive on every real interval. [[def-standard-normal-and-normal-laws]]

[F2] $N(0,1)$ has mean zero and variance one under the specified multivariate-normal convention. [[def-multivariate-normal-law]]

[F3] The EnKF covariance is $N^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^T$. [[alg-ensemble-kalman-filter]]

## Verification

**Given:** The hypotheses in the Example.

1.1 For $N=2$, $\bar X=(X_1+X_2)/2$, so $X_1-\bar X=(X_1-X_2)/2$ and $X_2-\bar X=-(X_1-X_2)/2$. By [F3], $C_2=\tfrac12\bigl((X_1-\bar X)^2+(X_2-\bar X)^2\bigr)=\frac{(X_1-X_2)^2}{4}.$ [F3, given, algebra]

2.1 The event $A=\{-0.1<X_1<0.1,\ 3<X_2<3.1\}$ has positive probability: each interval has positive probability by [F1], and the variables are independent. On $A$, $X_2-X_1>2.9$, so step 1.1 gives $C_2>2.9^2/4=2.1025>1$. The true variance of $N(0,1)$ is $1$ by [F2]; hence the finite-ensemble covariance differs from it with positive probability. [A1, F1, F2, given, step 1.1, algebra] ∎
