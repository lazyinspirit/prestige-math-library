---
page: qm-many-body-and-equilibrium-models-examples
title: Qm Many Body And Equilibrium Models — Examples
status: draft
library: physics
items:
  - ex-nrqm-many-body-two-site-bond-thermal-ensemble
  - ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble
  - ex-nrqm-many-body-gas-statistics-dilute-limits
  - texp-nrqm-many-body-two-site-no-thermalization
  - rem-nrqm-many-body-examples-scope-limits
examples: []
requires:
  - qm-many-body-and-equilibrium-models
  - qm-observables-and-born-probabilities
  - qm-framework-and-quantities
  - qm-identical-particles-and-exclusion
  - qm-math-fock-and-equilibrium
  - qm-autonomous-dynamics
---
This companion page works the many-body and equilibrium statements of
`qm-many-body-and-equilibrium-models` through three exact model computations
and one hypothetical scenario.
[[ex-nrqm-many-body-two-site-bond-thermal-ensemble]] solves the one-particle
two-site bond model exactly: the tunnelling-split eigenbasis, the canonical
weights, the mean energy $-t\tanh(\beta t)$, the entropy and the free energy.
[[ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble]] evaluates
the canonical partition sums and occupation means of two fermions in three
modes and two bosons in two modes, checking the total-occupation identity and
the ground energies against the page's diagonalisation theorem.
[[ex-nrqm-many-body-gas-statistics-dilute-limits]] verifies the exact Bose
and Fermi dilute identities in exact rational arithmetic at $q=1/10$ and
contrasts linearly spaced mode energies, whose product partition
converges, with constant mode energies, whose product partition diverges.
[[texp-nrqm-many-body-two-site-no-thermalization]] is a hypothetical
exactly-solved scenario: a site-localised preparation of the bond model
never becomes the canonical preparation under the unitary flow, the
site-occupation readout, assigned in the dimensionless particle-count unit, takes the canonical value $1/2$ at some times, and
the energy readout never takes its canonical value, so readout coincidence
is not state convergence.
[[rem-nrqm-many-body-examples-scope-limits]] records what the examples do and
do not establish. None of the items contains measured data, and every number
is an exact model value in a declared finite-mode or countable-mode idealization.
