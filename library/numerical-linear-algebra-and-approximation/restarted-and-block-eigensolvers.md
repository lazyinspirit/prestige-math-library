---
page: restarted-and-block-eigensolvers
title: "Restarted and block eigensolvers"
status: published
items:
  - alg-thick-and-implicitly-restarted-arnoldi-with-locking
  - thm-implicit-restart-polynomial-subspace-and-residual-identity
  - alg-block-lobpcg-with-rank-loss-status
  - thm-finite-budget-restarted-and-block-procedures-return-a-status
  - lem-generalized-ritz-values-monotone-under-nested-subspaces
  - lem-block-principal-angle-squared-ritz-enclosure
  - thm-lobpcg-selected-ritz-values-do-not-increase
  - alg-shift-invert-and-harmonic-ritz-extraction
  - thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status
  - thm-shift-invert-map-and-inexact-solve-residual-transfer
examples: []
---

This page defines finite-budget thick and implicit Arnoldi restarts, with normalized Ritz vectors, residual-based acceptance, retained locked directions, and explicit breakdown statuses. It proves the exact shift-polynomial subspace and residual identities, but makes no convergence claim for arbitrary shifts. It also develops block LOBPCG for Hermitian-definite pencils, including exact rank-revealing B-orthogonalization, finite Rayleigh-Ritz updates, variational nonincrease, and a one-shot principal-angle enclosure for the selected Ritz block. Shift-invert requires an invertible shifted solve; harmonic extraction uses its projected pencil and explicit singular branch. Both preserve their residual and perturbation ledgers without claiming forward accuracy from a small residual alone. The termination results prove finite status return under finite-return primitive calls; the shift-invert and harmonic result additionally depends on the finite-budget QZ termination proposition.
