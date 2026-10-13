---
id: rem-gr-flrw-observation-and-model-dependence
kind: remark
title: "Scope and empirical status of the homogeneous cosmological model: model predictions, reported observations and statistical inference are distinct"
status: draft
origin: session
domain: physics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-flrw-homogeneous-cosmological-model, def-gr-flrw-model-data, def-gr-flrw-spatial-model, def-gr-perfect-fluid-matter-model, def-gr-si-unit-and-coordinate-conventions, pthm-gr-flrw-field-equations-reduction, pthm-gr-flrw-power-law-solutions, pthm-gr-flrw-de-sitter-solutions, pthm-gr-flrw-cosmological-redshift]
dependency_roles:
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  pthm-gr-flrw-field-equations-reduction: physical-result
  pthm-gr-flrw-power-law-solutions: physical-result
  pthm-gr-flrw-de-sitter-solutions: physical-result
  pthm-gr-flrw-cosmological-redshift: physical-result
physical_scope: "Scope and status note for the homogeneous cosmology page: it records that the page's items are conditional results of the adopted FLRW model, that no observation, measured value or statistical inference is asserted on the page, and that comparison with reported data would test the combined model, matter, field-law and apparatus assumptions. The note asserts no physical fact about the universe and reports no measurement."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8: the Copernican-principle idealization, its observational motivation on the largest scales, the dipole caveat for a non-comoving observer and the model dependence of measured quantities such as H_0 and Omega, printed pp. 217-218 and 223-231 (PDF pp. 224-225 and 230-238)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.3: the cosmological redshift, its difference from the Doppler effect, and the caution that z is measured through identified spectral features, printed pp. 14-15 (PDF pp. 20-21)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Scope and empirical status

This note records what the items of this page do and do not establish, and how
a comparison with reported observations would have to be made. It proves
nothing and reports no measurement.

- **Physical predictions on the page are conditional on the adopted model.** The
  geometry, the matter sector and the equation of state are adopted in
  [[post-gr-flrw-homogeneous-cosmological-model]]; the field law is adopted in
  the framework. The reduction [[pthm-gr-flrw-field-equations-reduction]]
  identifies the field equations of that model with the Friedmann and
  acceleration equations, and the solution theorems
  [[pthm-gr-flrw-power-law-solutions]] and
  [[pthm-gr-flrw-de-sitter-solutions]] verify particular data against those
  equations. The redshift relation [[pthm-gr-flrw-cosmological-redshift]] is a
  consequence of the model metric and the light-ray rule alone. No item on
  this page asserts that the universe is homogeneous, isotropic, flat, dust-
  or radiation-dominated, vacuum-dominated or described by any particular
  value of the parameters.

- **Model predictions and observations are different objects.** The items on
  this page produce model quantities: a scale factor $a(t)$, a Hubble
  parameter $H=\dot a/a$, densities $\varepsilon,p$, a curvature parameter $k$,
  a cosmological parameter $\Lambda$ and energy ratios along ideal null
  geodesics [[def-gr-flrw-model-data]], [[def-gr-si-unit-and-coordinate-conventions]].
  A reported observation, by contrast, is an apparatus- and
  calibration-dependent record: for example an identified spectral feature
  with a measured wavelength ratio, or a set of source fluxes, each with
  selection effects, resolution and uncertainty. No such record is cited,
  created or simulated on this page, and no numerical value of $H$, of a
  density, of a redshift, of a distance or of an age is asserted anywhere in
  the batch.

- **Comparison is a separate statistical inference.** To compare the model
  with data one must specify the preparation and selection of the sample, the
  measurement and calibration model of the apparatus, the relation between the
  recorded quantity and the model quantity (for instance a distance measure
  defined from fluxes and luminosities, or a temperature pattern), the
  statistical model of the sampling and the error budget, and the space of
  competing models. Each of these is an additional assumption, and the
  comparison tests the model together with them; agreement is evidence about
  the combination, and a discrepancy may equally indicate an incorrect
  auxiliary assumption, an apparatus effect or an analysis error
  (see the model's own exclusions in
  [[post-gr-flrw-homogeneous-cosmological-model]] clause (iii)). Statistical
  significance, a confidence interval and a posterior probability are
  properties of the inference, not of the theory, and a p-value is not the
  probability that a model is false.

- **Idealizations the model does not capture.** The adopted model has no
  spatial inhomogeneity or anisotropy, no anisotropic stress, no heat flow or
  dissipation, no structure formation and no quantum or non-smooth effects
  ([[post-gr-flrw-homogeneous-cosmological-model]] clause (iii),
  [[def-gr-perfect-fluid-matter-model]]). The comoving congruence is a
  specific idealization of the matter motion, and the equation of state is an
  adopted constitutive relation with a stated domain. The spatial model is
  fixed globally among the standard constant-curvature models
  ([[def-gr-flrw-spatial-model]] clause (d)); this is model data, not a
  consequence of the local curvature condition, and no classification theorem
  is used.

- **What would be needed for an observation item.** A future experiment item
  for this page would have to retrieve and read primary sources, record the
  apparatus, preparation, calibration and sampling model, give operational
  definitions of the measured quantities, report the observations with their
  uncertainties and limitations, and separate the reported statistical
  inference from the model prediction, exactly as required for experiment
  items of the framework. Until such items exist, the model predictions on
  this page remain conditional on the adopted model, and the cosmological
  interpretation of any observed redshift, distance or temperature pattern is
  a modelling and inference question, not a consequence of the mathematics
  proved here. This scope note itself is a methodological summary, not a
  model-derived result.
