---
page: dirichlet-normal-mixture-contraction
title: "Dirichlet normal-mixture posterior contraction"
status: draft
items:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-hellinger-ratio-controls-kl-moments
  - lem-gaussian-convolution-kl-and-log-square-second-order-bound
  - lem-dirichlet-normal-mixture-finite-support-approximation
  - lem-iid-posterior-contraction-under-countable-sieves
  - lem-dirichlet-normal-mixture-sieve-entropy
  - lem-dirichlet-normal-mixture-countable-band-entropy-sum
  - lem-dirichlet-process-simplex-small-ball
  - lem-dirichlet-normal-mixture-local-prior-mass
  - lem-dirichlet-normal-mixture-interval-mass-local-prior-mass
  - lem-dirichlet-normal-mixture-posterior-sieve-tail
  - thm-dirichlet-normal-mixture-posterior-contraction
  - cor-dirichlet-normal-mixture-interval-mass-refinement
examples: []
---

## Objective

This page builds the density, finite-mixture approximation, scale-band entropy,
Dirichlet simplex mass and local KL-mass estimates needed for the compact-truth
Dirichlet normal-mixture contraction theorem. It also proves the posterior
sieve-tail bound from the DP update and latent Pólya urn. The main rate is a
Hellinger contraction rate in sampling probability; it is neither an
almost-sure nor a generic minimax claim. The middle term is omitted for a
compactly supported scale hyperprior. Inverse-Gamma scale tails are outside the
stated upper-tail condition; this page makes no inconsistency claim about them.
The interval-mass refinement removes the Gaussian-bias logarithm. A local
Gaussian semigroup estimate bounds KL and log-square smoothing bias, and a
coarse-interval Dirichlet neighborhood controls its discrete perturbation.
The DP-dependent estimates use the current BCS-17 DP definition, construction,
update and predictive-law bodies; their current Step 1 records are checked in
the batch evidence. Readiness records are authoring handoff only and do not
constitute independent acceptance.
