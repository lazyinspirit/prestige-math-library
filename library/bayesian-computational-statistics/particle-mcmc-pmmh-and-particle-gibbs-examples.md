---
page: particle-mcmc-pmmh-and-particle-gibbs-examples
title: "Particle MCMC: PMMH and particle Gibbs — Examples"
status: draft
items: []
examples:
  - ex-pseudo-marginal-rejection
  - cex-monte-carlo-within-metropolis-not-exact
  - ex-particle-gibbs-invariant-but-sticky
  - cex-particle-gibbs-missing-path-support
---

Finite examples verify the pseudo-marginal size bias and retained-estimate
rejection rule, then contrast MCWM's unequal transition flows. A two-state,
two-particle particle Gibbs update has the correct posterior as its invariant
law but leaves the dominant state with probability below $1/9000$. A final
support counterexample shows why a proposal missing a positive-mass path does
not provide the Radon–Nikodym weights required by the exactness theorem.
