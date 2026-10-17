---
page: certified-stationary-distribution-and-hitting-statistic-numerics
title: "Certified stationary distribution and hitting statistic numerics"
status: draft
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

The graph decomposition gives every closed class and the initial-law-dependent class weights. For a normalized candidate, the column-overlap coefficient of P^m supplies a computable zero-sum ℓ1 contraction; when q<1, the residual yields an explicit error bound. A correction ledger covers nonnormalized or negative raw vectors. For a transient block, a finite-step escape probability proves the inverse exists, bounds its norm, and turns equation residuals into hitting-probability and mean-exit error bounds.

The certificates take a candidate and certified residuals as inputs. They make no claim that an arbitrary direct or Krylov solver converges, and they return certificate-unavailable when the required contraction or outward arithmetic bound is not established. Reducible chains retain their closed-class weights; periodic chains need not converge under ordinary power iteration.
