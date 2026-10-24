---
page: particle-mcmc-pmmh-and-particle-gibbs
title: "Particle MCMC: PMMH and particle Gibbs"
status: published
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

Particle Gibbs here uses multinomial resampling with ancestor labels in sampled order and a conditional particle filter on a fixed-horizon path target. PMMH may use either declared unbiased offspring scheme. The particle cloud, ancestor indices, and selected trajectory index
form an explicit extended target whose selected parameter-path marginal is
the exact smoothing posterior for every fixed $N\ge2$. In a conditional
particle Gibbs sweep, the posterior parameter draw followed by conditional
filter regeneration is one joint conditional block given the retained path and
lineage; the terminal index is then drawn from its categorical conditional.
A density-based backward-simulation variant uses the displayed backward
probabilities and a conditional auxiliary particle filter. Its posterior
parameter draw and filter regeneration form a joint conditional block,
followed by the backward-index conditional. The target and proposal kernels
vary measurably with the standard-Borel parameter. Full target-path support,
finite positive evidence, and measurable proposal weights are also required.
The explicit conditional formulas hold on measurable full-posterior-measure
reference sets; exceptional reference values use a measurable unchanged-state
fallback. Finite-$N$ invariance does not imply fast mixing, as the sticky finite
example illustrates.
