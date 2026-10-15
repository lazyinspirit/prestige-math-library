---
page: gibbs-sampling-and-scan-schemes
title: Gibbs sampling and scan schemes
status: draft
items:
  - def-gibbs-full-conditional-kernel
  - def-gibbs-reversibility-for-a-markov-kernel
  - def-finite-markov-chain-reducible
  - cor-gibbs-density-formula-supplies-full-conditional-kernels
  - alg-gibbs-block-update
  - cor-bivariate-normal-full-conditional-kernels
  - lem-gibbs-block-update-is-a-probability-kernel
  - alg-gibbs-scan-schemes
  - lem-gibbs-block-refresh-is-conditionally-independent
  - lem-gibbs-block-update-is-reversible-and-invariant
  - lem-gibbs-scan-schemes-are-probability-kernels
  - thm-random-scan-gibbs-is-reversible-and-invariant
  - thm-systematic-gibbs-sweep-preserves-target
examples: []
---

## Summary

An exact Gibbs block update retains the unselected coordinates and draws the selected block from a supplied proper full conditional kernel. The kernel must be a pointwise probability kernel satisfying the conditional event identities; values on null conditioning fibres still need a probability-law version.

Each exact block update is reversible and invariant for the target. A random scan with fixed probabilities is a mixture of these kernels, so it remains reversible and invariant. A systematic scan composes the block kernels in its fixed order, so each full sweep preserves the target. The individual coordinate-update sequence has periodic, phase-indexed transition kernels and is generally time-inhomogeneous; sampling at full-sweep boundaries gives a homogeneous kernel.

Systematic composition need not preserve reversibility. Invariance alone supplies no irreducibility, uniqueness, or convergence rate. A constrained support can make single-site Gibbs reducible, as the companion examples show. Density-based full conditionals use normalized sections only where the marginal density is finite and positive; exceptional fibres require a supplied filler probability.

