---
id: def-control-variate-estimator
kind: definition
title: Control-variate estimators
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-identically-distributed-and-iid-random-variables, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-moments-variance-and-covariance]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.9
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.1
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Definition

Let $(\mathsf X,\mathcal X,P)$ be a probability space, let $q\ge1$ and $n\ge1$, and let $f:\mathsf X\to\mathbb R$ and $h=(h_1,\ldots,h_q):\mathsf X\to\mathbb R^q$ be measurable with $\int|f|\,dP<\infty$ and $\int|h_j|\,dP<\infty$ for every $j$; these are integrals in [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. For any integrable $g$ write $Pg:=\int_{\mathsf X}g\,dP$. Write $\mu=Pf$ and $\theta=Ph\in\mathbb R^q$, where $\theta$ is known, and use [[def-moments-variance-and-covariance]] for variance and covariance. Given an IID sample $X_1,\ldots,X_n\sim P$ as in [[def-identically-distributed-and-iid-random-variables]] and a fixed coefficient $\beta\in\mathbb R^q$, the **control-variate estimator** is

$$
\widehat\mu_\beta=\frac1n\sum_{i=1}^n\bigl[f(X_i)-\beta^{\mathsf T}(h(X_i)-\theta)\bigr].
$$

For one scalar control this is $n^{-1}\sum_i[f(X_i)-\beta(h(X_i)-\theta)]$. The coefficient is fixed independently of the production sample in this definition; a coefficient fitted from that same sample is treated separately.
