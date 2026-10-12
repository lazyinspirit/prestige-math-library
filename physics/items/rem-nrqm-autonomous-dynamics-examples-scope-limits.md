---
id: rem-nrqm-autonomous-dynamics-examples-scope-limits
aliases: [ nrqm-autonomous-dynamics-examples-scope-limits ]
kind: remark
domain: physics
title: "What the worked items of the companion page establish"
status: draft
origin: pipeline
dependency_level: 13
deps:
  [
    cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-observables-framework-observable-and-outcome-law,
    ex-nrqm-autonomous-dynamics-finite-stationary-superposition,
    ex-nrqm-autonomous-dynamics-two-level-precession,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation
  ]
dependency_roles:
  cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  ex-nrqm-autonomous-dynamics-finite-stationary-superposition: formulation-prerequisite
  ex-nrqm-autonomous-dynamics-two-level-precession: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the companion examples page: an inventory of the
  finite model computations it contains and of the physical questions it does
  not address. The remark asserts no dynamics and records no empirical data."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 2-3, chapter pages 2-6 (two-state precession
        computations)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.2
        and 4.4, printed pages 21-23 and 70-71 (superpositions of energy
        eigenstates and the Heisenberg picture)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## What the page establishes

**Two-level precession.** [[ex-nrqm-autonomous-dynamics-two-level-precession]] computes, on the explicit two-dimensional state space, the spectral measure and flow of the assigned energy observable $E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}}$ with $E_{1}\ne E_{2}$, the exact phases of an evolved preparation, the outcome probabilities and expectations of three bounded observables, and the rotation of the expectation-value triple about the third axis with angular frequency $\omega=(E_{2}-E_{1})/\hbar$. The computation verifies the flow and law of [[def-nrqm-autonomous-dynamics-framework-evolution]] and [[def-nrqm-observables-framework-observable-and-outcome-law]] on finite data, and it confirms the energy conservation of [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (a) in the model. No apparatus realization, detector resolution or measured frequency is asserted.

**Finite superpositions.** [[ex-nrqm-autonomous-dynamics-finite-stationary-superposition]] computes the evolution of a nonzero finite superposition of orthogonal energy eigenrays, the trigonometric-polynomial form of the outcome laws of a bounded assigned sharp observable, the exact return-time criterion $(\lambda_{m}-\lambda_{n})T/\hbar\in2\pi\mathbb Z$ for $m,n$ in the support of the coefficients, the existence criterion for a positive return time via a common frequency, and the two-energy specialization with least return time $2\pi\hbar/|\lambda_{1}-\lambda_{2}|$. These are exact model statements under the flow of [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]].

**A failed universal claim.** [[cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary]] refutes the informal universal statement that every superposition of distinct energy eigenrays is stationary: on the two-level model with $\psi_{0}=(u_{1}+u_{2})/\sqrt2$ the outcome law of the flip observable takes the values $1$ at $t=0$ and $0$ at $t=\pi/|\omega|$. The refutation isolates the relative phase as the mechanism and is consistent with the exact stationarity criterion of [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c): the individual eigenrays are stationary, the equal-weight superposition of distinct eigenrays is not.

## What the page does not establish

None of the three items is an experiment: no counts, calibration, resolution, efficiency, background, uncertainty or data comparison appears anywhere on the page, and no energy value is measured. The two-level system is an abstract model and is not identified with a spin, a magnetic moment, a photon polarization or any other species; the coupling of spin to a magnetic field belongs to the corresponding model pages, and driven or resonant dynamics is deferred to the driven-dynamics development, which adopts its own time-dependent assumptions. The return-time and precession results are statements about the model's flow and outcome law, not about the stability, decoherence or control of any laboratory preparation.
