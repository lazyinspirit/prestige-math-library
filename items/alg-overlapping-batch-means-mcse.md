---
id: alg-overlapping-batch-means-mcse
kind: algorithm
title: Overlapping batch means for MCMC standard errors
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-long-run-variance-for-stationary-markov-chain
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, §3 and Theorem 2"
      url: "https://arxiv.org/pdf/0811.1729"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.9.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: n/a
axiom_use: "This finite arithmetic procedure uses no choice principle."
---

## Definition

**Inputs:** Real outputs $y_1,\ldots,y_n$, an integer $n\ge2$, and an integer batch size $b$ with $1\le b<n$. For an MCMC run, $y_i=f(X_i)$ for the chosen real-valued observable $f$.

**Outputs:** The sample mean $\bar y_n$, the overlapping-batch-means estimate $\widehat{\sigma}^2_{\mathrm{OBM}}$, and its estimated Monte Carlo standard error.

1. Compute the sample mean
$$\bar y_n=\frac1n\sum_{i=1}^n y_i.$$

2. For each starting index $j=1,\ldots,n-b+1$, compute the overlapping batch mean
$$\bar y_j(b)=\frac1b\sum_{i=j}^{j+b-1}y_i.$$

3. Return the overlapping-batch-means variance estimate
$$\widehat{\sigma}^2_{\mathrm{OBM}}=\frac{nb}{(n-b)(n-b+1)}\sum_{j=1}^{n-b+1}\bigl(\bar y_j(b)-\bar y_n\bigr)^2.$$

4. Return the estimated Monte Carlo standard error
$$\widehat{\operatorname{MCSE}}(\bar y_n)=\sqrt{\widehat{\sigma}^2_{\mathrm{OBM}}/n}.$$

All sums are finite, the denominator is positive because $b<n$, and the variance estimate is nonnegative. The procedure always returns a number for the stated finite input. It does not by itself assert a CLT or consistency; consistency requires the hypotheses of the overlapping-batch-means theorem.
