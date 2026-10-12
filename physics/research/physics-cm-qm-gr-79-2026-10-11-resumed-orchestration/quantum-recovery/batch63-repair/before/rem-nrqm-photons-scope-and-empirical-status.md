---
id: rem-nrqm-photons-scope-and-empirical-status
kind: remark
title: "Scope and empirical status of the photons and radiation modes page"
status: draft
origin: pipeline
domain: physics
dependency_level: 13
deps: [post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, def-nrqm-photons-framework-fixed-mode-polarization-model, def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, def-nrqm-photons-framework-ideal-counting-and-detection-model, pthm-nrqm-photons-fixed-mode-polarization-outcome-law, pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws, pthm-nrqm-photons-fixed-mode-number-and-energy-statistics, def-nrqm-framework-quantities-and-units, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-observable-and-probability]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  pthm-nrqm-photons-fixed-mode-polarization-outcome-law: physical-result
  pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws: physical-result
  pthm-nrqm-photons-fixed-mode-number-and-energy-statistics: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope and empirical status of the photons and radiation modes page: the adopted radiation extension, the conditional results proved on the page with their units, and the physical comparisons, laboratory identifications and extensions that the page does not claim."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.6 printed pages 14-15 (PDF pages 22-23): photon polarisation, the agreement of the transmitted fraction with the classical Malus law, and the warning that the classical and quantum descriptions coincide in this respect"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 5 'Angular Momentum', printed page 15 footnote 55: the photon has two states and requires Lorentz-group representations, omitted from the non-relativistic course; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap5.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap5.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 5.3 printed pages 48-50: field quantisation as an additional model postulate and the classical limit of coherent states"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Scope of the page

**What the page adopts.** The page adopts the radiation extension of the
framework, [[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]:
a fixed propagation-mode one-photon polarisation model with a two-dimensional
transverse internal space, a quantised free transverse radiation sector with
bosonic Fock space, and the mode assignments $\omega=c|k|$,
$E=\hbar\omega$ and $p=\hbar k$ in a declared inertial chart. These are
additional model assumptions of the framework; they are not derived from P1-P7,
not derived from classical Maxwell theory or special relativity, and not
obtained as a limit of the massive one-particle model. The page also adopts the
preparation and apparatus discipline P7
([[post-nrqm-framework-preparation-and-apparatus]]) and the observable and
probability postulate P2 ([[post-nrqm-framework-observable-and-probability]])
for every reading of a detector outcome.

**What the page proves conditionally.**
[[def-nrqm-photons-framework-fixed-mode-polarization-model]] and
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] fix the
model vocabulary, units and domains.
[[pthm-nrqm-photons-fixed-mode-polarization-outcome-law]] proves the Born
outcome law $\cos^{2}(\theta-\varphi)$, $\sin^{2}(\theta-\varphi)$ of the
declared ideal analyser, its affinity over mixtures, its phase invariance and
the conditional update of a repeated ideal analyser.
[[pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws]] proves that a
normalisable one-photon preparation has the sharp number readout one, the
energy law given by the push-forward of $\|f(k)\|^{2}\,d^{3}k$ under
$\hbar c|k|$, the corresponding momentum-component readouts, and strictly
positive energy and momentum variance.
[[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] proves the sharp
count of the $n$-quanta mode state, the Poisson count law and moments of the
mode-coherent preparation, the energy means and variances of those
preparations, and the failure of the unregularised continuum free-field Gibbs
operator to be trace class. All these are conditional consequences of P1, P2
and the adopted radiation model; their units are recorded in
[[def-nrqm-framework-quantities-and-units]] and in the assigned observables
of the model.

**What the page does not claim.** The page does not derive the radiation
extension from Maxwell's equations, does not derive a Lorentz transformation
law for mode labels, polarisations or energies, and does not assert Galilean
covariance of the radiation sector; the two polarisation states of the photon
are adopted, and their relativistic description by Lorentz-group
representations is outside this non-relativistic extension. It does not
introduce a photon position wave function, a photon localisation operator or a
general photon-position distribution; the sharp-mode label $k$ is a spectral
parameter and not a state, and no normalisable one-photon vector has sharp
frequency, energy or momentum. It does not supply a light-matter Hamiltonian, a
dipole coupling, selection rules, absorption or stimulated emission, and it
does not supply vacuum spontaneous emission; those belong to the later pair
on light-matter and spectral transitions, where the coupling and environment
assumptions are declared separately.

**What the page's idealisations are.** The declared analyser, the declared
total-number detector and the declared energy-window detector are ideal
projection-valued measurements of the model
([[def-nrqm-photons-framework-ideal-counting-and-detection-model]]). No
laboratory polariser, counter or spectrometer is identified with them; no
efficiency, dark count, dead time, background, calibration or resolution is
declared, and a destructive absorption detector would require its own
instrument. A single measurement law is not a frequency: repeated trials
require a separately declared preparation and sampling model in the sense of
P7, which this page does not supply.

**Empirical status.** The page records no experiment, no measured count, no
calibration, no uncertainty budget and no statistical test, and none is
invented. The Born ratio $\cos^{2}(\theta-\varphi)$ of the declared analyser
coincides with the intensity ratio of the declared classical transverse-field
model of the companion page; the coincidence is a property of the two declared
models and does not establish field quantisation, and classical
electromagnetic waves also interfere. Whether a given source, polariser or
detector is described by the declared fixed-mode model is a tested
identification with uncertainty under P7; agreement of the model's conditional
predictions with reported data would be evidence about the combined model and
apparatus assumptions, not a deductive proof of the model or of the framework.
