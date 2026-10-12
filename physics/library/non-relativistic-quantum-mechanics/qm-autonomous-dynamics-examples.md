---
page: qm-autonomous-dynamics-examples
title: "Qm Autonomous Dynamics — Examples"
status: draft
library: physics
items: []
examples:
  - ex-nrqm-autonomous-dynamics-two-level-precession
  - ex-nrqm-autonomous-dynamics-finite-stationary-superposition
  - cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary
  - rem-nrqm-autonomous-dynamics-examples-scope-limits
requires:
  - qm-autonomous-dynamics
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-state-geometry
  - qm-math-composites
  - qm-math-magnetic-and-detection
---

The companion page to [[qm-autonomous-dynamics]] collects finite worked
computations of the framework's isolated evolution and one refutation of an
informal claim about superpositions.
[[ex-nrqm-autonomous-dynamics-two-level-precession]] computes, on the
two-level state space, the spectral measure and flow of the assigned energy
observable $E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}}$ with $E_{1}\ne E_{2}$,
the exact phases of the evolved preparation, the outcome law and expectations
of the bounded observables $X,Y,Z$, and the rotation of the expectation-value
triple about the third axis with angular frequency
$\omega=(E_{2}-E_{1})/\hbar$.
[[ex-nrqm-autonomous-dynamics-finite-stationary-superposition]] computes the
evolution of a finite superposition of orthogonal energy eigenrays, the
trigonometric-polynomial form of the outcome laws of a bounded assigned sharp
observable, the exact return-time criterion
$(\lambda_{m}-\lambda_{n})T/\hbar\in2\pi\mathbb Z$, the existence criterion
for a positive return time, and the two-energy least period
$2\pi\hbar/|\lambda_{1}-\lambda_{2}|$. The counterexample
[[cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary]]
refutes the universal claim that every superposition of distinct energy
eigenrays is stationary: in the equal-weight two-level superposition the outcome
law of the flip observable takes the value $1$ at $t=0$ and $0$ at
$t=\pi/|\omega|$, while the individual eigenrays remain stationary. The scope
remark [[rem-nrqm-autonomous-dynamics-examples-scope-limits]] records that none
of the items is an experiment: no counts, calibration, resolution, uncertainty
or data comparison is asserted anywhere on the page.
