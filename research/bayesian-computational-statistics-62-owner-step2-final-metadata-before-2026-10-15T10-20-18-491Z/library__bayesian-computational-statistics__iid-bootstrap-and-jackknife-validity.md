---
page: iid-bootstrap-and-jackknife-validity
title: IID bootstrap and jackknife for smooth statistics
status: draft
items:
  - def-iid-empirical-bootstrap-sample
  - lem-empirical-bootstrap-law-is-a-probability-measure
  - lem-finite-index-bootstrap-sample-is-conditionally-iid
  - lem-finite-bootstrap-cdf-supremum-is-measurable
  - lem-iid-sample-covariance-converges
  - thm-conditional-iid-bootstrap-clt-for-empirical-law
  - thm-iid-bootstrap-validity-for-smooth-statistics
  - thm-delete-one-jackknife-linearization-for-smooth-statistics
  - alg-lower-empirical-bootstrap-quantile
  - alg-delete-one-jackknife-acceleration
  - alg-percentile-bootstrap-interval
  - alg-basic-bootstrap-interval
  - alg-bias-corrected-bootstrap-interval
  - alg-bca-bootstrap-interval
  - alg-bootstrap-t-interval
examples: []
---

Prerequisite context is provided by [[resampling-algorithms-and-sampling-units]], the first- and second-order limits in [[delta-method-and-asymptotic-normality]], confidence-set terminology in [[confidence-sets-pivots-and-test-inversion]], and the related post-selection setting in [[polyhedral-selective-inference]]. The confidence-set and polyhedral pages provide context only; this page makes no interval-coverage or post-selection claim.

This page fixes a finite-index definition of the IID empirical bootstrap, establishes measurability of the conditional CDF distance, and proves its projected conditional CLT. Assuming AC, for IID $\mathbb R^d$-valued observations with finite second moment, Borel $g:\mathbb R^d\to\mathbb R$ Fréchet differentiable at $\mu=\mathbb E X_1$, and $0<a^T\Sigma a<\infty$ for $a=\nabla g(\mu)$, the bootstrap theorem proves first-order conditional consistency with exact centering and $\sqrt n$ scaling. For the delete-one jackknife, under the same IID, moment, and positive finite projected-variance conditions, the theorem proves pseudovalue linearization and variance consistency when $g$ is continuously Fréchet differentiable on an open neighborhood of $\mu$; this jackknife result does not require AC. Percentile, basic, BC, BCa, and bootstrap-$t$ are specified as finite-sample algorithms. Their definitions alone assert no coverage or higher-order accuracy theorem.
