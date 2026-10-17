---
page: positive-conservative-production-destruction-integrators
title: Positive Conservative Production Destruction Integrators
status: published
items:
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
  - alg-modified-patankar-euler
  - def-source-factored-production-destruction-rates
  - alg-zero-compatible-modified-patankar-euler
  - alg-mprk22-1
  - thm-modified-patankar-euler-positive-conservative
  - lem-modified-patankar-euler-positive-tube-local-error-and-stability
  - thm-zero-compatible-modified-patankar-euler-admissibility
  - thm-mprk22-1-positive-conservative
  - lem-mprk22-1-positive-tube-local-error-and-stability
  - thm-modified-patankar-euler-global-first-order-error
  - thm-patankar-inexact-solve-residual-ledger
  - thm-mprk22-1-global-second-order-error
examples: []
---

## Summary

For a finite closed system of nonnegative compartments, each production rate is paired with the equal destruction rate of its donor. The modified Patankar Euler step freezes these transfers and weights production and destruction by positive destination and source denominators, with rates evaluated at admissible states in the PDS domain. A finite matrix argument proves unique solvability, nonnegativity and exact total-mass conservation for any positive denominators. First-order accuracy is proved only for the standard choice $\sigma_i=y_i^n$ on a smooth compact positive tube; a conditional global first-order bound follows from the local defect and one-step stability estimate.

The usual ratio is undefined when a source compartment is zero. A separate source-factored, ratio-free step extends the first-order method to such states and proves its admissibility and local consistency, without assigning $0/0$ a value. The second-order item is specifically MPRK22(1): positivity and conservation hold for positive inputs at every step size when the stage rate evaluation is in the PDS domain; otherwise the procedure returns a rate-domain failure before that evaluation. Order two and global second-order error require a compact smooth positive tube with uniformly positive stage denominators. No order claim is made for zero-stage variants or for Patankar methods in general. The inexact-solve ledger makes positivity conditional on a certified component margin; a small residual alone does not establish it.
