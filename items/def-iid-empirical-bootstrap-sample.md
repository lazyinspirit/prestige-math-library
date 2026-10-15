---
id: def-iid-empirical-bootstrap-sample
kind: definition
title: IID empirical bootstrap sample and mean statistic
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - def-partial-sums-and-sample-means
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-dirac-measure
  - def-finite-probability-space-and-event
  - thm-cardinality-of-a-set-of-functions
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by:
  - lem-empirical-bootstrap-law-is-a-probability-measure
  - lem-finite-index-bootstrap-sample-is-conditionally-iid
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–2"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §2"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
---

## Definition

Fix integers $d,n\ge1$ and observed vectors $x_1,\ldots,x_n\in\mathbb R^d$, with the Borel sigma-algebra $\mathcal B(\mathbb R^d)$ ([[def-borel-sigma-algebra]]). Their empirical law is the set function
$$P_n(A)=\frac1n\sum_{i=1}^n 1\{x_i\in A\},\qquad A\in\mathcal B(\mathbb R^d).$$

Let $\mathsf I_n=\{\omega:[n]\to[n]\}$ be the finite set of index vectors. By [[thm-cardinality-of-a-set-of-functions]], it has $n^n$ elements. Give each index vector mass $n^{-n}$; the weights sum to one, so this is a finite probability space in the sense of [[def-finite-probability-space-and-event]]. For $j=1,\ldots,n$, let $I_j(\omega)=\omega(j)$ and put $X_j^*(\omega)=x_{I_j(\omega)}$. The **ideal size-$n$ empirical bootstrap law conditional on the data** is the pushforward of this finite uniform law under
$\omega\longmapsto (x_{\omega(1)},\ldots,x_{\omega(n)}).$
Thus conditional probabilities are finite averages over the $n^n$ index tuples. The empirical law is a probability measure, and the bootstrap coordinates are conditionally IID with that law, by the well-definedness results listed in justified_by.

For random observations $X_1,\ldots,X_n$, write $\bar X_n=n^{-1}\sum_iX_i$ coordinatewise, so each coordinate is the scalar sample mean in [[def-partial-sums-and-sample-means]]. Write $P_n=n^{-1}\sum_i\delta_{X_i}$, using the Dirac measure [[def-dirac-measure]], and let $\bar X_n^*$ be the bootstrap mean. If $g:\mathbb R^d\to\mathbb R$ is Borel ([[def-measurable-function-between-measurable-spaces]]), then
$$\hat\theta_n=g(\bar X_n),\qquad \hat\theta_n^*=g(\bar X_n^*).$$
When $X_i$ are IID ([[def-identically-distributed-and-iid-random-variables]]) with finite second moment, write $\mu_j=\mathbb E X_{1j}$ and $\Sigma_{jk}=\mathbb E[(X_{1j}-\mu_j)(X_{1k}-\mu_k)]$ ([[def-moments-variance-and-covariance]]), and set $\theta=g(\mu)$. The functions of the data above are Borel statistics and estimators in the sense of [[def-statistic-and-estimator]]; coordinatewise arithmetic preserves measurability ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]). No bootstrap validity or interval coverage is part of this definition. For $n\ge2$, the delete-one mean and plug-in statistic are
$$\bar X_{n,(-i)}=\frac1{n-1}\sum_{j\ne i}X_j,\qquad \hat\theta_{n,(-i)}=g(\bar X_{n,(-i)}).$$
