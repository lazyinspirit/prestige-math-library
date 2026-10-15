---
page: iid-monte-carlo-integration-and-error
title: IID Monte Carlo integration and error
status: published
items:
  - def-iid-monte-carlo-estimators
  - thm-iid-monte-carlo-mean-moments
  - thm-iid-monte-carlo-mean-consistency
  - thm-iid-monte-carlo-sample-variance-consistency
  - thm-iid-monte-carlo-central-limit
examples: []
---

## Objective

For a real IID sequence of integrand outputs, [[def-iid-monte-carlo-estimators]] defines the sample mean, sample variance, and plug-in standard error. [[thm-iid-monte-carlo-mean-moments]] proves unbiasedness and the exact variance $\sigma^2/n$. With only a finite first absolute moment, [[thm-iid-monte-carlo-mean-consistency]] gives both weak and strong consistency. Under a finite second moment, [[thm-iid-monte-carlo-sample-variance-consistency]] proves $s_n^2\to\sigma^2$ almost surely and relative consistency of the estimated standard error when $\sigma^2>0$. Under AC and positive finite variance, [[thm-iid-monte-carlo-central-limit]] gives the Lindeberg–Lévy limit, using the library's fully proved IID CLT.

The first-moment laws remain valid when the second moment is infinite, but the finite-variance standard error and CLT conclusions do not. The mathematical sample variance formula can also lose precision if computed as a difference of two nearly equal floating-point quantities; no stable implementation or floating-point error bound is proved here.
