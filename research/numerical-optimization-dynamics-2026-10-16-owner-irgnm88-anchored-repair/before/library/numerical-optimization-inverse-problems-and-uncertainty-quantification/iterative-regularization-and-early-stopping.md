---
page: iterative-regularization-and-early-stopping
title: "Iterative regularization and early stopping"
status: draft
items:
  - alg-landweber-iteration-with-discrepancy-stopping
  - alg-golub-kahan-lsqr-with-givens-and-status
  - lem-local-lipschitz-derivative-quadratic-remainder
  - alg-iteratively-regularized-gauss-newton-step
  - thm-lsqr-residual-minimizes-on-krylov-subspace
  - lem-landweber-filter-and-residual-identities
  - lem-irlgnm-one-step-error-recurrence
  - thm-irlgnm-local-source-condition-discrepancy-convergence
  - thm-landweber-source-and-noise-error-bounds
  - cor-landweber-discrepancy-stopped-convergence-rate
examples: []
---

Landweber iteration is given with an explicit discrepancy and finite-budget
status; its spectral-filter identities yield exact-data convergence, source
bias and noise bounds, then a source-conditioned discrepancy-stopping rate.
The page also defines exact-arithmetic Golub–Kahan LSQR and proves its
residual-minimization property on the generated Krylov space. For nonlinear
inverse problems it defines the assigned unanchored regularized Gauss–Newton
step and proves a local derivative-remainder estimate and one-step error
recurrence. The required nonlinear source-condition discrepancy theorem is
recorded as an explicitly unproved, owner-escalated draft target. The available
source-condition results use an anchored step, while the unanchored results
have different hypotheses; the current one-step recurrence does not prove
crossing or convergence.
