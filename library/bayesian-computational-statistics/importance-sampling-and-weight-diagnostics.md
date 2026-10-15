---
page: importance-sampling-and-weight-diagnostics
title: Ordinary and self-normalized importance sampling
status: published
items:
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-is-unbiased
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
  - alg-self-normalized-importance-sampling
  - thm-self-normalized-importance-sampling-is-consistent-under-finite-moments
  - thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse
  - def-importance-weight-effective-sample-size
examples: []
requires:
  - iid-monte-carlo-integration-and-error
  - delta-method-and-asymptotic-normality
---

Ordinary importance sampling changes measure with a known target normalizer. Its unbiasedness needs integrable weighted values, while finite variance and a normal limit need the corresponding weighted second moment; the CLT branch also states its Axiom of Choice use. Self-normalized importance sampling estimates an unknown normalizer by a ratio. Under target support $q>0$ $\pi$-almost everywhere and the finite first moments $\mathbb E_QW=Z_p$ and $\mathbb E_Q[W|f|]<\infty$, it is strongly consistent. Finite second moments of $W$ and $Wf$ yield the ratio CLT under AC and plug-in Monte Carlo standard-error consistency without AC. The companion examples calculate finite-sample ratio bias and show that weight ESS diagnoses observed imbalance but does not certify target support coverage.
