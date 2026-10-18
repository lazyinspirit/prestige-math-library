---
page: numerical-algebraic-riccati-equations-and-stabilizing-branches
title: Numerical algebraic Riccati equations and stabilizing branches
status: draft
requires:
  - generalized-eigenvalue-pencils-and-qz-methods
  - matrix-functions-and-scaling-squaring
items:
  - def-lqr-stabilizability-and-detectability
  - lem-reachable-decomposition-and-state-feedback-pole-placement
  - alg-finite-budget-stable-block-reordering-for-schur-and-qz
  - def-standard-continuous-and-discrete-riccati-equations
  - lem-powers-of-a-schur-stable-matrix-decay
  - lem-stabilizability-and-detectability-pbh-necessary-conditions
  - thm-finite-budget-stable-block-reordering-correctness-and-status
  - alg-finite-budget-newton-kleinman-policy-iteration
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - thm-pbh-stabilizability-and-detectability-equivalence
  - thm-care-stabilizing-psd-solution-and-value
  - thm-dare-stabilizing-psd-solution-and-value
  - lem-sda-doubling-composition-and-psd-invariants
  - prop-care-hamiltonian-stable-graph
  - prop-dare-symplectic-pencil-graph-and-stable-spectrum
  - prop-inexact-newton-kleinman-safeguard
  - thm-care-local-residual-ball-certificate
  - thm-dare-local-residual-ball-certificate
  - thm-newton-kleinman-exact-global-and-local-quadratic-convergence
  - alg-finite-budget-schur-qz-riccati-candidate-extraction
  - prop-graph-basis-yields-care-or-dare-solution
  - thm-sda-convergence-and-eventual-quadratic-envelope
  - prop-dare-stable-deflating-subspace-perturbation-bound
  - lem-riccati-finite-budget-wrappers-return-a-status
  - prop-riccati-dense-work-and-acceptance-diagnostics
  - prop-riccati-sensitivity-and-graph-subspace-conditioning
examples: []
---

## Objective

This page fixes the real and complex CARE/DARE conventions, proves the closed-region PBH equivalences and stabilizing value solutions, and relates those solutions to Hamiltonian and symplectic-pencil stable graphs. It records finite-budget Schur/QZ candidate extraction with an exact finite stable-block reordering routine, local residual-and-margin certificates, exact and safeguarded Newton-Kleinman iteration, and discrete structure-preserving doubling. All numerical branches require actual Riccati residuals, symmetry checks, DARE positive-definiteness checks, and separate closed-loop stability evidence.

The underlying algebra permits singular $A$ and uses homogeneous pencil coordinates, so infinite generalized eigenvalues are retained without forming $A^{-1}$. A small residual alone does not identify the stabilizing branch. Unstructured Schur/QZ backward error is not interpreted as a nearby structured Hamiltonian or symplectic pencil.

## Conventions and proof map

The state, input, and output matrices have sizes $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$ over $F\in\{\mathbb R,\mathbb C\}$; $Q=C^*C\succeq0$, $R=R^*\succ0$, and $G=BR^{-1}B^*$. The CARE is $A^*X+XA-XGX+Q=0$. The DARE is
$$X=Q+A^*XA-A^*XB(R+B^*XB)^{-1}B^*XA.$$
The feedback and closed-loop conventions are fixed in [[def-standard-continuous-and-discrete-riccati-equations]].

The CARE proof constructs finite-horizon value matrices, passes to a positive-semidefinite limit, proves transversality using detectability, and establishes uniqueness. The DARE proof uses finite-horizon dynamic programming and a detectability convolution estimate; it never requires $A^{-1}$. The Hamiltonian and homogeneous-pencil graph identities follow by block multiplication after the value theorems. Candidate extraction runs the finite stable-block reordering procedure after the Schur/QZ reduction; boundary, separation, swap-budget, work-budget, and graph-conditioning failures remain explicit statuses.

## Numerical scope and limits

CARE and DARE local residual balls use their own derivative operators, inverse bounds, and separate stability margins. DARE stable-deflating-subspace sensitivity uses generalized Sylvester separation, paired-graph contraction, leading and reciprocal-trailing Stein margins, and a normalized graph-chart estimate. Exact Newton-Kleinman convergence is conditional on a supplied stabilizing initial feedback and exact Lyapunov solves. Inexact updates are accepted only after distinct residual, descent, and stability checks. SDA is an exact-arithmetic structure theorem; finite precision reports symmetry defects and recomputes the DARE residual and positivity evidence after any symmetrization.

Stable-block reordering acts exactly on the returned computed Schur/QZ arrays and preserves any existing unstructured reduction residual. An ordered return certifies the selected subspace of that represented form; Riccati acceptance still requires equation-level residual, symmetry, positivity where applicable, and closed-loop stability certificates. QZ backward error alone does not imply structured pencil or DARE subspace accuracy.
