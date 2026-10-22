---
page: csm-collision-transport
title: "Cutoff elastic-reflection collision measure and gain"
status: published
library: physics
items:
  - def-csm-dk-reflection-collision-gain
  - lem-csm-dk-reflection-measure-and-gain-identities
  - def-csm-dk-kinetic-macroscopic-fields
  - post-csm-dk-selected-cutoff-kinetic-model
  - lem-csm-dk-gaussian-mixture-regularity
  - thm-csm-dk-global-cutoff-collision-evolution
  - thm-csm-dk-exact-kinetic-moments
  - thm-csm-dk-regular-collision-h-and-equality
  - pthm-csm-dk-qualified-kinetic-entropy
examples: []
---

This page fixes a homogeneous three-dimensional kinetic model with a finite normalized angular law and a two-particle elastic reflection. The mathematical items establish the gain map, its collision identities, global weighted-L1 evolution, a regular Gaussian-mixture branch, exact unclosed moment balances, and the H-theorem equality case. The physical postulate adopts the closed equation as a restricted model assumption. No hard-sphere Boltzmann–Grad derivation, general hydrodynamic limit, or empirical result is asserted.

The published mathematics page [[td-math-mixture-dynamics-and-shells]] provides related context. Its conditional collision-entropy theorem [[thm-tdmath-regular-collision-entropy]] assumes a symmetric weak collision identity. The reflection map and parameter measure used here have incoming/outgoing and particle-exchange symmetries, and [[lem-csm-dk-reflection-measure-and-gain-identities]] proves the corresponding weak identity for this gain. The local entropy proof uses that exact identity and its own regularity estimates; it does not take the separately formulated theorem as a premise.
