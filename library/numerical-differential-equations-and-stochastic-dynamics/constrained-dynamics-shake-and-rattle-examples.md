---
page: constrained-dynamics-shake-and-rattle-examples
title: Constrained dynamics shake and rattle — Examples
status: published
items: []
examples:
  - ex-constrained-pendulum-equations-and-multiplier
  - ex-rigid-bond-rattle-free-rotor
  - ex-nearly-dependent-constraints-amplify-rattle-residuals
  - ex-rattle-residual-budget-and-global-trajectory-drift
---

The examples compute RATTLE for a free rigid bond and derive the constrained multiplier for a pendulum. A pair of nearly dependent constraints shows how the multiplier Schur matrix loses uniform conditioning while each fixed system remains regular. The final example separates scaled solver residuals from their state error and gives the global accumulation envelope on a compact phase tube after local consistency restoration; a fixed residual tolerance alone does not certify convergence as the step is refined.
