---
page: barycentric-rational-and-aaa-approximation
title: "Barycentric rational and aaa approximation"
status: draft
requires:
  - computed-singular-values-and-rank-revealing-factorizations
  - minimax-approximation-and-remez-algorithms
  - outward-rounded-interval-and-ball-arithmetic
items:
  - alg-pade-coefficient-matching
  - def-distinct-node-divided-difference
  - lem-barycentric-denominator-polynomial-nonzero
  - def-barycentric-rational-quotient
  - lem-divided-difference-lagrange-formula-and-symmetry
  - thm-pade-solvable-system-gives-local-order
  - def-floater-hormann-interpolant
  - lem-adjacent-window-divided-difference-recurrence
  - lem-divided-difference-repeated-rolle-bound
  - lem-hermite-genocchi-simplex-integral
  - prop-barycentric-rational-quotient-well-defined
  - alg-aaa-finite-sample-rational-approximation
  - def-floater-hormann-local-mesh-ratio
  - def-floater-hormann-window-polynomial
  - lem-hermite-genocchi-bv-window-variation
  - lem-floater-hormann-local-mesh-ratio-bounded-by-global
  - lem-floater-hormann-window-polynomial-interpolates
  - thm-aaa-loewner-minimum-and-support-interpolation
  - lem-floater-hormann-weight-and-blend-identity
  - lem-floater-hormann-window-newton-remainder
  - lem-floater-hormann-gap-partial-sums-positive
  - lem-floater-hormann-denominator-lower-bound
  - thm-floater-hormann-no-real-poles
  - cex-floater-hormann-cd1-seminorm-rate-fails
  - thm-floater-hormann-error-rate-bv
  - thm-floater-hormann-error-rate-c2
examples: []
---

This page develops barycentric rational quotients, the Floater–Hormann family,
finite-sample AAA, and exact Padé coefficient matching. The local proofs
establish the denominator's nonvanishing before defining the quotient,
Floater–Hormann's no-real-pole property, two supported approximation rates,
and the failure of a seminorm-only rate under a uniform-mesh construction.

The AAA procedure is an exact, finite-sample algorithm with deterministic
tie and singular-subspace rules, explicit failure and budget statuses, and a
smallest-singular-vector least-squares guarantee on successful exact-SVD
iterations. It makes no uniform
off-grid or minimax claim. The Padé result gives the local Taylor order only
when the full normalized moment system is solvable; it gives no pole-location
or analytic-continuation guarantee. The prerequisite pages supply the exact SVD procedures, minimax context,
and the real mean value theorem used in the bounded-variation result’s
optional smoothness consequence. The minimax page is contextual and is not
used as an item-level proof premise on this page.
