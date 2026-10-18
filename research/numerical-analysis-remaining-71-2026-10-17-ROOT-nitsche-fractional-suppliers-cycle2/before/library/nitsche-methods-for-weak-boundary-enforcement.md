---
page: nitsche-methods-for-weak-boundary-enforcement
title: "Nitsche methods for weak boundary enforcement"
status: draft
items:
  - def-nitsche-restriction-bessel-potential-sobolev-spaces
  - lem-nitsche-h-one-zero-functions-have-zero-facet-traces
  - lem-nitsche-local-polynomial-flux-inverse-trace
  - lem-nitsche-fractional-face-trace-on-simplex
  - lem-nitsche-scaled-fractional-simplex-trace
  - def-nitsche-boundary-penalty-forms
  - lem-nitsche-global-boundary-flux-bound
  - lem-nitsche-fractional-weak-green-and-flux-cancellation
  - thm-nitsche-zero-boundary-fractional-comparison-interpolation
  - lem-nitsche-global-fractional-boundary-flux-trace
  - lem-nitsche-penalty-coercivity
  - thm-nitsche-consistency-and-energy-quasioptimality
  - thm-nonsymmetric-nitsche-l2-error-with-boundary-defect
  - thm-symmetric-nitsche-l2-error-under-dual-regularity
examples: []
requires:
  - variational-crimes-and-strang-lemmas
---

Nitsche's method imposes Dirichlet data in an $H^1$-conforming finite-element space without restricting the trial functions to have the prescribed trace. The boundary flux terms supply consistency, and a penalty of size $\gamma_0/h_F$ supplies stability only above a sufficient inverse-trace threshold. This page proves the fractional weak Green identity, the zero-boundary comparison interpolation bound including its normal-derivative term, and the fixed-domain weighted flux trace. The symmetric $L^2$ estimate still requires its genuine dual PDE regularity hypothesis and keeps the separate higher-order primal approximation branch; the nonsymmetric estimate retains its half-order boundary defect.
