---
page: csm-mean-field-hierarchy
title: "Smooth periodic finite-N and scaled mean-field phase data"
status: draft
library: physics
requires:
  - cm-math-dynamics
  - csm-hamiltonian-statistics
  - markov-kernels-and-markov-chains
  - sigma-algebras-and-borel-sets
items:
  - lem-csm-dk-continuous-time-field-smooth-flow
  - def-csm-dk-periodic-mean-field-model
  - def-csm-dk-phase-space-wasserstein-one
  - post-csm-dk-mean-field-particle-and-iid-model
  - thm-csm-dk-finite-n-complete-flow
  - thm-csm-dk-exact-bbgky
  - lem-csm-dk-smooth-tests-determine-phase-probability
  - thm-csm-dk-global-lipschitz-vlasov
  - thm-csm-dk-dobrushin-and-particle-limit
  - thm-csm-dk-compact-iid-propagation-of-chaos
  - pthm-csm-dk-qualified-mean-field-limit
examples: []
---

This page fixes a smooth periodic, dimensionally scaled $N^{-1}$ interaction
model and separates its adopted assumptions from mathematical consequences.
It proves complete finite-particle Hamiltonian transport, global
bounded-Lipschitz characteristic evolution, a second-order phase-space
Dobrushin estimate, the exact finite-$N$ BBGKY hierarchy, and compact-support
iid propagation of chaos. It also proves the local smooth-test criterion used
to identify phase-space probabilities in the weak and density branches. The
compact iid conclusion is uniform only on finite time intervals and is not a
Boltzmann-Grad or real-gas result. The exact hierarchy retains correlations;
experiments do not prove the adopted model.
