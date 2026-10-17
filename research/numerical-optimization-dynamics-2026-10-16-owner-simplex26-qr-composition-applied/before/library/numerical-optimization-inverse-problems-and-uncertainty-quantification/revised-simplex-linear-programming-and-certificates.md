---
page: revised-simplex-linear-programming-and-certificates
title: "Revised simplex linear programming and certificates"
status: draft
requires:
  - finite-precision-direct-factorizations
  - sparse-matrix-models-and-kernel-costs
  - inequality-kkt-duality-and-optimality-certificates
items:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
  - alg-revised-simplex-residual-audit
  - lem-revised-simplex-basic-feasible-extreme-point-equivalence
  - thm-revised-simplex-primal-pivot-objective-ray-optimality
  - alg-revised-primal-simplex-bland-rule
  - alg-revised-dual-simplex-with-finite-budget
  - prop-revised-simplex-sparse-pricing-operation-count
  - thm-revised-simplex-primal-dual-residual-gap
  - thm-revised-simplex-bland-rule-finite-termination
  - thm-revised-dual-simplex-invariant-and-farkas
  - alg-revised-simplex-phase-one
  - thm-revised-simplex-phase-one-extraction-and-farkas
examples: []
---

## Objective

This page develops the revised simplex method for finite linear programs in standard form. It defines bases, primal and dual revised-simplex steps, the ratio rules, Phase I with redundant-row removal, and exact primal, dual, unboundedness, and infeasibility certificates. Bland's least-index rule handles degenerate pivots and gives finite termination in exact arithmetic over finitely many bases; this is not a polynomial-time claim. A finite-pivot-budget dual run may return inconclusive. The residual audit reports exact residuals and a primal-dual objective difference for the stored finite data; it does not certify uncertainty in data before storage. Sparse pricing counts apply to the explicitly stated stored-entry stream and make no wall-time or bandwidth claim.
