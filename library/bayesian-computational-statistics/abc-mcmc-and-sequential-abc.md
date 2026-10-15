---
page: abc-mcmc-and-sequential-abc
title: ABC-MCMC and ABC-sequential Monte Carlo
status: published
items:
  - def-abc-augmented-tolerance-target
  - lem-abc-augmented-target-has-tolerance-posterior-marginal
  - alg-abc-metropolis-hastings
  - alg-abc-sequential-smc
  - thm-abc-metropolis-hastings-invariance
  - thm-abc-sequential-smc-rn-weight-update
examples: []
---

## Objective

This page makes the simulator-based approximate target explicit on the
augmented parameter-data space whenever the tolerance-event probability is
positive. Under AC, with standard-Borel state spaces and a probability proposal
kernel, the general Metropolis–Hastings construction preserves this target. The
sequential population procedure uses a finite nonincreasing schedule of
positive tolerances with positive normalizers, and reweights proposals when
each reached proposal mixture dominates the prior almost surely. Summary
reduction and positive tolerance can bias the target, while acceptance rates,
finite-particle error, and MCMC mixing remain separate questions.
