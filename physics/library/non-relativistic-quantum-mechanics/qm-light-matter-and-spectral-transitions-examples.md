---
page: qm-light-matter-and-spectral-transitions-examples
title: "Qm Light Matter And Spectral Transitions — Examples"
status: published
library: physics
items: []
examples:
  - ex-nrqm-light-matter-two-level-dipole-drive-check
  - ex-nrqm-light-matter-hydrogen-dipole-angular-factors
  - texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison
  - rem-nrqm-light-matter-examples-scope-limits
requires:
  - qm-light-matter-and-spectral-transitions
  - qm-driven-dynamics-and-adiabatic-limits
  - qm-math-orbital-and-spin
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-math-coulomb
  - qm-central-potentials-and-hydrogen
  - qm-controlled-approximations
  - qm-photons-and-radiation-modes
  - lebesgue-measure-on-euclidean-space
---

The companion page to [[qm-light-matter-and-spectral-transitions]] collects
two conditional computations and one model comparison, with a scope remark.
[[ex-nrqm-light-matter-two-level-dipole-drive-check]] identifies declared
two-level Pauli matter data with the linear two-level drive model of
[[qm-driven-dynamics-and-adiabatic-limits]], computes the resonant
co-rotating first-order amplitude $a_+=idE_{0}\tau/(2\hbar)$, with modulus
$|a_+|=dE_{0}\tau/(2\hbar)$, and shows that its squared modulus is the leading
small-$\tau$ term of the exact averaged Rabi probability
$\sin^{2}(dE_{0}\tau/(2\hbar))$ of that model.
[[ex-nrqm-light-matter-hydrogen-dipole-angular-factors]] computes explicit
angular factors of the hydrogenic dipole matrix elements: $1/\sqrt3$ for
$\langle Y_{10},Q_{0}Y_{00}\rangle$ and its reverse, $\mp1/\sqrt3$ for
$\langle Y_{1,\pm1},Q_{\pm}Y_{00}\rangle$, and $\pm1/\sqrt3$ for
$\langle Y_{00},Q_{\pm}Y_{1,\mp1}\rangle$, under the adopted harmonic and
$Q_\pm=(x_1\pm ix_2)/\sqrt2$ conventions. These allowed $1s$-to-$2p$ and
$2p$-to-$1s$ angular entries all have modulus $1/\sqrt3$; the factors are zero
for the forbidden $1s$-to-$1s$, $1s$-to-$2s$ and $m$-violating entries. The
example contrasts them with the oscillator rule $|\Delta n|=1$.
[[texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison]]
proves that two declared cutoff-dipole models whose mode densities agree at
the transition energy have the same rate coefficient in the golden-rule limit
but different formal normalised single-vertex photon-energy laws for every
$t>0$, and that a declared ideal sharp-line model is the idealisation approached
in the limit rather than a property of the finite-time law. Reading either
formal law as a normalised single-vertex one-photon preparation requires
$\eta_{0}\ne0$. The page records no
experiment, no apparatus, no count and no statistical inference; the declared
parameters $d,E_{0},\omega_{0},\omega$, the mode densities $J_{1},J_{2}$ and
the window $B$ are model data, and comparing the declared laws with data
would test the combined model and apparatus assumptions under a declared
sampling and measurement model.
[[rem-nrqm-light-matter-examples-scope-limits]] records what the three items
establish, what they rest on and what they do not claim.
