---
id: def-antithetic-randomized-sampling
kind: definition
title: Antithetic randomized sampling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, lem-measurable-functions-preserve-independence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.2, pp. 5–8
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.2, pp. 205–207
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Definition

Let $d,n\ge1$, let $\mathsf X$ be a measurable space, let $P$ be a probability law on $\mathsf X$, and let $f:\mathsf X\to\mathbb R$ be measurable. Let $U_i=(U_{i1},\ldots,U_{id})$, $i=1,\ldots,n$, be IID random vectors whose coordinates are mutually independent and each have the uniform law on $[0,1]$, meaning $P(U_{ij}\le t)=t$ for $0\le t\le1$. Let $T:[0,1]^d\to\mathsf X$ be measurable and satisfy $T(U_1)\sim P$. Define the reflected input $1-U_i=(1-U_{i1},\ldots,1-U_{id})$ and the antithetic estimator by

$$
\widehat\mu_{\rm anti}=\frac1n\sum_{i=1}^n\frac{f(T(U_i))+f(T(1-U_i))}{2}.
$$

The two outputs in each pair may be dependent; pairs with different indices are independent. The variance comparison in the theorem uses $2n$ function evaluations and compares with an ordinary mean of $2n$ independent $P$-draws. IID and mutual independence have the meanings of [[def-identically-distributed-and-iid-random-variables]], and variance/covariance use [[def-moments-variance-and-covariance]].
