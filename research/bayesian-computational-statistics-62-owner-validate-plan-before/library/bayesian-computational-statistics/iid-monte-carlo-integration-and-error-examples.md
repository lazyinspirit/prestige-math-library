---
page: iid-monte-carlo-integration-and-error-examples
title: IID Monte Carlo integration and error — Examples
status: draft
items: []
examples:
  - ex-gaussian-monte-carlo-integrand
  - ex-finite-mean-infinite-variance-monte-carlo-integrand
---

## Examples

[[ex-gaussian-monte-carlo-integrand]] checks the finite-sample mean and variance formulas and the asymptotic normal error for a Gaussian integrand. [[ex-finite-mean-infinite-variance-monte-carlo-integrand]] exhibits a finite mean with an infinite second moment: the sample mean remains consistent, while there is no finite population standard error $\sigma/\sqrt n$ and the finite-variance CLT does not apply. For a finite real sample of size $n\ge2$, the empirical sample standard deviation can still be computed, but it has no finite-variance guarantee in this example.
