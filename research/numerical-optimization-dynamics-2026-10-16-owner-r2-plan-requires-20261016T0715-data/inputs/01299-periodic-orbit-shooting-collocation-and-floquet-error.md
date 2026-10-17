---
page: periodic-orbit-shooting-collocation-and-floquet-error
title: Periodic orbit shooting collocation and Floquet error
status: draft
items:
  - def-verified-flow-variational-range-oracle
  - lem-positive-convex-polygon-winding-index
  - alg-validated-euler-flow-and-monodromy-enclosure
  - def-phase-bordered-periodic-orbit-bvp
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
  - thm-c2-ode-flow-on-common-tube
  - prop-phase-bordered-bvp-root-equivalence
  - thm-validated-euler-flow-and-monodromy-enclosure-soundness
  - lem-periodic-poincare-spectrum-matches-transverse-monodromy
  - lem-phase-bordered-shooting-jacobian-invertibility
  - lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse
  - def-phase-bordered-multiple-shooting-and-midpoint-collocation
  - def-validated-periodic-shooting-jet-enclosure
  - thm-periodic-midpoint-collocation-error-budget
  - thm-periodic-shooting-residual-to-orbit-error-budget
  - alg-validated-periodic-orbit-corrector
  - lem-separated-simple-floquet-multiplier-perturbation-bound
  - alg-periodic-orbit-pseudoarclength-continuation
  - alg-floquet-multiplier-cluster-certifier
  - thm-floquet-multiplier-cluster-certificate-soundness
  - thm-validated-periodic-orbit-certificate-soundness
  - thm-orbital-stability-from-certified-floquet-multipliers
examples: []
---

## Objective

This page fixes an autonomous phase by adding the unknown period and one scalar
phase condition to the periodic endpoint equations. It records the neutral
Floquet multiplier, the exact shooting Jacobian, and the equivalence between a
simple neutral multiplier plus a transverse phase and invertibility of that
bordered Jacobian. For the autonomous flow rescaled to $[0,1]$, it defines
single/multiple-shooting and midpoint-collocation residuals, proves an explicit
bounded-inverse estimate for the continuous phase-bordered BVP, and gives
explicit residual and $h^2$ midpoint-error constants on a local branch.

Candidate solvers have finite budgets and never certify a root by their
residual alone. A rational range-oracle interface encloses the flow and
variational equation with explicit Euler defects; Krawczyk strict inclusion,
its separate contraction bound, and a nonstationarity range certify a unique
phase-fixed periodic solution within a box. A left/right-conditioned finite
bound handles an isolated simple multiplier. For clusters, the page uses a
verified resolvent cover, explicit midpoint quadrature error, a rational
$\pi$ interval, and the argument principle to count multipliers with
algebraic multiplicity. Orbital stability is concluded only when the neutral
cluster count is one and every other complete cluster enclosure is strictly
inside the unit circle. A unit-circle overlap leaves the verdict inconclusive.

The C2 common-tube flow theorem proves the required shooting-map regularity from
the field hypothesis and supplies the second variation equation.
Pseudo-arclength continuation corrects the parameterized phase-bordered
residual with a validated section equation; a fold in the parameter projection
does not itself make the full branch residual singular. The AUTO manual is
used as an algorithm and notation source, not as a replacement for the local
proofs. Exact supplier interfaces and remaining cross-batch checks are listed
in the batch notes and dependency evidence.
