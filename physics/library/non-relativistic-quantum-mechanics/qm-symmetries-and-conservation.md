---
page: qm-symmetries-and-conservation
title: "Qm Symmetries And Conservation"
status: draft
library: physics
items:
  - lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus
  - lem-nrqm-symmetries-spatial-rotation-action
  - lem-nrqm-symmetries-parity-action
  - lem-nrqm-symmetries-rotation-generators-on-schwartz-classes
  - lem-nrqm-symmetries-free-flow-multiplier-form
  - def-nrqm-symmetries-framework-symmetry-groups-and-conservation
  - post-nrqm-symmetries-prescribed-external-coupling
  - pthm-nrqm-symmetries-generator-conservation
  - pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation
  - pthm-nrqm-symmetries-rotational-and-parity-invariance
  - pthm-nrqm-symmetries-gauge-covariance
  - rem-nrqm-symmetries-scope-and-empirical-status
examples: []
requires:
  - qm-massive-particle-kinematics
  - density-separability-and-convolution-in-lp
  - harmonic-functions-and-mean-values-in-rn
  - cm-math-geometry
  - qm-framework-and-quantities
  - qm-math-fock-and-equilibrium
  - qm-math-composites
  - qm-autonomous-dynamics
  - qm-math-magnetic-and-detection
  - qm-observables-and-born-probabilities
  - qm-state-geometry
---

This page develops the symmetry and conservation structure of the declared
massive model. The vocabulary is fixed in
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]: a symmetry
of the declared dynamics is a unitary that preserves the energy domain and
commutes with the energy operator; a unitary symmetry group is a group of such
symmetries; and a conserved sharp observable is one whose outcome law is
time-independent in every preparation. The model's candidate actions are the
spatial translations, the spatial rotations with their coordinate-rotation
generators, the spatial parity action and the gauge multipliers of the
prescribed-coupling model; none of them is a symmetry by definition, and the
theorems decide for which potentials or couplings each is one.

The supporting mathematics is local to this page.
[[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]] proves the
equivalence between commutation of the flows, strong spectral commutation and
invariance of the domain of a self-adjoint observable, and records the
transport of spectral objects under unitary conjugation.
[[lem-nrqm-symmetries-spatial-rotation-action]] defines the rotation action
$U(R)f=f\circ R^{-1}$ and computes its conjugations of the position, momentum
and bounded-potential operators;
[[lem-nrqm-symmetries-parity-action]] does the same for the parity involution
$\Pi$, including $\Pi Q_{j}\Pi=-Q_{j}$ and $\Pi P_{k}\Pi=-P_{k}$;
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] identifies the
coordinate-rotation generators $L_{i}=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}$
on the Schwartz classes, proves that each Schwartz class is a core for its
generator in the graph norm, and establishes the commutation relations
$[L_{i},L_{k}]=i\hbar\sum_{j}\varepsilon_{ikj}L_{j}$ there; and
[[lem-nrqm-symmetries-free-flow-multiplier-form]] exhibits the free flow as the
unimodular multiplier $M_{f_{t}}$, $f_{t}(p)=e^{-it|p|^{2}/(2m\hbar)}$, in the
momentum representation.

On this basis [[pthm-nrqm-symmetries-generator-conservation]] proves the
equivalence of flow commutation, spectral commutation and domain invariance,
and derives the conservation of the outcome law and of the moments of a
self-adjoint observable from these hypotheses, including the case of a
self-adjoint unitary symmetry.
[[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]]
conjugates the bounded-potential operator by the translations, proves that a
translation is a symmetry exactly for potentials invariant under it almost
everywhere, shows that invariance under every translation forces an
almost-everywhere constant potential, and derives momentum conservation for
that case. [[pthm-nrqm-symmetries-rotational-and-parity-invariance]] proves the
analogous statements for rotations — with conservation of the generators
$L_{i}$ — and for parity, whose conservation is read through the self-adjoint
unitary clause of the conservation theorem.
[[post-nrqm-symmetries-prescribed-external-coupling]] states the
prescribed-coupling assumption P5a with the admissible bounded-coefficient
potentials, its units, the field definitions and the gauge transformation of
potentials and state phase; and
[[pthm-nrqm-symmetries-gauge-covariance]] proves the conjugation identity
transporting the minimal-coupling operator to the gauge-transformed
potentials, the exact criterion under which the gauge multiplier is a symmetry
of the fixed declared dynamics, the global-phase case, and the unitary
equivalence of the transformed time-dependent model carrying the transported
propagator.
[[rem-nrqm-symmetries-scope-and-empirical-status]] records the conditional
status of all of these statements, the empirical status of the model
parameters and of any symmetry identification for a laboratory system, the
excluded realizations and the supplier note on the operator development
consumed by the gauge items.

The page is the prerequisite of the angular-momentum and spin development,
which adds the orbital spherical theory and the intrinsic spin representation,
and of the examples companion, which collects the free-model computation, the
parity selection rule, the vanishing-translation counterexample and the
central-potential instance.
