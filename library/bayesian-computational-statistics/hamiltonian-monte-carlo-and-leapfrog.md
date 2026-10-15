---
page: hamiltonian-monte-carlo-and-leapfrog
title: Hamiltonian Monte Carlo and leapfrog correction
status: published
items:
  - def-leapfrog-step-map
  - thm-exact-hamiltonian-flow-preserves-energy-and-volume
  - lem-real-line-exponential-tail-integrable
  - thm-leapfrog-is-reversible-and-volume-preserving
  - def-hamiltonian-monte-carlo
  - alg-leapfrog-hamiltonian-monte-carlo
  - thm-metropolized-hamiltonian-chain-preserves-target
examples: []
---

This page defines the Gaussian-momentum Hamiltonian target and the finite leapfrog Metropolis update. It proves shear-based volume preservation, momentum-flip reversibility, and exact target invariance after the Metropolis correction. The finite integrator can have energy error; the acceptance correction restores invariance without implying mixing or convergence. Exact-flow energy and volume claims require a complete $C^1$ Hamiltonian flow, supplied under $C^2$ regularity and a complete vector field; a globally Lipschitz force is a sufficient completeness condition, and Countable Choice is used for the change-of-variables step that turns determinant one into volume preservation. The HMC definition assumes AC, which supplies that weaker axiom. The shear volume proof uses translations and product integration when $U\in C^1$; classical Jacobian matrices are asserted only when $U\in C^2$. Neal's dimension-scaling discussion uses replicated independent-coordinate targets and is not asserted as a general HMC scaling theorem here.
