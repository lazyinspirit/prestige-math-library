---
page: nrqmx-magnetic-geometry
title: "Uniform magnetic fields, flux topology and Pauli coupling"
status: draft
library: physics
items:
  - def-nrqmx-magnetic-form-data
  - def-nrqmx-periodic-ring-domain
  - lem-nrqmx-magnetic-form-closability
  - lem-nrqmx-landau-form-diagonalization
  - thm-nrqmx-periodic-flux-spectrum
  - lem-nrqmx-landau-3d-form-diagonalization
  - post-nrqmx-magnetic-model-extension
  - pthm-nrqmx-landau-direct-integral
  - pthm-nrqmx-flux-ring-spectrum
  - pthm-nrqmx-pauli-square-identity
examples: []
requires:
  - nrqmx-form-spectral-methods
  - nrqmx-adiabatic-holonomy
  - qm-math-magnetic-and-detection
  - qm-math-oscillator
  - nrqmx-operator-realizations
---

This page develops three related pieces of magnetic nonrelativistic quantum
mechanics under explicit model assumptions: the closed-form treatment of a
smooth vector potential that may grow at infinity, the topology of flux on an
ideal periodic ring, and the formal spin-half Pauli coupling. The SI
minimal-coupling convention is $\Pi=-i\hbar\nabla-qA$. In the planar
Landau formulas, for $A=(A_x,A_y):\mathbb R^2\to\mathbb R^2$, $B$ denotes
the scalar perpendicular component $B_\perp:\mathbb R^2\to\mathbb R$,
$B_\perp=\partial_xA_y-\partial_yA_x$. In the three-dimensional Pauli
model, for $A:\mathbb R^3\to\mathbb R^3$, $\mathbf B:\mathbb R^3\to\mathbb R^3$
is the curl vector $\mathbf B=\nabla\times A$.

The mathematical carrier starts with [[def-nrqmx-magnetic-form-data]] and
[[lem-nrqmx-magnetic-form-closability]]. They define the magnetic quadratic
form on $C_c^\infty$ and establish its closability for smooth real $A$ and a
real locally integrable scalar potential bounded below. The proof treats the
covariant derivatives as symmetric core operators and uses the weak
derivative criterion for closability. It does not assume that $A$ is bounded.
For the linear Landau gauge the form route is essential: $A_y=Bx$ is
unbounded, so the bounded-coefficient $H^2$ realization does not apply.

For a constant perpendicular field, [[lem-nrqmx-landau-form-diagonalization]]
constructs the partial Fourier and translation unitary and diagonalizes the
closed form into oscillator fibers with an unrestricted $L^2$ degeneracy
variable. [[pthm-nrqmx-landau-direct-integral]] then identifies the exact
infinite-plane spinless spectrum conditionally on the stated form
representation input. The infinite multiplicity is exact for this ideal
plane model; no finite-area or finite-sample state count is asserted.

[[lem-nrqmx-landau-3d-form-diagonalization]] proves that adding a free
longitudinal coordinate adds the multiplier $\hbar^2k_z^2/(2m)$ to each
transverse band, including the required weighted-form density and closure
argument. Its physical consequence is worked out on the companion page.

The ring section fixes the periodic Sobolev domain in
[[def-nrqmx-periodic-ring-domain]] and proves the shifted Fourier spectrum in
[[thm-nrqmx-periodic-flux-spectrum]]. Under the adopted zero-width ring
constraint, [[pthm-nrqmx-flux-ring-spectrum]] gives the energy levels and
periodicity under one flux quantum. The theorem's Remarks fix the loop
orientation and circulation convention. The calculation does not model a
finite-width ring or an apparatus.

Finally, [[post-nrqmx-magnetic-model-extension]] states the SI minimal-coupling
model and an optional effective spin-half form. The core algebra in
[[pthm-nrqmx-pauli-square-identity]] yields the formal coefficient $g=2$ in
that effective model. It is not a measured electron $g$-factor, and the core
identity does not assert a closed-domain identity or a relativistic
correction.
