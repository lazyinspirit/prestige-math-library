---
page: randomized-quasi-monte-carlo-and-replicates
title: "Randomized quasi-Monte Carlo and replicate error"
status: published
items:
  - def-b-adic-anova-components
  - lem-countable-iid-baseb-digits-from-one-uniform
  - def-lambda-t-net
  - def-rqmc-point-set-and-estimator
  - lem-b-adic-step-functions-dense-in-l2-cube
  - lem-rqmc-smooth-anova-component-bound
  - def-nested-uniform-scramble
  - lem-b-adic-anova-parseval
  - thm-rqmc-single-rule-unbiasedness
  - def-digital-shift-randomization
  - cor-rqmc-replicate-variance-estimator
  - lem-nested-scramble-marginals-and-net-preservation
  - lem-digital-shift-marginals-and-net-preservation
  - cor-rqmc-studentized-replicate-clt
  - lem-rqmc-scrambled-net-variance-identity
  - lem-rqmc-scrambled-net-gain-formula
  - lem-rqmc-general-net-gain-bound
  - lem-rqmc-zero-net-sharp-gain-bound
  - thm-rqmc-nested-scramble-smooth-net-variance-rate
  - thm-rqmc-nested-scramble-zero-net-variance-bound
examples: []
---

## Summary

An RQMC rule makes each point marginally uniform and separately declares its low-discrepancy property; points within a rule need not be independent. This gives unbiasedness for every integrable integrand. A single rule run has no replicate variance estimate: independent full-set randomizations estimate computation error for the fixed target and data, not data-sampling error. The replicate CLT is over the number of independent randomizations, under its stated AC and finite-variance hypotheses; it is not a general CLT as the point count grows, and a finite-$R$ Student interval may have poor coverage. For a nested uniform scramble, the $(0,m,d)$-net variance bound is at most $e\sigma^2/n$. Under continuous mixed partials, scrambled $(\lambda,t,m,d)$-nets have variance $O(n^{-3}(\log n)^{d-1})$. These claims require their exact net, smoothness, and $L^2$ conditions. Digital shifts and nested scrambles have different dependence and error laws.
