---
page: cm17-classical-continua-with-explicit-constitutive-assumptions-examples
title: "Classical continua with explicit constitutive assumptions — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm17-uniform-expansion-transport-check
  - ex-cm17-elastic-plane-wave-and-energy-check
  - ex-cm17-string-modes-and-tail-check
  - ex-cm17-spring-chain-limit-numbers
  - ex-cm17-riemann-shock-and-rarefaction-check
  - ex-cm17-channel-flow-and-no-slip-check
  - ex-cm17-periodic-shear-exact-solution-check
  - cex-cm17-traction-symmetry-without-stress-matrix
requires:
  - cm17-classical-continua-with-explicit-constitutive-assumptions
  - cm-math-continuum
  - cm01-framework-quantities-and-geometry
  - cm-math-fluid
  - cm-math-geometry
---

Worked checks for
[[cm17-classical-continua-with-explicit-constitutive-assumptions]].
[[ex-cm17-uniform-expansion-transport-check]] verifies the transport
identity, the continuity equation and the constant-product law exactly on a
uniform expansion $\chi(t,X)=(1+\alpha t)X$ of a cube with specified length scale (including the one-metre cube), where $\alpha$ has units of inverse time. [[ex-cm17-elastic-plane-wave-and-energy-check]]
computes a longitudinal plane wave of the linear elastic branch: strain,
stress, the displacement equation at $c_L=\sqrt{(\lambda+2\mu_s)/\rho_0}$ and
the positive strain-energy density. [[ex-cm17-string-modes-and-tail-check]]
solves a two-mode fixed-end string exactly, cross-checks the d'Alembert
formula, and evaluates the $O(N^{-4})$ tail bound at $N=1$.
[[ex-cm17-spring-chain-limit-numbers]] compares the cyclic mass-spring chain
with the travelling standing wave: the exact discrete frequency and nodal
error, the evaluated $O(a^{3/2})$ bound at $N=100$, and the fourth-order
dispersion error. [[ex-cm17-riemann-shock-and-rarefaction-check]] verifies an
explicit Rankine-Hugoniot shock with its entropy coefficients under the countable-choice Lebesgue weak formulation and a
rarefaction fan with its initial trace in the scalar weak formulation.
[[ex-cm17-channel-flow-and-no-slip-check]] solves the steady viscous channel
exactly (Poiseuille flux and centre speed, Couette vorticity, uniqueness in
the ansatz) under the adopted no-slip wall data.
[[ex-cm17-periodic-shear-exact-solution-check]] exhibits the sinusoidal shear
as an exact steady Euler solution in the scaled variables of the periodic cell, shows it fails the
viscous projected equation, and classifies the steady periodic viscous shears
as constants. [[cex-cm17-traction-symmetry-without-stress-matrix]] refutes
the claim that the reversed-normal convention alone forces a stress matrix:
the continuous balanced-looking field $t(n)=|n_1|n$ has no representing
matrix, so the balance hypothesis of the Cauchy-tetrahedron theorem is
essential.
