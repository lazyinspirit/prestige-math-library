---
page: minimum-energy-paths-string-neb-and-saddle-certificates
title: Minimum energy paths string neb and saddle certificates
status: published
items:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - lem-dimer-central-force-hessian-vector-error
  - lem-local-root-from-uniformly-small-residual
  - lem-local-root-in-max-norm
  - alg-finite-budget-dimer-mode-following
  - alg-finite-image-string-method
  - alg-improved-tangent-climbing-neb
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - lem-centered-chord-and-unequal-step-tangent-error
  - lem-arc-length-polyline-interpolation-error
  - thm-local-index-one-saddle-certificate-from-enclosures
  - alg-index-one-eigenvector-following-step
  - prop-central-string-projected-force-consistency
  - thm-dimer-mode-perturbation-and-local-saddle-error
  - prop-improved-neb-monotone-tangent-has-first-order-projection-error
  - prop-index-one-eigenvector-step-is-the-local-newton-correction
  - thm-dimer-mode-error-contracts-local-saddle-translation
  - thm-gauge-fixed-stable-discrete-path-comparison
examples: []
---

## Objective

This page defines a regular minimum-energy path on a supplied smooth potential domain and finite projected-gradient string and improved-tangent NEB procedures with explicit redistribution, tangent ties, climbing-image force, failures and finite stopping statuses. It proves second-order centered-tangent estimates and consistency for the string discretization, while an explicit smooth curved example shows the monotone improved-NEB branch is generally only first-order consistent. A conditional gauge-fixed comparison theorem obtains a nearby discrete path only under a stated uniform inverse bound, Jacobian Lipschitz bound and interpolation estimate. The saddle results separate exact Hessian enclosures, local residual-to-root bounds, finite dimer Hessian-vector error, a gap-dependent mode estimate, and a local inexact-translation error recurrence with an explicit noise floor. No global convergence, reaction-rate or molecular-mechanism claim is made.
