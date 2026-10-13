---
page: qm-photons-and-radiation-modes
title: "Qm Photons And Radiation Modes"
status: published
library: physics
items:
  - lem-nrqm-photons-analyzer-projections-and-overlaps
  - lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers
  - lem-nrqm-photons-fixed-mode-number-isometry
  - lem-nrqm-photons-transverse-fock-total-momentum
  - post-nrqm-photons-radiation-extension-and-transverse-mode-assignment
  - def-nrqm-photons-framework-radiation-sector-and-quantum-assignments
  - def-nrqm-photons-framework-fixed-mode-polarization-model
  - pthm-nrqm-photons-fixed-mode-polarization-outcome-law
  - pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws
  - def-nrqm-photons-framework-ideal-counting-and-detection-model
  - pthm-nrqm-photons-fixed-mode-number-and-energy-statistics
  - rem-nrqm-photons-scope-and-empirical-status
examples: []
requires:
  - qm-identical-particles-and-exclusion
  - qm-math-fock-and-equilibrium
  - qm-math-composites
  - qm-math-controlled-dynamics
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-observables-and-born-probabilities
  - qm-measurement-and-instruments
---

This page develops the radiation extension of the framework: the
fixed-mode polarisation model, the quantised transverse radiation sector and
the number, energy and momentum readings of its preparations. The extension is
an explicitly adopted model assumption,
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]: a
declared propagation mode carries a two-dimensional transverse polarisation
space; the free radiation is the bosonic Fock space of the transverse
one-particle space
$\mathfrak h=\{f\in L^{2}(\mathbb R^{3};\mathbb C^{3}):k\cdot f(k)=0\ \text{a.e.}\}$;
and in a declared inertial chart the mode label $k$ is assigned the frequency
$\omega=c|k|$, the photon energy $E=\hbar\omega$ and the photon momentum
$p=\hbar k$, with $c$ and $\hbar$ carrying the SI values of
[[def-nrqm-framework-quantities-and-units]]. The postulate records explicitly
that these assignments are not derived from the massive model, from Maxwell's
theory or from special relativity, that no Lorentz transformation law for mode
labels is claimed and that the extension does not claim Galilean covariance of
the radiation sector.

The supporting local mathematics precedes the physical readings.
[[lem-nrqm-photons-analyzer-projections-and-overlaps]] computes the
finite-dimensional analyser projections and the overlap
$\langle e_{\theta},\psi_{\varphi}\rangle=\cos(\theta-\varphi)$.
[[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]]
shows that the restrictions of the momentum and energy multipliers to the
transverse one-particle space are self-adjoint with the push-forward spectral
laws, have no eigenvalues, and give every unit one-photon vector in the corresponding multiplier domain finite strictly
positive variance; in particular no normalisable vector has sharp frequency,
energy or momentum. [[lem-nrqm-photons-fixed-mode-number-isometry]] identifies
the Fock space of a single declared mode inside $F(\mathfrak h)$, transfers
the number and ladder operators and computes the mode energy moments.
[[lem-nrqm-photons-transverse-fock-total-momentum]] constructs the total signed momentum multipliers on their maximal symmetric transverse sector domains, their self-adjoint Fock direct sums and spectral measures, including the vacuum atom at zero.

[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] fixes
the sector, mode and observable vocabulary, with the number observable read in
the dimensionless unit $1$, the free-field energy observable $H_f=\bigoplus_nT_n$
with $\varepsilon(k)=\hbar c|k|$ read in joules and the total momentum components and their one-photon restrictions read in $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$. On the
two-dimensional polarisation factor,
[[def-nrqm-photons-framework-fixed-mode-polarization-model]] declares the pure
polarisation preparations and the ideal analyser family, and
[[pthm-nrqm-photons-fixed-mode-polarization-outcome-law]] proves the Born law
$\cos^{2}(\theta-\varphi)$, $\sin^{2}(\theta-\varphi)$, its affinity over
mixtures, its phase invariance and the conditional update of a repeated ideal
analyser. [[pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws]]
proves the sharp one-photon number law, the frequency and energy laws as
push-forwards of $\|f(k)\|^{2}\,d^{3}k$ (a unit packet coordinate $f(k)$ has
units $\mathrm m^{3/2}$ under this measure convention), their means whenever the first moment
is finite, and the corresponding momentum-component laws and means under
absolute first-moment integrability.
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]]
declares the ideal total-number and energy-window detectors and the analyser
detection, with the explicit limits that no counter response, efficiency,
background or destructive instrument is supplied and that repeated trials
require a separate sampling model.
[[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] proves the sharp
count of the $n$-quanta mode state, the Poisson count law and moments of the
mode-coherent preparation, the energy means and variances of those
preparations, and the failure of the unregularised continuum free-field Gibbs
operator $e^{-\beta H_f}$ to be trace class for $\beta>0$ in
$\mathrm J^{-1}$, so that this trace-normalised full-sector Gibbs density is
unavailable; other thermal preparations are outside the theorem and require
separate definitions.
[[rem-nrqm-photons-scope-and-empirical-status]] collects the scope and
empirical status of the page.

Every physical statement on the page is conditional on the cited postulates
and mathematics, and the page records no experiment: there is no apparatus,
calibration, trial count, uncertainty budget or measured value anywhere in it,
and none is invented. The identification of a laboratory source, polariser,
counter or spectrometer with the declared models is a tested identification
with uncertainty under
[[post-nrqm-framework-preparation-and-apparatus]].
