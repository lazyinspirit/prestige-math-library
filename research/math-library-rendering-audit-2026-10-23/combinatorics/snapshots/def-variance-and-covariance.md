---
id: def-variance-and-covariance
kind: definition
title: "Variance, standard deviation, and covariance on a finite probability space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-expectation-on-a-finite-probability-space, thm-reals-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Definition

For real random variables $X$ and $Y$ on one finite probability space, define
$$\operatorname{Var}(X):=\mathbb E[(X-\mathbb E[X])^2],\qquad \operatorname{Cov}(X,Y):=\mathbb E[(X-\mathbb E[X])(Y-\mathbb E[Y])].$$
The **standard deviation** of $X$ is $\sigma_X:=\operatorname{Var}(X)^{1/2}$, using the unique nonnegative square root supplied by [[thm-of-square-roots]]. Variance is nonnegative because its defining random variable is pointwise nonnegative and expectation is a sum with nonnegative weights.
