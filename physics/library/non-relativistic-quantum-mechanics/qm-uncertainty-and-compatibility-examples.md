---
page: qm-uncertainty-and-compatibility-examples
title: "Qm Uncertainty And Compatibility — Examples"
status: published
library: physics
items: []
examples:
  - ex-nrqm-uncertainty-gaussian-minimum-spread
  - texp-nrqm-uncertainty-spin-half-incompatibility
  - cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility
  - rem-nrqm-uncertainty-energy-time-caveat
  - rem-nrqm-uncertainty-error-disturbance-distinction
  - rem-nrqm-uncertainty-examples-scope-limits
requires:
  - qm-uncertainty-and-compatibility
  - the-heat-kernel-and-the-cauchy-problem
  - improper-and-parameter-dependent-multiple-integrals
  - qm-massive-particle-kinematics
  - qm-observables-and-born-probabilities
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-math-orbital-and-spin
  - qm-math-intervals-and-contacts
  - qm-autonomous-dynamics
  - qm-math-magnetic-and-detection
  - qm-measurement-and-instruments
---

The companion page to [[qm-uncertainty-and-compatibility]] collects one exact
model computation, one finite internal-factor deduction, one purely
mathematical counterexample and three remark items.
[[ex-nrqm-uncertainty-gaussian-minimum-spread]] computes, in the spin-zero
massive model, the normalized Gaussian
$\psi_{\sigma}(x)=(\pi\sigma^{2})^{-3/4}e^{-|x|^{2}/(2\sigma^{2})}$, shows
that its momentum representative is again a Gaussian with width
$\sigma_{p}=\hbar/\sigma$, evaluates the position and momentum outcome
densities and spreads $\sigma/\sqrt2$ and $\hbar/(\sigma\sqrt2)$, and verifies
that the product is $\hbar/2$ with centered vectors that are linearly
dependent and have vanishing pairing real part, realizing the equality case of
[[pthm-nrqm-uncertainty-position-momentum-relation]].
[[texp-nrqm-uncertainty-spin-half-incompatibility]] derives for the
spin-$\tfrac12$ internal factor the spread identity
$\sum_{i}(\Delta S_{i})^{2}=3\hbar^{2}/4-|\langle\mathbf S\rangle|^{2}\ge\hbar^{2}/2$,
shows with the explicit projection witness
$P_{x}^{+}P_{y}^{+}-P_{y}^{+}P_{x}^{+}=\tfrac{i}{2}\sigma_{z}$ that every pair
of components fails to be spectrally compatible, and records the saturated
Robertson product in the $S_{z}$ eigenstates.

[[cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility]]
is a mathematical counterexample: the periodic and antiperiodic momentum
operators on $L^{2}(0,1;\mathbb C)$ agree on the dense invariant domain of test functions,
so their commutator vanishes there, yet their spectral projections onto the
eigenvalues $0$ and $\pi$ do not commute. It shows why
[[def-nrqm-uncertainty-strong-spectral-commutation]] is stated at the level of
projection-valued measures. [[rem-nrqm-uncertainty-energy-time-caveat]] records
that time is a parameter and not an observable of the framework, so no
energy-time Robertson pair exists here: only the conditional timescale bound
of the graph-domain Ehrenfest theorem is available, with its curve, domain and
normalization hypotheses. [[rem-nrqm-uncertainty-error-disturbance-distinction]]
separates preparation spread, apparatus resolution and disturbance, and
records that no universal error-disturbance relation is asserted.
[[rem-nrqm-uncertainty-examples-scope-limits]] audits the item count and
confirms that no experiment, measured value or statistical inference appears.
The Gaussian computation uses the Axiom of Choice for the spectral-calculus
supplier of its outcome laws and moments, as stated in that item's assumptions.

None of the items is an experiment; there is no preparation procedure, no
apparatus, no calibration, no count, no resolution, no efficiency, no
background model, no uncertainty budget and no data comparison anywhere on the
page. Every computation is a model computation in the stated framework, and
every identification of a preparation or apparatus with the model's objects is
a tested identification under the preparation and apparatus postulate P7.
