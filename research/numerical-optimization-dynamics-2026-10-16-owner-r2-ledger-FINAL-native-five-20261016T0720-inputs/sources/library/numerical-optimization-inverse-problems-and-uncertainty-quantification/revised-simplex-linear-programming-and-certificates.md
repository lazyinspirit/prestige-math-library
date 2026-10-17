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
  - alg-revised-simplex-qr-basis-recompute-and-audit
  - thm-revised-simplex-qr-basis-residual-status-sound
examples: []
---

## Objective

This page develops the revised simplex method for finite linear programs in standard form. It defines bases, primal and dual revised-simplex steps, the ratio rules, Phase I with redundant-row removal, and exact primal, dual, unboundedness, and infeasibility certificates. Bland's least-index rule handles degenerate pivots and gives finite termination in exact arithmetic over finitely many bases; this is not a polynomial-time claim. A finite-pivot-budget dual run may return inconclusive. The residual audit reports exact residuals and a primal-dual objective difference for the stored finite data; it does not certify uncertainty in data before storage. Sparse pricing counts apply to the explicitly stated stored-entry stream and make no wall-time or bandwidth claim.

The finite-precision basis service recomputes canonical NA02 QR of each admitted current basis and its transpose, reuses the current factors for primal, multiplier and requested direction solves, and discards them after an established basis replacement. A finite budget and explicit numerical-failure or pivot-inconclusive statuses prevent unvalidated floating signs or ratios from becoming exact pivots. Independent rounded residual certificates and a finite rational upper-bound option accompany the existing exact stored-data audit and objective-gap bound. Only that audit’s exact feasibility, dual-sign and zero-gap tests certify stored-data optimality; small residuals alone certify neither LP optimality nor infeasibility. The exact primal, dual and PhaseI methods retain their existing claims.
