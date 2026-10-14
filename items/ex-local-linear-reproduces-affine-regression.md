---
id: ex-local-linear-reproduces-affine-regression
kind: example
title: Local-linear regression reproduces affine responses
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-local-polynomial-estimator
  - def-regression-target-version
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
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Locally Linear Regression, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/40cac15c5fb98b5bf72b8cfaab90c273_local_lin_reg.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Example

Assume AC as in [[def-regression-target-version]]. Let $X,Y$ be real random
variables with $\mathbb E|Y|<\infty$ and $Y=a+bX$ almost surely. Choose the
regular conditional law $Q(t,dy)=\delta_{a+bt}(dy)$ for every $t\in\mathbb R$;
then the chosen regression-function version is $m(t)=a+bt$ at every point.
For any observed sample and any $x,h$ whose degree-one local moment matrix is
nonsingular, the local-linear estimate equals $a+bx$, even when the design
points are asymmetric around $x$.

## Facts & Assumptions

**Given:** The integrable affine-response model, its specified pointwise
regression-function version, and a nonsingular degree-one local moment matrix.

[F1] For degree one, the estimator is the intercept from the weighted least-squares coefficient vector $(Z^\mathsf TWZ)^{-1}Z^\mathsf TWY$. [[def-local-polynomial-estimator]].

[F2] The chosen version $m(t)$ represents $\mathbb E[Y\mid X=t]$ in the almost-sure regression-target sense. [[def-regression-target-version]].

[A1] AC is inherited only through the selected version in [F2]; the finite-dimensional calculation is choice-free.

[A2] The specified conditional law $Q(t,dy)=\delta_{a+bt}(dy)$ gives $m(t)=a+bt$ for every $t$, not just almost surely under the law of $X$.

## Verification

**Given:** The data satisfy $Y_i=a+bX_i$, the selected conditional law is as in the Example, and the sample moment matrix is nonsingular.

1.1 With $u_i=(x-X_i)/h$, the design row is $(1,u_i)$ and $X_i=x-hu_i$, so $Y_i=(a+bx)-bh\,u_i$. Thus the response vector is exactly $Z\gamma$ for $\gamma=(a+bx,-bh)^\mathsf T$. [given, F1, A1, algebra]

2.1 The weighted least-squares formula gives $\widehat\beta=(Z^\mathsf TWZ)^{-1}Z^\mathsf TWZ\gamma=\gamma$. By the chosen-version convention in [F2], the specified conditional law in [A2] fixes $m(x)=a+bx$ at this evaluation point. Thus its intercept is $a+bx=m(x)$, proving exact reproduction of that chosen version. [given, F1, F2, A2, step 1.1, algebra] ∎
