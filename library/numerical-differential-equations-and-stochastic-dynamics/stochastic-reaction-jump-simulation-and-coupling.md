---
page: stochastic-reaction-jump-simulation-and-coupling
title: Stochastic Reaction Jump Simulation and Coupling
status: published
items:
  - def-reaction-network-propensity-system-and-generator
  - lem-competing-exponential-race-for-reaction-channels
  - alg-gillespie-direct-method-for-reaction-networks
  - alg-next-reaction-random-time-change-method
  - alg-dominating-thinning-for-time-varying-reaction-rates
  - thm-countable-state-reaction-networks-lyapunov-nonexplosion
  - thm-dominating-thinning-exactly-simulates-reaction-rates
  - alg-minimum-intensity-coupling-for-reaction-networks
  - thm-finite-state-gillespie-and-next-reaction-exactness
  - thm-minimum-intensity-coupling-preserves-exact-marginals
  - thm-reaction-counts-have-compensators-brackets-and-isometry
examples: []
---

## Summary

Define finite-channel reaction propensity systems and their marked-event convention, then give complete event laws for Gillespie direct simulation, internal Poisson clocks, and bounded-rate thinning. Prove the finite-state algorithms have the specified CTMC law and generator, and prove a proper Lyapunov bound prevents explosion for countable-state systems. Construct a minimum-intensity shared/residual coupling with exact coordinate marginals, and establish reaction-count compensators, brackets, and finite-energy jump-integral isometry. These are stochastic model statements; they do not assert that a physical chemical system follows the model. Exact-law claims assume ideal independent exponential and uniform inputs, and a finite budget returns only a path prefix.
