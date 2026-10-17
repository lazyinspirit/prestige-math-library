---
id: post-csm-counting-and-physical-observables
kind: postulate
title: "Classical particle counting and physical observables"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-csm-phase-space-reference
  - def-csm-statistical-state-observable
  - def-cm01-units
dependency_roles:
  def-csm-phase-space-reference: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
physical_scope: "Finite-N classical phase spaces with explicitly declared species and observationally indistinguishable labels; no derivation of indistinguishability or quantum statistics."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §§1.2–1.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

For a declared classical model with $N_a$ operationally indistinguishable
particles of each species $a$, use the reference measure
$$m_N^{\mathrm{phys}}=\frac{1}{\prod_a N_a!\,a_0^{dN}}\,dq\,dp$$
in canonical coordinates read in SI numerical units. The coordinate volume
$dq\,dp$ has action dimension $(\mathrm{J\,s})^{dN}$, so division by
$a_0^{dN}$ makes the reference dimensionless. Choose $a_0>0$ as a fixed
primitive reference parameter with action units J s; [[def-cm01-units]]
supplies its dimension, not its value or the choice of this parameter. Here
$d$ is the number of spatial dimensions and $N=\sum_aN_a$. No numerical
value or identification of $a_0$ with Planck's constant is imposed.
This selects the normalized quotient-counting convention of
[[def-csm-phase-space-reference]]. If labels are operationally distinguishable,
the corresponding factorial is omitted. The convention is part of the
preparation and reference model; it is not deduced from Hamiltonian mechanics.

Represent a physical observable by a measurable function of the model phase
point, and use its expectation only when the relevant integral is finite as in
[[def-csm-statistical-state-observable]]. Whether a quantity is represented
by a gauge-dependent canonical momentum or by a gauge-invariant mechanical
momentum is fixed by the stated model and gauge convention. No quantum
exchange law, actual preparation mechanism, or empirical indistinguishability
test is asserted.
