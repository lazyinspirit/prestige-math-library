---
id: def-stratified-monte-carlo-estimator
kind: definition
title: Stratified Monte Carlo estimator
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
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.4, pp. 10–14
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.3, pp. 217–219
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Definition

Let $(\mathsf X,\mathcal X,P)$ be a probability space, let $f:\mathsf X\to\mathbb R$ be measurable with $\int_{\mathsf X}|f|\,dP<\infty$, write $Pf=\int_{\mathsf X}f\,dP$, and let $H\ge1$ and $A_1,\ldots,A_H$ be a finite measurable partition of $\mathsf X$ with $p_h=P(A_h)>0$. Define the conditional stratum law by $P_h(B)=P(B\cap A_h)/p_h$ for $B\in\mathcal X$. Choose fixed integers $n_h\ge1$ and put $n=\sum_{h=1}^H n_h$. Draw mutually independent variables $X_{hj}$, with $X_{h1},\ldots,X_{hn_h}$ IID under $P_h$ as in [[def-identically-distributed-and-iid-random-variables]], and define $\bar f_h=n_h^{-1}\sum_{j=1}^{n_h}f(X_{hj})$. Expectations and variances use [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[def-moments-variance-and-covariance]]. The **stratified Monte Carlo estimator** of $Pf$ is

$$\widehat\mu_{\rm strat}=\sum_{h=1}^H p_h\bar f_h.$$

The allocation $(n_1,\ldots,n_H)$ is part of the design. A variance comparison must specify it and the comparator.
