---
page: geometric-numerical-integration
title: Geometric numerical integration
status: published
items:
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - lem-local-hamiltonian-flow-preserves-symplectic-matrix
  - alg-local-symplectic-euler-step
  - alg-implicit-midpoint-hamiltonian-step
  - lem-canonical-kick-and-drift-shears-have-symplectic-jacobians
  - prop-local-leapfrog-and-symplectic-euler-are-symplectic
  - thm-local-symplectic-euler-and-leapfrog-trajectory-errors
  - thm-implicit-midpoint-branch-symplectic-order-and-error
  - lem-finite-modified-hamiltonian-exists
  - lem-truncated-modified-flow-matches-map
  - lem-finite-modified-hamiltonian-close-to-original
  - lem-one-step-modified-energy-defect
  - thm-finite-order-modified-energy-bound
examples: []
---

## Summary

This page extends the published global leapfrog maps by stating their local admitted domain when a potential is defined on a proper open configuration set. It fixes kick-then-drift ordering for local symplectic Euler, proves the discrete Jacobian pullback identities directly, and derives first-order symplectic-Euler and second-order leapfrog errors on a controlled compact tube. The implicit midpoint method is defined through its actual one-stage equation, with a selected contraction branch, explicit non-success statuses, symplectic pullback, and finite-time second-order error.

For each fixed finite truncation order, the page constructs a globally defined modified Hamiltonian on a star-shaped phase domain, proves the local map-to-flow remainder and the one-step modified-energy defect, then sums that defect only while the numerical path and comparison segments stay in the declared compact tube. The formal series need not converge. The original Hamiltonian need not be an exact invariant of the discrete map. The published HMC leapfrog result continues to supply its own global reversibility and volume claims under their stated hypotheses; this page does not reprove them.

The companion examples give explicit harmonic-oscillator calculations and separate A-stability from symplecticity.

