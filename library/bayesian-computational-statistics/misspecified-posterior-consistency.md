---
page: misspecified-posterior-consistency
title: Posterior consistency at a KL projection
status: draft
items:
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - lem-centered-integrable-iid-random-walk-is-unbounded-above
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
  - lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound
  - lem-product-likelihood-tilt-has-product-density
  - prop-compact-kl-projection-tests-under-fractional-moment-continuity
  - lem-exponential-test-posterior-splitting-at-kl-projection
  - thm-posterior-consistency-at-kl-projection
examples: []
---

## Objective

This page states almost-sure posterior concentration around the full set of
KL-minimizing parameters in a dominated IID model. It defines the directional
KL projection set and the unnormalized likelihood-tilted measures
$Q_\theta(A)=P_0[(p_\theta/p_{\theta^*})1_A]$, proves the KL-neighborhood
likelihood-denominator lower bound, and proves the exponential-test
posterior-splitting lemma. The main theorem proves almost-sure exclusion
under almost-surely vanishing type-I statistics and exponential uniform
type-II error. Type-I expectations need not be summable. The original
weaker assertion with both expected test errors merely tending to zero is
false for arbitrary likelihood tilts; the companion gives an explicit
normalized dominated model with finite KL minimum and recurrent posterior
excursions. A centered integrable random-walk lemma supplies the required
hitting-time argument.

An intermediate result proves that each finite product tilt $Q_\theta^n$
has density $\prod_i(p_\theta/p_{\theta^*})(X_i)$ relative to $P_0^n$;
both test arguments use this identity explicitly.

The compact-parameter sufficient test construction requires a unique
minimizer, finite likelihood-ratio means, and continuity of the stated
fractional moments. It gives no generic testability claim on noncompact
spaces. The $Q_\theta$ are sigma-finite nonnegative measures, not normalized
probability laws; their total masses may differ from one.
