---
page: certified-stationary-distribution-and-hitting-statistic-numerics
title: "Certified stationary distribution and hitting statistic numerics"
status: published
items:
  - def-finite-column-stochastic-matrix-and-law
  - lem-finite-transient-block-geometric-escape
  - alg-finite-markov-closed-class-decomposition
  - lem-column-stochastic-l1-nonexpansive
  - thm-finite-transient-hitting-and-mean-exit-residual-bound
  - thm-irreducible-finite-class-has-unique-invariant-vector
  - lem-dobrushin-zero-sum-l1-coefficient
  - thm-finite-markov-closed-class-decomposition-correctness
  - alg-corrected-stationary-residual-certificate
  - thm-finite-chain-closed-class-cesaro-weight-decomposition
  - thm-m-step-dobrushin-stationary-residual-bound
  - thm-one-closed-class-augmented-stationary-system-is-nonsingular
  - thm-corrected-stationary-residual-certificate-soundness
  - cor-uniformized-generator-stationary-residual-certificate
  - thm-stationary-generator-solve-and-model-error-ledger
examples: []
---

This page certifies finite-state stationary laws and transient hitting statistics. Discrete-time laws use column probability vectors and column-stochastic P; the transpose of the published row-transition matrix gives this convention. Continuous-time laws use the finite column generator Q and a stochastic uniformization P=I+Q/ν.

The graph decomposition gives every closed class and the initial-law-dependent class weights. For a normalized candidate, the column-overlap coefficient of P^m supplies a computable zero-sum ℓ1 contraction; when q<1, the residual yields an explicit error bound. For a nonnormalized or negative raw vector $y$, the correction ledger applies when $s=\sum_i\max(y_i,0)>0$; if $s=0$, the procedure returns `candidate-unavailable` before constructing a corrected candidate or ledger. For a transient block, a finite-step escape probability proves the inverse exists, bounds its norm, and turns equation residuals into hitting-probability and mean-exit error bounds.

The stationary-candidate procedure takes exact rational P and y and computes the residual and overlap coefficient exactly; after confirming $y^+\ne0$, it returns `certificate-unavailable` when the exact contraction coefficient is at least one. The separate model-error ledger accepts exact residual values or caller-supplied certified outward upper bounds. These results make no claim that an arbitrary direct or Krylov solver converges. Reducible chains retain their closed-class weights; periodic chains need not converge under ordinary power iteration.
