---
id: rem-nrqm-central-hydrogen-spectroscopy-status
aliases: [nrqm-central-hydrogen-spectroscopy-status]
kind: remark
domain: physics
title: "Empirical status of the hydrogen spectrum on this pair: pending spectroscopy evidence and the limits of the model's spectral statements"
status: published
origin: session
dependency_level: 17
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A status record for the empirical comparison of the Coulomb model's spectrum with hydrogen spectroscopy: the model's spectral statements, what a comparison would presuppose, why no experiment item is built in this batch, and the deferral of transition-frequency and line-intensity statements to the radiation and light-matter items. The record asserts no measured line, no wavelength, no frequency and no empirical result, and it does not endorse or reproduce any numerical value appearing in the cited source treatments."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1.1, printed page 186 (the emission-line spectrum nu = (R/h)(1/n'^2 - 1/n^2), the Lyman, Balmer, Paschen and Brackett series and the historical Balmer fit as evidence for the model); Section 8.1.3, printed pages 190-192 (the Lamb shift and shielding as corrections beyond the gross-structure model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.1, printed pages 115-116 (the Rydberg scale, the infinite number of bound states and the fine-structure exclusion, with the numerical value alpha ~ 1/137)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Remarks

- **What the pair's spectral statements are.** The model's content is the
  conditional spectral statement of
  [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]]: bound energies
  $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}$ with $n^{2}$-fold model
  degeneracy, a complete negative spectral subspace and a nonzero continuum,
  together with the two-body threshold reading of
  [[pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum]]. These
  are statements about the declared model and its assigned parameters; they
  are not statements about any measured hydrogen line.

- **Why no experiment appears on this pair.** The design reservation for this
  pair names a spectroscopy data candidate and marks it pending. No
  source-backed observation record with preparation, apparatus, calibration,
  sampling and uncertainty was harvested for this batch, so no experiment
  item is built and no measured wavelength, frequency or transition is
  reported. The source treatments do describe the Lyman, Balmer, Paschen and
  Brackett series and the historical Balmer fit; this page neither reproduces
  their numerical values nor treats them as its own observations, and the
  comparison of the model with measured spectra is deferred to a future
  experiment item carrying its own uncertainty record.

- **What a comparison would presuppose.** An emission-frequency illustration,
  conditional on an initial model energy $E_{i}$ greater than the final energy
  $E_{f}$, uses $\nu=(E_{i}-E_{f})/h$ together with the radiation extension
  and the light-matter coupling of later pairs; no transition-frequency claim
  is made on this page. Any comparison with a measured line would test the combined
  model, apparatus and constant assumptions: the preparation and isolation
  idealization, the identification of the species parameters with measured
  masses and charges, the treatment of linewidth, Doppler and instrumental
  response, and the sampling model of the recorded sample. Agreement of a
  finite set of measured lines with the predicted values would be evidence
  about the combined assumptions; it would not be a deductive proof of the
  model, and disagreement would require the same auxiliary assumptions to be
  examined before the model is rejected.

- **Excluded corrections and their status.** The gross-structure model omits
  spin, relativistic fine structure, finite nuclear size, QED corrections
  including the Lamb shift, hyperfine structure and shielding, as recorded in
  [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (f); the
  source treatments describe some of these corrections and their
  consequences, but no magnitude, splitting or numerical value is asserted or
  used by this pair.

- **Identification caution.** The assignment of the model's parameters to a
  laboratory hydrogen atom is the tested identification of clause (e) of the
  model definition under the preparation and apparatus postulate
  ([[post-nrqm-framework-preparation-and-apparatus]]); it is not derived from
  the mathematics of the model and carries the uncertainty of that
  identification. The model's spectral statements remain conditional until
  such an identification, with its qualifications, is supplied.
