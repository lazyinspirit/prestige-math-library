---
id: def-long-run-variance-for-stationary-markov-chain
kind: definition
title: Long-run variance for a stationary Markov chain
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-moments-variance-and-covariance
  - def-time-homogeneous-markov-chain-with-transition-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §§4.8–4.9"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §5"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo"
      url: "https://arxiv.org/pdf/0811.1729"
    - title: "Olle Häggström and Jeffrey S. Rosenthal, On Variance Conditions for Markov Chain CLTs"
      url: "https://probability.ca/jeff/ftpdir/cltexist.pdf"
verification:
  precheck: n/a
axiom_use: "The time-homogeneous Markov-chain supplier uses the library's conditional-expectation convention under AC; this definition adds no choice principle."
---

## Definition

Let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain with invariant probability $\pi$, and let $f$ be real Borel with $\pi(f)=0$ and $\pi(f^2)<\infty$. For $k\ge0$, set $\gamma_k:=\operatorname{Cov}_{\pi}(f(X_0),f(X_k))$. When the Markov-chain CLT $n^{-1/2}\sum_{k=0}^{n-1}f(X_k)\Rightarrow N(0,\sigma_f^2)$ holds with finite variance parameter and $\sum_{k\ge1}|\gamma_k|<\infty$, the **covariance long-run variance** is
$$\sigma^2_{\mathrm{LR}}(f):=\gamma_0+2\sum_{k=1}^{\infty}\gamma_k.$$

This definition does not infer a CLT from covariance summability, or infer that a weak-limit variance equals the covariance sum. Whenever $\sigma^2_{\mathrm{LR}}(f)$ is used as the variance parameter in a CLT or MCSE claim, that equality must be established by the theorem being applied. For example, the local Poisson-equation theorem proves the equality under its square-integrable solution hypotheses.

## Remarks

Under stationarity, the finite variance identity is
$$\frac1n\operatorname{Var}_{\pi}\!\left(\sum_{k=0}^{n-1}f(X_k)\right)=\gamma_0+2\sum_{k=1}^{n-1}\left(1-\frac{k}{n}\right)\gamma_k.$$
Absolute summability makes the right side converge to $\sigma^2_{\mathrm{LR}}(f)$ by dominated convergence. Equality between this variance limit and a variance parameter from weak convergence is a separate assertion; it is not part of this definition.
