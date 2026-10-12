---
id: rem-nrqm-central-scope-and-empirical-status
aliases: [nrqm-central-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the central-potential and hydrogen page"
status: draft
origin: session
dependency_level: 17
deps: [def-nrqm-central-framework-central-potential-model, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-spherical-reduction-of-smooth-states, pthm-nrqm-central-coulomb-energy-observable-and-flow, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, pthm-nrqm-central-coulomb-bound-state-radial-distributions, pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]
dependency_roles:
  def-nrqm-central-framework-central-potential-model: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-spherical-reduction-of-smooth-states: physical-result
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  pthm-nrqm-central-coulomb-bound-state-radial-distributions: physical-result
  pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope record for the central-potential and hydrogen pair: the conditional model content of the page, its exclusions, its relation to later radiation, scattering and angular-momentum items, and the empirical status of its statements. The record asserts no mathematical theorem and no empirical result; it states that no experiment is reported on the page and that comparisons with measured spectra require a separate experiment item with its own preparation, calibration and uncertainty record."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1.1, printed page 186 (the Lyman, Balmer and Paschen series as consequences of the model, and the Balmer fit as historical evidence) and Section 8.1.3-8.1.4, printed pages 190-193 (shielding, the Lamb shift and the leading corrections beyond the gross-structure model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.1, printed pages 115-116 (the Rydberg scale, the degeneration of the spectrum on orbital angular momentum and the fine-structure exclusion), and Section 4.4.1, printed pages 119-121 (the Bohr model as a precursor)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the page establishes.** The pair declares a central-potential model
  ([[def-nrqm-central-framework-central-potential-model]]) and a Coulomb and
  two-body hydrogen model
  ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]]), proves the
  spherical reduction of smooth compactly supported states
  ([[pthm-nrqm-central-spherical-reduction-of-smooth-states]]), and derives
  the energy-observable and flow reading
  ([[pthm-nrqm-central-coulomb-energy-observable-and-flow]]), the bound
  energies $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}$ with $n^{2}$-fold
  model degeneracy and the completeness of the bound states in the negative
  spectral subspace with a nonzero continuum
  ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]]), the radial
  and ground-state position readings
  ([[pthm-nrqm-central-coulomb-bound-state-radial-distributions]]), and the
  two-body reduced-mass decomposition with the relative levels as thresholds
  and the absence of stationary total states
  ([[pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum]]). Every
  item is conditional on the cited postulates, the declared model and the
  cited mathematics; none establishes that the model or its postulates
  describes nature.

- **What the page does not contain.** No experiment, no reported spectral
  line, no count, no calibration, no detector model, no sampling assumption
  and no statistical inference appears on the page, and no numerical value of
  $\hbar$, $m$, $\kappa$, $q$, $m_{1}$, $m_{2}$ or $\varepsilon_{0}$ is fixed
  by any item. The transition frequencies, line intensities and selection
  rules of a hydrogen-like system require the radiation extension and the
  light-matter coupling of later items, and the scattering, ionisation and
  continuum processes require the three-dimensional scattering pair; neither
  is built or assumed here. The dipole matrix elements and their angular
  selection rules are reserved to the light-matter pair, and the numerical
  comparison with measured spectra to a future experiment item with its own
  preparation, calibration, sampling and uncertainty record; no such item
  exists in this batch.

- **Excluded physics.** The gross-structure model excludes spin and magnetic
  couplings, relativistic fine structure and the splitting of the
  $n^{2}$-fold degeneracy, finite nuclear size and nuclear structure,
  recoil corrections beyond the two-body reduced-mass formulation, QED
  corrections including the Lamb shift, hyperfine structure, shielding and
  many-body modifications of the $1/r$ potential, external fields, and
  radiation reaction. The source treatments describe several of these
  corrections as small compared with the gross-structure energies; no such
  magnitude comparison is a premise of any item on this page, and none of the
  excluded effects is claimed to be negligible by this page.

- **Empirical status of the model's numbers.** Statements such as "the
  hydrogen ground-state binding energy is about $13.6$ electronvolts" are
  conditional evaluations of the model's formula with measured constants
  (such as the fine-structure constant, the electron-to-proton mass ratio or
  the Rydberg constant) as inputs; they carry the uncertainties, conditions
  and conventions of those inputs and are not measurements of hydrogen by
  this page. Agreement of a computed transition frequency with a measured
  line would test the combined model, apparatus and constant assumptions; it
  would not be a deductive proof of the model.

- **Physical-interface note.** The model declarations, the readings and the
  scope exclusions above are the public physical interface of the pair;
  changing them requires the ordinary direct and indirect consumer review
  under the workflow rules, and the empirical qualifications carried here
  must be preserved by every later item that consumes these results.
