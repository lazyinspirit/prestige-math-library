---
page: csm-frontier-inverse-gibbs
title: Inverse Gibbs models, identifiability and correlated uncertainty
status: draft
library: physics
requires:
  - csm-frontier-sampling-certificates
  - csm-frontier-large-deviation-ensembles
  - csm-phase-ensembles
  - bayesian-models-priors-and-posterior-laws
items:
  - def-csm-frontier-inverse-finite-exponential
  - thm-csm-frontier-inverse-identifiability
  - lem-csm-frontier-finite-polytope-support
  - thm-csm-frontier-finite-mle-existence
  - def-csm-frontier-latent-gibbs-observation
  - thm-csm-frontier-inverse-posterior
  - def-csm-frontier-pseudolikelihood
examples: []
---

This page develops exact inverse inference for finite Gibbs families. It defines
the canonical exponential family and derives the covariance, identifiability,
and affine-support relations. For a minimal family, the finite IID likelihood
has a unique finite maximizer exactly when the observed sufficient-statistic
mean lies in the relative interior of the finite convex support; boundary data
can send the field estimate to infinity.

The latent-observation definition sums hidden configurations through a
parameter-measurable observation kernel. The posterior theorem separates
standard-Borel posterior-kernel existence under the stated Axiom of Choice
from the dominated Bayes formula, which is defined only where its predictive
normalizer is finite and positive. The page also defines finite-volume Gibbs
pseudo-likelihood and keeps it separate from the exact joint likelihood.
Statements about IID data are conditional model deductions; MCMC output is not
treated as IID, and no experiment, posterior concentration, or sampling
efficiency claim is made.
