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
  - lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds
  - alg-anchored-irgnm-with-discrepancy-stopping
  - lem-anchored-irgnm-fixed-reference-error-and-residual
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
recurrence. These unanchored local claims are retained separately from the anchored convergence theorem.

The nonlinear source/discrepancy theorem now applies to the separately defined anchored IRGNM method under explicit reference-factorization, source-smallness and discrepancy-factor conditions. It covers every source exponent between zero and one half, over real and complex Hilbert spaces, without a full-rank or finite-dimensional restriction. The unanchored LM procedure and its one-step identity/example remain valid separately; no unanchored stopped-convergence theorem is inferred from the anchored proof.
