---
page: randomized-low-rank-approximation
title: Randomized low-rank approximation
status: published
items:
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - lem-orthogonal-projector-power-error-inequality
  - lem-gaussian-matrix-law-normalization-and-second-moments
  - alg-gaussian-randomized-range-finder
  - lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
  - lem-finite-real-gaussian-increment-comparison
  - lem-finite-scan-range-basis-is-borel
  - alg-randomized-power-subspace-iteration-with-qr
  - lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
  - lem-real-scaled-gaussian-product-expectation
  - lem-randomized-rangefinder-deterministic-svd-partition-error
  - lem-power-rangefinder-projector-is-borel
  - thm-randomized-power-rangefinder-error-transfer
  - lem-wide-gaussian-pseudoinverse-frobenius-moments
  - lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail
  - lem-normalized-complex-gaussian-block-affine-spectral-second-moments
  - lem-normalized-complex-rangefinder-direct-spectral-expectation
  - thm-real-gaussian-rangefinder-expected-spectral-error
  - thm-gaussian-rangefinder-expected-spectral-error
  - thm-real-gaussian-power-rangefinder-expected-error
  - thm-gaussian-power-rangefinder-expected-error
examples: []
---

This page develops the exact Gaussian range finder over real and normalized
complex fields and the QR-reorthogonalized power procedure. The assigned items
give deterministic SVD-partition and local Gaussian-moment arguments for the
expected spectral-error bounds. These are expectation statements, not per-draw
guarantees or embedding results. The complex power estimate reduces to the base
estimate on $(AA^*)^qA$ and the projector-power transfer. The procedures assume
exact arithmetic and make no finite-precision stability claim.
