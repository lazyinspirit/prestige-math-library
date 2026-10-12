---
page: qm-angular-momentum-and-spin
title: "Qm Angular Momentum And Spin"
status: draft
library: physics
items:
  - lem-nrqm-angular-momentum-product-flow-generator
  - lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action
  - lem-nrqm-angular-momentum-orbital-casimir-identity
  - def-nrqm-angular-momentum-framework-angular-momentum-observables
  - post-nrqm-angular-momentum-magnetic-moment-coupling
  - pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws
  - pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers
  - pthm-nrqm-angular-momentum-total-conservation
  - pthm-nrqm-angular-momentum-zeeman-precession
  - pthm-nrqm-angular-momentum-stern-gerlach-conditional-force
  - pthm-nrqm-angular-momentum-two-spin-composition
  - rem-nrqm-angular-momentum-scope-and-empirical-status
examples: []
requires:
  - qm-symmetries-and-conservation
  - qm-uncertainty-and-compatibility
  - cm-math-rotation-double-cover
  - cm-math-geometry
  - cm-math-central
  - qm-massive-particle-kinematics
  - qm-math-orbital-and-spin
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-state-geometry
  - qm-math-composites
  - qm-autonomous-dynamics
  - qm-math-magnetic-and-detection
---

This page adds the angular momentum and spin observables to the declared
massive spin-$s$ model and proves their structural properties, their spectra
and outcome laws, their conservation under rotation-invariant dynamics, and
the conditional coupling to a prescribed magnetic field. The vocabulary is
fixed in
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]: the
orbital generators $L_{i}$ are the Stone generators of the coordinate
rotation groups of [[qm-symmetries-and-conservation]] read as assigned sharp
observables; the spin operators $S_{i}=\hbar J_{i}$ are the fibrewise matrix
actions of the internal factor assigned by P6; and the total angular momenta
$J_{i}^{\mathrm{tot}}=L_{i}+S_{i}$ are self-adjoint sums on the orbital
domain.

The supporting mathematics is local to this page and precedes every physical
use. [[lem-nrqm-angular-momentum-product-flow-generator]] proves that a
self-adjoint operator perturbed by a bounded self-adjoint operator commuting
with its flow is self-adjoint and that the product of the two flows is the
flow of the sum with generator $i(A+B)$.
[[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] constructs the
$SU(2)$ lift $U_{s}(W)=U(\rho(W))M_{s}(W)$ of the componentwise rotation
action, with the explicit transported cover $\rho(W)=C^{-1}\rho_0(W)C$ matching the Pauli axes to the spatial axes, proves its representation and strong-continuity properties, identifies
$\rho(A_{i}(t))=R_{i}(t)$ for the Pauli matrix subgroups $A_{i}(t)$, proves the
strong commutation of $L_{i}$ and $S_{i}$, and identifies
$U_{s}(A_{i}(t))=e^{-itJ_{i}^{\mathrm{tot}}/\hbar}$; its kernel remark
records which spin sectors carry the genuine two-valued lift.
[[lem-nrqm-angular-momentum-orbital-casimir-identity]] proves on the finite
harmonic blocks of the sphere that $(1/\hbar)L_{i}|_{V_{l}}$ is unitarily
equivalent to the spin-$l$ matrices, with
$\sum_{i}L_{i}^{2}F=\hbar^{2}l(l+1)F$ on the harmonic span.

The physical results are conditional on the framework postulates.
[[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] computes the
spectrum and Born outcome law of every directional component
$S_{n}=\sum_{i}n_{i}S_{i}$, the Casimir identity
$S^{2}=\hbar^{2}s(s+1)I$, and the explicit spin-half probabilities.
[[pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers]]
exhibits the smooth model vectors $R(|x|)h_{lm}(x)w$ with $L_{3}\psi=\hbar
m\psi$ and the quadratic-form identity $\sum_{i}\|L_{i}\psi\|^{2}=\hbar^{2}
l(l+1)\|\psi\|^{2}$, and reads $(l,m)$ as the orbital quantum numbers of the
preparation. [[pthm-nrqm-angular-momentum-total-conservation]] proves that
for every bounded measurable potential invariant under all rotations the
lifted coordinate rotations are symmetries of the declared dynamics and that
$J_{i}^{\mathrm{tot}}$, $S_{i}$ and $L_{i}$ are conserved assigned sharp
observables. [[post-nrqm-angular-momentum-magnetic-moment-coupling]] states
the effective magnetic-moment coupling $\boldsymbol\mu=\gamma_{s}\mathbf S$
and the Zeeman operator $H_{Z}=H_{0}-\sum_{i}\gamma_{s}B_{i}(Q)S_{i}$ with
its units and the empirical status of $\gamma_{s}$ and $\mathbf B$, and
[[pthm-nrqm-angular-momentum-zeeman-precession]] computes the uniform-field
flow, the transverse precession at frequency $\omega=\gamma_{s}B_{z}$, the
conservation of $S_{3}$ and the conjugation identities.
[[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]] transports the
conditional Stern-Gerlach force law of the magnetic page to this model's spin
sectors, and [[pthm-nrqm-angular-momentum-two-spin-composition]] proves the
Clebsch-Gordan decomposition of a two-spin internal factor, the ladder
actions, the weight multiplicities and the uniqueness of the spin-half
singlet.
[[rem-nrqm-angular-momentum-scope-and-empirical-status]] records the adopted
assumptions, the proved content, the excluded topics and the empirical status
of the model parameters.
