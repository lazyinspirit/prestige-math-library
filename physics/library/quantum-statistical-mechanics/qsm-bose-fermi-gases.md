---
page: qsm-bose-fermi-gases
title: Explicit diagonal Fock domains and occupation trace
status: published
library: physics
requires:
  - csm-exact-models
  - qm-math-oscillator
  - qm-framework-and-quantities
items:
  - def-qsm-identical-particle-fock-sectors
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-models-diagonal-occupation-trace
  - thm-qsm-models-lattice-riemann-bose-bound
  - post-qsm-models-statistics-and-preparation
  - pthm-qsm-dilute-occupation-limit
  - pthm-qsm-oscillator-spin-ensembles
  - pthm-qsm-periodic-ideal-occupation
  - pthm-qsm-fermi-zero-temperature
  - pthm-qsm-homogeneous-bose-condensation
examples: []
---

## Scope

This page develops symmetric and antisymmetric Fock spaces for a specified finite or countable orthonormal mode basis, occupation bases, actual weighted domains for bosonic creation and annihilation operators, bounded fermionic CAR operators, and exact self-adjoint diagonal energy and number multipliers. Grand occupation traces are stated with their countable-choice and summability hypotheses; trace normalization alone does not imply finite energy moments or parameter differentiability. The Fock construction does not select the statistics of a physical species.

The physical items separately adopt Bose/Fermi sector assignment and canonical or grand-canonical Gibbs preparation. The dilute comparison has an explicit squared-fugacity error. The oscillator result uses the current proved Hermite basis and self-adjoint domain; the finite spectral periodic gas is not identified with a differential periodic Laplacian. The ideal Fermi endpoint and fixed-mean-density Bose condensation are restricted model deductions. The latter is grand canonical and its zero-mode density does not concentrate above critical density.

The lattice Gaussian result uses the exact Gaussian/gamma formulas of [[lem-csm-examples-gamma-gaussian-tools]] from the required CSM page. That helper proves its Gaussian values and parameter derivatives from the closed forms and the Gamma recurrence; no M17 supplier is needed. The QSM lattice argument uses the Gaussian value and its finite products. The five extended-framework inventory entries whose `page` field names auxiliary pages are placed here according to their `home` value; this follows the paired inventory's page record and is noted in batch evidence.

All energies and chemical potentials in physical applications are joules; temperature $T$ is in K, Boltzmann's constant $k_B$ is in J K$^{-1}$, and $\beta=(k_BT)^{-1}$ is in J$^{-1}$. The reduced Planck constant $\hbar$ is in J s, angular frequency $\omega$ is in s$^{-1}$, mass is in kg, lengths are in m, and mode labels and occupations are dimensionless. Derived model predictions are not reported observations.
