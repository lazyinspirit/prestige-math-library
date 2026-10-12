---
page: qm-controlled-approximations-examples
title: Qm Controlled Approximations — Examples
status: draft
library: physics
items:
  - ex-nrqm-approximations-two-level-finite-gap-correction
  - ex-nrqm-approximations-stark-finite-level-shift
  - ex-nrqm-approximations-zeeman-multiplet-splitting
  - ex-nrqm-approximations-smooth-barrier-tunnelling-limits
  - rem-nrqm-approximations-examples-scope-limits
examples: []
requires:
  - qm-controlled-approximations
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-central-potentials-and-hydrogen
  - qm-math-coulomb
  - qm-math-orbital-and-spin
  - qm-angular-momentum-and-spin
  - qm-massive-particle-kinematics
  - qm-one-dimensional-potentials
---

This companion page works the controlled-approximation statements of
`qm-controlled-approximations` through four conditional computations and a
scope record.

[[ex-nrqm-approximations-two-level-finite-gap-correction]] solves the
declared two-level family with a finite gap exactly, reads off the second
order coefficient $-2c^{2}/g$ and verifies the page's cubic remainder bound
at half the perturbation radius.
[[ex-nrqm-approximations-stark-finite-level-shift]] builds the compressed
two-state Stark model of the declared Coulomb pair, shows that the diagonal
dipole matrix elements vanish by the angular selection rule, computes the
exact quadratic splitting and checks the remainder bound finitely.
[[ex-nrqm-approximations-zeeman-multiplet-splitting]] treats the spin-one
multiplet in a uniform field: its three energy eigenvalues are stated with
multiplicity, and they are distinct only for nonzero coupling; the first-order
operator is the whole perturbation and verifies the degenerate localisation
bound with no relaxation claim.
[[ex-nrqm-approximations-smooth-barrier-tunnelling-limits]] compares two
tunnelling asymptotic limits: the smooth-barrier semiclassical limit with
prefactor one, and the exact rectangular thick-barrier limit whose prefactor
$16E(U-E)/U^{2}$ can differ from one, exhibiting why rectangular walls are
excluded from the smooth theorem.
[[rem-nrqm-approximations-examples-scope-limits]] records what the examples
establish and what they do not.
