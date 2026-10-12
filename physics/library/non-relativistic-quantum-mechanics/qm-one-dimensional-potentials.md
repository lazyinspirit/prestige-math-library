---
page: qm-one-dimensional-potentials
title: "Qm One Dimensional Potentials"
status: draft
library: physics
items:
  - lem-nrqm-potentials-one-dimensional-flux-identity
  - lem-nrqm-potentials-free-operator-differential-identification
  - lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators
  - def-nrqm-potentials-one-dimensional-line-model
  - def-nrqm-potentials-interval-and-delta-models
  - pthm-nrqm-potentials-line-model-energy-and-stationary-states
  - pthm-nrqm-potentials-barrier-flux-and-transmission
  - pthm-nrqm-potentials-finite-well-bound-states
  - pthm-nrqm-potentials-interval-spectra-completeness-and-nodes
  - pthm-nrqm-potentials-delta-point-interaction-bound-state
  - rem-nrqm-potentials-scope-and-idealizations
examples: []
requires:
  - qm-interference-and-local-detection
  - qm-math-composites
  - qm-math-intervals-and-contacts
  - qm-framework-and-quantities
  - qm-massive-particle-kinematics
  - qm-observables-and-born-probabilities
  - qm-autonomous-dynamics
  - qm-math-oscillator
---

This page develops the declared effective one-dimensional potentials of the
massive-particle framework on top of
[[qm-interference-and-local-detection]]. The batch-local mathematics begins
with [[lem-nrqm-potentials-free-operator-differential-identification]], which
identifies the free Fourier-multiplier operator of the framework's operator
supplier with the weak second-derivative operator on $W^{2,2}$,
[[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]], which
transfers self-adjointness, resolvents, spectra and eigenfamilies along
positive scaling, and
[[lem-nrqm-potentials-one-dimensional-flux-identity]], which proves the
one-dimensional continuity identity and the constancy of the probability
current of stationary solutions.
[[def-nrqm-potentials-one-dimensional-line-model]] then declares the pair's
effective line model — its state space, position and momentum assignments, its
assigned energy operator $H_{V}=H_{0}^{\mathrm{lin}}+M_{V}$ for a real bounded
measurable potential, its bound-state vocabulary and its declared generalized
stationary solutions with the scattering reading of the current — and
[[def-nrqm-potentials-interval-and-delta-models]] declares the confined
interval models with Dirichlet and separated Robin boundary conditions and the
zero-range interface model with coupling $g$.

On that basis [[pthm-nrqm-potentials-line-model-energy-and-stationary-states]]
derives that the declared energy operator is an assigned sharp observable that
generates the model's unitary flow, with stationary preparations exactly the
eigenrays and a point-mass energy law;
[[pthm-nrqm-potentials-interval-spectra-completeness-and-nodes]] derives the
discrete spectra, complete orthonormal eigenbases, min-max comparison, nodal
counts and Robin eigenvalue condition of the interval models;
[[pthm-nrqm-potentials-finite-well-bound-states]] derives the exact
bound-state root conditions, simplicity, parity and count of the finite square
well; [[pthm-nrqm-potentials-delta-point-interaction-bound-state]] derives the
self-adjointness of the zero-range model and its unique bound state
$E_{g}=-mg^{2}/(2\hbar^{2})$ for attractive coupling; and
[[pthm-nrqm-potentials-barrier-flux-and-transmission]] derives the unique
scattering solution of the rectangular barrier, its conserved current, the
exact $T$ and $R$ with the flux balance $T+R=1$, the reading of $T$ and $R$ as
fractions of the reference current, and the thick-barrier error bound.
[[rem-nrqm-potentials-scope-and-idealizations]] records what the page assumes
rather than derives — the one-dimensional reduction, the boundary conditions
and the point-interaction coupling — and what it defers.

The page is conditional throughout: P1, P2, P4 and P5 are adopted, the
one-dimensional reduction and all boundary and coupling data are declared
model assumptions in the sense of P7, and no experiment, count or measured
value appears here. The companion page collects exact finite checks of the
barrier, well and box formulas.
