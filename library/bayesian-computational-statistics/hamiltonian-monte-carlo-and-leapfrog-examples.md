---
page: hamiltonian-monte-carlo-and-leapfrog-examples
title: Hamiltonian Monte Carlo and leapfrog correction — Examples
status: draft
items: []
examples:
  - ex-hmc-globally-lipschitz-force
  - ex-hmc-exact-flow-limit
  - ex-hmc-leapfrog-harmonic-resonance
  - ex-hmc-finite-step-energy-error
---

The examples verify a globally Lipschitz force and its exact-flow stability bound, an exactly solvable Gaussian flow, a harmonic leapfrog resonance that leaves position unchanged, and a finite-step energy error with its Metropolis acceptance probability. They separate exact target invariance from energy conservation and exploration: the corrected kernel can preserve the target while a resonant trajectory remains trapped at a point.
