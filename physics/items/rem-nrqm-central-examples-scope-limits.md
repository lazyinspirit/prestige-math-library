---
id: rem-nrqm-central-examples-scope-limits
aliases: [nrqm-central-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the central-potential and hydrogen examples page"
status: published
origin: session
dependency_level: 18
deps: [ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass, ex-nrqm-central-hydrogen-radial-distributions-and-moments, rem-nrqm-central-hydrogen-spectroscopy-status, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass: formulation-prerequisite
  ex-nrqm-central-hydrogen-radial-distributions-and-moments: formulation-prerequisite
  rem-nrqm-central-hydrogen-spectroscopy-status: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the examples companion of the central-potential and hydrogen pair: the conditional computations it contains, their model reliance and the content it does not supply. The record asserts no mathematical theorem and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 182-193 (the gross-structure model, its radial eigenfunctions and the historical series evidence discussed on this page)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3, printed pages 111-117 (the hydrogen atom, its spectrum, the Bohr radius and the ground-state wavefunction)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the page contains.** Two conditional computations and one status
  record in the declared Coulomb model: the exact equivalence of the
  bound-energy parametrisations in terms of $(m,\kappa)$, $(\hbar,m,a_{\kappa})$
  and $(m,\alpha,c)$, the reduced-mass factor between the relative and
  fixed-nucleus energies, and the dimensional checks of those identities
  ([[ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass]]); the
  explicit reduced radial functions, normalisations and low moments for the
  states with $n\le2$, including the check that reduced radial functions of
  different angular momentum are not orthogonal
  ([[ex-nrqm-central-hydrogen-radial-distributions-and-moments]]); and the
  empirical-status record deferring the comparison with measured spectra
  ([[rem-nrqm-central-hydrogen-spectroscopy-status]]).

- **What the page does not contain.** No experiment, no reported line, no
  wavelength or frequency value, no count, no calibration and no statistical
  inference appears; no item assigns a numerical value to any model parameter
  or measured constant, and none of the computations establishes that the
  model or its postulates describes nature. The identification of a concrete
  hydrogen atom with the declared model is a tested identification under the
  preparation and apparatus postulate
  ([[post-nrqm-framework-preparation-and-apparatus]]) and is not made here.

- **Dependence on the A page.** Every statement of the page is conditional on
  the declared Coulomb model, its assigned energy observable and the spectral
  theorem
  ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]],
  [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]]); the model
  scales $a_{\kappa}=\hbar^{2}/(m\kappa)$ and the energies are model data, not
  measured lengths or energies.

- **Deferred content.** Transition frequencies, line intensities, selection
  rules and photon statements belong to the radiation and light-matter items
  of the quantum-mechanics track; scattering and ionisation belong to the
  three-dimensional scattering pair. The numerical spectroscopic comparison
  remains a pending experiment candidate and is not anticipated by any claim
  of this page.
