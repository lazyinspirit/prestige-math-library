---
page: mcmc-diagnostics-and-finite-run-limitations
title: MCMC diagnostics and finite-run limitations
status: draft
items:
  - def-blom-rank-normalization-for-pooled-draws
  - def-empirical-left-quantile-for-finite-draws
  - def-standard-cauchy-law
  - def-functional-specific-effective-sample-size
  - alg-split-rhat-from-multiple-chains
  - alg-multichain-effective-sample-size
  - alg-rank-normalized-folded-split-rhat
  - alg-bulk-effective-sample-size
  - alg-tail-effective-sample-size
  - alg-quantile-monte-carlo-standard-error
examples: []
---

This page defines finite-array procedures for split R-hat, Blom rank
normalization, folding, bulk and tail ESS, and indicator-based quantile MCSE. It
separately defines theoretical functional-specific ESS under strict stationarity,
positive finite variance, absolute autocorrelation summability, and positive
long-run variance. The finite-array procedures return finite estimates or
**not estimable** on their stated inputs; they do not prove stationarity or
convergence. The suggested R-hat value 1.01 and ESS value 400 are empirical
recommendations, not universal theorem thresholds. The paper’s Cauchy and
eight-schools simulation findings are empirical evidence; the local Cauchy
moment and finite-array calculations are proved. A short chain can miss a region
shared by every chain.
