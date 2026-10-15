---
page: td-continuum-heat-model
title: Continuum Heat Model
status: draft
library: physics
category: thermodynamics
items:
  - def-td-rectangular-local-equilibrium-fields
  - def-td-regular-elastic-collision-model
  - post-td-fourier-conductivity
  - post-td-local-energy-balance
  - post-td-local-equilibrium-entropy-density
  - post-td-boltzmann-molecular-chaos-model
  - lem-td-rectangular-poincare
  - pthm-td-collision-h-theorem
  - pthm-td-fourier-entropy-production
  - pthm-td-constant-conductivity-neumann-existence
  - pthm-td-neumann-heat-relaxation
  - rem-td-solution-existence-scope
examples: []
---

This page develops two conditional descriptions of heat transport on explicitly stated domains. The local continuum branch fixes a rigid rectangle and regular positive-temperature fields. Its energy balance, Fourier flux and caloric entropy density are adopted physical assumptions. They imply a local nonnegative entropy-production identity; the constant-capacity, constant-conductivity specialization has a Gaussian Neumann solution for the stated even-periodic $C^2$ initial data, and its mean-zero variance decays at an explicit exponential rate.

The kinetic branch is a separate periodic, single-species model. Incoming molecular chaos and the weak elastic collision equation are postulates. Subject to the theorem's explicit regularity, entropy and transport integrability, spatial collision-production, pointwise weak-identity and transport-equation conditions, and its current mathematical collision-entropy supplier, the kinetic entropy is nondecreasing. This conditional result does not derive the kinetic equation from many-particle mechanics, identify kinetic entropy with the local continuum entropy, or derive Fourier's law from collisions.

The page prerequisites remain those declared by the plan: [[td-entropy-foundation]], [[td-math-local-pfaff-geometry]], and [[td-math-mixture-dynamics-and-shells]]. The entropy foundation supplies the macroscopic entropy context. The geometry and mixture pages are page-level track prerequisites; this page adds no item-level claim from them that is not used in its proofs. Mathematical assumptions needed locally, including the rectangular Poincare estimate and the specified heat-kernel interface, are stated and cited at their use sites.

The order above follows the in-run supplier graph: field and collision data, adopted balance and constitutive assumptions, the local estimate, then their consuming results. The extra local caloric-entropy postulate and rectangular Poincare lemma are explicit local prerequisites rather than omitted theory. The constant-coefficient existence result is deliberately limited to its stated initial-data class; the final remark records that boundary of scope.
