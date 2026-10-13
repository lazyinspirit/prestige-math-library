---
page: qm-massive-particle-kinematics
title: "Qm Massive Particle Kinematics"
status: published
library: physics
items:
  - lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators
  - lem-nrqm-kinematics-component-valued-wavefunction-identifications
  - lem-nrqm-kinematics-componentwise-position-and-momentum
  - lem-nrqm-kinematics-ccr-and-internal-factor-commutation
  - lem-nrqm-kinematics-momentum-representation
  - def-nrqm-kinematics-framework-massive-spin-s-model
  - pthm-nrqm-kinematics-spin-s-outcome-laws
  - pthm-nrqm-kinematics-translation-covariance
  - pthm-nrqm-kinematics-boost-covariance
  - rem-nrqm-kinematics-scope-and-empirical-status
examples: []
requires:
  - qm-autonomous-dynamics
  - qm-math-composites
  - qm-math-magnetic-and-detection
  - qm-math-fock-and-equilibrium
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-state-geometry
  - qm-math-orbital-and-spin
---

This page develops the kinematic one-particle structure of the massive
spin-$s$ model that the kinematics postulate P5 assigns. The model reading is
fixed in [[def-nrqm-kinematics-framework-massive-spin-s-model]]: the state
space is the component-valued Hilbert space
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{2s+1})$ of almost-everywhere classes,
read equivalently as the complete tensor product of the spatial factor with
the finite internal factor assigned in P6; position and momentum are the
componentwise operators $Q_{j},P_{k}$ with their maximal domains and declared
units; the internal spin matrices act as matrix multiplications; and the
momentum representative and frame reading are fixed. The mathematics
supporting the definition is local to this page:
[[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]] proves
self-adjointness and norms for finite orthogonal sums,
[[lem-nrqm-kinematics-component-valued-wavefunction-identifications]]
identifies the direct-sum and tensor descriptions,
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] proves that the
componentwise operators are self-adjoint with their maximal domains, gives the
Fourier representation and the translation identities, and identifies the
coordinate translation groups with the spectral flows of the momentum
components, [[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] proves
the canonical commutation relations on the Schwartz core, determines the
spectral projection-valued measures of $Q_{j}$ and $P_{k}$ and shows that the
spatial measures commute with the internal factor, and
[[lem-nrqm-kinematics-momentum-representation]] constructs the unitary
momentum representation and its operator transforms.

On this basis [[pthm-nrqm-kinematics-spin-s-outcome-laws]] derives the
position and momentum outcome laws of the spin-$s$ model: the joint position
law with density $\|\psi(x)\|_{\mathbb C^{2s+1}}^{2}$, the momentum laws with
density $\|\psi_{p}(p)\|^{2}$ in the momentum variable, the atomlessness of
exact values and the invariance of the spatial laws under the internal factor.
[[pthm-nrqm-kinematics-translation-covariance]] and
[[pthm-nrqm-kinematics-boost-covariance]] establish the covariance of these
laws and of the bounded-potential dynamics under the Galilean translations and
boosts of the model's frame class, including the free-propagator identity and
the moving-frame bounded-potential model. The remaining items record the exact
scope: the model is conditional on the framework postulates, the mass and spin
labels are empirical parameters when a species is identified, and massless,
relativistic, singular-potential, boundary and radiation models are separate
assumptions. The page is the kinematic prerequisite of the interference,
uncertainty, one-dimensional-potential, oscillator and symmetry pages, which
consume its operators, Fourier normalization and covariance results.
