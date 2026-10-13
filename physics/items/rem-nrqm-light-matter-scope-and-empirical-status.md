---
id: rem-nrqm-light-matter-scope-and-empirical-status
aliases: [nrqm-light-matter-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the light-matter and spectral-transitions page"
status: published
origin: pipeline
dependency_level: 18
deps: [def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, def-nrqm-light-matter-framework-spectral-transition-and-detection, lem-nrqm-light-matter-first-order-photon-energy-law, pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients, pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading, pthm-nrqm-light-matter-stimulated-dipole-drive-transitions, pthm-nrqm-light-matter-dipole-selection-rules, post-nrqm-light-matter-vacuum-preparation-and-emission-assumption, post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-observable-and-probability, def-nrqm-photons-framework-ideal-counting-and-detection-model, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
  pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients: physical-result
  pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading: physical-result
  pthm-nrqm-light-matter-stimulated-dipole-drive-transitions: physical-result
  pthm-nrqm-light-matter-dipole-selection-rules: physical-result
  post-nrqm-light-matter-vacuum-preparation-and-emission-assumption: physical-assumption
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope and empirical status of the light-matter and spectral-transitions page: the adopted radiation extension, cutoff dipole model, vacuum-preparation assumption and prescribed-drive model; the conditional results proved on the page with their units; and the empirical comparisons, laboratory identifications, rates and decay statements the page does not claim."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.1 printed pages 214-215 and Box 9.2 printed page 218 (PDF pages 222-223, 226): Fermi's golden rule with its continuum and long-time approximations, and spontaneous emission as an added zero-point-field mechanism"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.4.2 printed pages 118-122 (PDF pages 121-125): the photon energy relation E=hbar*omega and the limits of a single-particle Schrodinger treatment of photon dynamics, with quantum field theory identified as a field-theoretic framework"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 14 Section 14.3 printed page 221: a classical current radiates coherent states and does not change state, unlike an emitting atom"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Scope of the page

**What the page adopts.** The page works inside the adopted radiation
extension
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]] (a
quantized free transverse sector with the mode assignments $\omega=c|k|$,
$E=\hbar\omega$ and $p=\hbar k$, adopted rather than derived from Maxwell
theory or special relativity) and the declared finite-level cutoff dipole
model
[[def-nrqm-light-matter-framework-finite-level-coupled-model]], whose matter
factor is a declared finite-dimensional subspace of the two-body Coulomb
relative-coordinate model with compressed dipole matrices and compressed
Coulomb energy, and whose channel dipole coupling $\eta_0\sum_jD_j^{\mathrm{ch}}\otimes\phi(g_j)$
to a finite family of cutoff mode vectors, with declared real Cartesian channel weights, is declared model data. It also
adopts the prescribed dipole-drive model
[[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] with its
long-wavelength regime, and the vacuum-preparation and quantized-field
assumption
[[post-nrqm-light-matter-vacuum-preparation-and-emission-assumption]]. The
identification of a laboratory system, field or apparatus with any of these
models is a tested identification with uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]).

**What the page proves conditionally.**
[[lem-nrqm-light-matter-first-order-photon-energy-law]] is the page's
mathematics: the explicit factorisation of the single-vertex emission
kernel, the normalised photon-energy law, its concentration at the transition
energy for a continuous positive mode density, and the strict positivity of
the law on windows of positive density.
[[pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients]]
proves the single-vertex emission and absorption amplitudes of the model, the
exact-model control of the one-photon level-$b$ projection probability by the
explicit Dyson tail, and the exact mirror relation between emission into and
absorption from a unit one-photon vector.
[[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]] proves the
limit of the single-vertex coefficient per unit time and declares the model
rate coefficient $\Gamma_{b}=2\pi\eta_{0}^{2}J_{b}(\Delta)/\hbar$ under a
continuous positive mode density, with the above-cutoff case tending to zero.
[[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] proves the
first-order amplitudes of the prescribed classical drive, the equal
stimulated emission and absorption coefficients for the same physical gap and prescribed real field, and
the exact identification of declared two-level Pauli data with the circular
and linear two-level drive models of the driven-dynamics page.
[[pthm-nrqm-light-matter-dipole-selection-rules]] proves the necessary
angular and parity conditions on the uncompressed dipole matrix elements, and
transfers their vanishing to compressed matrices when the declared finite-level
subspace is spanned by a finite subfamily of bound states and its declared
orthonormal basis is chosen from that same subfamily. All of these are
conditional consequences of the cited postulates, mathematics and model data;
their units are those of
[[def-nrqm-framework-quantities-and-units]].

**What the page does not claim.** The page derives no Maxwell equation, no
mode assignment, no Lorentz transformation law, no massless limit of the
massive model and no coupling constant. It contains no experiment: there is no
reported laboratory apparatus or preparation protocol, calibration, count,
frequency, efficiency, background or uncertainty budget anywhere on the page, and none is invented. It asserts
no measured spectral line, no measured rate, lifetime or linewidth, and no
exponential decay law; the model rate coefficient of
[[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]] is a limit of an
explicit model quantity, and its use as a decay constant over a time window
would require additional adopted assumptions, as the sources record
(Binney §9.3.1 on the continuum and long-time approximations; Box 9.2 on
spontaneous emission as a zero-point-field mechanism added to the classical
treatment). The page also does not claim that the coincidence of any model
number with a measured ratio proves the framework, and it reports no
statistical comparison: a comparison with data would test the combined model
and apparatus assumptions, would require a declared sampling and measurement
model, and would carry finite-sample fluctuations and systematic
uncertainties.

**Empirical status.** An emission-spectrum or lifetime experiment is a
candidate for a separate reported-experiment item, not a record of this page.
Any such item would need an authoritative full report with the apparatus,
preparation, calibration, measured outputs, trial counts where reported,
resolution, background and the reported statistical analysis; sources that
supply only historical line formulas or illustrative estimates do not
authorize quantitative empirical claims. The relation of the adopted
postulates and of the model's predictions to empirical support is recorded as
a nonlogical support relation, not as a proof premise of any item on this
page.
