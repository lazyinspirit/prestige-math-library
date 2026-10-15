---
page: particle-mcmc-pmmh-and-particle-gibbs
title: "Particle MCMC: PMMH and particle Gibbs"
status: draft
items:
  - alg-pmmh
  - thm-pmmh-exact-invariance
  - alg-monte-carlo-within-metropolis
  - def-particle-gibbs-extended-target
  - alg-conditional-particle-gibbs
  - thm-particle-gibbs-selected-path-marginal
  - thm-particle-gibbs-conditional-sweep-is-gibbs
  - def-particle-gibbs-backward-simulation-extended-target
  - alg-particle-gibbs-backward-simulation
  - thm-particle-gibbs-backward-simulation-sweep-is-gibbs
examples: []
---

Particle marginal Metropolis–Hastings (PMMH) is an exact pseudo-marginal
Metropolis update when the likelihood estimator is nonnegative, measurable,
and unbiased for a finite-horizon state-space likelihood. Its extended state
includes all particle randomness, the selected path index, and the likelihood
estimate; rejection retains that complete state. Monte Carlo within Metropolis
(MCWM) redraws the current estimate and can lose the exact posterior, as the
finite counterexample shows.

Particle Gibbs uses a conditional particle filter on a fixed-horizon path
target. The particle cloud, ancestor indices, and selected trajectory index
form an explicit extended target whose selected parameter-path marginal is
the exact smoothing posterior for every fixed $N\ge2$. The conditional filter,
parameter full conditional, and terminal-index update are Gibbs conditionals
of that target. A density-based backward-simulation variant uses the displayed
backward probabilities and a conditional auxiliary particle filter; it is
proved as a separate extended-target sweep. Full target-path support, finite
positive evidence, and measurable proposal weights are required. Finite-$N$
invariance does not imply fast mixing, as the sticky finite example illustrates.
