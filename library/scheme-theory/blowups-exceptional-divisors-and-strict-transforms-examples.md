---
page: blowups-exceptional-divisors-and-strict-transforms-examples
title: "Blowups, Exceptional Divisors, and Strict Transforms: Examples and Counterexamples"
status: draft
requires: [blowups-exceptional-divisors-and-strict-transforms]
items: []
examples:
  - ex-blowup-affine-plane-origin-two-charts
  - ex-blowup-affine-three-space-origin-exceptional-p2
  - ex-blowup-principal-ideal-isomorphism
  - ex-blowup-ideal-power-same-proj
  - ex-strict-transform-cusp-first-blowup
  - ex-strict-transform-node-separates-branches
  - ex-blowup-rational-map-p1
  - cex-blowup-arbitrary-base-change-failure
  - cex-blowup-singular-center-not-smooth
  - cex-normalization-not-blowup-and-blowup-not-normalization
  - ex-total-versus-strict-transform-line-through-origin
  - ex-empty-center-blowup-identity
---

These examples and counterexamples make the constructions of the companion
page explicit. The blowup of the affine plane at the origin is computed in its
two standard charts, where it is the incidence variety $xv=yu$ inside
$\mathbf A^2\times\mathbf P^1$, and the exceptional curve is the fibre
$\mathbf P^1$ over the origin with normal sheaf of degree $-1$; the
three-dimensional analogue shows that blowing up the origin of
$\mathbf A^3$ replaces the point by a projective plane. Blowing up an
invertible ideal leaves the scheme unchanged, and replacing an ideal by a
power gives the same relative Proj, as the Rees algebras agree in the relevant
degrees.

The curve computations exhibit the difference between total and strict
transforms: a line through the origin has total transform the strict transform
plus the exceptional curve, and its strict transform meets the exceptional
curve in one point, while the cusp and the node show how the first blowup
separates data of the singularity. The rational map
$\mathbf A^2\dashrightarrow\mathbf P^1$ resolved by a base-ideal blowup
illustrates the universal property in action. Three counterexamples keep the
claims honest: blowup need not commute with a nonflat base change, blowing up
a regular point on a singular ambient surface need not give a smooth blowup, and normalization and ambient blowup
are genuinely different operations.
