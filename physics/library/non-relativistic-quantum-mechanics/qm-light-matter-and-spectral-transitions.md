---
page: qm-light-matter-and-spectral-transitions
title: "Qm Light Matter And Spectral Transitions"
status: draft
library: physics
items:
  - lem-nrqm-light-matter-first-order-photon-energy-law
  - def-nrqm-light-matter-framework-finite-level-coupled-model
  - def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength
  - def-nrqm-light-matter-framework-spectral-transition-and-detection
  - post-nrqm-light-matter-vacuum-preparation-and-emission-assumption
  - pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients
  - pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading
  - pthm-nrqm-light-matter-stimulated-dipole-drive-transitions
  - pthm-nrqm-light-matter-dipole-selection-rules
  - rem-nrqm-light-matter-scope-and-empirical-status
examples: []
requires:
  - qm-driven-dynamics-and-adiabatic-limits
  - qm-photons-and-radiation-modes
  - qm-math-fock-and-equilibrium
  - qm-framework-and-quantities
  - qm-controlled-approximations
  - qm-state-geometry
  - qm-observables-and-born-probabilities
  - qm-identical-particles-and-exclusion
  - qm-autonomous-dynamics
  - qm-math-controlled-dynamics
  - qm-measurement-and-instruments
  - qm-math-orbital-and-spin
  - qm-central-potentials-and-hydrogen
  - qm-math-coulomb
---

This page couples the framework's massive matter model to the adopted
radiation sector: it develops the declared finite-level cutoff dipole model,
the prescribed classical dipole-drive model, the single-vertex emission and
absorption coefficients, the golden-rule limit of the coefficient and the
electric-dipole selection rules. The model data are explicit:
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] declares a
finite-dimensional subspace of the two-body Coulomb relative-coordinate model
with its compressed Coulomb energy $H_{a}$ and compressed dipole matrices
$D^{W}_{j}=-q\,\Pi_{W}Q_{j}|_{W}$, the transverse Fock sector of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]], a
cutoff $\Lambda$, mode vectors $g_{j}$ with
$\operatorname{supp}g_{j}\subseteq\{0<\varepsilon\le\Lambda\}$ and declared real Cartesian channel weights $e_{j,i}$ and channel matrices
$D_j^{\mathrm{ch}}=\sum_{i=1}^{3}e_{j,i}D_i^{W}$,
a coupling $\eta_{0}$, and the operator
$H_{\mathrm{LM}}=H_{a}\otimes I+I\otimes H_{f}
+\eta_{0}\sum_{j=1}^{J}D^{\mathrm{ch}}_{j}\otimes\phi(g_{j})$, self-adjoint and bounded below
for $d\ge1$ by [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]; the zero-dimensional case is handled directly in the model definition.
[[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] declares
the separate prescribed-field model $H_{\mathrm d}(t)=H_{a}
-\sum_{j}E_{\mathrm{ext},j}(t)D^{W}_{j}$ in the long-wavelength dipole regime;
the two model classes are distinct, and a prescribed field of the second kind
does not supply spontaneous emission.
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]] fixes
the spectral vocabulary: the transition energy $\Delta=E_{a}-E_{b}$, the dipole
coefficients $c_{j}=\langle D^{\mathrm{ch}}_{j}v_{a},v_{b}\rangle$ in the
linear-first inner-product convention, the single-vertex
mode vector $M=\sum_{j}c_{j}g_{j}$, the photon density $\nu_{b}$, the
single-vertex emission vector $A_{b}(\cdot,t)$ and its coefficient, the
normalised photon-energy law and the declared ideal energy-window detection.

The page's mathematics is
[[lem-nrqm-light-matter-first-order-photon-energy-law]]: the factorisation
$|A_{b}(k,t)|^{2}=\eta_{0}^{2}tK_{t}(\varepsilon(k)-\Delta)\|M(k)\|^{2}$,
the normalisation of the energy law, its concentration at $\Delta$ when the
photon density is continuous and positive there, and the strict positivity of
the law on windows of positive density. On top of it,
[[pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients]]
proves the first-order Dyson components of the coupled model, controls the
exact model's one-photon level-$b$ projection probability by the explicit
Dyson tail, and proves the exact mirror relation between emission into and
absorption from a unit one-photon vector;
[[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]] proves the limit
of the single-vertex coefficient per unit time, declares the model rate
coefficient $\Gamma_{b}=2\pi\eta_{0}^{2}J_{b}(\Delta)/\hbar$ under a
continuous positive density and records that the above-cutoff case tends to
zero;
[[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] proves the
first-order amplitudes of the prescribed drive, the equal stimulated emission
and absorption coefficients at opposite detunings, and the exact
identification of declared two-level Pauli data with the circular and linear
two-level drive models of [[qm-driven-dynamics-and-adiabatic-limits]]; and
[[pthm-nrqm-light-matter-dipole-selection-rules]] proves the necessary
angular conditions $l'=l+1$, $m'=m+q$ or $l\ge1$, $l'=l-1$, $m'=m+q$ and the
Laporte parity condition for the model's dipole matrix elements. Clause (e)
transfers the vanishing conditions to a declared finite-level subspace spanned
by a finite subfamily of bound states when its declared orthonormal basis is
chosen from that same subfamily.
[[post-nrqm-light-matter-vacuum-preparation-and-emission-assumption]] states
the additional vacuum-preparation and quantized-field assumption under which
an emission process at all is represented by the model, and
[[rem-nrqm-light-matter-scope-and-empirical-status]] collects the scope and
empirical status of the page.

Every physical statement on the page is conditional on the cited postulates,
mathematics and model data, and the page records no experiment: there is no
apparatus, calibration, count, frequency, efficiency or uncertainty budget
anywhere in it, and none is invented. The mode assignments, the cutoff, the
coupling, the truncation and the mode densities are declared model data; the
model rate coefficient is a limit of an explicit model quantity, not a
measured decay constant, and no exponential decay, lifetime or linewidth is
asserted. Identifying a laboratory atom, field or spectrometer with the
declared models is a tested identification with uncertainty under
[[post-nrqm-framework-preparation-and-apparatus]].
